# 04_DOOM_pipe (detail)

Sketchfab “04_DOOM_pipe (detail)” by gleb_tihon (@gleb_tihon)
https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9
https://sketchfab.com/gleb_tihon

License: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/
(Author must be credited. Commercial use is allowed.)

This work is based on "04_DOOM_pipe (detail)" by gleb_tihon, licensed under CC-BY-4.0.

First Dive ships:
- `doom_pipe.glb` — the official Sketchfab glTF (793,868 triangles, 25 MB, untextured PBR
  colour factors) rebuilt by `playable/scripts/build-doom-pipe.mjs` (gltf-transform 4.5 +
  meshoptimizer): node transforms baked, the red hand-wheel (spokes, hub, rim and its rim face)
  split into its own node `valveWheel` pivoted on the spin axis, the rest kept as `pipeBody`;
  body simplified to 6 % and the wheel to 30 % (it fills the view while it is turned), then
  meshopt-compressed (~0.5 MB, ~67k triangles). Every part is kept: main riser, clamp collar,
  gate valve and stem, bracket frame and bypass loop.

Wired in `src/pipeAsset.ts` and `src/valve.ts`: stands against the blind south wall of the far
south-west cavern corner, scaled so the handwheel is a real ~0.31 m wheel at chest height, with a
plain run of the same green pipe up into the roof. Holding E at the wheel turns the gate valve
shut hand over hand and stops the bunker leak.
