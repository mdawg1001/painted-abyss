# Bunker light bake

Bakes the bounced light and ambient occlusion of the Soviet bunker into lightmaps, offline, in
Blender's Cycles path tracer. The game keeps its lamps real time (they swing, flicker and turn red
on the relic slam); the bake adds what real-time lights can't: light bouncing off the whitewash,
colour bleeding off the painted walls and floor, and occlusion in every corner and under every
pipe, beam and crate.

```
BLENDER=/path/to/blender-4.2/blender scripts/bunker-bake/run.sh
```

Needs Blender 4.2 LTS, Node, Python 3 with numpy and Pillow, and `toktx` (KTX-Software 4.4).
About 20 minutes on two CPU cores.

1. `export.ts` builds the bunker exactly as the game does (same layout, keepouts, kit and
   stencils), flags faces that look into rock, and writes it with the static lamps
   (`lights.json`, dumped from a running dive by `dump-lights.cjs`) and the solid props that
   shadow the floor (cover, chests, radiators, the relic plinth).
2. `bake.py` (inside Blender) unwraps one shared lightmap over every visible face, calibrates
   Cycles against three.js light units (1 cd at 1 m bakes to exactly 1), and bakes indirect
   diffuse at 1024² and ambient occlusion at 2048².
3. `encode.py` denoises both with Open Image Denoise (the copy inside Blender), fills the gutters
   between islands so mips don't bleed, and writes `public/assets/soviet-bunker-kit/baked/`:
   `bunker-lit.pack` (gzip'd geometry with lightmap UVs), `lm_indirect.ktx2`, `lm_ao.ktx2`.

The bake carries a signature of the layout and kit. If they change without a rebake, the game
falls back to the unbaked kit and `tests/bunker-lightmap.test.ts` fails.
