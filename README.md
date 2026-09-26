# Painted Abyss — First Dive · 0.18.4

## Progressive prop loading (0.17.8)

The hatch, cave textures, weapons, guards and shared lighting load first. Crates, map scrolls, lifebuoy, posters and the distant valve/copper models upgrade as the player approaches (40–48 m lead distance). At most two prop upgrades run together, after a brief startup head start for essential assets. Basic crate/scroll visuals and gameplay interactions exist immediately; lid state is restored if a crate opens before its model finishes. Loaded props remain available through death and restart. Failed downloads retry up to three times with a cooldown.

Local Chrome checks measured about 65 MB transferred at the hatch versus about 96 MB before this change; this is a startup download comparison, not a frame-rate claim. All original models and texture files are retained.


The live build is shown in the game as **BUILD v… · git-sha** (menu and during the dive). After another agent merges a PR, your laptop does **not** update by itself — run:

```sh
node playable/refresh.mjs
```

That pulls `main`, stops the old server on port 5173, rebuilds, and serves. Agents must bump `playable/package.json` (and README / START-HERE) on every playable change — see `.cursor/rules/playable-version.mdc`. Do **not** commit `playable/dist/`; serve/refresh rebuild it when stale.

Includes a clearly audible inventory select click/snap, quieter first-play tip, sound, and continuous 360° horizontal camera turning. When pointer lock is unavailable, hold the pointer near either edge to keep turning; move it back towards the centre to stop.

## Surfaces (0.16.2)

The flat band shade is gone. Rock, floor, stone, and moss are the 2K photographic maps again, with the original soft lighting and pore normals. Floor and wall blood stains are 60% lighter than before. Fog, the frame grade, the io HUD, and the red enemy hit flash are unchanged.

## Faster guards (0.16.3)

Corridor guards walk and chase about 15% faster. Role combat speeds, patrol/chase/search, and the walk→run gait blend move with them. Authored foot-slide clip speeds are unchanged so the planted foot still locks to the floor.

## Cardboard cover (0.16.4)

