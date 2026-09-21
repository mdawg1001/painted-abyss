# Third-party assets

## FPS arms (WRAD ARMS)
- Source: https://github.com/wwwriks/wrad-arms
- Author: wriks
- License: CC0 1.0 Universal
- File: `public/assets/arms/arms.glb`
- Right-hand viewmodel that grips the diving knife. CGTrader’s Gloves Qa zip needs a logged-in download, so this CC0 arm is what ships.

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
- Floor props in the cavern; press E to open (map fragments / loot come later).

## Lifebuoy (Poly Haven)
- Source: https://polyhaven.com/a/lifebuoy
- Author: Hank Kaamura
- License: CC0 1.0 Universal (public domain dedication)
- Files: `public/assets/lifebuoy/` (1k glTF + textures) with notes under `src/assets/lifebuoy/`
- Decorative life ring on the start-chamber floor (not interactable).

## Blood particles (Kenney Particle Pack)
- Source: https://kenney.nl/assets/particle-pack
- Author: Kenney Vleugels (Kenney.nl)
- License: CC0 1.0 Universal (public domain dedication) — https://creativecommons.org/publicdomain/zero/1.0/
- Files: `public/assets/blood/soft_circle.png` (circle_05), `soft_smoke.png` (smoke_03), `soft_glow.png` (circle_01) — resized 128² RGBA
- Used as soft alpha maps for underwater blood Points when the guardian is stabbed or killed (tinted deep red in engine).
