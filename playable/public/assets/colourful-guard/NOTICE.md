# Colourful civilian guard

The faceless head, hair kits, pure-red jacket, pure-blue trousers, cuffs, zipper and cream/yellow shoes are an original procedural mesh created for Painted Abyss. Regenerate with `node playable/scripts/build-colourful-guard.mjs` from the repository root. No Unity installation or purchased character asset is used.

The Stickman Civilian Characters Pack (Unity Asset Store) is an art-direction reference only. It is not shipped and is not converted into the game mesh.

The 23-bone skeleton and idle/walk/run animation data are reused from Quaternius Ultimate Animated Character Pack — Soldier_Male (CC0 1.0): https://quaternius.com/packs/ultimateanimatedcharacter.html . The original GLB remains in `../soviet-uniform/`.

This GLB ships a body SkinnedMesh (`ColourfulCivilian`) plus five hair kits (`Hair_sidePart`, `Hair_curls`, `Hair_bob`, `Hair_messy`, `Hair_ponytail`) bound to the same skeleton. Runtime shows one hair (or none when bald), remaps skin vertex colours, and applies tall/narrow↔short/stocky silhouette on the **outer visual root** only — never as bone.scale on the skinned mixer target.
