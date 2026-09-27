/**
 * Movement tech on foot: directional dash and momentum slide.
 *
 * A small kinematic state machine that sits on top of the human gait (`gait.ts`). While the
 * diver walks, the gait owns speed; the moment a dash or slide starts, this module owns the
 * velocity vector outright, then hands a speed and heading back to the gait when it ends.
 * Everything here is plain vector math with SI units, no engine physics:
 *
 *  - Dash: velocity is overwritten (not added to) with `speed` along the wished direction in the
 *    camera's horizontal frame, held flat for `duration` with gravity and vertical velocity
 *    suspended, then a strict `cooldown` from the moment it ends. One press = one dash.
 *  - Slide: only from a run (ground speed ≥ `minSpeed`); otherwise the same key is a crouch.
 *    Starts with a forward `boost`, then Coulomb (kinetic) friction μk·g·cosθ against the motion
 *    and gravity's along-slope component g·sinθ, with the velocity kept in the ground plane.
 *    Downhill steeper than atan(μk) the slide gains speed; on the flat it bleeds off at μk·g.
 *  - Capsule height drops to 50 % (bottom anchored, so only the eye moves). Rising back is gated
 *    by a headroom probe supplied by the renderer: blocked overhead = stay low.
 *
 * Pure: no THREE, no DOM. `CaveWorld` feeds input, the ground normal and the headroom probe.
 */
import { GAIT_SPEED } from './gait';
import { SURVIVAL } from './survivalConfig';

export type V3 = { x: number; y: number; z: number };

export const MOVE_TECH = {
 /** Standing capsule (m): 1.75 m body, eye 0.15 m under the crown (eye = WALK_EYE_Y). */
 body: { height: 1.75, eyeBelowCrown: .15 },
 dash: {
  /** Ground speed during the dash (m/s): a hard two-step lunge, ~1.2 m covered. */
  speed: 8,
  duration: .15,
  /** Counted from the end of the dash. */
  cooldown: .5,
  /** A press this early before the cooldown ends still fires when it does (s). */
  buffer: .1,
  /** Legs pay for it: stamina spent per dash, and the minimum needed to start one. */
  staminaCost: 10,
 },
 slide: {
  /** Ground speed needed to slide instead of crouch (m/s): well into the run band. */
  minSpeed: 2.6,
  /** Forward speed added on the drop (m/s). */
  boost: 1.6,
  /** Kinetic friction, clothed body on smooth concrete (≈0.3–0.4). */
  frictionMu: .34,
  gravity: 9.81,
  /** Slide ends and becomes a crouch-walk at this speed (the crouch-walk pace). */
  exitSpeed: GAIT_SPEED.walk * SURVIVAL.stealth.speedFactor,
  /** Capsule height while sliding, as a share of standing. */
  heightFraction: .5,
  /** Steering authority while sliding (rad/s the heading can swing toward the wish). */
  steerRate: 1.4,
  /** Camera roll toward the slide (deg) and how fast it leans in / out (1/s). */
  tiltDeg: 2.5,
  tiltRate: 14,
 },
 /** Capsule height change rates (m/s): dropping is near-instant, standing up is a movement. */
 height: { dropRate: 12, riseRate: SURVIVAL.stealth.eyeDrop / SURVIVAL.stealth.blendSeconds },
} as const;

export const STAND_HEIGHT = MOVE_TECH.body.height;
export const CROUCH_HEIGHT = MOVE_TECH.body.height - SURVIVAL.stealth.eyeDrop;
export const SLIDE_HEIGHT = MOVE_TECH.body.height * MOVE_TECH.slide.heightFraction;

export type TechMode = 'walk' | 'crouch' | 'dash' | 'slide';

