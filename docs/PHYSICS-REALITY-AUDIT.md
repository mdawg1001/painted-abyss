# Physics vs reality — First Dive audit

Measured from `playable/src/CaveWorld.ts` locomotion and `playable/src/simulation.ts` mission rules. World units are treated as **metres** (`CELL = 4`, playable height `y ∈ [0.65, 7.1]`). Machine-readable dump: `docs/verification/physics-reality.json`.

## Verdict

**Painted Abyss First Dive is gameplay-first survival pacing, not a scuba physics simulator.** Swim speed and air are heavily compressed; buoyancy, ambient-pressure gas use, and unequal vertical control are omitted. Drag coasting is in a plausible order of magnitude. Predator chase timing is deliberately tuned so sprint escapes and cruise does not.

## What the game actually does

| System | Implementation | Measured value |
|---|---|---|
| Cruise swim | Target speed on WASD / Space / Q, then exponential lerp | **2.8 m/s** (~10 km/h) |
| Sprint swim | Shift while fin energy > 3 | **4.8 m/s** (~17 km/h) |
| Acceleration | `velocity.lerp(move, 1 − e^(−4·dt))` | τ ≈ **0.25 s**; ~95% of target in **0.75 s** |
| Coast after release | Same lerp toward 0 | **~0.68 m** / **~0.9 s** from cruise |
| Vertical vs horizontal | Same thrust magnitude on every axis | **Identical** step size; no gravity / buoyancy force |
| Depth band | `fits()` clamps `y` | **~6.45 m** water column |
| Air | `air −= dt` every frame | **240 s (4 min)** flat; reserve **+60 s** |
| Air vs depth / effort | None | Sprint at floor == cruise at ceiling (−1 s/s) |
| Fin energy | −18/s sprint, +17/s otherwise | **~5.6 s** full sprint; **~5.9 s** full regen |
| Guardian | Patrol 1.8 / alert 0.7 / chase **3.4** m/s | Chase beats cruise; loses to sprint |
| Torch “depth” | `torchModulation(y, pitch)` | Stylised murk, not Beer–Lambert optics |
| HUD `DEPTH` | `10 + (−z)·0.22 + (5−y)·2.4` | **~17 m** at start, **~42 m** at relic — theatrical |

Start → relic along −Z is **100 m**. At cruise that is **~36 s** of straight swimming (scripted full route ~89 s with fights and turns).

## Reality benchmarks (shallow recreational diving)

| Phenomenon | Typical real range | Game vs reality |
|---|---|---|
| Relaxed fin cruise | **0.25–0.5 m/s** (~0.5–1 kn; air-conserving) | Game cruise is **~6–11×** faster |
| Strong recreational kick | **0.8–1.2 m/s** | Game sprint is **~4×** the top of this band |
| Elite finswim / monofin burst | **~2–3 m/s** (often surface) | Game sprint **4.8** still above competitive burst |
| AL80 bottom time ~5–10 m | **~40–60 min** moderate SAC | Game **4 min** ≈ **7–15%** of a real tank |
| Gas vs depth | Use scales ~with ATA (`1 + depth/10`) | **No** pressure model |
| Vertical control | Buoyancy + BCD + slow finning | Free **6DOF flight**; up = forward speed |
| Stop kicking | Short coast under quadratic drag | **~0.7 m** coast — order-of-magnitude OK, very responsive |
| Cave depth here | Flooded entrance-scale chamber | **~6.5 m** band is shallow-cave plausible |

## System-by-system notes

### Swim speed — arcade
Cruise **2.8 m/s** is faster than most human underwater locomotion outside competition. Sprint **4.8 m/s** is fantasy for a tanked diver in a cave. That compression keeps a 2–4 minute mission readable and lets the guardian chase feel urgent without multi-minute pursuits.

### Gas / air — time-compressed timer
Air is a wall-clock fuse, not a cylinder. Real SAC would also rise with sprinting and with depth; the game spends air at **1 s/s** everywhere. The +60 s reserve is a design pickup, not a pony bottle sized to real litres.

### Buoyancy & gravity — omitted on purpose
There is no weight belt, BCD, or net buoyant force. Holding Space/Q moves you as fast as W/S. That matches many FPS underwater modes and diverges from diving, where vertical motion is the hard skill.

### Drag / inertia — closest to reality
The exponential approach with τ = 0.25 s gives snappy control and a short glide. Real water is “heavier,” but the coast distance is not wildly wrong for a game feel check.

### Depth & light — shallow set dressing + theatrical gauge
The collision column is only ~6.5 m. Torch modulation dims toward the floor and warms the beam; it is readability art, not an optical attenuation law. Fog also shifts with −Z progress into the cavern, not with hydrostatic depth.

The on-screen **DEPTH** readout is a separate fiction: at the entrance it shows **17 m** while you sit near mid-height in a ~6.5 m band, and it climbs to **~42 m** at the relic mostly because −Z advances (`×0.22`), not because you descended tens of metres. Full floor↔ceiling travel at the entrance only swings the HUD by ~15 m for ~6.5 m of real `y` motion. A real dive computer would track ambient pressure; this gauge sells “deeper cave” atmosphere.

### Browser spot-check
Manual play at `http://127.0.0.1:5173` confirmed AIR starting at **04:00** and ticking with wall clock, FINS at 100 until sprint, and DEPTH **17 m** near the start. Forward swim through the entrance tunnel matches the arcade-speed feel. Sprint fin drain is covered by the harness (~5.4 s to the stamina floor); automated browser Shift chords were unreliable in the headless GUI session.

### Predator pacing — designed, not zoological
Chase **3.4 m/s** sits between cruise and sprint so the player must burn fin energy or break line of sight. Real marine-reptile estimates vary widely; the important finding is the **relative** band, which is intentional.

## Method

1. Constants read from `CaveWorld` animate (`2.8` / `4.8`, `exp(−4·dt)`) and `Mission.update` (air, stamina, predator speeds).
2. Discrete 60 Hz integration of the same lerp for accel / coast.
3. Live `Mission` ticks for stamina empty/regen and air independence.
4. `moveBody` equality check for vertical vs horizontal thrust.
5. Automated test: `npm test -- tests/physics-reality.test.ts` (also runs in full `npm test`).

## Limits

- Units are inferred (not labelled in code); if designers intend “game units ≠ metres,” all absolute m/s comparisons scale, but **ratios** (cruise vs recreational, air compression) still hold.
- No human SAC lab measurement or tank-pressure telemetry; reality column uses standard recreational teaching ranges.
- Manual swim feel was checked in-browser separately; this document’s numbers come from the deterministic harness.
