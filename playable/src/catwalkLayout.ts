/**
 * West-hall broken service gallery — pure layout (no THREE, no simulation import).
 * Cells ~cols 4–6, rows 12–14 → world x −28…−20, z −56…−48.
 * Deck at FLOOR_Y + 3.2 (FLOOR_Y is 0.65 in simulation.ts).
 */
/** Must match `FLOOR_Y` in simulation.ts. */
const FLOOR_Y = .65;

/** Metres above the bunker floor slab. */
export const CATWALK_DECK_RISE = 3.2;
/** Walkable grate top Y. */
export const CATWALK_DECK_Y = FLOOR_Y + CATWALK_DECK_RISE;

/** Module footprint (matches industrial-catwalk GLBs). */
export const CATWALK_MODULE_LEN = 2;
export const CATWALK_MODULE_W = 1.2;

export type CatwalkSpan = { minX: number; maxX: number; minZ: number; maxZ: number };

/**
 * Solid grated spans only. Gap centred near z = −52 has no AABB (drop-through).
 * West N–S run at x ≈ −27.2; T + spur east at z ≈ −56.
 */
export const CATWALK_SPANS: readonly CatwalkSpan[] = Object.freeze([
 // South approach (ladder end) — extends slightly into the ladder top
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -49, maxZ: -46.85 },
 // Next north
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -51, maxZ: -49 },
 // GAP −53…−51 intentionally omitted
 // Deep west run
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -55, maxZ: -53 },
 // T junction (N–S arm)
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -57, maxZ: -55 },
 // Spur east from T
 { minX: -26.0, maxX: -24.0, minZ: -56.6, maxZ: -55.4 },
 { minX: -24.0, maxX: -22.0, minZ: -56.6, maxZ: -55.4 },
]);

/** Ladder climb volume (south end of shelf, approach side). */
export const CATWALK_LADDER = Object.freeze({
 x: -27.2,
 z: -47.2,
 hx: .5,
 hz: .55,
 /** Feet / interact band from floor up past deck. */
 minY: FLOOR_Y,
 maxY: CATWALK_DECK_Y + .35,
});

export type CatwalkMountKind = 'straight' | 'cross' | 't' | 'ladder' | 'rail_broken';

export type CatwalkMount = {
 kind: CatwalkMountKind;
 x: number;
 z: number;
 /** World yaw (rad). Straight/T along ±Z by default. */
 yaw: number;
 label: string;
};

/**
 * Visual mounts for the L-run + gap dressing + ladder.
 * Deck pieces sit with grate top at CATWALK_DECK_Y; ladder feet on FLOOR_Y.
 */
export function catwalkMounts(): CatwalkMount[] {
 return [
  { kind: 'straight', x: -27.2, z: -48, yaw: 0, label: 'ns-south' },
  { kind: 'straight', x: -27.2, z: -50, yaw: 0, label: 'ns-mid' },
  // Gap visual: dangling rail only (no deck)
  { kind: 'rail_broken', x: -26.65, z: -52, yaw: 0, label: 'gap-rail-e' },
  { kind: 'rail_broken', x: -27.75, z: -52, yaw: Math.PI, label: 'gap-rail-w' },
  { kind: 'straight', x: -27.2, z: -54, yaw: 0, label: 'ns-deep' },
  { kind: 't', x: -27.2, z: -56, yaw: 0, label: 't-spur' },
  { kind: 'straight', x: -25.0, z: -56, yaw: Math.PI / 2, label: 'spur-a' },
  { kind: 'straight', x: -23.0, z: -56, yaw: Math.PI / 2, label: 'spur-b' },
  { kind: 'ladder', x: -27.2, z: -47.2, yaw: 0, label: 'ladder-south' },
 ];
}

/** True when (x,z) is on a solid grate span. */
export function onCatwalkSpan(x: number, z: number): boolean {
 for (const s of CATWALK_SPANS) {
  if (x >= s.minX && x <= s.maxX && z >= s.minZ && z <= s.maxZ) return true;
 }
 return false;
}

/** Deck top Y if on a solid span, else null. */
export function catwalkSupportY(x: number, z: number): number | null {
 return onCatwalkSpan(x, z) ? CATWALK_DECK_Y : null;
}

/** Inside the ladder climb AABB (xz always; y optional). */
export function inCatwalkLadder(x: number, z: number, y?: number): boolean {
 const L = CATWALK_LADDER;
 if (Math.abs(x - L.x) > L.hx || Math.abs(z - L.z) > L.hz) return false;
 if (y === undefined) return true;
 return y >= L.minY - .2 && y <= L.maxY;
}

/** Keepout discs so bunker dressing skips the shelf footprint. */
export function catwalkKeepouts(): { x: number; z: number; r: number }[] {
 // Radius ≤1.0 keeps the shipped bunker lightmap signature (larger radii
 // relocate wall decals and force a Blender rebake).
 return [
  { x: -27.2, z: -48, r: 1.0 },
  { x: -27.2, z: -50, r: 1.0 },
  { x: -27.2, z: -52, r: 1.0 },
  { x: -27.2, z: -54, r: 1.0 },
  { x: -27.2, z: -56, r: 1.0 },
  { x: -25.0, z: -56, r: 1.0 },
  { x: -23.0, z: -56, r: 1.0 },
  { x: CATWALK_LADDER.x, z: CATWALK_LADDER.z, r: 1.0 },
 ];
}
