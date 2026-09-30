#!/usr/bin/env python3
"""
Step 3 of the bunker light bake: denoise, fill, encode.

    python3 scripts/bunker-bake/encode.py <work-dir> <blender-lib-dir> <out-dir>

Reads bake.py's output and writes the shipped assets to <out-dir>:
  bunker-lit.pack     gzip of bunker-lit.bin: the bunker geometry with lightmap UVs (format below)
  lm_indirect.ktx2    bounced irradiance, RGB = sqrt(E / scale), UASTC, mips
  lm_ao.ktx2          R = ambient occlusion, G = fixed-lamp shadow mask, UASTC, mips

bunker-lit.bin: u32 headerBytes | header JSON | per mesh, 4-byte aligned:
  f32 pos[3n] | i8 nor[4n] | f32 uv[2n] | u16 lm[2n] | u8 surf[4n] (sRGB tint, finish) | u16|u32 idx[m]
Needs numpy, Pillow and toktx (KTX-Software 4.4) on PATH.
"""
import gzip, json, os, struct, subprocess, sys
import numpy as np
from PIL import Image

sys.path.insert(0, os.path.dirname(__file__))
from oidn import denoise_lightmap

work, blib, out = sys.argv[1:4]
os.makedirs(out, exist_ok=True)


def push_pull(img, mask):
    """Fill every texel outside the islands from its nearest islands, so bilinear taps and mips never pull in black."""
    img = img.astype(np.float32)
    w = mask.astype(np.float32)
    levels = []
    cur, cw = img * w[..., None], w
    while min(cur.shape[:2]) > 1:
        levels.append((cur, cw))
        h2, w2 = cur.shape[0] // 2, cur.shape[1] // 2
        cur = cur[:h2 * 2, :w2 * 2].reshape(h2, 2, w2, 2, -1).sum((1, 3))
        cw = cw[:h2 * 2, :w2 * 2].reshape(h2, 2, w2, 2).sum((1, 3))
    fill = cur / np.maximum(cw, 1e-6)[..., None]
    for c, cw_ in reversed(levels):
        up = np.repeat(np.repeat(fill, 2, 0), 2, 1)[:c.shape[0], :c.shape[1]]
        have = cw_ > 1e-6
        fill = np.where(have[..., None], c / np.maximum(cw_, 1e-6)[..., None], up)
    return fill


def toktx(dst, src):
    subprocess.run(['toktx', '--encode', 'uastc', '--uastc_quality', '2', '--zcmp', '18', '--genmipmap',
                    '--assign_oetf', 'linear', '--assign_primaries', 'none', dst, src], check=True)


# ── Indirect: denoise inside islands, fill, sqrt-encode ─────────────────────
ind = np.load(os.path.join(work, 'lm_indirect.npy'))
mask = np.load(os.path.join(work, 'lm_indirect_mask.npy'))
ind = np.where(mask[..., None], ind, 0)
ind = push_pull(ind, mask)  # denoiser sees continuous data, no black gutters to bleed in
ind = np.maximum(denoise_lightmap(ind, blib), 0)
ind = push_pull(ind, mask)
scale = float(np.percentile(ind[mask].max(-1), 99.7))
enc = np.sqrt(np.clip(ind / scale, 0, 1))
# Image row 0 is Blender's bottom row (v = 0); KTX2 upper-left origin uploads it as t = 0 too.
Image.fromarray((enc * 255 + .5).astype(np.uint8), 'RGB').save(os.path.join(work, 'lm_indirect.png'))
toktx(os.path.join(out, 'lm_indirect.ktx2'), os.path.join(work, 'lm_indirect.png'))
print(f'indirect: scale {scale:.3f}, median {np.median(ind[mask]):.4f}')

