/**
 * Movement tech on foot: jump and momentum slide.
 *
 * A small kinematic state machine that sits on top of the human gait (`gait.ts`). While the
 * diver walks, the gait owns speed; the moment he jumps or slides, this module owns the velocity
 * vector outright, then hands a speed and heading back to the gait when the move ends.
 * Everything here is plain vector math with SI units, no engine physics:
 *
 *  - Jump (Space): a vertical take-off at √(2·g·h) for a `height` jump, under real gravity. The
 *    ground velocity at take-off is kept (no air drag worth modelling at these speeds) with a
 *    little air control. A jump out of a slide keeps the slide's speed. Landing with the slide
 *    key held at speed rolls straight into a slide (no second boost).
 *  - Slide (C at a run): a forward `boost` on the drop, then Coulomb friction μk·g·cosθ against
 *    the motion and gravity's along-slope part g·sinθ, velocity kept in the ground plane.
 *    μk is a wet bunker floor: low enough that a slide out-runs a run for about two seconds.
 *  - Capsule height eases to 50 % (bottom anchored, so only the eye moves). Rising back is gated
 *    by a headroom probe supplied by the renderer: blocked overhead = stay low.
 *
 * Pure: no THREE, no DOM. `CaveWorld` feeds input, the ground normal and the headroom probe.
 */
import { GAIT_SPEED } from './gait';
import { SURVIVAL } from './survivalConfig';

export type V3 = { x: number; y: number; z: number };

const G = 9.81;

export const MOVE_TECH = {
 /** Standing capsule (m): 1.75 m body, eye 0.15 m under the crown (eye = WALK_EYE_Y). */
 body: { height: 1.75, eyeBelowCrown: .15 },
 gravity: G,
 jump: {
  /** Rise of the body's centre (m): a good standing jump in boots. */
  height: .5,
  /** Take-off pressed this early before landing still jumps on touchdown (s). */
  buffer: .12,
  /** Horizontal steering in the air (m/s²); it can turn you, never push past take-off speed. */
  airControl: 3,
  /** Legs pay for it. */
  staminaCost: 6,
 },
 slide: {
  /** Ground speed needed to slide instead of crouch (m/s): well into the run band. */
  minSpeed: 2.6,
  /** Forward speed added on the drop (m/s): run 3.4 → 7.0 m/s. */
  boost: 3.6,
  /** Kinetic friction, clothed body on wet concrete. */
  frictionMu: .18,
  /** Slide ends and becomes a crouch-walk at this speed (the crouch-walk pace). */
  exitSpeed: GAIT_SPEED.walk * SURVIVAL.stealth.speedFactor,
  /** Capsule height while sliding, as a share of standing. */
  heightFraction: .5,
  /** Steering authority while sliding (rad/s the heading can swing toward the wish). */
  steerRate: 1.4,
  /** Camera roll toward the slide (deg; 2.5° + 15 %) and how fast it leans in / out (1/s). */
  tiltDeg: 2.875,
  tiltRate: 10,
 },
 /**
  * Capsule height eases toward its target at this rate (1/s): about 0.15 s to 90 % of the way,
  * a smooth drop with no snap.
  */
 heightEase: 15,
} as const;

export const STAND_HEIGHT = MOVE_TECH.body.height;
export const CROUCH_HEIGHT = MOVE_TECH.body.height - SURVIVAL.stealth.eyeDrop;
export const SLIDE_HEIGHT = MOVE_TECH.body.height * MOVE_TECH.slide.heightFraction;
/** Take-off speed for the jump height: v = √(2·g·h). */
export const JUMP_SPEED = Math.sqrt(2 * G * MOVE_TECH.jump.height);

export type TechMode = 'walk' | 'crouch' | 'slide' | 'air';