Poly Haven [Cardboard Box 01](https://polyhaven.com/a/cardboard_box_01) piles are wired as shootout cover across the bunker (entrance, corridor, cavern, relic approach, extraction). They block movement and sight like the existing crates and blast walls.

## Metal desk cover (0.16.5)

One Poly Haven [Metal Office Desk](https://polyhaven.com/a/metal_office_desk) sits in the entrance chamber as duck-behind shootout cover. Same movement/sight blocking as crates, walls, and cardboard.

## Stylized colour (0.17.0)

Brighter, louder, Overtide-style picture without touching the 2K rock, wall, stone and moss maps. The frame grade adds luma-preserving saturation and vibrance (near-greys stay neutral), a midtone lift and a gentle multiplicative split tone. Dry air has a bright neutral key with a teal floor bounce so textures keep their own hue; the underwater field is lighter too. Cover crates are painted olive, blast walls are sand concrete with a hazard stripe, reinforcement doors are teal steel in yellow frames. The HUD moves to chunky Barlow Condensed on rounded solid panels with yellow keys, colour-coded meters, a big ammo counter and a yellow selected slot. The vignette is much lighter.

## Cardboard barricades (0.17.1)

Cardboard cover is now clustered barricades: each footprint is **3–4 carton stacks** side-by-side (chest–head high) with a wider collision box, so you can actually hide behind them in a shootout. More barricades in the entrance, corridor, cavern, relic approach, and extraction.

## Faster pistol reload (0.17.2)

Player TT-33 magazine changes take **1.2 s** (was 1.9 s). Empty mags come back online quicker in a fight.

## Pistol reload 0.9 s (0.17.3)

Player TT-33 magazine change is **0.9 s** (was 1.2 s).

## Grounded loot + ammo prompts (0.17.4)

Removed the mystery mid-air teal flare orb. Death drops land on the floor instead of floating at eye height. Floor pickups no longer bob. Stocked ammo / med / smoke boxes only appear when you can take them, and show a **Walk over · Ammo box** prompt.

## Soviet bunker grade (0.17.5)

The sepia is gone. Dry air is a dark cold teal-grey (fog and background), the key light is cold fluorescent white, the ceiling bounce is cold concrete, and the frame grade slightly desaturates with teal shadows and neutral highlights. Two of every three wall fixtures are cold tubes (every flickering one included); one in three stays a warm orange caged bulb as the accent. The cavern and entrance ceiling spots are fluorescent. The underwater field and the red relic slam are unchanged.

## Hanging tube lights (0.17.8)

7 Poly Haven [Caged Hanging Light](https://polyhaven.com/a/caged_hanging_light) fixtures (CC0) hang on their chains from the bunker ceiling over open floor, at least 22 m apart (cut from 18 to 7 in 0.18.0). Each is a real pendulum (period from g and chain length); your shots, guard fire and bullet impacts within 9 m kick them, so the light pools and the shadows under them sway. 60% of tubes burn steady, 30% are failing (buzzing blackouts), 10% are dying (dark, then bursts); in the final wave every tube stutters, and the relic slam turns them red. A fixed pool of 5 downward spotlights follows the tubes nearest you (no shader recompiles); the nearest casts shadows. Tuning in `playable/src/hangingLightAsset.ts`.

## Frame grade (0.14.3)

Original rock, wall, floor and moss maps are preserved. The picture around them is three hard fields in `playable/src/frameGrade.ts`: a flat blue-green water sheet, dirty ivory with amber practicals while you are in the air, and a hard red slam for a few seconds when the relic trap first opens. Those fields are assigned. They do not fog-blend, and depth no longer fades the cave into navy. Contrast is clipped. Guard kits and metal meshes stay as they are and read darker against the field.

## Survival firefight (0.14)

The bunker is held by a garrison that escalates as you push for the relic: a quiet start, first contact in the entrance chamber, waves through steel bulkheads (red lamp + clank + shout before anyone steps through), a short lull to reload and resupply, harder waves, then a final push from the moment you lift the relic until you reach the extraction pool.

- Guards: assault (advance + bursts), rusher (sprints in, telegraphed knife stab), flanker (comes round your side), heavy (helmet + long bursts). Standard guards take two head shots up close, three at range, about five body hits.
- Controls: click fires the TT-33 (or stabs with the knife), R reloads, **T throws smoke**, E interacts, 1–5 select.
- Smoke blocks sight for guards and for you. Walk over ammo boxes, field dressings and smoke tins to take them; a downed guard's pistol gives up its rounds when you walk over it.
- Every balancing number (enemy counts, health, damage, accuracy, timings, supplies, smoke) lives in `playable/src/survivalConfig.ts`.

## Open in Cursor

Clone this private repository using Cursor's **Clone Repository** command and open the cloned folder. The current game is in `playable/`; `source/` is the preserved original prototype.

In Cursor's terminal, run:

```sh
cd playable
npm ci
npm run dev
```

Open the local address printed in the terminal. Pull the latest commits before continuing work in another checkout. Commit and push completed changes so both editors use the same version.

A small playable underwater survival mission built from the supplied Ancient Seas React / Three.js foundation. Recover an ammonite relic, survive one guardian, and extract through a narrow passage into a lit pool. Intended first-play duration: about 2–4 minutes. A rehearsed scripted route completes in about 89 seconds.

The supplied **Underwater Ambience** track loops during the dive, fades in gently, and shares the existing M mute and Esc pause controls. Resuming continues the music; restarting a dive starts it again. The original MP3 is included unchanged at `playable/src/assets/underwater-ambience.mp3`. The generated water ambience has been removed: the remaining generated sounds are regulator breathing (with quiet gaps between breaths), the two-tone chime, and a short mechanical inventory select click/snap on 1–5.

## Play locally

1. Clone the repository or unzip the entire downloaded folder.
2. With **Node.js 22.13 or newer** installed, once:

   ```sh
   cd playable && npm ci
   ```

3. From the repo root (or `playable/`), run:

   ```sh
   node playable/serve.mjs
   ```

   `serve.mjs` rebuilds `playable/dist/` when it is missing or its version does not match `package.json`.

4. Open **http://127.0.0.1:5173** in desktop Chrome, Edge, or another WebGL 2 browser.
5. Click **Begin dive** once. Move the mouse or trackpad normally to look. No button needs to be held.

Keep the terminal open while playing. Stop it with Ctrl+C. If port 5173 is already occupied, stop that other local server or set the `PORT` environment variable to a free port before running. After dependencies are installed, play needs no internet. Opening an HTML file by double-clicking does not start its local server. The root `index.html` is the preserved artwork gallery, not the new game.

## Controls

| Input | Action |
|---|---|
| Mouse / one-finger trackpad motion | Look; right turns right, left turns left |
| Two-finger scroll | Additional camera look; does not select items |
| Arrow keys | Keyboard camera look |
| W / A / S / D | Walk anywhere the bunker floor is dry or wadeable (corridor and cave); swim once the flood passes the walk line |
| Space | Add positive buoyancy (BCD up) — swim only |
| Q or Ctrl | Add negative buoyancy (BCD down) — swim only |
| [ / ] | Nudge locked idle trim bias toward sink / float — swim only |
| X | Clear trim bias back to neutral — swim only |
| Shift | Run on dry corridor floor; sprint kick while swimming |
| F | Toggle the mounted torch |
| E | Collect a nearby item / open a lidded crate / grab a scrap from the plastic crate / confirm replacement / extract. **Hold** at the leak valve to turn it shut; let go to release the wheel |
| Tab | Toggle the field chart (map scraps from crates; exits marked only when all three fit) |
| 1–5 | Select one of exactly five carried slots (plays a short click when the selection changes; muted when sound is off) |
| Click (knife selected) | Stab — short forward melee; range shorter than the guardian's bite |
| R | Use / consume selected air reserve, sealant, or distraction flare (knife and salvage refuse) |
| G | Drop selected item into the cave |
| Esc | Pause / release the pointer; cancels a pending swap (browser may also pause) |
| M | Toggle audio |

Pointer lock is requested by Begin / Resume. If the browser refuses it, moving the pointer over the canvas still looks without click-drag. Holding the pointer near either horizontal edge keeps turning continuously through 360°; moving back towards the centre stops continuous turning. Arrow keys and scroll also look. Physical two-finger scroll direction can depend on OS scroll settings; native pointer motion and synthetic scroll input were tested, not a physical trackpad. Pausing exposes the mouse cursor for menu buttons.

## Your first dive

- Head down the entrance tunnel and around the central rock pillar (there are no guide arrows; use the compass readout and the chart). The relic rests above a plinth in the bone alcove at the far end.
- **The relic is booby-trapped.** The bunker stays dry until the first successful relic pickup opens the flood valve. Dropping the relic or dying does not stop the flood; a full mission restart resets the trap. The valve can still stop and drain the flood after activation. At spawn the whole bunker, corridor and cave, is dry: the waterline starts below the floor and after the trap activates, one shared flood level rises at about 1.6 cm/s (over the floor in about 35 s, standing head height in about 2 min 15 s, the ceiling in about 7 min 20 s). The HUD **FLOOD · LEAK** gauge tracks it. Tank air only burns while your head is under the waterline; above it the HUD reads **IN AIR**. In the corridor you **WASD walk** / **Shift run** until the water passes eye height, then swim (Space/Q buoyancy). The cave is walkable too until the flood passes the walk line; then you swim.
- **Walking is a human gait** (`playable/src/gait.ts`), not a glide. Speed sets cadence and stride (≈117 steps/min at the 1.55 m/s walk, ≈165 at the 3.4 m/s run); each leg follows clinical hip/knee/ankle curves with heel strike, loading response, midstance, push-off and swing; the pelvis rises and falls twice per stride (≈4 cm walking, lowest at heel strike; ≈7 cm running, lowest at midstance), sways toward the stance foot, rotates ±4° and drops ±5° on the swing side; the thorax counter-rotates and the arms swing opposite the legs. The camera rides that body with gaze stabilisation, so you feel the rise, fall and sway but only a slight nod. Starting takes about a second, stopping finishes the step and settles on both feet, backward and sideways steps are slower, you cannot run backwards, wading slows the stride, and every heel strike plays a footstep (splashing once the water is over your boots). Legs tire more slowly than fins: about 12 s of hard running.
- **The leak valve.** Hidden on the blind south wall of the far south-west cavern corner (behind the west shelf, off every marker route) stands a green riser with a red handwheel gate valve at chest height. Stand in front of it and **hold E**: both gloved hands reach up and grip the rim like a steering wheel, then turn it shut hand over hand — both hands drive the wheel about 75° clockwise, then the right hand lets go, swings back and re-grips, then the left. Arms are solved with two-bone IK from the shoulders, fingers open and close on each re-grip, and a hand that is holding stays locked to the rim. The stem has been seized for years, so the first stroke strains before it breaks free, and each stroke gets heavier as the gate closes against the water behind it until it seats with a clunk. Closing takes 2½ turns (about half a minute of exposed work, breathing harder the whole time). Leak flow follows the open area of the round port, so the last turn cuts most of what is left. Letting go of E releases the wheel where it is; the valve and the water level both survive death. Once seated the water stops rising at once and the floor sump starts draining it: the gauge reads **FLOOD · DRAINING**, then **SEALED** when the floor is clear. The drain is a gravity sump (outflow ∝ √depth, Torricelli), so deep water falls fastest and the last centimetres trickle; a completely full bunker takes 7 minutes (`BREATH_DRAIN_FULL_SECONDS` in `simulation.ts`). Holding E at a shut valve opens it again (anticlockwise, same hand-over-hand motion; the gate is wedged in its seat at first): the drain stops immediately and the leak refills from whatever level the water had reached.
- Three floor **crates** hold torn **map scraps** (west cavern, east shelf, bone alcove). The plastic crate has no lid — the chart scroll is already visible inside, and **E** grabs it. The military crate and suitcase open with **E**, then **E** again takes the scrap. **Tab** reviews the field chart. Exit marks appear only after all three scraps fit.
- You start with a **diving knife** in slot 1, plus driftwood, flare, pony bottle, and sealant — five slots so the swap mechanic can be tried immediately. Press **E**, select the slot to replace with **1–5**, then press **E** again. The displaced item remains in the world and can be recovered. There is no extra backpack.
- Driftwood is spare salvage; replacing it keeps your useful supplies. Press **1** then **click** to stab the guardian at close range — wounds make it rage harder; at ~85% damage taken it breaks off slow and limping; killing it sinks the corpse with soft floating blood sprites in the water (optional — extract still only needs the relic). Press **1–5** to select a slot, then **R** to use consumables — air, sealant, and flares are consumed. A one-time tip appears on the first dive only; later dives rely on the selected-slot chrome. Selecting the knife draws it into a gloved diver's hand — a real-scale first-person viewmodel with the fist low in the bottom-right, forearm running out of frame and the blade angled up toward the crosshair; clicking plays a wind-up, thrust and recover stab; other slots return the mounted torch as the held FPS object.
- Carry the relic east, enter the narrow fissure, then follow it north to the extraction pool. Press **E** near the light to win. You must still be carrying the relic; dropping it removes eligibility to extract.
- **Five Soviet guards patrol the bunker.** Same behaviour, five kit colours (olive, khaki, steel-blue, brown, field-teal). Each walks an overlapping beat of the outer perimeter (~25% shared with the next man so they meet in doorways), about 1.3 m off the walls, stopping at corners and every ~16 m along long walls to look around. At each stop he surveys the open floor, turns (through the room, not across the wall) to face the longest view, sweeps it, and where the space opens two ways checks the other way too. He sees what is in front of him (≈65° either side; a lit torch from 16 m, dark from 9 m), hears you running within 11 m, and senses anyone within 2.5 m. Each respawn he starts from a different stop on his beat, at least 30 m from the hatch when that beat allows it. When he loses you he searches, then rejoins his own beat at the nearest stop. They cannot swim, so once the leak passes the walk line they hold their ground.
- **Each guard shoots on sight.** He carries the TT-33 as his own sidearm. The moment he spots you he stops, raises the pistol (about 0.35 s) and fires aimed shots roughly every 0.75 s from a standing stance, reloading for 2.2 s after each 8-round magazine. Hits cost 30 suit (less with the coat); misses crack past with a ricochet. Close, steady targets are almost always hit; long shots in the dark, running targets and his rushed first shot often miss, so breaking his line of sight or sprinting for cover is how you survive. A soft key and rim light keep his face and uniform readable in the dark.
- Rock blocks the guardian's sight. Its states are patrol, alert, chase, search, damaged, and dead. Use the pillar, briefly sprint away, switch off the torch, deploy a flare, or fight with the knife. It cannot enter the narrow exit passage.
- Air is a free-gas tank shown in **litres** on the HUD (**100 L** main ≈ 5.6 min surface cruise at 18 L/min SAC, plus a **9 L** pony). Burn scales with depth (ATA) and sprint/panic effort (R arms the pony). Space/Q fill a **BCD trim** (−1..+1); **[ ]** lock an idle bias and **X** clears it; look-pitch finning only adds a little vertical thrust. Sealant repairs 45 suit integrity. A flare distracts for 12 seconds unless you remain very close to the guardian. Dying or running out of air brings up Restart.
- **Out of scope for First Dive:** cave currents / surge, a weight-belt inventory model, and real decompression stops or NDL tracking. The short mission stays shallow and theatrical; those systems are deferred.

## Edit and rebuild

The new portable entry point is **playable/**. From that folder:

```sh
npm ci
npm run dev
npm test
npm run build
```

`npm ci` downloads pinned dependencies. `npm run build` type-checks the project and writes local `playable/dist/` (gitignored). Serve/refresh use that build with relative asset paths; no Cloudflare / Sites hosting stack.

Optional browser suite: install Playwright (`npm install --no-save --package-lock=false playwright@1.62.1`), have desktop Google Chrome installed, run the development server at port 5173, then run `node tests/browser.cjs` in another terminal inside `playable/`. This suite uses an isolated headless Chrome instance and software WebGL. Results go in `test-results/`.

## What was retained

- `source/`: original editable Ancient Seas project, unchanged.
- `compiled-build/` and `deployment/`: original export, unchanged.
- `artwork/`: supplied references and all generated concepts, unchanged.
- `playable/src/legacy/ocean.ts`: reused OceanWorld foundation, including renderer setup, procedural marine creature geometry, animated materials, swimming vectors, and synthesized underwater ambience. Small constructor and caustic-light changes allow the new cave to use it.
- `docs/DESIGN-HANDOVER.md`: original creative handover.
- `MANIFEST.json`: original export inventory; its original README is now saved as `docs/ORIGINAL-EXPORT-README.md`.
- `PROTOTYPE-MANIFEST.json`: historical checksums of the 0.1.1 downloadable archive; Git records later changes, including the 0.1.2 camera update.

New mission rules live in `playable/src/simulation.ts`; cave rendering and input in `CaveWorld.ts`; React HUD/menu in `main.tsx`. Bundled runtime library licences are in `playable/licenses/`. Third-party art attribution is in `playable/NOTICE.md`.

## Third-party assets

- **Fish Knife** ([Poly Haven](https://polyhaven.com/a/fish_knife)) by Mateusz Sadek — CC0 1.0. Used as the diving-knife inventory icon and held FPS prop when the knife slot is selected (`playable/public/assets/knife/`). Other slots restore the dive torch as the held object.
- **Dive chests** (CC0 1.0): [Wooden Military Crate](https://polyhaven.com/a/wooden_military_crate) (Prabhjinder Singh), [Plastic Crate 02](https://polyhaven.com/a/plastic_crate_02) (Fabi_G), [Vintage Suitcase](https://polyhaven.com/a/vintage_suitcase) (Maximilian Schuster). Floor props under `playable/public/assets/chests/`. The military crate and suitcase open with **E**, then **E** takes the chart scrap. The plastic crate has no lid — the scrap is already visible and **E** grabs it.
- **Map scrap scroll** (CC BY 4.0): [Scroll (game ready asset)](https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7) (Aparicio Silva 3D). Authored mesh and PBR maps under `playable/public/assets/scroll/`. It sits in the open-top plastic crate the whole time, and inside a lidded crate after that crate is opened.
- **Copper pipe section** (CC BY 4.0): [Copper Pipe Section](https://sketchfab.com/3d-models/copper-pipe-section-91807ce330af449bbd3c59b5ede8ce67) (pixol3d). Official glTF under `playable/public/assets/copper-pipe/`. The same section is repeated along the full blind south wall of the far south-west cavern, joined to the hand-wheel pipe.

## Validation and limits

The production build and **14 gameplay tests** passed, including a full route through live AI and collision and continuous camera rotation. Chrome rendered actual WebGL 2 successfully: camera direction, pointer-lock fallback, movement, torch switching, inventory swap, pause, extraction, loss, and restart were checked. See `docs/TEST-REPORT.md` for the initial validation and its limits. The later camera check verified turns beyond 360° in both directions with pointer lock denied, and stopping continuous turning by returning the pointer to the centre.

This is intentionally prototype-quality: one level, one procedural creature, simple grid-derived cave collision and route finding, decorative torch volume, and reusable supplies. No crafting, saving, region selection, mounts, mobile controls, or body-roll squeezing system. Cave currents / surge, weight-belt loadout, and real deco / NDL are explicitly out of scope for this short mission. The narrow route limits the creature by its navigation region; collision is approximate and not an anatomical simulation. Point lights do not cast physical shadows. Visuals and timing will need human playtesting; native GPU performance, Safari, and a physical trackpad were not manually validated.

## Local asset caching

The built-game server (`node playable/serve.mjs`) reuses downloaded assets. Vite-generated files with content hashes in their names are cached for a year; a changed file gets a new URL on the next build. Fixed-name models, textures, and audio use content-based ETags: unchanged requests receive an empty HTTP 304 response, while changed files are downloaded again. HTML and build-status responses remain uncached so new builds are discovered. Restart an already-running server once after installing this update. This improves repeat visits; the initial visit still needs to download assets.

Run the focused HTTP regression check with `node --test playable/tests/asset-cache.test.cjs`. It covers unchanged responses, same-size file edits, weak/list validators, HEAD requests, cache policy, and path containment.

## Progressive cave texture detail

Rock, floor, and moss first use 256×256 KTX2 previews (718,863 bytes combined). These are the exact lower mip levels from the nine original 2048×2048 maps, with the same color space, normal maps, and packed ARM channels; the originals are unchanged. Once previews have settled and the player has first pressed Begin/Resume, a two-second delay gives initial gameplay time to settle before the game upgrades one map at a time, with a short gap between upgrades. Failed upgrades retain the preview. Restarting a dive reuses the loaded maps; disposing the world cancels queued upgrades. Total eventual downloads include both preview and original files, but only the small previews compete for initial loading.

Regenerate previews with `node playable/scripts/build-texture-previews.mjs`. Verify their exact mip data with `node --test playable/tests/texture-previews.test.cjs`. The standalone `playable/tests/texture-streaming-browser.cjs` exercises real GPU rendering, upgrade failures, restart reuse, and disposal against a Vite dev server (`GAME_URL`, default port 5184); set `PLAYWRIGHT_MODULE` to an installed Playwright module when needed.
