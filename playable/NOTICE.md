# Third-party assets

## Fish Knife (Poly Haven)
- Source: https://polyhaven.com/a/fish_knife
- Author: Mateusz Sadek
- License: CC0 1.0 Universal (public domain dedication)
- Files: `public/assets/knife/` (1k glTF + textures) and mirrored under `src/assets/knife/`
- Used as the diving-knife inventory icon and held FPS prop when selected. Other slots restore the dive torch as the held object.

## Dive chests (Poly Haven)
- Wooden Military Crate — https://polyhaven.com/a/wooden_military_crate — Prabhjinder Singh — CC0 1.0
- Plastic Crate 02 — https://polyhaven.com/a/plastic_crate_02 — Fabi_G — CC0 1.0
- Vintage Suitcase — https://polyhaven.com/a/vintage_suitcase — Maximilian Schuster — CC0 1.0
- Files: `public/assets/chests/<kind>/` (1k glTF + textures) with notes under `src/assets/chests/`
- Floor props in the cavern. Military crate and suitcase: E opens the lid, E again takes the chart scrap. The plastic crate has no lid — the scrap is visible on approach and E grabs it.

## Map scrap scroll (Sketchfab)
- Source: https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7
- Author: Aparicio Silva 3D (@apariciosilva3D)
- License: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/ (credit required; commercial use allowed)
- Files: `public/assets/scroll/scroll.gltf` (authored mesh, 7,444 triangles) and `textures/` (albedo, normal, roughness, metallic, AO, emissive)
- Visible in the open-top plastic crate immediately, and inside the military crate or suitcase after that lid is opened, until the scrap is taken.

## Corridor guard — Quaternius Soldier_Male (CC0)
- Source: https://quaternius.com/packs/ultimateanimatedcharacter.html (Ultimate Animated Character Pack)
- Author: Quaternius
- License: CC0 1.0 — https://creativecommons.org/publicdomain/zero/1.0/
- Files: `public/assets/soviet-uniform/quaternius_soldier_male.glb` — Soldier_Male + authored **idle / walk / run** skeletal clips
- Phase 3 breath-corridor guard (runtime mesh height ≈ 1.90 m). Olive low-poly military; TT-33 parents to `FistR`.
- AnimationMixer crossfades from AI (idle at water/stop, walk patrol/search, run chase); stride `timeScale` matched to move speed.

### Prior mesh / Mixamo (not shipped)
- Sketchfab “WW2 Soviet Uniform” by tnnv (CC BY 4.0) was the first Phase 3 body:
  https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99
- **Mixamo autorig** of that mesh could not be completed here (Adobe login / Mixamo API 401; no credentials).
- Quaternius UAL / Mixamo Soldier **retarget** onto its Unreal-style bones failed (rest-pose axes); see `scripts/retarget-guard-locomotion.mjs`.
- Procedural bone-bake (#90) was playtest-rejected — not an acceptable substitute for real clips.

## Poster from Soviet Union (Sketchfab)
- Source: https://sketchfab.com/3d-models/poster-from-soviet-union-49a80251d7e543289b1deb656b15017a
- Author: PotatoWit (@PotatoWit)
- License: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/ (credit required; commercial use allowed)
- Files: `public/assets/soviet-poster/textures/poster_literacy_albedo.png`, `poster_silence_albedo.png` — the two weathered propaganda sheets from the model’s public preview (downloadable glTF requires Sketchfab auth; wall planes use the preview artwork)
- Hung as a pair on one cave wall face (not interactable).

## Soviet pistol TT-33 (Sketchfab)
- Source: https://sketchfab.com/3d-models/soviet-pistol-tt-33-0e2876969dff4d0ea86e9dbf3cb0dce9
- Author: Stupid Mad Polygon (@stupidmadpolygon)
- License: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/ (credit required; commercial use allowed)
- Files: `public/assets/tt33/tt33.glb` (authored mesh, 5,306 triangles)
- The glTF asset extras also name Simon Volt (https://sketchfab.com/tursunovabduseit).
- Corridor gun mesh on the floor, in the diver's hand, and in the Soviet guard's hand. Replaces the box placeholder only.


## Lifebuoy (Poly Haven)
- Source: https://polyhaven.com/a/lifebuoy
- Author: Hank Kaamura
- License: CC0 1.0 Universal (public domain dedication)
- Files: `public/assets/lifebuoy/` (1k glTF + textures) with notes under `src/assets/lifebuoy/`
- Decorative life ring on the start-chamber floor (not interactable).

## Industrial Caged Sconce (Poly Haven)
- Source: https://polyhaven.com/a/industrial_caged_sconce
- License: CC0 1.0 Universal (public domain dedication)
- Files: `public/assets/industrial_caged_sconce/industrial_caged_sconce.glb` — the single complete "_b" caged variant, packed to a self-contained binary glTF with 512px WebP textures; notes under `src/assets/industrial_caged_sconce/`.
- Mounted as warm wall lamps bolted to spaced cave wall faces; each carries a gently flickering point light.

## Blood particles (Kenney Particle Pack)
- Source: https://kenney.nl/assets/particle-pack
- Author: Kenney Vleugels (Kenney.nl)
- License: CC0 1.0 Universal (public domain dedication) — https://creativecommons.org/publicdomain/zero/1.0/
- Files: `public/assets/blood/soft_circle.png` (circle_05), `soft_smoke.png` (smoke_03), `soft_glow.png` (circle_01) — resized 128² RGBA
- Used as soft alpha maps for underwater blood Points when the guardian is stabbed or killed (tinted deep red in engine).

## Water caustics (OpenGameArt)
- Source: https://opengameart.org/content/water-caustics-effect-small
- Author: leeor_net
- License: CC0 1.0 Universal (public domain dedication)
- File: `public/assets/caustics/caustics_atlas.png` — 1024² RGBA, 16 frames in a 4×4 grid
- Used as soft additive floor pools under ceiling light shafts (extraction + cavern).