export type TechState = {
 mode: TechMode;
 /** World velocity while this module owns movement (slide / air). */
 vel: V3;
 /** Height of the feet above the floor (m); 0 on the ground. */
 air: number;
 /** Horizontal speed at take-off: air control can steer but not exceed it. */
 airCap: number;
 /** Seconds left on a buffered jump press (0 = none). */
 jumpQueued: number;
 /** A slide press waiting for this frame's update. */
 slideQueued: boolean;
 /** Current capsule height (m), measured from the feet. */
 height: number;
 /** Camera roll (rad), positive = lean right (apply as camera.rotation.z −= roll). */
 roll: number;
 /** Last headroom verdict (true = something overhead stopped us rising). */
 blocked: boolean;
};

export function makeTech(): TechState {
 return { mode: 'walk', vel: { x: 0, y: 0, z: 0 }, air: 0, airCap: 0, jumpQueued: 0, slideQueued: false, height: STAND_HEIGHT, roll: 0, blocked: false };
}

/** Key-down edge for jump. Held keys never repeat it: the listener ignores auto-repeat. */
export function requestJump(st: TechState) { st.jumpQueued = MOVE_TECH.jump.buffer + 1e-6; }
/** Key-down edge for slide / crouch. */
export function requestSlide(st: TechState) { st.slideQueued = true; }

/** Eye offset from the standing eye (m): up while airborne, down while low. */
export function eyeOffset(st: TechState) { return st.air - (STAND_HEIGHT - st.height); }

/** Owns movement this frame (the gait is bypassed). */
export function techOwnsMovement(st: TechState) { return st.mode === 'slide' || st.mode === 'air'; }

const len2 = (x: number, z: number) => Math.hypot(x, z);

/**
 * Per-frame input, all in the camera's horizontal frame.
 *  - wishX / wishZ: WASD as body-frame intent (x right, z forward), −1..1.
 *  - fwd / right: unit horizontal camera basis in world space.
 *  - crouchHeld: the slide / crouch key is down.
 *  - groundSpeed / groundVel: what the gait is doing right now (world, m/s).
 *  - normal: unit ground normal under the feet.
 *  - stamina: current stamina (0..100); a jump spends from it.
 *  - drag: wading multiplier 0.2..1 (1 = dry floor).
 *  - headroom(crown): true when nothing solid sits below `crown` metres above the floor here.
 */
export type TechInput = {
 wishX: number; wishZ: number;
 fwd: { x: number; z: number }; right: { x: number; z: number };
 crouchHeld: boolean;
 groundSpeed: number; groundVel: { x: number; z: number };
 normal: V3;
 stamina: number;
 drag: number;
 headroom: (crown: number) => boolean;
 /**
  * Feet height above FLOOR_Y that counts as grounded (0 = bunker slab,
  * CATWALK_DECK_RISE on a solid grate). Jump take-off and landing use this.
  */
 groundAir?: number;
};

export type TechEvents = {
 jumped: boolean;
 landed: boolean;
 slid: boolean;
 /** Stamina to spend this frame. */
 staminaSpent: number;
 /** Speed and world heading handed back to the gait when a slide or jump ends. */
 handoff: { speed: number; x: number; z: number } | null;
};

