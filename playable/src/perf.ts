/**
 * Playability profile — cut GPU/CPU work so the dive stops moving frame-by-frame.
 *
 * v0.21.0: DPR 1, MSAA off, shadows off, quarter-res bloom, fewer motes/spots.
 * v0.21.1: UnsignedByte composer buffers, fused impact+grade pass, light-scan
 * cadence, hanging emissive cache, rock anisotropy trim (further post/CPU cuts
 * on top of 0.21.0 without gutting rock maps or Ultrakill bloom).
 * v0.22.14 (#191): raised to Retina 2× + 4× MSAA behind a frame-time governor.
 * That top rung crushed Safari/laptops when the governor was slow to drop
 * (multi-second cooldown ladder) — restore the playability floor as the cap.
 * v0.22.37: dprCap 1 / MSAA 0 again; fewer motes; slower light scans; governor
 * starts at the cheap floor so a failed probe never leaves Retina+MSAA stuck on.
 * v0.24.3: mild sharpness path — cap 1.5× + 2× MSAA. Governor still boots on
 * the 1× / no-MSAA floor and only probes up when frames stay on budget, so a
 * lagging drop cannot pin Safari on the old 2×/4× crush rung.
 */
export const PERF = {
 /**
  * Render density cap. 1.5× is a middle ground between the 1× playability floor
  * and the Retina 2× that crushed Safari in #191. The governor starts at 1× and
  * only climbs when frame time allows.
  */
 dprCap: 1.5,
 /** Canvas MSAA stays off: the scene renders into the composer target. */
 antialias: false,
 /**
  * MSAA samples on the composer's scene target. 2× softens geometry edges
  * without the 4× (#191) cost. Floor rung of the governor still forces 0.
  */
 msaa: 2,
 /**
  * Shadow maps (torch SpotLight + one hanging tube) each re-render the scene.
  * Silhouettes go; pools and grade stay.
  */
 shadows: false,
 /** Bloom targets as a fraction of canvas (was 0.5). */
 bloomResScale: 0.25,
 /** Suspended motes in the water column (was 1800 → 360). */
 particleCount: 200,
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
 lightScanFrames: 20,
 /** Rock / sand / moss sampler anisotropy — sharper wall/floor textures. */
 anisotropy: 8,
} as const;
