/**
 * Loose-object physics for items lying in the bunker: gravity, Archimedes
 * buoyancy, quadratic drag with added mass in water, and floor contact with
 * restitution and settling. One vertical degree of freedom per item — items
 * slide nowhere on their own, they fall, sink, float and come to rest.
 *
 * Every item has a real mass and displaced volume, so what floats and what
 * sinks follows from density against fresh water (≈ 1000 kg/m³), not from a
 * per-item flag. Heavy furniture (crates, chests, desks) is not simulated:
 * it rests on the floor by construction.
 */
import type { Item, Point } from './simulation';

export const GRAVITY = 9.81;
/** Bunker flood is fresh/brackish groundwater. */
export const WATER_DENSITY = 1000;
export const AIR_DENSITY = 1.2;
/** Added-mass coefficient for a bluff body accelerating through water. */
export const ADDED_MASS_COEFF = .5;
/** Coefficient of restitution on the concrete/sand floor (dry and wet). */
export const FLOOR_RESTITUTION_DRY = .22;
export const FLOOR_RESTITUTION_WET = .04;
/** Below this speed at contact the body stops bouncing and rests (m/s). */
export const REST_SPEED = .08;

export type ItemBody = {
 /** kg */ mass: number;
 /** Displaced volume when fully submerged, m³. */ volume: number;
 /** Height of the body as it lies (m) — its waterline span and floor clearance. */ height: number;
 /** Frontal area for vertical drag (m²) and drag coefficient. */ area: number; cd: number;
};

/**
 * Real-world figures (rounded). Density = mass / volume decides sink or float:
 * knife 6250, stone 2700, relic (fossil) 2600, gun 7000, pony full 1110,
 * spare bottle 1140, soaked coat 1070 → sink; driftwood 500, flare 830,
 * sealant kit 800 → float.
 */
export const ITEM_BODY: Record<Item, ItemBody> = {
 knife: { mass: .25, volume: .00004, height: .03, area: .006, cd: 1.1 },
 stone: { mass: 2.5, volume: .00093, height: .09, area: .012, cd: 1.0 },
 wood: { mass: 1.2, volume: .0024, height: .1, area: .06, cd: 1.0 },
 flare: { mass: .25, volume: .0003, height: .04, area: .01, cd: 1.0 },
 air: { mass: 3.0, volume: .0027, height: .11, area: .045, cd: .9 },
 bandage: { mass: .4, volume: .0005, height: .07, area: .02, cd: 1.1 },
 relic: { mass: 3.0, volume: .00115, height: .4, area: .09, cd: 1.2 },
 gun: { mass: .85, volume: .00012, height: .035, area: .02, cd: 1.1 },
 bottle: { mass: 8.0, volume: .007, height: .18, area: .1, cd: .9 },
 coat: { mass: 1.5, volume: .0014, height: .05, area: .35, cd: 1.3 },
};

export const itemDensity = (item: Item) => ITEM_BODY[item].mass / ITEM_BODY[item].volume;
export const itemFloats = (item: Item) => itemDensity(item) < WATER_DENSITY;

/** Per-item motion state kept alongside the pickup. */
export type BodyState = { vy: number; resting: boolean };

/** Fraction of the body's height below the waterline, 0..1. */
export function submergedFraction(bottomY: number, height: number, waterY: number) {
 if (waterY <= bottomY) return 0;
 if (waterY >= bottomY + height) return 1;
 return (waterY - bottomY) / height;
}

/**
 * Vertical acceleration (m/s²) of a body whose bottom is at `bottomY`, moving at
 * `vy`, with the water surface at `waterY`. Positive is up.
 */
export function verticalAccel(item: Item, bottomY: number, vy: number, waterY: number) {
 const b = ITEM_BODY[item];
 const f = submergedFraction(bottomY, b.height, waterY);
 const vSub = b.volume * f;
 const rho = AIR_DENSITY + (WATER_DENSITY - AIR_DENSITY) * f;
 const weight = -b.mass * GRAVITY;
 const buoyancy = (WATER_DENSITY * vSub + AIR_DENSITY * (b.volume - vSub)) * GRAVITY;
 const drag = -.5 * rho * b.cd * b.area * vy * Math.abs(vy);
 const effMass = b.mass + ADDED_MASS_COEFF * WATER_DENSITY * vSub;
 return (weight + buoyancy + drag) / effMass;
}

/**
 * Advance one body by dt. `groundY` is the support height under it (floor or
 * a plinth). Returns the new bottom height. Sub-steps keep the stiff water
 * entry stable at game frame rates.
 */
export function stepBody(item: Item, p: Point, s: BodyState, dt: number, waterY: number, groundY: number) {
 const b = ITEM_BODY[item];
 // A resting sinker stays put until the water could lift it or the support drops away.
 if (s.resting) {
  const lift = verticalAccel(item, p.y, 0, waterY);
  if (lift <= 1e-3 && Math.abs(p.y - groundY) < 1e-4) return p.y;
  s.resting = false;
 }
 const steps = Math.max(1, Math.ceil(dt / .004));
 const h = dt / steps;
 for (let i = 0; i < steps; i++) {
  // Semi-implicit Euler: velocity first, then position.
  s.vy += verticalAccel(item, p.y, s.vy, waterY) * h;
  p.y += s.vy * h;
  if (p.y <= groundY) {
   p.y = groundY;
   if (s.vy < 0) {
    const wet = submergedFraction(p.y, b.height, waterY) > .5;
    const e = wet ? FLOOR_RESTITUTION_WET : FLOOR_RESTITUTION_DRY;
    s.vy = -s.vy * e;
    if (s.vy < REST_SPEED && verticalAccel(item, p.y, 0, waterY) <= 0) { s.vy = 0; s.resting = true; return p.y; }
   }
  }
 }
 return p.y;
}

/**
 * Height a floating body settles at (bottom Y) for a given waterline:
 * the draft where buoyancy equals weight. Null if it sinks.
 */
export function floatBottom(item: Item, waterY: number) {
 const b = ITEM_BODY[item];
 const draftFrac = b.mass / (WATER_DENSITY * b.volume);
 if (draftFrac >= 1) return null;
 return waterY - draftFrac * b.height;
}
