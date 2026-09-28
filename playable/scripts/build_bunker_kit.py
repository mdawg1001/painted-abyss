#!/usr/bin/env python3
"""
Build the Soviet bunker kit from Quaternius's Modular Sci-Fi MegaKit (CC0).

    python3 scripts/build_bunker_kit.py "<MegaKit>/glTF" "<MegaKit>/Textures" public/assets/soviet-bunker-kit

Needs numpy, Pillow and `toktx` (KTX-Software 4.4) on PATH.

Geometry: the chosen pieces, flattened (node transforms applied) into one little binary:
  u32 headerBytes | header JSON (utf-8, space padded to 4) | f32 pos[3n] | f32 nor[3n] | f32 uv[2n] | u16 idx[m]
Every primitive keeps the name of its kit material slot. The game maps a slot to one of three
trim sheets (T1..T3) or to "none", and paints it Soviet at runtime, so no kit colour ships.
Decal, light, glass and alien slots are dropped.

Textures: per trim sheet, a tangent-space normal map and a packed "ORD" map
(R = ambient occlusion, G = roughness, B = the kit's albedo luminance, used as grime detail),
1024², UASTC KTX2 with mips, upper-left origin to match glTF UVs.
"""
import json, os, struct, subprocess, sys
import numpy as np
from PIL import Image

PIECES = [
    # walls, bottom to top (4 m wide, on the tile's -x edge)
    'WallAstra_Straight_Flat', 'ShortWall_WhitePlate2_Straight', 'ShortWall_Simple1_Straight',
    'ShortWall_MetalPlates_Straight', 'TopCables_Straight', 'TopCables_Straight_Hanging', 'TopSimple_Straight',
    # floors (4 x 4)
    'Platform_Simple', 'Platform_Metal2', 'Platform_Squares',
    # structure
    'Door_Frame_Square', 'Column_Simple',
    # props
    'Prop_Barrel_Large', 'Prop_Vent_Big', 'Prop_Vent_Wide', 'Prop_Vent_Small', 'Prop_PipeHolder',
    'Prop_Cable_1', 'Prop_Cable_3', 'Prop_Fan_Small', 'Prop_Fan_Small_Propeller', 'Prop_Crate3', 'Prop_Clamp',
]
DROP = ('Decal', 'M_Light', 'M_Glass', 'LightFade')
SHEETS = {'T1': 'T_Trim_01', 'T2': 'T_Trim_02', 'T3': 'T_Trim_03'}
SIZE = 1024
COMPTYPE = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
NCOMP = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}


