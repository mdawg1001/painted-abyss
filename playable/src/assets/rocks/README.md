# Poly Haven rock textures (CC0)

Downloaded from [Poly Haven](https://polyhaven.com) — public domain (CC0).

| Folder | Asset | Use |
|---|---|---|
| `rock_face_03/` | [Rock Face 03](https://polyhaven.com/a/rock_face_03) | Cave walls / ceiling / rock relief |
| `dry_riverbed_rock/` | [Dry Riverbed Rock](https://polyhaven.com/a/dry_riverbed_rock) | Cave floor |
| `mossy_rock/` | [Mossy Rock](https://polyhaven.com/a/mossy_rock) | Moss overlay blended onto rock / floor |

Maps: `diff.ktx2` (sRGB albedo), `nor.ktx2` (linear OpenGL normal), `arm.ktx2` (linear AO / Roughness / Metallic).
Resolution: 2048², UASTC in KTX2, full mip chain. The GPU transcodes them to a compressed format (BC7 / ASTC) instead of expanding the old JPEGs to RGBA.

Regenerate with `toktx` (KTX-Software 4.4), from each JPEG, `--lower_left_maps_to_s0t0` so the dive matches the previous `flipY` upload:

```
toktx --encode uastc --uastc_quality 2 --zcmp 18 --genmipmap --lower_left_maps_to_s0t0 \
  --assign_oetf srgb --assign_primaries bt709 diff.ktx2 diff.jpg
toktx --encode uastc --uastc_quality 2 --zcmp 18 --genmipmap --lower_left_maps_to_s0t0 \
  --assign_oetf linear --assign_primaries none --normal_mode --input_swizzle rgb1 --normalize nor.ktx2 nor.jpg
toktx --encode uastc --uastc_quality 2 --zcmp 18 --genmipmap --lower_left_maps_to_s0t0 \
  --assign_oetf linear --assign_primaries none arm.ktx2 arm.jpg
```

`--input_swizzle rgb1` keeps the normal in RGB. The shader still reads `.xyz`.
