# Colourful civilian guard

The faceless head, hair, coral jacket, turquoise trousers, cuffs, zipper and cream/yellow shoes are an original procedural mesh created for Painted Abyss. Regenerate with `node playable/scripts/build-colourful-guard.mjs` from the repository root. No Unity installation or purchased character asset is used.

The Stickman Civilian Characters Pack (Unity Asset Store) is an art-direction reference only. It is not shipped and is not converted into the game mesh.

The 23-bone skeleton and idle/walk/run animation data are reused from Quaternius Ultimate Animated Character Pack — Soldier_Male (CC0 1.0): https://quaternius.com/packs/ultimateanimatedcharacter.html . The original GLB remains in `../soviet-uniform/`.

This GLB is a **single** skinned mesh (`ColourfulCivilian`) with smooth vertex-colour materials. Runtime archetypes only remap skin/hair vertex colours per instance — they do not rescale the rig. Character geometry is cloned per instance for colour remaps; each enemy has an independent skeleton, mixer and hit-flash material.