# ── Ambient occlusion ───────────────────────────────────────────────────────
ao = np.load(os.path.join(work, 'lm_ao.npy'))
amask = np.load(os.path.join(work, 'lm_mask.npy'))
ao = push_pull(ao[..., None], amask)
ao = np.clip(denoise_lightmap(np.repeat(ao, 3, -1), blib)[..., 0], 0, 1)[..., None]
ao = push_pull(ao, amask)[..., 0]
# Shadow mask of the fixed lamps: shadowed over unshadowed direct light (both denoised first).
shad = np.maximum(denoise_lightmap(push_pull(np.load(os.path.join(work, 'lm_direct_shadowed.npy')), amask), blib), 0)
free = np.maximum(denoise_lightmap(push_pull(np.load(os.path.join(work, 'lm_direct_free.npy')), amask), blib), 0)
lum = lambda x: x @ np.array([.2126, .7152, .0722], np.float32)
ls, lf = lum(shad), lum(free)
sm = np.where(lf > 1e-3, np.clip(ls / np.maximum(lf, 1e-6), 0, 1), 1)
sm = push_pull(sm[..., None], amask)[..., 0]
print(f'shadow mask: median {np.median(sm[amask]):.3f}, shadowed texels {(sm[amask] < .5).mean() * 100:.1f}%')
aos = np.stack([np.clip(ao, 0, 1), sm, np.clip(ao, 0, 1)], -1)
Image.fromarray((aos * 255 + .5).astype(np.uint8), 'RGB').save(os.path.join(work, 'lm_ao.png'))
toktx(os.path.join(out, 'lm_ao.ktx2'), os.path.join(work, 'lm_ao.png'))
print(f'ao: median {np.median(ao[amask]):.3f}')

# ── Geometry ────────────────────────────────────────────────────────────────
head = json.load(open(os.path.join(work, 'lit-geometry.json')))
data = np.load(os.path.join(work, 'lit-geometry.npz'))
def srgb(c): return np.where(c <= .0031308, c * 12.92, 1.055 * np.power(np.clip(c, 0, 1), 1 / 2.4) - .055)
blobs, recs = [], []
def pad(b): return b + b'\0' * ((4 - len(b) % 4) % 4)
for i, m in enumerate(head['meshes']):
    v, ix = data[f'v{i}'], data[f'i{i}']
    pos, nor, uv, lm, sf = v[:, 0:3], v[:, 3:6], v[:, 6:8], v[:, 8:10], v[:, 10:14]
    n = len(v)
    nor8 = np.zeros((n, 4), np.int8)
    nn = nor / np.maximum(np.linalg.norm(nor, axis=1, keepdims=True), 1e-9)
    nor8[:, :3] = np.round(nn * 127).astype(np.int8)
    lm16 = np.round(np.clip(lm, 0, 1) * 65535).astype(np.uint16)
    s8 = np.zeros((n, 4), np.uint8)
    s8[:, :3] = np.round(srgb(sf[:, :3]) * 255).astype(np.uint8)
    s8[:, 3] = np.round(sf[:, 3]).astype(np.uint8)
    wide = n > 65535
    idx = ix.astype(np.uint32 if wide else np.uint16)
    blobs += [pos.astype('<f4').tobytes(), nor8.tobytes(), uv.astype('<f4').tobytes(), pad(lm16.astype('<u2').tobytes()), s8.tobytes(), pad(idx.astype('<u4' if wide else '<u2').tobytes())]
    recs.append({'bucket': m['bucket'], 'key': m['key'], 'lm': m['lm'], 'vertices': n, 'indices': len(ix), 'wide': wide})
header = {'version': 1, 'signature': head['signature'], 'lmScale': scale, 'size': head['size'], 'aoSize': head['aoSize'], 'meshes': recs}
hj = json.dumps(header, separators=(',', ':')).encode()
hj += b' ' * ((4 - len(hj) % 4) % 4)
body = b''.join(blobs)
raw = struct.pack('<I', len(hj)) + hj + body
with open(os.path.join(out, 'bunker-lit.pack'), 'wb') as f:
    f.write(gzip.compress(raw, compresslevel=9, mtime=0))
print(f"bunker-lit.pack: {len(recs)} meshes, {sum(r['vertices'] for r in recs)} vertices, {len(raw) / 1e6:.1f} MB raw, {os.path.getsize(os.path.join(out, 'bunker-lit.pack')) / 1e6:.1f} MB gzip")
