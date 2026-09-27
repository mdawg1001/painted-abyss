/**
 * Playability profile — cut GPU work so the dive stops moving frame-by-frame.
 *
 * Targets ~5× cheaper frames vs the Retina + MSAA + dual-shadow + half-res bloom
 * stack without gutting the bunker look (rock maps, hanging tubes, grade, HUD stay).
 */
export const PERF = {
 /** Cap device pixel ratio. 1.0 avoids Retina fill-rate cliffs with the composer. */
 dprCap: 1,
 /** MSAA costs a full extra resolve; off for the dive canvas. */
 antialias: false,
 /**
  * Shadow maps (torch SpotLight + one hanging tube) each re-render the scene.
  * Silhouettes go; pools and grade stay.
  */
 shadows: false,
 /** Bloom targets as a fraction of canvas (was 0.5). */
 bloomResScale: 0.25,
 /** Suspended motes in the water column (was 1800). */
 particleCount: 360,
 /** Active hanging-tube spotlights following nearest lamps (was 5). */
 hangingLightPool: 3,
 /** How many of those spots cast shadows (was 1). */
 hangingShadowed: 0,
} as const;