def quat_mat(q):
    x, y, z, w = q
    return np.array([
        [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
        [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
        [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)],
    ])


def node_matrix(n):
    if 'matrix' in n:
        return np.array(n['matrix'], dtype=np.float64).reshape(4, 4).T
    m = np.eye(4)
    s = np.array(n.get('scale', [1, 1, 1]))
    m[:3, :3] = quat_mat(n.get('rotation', [0, 0, 0, 1])) * s
    m[:3, 3] = n.get('translation', [0, 0, 0])
    return m


def accessor(g, bins, i):
    a = g['accessors'][i]
    v = g['bufferViews'][a['bufferView']]
    dt = COMPTYPE[a['componentType']]
    nc = NCOMP[a['type']]
    buf = bins[v['buffer']]
    off = v.get('byteOffset', 0) + a.get('byteOffset', 0)
    stride = v.get('byteStride', 0) or np.dtype(dt).itemsize * nc
    raw = np.frombuffer(buf, dtype=np.uint8, count=stride * (a['count'] - 1) + np.dtype(dt).itemsize * nc, offset=off)
    out = np.lib.stride_tricks.as_strided(raw.view(dt) if stride % np.dtype(dt).itemsize == 0 else raw,
                                          shape=(a['count'], nc), strides=(stride, np.dtype(dt).itemsize))
    out = np.array(out, dtype=np.float64 if dt == np.float32 else np.int64)
    if a.get('normalized'):
        out = out / float(np.iinfo(dt).max)
    return out if nc > 1 else out[:, 0]


def load_piece(gltf_dir, name):
    path = os.path.join(gltf_dir, name + '.gltf')
    g = json.load(open(path))
    bins = [open(os.path.join(gltf_dir, b['uri']), 'rb').read() for b in g['buffers']]
    prims = []

    def walk(ni, parent):
        n = g['nodes'][ni]
        m = parent @ node_matrix(n)
        if 'mesh' in n:
            nm = np.linalg.inv(m[:3, :3]).T
            for p in g['meshes'][n['mesh']]['primitives']:
                slot = g['materials'][p['material']]['name']
                if any(d in slot for d in DROP):
                    continue
                pos = accessor(g, bins, p['attributes']['POSITION'])
                nor = accessor(g, bins, p['attributes']['NORMAL'])
                uv = accessor(g, bins, p['attributes']['TEXCOORD_0']) if 'TEXCOORD_0' in p['attributes'] else np.zeros((len(pos), 2))
                idx = accessor(g, bins, p['indices']).astype(np.int64)
                pos = pos @ m[:3, :3].T + m[:3, 3]
                nor = nor @ nm.T
                nor /= np.maximum(np.linalg.norm(nor, axis=1, keepdims=True), 1e-9)
                if np.linalg.det(m[:3, :3]) < 0:
                    idx = idx.reshape(-1, 3)[:, ::-1].reshape(-1)
                prims.append({'slot': slot, 'pos': pos, 'nor': nor, 'uv': uv, 'idx': idx})
        for c in n.get('children', []):
            walk(c, m)

    for r in g['scenes'][g.get('scene', 0)]['nodes']:
        walk(r, np.eye(4))
    # One primitive per slot per piece.
    merged = {}
    for p in prims:
        d = merged.setdefault(p['slot'], {'pos': [], 'nor': [], 'uv': [], 'idx': [], 'n': 0})
        d['idx'].append(p['idx'] + d['n'])
        d['n'] += len(p['pos'])
        for k in ('pos', 'nor', 'uv'):
            d[k].append(p[k])
    return {s: {k: np.concatenate(v) for k, v in d.items() if k != 'n'} for s, d in merged.items()}


def build_geometry(gltf_dir, out_dir):
    header = {'version': 1, 'pieces': {}}
    P, N, U, I = [], [], [], []
    vbase = ibase = 0
    for name in PIECES:
        piece = load_piece(gltf_dir, name)
        lo = np.min([d['pos'].min(0) for d in piece.values()], axis=0)
        hi = np.max([d['pos'].max(0) for d in piece.values()], axis=0)
        entry = {'min': [round(float(v), 4) for v in lo], 'max': [round(float(v), 4) for v in hi], 'prims': []}
        for slot, d in piece.items():
            n = len(d['pos'])
            assert n < 65536, (name, slot, n)
            entry['prims'].append({'slot': slot, 'v0': vbase, 'vn': n, 'i0': ibase, 'in': len(d['idx'])})
            P.append(d['pos']); N.append(d['nor']); U.append(d['uv']); I.append(d['idx'])
            vbase += n; ibase += len(d['idx'])
        header['pieces'][name] = entry
    header['vertices'] = vbase
    header['indices'] = ibase
    hj = json.dumps(header, separators=(',', ':')).encode()
    hj += b' ' * ((4 - len(hj) % 4) % 4)
    blob = b''.join([
        np.concatenate(P).astype(np.float32).tobytes(),
        np.concatenate(N).astype(np.float32).tobytes(),
        np.concatenate(U).astype(np.float32).tobytes(),
        np.concatenate(I).astype(np.uint16).tobytes(),
    ])
    with open(os.path.join(out_dir, 'kit.bin'), 'wb') as f:
        f.write(struct.pack('<I', len(hj)) + hj + blob)
    tris = ibase // 3
    print(f'kit.bin: {len(PIECES)} pieces, {vbase} vertices, {tris} triangles, {(4 + len(hj) + len(blob)) / 1024:.0f} KB')


def toktx(args, dst, src):
    subprocess.run(['toktx', '--encode', 'uastc', '--uastc_quality', '2', '--zcmp', '18', '--genmipmap',
                    '--assign_primaries', 'none', '--assign_oetf', 'linear', *args, dst, src], check=True)


def build_textures(tex_dir, out_dir, tmp):
    os.makedirs(tmp, exist_ok=True)
    for key, stem in SHEETS.items():
        nor = Image.open(os.path.join(tex_dir, stem + '_Normal.png')).convert('RGB').resize((SIZE, SIZE), Image.LANCZOS)
        orm = np.asarray(Image.open(os.path.join(tex_dir, stem + '_ORM.png')).convert('RGB').resize((SIZE, SIZE), Image.LANCZOS))
        base = Image.open(os.path.join(tex_dir, stem + '_BaseColor.png')).convert('L').resize((SIZE, SIZE), Image.LANCZOS)
        ord_ = np.dstack([orm[..., 0], orm[..., 1], np.asarray(base)]).astype(np.uint8)
        np_path = os.path.join(tmp, key + '_nor.png')
        ord_path = os.path.join(tmp, key + '_ord.png')
        nor.save(np_path)
        Image.fromarray(ord_).save(ord_path)
        # Plain linear RGB: three reads the normal from .xyz.
        toktx([], os.path.join(out_dir, key.lower() + '_nor.ktx2'), np_path)
        toktx([], os.path.join(out_dir, key.lower() + '_ord.ktx2'), ord_path)
        print('textures', key)


if __name__ == '__main__':
    gltf_dir, tex_dir, out_dir = sys.argv[1:4]
    os.makedirs(out_dir, exist_ok=True)
    build_geometry(gltf_dir, out_dir)
    build_textures(tex_dir, out_dir, os.path.join(out_dir, '.tmp'))
    for f in os.listdir(os.path.join(out_dir, '.tmp')):
        os.remove(os.path.join(out_dir, '.tmp', f))
    os.rmdir(os.path.join(out_dir, '.tmp'))
