# Colourful civilian guard

The faceless heads, hair kits, coral jacket, turquoise trousers, cuffs, zipper and cream/yellow shoes are an original procedural mesh created for Painted Abyss. Regenerate with `node playable/scripts/build-colourful-guard.mjs` from the repository root. No Unity installation or purchased character asset is used.

The Stickman Civilian Characters Pack (Unity Asset Store) is an art-direction reference only — childish / cartoon / colourful civilians with blank faces. It is not shipped and is not converted into the game mesh.

The 23-bone skeleton and idle/walk/run animation data are reused from Quaternius Ultimate Animated Character Pack — Soldier_Male (CC0 1.0): https://quaternius.com/packs/ultimateanimatedcharacter.html . The original GLB remains in `../soviet-uniform/`. Existing combat-action animation credits and terms remain in that directory; those clips are loaded separately, unchanged.

This GLB has one shared body mesh (`ColourfulCivilian`) plus five hair SkinnedMeshes (`Hair_sidePart`, `Hair_curls`, `Hair_bob`, `Hair_messy`, `Hair_ponytail`) on the same skeleton. Runtime picks one of six designed archetypes (silhouette, hair, skin tone, posture). Bald shows no hair mesh. Character body geometry is cloned per instance for skin remaps; hair geometry is shared. Each enemy has an independent skeleton, mixer and hit-flash material.
