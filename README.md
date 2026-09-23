# Painted Abyss — First Dive · 0.6.0

The live build is shown in the game as **BUILD v… · git-sha** (menu and during the dive). After another agent merges a PR, your laptop does **not** update by itself — run:

```sh
node playable/refresh.mjs
```

That pulls `main`, stops the old server on port 5173, rebuilds, and serves. Agents must bump `playable/package.json` (and README / START-HERE) on every playable change — see `.cursor/rules/playable-version.mdc`. Do **not** commit `playable/dist/`; serve/refresh rebuild it when stale.

Includes a clearly audible inventory select click/snap, quieter first-play tip, sound, and continuous 360° horizontal camera turning. When pointer lock is unavailable, hold the pointer near either edge to keep turning; move it back towards the centre to stop.

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
| E | Collect a nearby item / open a lidded crate / grab a scrap from the plastic crate / confirm replacement / extract |
| Tab | Toggle the field chart (map scraps from crates; exits marked only when all three fit) |
| 1–5 | Select one of exactly five carried slots (plays a short click when the selection changes; muted when sound is off) |
| Click (knife selected) | Stab — short forward melee; range shorter than the guardian's bite |
| R | Use / consume selected air reserve, sealant, or distraction flare (knife and salvage refuse) |
| G | Drop selected item into the cave |
| Esc | Pause / release the pointer; cancels a pending swap (browser may also pause) |
| M | Toggle audio |

Pointer lock is requested by Begin / Resume. If the browser refuses it, moving the pointer over the canvas still looks without click-drag. Holding the pointer near either horizontal edge keeps turning continuously through 360°; moving back towards the centre stops continuous turning. Arrow keys and scroll also look. Physical two-finger scroll direction can depend on OS scroll settings; native pointer motion and synthetic scroll input were tested, not a physical trackpad. Pausing exposes the mouse cursor for menu buttons.

## Your first dive

- Follow **turquoise markers** down the entrance tunnel and around the central rock pillar. The relic rests above a plinth in the bone alcove at the far end.
- **The bunker is leaking.** At spawn the whole bunker, corridor and cave, is dry: the waterline starts below the floor and one shared flood level rises at about 1.6 cm/s (over the floor in about 35 s, standing head height in about 2 min 15 s, the ceiling in about 7 min 20 s). The HUD **FLOOD · LEAK** gauge tracks it. Tank air only burns while your head is under the waterline; above it the HUD reads **IN AIR**. In the corridor you **WASD walk** / **Shift run** until the water passes eye height, then swim (Space/Q buoyancy). The cave is walkable too until the flood passes the walk line; then you swim.
- **Walking is a human gait** (`playable/src/gait.ts`), not a glide. Speed sets cadence and stride (≈117 steps/min at the 1.55 m/s walk, ≈165 at the 3.4 m/s run); each leg follows clinical hip/knee/ankle curves with heel strike, loading response, midstance, push-off and swing; the pelvis rises and falls twice per stride (≈4 cm walking, lowest at heel strike; ≈7 cm running, lowest at midstance), sways toward the stance foot, rotates ±4° and drops ±5° on the swing side; the thorax counter-rotates and the arms swing opposite the legs. The camera rides that body with gaze stabilisation, so you feel the rise, fall and sway but only a slight nod. Starting takes about a second, stopping finishes the step and settles on both feet, backward and sideways steps are slower, you cannot run backwards, wading slows the stride, and every heel strike plays a footstep (splashing once the water is over your boots). Legs tire more slowly than fins: about 12 s of hard running.
- Three floor **crates** hold torn **map scraps** (west cavern, east shelf, bone alcove). The plastic crate has no lid — the chart scroll is already visible inside, and **E** grabs it. The military crate and suitcase open with **E**, then **E** again takes the scrap. **Tab** reviews the field chart. Exit marks appear only after all three scraps fit.
- You start with a **diving knife** in slot 1, plus driftwood, flare, pony bottle, and sealant — five slots so the swap mechanic can be tried immediately. Press **E**, select the slot to replace with **1–5**, then press **E** again. The displaced item remains in the world and can be recovered. There is no extra backpack.
- Driftwood is spare salvage; replacing it keeps your useful supplies. Press **1** then **click** to stab the guardian at close range — wounds make it rage harder; at ~85% damage taken it breaks off slow and limping; killing it sinks the corpse with soft floating blood sprites in the water (optional — extract still only needs the relic). Press **1–5** to select a slot, then **R** to use consumables — air, sealant, and flares are consumed. A one-time tip appears on the first dive only; later dives rely on the selected-slot chrome. Selecting the knife puts the Poly Haven fish knife in hand; other slots return the mounted torch as the held FPS object.
- Carry the relic east toward the **amber markers**, enter the narrow fissure, then follow it north to the extraction pool. Press **E** near the light to win. You must still be carrying the relic; dropping it removes eligibility to extract.
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

## Validation and limits

The production build and **14 gameplay tests** passed, including a full route through live AI and collision and continuous camera rotation. Chrome rendered actual WebGL 2 successfully: camera direction, pointer-lock fallback, movement, torch switching, inventory swap, pause, extraction, loss, and restart were checked. See `docs/TEST-REPORT.md` for the initial validation and its limits. The later camera check verified turns beyond 360° in both directions with pointer lock denied, and stopping continuous turning by returning the pointer to the centre.

This is intentionally prototype-quality: one level, one procedural creature, simple grid-derived cave collision and route finding, decorative torch volume, and reusable supplies. No crafting, saving, region selection, mounts, mobile controls, or body-roll squeezing system. Cave currents / surge, weight-belt loadout, and real deco / NDL are explicitly out of scope for this short mission. The narrow route limits the creature by its navigation region; collision is approximate and not an anatomical simulation. Point lights do not cast physical shadows. Visuals and timing will need human playtesting; native GPU performance, Safari, and a physical trackpad were not manually validated.
