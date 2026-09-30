/**
 * Rifle condition: every AK-74U in the bunker is a physical object with its own wear.
 *
 * Your service rifle (the dive kit) is maintained and never fails. Rifles taken off dead
 * guards are worse, always: fouled actions that jam, worn barrels that throw rounds wide,
 * and magazines already half spent. The officer's rifle is the one prize worth carrying
 * home: better than anything else a guard drops, still short of your own.
 *
 * That gap is the point. The stash holds good rifles; the garrison only arms you well
 * enough to fight your way back to it.
 */
import type { GuardRole } from './survivalConfig';

export const RIFLE = {
 /** Condition of the rifle you dive with, and the best any rifle in the bunker can be. */
 kitCond: .85,
 /** Guard drops by role: [min, max] condition. Every band tops out below `kitCond`. */
 dropBands: {
  rusher: [.3, .45],
  assault: [.36, .54],
  flanker: [.36, .54],
  heavy: [.5, .62],
  officer: [.7, .8],
 } as Record<GuardRole, [number, number]>,
 /** A dropped magazine holds this share of a full one: [min, max]. Partly spent, never full. */
 dropMagShare: [.5, .8] as [number, number],
 /** Rifles at or above this are worth leaving on the floor after you strip their rounds. */
 keepCond: .68,
 /** Chance per trigger pull that a rifle in the worst possible state jams. */
 jamMax: .16,
 /** Aim scatter (rad, one standard deviation) for the worst possible rifle. ~2.3° */
 spreadMax: .04,
 /** Seconds to clear a stoppage: tap, rack, bang. */
 clearSeconds: .75,
} as const;

/** How far below a maintained rifle this one is: 0 for the kit rifle, 1 for scrap. */
const wear = (cond: number) => Math.max(0, Math.min(1, (RIFLE.kitCond - cond) / RIFLE.kitCond));

/** Chance this rifle jams on a trigger pull. Zero for a maintained rifle. */
export const jamChance = (cond: number) => RIFLE.jamMax * Math.pow(wear(cond), 1.5);

/** Aim scatter (rad) for this rifle. Zero for a maintained rifle. */
export const spreadSigma = (cond: number) => RIFLE.spreadMax * wear(cond);

export type RifleGrade = 'Scrap' | 'Worn' | 'Field' | "Officer's" | 'Service';

export function rifleGrade(cond: number): RifleGrade {
 if (cond >= RIFLE.kitCond - 1e-6) return 'Service';
 if (cond >= RIFLE.keepCond) return "Officer's";
 if (cond >= .5) return 'Field';
 if (cond >= .34) return 'Worn';
 return 'Scrap';
}

/** "Worn AK-74U · 41%" */
export const rifleName = (cond: number) => `${rifleGrade(cond)} AK-74U · ${Math.round(cond * 100)}%`;

/** Whether a rifle is a prize (keeps its floor glow gold and survives magazine stripping). */
export const rifleIsPrize = (cond: number) => cond >= RIFLE.keepCond;

/** Condition of the rifle a guard of this role drops. `rand` is the mission's RNG. */
export function rollDropCondition(role: GuardRole, rand: () => number) {
 const [lo, hi] = RIFLE.dropBands[role] ?? RIFLE.dropBands.assault;
 return lo + (hi - lo) * rand();
}

/** Rounds left in a dropped rifle's magazine: half to four fifths of a full one. */
export function rollDropRounds(magazine: number, rand: () => number) {
 const [lo, hi] = RIFLE.dropMagShare;
 return Math.max(1, Math.round(magazine * (lo + (hi - lo) * rand())));
}

/**
 * Scatter a unit direction by a small random angle (Box–Muller, independent pitch and yaw
 * error). Returns a new vector; the input is untouched.
 */
export function scatter(dir: { x: number; y: number; z: number }, sigma: number, rand: () => number) {
 if (sigma <= 0) return { ...dir };
 const g = () => Math.sqrt(-2 * Math.log(Math.max(1e-9, rand()))) * Math.cos(2 * Math.PI * rand());
 const len = Math.hypot(dir.x, dir.y, dir.z) || 1;
 const f = { x: dir.x / len, y: dir.y / len, z: dir.z / len };
 // Two axes perpendicular to the shot.
 const up = Math.abs(f.y) < .99 ? { x: 0, y: 1, z: 0 } : { x: 1, y: 0, z: 0 };
 let r = { x: f.y * up.z - f.z * up.y, y: f.z * up.x - f.x * up.z, z: f.x * up.y - f.y * up.x };
 const rl = Math.hypot(r.x, r.y, r.z) || 1; r = { x: r.x / rl, y: r.y / rl, z: r.z / rl };
 const u = { x: r.y * f.z - r.z * f.y, y: r.z * f.x - r.x * f.z, z: r.x * f.y - r.y * f.x };
 const a = g() * sigma, b = g() * sigma;
 const o = { x: f.x + r.x * a + u.x * b, y: f.y + r.y * a + u.y * b, z: f.z + r.z * a + u.z * b };
 const ol = Math.hypot(o.x, o.y, o.z);
 return { x: o.x / ol, y: o.y / ol, z: o.z / ol };
}

/** Small deterministic PRNG (mulberry32) for loot rolls, seedable in tests. */
export function lootStream(seed: number) {
 let a = seed >>> 0;
 return () => {
  a = (a + 0x6d2b79f5) >>> 0;
  let t = a;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
 };
}
