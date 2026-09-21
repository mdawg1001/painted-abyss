# First Dive validation · 20 September 2026

## Build

`npm run build` completed successfully: strict TypeScript checking plus Vite production bundling. The output is a local static React / Three.js game. Runtime libraries are bundled; `node playable/serve.mjs` requires only Node to serve it.

## Gameplay tests — 13 passed

`npm test` uses the actual shared simulation rules and real Three.js camera mathematics:

- Rightward look produces a positive rightward world direction; pitch is clamped.
- Full five-slot inventory asks before replacing; displaced items remain recoverable.
- Extraction requires the currently held objective.
- Moving away cancels a pending pickup and prevents remote collection.
- Walls, floor and ceiling stop movement, including large movement steps.
- Solid rock blocks sight; the predator routes around the central pillar.
- Every cave cell is reachable from the entrance.
- Predator transitions through patrol → alert → chase → search → patrol.
- The predator cannot sense or bite through the central rock.
- Repeated bites produce loss; a fresh mission resets all state.
- Air depletion, reserve air, suit repair and temporary distractions work.
- The narrow exit passage excludes the predator and prevents bites.
- A complete recovery/extraction route traverses collision and live AI without teleportation, including all four predator states. The scripted run took approximately **89 seconds** and finished with **95% suit integrity**, using sprinting and supplies. This is a rehearsed automated route, not a measured first-time human completion time. The 2–4 minute first-play estimate includes looking, navigation and learning the swap.

## Browser checks

Automated isolated Google Chrome **153.0.8010.48** rendered the actual **WebGL 2** scene with SwiftShader. The renderer was not mocked. The browser checked native mouse input and pointer lock, WASD movement, torch switching, pause/frozen elapsed time, full-inventory replacement, win, air-loss/restart, and pointer-lock-denied free look. Synthetic horizontal wheel input also changed yaw without changing the selected slot.

A representative scene used about **48 draw calls and 58,092 triangles**, with 1,800 sediment points. These are scene counters, not a frame-rate or hardware-performance benchmark. No shader, runtime or failed-resource errors were recorded in the successful browser suite.

Browser encounter and ending scenarios use explicit test-only position/state setup to exercise each screen. They are not described as a manual uninterrupted browser playthrough. The separate full-route simulation above traverses the level with actual collision and AI. Development diagnostics are available only with `?test=1` in development mode; production omits the diagnostic hook.

The packaged production build was also tested separately in a fresh isolated Chrome process. It loads, starts rendering, acquires pointer lock, accepts movement, pauses, and reflects the mute key in the pause menu. It has no development hook and no runtime/HTTP/shader errors. Raw results are in `verification/browser-report.json` and `verification/production-report.json`.

## Preservation and archive

Byte comparison against the supplied ZIP verified **all 209 original files**. Only the original README moved to `docs/ORIGINAL-EXPORT-README.md`; original source, compiled build, deployment, artwork, handover and gallery remain at their existing paths and unchanged. See `verification/preservation.json`.

The deliverable ZIP excludes installed dependencies and machine caches. It includes a complete production build, portable source and lockfile, controls/run instructions, tests, and runtime library licences. `PROTOTYPE-MANIFEST.json` records checksums for the packaged content, excluding itself.

## Remaining limits

- No physical trackpad test or human navigation/playtest. OS natural-scroll settings can affect two-finger gesture direction; normal pointer-motion direction is verified.
- No native GPU frame-rate benchmark, Safari verification, mobile/touch implementation, or accessibility claim for 3D play.
- Simplified cave boundaries and predator movement; creature limbs/tail may clip rocks while turning. The exit exclusion is a deliberate navigation rule.
- Torch volume and ambient shafts are visual approximations, with no shadow-map occlusion. Rock still blocks gameplay sensing.
- One short repeatable mission, with no persistence, campaign, crafting, mounts or body-roll squeeze mechanic.
