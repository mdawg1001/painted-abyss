/**
 * "The Spatial Illusion": speed-driven field of view on a spring.
 *
 * The lens widens with speed and snaps back through a damped spring when you stop, so a hard
 * stop (a wall, the end of a slide) overshoots narrow before settling, like g-force on the eyes.
 *
 *   V_norm = clamp(|v| / vMax, 0, 1)
 *   target = baseFov + V_norm · (maxFov − baseFov)
 *   a      = −stiffness · (fov − target) − damping · fovVel     (per unit mass)
 *   fovVel += a·h;  fov += fovVel·h                              (semi-implicit Euler)
 *
 * The step is sub-divided to at most `maxStep` seconds, so the feel is the same at 30, 60 or
 * 240 Hz and a hitch frame cannot blow the spring up. With the defaults (k 180, c 12) the spring
 * is under-damped (ζ ≈ 0.45): a stop from top speed dips about 10° under the base before
 * settling within about 0.6 s.
 *
 * It also reports a 0..1 `warp` for the peripheral lens stretch in the post pass.
 *
 * Pure and allocation-free per frame: one instance, plain numbers, the velocity passed in as a
 * read-only vector.
 */

export const SPEED_FOV = {
 /** Idle lens (deg). */
 MIN_FOV: 60,
 /** Lens at top speed (deg). */
 MAX_FOV: 110,
 /** Speed that maps to MAX_FOV (m/s): a slide launch. */
 V_MAX: 7,
 SPRING_STIFFNESS: 180,
 SPRING_DAMPING: 12,
 /** Largest integration sub-step (s). */
 MAX_STEP: 1 / 240,
 /** Never let an overshoot squeeze the lens below this (deg). */
 FLOOR_FOV: 35,
 /** Peripheral stretch at top speed (0 = none; ~0.08 pulls the walls visibly to the edges). */
 WARP_MAX: .08,
};

export type SpeedFovConfig = typeof SPEED_FOV;

export class SpeedFov {
 /** Current (sprung) field of view, deg. */
 fov: number;
 /** Rate of change of the FOV, deg/s. */
 fovVel = 0;
 /** Where the spring is heading, deg. */
 target: number;
 /** Normalised speed 0..1 from the last update. */
 vNorm = 0;

 constructor(public cfg: SpeedFovConfig = SPEED_FOV) {
  this.fov = cfg.MIN_FOV;
  this.target = cfg.MIN_FOV;
 }

 /** Target FOV for a speed (m/s). */
 targetFor(speed: number) {
  const c = this.cfg;
  const v = Math.min(1, Math.max(0, speed / c.V_MAX));
  return c.MIN_FOV + v * (c.MAX_FOV - c.MIN_FOV);
 }

 /**
  * Advance the spring by dt toward the FOV for `velocity` (read only; any object with x/y/z).
  * Returns the new FOV. No allocations.
  */
 update(velocity: { readonly x: number; readonly y: number; readonly z: number }, dt: number) {
  const c = this.cfg;
  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z);
  this.vNorm = Math.min(1, Math.max(0, speed / c.V_MAX));
  this.target = c.MIN_FOV + this.vNorm * (c.MAX_FOV - c.MIN_FOV);
  if (!(dt > 0)) return this.fov;
  const n = Math.max(1, Math.ceil(dt / c.MAX_STEP));
  const h = dt / n;
  for (let i = 0; i < n; i++) {
   const a = -c.SPRING_STIFFNESS * (this.fov - this.target) - c.SPRING_DAMPING * this.fovVel;
   this.fovVel += a * h;
   this.fov += this.fovVel * h;
  }
  if (this.fov < c.FLOOR_FOV) { this.fov = c.FLOOR_FOV; if (this.fovVel < 0) this.fovVel = 0; }
  return this.fov;
 }

 /** Peripheral warp 0..WARP_MAX, following how far the sprung lens is past idle. */
 warp() {
  const c = this.cfg;
  const t = (this.fov - c.MIN_FOV) / (c.MAX_FOV - c.MIN_FOV);
  return Math.min(1, Math.max(0, t)) * c.WARP_MAX;
 }

 /** Snap to idle (spawn, respawn, water entry). */
 reset() { this.fov = this.target = this.cfg.MIN_FOV; this.fovVel = 0; this.vNorm = 0; }
}
