# Render-work verification

Native headless Chrome on the development machine; baseline GitHub main `ff38737` before this change. Measurements are local observations, not a guaranteed FPS gain.

| Check | Before | After |
| --- | --- | --- |
| Settled menu, three-second sample | 180 renders plus guard/light updates | No renders or presentation updates |
| 180 synthetic updates, 10 guards at 5 m | 3,600 mixer evaluations, 184.6 ms CPU | 3,600 evaluations, 185.7 ms CPU |
| Same fixture at 50 m | 3,600 evaluations, 172.4 ms CPU | 300 evaluations, 16.7 ms CPU |

The far fixture reduced mixer evaluations by 91.7%, preserving accumulated animation time. Nearby and urgent combat poses stay full-rate. The fixture keeps AI still to isolate animation cost; it does not measure the cost of a full gameplay frame.

Lighting profiling identified per-material uniform packing as avoidable work for off-screen volumes. The browser check verified identical relevant lights, positions, and intensity/color products for every visible target before and after a 180-degree camera turn. In that scene, the two views skipped 25 and 212 off-screen target volumes respectively. A preliminary timing sample changed from 47 ms to 42.5 ms across 180 lighting updates, but the asynchronous prop loads produced different target counts (241 versus 210), so this is not a controlled lighting speedup measurement.

Browser checks also passed for pause/resume without advancing the mission while paused, a single redraw after asset completion, resize redraw, hidden-tab suppression, and no rendering after disposal. Regression tests cover cadence/time conservation, urgent pose updates, existing guard action clips, combat feedback/hitstop, and the version label. Production TypeScript/Vite build passed.

Initial scene creation and shader compilation still cost time. In-flight downloads may finish while paused and request a redraw; this is intentional. Hanging-light simulation remains full-rate during gameplay: its measured cost was small relative to rendering, so it was left unchanged.
