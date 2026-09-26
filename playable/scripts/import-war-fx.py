"""
Convert Unity Asset Store packs into web-ready textures for Painted Abyss.

Sources (downloaded through Unity Package Manager > My Assets; cached by Unity at
~/Library/Unity/Asset Store-5.x/): War FX (Jean Moreno) and Crosshairs (OccaSoftware).
Both are third-party packs under the standard Unity Asset Store EULA (not Unity Companion
License), which allows use in a game built with another engine.

A .unitypackage is a gzipped tar of <guid>/{pathname,asset,asset.meta}; this reads it directly.

Usage: python3 scripts/import-war-fx.py "<War FX.unitypackage>" "<Crosshairs.unitypackage>"
"""
import io, os, sys, tarfile
from PIL import Image, ImageChops

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'assets')

def unpack(pkg):
    t = tarfile.open(pkg, 'r:gz'); by = {}
    for m in t.getmembers():
        parts = m.name.strip('./').split('/')
        if len(parts) == 2: by.setdefault(parts[0], {})[parts[1]] = m
    files = {}
    for g, f in by.items():
        if 'pathname' in f and 'asset' in f:
            path = t.extractfile(f['pathname']).read().decode().splitlines()[0].strip()
            files[path] = t.extractfile(f['asset']).read()
    return files

def card(data, size=None):
    """White RGB, shape in alpha: the additive cards take their colour from the material tint."""
    im = Image.open(io.BytesIO(data))
    shape = ImageChops.multiply(im.convert('L'), im.split()[3]) if im.mode == 'RGBA' else im.convert('L')
    out = Image.merge('RGBA', (Image.new('L', shape.size, 255),) * 3 + (shape,))
    return out.resize((size, size), Image.LANCZOS) if size else out

def main(warfx, crosshairs):
    w = unpack(warfx); T = 'Assets/JMO Assets/WarFX/Desktop/Textures/'
    d = os.path.join(OUT, 'war_fx'); os.makedirs(d, exist_ok=True)
    for i in (1, 2, 3):
        card(w[T + f'MuzzleFlashes/WFX_T_MF FrontRear RIFLE{i} A8.png'], 128).save(f'{d}/muzzle_front_{i}.png', optimize=True)
        card(w[T + f'MuzzleFlashes/WFX_T_MF Sparks RIFLE{i} A8.tga'], 128).save(f'{d}/muzzle_sparks_{i}.png', optimize=True)
    Image.open(io.BytesIO(w[T + 'Bullet Holes/WFX_T_BulletHoles Concrete.tga'])).convert('RGBA').save(f'{d}/bullet_holes_concrete.png', optimize=True)
    Image.open(io.BytesIO(w[T + 'Bullet Holes/WFX_T_BulletHoles Metal.tga'])).convert('RGBA').save(f'{d}/bullet_holes_metal.png', optimize=True)
    Image.open(io.BytesIO(w[T + 'Smoke/WFX_T_SmokeLoopAlpha.tga'])).convert('RGBA').save(f'{d}/smoke_puff.png', optimize=True)
    card(w[T + 'Misc/WFX_T_GlowCircle A8.png']).save(f'{d}/glow_circle.png', optimize=True)
    c = unpack(crosshairs); C = 'Assets/OccaSoftware/Crosshairs/Art/Textures/'
    d = os.path.join(OUT, 'crosshairs'); os.makedirs(d, exist_ok=True)
    for n in ('03', '27'):
        Image.open(io.BytesIO(c[C + f'Crosshair_{n}.png'])).convert('RGBA').resize((128, 128), Image.LANCZOS).save(f'{d}/crosshair_{n}.png', optimize=True)

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