export type TechState = {
 mode: TechMode;
 /** World velocity while this module owns movement (dash / slide). */
 vel: V3;
 /** Seconds left in the current dash. */
 dashLeft: number;
 /** Seconds until another dash may start. */
 dashCooldown: number;
 /** Seconds left on a buffered dash press (0 = none). */
 dashQueued: number;
 /** A slide press waiting for this frame's update. */
 slideQueued: boolean;
 /** Current capsule height (m), floor-anchored. */
 height: number;
 /** Camera roll (rad), positive = lean right (apply as camera.rotation.z −= roll). */
 roll: number;
 /** Last headroom verdict (true = something overhead stopped us rising). */
 blocked: boolean;
};

export function makeTech(): TechState {
 return { mode: 'walk', vel: { x: 0, y: 0, z: 0 }, dashLeft: 0, dashCooldown: 0, dashQueued: 0, slideQueued: false, height: STAND_HEIGHT, roll: 0, blocked: false };
}

/** Key-down edge for dash. Held keys never repeat it: the listener ignores auto-repeat. */
export function requestDash(st: TechState) { st.dashQueued = MOVE_TECH.dash.buffer + 1e-6; }
/** Key-down edge for slide / crouch. */
export function requestSlide(st: TechState) { st.slideQueued = true; }

/** Eye drop below the standing eye for the current capsule (m). */
export function eyeDrop(st: TechState) { return STAND_HEIGHT - st.height; }

/** Owns movement this frame (the gait is bypassed). */
export function techOwnsMovement(st: TechState) { return st.mode === 'dash' || st.mode === 'slide'; }

const len2 = (x: number, z: number) => Math.hypot(x, z);

/**
 * Per-frame input, all in the camera's horizontal frame.
 *  - wishX / wishZ: WASD as body-frame intent (x right, z forward), −1..1.
 *  - fwd / right: unit horizontal camera basis in world space.
 *  - crouchHeld: the slide / crouch key is down.
 *  - groundSpeed / groundVel: what the gait is doing right now (world, m/s).
 *  - normal: unit ground normal under the feet.
 *  - stamina: current stamina (0..100); a dash spends from it.
 *  - drag: wading multiplier 0.2..1 (1 = dry floor).
 *  - headroom(h): true when a capsule of height h fits here.
 */
export type TechInput = {
 wishX: number; wishZ: number;
 fwd: { x: number; z: number }; right: { x: number; z: number };
 crouchHeld: boolean;
 groundSpeed: number; groundVel: { x: number; z: number };
 normal: V3;
 stamina: number;
 drag: number;
 headroom: (height: number) => boolean;
};

export type TechEvents = {
 dashed: boolean;
 slid: boolean;
 /** Stamina to spend this frame. */
 staminaSpent: number;
 /** Speed and world heading handed back to the gait when a dash or slide ends. */
 handoff: { speed: number; x: number; z: number } | null;
};

/** World direction of the wish in the camera's horizontal frame; no input = straight ahead. */
export function wishDirection(inp: Pick<TechInput, 'wishX' | 'wishZ' | 'fwd' | 'right'>) {
 let x = inp.right.x * inp.wishX + inp.fwd.x * inp.wishZ;
 let z = inp.right.z * inp.wishX + inp.fwd.z * inp.wishZ;
 const l = len2(x, z);
 if (l < 1e-6) { x = inp.fwd.x; z = inp.fwd.z; }
 const n = len2(x, z) || 1;
 return { x: x / n, z: z / n };
}

/** Remove the component of v along the unit normal n (keeps motion in the ground plane). */
export function projectOnPlane(v: V3, n: V3): V3 {
 const d = v.x * n.x + v.y * n.y + v.z * n.z;
 return { x: v.x - n.x * d, y: v.y - n.y * d, z: v.z - n.z * d };
}

/**
 * One slide integration step on a plane with normal n: gravity's tangential part plus kinetic
 * friction μk·g·cosθ opposing the velocity. Returns the new in-plane velocity.
 */
