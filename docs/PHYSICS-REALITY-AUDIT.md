# Physics vs reality — First Dive audit

Measured from `playable/src/CaveWorld.ts` locomotion and `playable/src/simulation.ts` mission rules. World units are treated as **metres** (`CELL = 4`, playable height `y ∈ [0.65, 7.1]`). Machine-readable dump: `docs/verification/physics-reality.json`.

## Verdict

**Painted Abyss First Dive is gameplay-first survival pacing, not a scuba physics simulator.** Swim speed and air are heavily compressed for a short mission fuse; gas burn scales with ATA and effort; vertical motion is a BCD skill (not equal XYZ flight). Drag coasting is in a plausible order of magnitude. Predator chase timing is deliberately tuned so sprint escapes and cruise does not.

## What the game actually does

| System | Implementation | Measured value |
|---|---|---|
| Cruise swim | Force kick + quadratic drag | **~2.2 m/s** (`sqrt(8.7/1.8)`) |
| Sprint swim | Shift while fin energy > 3 | **~3.5 m/s** (`sqrt(22.05/1.8)`) |
| Acceleration | Thrust − k\|v\|v | Terminal speed from thrust vs drag |
| Coast after release | Quadratic drag to rest | Short coast (sub‑2 m from cruise) |
| Vertical vs horizontal | Space/Q = BCD; look-kick Y attenuated | **Buoyancy −1..+1**; kick Y × **0.25** |
| Depth band | `fits()` clamps `y` | **~6.45 m** water column |
| Air | Surface-second tank × ATA × effort | **90 s** main + **30 s** pony bailout |
| Air vs depth / effort | `gasDrainRate(y,sprint,panic)` | Floor sprint ≈ **3.6×** surface cruise |
| Fin energy | −18/s sprint, +17/s otherwise | **~5.4 s** full sprint; **~5.7 s** full regen |
| Guardian | Patrol 1.3 / alert 0.5 / chase **2.7** m/s | Chase between cruise and sprint |
| Torch “depth” | Shared Beer–Lambert `torchModulation` via `hydrostaticDepth` | Coastal-cave murk |
| HUD `DEPTH` | `round(SURFACE_Y − y)` via `hydrostaticDepth` | **~4 m** at start, **~6 m** at floor |
| HUD `TRIM` | Bipolar meter from `Mission.buoyancy` | FLOAT / LEVEL / SINK |

Start → relic along −Z is **100 m**. At cruise that is **~36 s** of straight swimming (scripted full route ~89 s with fights and turns).

## Reality benchmarks (shallow recreational diving)

| Phenomenon | Typical real range | Game vs reality |
|---|---|---|
| Relaxed fin cruise | **0.25–0.5 m/s** (~0.5–1 kn; air-conserving) | Game cruise is **~6–11×** faster |
| Strong recreational kick | **0.8–1.2 m/s** | Game sprint is **~3×** the top of this band |
| Elite finswim / monofin burst | **~2–3 m/s** (often surface) | Game sprint **~3.5** sits near competitive burst |
| AL80 bottom time ~5–10 m | **~40–60 min** moderate SAC | Game **1.5 min** surface ≈ **2–4%** of a real tank |
| Gas vs depth | Use scales ~with ATA (`1 + depth/10`) | **Yes** — ATA × effort (tank still time-compressed) |
| Vertical control | Buoyancy + BCD + slow finning | **BCD skill** + attenuated look-kick |
| Stop kicking | Short coast under quadratic drag | Sub‑2 m coast — order-of-magnitude OK |
| Cave depth here | Flooded entrance-scale chamber | **~6.5 m** band is shallow-cave plausible |

## System-by-system notes

### Swim speed — gameplay-paced force model
Cruise **~2.2 m/s** and sprint **~3.5 m/s** come from thrust vs quadratic drag. Tuned for readable mission timing while keeping the force model.

### Gas / air — SAC × ATA × effort
Main tank is **90 surface-seconds**; pony bailout is a separate **30 s** pool. Each tick burns `1 × ata(y) × effort × dt` (sprint 2.2×, panic 2.9×). Deeper water and hard kicking shorten the fuse.

### Buoyancy — BCD player skill
`Mission.buoyancy` (−1..+1) is the vertical control state. Space approaches +1, Q approaches −1, idle drifts toward `buoyancyTrim` (default 0). Space/Q never set `vy` directly — they feed `SWIM_BUOYANCY_ACCEL` (~**1.5 m/s** terminal float). Look-pitch finning still adds a **bit** of vertical thrust (`SWIM_KICK_VERTICAL_SCALE = 0.25`) so the player is not helpless without the BCD, but pure look-up flight is gone.

### Drag / inertia — quadratic
`stepSwimVelocity` applies `−k|v|v`. Coast after releasing kick is short.

### Depth & light — shallow set dressing + hydrostatic gauge
The collision column is only ~6.5 m. Torch modulation and HUD DEPTH share `hydrostaticDepth`. Fog still shifts with −Z progress into the cavern for atmosphere.

### Browser spot-check
DEPTH tracks swim height only. AIR starts at **01:30** surface-equivalent. TRIM shows FLOAT/LEVEL/SINK from the BCD state. Sprint fin drain remains harness-covered (~5.4 s).

### Predator pacing — designed, not zoological
Chase **2.7 m/s** sits between cruise and sprint so the player must burn fin energy or break line of sight.

## Method

1. Constants read from `simulation.ts` (thrust/drag, SAC/ATA, BCD) and `CaveWorld` animate integration.
2. Discrete 60 Hz integration of force swim for terminal speed / coast / BCD float.
3. Live `Mission` ticks for stamina and gas (deep sprint vs shallow cruise).
4. `updateBuoyancy` / `stepSwimVelocity` checks for vertical vs horizontal control.
5. Automated test: `npm test -- tests/physics-reality.test.ts` (also runs in full `npm test`).

## Limits

- Units are inferred (not labelled in code); if designers intend “game units ≠ metres,” all absolute m/s comparisons scale, but **ratios** (cruise vs recreational, air compression) still hold.
- No human SAC lab measurement or tank-pressure telemetry; reality column uses standard recreational teaching ranges.
- Manual swim feel was checked in-browser separately; this document’s numbers come from the deterministic harness.
