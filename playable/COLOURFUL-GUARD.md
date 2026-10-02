# Colourful civilian integration — v0.24.4

Original cartoon civilians inspired by stickman-civilian packs (art reference only): coral jacket, cyan collar/cuffs, turquoise trousers and cream/yellow shoes. Blank faces. Six designed archetypes — not random mixes. No purchased Unity character is used.

- `public/assets/colourful-guard/civilian.glb`: shared body + five hair kits on the Quaternius CC0 skeleton, embedded idle/walk/run clips.
- `src/guardArchetypes.ts`: lanky / sturdy / broad / slim / scruffy / athletic — silhouette scales, hair id, skin tone, idle posture bias.
- `scripts/build-colourful-guard.mjs`: reproducible original geometry. Reuses the shipped CC0 skeleton and gait clips.
- Olive `tintGuardOutfit` dyes are skipped for colourful guards so the coral kit stays shared.
- Existing guard AI, damage, hit detection, knife attacks, hit/death clips, spawn/restart and distance cadence continue through `SovietGuardVisual` (API name retained).

## Validation

Production TypeScript/Vite build. Unit tests cover archetype table, hair selection, skin remap, weights, gait bounds and cloned skeletons.

Run the visual check with `node tests/colourful-guard-browser.cjs` from `playable` when Playwright is available.
