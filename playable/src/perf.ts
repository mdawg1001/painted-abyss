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
 */
export const PERF = {
 /**
  * Render density cap. 1× = one framebuffer pixel per CSS pixel (the 0.21
  * playability floor). Retina 2× + bloom + MSAA is what made the dive feel
  * frame-by-frame on laptop Safari — do not raise without a proven governor.
  */
 dprCap: 1,
 /** Canvas MSAA stays off: the scene renders into the composer target. */
 antialias: false,
 /**
  * MSAA samples on the composer's scene target. Off by default — 4× on a
  * Retina framebuffer was the #191 crush path. The governor may still drop
  * further if a future build raises this again.
  */
 msaa: 0,
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
 /** Rock / sand / moss sampler anisotropy (was 8). */
 anisotropy: 4,
} as const;
