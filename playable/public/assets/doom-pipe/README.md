# 04_DOOM_pipe (detail)

Sketchfab “04_DOOM_pipe (detail)” by gleb_tihon (@gleb_tihon)
https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9
https://sketchfab.com/gleb_tihon

License: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/
(Author must be credited. Commercial use is allowed.)

This work is based on "04_DOOM_pipe (detail)" by gleb_tihon, licensed under CC-BY-4.0.

First Dive ships:
- `doom_pipe.glb` — the official Sketchfab glTF (793,868 triangles, 25 MB, untextured PBR
  colour factors) welded, simplified to ~49k triangles and meshopt-compressed (~0.5 MB) with
  gltf-transform 4.5 (`weld` → `simplify --ratio 0.06 --error 0.002` → `meshopt`). All parts kept:
  main riser, clamp collar, hand-wheel valve, bracket frame and bypass loop.

Wired in `src/pipeAsset.ts`; stands floor to roof against the blind south wall of the far
south-west cavern corner (not interactable).
