/**
 * "The Spatial Illusion": speed-driven field of view on a spring.
 *
 * The lens widens with speed and snaps back through a damped spring when you stop, so a hard
 * stop (a wall, the end of a slide) overshoots narrow before settling, like g-force on the eyes.
 *
 *   V_norm = clamp((|v_h| − vMin) / (vMax − vMin), 0, 1)   (|v_h| filtered: slow up, fast down)
 *   target = baseFov + V_norm · (maxFov − baseFov)
 *   a      = −stiffness · (fov − target) − damping · fovVel     (per unit mass)
 *   fovVel += a·h;  fov += fovVel·h                              (semi-implicit Euler)
 *
 * The step is sub-divided to at most `maxStep` seconds, so the feel is the same at 30, 60 or
 * 240 Hz and a hitch frame cannot blow the spring up. With the defaults (k 150, c 13.5) the
 * spring is lightly under-damped (ζ ≈ 0.55): a stop from top speed snaps the 18° back in about
 * 0.2 s, dips about 2° under the base, and settles within about half a second. Walking never
 * moves the lens.
 *
 * It also reports a 0..1 `warp` for the peripheral lens stretch in the post pass.
 *
 * Pure and allocation-free per frame: one instance, plain numbers, the velocity passed in as a
 * read-only vector.
 */

export const SPEED_FOV = {
 /** Idle lens (deg), the game's normal view. */
 MIN_FOV: 64,
 /** Lens at top speed (deg): +18°, a rush without melting the walls. */
 MAX_FOV: 82,
 /** Below this speed the lens does not move at all (m/s): walking stays a normal view. */
 V_MIN: 1.6,
 /** Speed that maps to MAX_FOV (m/s): a slide launch. A run (3.4) gets about a third. */
 V_MAX: 7,
 /**
  * Speed filter: the lens follows speed up slowly (s) so the stride's own speed ripple never
  * makes the view pulse, and follows it down almost at once so a stop still snaps.
  */
 RISE_SECONDS: .25,
 FALL_SECONDS: .03,
 SPRING_STIFFNESS: 150,
 /** ζ ≈ 0.55: a short, hard snap with one small overshoot, not a wobble. */
 SPRING_DAMPING: 13.5,
 /** Largest integration sub-step (s). */
 MAX_STEP: 1 / 240,
 /** Never let an overshoot squeeze the lens below this (deg). */
 FLOOR_FOV: 50,
 /** Peripheral stretch at top speed: a hint of tunnel, not a fisheye. */
 WARP_MAX: .025,
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
 /** Filtered horizontal speed (m/s) the target is built from. */
 speed = 0;

 constructor(public cfg: SpeedFovConfig = SPEED_FOV) {
  this.fov = cfg.MIN_FOV;
  this.target = cfg.MIN_FOV;
 }

 /** Target FOV for a speed (m/s). */
 targetFor(speed: number) {
  const c = this.cfg;
  const v = Math.min(1, Math.max(0, (speed - c.V_MIN) / (c.V_MAX - c.V_MIN)));
  return c.MIN_FOV + v * (c.MAX_FOV - c.MIN_FOV);
 }

 /**
  * Advance the spring by dt toward the FOV for `velocity` (read only; any object with x/y/z).
  * Returns the new FOV. No allocations.
  */
 update(velocity: { readonly x: number; readonly y: number; readonly z: number }, dt: number) {
  const c = this.cfg;
  if (!(dt > 0)) return this.fov;
  // Horizontal speed only: bobbing up and down in the water is not "going fast".
  const raw = Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z);
  const n = Math.max(1, Math.ceil(dt / c.MAX_STEP));
  const h = dt / n;
  const kUp = 1 - Math.exp(-h / c.RISE_SECONDS), kDown = 1 - Math.exp(-h / c.FALL_SECONDS);
  for (let i = 0; i < n; i++) {
   // Filter and spring share the sub-step, so every frame rate traces the same curve.
   this.speed += (raw - this.speed) * (raw > this.speed ? kUp : kDown);
   this.vNorm = Math.min(1, Math.max(0, (this.speed - c.V_MIN) / (c.V_MAX - c.V_MIN)));
   this.target = c.MIN_FOV + this.vNorm * (c.MAX_FOV - c.MIN_FOV);
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
 reset() { this.fov = this.target = this.cfg.MIN_FOV; this.fovVel = 0; this.vNorm = 0; this.speed = 0; }
}
