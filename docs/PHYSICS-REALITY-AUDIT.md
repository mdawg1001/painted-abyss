# Physics vs reality — First Dive audit

Measured from `playable/src/CaveWorld.ts` locomotion and `playable/src/simulation.ts` mission rules. World units are treated as **metres** (`CELL = 4`, playable height `y ∈ [0.65, 7.1]`). Machine-readable dump: `docs/verification/physics-reality.json`.

## Verdict

**Painted Abyss First Dive is gameplay-first survival pacing, not a scuba physics simulator.** Swim speed and air are heavily compressed; buoyancy, ambient-pressure gas use, and unequal vertical control are omitted. Drag coasting is in a plausible order of magnitude. Predator chase timing is deliberately tuned so sprint escapes and cruise does not.

## What the game actually does

| System | Implementation | Measured value |
|---|---|---|
| Cruise swim | Force kick + quadratic drag | **~2.2 m/s** (`sqrt(8.7/1.8)`) |
| Sprint swim | Shift while fin energy > 3 | **~3.5 m/s** (`sqrt(22.05/1.8)`) |
| Acceleration | Thrust − k\|v\|v | Terminal speed from thrust vs drag |
| Coast after release | Quadratic drag to rest | Short coast (sub‑2 m from cruise) |
| Vertical vs horizontal | Look/strafe kick; Space/Q = BCD | **Buoyancy state −1..+1**, not equal XYZ thrust |
| Depth band | `fits()` clamps `y` | **~6.45 m** water column |
| Air | Free-gas litres; `airConsumeRate(y,sprint)` | **72 L** tank (~4 min surface cruise) |
| Air vs depth / effort | SAC × ATA | Cruise 18 L/min, sprint 28 L/min × `ata(y)` |
| Air reserve | +18 L free gas | ≈ 60 s surface cruise |
| Fin energy | −18/s sprint, +17/s otherwise | **~5.4 s** full sprint; **~5.7 s** full regen |
| Guardian | Patrol 1.3 / alert 0.5 / chase **2.7** m/s | Chase between cruise and sprint |
| Torch “depth” | `torchModulation` via `hydrostaticDepth` | Stylised murk, not Beer–Lambert optics |
| HUD `DEPTH` | `round(SURFACE_Y − y)` via `hydrostaticDepth` | **~4 m** at start, **~6 m** at floor — hydrostatic |

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

### Swim speed — gameplay-paced force model
Cruise **~2.2 m/s** and sprint **~3.5 m/s** come from thrust vs quadratic drag. Tuned for readable mission timing while keeping the force model (not the old target-velocity 2.8 / 4.8 lerp). Space/Q still drive BCD buoyancy with neutral trim.

### Gas / air — SAC × ATA
Air is free-gas **litres** (`AIR_TANK_LITRES = 72`, ≈ 4 minutes of surface cruise at 18 L/min). Each tick burns `(SAC/60) × ata(y) × dt`, with sprint SAC 28 L/min. Deeper water and sprinting shorten the fuse; the HUD clock shows surface-equivalent remaining time. The reserve adds **+18 L** (≈ 60 s surface cruise), not wall-clock seconds.

### Buoyancy — BCD state
`Mission.buoyancy` (−1..+1) is driven by Space/Q and trims toward 0 when released. Vertical kick from look pitch remains on WASD look-forward; pure up/down is buoyancy accel (`SWIM_BUOYANCY_ACCEL`).

### Drag / inertia — quadratic
`stepSwimVelocity` applies `−k|v|v`. Coast after releasing kick is short.

### Depth & light — shallow set dressing + hydrostatic gauge
The collision column is only ~6.5 m. Torch modulation dims toward the floor and warms the beam using the same `hydrostaticDepth` model as the HUD; murk remains readability art, not an optical attenuation law. Fog still shifts with −Z progress into the cavern for atmosphere, separate from hydrostatic depth.

The on-screen **DEPTH** readout is now `round(SURFACE_Y − y)` (**~4 m** at start, **0 m** at the ceiling, **~6 m** at the floor). Cavern −Z no longer inflates the gauge. `ata(y)` is exported for upcoming gas/buoyancy work; air consumption is still the flat 4-minute timer.

### Browser spot-check
Manual play should show DEPTH tracking swim height only (not tunnel progress). AIR still starts at **04:00**. Sprint fin drain remains harness-covered (~5.4 s).

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
