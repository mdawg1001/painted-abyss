/**
 * Sparse bunker service galleries — pure layout (no THREE, no simulation import).
 *
 * Pulls back the map-scale pad mezzanine: a few short wall-hugging / pit-edge runs
 * where a Soviet industrial service walk would actually be built — not a first floor.
 *
 * Deck at FLOOR_Y + 3.2 (FLOOR_Y is 0.65 in simulation.ts), under wall pipe trays.
 * Breath corridor / hatch / flood stay untouched.
 */
/** Must match `FLOOR_Y` in simulation.ts. */
const FLOOR_Y = .65;

/** Metres above the bunker floor slab. */
export const CATWALK_DECK_RISE = 3.2;
/** Walkable grate top Y. */
export const CATWALK_DECK_Y = FLOOR_Y + CATWALK_DECK_RISE;

/** Module footprint (matches industrial-catwalk GLBs — narrow service walk, not pad tiles). */
export const CATWALK_MODULE_LEN = 2;
export const CATWALK_MODULE_W = 1.35;

export type CatwalkSpan = { minX: number; maxX: number; minZ: number; maxZ: number };

export type CatwalkLadder = {
 x: number;
 z: number;
 hx: number;
 hz: number;
 minY: number;
 maxY: number;
 /** Feet snap onto the deck here after climb. */
 landX: number;
 landZ: number;
 label: string;
};

/**
 * Solid grated spans only. Intentional gaps have no AABB (drop-through).
 *
 * 1) West-hall wall L — hugs col-4 west wall, spur east over the hall floor.
 * 2) Neck west shelf — short N–S run on the west wall of the neck corridor.
 * 3) Hall pit north lip — short E–W overlook on the north rim of the central void.
 */
export const CATWALK_SPANS: readonly CatwalkSpan[] = Object.freeze([
 // —— West-hall wall gallery (x ≈ −27.2) ——
 // South approach (ladder end)
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -49, maxZ: -46.85 },
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -51, maxZ: -49 },
 // GAP −53…−51 intentionally omitted (collapsed bay)
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -55, maxZ: -53 },
 { minX: -27.2 - CATWALK_MODULE_W * .5, maxX: -27.2 + CATWALK_MODULE_W * .5, minZ: -57, maxZ: -55 },
 // Spur east from T (toward hall centre)
 { minX: -26.0, maxX: -24.0, minZ: -56.6, maxZ: -55.4 },
 { minX: -24.0, maxX: -21.8, minZ: -56.6, maxZ: -55.4 },

 // —— Neck west wall shelf (x ≈ −5.35, hugs west wall of neck cols 10–12) ——
 { minX: -5.35 - CATWALK_MODULE_W * .5, maxX: -5.35 + CATWALK_MODULE_W * .5, minZ: -34, maxZ: -32 },
 { minX: -5.35 - CATWALK_MODULE_W * .5, maxX: -5.35 + CATWALK_MODULE_W * .5, minZ: -36, maxZ: -34 },
 { minX: -5.35 - CATWALK_MODULE_W * .5, maxX: -5.35 + CATWALK_MODULE_W * .5, minZ: -38, maxZ: -36 },

 // —— Hall pit north-lip overlook (z ≈ −58, north rim of void rows 15–20) ——
 { minX: -14.0, maxX: -12.0, minZ: -58.7, maxZ: -57.3 },
 { minX: -12.0, maxX: -10.0, minZ: -58.7, maxZ: -57.3 },
 { minX: -10.0, maxX: -8.0, minZ: -58.7, maxZ: -57.3 },
]);

/**
 * Climb volumes — one ladder per gallery (3 total). Sparse vs the old map-scale set of 7.
 */
export const CATWALK_LADDERS: readonly CatwalkLadder[] = Object.freeze([
 // West-hall south approach → land on south grate
 {
  x: -27.2, z: -47.2, hx: .5, hz: .55,
  minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35,
  landX: -27.2, landZ: -48, label: 'west-hall',
 },
 // Neck south approach → land on south-most neck shelf bay
 {
  x: -5.35, z: -31.2, hx: .5, hz: .55,
  minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35,
  landX: -5.35, landZ: -33, label: 'neck-west',
 },
 // Pit north-lip west end → land on west grate bay
 {
  x: -13.0, z: -56.85, hx: .55, hz: .5,
  minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35,
  landX: -13.0, landZ: -58, label: 'pit-lip',
 },
]);

/** @deprecated Prefer CATWALK_LADDERS[0]; kept for older call sites during transition. */
export const CATWALK_LADDER = CATWALK_LADDERS[0]!;

export type CatwalkMountKind =
 | 'straight'
 | 'cross'
 | 't'
 | 'ladder'
 | 'rail_broken'
 | 'bracket';

export type CatwalkMount = {
 kind: CatwalkMountKind;
 x: number;
 z: number;
 /** World yaw (rad). Straight/T along ±Z by default. */
 yaw: number;
 label: string;
};

/**
 * Visual mounts for the three sparse galleries.
 * Deck pieces sit with grate top at CATWALK_DECK_Y; ladder feet on FLOOR_Y;
 * wall brackets sit at deck height against the host wall.
 */
