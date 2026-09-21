# Painted Abyss / Ancient Seas — Project Export

Snapshot: 20 September 2026. This folder contains the recovered project source, compiled output, deployment archive, all five generated concept images and 31 supplied reference images, plus a design handover prepared for this export.

## Open the files
- Open `index.html` for an offline artwork gallery and project index. This is an export viewer, not the game.
- `source/` contains editable TypeScript, TSX, CSS, shaders embedded in code, components, configuration, dependency lockfile, scripts and bundled licences.
- `compiled-build/` contains the existing browser and server JavaScript, CSS and public assets.
- `deployment/` retains the original deployment archive.
- `artwork/generated/` contains original unmodified PNG outputs; filenames are preserved.
- `artwork/references/` contains the original uploads, including duplicate references.
- `docs/DESIGN-HANDOVER.md` records the latest creative direction and pending gameplay requirements.
- `MANIFEST.json` inventories the files with SHA-256 checksums.

## Run the editable game
Install Node.js 22.13 or newer and pnpm 11.25.0. From `source/`, run:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed in the terminal (the portable script defaults to port 5173). Use a browser with WebGL support. Dependencies must be downloaded on first installation. Run `pnpm build` to rebuild. The included build targets the Sites/Cloudflare runtime; it is not a standalone index.html game. Its HTML is rendered by the React/Vinext application.

The original hosted prototype is at https://ancient-seas-milan.mke1998.chatgpt.site . Access follows the existing site's settings.

## Current implementation
The source is the original free-swimming ocean prototype: procedural seabed and creatures, vegetation, particles, ambient audio, swimming, drift mode and HUD. Audio is synthesised in `source/lib/ocean.ts`, rather than supplied as WAV/MP3 files. Creatures and terrain are built procedurally in code; there are no separate Blender/FBX creature models or painted texture sets to export.

The later Painted Abyss horror direction is represented by the concept images and design handover. The cave level, predator attack AI, five-item hotbar, crafting, region map and requested click-free trackpad controls have not yet been implemented in this source. No gameplay changes were made for this export.

## Export scope
All five generated images and all 31 uploaded references present in the conversation workspace are included. The full source tree and existing build are included. Installed dependency folders, machine-specific runtime caches, credential files and raw Git internals are omitted; dependencies are specified by the lockfile. The artwork is flattened PNG/JPEG/WebP/GIF, not layered painting files. Reference images remain reference material; this export does not establish commercial reuse rights.

The code has not been rebuilt or visually retested during export. Archive integrity and source/artwork inclusion were checked.
