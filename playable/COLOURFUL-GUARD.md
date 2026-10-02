# Colourful civilian integration — v0.24.9

Original cartoon civilians inspired by stickman-civilian packs (art reference only): pure-red jacket, pure-blue collar/cuffs and trousers and cream/yellow shoes. Blank faces. Six designed archetypes — not random mixes. No purchased Unity character is used.

| Slot | Look |
|------|------|
| Lanky | Tall/narrow, side-part |
| Sturdy | Short/stocky, curls |
| Broad | Wide, bald |
| Slim | Upright, bob |
| Scruffy | Soft belly (deeper torso scale), messy hair, slouch |
| Athletic | Ponytail, swagger |
| Pigtail | Female enemy — blue pigtails |
| PigtailTall | Female enemy — tall blue pigtails |

- `public/assets/colourful-guard/civilian.glb`: shared body + five hair kits on the Quaternius CC0 skeleton, embedded idle/walk/run clips.
- `src/guardArchetypes.ts`: silhouette scales, hair id, skin tone, idle posture bias.
- Runtime: hair visibility + skin remap on the skinned clone; **width/height/depth on `visual.root` only** (safe with locomotion scale tracks).
- `scripts/build-colourful-guard.mjs`: reproducible original geometry.
- Olive `tintGuardOutfit` dyes are skipped for colourful guards so the stark red/blue kit stays shared.

## Validation

Production TypeScript/Vite build. Unit tests cover archetype table, hair selection, skin remap, outer-root scale, gait bounds and cloned skeletons.
