# Soviet bunker kit

Built from **Modular Sci-Fi MegaKit** by [Quaternius](https://quaternius.com) (Standard edition), released under **CC0 1.0** (public domain). See `LICENSE-Quaternius.txt`.

Only the industrial pieces ship: wall panels, plaster plates, cable trays, floor plates, a door frame and a few props (drums, vents, cable coils). The aliens, hex panels, sci-fi doors, screens, decals, lights and glass are left out. No kit colour ships either: the game repaints every surface Soviet at runtime (`playable/src/sovietBunker.ts`).

| File | Contents |
|---|---|
| `kit.bin` | 23 pieces, node transforms applied, one primitive per kit material slot (positions, normals, UVs, 16-bit indices, JSON header) |
| `t1_nor.ktx2`, `t2_nor.ktx2`, `t3_nor.ktx2` | Trim sheet normal maps, 1024², linear, UASTC, mips |
| `t1_ord.ktx2`, `t2_ord.ktx2`, `t3_ord.ktx2` | R = ambient occlusion, G = roughness, B = kit albedo luminance (grime detail), 1024², UASTC, mips |

Regenerate from the downloaded kit (needs numpy, Pillow and `toktx` from KTX-Software 4.4):

```
python3 playable/scripts/build_bunker_kit.py "<MegaKit>/glTF (flattened)" "<MegaKit>/Textures" playable/public/assets/soviet-bunker-kit
```

The first argument is a folder holding every piece's `.gltf` and `.bin` side by side (the kit ships them in category subfolders; copy them into one folder first).
