# Soviet cartoon guard

Original procedural mesh for Painted Abyss in the style of 1970s Soviet animation and propaganda posters: M43 gymnastyorka with stand collar, breast pockets, shoulder boards and brass buttons; leather belt with star buckle; flared galife breeches; kirza boots; a big cartoon head with a face. Regenerate with `node playable/scripts/build-soviet-cartoon-guard.mjs`.

Kits (separate SkinnedMeshes the archetypes in `src/guardArchetypes.ts` switch on): `Hat_pilotka`, `Hat_ushanka`, `Hat_helmet`, `Hat_helmetBig`, `Hat_furazhka`, `Kit_headphones`, `Face_moustache`, `Face_specs`, `Hair_crop`, `Kit_belly`, `Kit_strap`.

The 23-bone skeleton and idle/walk/run animation data are reused from Quaternius Ultimate Animated Character Pack — Soldier_Male (CC0 1.0): https://quaternius.com/packs/ultimateanimatedcharacter.html . Scene poses (sitting, writing, drinking, smoking) are procedural (`src/guardSceneVisual.ts`).
