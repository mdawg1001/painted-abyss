# Colourful civilian guard

The faceless head, hair kits, pure-red jacket, pure-blue trousers, cuffs, zipper and cream/yellow shoes are an original procedural mesh created for Painted Abyss. Regenerate with `node playable/scripts/build-colourful-guard.mjs` from the repository root. No Unity installation or purchased character asset is used.

The Stickman Civilian Characters Pack (Unity Asset Store) is an art-direction reference only. It is not shipped and is not converted into the game mesh.

The 23-bone skeleton and idle/walk/run animation data are reused from Quaternius Ultimate Animated Character Pack — Soldier_Male (CC0 1.0): https://quaternius.com/packs/ultimateanimatedcharacter.html . The original GLB remains in `../soviet-uniform/`.

This GLB ships a body SkinnedMesh (`ColourfulCivilian`) plus hairstyle kits (`Hair_spiky`, `Hair_mullet`, `Hair_afro`, `Hair_pigtails`, `Hair_buzz`, `Hair_mohawk`) plus `Facial_handlebar` and `Cap_baseball` bound to the same skeleton. Hair/facial kits keep UVs; runtime applies **original procedural strand** albedo/normal/roughness maps (`src/hairStrandMaps.ts`) tinted by archetype `hairColor`. No Unity Asset Store hair packs are used (project policy — Stickman Civilian remains art reference only). Silhouette uses the **outer visual root** only — never bone.scale on the skinned mixer target.