export function catwalkMounts(): CatwalkMount[] {
 return [
  // —— West-hall wall L ——
  { kind: 'straight', x: -27.2, z: -48, yaw: 0, label: 'wh-ns-south' },
  { kind: 'straight', x: -27.2, z: -50, yaw: 0, label: 'wh-ns-mid' },
  { kind: 'rail_broken', x: -26.55, z: -52, yaw: 0, label: 'wh-gap-e' },
  { kind: 'rail_broken', x: -27.85, z: -52, yaw: Math.PI, label: 'wh-gap-w' },
  { kind: 'straight', x: -27.2, z: -54, yaw: 0, label: 'wh-ns-deep' },
  { kind: 't', x: -27.2, z: -56, yaw: 0, label: 'wh-t-spur' },
  { kind: 'straight', x: -25.0, z: -56, yaw: Math.PI / 2, label: 'wh-spur-a' },
  { kind: 'straight', x: -22.8, z: -56, yaw: Math.PI / 2, label: 'wh-spur-b' },
  { kind: 'ladder', x: -27.2, z: -47.2, yaw: 0, label: 'ladder-west-hall' },
  // Wall brackets into the west concrete (host wall is −X of the run)
  { kind: 'bracket', x: -27.95, z: -48, yaw: Math.PI / 2, label: 'wh-brk-a' },
  { kind: 'bracket', x: -27.95, z: -50, yaw: Math.PI / 2, label: 'wh-brk-b' },
  { kind: 'bracket', x: -27.95, z: -54, yaw: Math.PI / 2, label: 'wh-brk-c' },
  { kind: 'bracket', x: -27.95, z: -56, yaw: Math.PI / 2, label: 'wh-brk-d' },

  // —— Neck west shelf ——
  { kind: 'straight', x: -5.35, z: -33, yaw: 0, label: 'nk-ns-a' },
  { kind: 'straight', x: -5.35, z: -35, yaw: 0, label: 'nk-ns-b' },
  { kind: 'straight', x: -5.35, z: -37, yaw: 0, label: 'nk-ns-c' },
  { kind: 'ladder', x: -5.35, z: -31.2, yaw: 0, label: 'ladder-neck' },
  { kind: 'bracket', x: -6.05, z: -33, yaw: Math.PI / 2, label: 'nk-brk-a' },
  { kind: 'bracket', x: -6.05, z: -35, yaw: Math.PI / 2, label: 'nk-brk-b' },
  { kind: 'bracket', x: -6.05, z: -37, yaw: Math.PI / 2, label: 'nk-brk-c' },

  // —— Hall pit north-lip overlook ——
  { kind: 'straight', x: -13.0, z: -58, yaw: Math.PI / 2, label: 'pit-ew-a' },
  { kind: 'straight', x: -11.0, z: -58, yaw: Math.PI / 2, label: 'pit-ew-b' },
  { kind: 'straight', x: -9.0, z: -58, yaw: Math.PI / 2, label: 'pit-ew-c' },
  { kind: 'rail_broken', x: -7.6, z: -57.45, yaw: Math.PI / 2, label: 'pit-gap-e' },
  { kind: 'ladder', x: -13.0, z: -56.85, yaw: Math.PI, label: 'ladder-pit' },
  { kind: 'bracket', x: -13.0, z: -57.15, yaw: 0, label: 'pit-brk-a' },
  { kind: 'bracket', x: -11.0, z: -57.15, yaw: 0, label: 'pit-brk-b' },
  { kind: 'bracket', x: -9.0, z: -57.15, yaw: 0, label: 'pit-brk-c' },
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

/** Inside any ladder climb AABB (xz always; y optional). */
export function inCatwalkLadder(x: number, z: number, y?: number): boolean {
 return nearestCatwalkLadder(x, z, y) != null;
}

/** Nearest ladder whose xz (and optional y) volume contains the point. */
export function nearestCatwalkLadder(x: number, z: number, y?: number): CatwalkLadder | null {
 let best: CatwalkLadder | null = null;
 let bestD = Infinity;
 for (const L of CATWALK_LADDERS) {
  if (Math.abs(x - L.x) > L.hx || Math.abs(z - L.z) > L.hz) continue;
  if (y !== undefined && (y < L.minY - .2 || y > L.maxY)) continue;
  const d = Math.hypot(x - L.x, z - L.z);
  if (d < bestD) { best = L; bestD = d; }
 }
 return best;
}

/**
 * Keepout discs so bunker dressing skips the west-hall service pier footprint.
 * Intentionally the same discs as 0.22.45 / 0.23.0 so the shipped bunker lightmap
 * signature stays valid (larger / relocated discs force a Blender rebake).
 * Neck / pit galleries do not add keepouts for this pass.
 */
export function catwalkKeepouts(): { x: number; z: number; r: number }[] {
 return [
  { x: -27.2, z: -48, r: 1.0 },
  { x: -27.2, z: -50, r: 1.0 },
  { x: -27.2, z: -52, r: 1.0 },
  { x: -27.2, z: -54, r: 1.0 },
  { x: -27.2, z: -56, r: 1.0 },
  { x: -25.0, z: -56, r: 1.0 },
  { x: -23.0, z: -56, r: 1.0 },
  { x: -27.2, z: -47.2, r: 1.0 },
 ];
}

/** Stats for tests / playtest notes. */
export function catwalkCoverageStats() {
 const mounts = catwalkMounts();
 return {
  galleries: 3,
  spans: CATWALK_SPANS.length,
  climbPoints: CATWALK_LADDERS.length,
  deckModules: mounts.filter(m => m.kind === 'straight' || m.kind === 't' || m.kind === 'cross').length,
  brackets: mounts.filter(m => m.kind === 'bracket').length,
 };
}
