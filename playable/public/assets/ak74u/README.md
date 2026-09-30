# AK74U | FREE ANIMATION

Sketchfab “AK74U | FREE ANIMATION.” by BURNER (@Alexander_Ovelar)
https://sketchfab.com/3d-models/ak74u-free-animation-2ab66220c48b465e9501067667965569
https://sketchfab.com/Alexander_Ovelar

License: CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/
(Author must be credited. Commercial use is allowed.)

Upstream credits (from the Sketchfab description):
- Gun mesh: https://sketchfab.com/3d-models/krinkov-aks-74u-9f88c016b5524e36850e1961a249dbf1
- Arms: https://sketchfab.com/3d-models/free-arms-and-hands-rig-b7b5691030b44a74ad11ac191771ac02

First Dive ships:
- `ak74u.glb` — the author's official glTF download (Sketchfab "Download 3D model",
  glTF), packed to a self-contained binary glTF with glTF-Transform: textures
  re-encoded to 2048² WebP (magazine 1024²), animation clips resampled, duplicate
  accessors merged. Materials, UVs and skinning are untouched. Seven viewmodel clips:
  `DRAW`, `IDLE`, `INSPEC`, `OLSER`, `RELOAD1`, `RELOAD2`, `SHOOT`.

  Rebuild: `gltf-transform copy scene.gltf a.glb && gltf-transform resize a.glb b.glb --width 2048 --height 2048 && gltf-transform webp b.glb c.glb --quality 88 && gltf-transform resample c.glb d.glb && gltf-transform dedup d.glb e.glb && gltf-transform prune e.glb ak74u.glb`

Credit (from the download's license.txt): This work is based on "AK74U | FREE ANIMATION."
(https://sketchfab.com/3d-models/ak74u-free-animation-2ab66220c48b465e9501067667965569)
by BURNER (https://sketchfab.com/Alexander_Ovelar) licensed under CC-BY-4.0
(http://creativecommons.org/licenses/by/4.0/)

Used as the diver’s inventory gun: FPS arms+gun viewmodel in hand (animated; hold right
mouse to aim down the sights, V to inspect) and the corridor floor pickup (gun meshes only). The Soviet guard’s hand still uses
the TT-33 (see `../tt33/`).