export function slideStep(v: V3, n: V3, dt: number, mu: number = MOVE_TECH.slide.frictionMu, g: number = MOVE_TECH.slide.gravity): V3 {
 const cos = Math.max(0, n.y);
 // Tangential gravity: (0,−g,0) minus its normal component.
 const gt = projectOnPlane({ x: 0, y: -g, z: 0 }, n);
 let u = projectOnPlane(v, n);
 u = { x: u.x + gt.x * dt, y: u.y + gt.y * dt, z: u.z + gt.z * dt };
 const speed = Math.hypot(u.x, u.y, u.z);
 const fr = mu * g * cos * dt;
 if (speed <= fr) return { x: 0, y: 0, z: 0 };
 const k = (speed - fr) / speed;
 return { x: u.x * k, y: u.y * k, z: u.z * k };
}

/** Heading from the in-plane velocity, or the fallback when stopped. */
function flatDir(v: V3, fb: { x: number; z: number }) {
 const l = len2(v.x, v.z);
 return l > 1e-5 ? { x: v.x / l, z: v.z / l } : fb;
}

/**
 * Advance the state machine one frame. Call once per sim frame, before the body moves;
 * then move the body by `st.vel * dt` when `techOwnsMovement(st)`.
 */
export function stepTech(st: TechState, inp: TechInput, dt: number): TechEvents {
 const ev: TechEvents = { dashed: false, slid: false, staminaSpent: 0, handoff: null };
 const D = MOVE_TECH.dash, S = MOVE_TECH.slide;
 const wish = wishDirection(inp);

 // ── Dash: timers first, so the cooldown is exact to the frame. ──────────────────
 if (st.mode !== 'dash') st.dashCooldown = Math.max(0, st.dashCooldown - dt);
 const canDash = st.mode !== 'dash' && st.dashCooldown <= 0 && inp.stamina >= D.staminaCost;
 if (st.dashQueued > 0 && canDash) {
  // Overwrite, never add: the dash vector replaces whatever momentum we had.
  const speed = D.speed * inp.drag;
  st.vel = { x: wish.x * speed, y: 0, z: wish.z * speed };
  st.mode = 'dash';
  st.dashLeft = D.duration;
  st.dashQueued = 0;
  st.slideQueued = false;
  ev.dashed = true;
  ev.staminaSpent = D.staminaCost;
 } else {
  st.dashQueued = Math.max(0, st.dashQueued - dt);
 }

 if (st.mode === 'dash') {
  // Gravity and vertical decay suspended: flat, constant velocity for the whole window.
  st.vel.y = 0;
  st.dashLeft -= dt;
  if (st.dashLeft <= 0) {
   st.dashLeft = 0;
   st.dashCooldown = D.cooldown;
   const speed = len2(st.vel.x, st.vel.z);
   // Holding the slide key through a dash lands straight into a slide with the dash's speed.
   if (inp.crouchHeld && speed >= S.minSpeed) {
    // Legs can't hold more than a boosted run on the drop: cap the carried-in speed.
    const cap = Math.min(speed, (GAIT_SPEED.run + S.boost) * inp.drag) / (speed || 1);
    st.vel = { x: st.vel.x * cap, y: 0, z: st.vel.z * cap };
    st.mode = 'slide';
    ev.slid = true;
   } else {
    st.mode = inp.crouchHeld ? 'crouch' : 'walk';
    const dir = flatDir(st.vel, wish);
    ev.handoff = { speed: Math.min(speed, GAIT_SPEED.run), x: dir.x, z: dir.z };
   }
  }
 }

 // ── Slide start: only from a run; from anything slower the key is a crouch. ─────
 if (st.slideQueued && st.mode !== 'dash' && st.mode !== 'slide') {
  if (inp.groundSpeed >= S.minSpeed) {
   const dir = flatDir({ x: inp.groundVel.x, y: 0, z: inp.groundVel.z }, wish);
   const speed = (inp.groundSpeed + S.boost) * inp.drag;
   st.vel = projectOnPlane({ x: dir.x * speed, y: 0, z: dir.z * speed }, inp.normal);
   // Projection shortens it on a slope; restore the full launch speed along the plane.
   const l = Math.hypot(st.vel.x, st.vel.y, st.vel.z) || 1;
   st.vel = { x: st.vel.x / l * speed, y: st.vel.y / l * speed, z: st.vel.z / l * speed };
   st.mode = 'slide';
   ev.slid = true;
  } else {
   st.mode = 'crouch';
  }
 }
 st.slideQueued = false;

 // ── Slide integration ───────────────────────────────────────────────────────────
 if (st.mode === 'slide') {
  // Wading adds drag on top of floor friction (drag 1 dry → 0.3 waist-deep).
  const mu = S.frictionMu / Math.max(.2, inp.drag);
  let v = slideStep(st.vel, inp.normal, dt, mu);
  // A little steering: swing the heading toward the wish, never add speed.
  const sp = Math.hypot(v.x, v.y, v.z);
  if (sp > 1e-4 && len2(inp.wishX, inp.wishZ) > .1) {
   const cur = flatDir(v, wish);
   const a = Math.atan2(cur.z, cur.x), b = Math.atan2(wish.z, wish.x);
   let d = b - a; d = Math.atan2(Math.sin(d), Math.cos(d));
   const turn = Math.max(-S.steerRate * dt, Math.min(S.steerRate * dt, d));
   const h = len2(v.x, v.z), c = Math.cos(a + turn), s = Math.sin(a + turn);
   v = projectOnPlane({ x: c * h, y: v.y, z: s * h }, inp.normal);
   const l = Math.hypot(v.x, v.y, v.z) || 1;
   v = { x: v.x / l * sp, y: v.y / l * sp, z: v.z / l * sp };
  }
  st.vel = v;
  const speed = Math.hypot(v.x, v.y, v.z);
  if (speed <= S.exitSpeed) {
   // Momentum spent: crouch-walk if the key is held (or the ceiling forces it), else stand.
   const stand = !inp.crouchHeld && inp.headroom(STAND_HEIGHT);
   st.mode = stand ? 'walk' : 'crouch';
   const dir = flatDir(v, wish);
   ev.handoff = { speed, x: dir.x, z: dir.z };
  } else if (!inp.crouchHeld && inp.headroom(STAND_HEIGHT)) {
   // Released with room overhead: pop up and run on with the slide's speed (capped at a run).
   st.mode = 'walk';
   const dir = flatDir(v, wish);
   ev.handoff = { speed: Math.min(speed, GAIT_SPEED.run), x: dir.x, z: dir.z };
  }
  // Released under a ceiling: stay in the slide until it clears.
 }

 // ── Crouch ⇄ walk, gated by headroom ────────────────────────────────────────────
 if (st.mode === 'walk' && inp.crouchHeld) st.mode = 'crouch';
 if (st.mode === 'crouch' && !inp.crouchHeld && inp.headroom(STAND_HEIGHT)) st.mode = 'walk';

 // ── Capsule height: bottom-anchored, drop fast, rise only into free space ───────
 const target = st.mode === 'slide' ? SLIDE_HEIGHT : st.mode === 'crouch' ? CROUCH_HEIGHT : st.mode === 'dash' ? st.height : STAND_HEIGHT;
 if (target < st.height) {
  st.height = Math.max(target, st.height - MOVE_TECH.height.dropRate * dt);
  st.blocked = false;
 } else if (target > st.height) {
  const next = Math.min(target, st.height + MOVE_TECH.height.riseRate * dt);
  st.blocked = !inp.headroom(next);
  if (!st.blocked) st.height = next;
 } else st.blocked = false;

 // ── Camera roll toward the slide's side (lean left on a straight slide) ─────────
 let rollTarget = 0;
 if (st.mode === 'slide') {
  const d = flatDir(st.vel, wish);
  const side = d.x * inp.right.x + d.z * inp.right.z;
  const lean = Math.abs(side) < .2 ? -1 : Math.sign(side);
  rollTarget = lean * S.tiltDeg * Math.PI / 180;
 }
 st.roll += (rollTarget - st.roll) * (1 - Math.exp(-S.tiltRate * dt));

 return ev;
}
