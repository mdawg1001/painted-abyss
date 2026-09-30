/**
 * Playability profile — cut GPU/CPU work so the dive stops moving frame-by-frame.
 *
 * v0.21.0: DPR 1, MSAA off, shadows off, quarter-res bloom, fewer motes/spots.
 * v0.21.1: UnsignedByte composer buffers, fused impact+grade pass, light-scan
 * cadence, hanging emissive cache, rock anisotropy trim (further post/CPU cuts
 * on top of 0.21.0 without gutting rock maps or Ultrakill bloom).
 */
export const PERF = {
 /**
  * Highest render density (Retina 2×). The frame-time governor (resolutionGovernor.ts) steps down
  * from here under load and never below 1×, the old playability floor.
  */
 dprCap: 2,
 /** Canvas MSAA stays off: the scene renders into the composer target, which carries the MSAA. */
 antialias: false,
 /** MSAA samples on the composer's scene target at the top rungs (the governor may drop to 0). */
 msaa: 4,
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
 /**
  * Composer read/write buffer type. HalfFloat (~2× bandwidth) is wasteful for
  * this LDR post stack on Safari — keep UnsignedByte.
  */
 composerFloat: false,
 /** Rebuild the PointLight registry every N frames (scene.traverse is expensive). */
 lightScanFrames: 12,
 /** Rock / sand / moss sampler anisotropy (was 8). */
 anisotropy: 4,
} as const;
