# Colourful civilian guard

The faceless head, hair, coral jacket, turquoise trousers, cuffs, zipper and cream/yellow shoes are an original procedural mesh created for Painted Abyss. Regenerate with `node playable/scripts/build-colourful-guard.mjs` from the repository root. No Unity installation or purchased character asset is used.

The 23-bone skeleton and idle/walk/run animation data are reused from Quaternius Ultimate Animated Character Pack — Soldier_Male (CC0 1.0): https://quaternius.com/packs/ultimateanimatedcharacter.html . The original GLB remains in `../soviet-uniform/`. Existing combat-action animation credits and terms remain in that directory; those clips are loaded separately, unchanged.

The concept render is an art reference, not the game mesh. This GLB has 12,384 indexed triangles (~762 KB) and one smooth-shaded vertex-colour MeshPhysicalMaterial (soft sheen). Shared vertices are welded before normals so limbs and torso shade smoothly; collar/zipper use rounded capsules instead of boxes. Weighted shoulder/elbow/knee blends and rigid head, hair, hands and shoe details remain. Character geometry is shared; each enemy has an independent cloned skeleton, mixer and hit-flash material.
