# Industrial Caged Sconce (Poly Haven)

- Source: https://polyhaven.com/a/industrial_caged_sconce
- License: CC0 1.0 Universal (public domain dedication) — no attribution required.

The runtime file lives at `public/assets/industrial_caged_sconce/industrial_caged_sconce.glb`
so it is served at `/assets/industrial_caged_sconce/…`. It is the single complete "_b"
caged-sconce variant extracted from the Poly Haven glTF (which ships three variants plus
loose parts), packed into a self-contained binary glTF with textures resized to 512px and
re-encoded as WebP to keep the download small. Geometry is otherwise unmodified.

Wired up in `src/sconceAsset.ts` and mounted onto the cave walls in `src/CaveWorld.ts`.
