# Soviet corridor guard (Quaternius Soldier_Male)

Quaternius Ultimate Animated Character Pack — **Soldier_Male**
https://quaternius.com/packs/ultimateanimatedcharacter.html

License: CC0 1.0 — https://creativecommons.org/publicdomain/zero/1.0/

First Dive ships:
- `quaternius_soldier_male.glb` — Soldier_Male mesh + authored **idle / walk / run**
  skeletal clips (in-place; game drives XZ). Runtime scale ≈ **1.90 m** mesh height.

## Why not the Sketchfab WW2 Soviet Uniform?

Prior mesh: https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99 (tnnv, CC BY 4.0)

1. **Mixamo autorig** of that mesh — blocked here (Adobe OAuth; Mixamo API returns 401 without credentials).
2. **SkeletonUtils.retargetClip** from Quaternius UAL / Mixamo Soldier onto its Unreal-style bones — failed (rest-pose axis collapse). See `scripts/retarget-guard-locomotion.mjs`.
3. Procedural bone-bake (#90) — rejected by playtest as not good enough.

Replacement keeps Phase 3 AI, TT-33 hand mount, and real skeletal locomotion.