/** World direction of the wish in the camera's horizontal frame; no input = straight ahead. */
export function wishDirection(inp: Pick<TechInput, 'wishX' | 'wishZ' | 'fwd' | 'right'>) {
 let x = inp.right.x * inp.wishX + inp.fwd.x * inp.wishZ;
 let z = inp.right.z * inp.wishX + inp.fwd.z * inp.wishZ;
 if (len2(x, z) < 1e-6) { x = inp.fwd.x; z = inp.fwd.z; }
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
export function slideStep(v: V3, n: V3, dt: number, mu: number = MOVE_TECH.slide.frictionMu, g: number = G): V3 {
 const cos = Math.max(0, n.y);
 const gt = projectOnPlane({ x: 0, y: -g, z: 0 }, n);
 let u = projectOnPlane(v, n);
 u = { x: u.x + gt.x * dt, y: u.y + gt.y * dt, z: u.z + gt.z * dt };
 const speed = Math.hypot(u.x, u.y, u.z);
 const fr = mu * g * cos * dt;
 if (speed <= fr) return { x: 0, y: 0, z: 0 };
 const k = (speed - fr) / speed;
 return { x: u.x * k, y: u.y * k, z: u.z * k };
}

/** Heading from the velocity, or the fallback when stopped. */
function flatDir(v: { x: number; z: number }, fb: { x: number; z: number }) {
 const l = len2(v.x, v.z);
 return l > 1e-5 ? { x: v.x / l, z: v.z / l } : fb;
}

/** Scale a vector to a length. */
function withLength(v: V3, l: number): V3 {
 const n = Math.hypot(v.x, v.y, v.z) || 1;
 return { x: v.x / n * l, y: v.y / n * l, z: v.z / n * l };
}

/** Speed and heading for the gait to carry on with. */
function handoff(v: V3, wish: { x: number; z: number }, cap: number) {
 const d = flatDir(v, wish);
 return { speed: Math.min(len2(v.x, v.z), cap), x: d.x, z: d.z };
}

/**
 * Advance the state machine one frame. Call once per sim frame, before the body moves;
 * then move the body by `st.vel * dt` (horizontal) when `techOwnsMovement(st)`, and put the feet
 * at `st.air` above the floor.
 */
export function stepTech(st: TechState, inp: TechInput, dt: number): TechEvents {
 const ev: TechEvents = { jumped: false, landed: false, slid: false, staminaSpent: 0, handoff: null };
 const J = MOVE_TECH.jump, S = MOVE_TECH.slide;
 const wish = wishDirection(inp);
 const wishing = len2(inp.wishX, inp.wishZ) > .1;
 const groundAir = inp.groundAir ?? 0;

 // Stick grounded feet to the current support before jump/slide decisions.
 if (st.mode !== 'air') st.air = groundAir;

 // ── Jump: from the ground (walk, crouch or slide), one per press, buffered briefly ──
 const grounded = st.mode !== 'air';
 if (st.jumpQueued > 0 && grounded && inp.stamina >= J.staminaCost && inp.headroom(st.air + st.height + .1)) {
  // Take-off keeps whatever we were doing on the ground: a slide's speed, or the gait's.
  const ground = st.mode === 'slide' ? { x: st.vel.x, z: st.vel.z } : inp.groundVel;
  st.vel = { x: ground.x, y: JUMP_SPEED * Math.max(.5, inp.drag), z: ground.z };
  st.airCap = Math.max(len2(ground.x, ground.z), GAIT_SPEED.walk);
  st.mode = 'air';
  st.jumpQueued = 0;
  st.slideQueued = false;
  ev.jumped = true;
  ev.staminaSpent = J.staminaCost;
 } else {
  st.jumpQueued = Math.max(0, st.jumpQueued - dt);
 }

 // ── Airborne: ballistic under g, a little steering, ceiling stops the rise ─────────
 if (st.mode === 'air') {
  if (wishing) {
   // Steer toward the wish without adding speed beyond take-off.
   st.vel.x += wish.x * J.airControl * dt;
   st.vel.z += wish.z * J.airControl * dt;
   const h = len2(st.vel.x, st.vel.z);
   if (h > st.airCap) { st.vel.x *= st.airCap / h; st.vel.z *= st.airCap / h; }
  }
  st.vel.y -= G * dt;
  let next = st.air + st.vel.y * dt;
  if (st.vel.y > 0 && !inp.headroom(next + st.height)) { next = st.air; st.vel.y = 0; }
  st.air = next;
  if (st.air <= groundAir) {
   st.air = groundAir;
   ev.landed = true;
   const speed = len2(st.vel.x, st.vel.z);
   st.vel.y = 0;
   if (inp.crouchHeld && speed >= S.minSpeed) {
    // Land into a slide carrying our speed (no fresh boost: no endless speed from hopping).
    st.vel = projectOnPlane({ x: st.vel.x, y: 0, z: st.vel.z }, inp.normal);
    st.vel = withLength(st.vel, speed);
    st.mode = 'slide';
    ev.slid = true;
   } else {
    st.mode = inp.crouchHeld ? 'crouch' : 'walk';
    ev.handoff = handoff(st.vel, wish, GAIT_SPEED.run);
    // A buffered press jumps again on the next frame.
   }
  }
 }

 // ── Slide start: only from a run; from anything slower the key is a crouch ─────────
 if (st.slideQueued && (st.mode === 'walk' || st.mode === 'crouch')) {
  if (inp.groundSpeed >= S.minSpeed) {
   const dir = flatDir(inp.groundVel, wish);
   const speed = (inp.groundSpeed + S.boost) * inp.drag;
   st.vel = withLength(projectOnPlane({ x: dir.x, y: 0, z: dir.z }, inp.normal), speed);
   st.mode = 'slide';
   ev.slid = true;
  } else {
   st.mode = 'crouch';
  }
 }
 st.slideQueued = false;

 // ── Slide integration ─────────────────────────────────────────────────────────────
 if (st.mode === 'slide' && !ev.jumped) {
  // Wading adds drag on top of floor friction (drag 1 dry → 0.3 waist-deep).
  const mu = S.frictionMu / Math.max(.2, inp.drag);
  let v = slideStep(st.vel, inp.normal, dt, mu);
  const sp = Math.hypot(v.x, v.y, v.z);
  if (sp > 1e-4 && wishing) {
   // A little steering: swing the heading toward the wish, never add speed.
   const cur = flatDir(v, wish);
   const a = Math.atan2(cur.z, cur.x), b = Math.atan2(wish.z, wish.x);
   let d = b - a; d = Math.atan2(Math.sin(d), Math.cos(d));
   const turn = Math.max(-S.steerRate * dt, Math.min(S.steerRate * dt, d));
   const h = len2(v.x, v.z);
   v = withLength(projectOnPlane({ x: Math.cos(a + turn) * h, y: v.y, z: Math.sin(a + turn) * h }, inp.normal), sp);
  }
  st.vel = v;
  const speed = Math.hypot(v.x, v.y, v.z);
  if (speed <= S.exitSpeed) {
   // Momentum spent: crouch-walk if the key is held (or the ceiling forces it), else stand.
   st.mode = !inp.crouchHeld && inp.headroom(st.air + STAND_HEIGHT) ? 'walk' : 'crouch';
   ev.handoff = handoff(v, wish, GAIT_SPEED.run);
  } else if (!inp.crouchHeld && inp.headroom(st.air + STAND_HEIGHT)) {
   // Released with room overhead: pop up and run on at the slide's speed (capped at a run).
   st.mode = 'walk';
   ev.handoff = handoff(v, wish, GAIT_SPEED.run);
  }
  // Released under a ceiling: stay in the slide until it clears.
 }

 // ── Crouch ⇄ walk, gated by headroom ──────────────────────────────────────────────
 if (st.mode === 'walk' && inp.crouchHeld) st.mode = 'crouch';
 if (st.mode === 'crouch' && !inp.crouchHeld && inp.headroom(st.air + STAND_HEIGHT)) st.mode = 'walk';

 // ── Capsule height: feet anchored, eased (no snap), rising only into free space ────
 const target = st.mode === 'slide' ? SLIDE_HEIGHT : st.mode === 'crouch' ? CROUCH_HEIGHT : STAND_HEIGHT;
 const k = 1 - Math.exp(-MOVE_TECH.heightEase * dt);
 let next = st.height + (target - st.height) * k;
 if (Math.abs(target - next) < 1e-3) next = target;
 if (next > st.height) {
  st.blocked = !inp.headroom(st.air + next);
  if (!st.blocked) st.height = next;
 } else {
  st.blocked = false;
  st.height = next;
 }

 // ── Camera roll toward the slide's side (lean left on a straight slide) ───────────
 let rollTarget = 0;
 if (st.mode === 'slide') {
  const d = flatDir(st.vel, wish);
  const side = d.x * inp.right.x + d.z * inp.right.z;
  rollTarget = (Math.abs(side) < .2 ? -1 : Math.sign(side)) * S.tiltDeg * Math.PI / 180;
 }
 st.roll += (rollTarget - st.roll) * (1 - Math.exp(-S.tiltRate * dt));

 return ev;
}
