# Colourful civilian integration — v0.24.12

Original cartoon enemy guards inspired by stickman-civilian packs (art reference only): pure-red jacket, pure-blue collar/cuffs and trousers and cream/yellow shoes. Blank faces. Eight designed archetypes with a hairstyle makeover. No purchased Unity character is used.

| Slot | Look |
|------|------|
| Lanky | Tall/narrow, short spiky |
| Sturdy | Short/stocky, afro |
| Broad | Wide, buzz + handlebar moustache |
| Slim | Upright, mullet |
| Scruffy | Soft belly, buzz + baseball cap |
| Athletic | Mohawk, swagger |
| Pigtail | Female enemy — blue pigtails |
| PigtailTall | Female enemy — tall blue pigtails |

- `public/assets/colourful-guard/civilian.glb`: shared body + hair/facial/cap kits on the Quaternius CC0 skeleton, embedded idle/walk/run clips.
- `src/guardArchetypes.ts`: silhouette scales, hair/facial/cap ids, skin tone, idle posture bias.
- Runtime: kit visibility + skin remap + **procedural strand PBR maps** on hair/facial; **width/height/depth on `visual.root` only** (safe with locomotion scale tracks).
- Hair textures are original procedural maps (`hairStrandMaps.ts`) — **not** Unity Asset Store packs.
- `scripts/build-colourful-guard.mjs`: reproducible original geometry.
- Olive `tintGuardOutfit` dyes are skipped for colourful guards so the stark red/blue kit stays shared.

## Validation

Production TypeScript/Vite build. Unit tests cover archetype table, hair selection, skin remap, outer-root scale, gait bounds and cloned skeletons.
