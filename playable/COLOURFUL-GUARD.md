# Colourful civilian integration — v0.24.2

Original model created for the approved faceless civilian direction: coral jacket, cyan collar/cuffs, turquoise trousers, purple hair and cream/yellow shoes. This is a prototype interpretation of the concept, not an image-to-model conversion. No purchased Unity character is used.

- `public/assets/colourful-guard/civilian.glb`: ~762 KB, 12,384 indexed triangles, one texture-free smooth-shaded vertex-colour MeshPhysicalMaterial with soft sheen, 23 bones, embedded idle/walk/run clips. v0.24.2 welds verts before normals (fixes faceted face-normals), densifies torso/limbs, rounds collar/zipper, and softens the rifle prop. Global DPR/MSAA caps are unchanged.
- `scripts/build-colourful-guard.mjs`: reproducible original geometry and skin weights. Reuses the shipped CC0 Quaternius skeleton and gait clips; the original soldier and all existing combat-animation credits remain.
- Existing guard AI, damage, hit detection, knife attacks, hit/death clips, spawn/restart and distance cadence continue through `SovietGuardVisual` (API name retained). There is no new hammer enemy in this slice.
- Original low-poly rifle uses the existing ranged combat rules. Its support-hand stance and muzzle attachment differ from the previous pistol prop; firing damage/rate are unchanged.
- Geometry is shared between enemies; skeletons, mixers and hit-flash materials are independent.

## Validation

Integrated against main `3f7573f`, including its latest catwalk additions. Production TypeScript/Vite build passes. Chrome browser fixture checks the actual loaded model, all seven presentation states (idle, walk, run, aim, hit, stab, death), independent instance state, rifle hand/muzzle attachment, and an actual bunker render. No page errors were reported. New unit tests inspect weights, the full animated skin bounds and cloned skeletons. Measured gait speeds at the new model scale are 1.205 m/s walk and 3.049 m/s run, used to preserve foot contact timing.

Full suite: 431 / 435 pass. The same four failures reproduce against unchanged `3f7573f`: physics-reality's hard-coded `/opt/cursor/artifacts` write is denied on this Mac; guard search scanning; the pre-existing 2.15 m/s walk/run expectation; and scripted survival mission completion. These are not new character regressions.

Run the visual check against Vite with `node tests/colourful-guard-browser.cjs` from `playable` (set `PLAYWRIGHT_MODULE` if Playwright is not installed locally, and `GAME_URL` if the dev server is not on port 5190). Screenshots are written to `/tmp/colourful-character-{idle,aim,bunker}.png`. The fixture changes only its isolated browser sessions.
