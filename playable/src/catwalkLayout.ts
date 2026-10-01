/**
 * Map-scale first-floor catwalk mezzanine — pure layout (no THREE, no simulation import).
 *
 * Ground layer stays the existing bunker floor / flood. This module places a continuous
 * grated deck over a large share of hall + neck + entrance-edge open cells, with
 * intentional gap cells for drops and multiple ladder climb volumes.
 *
 * Deck at FLOOR_Y + 3.2 (FLOOR_Y is 0.65 in simulation.ts), under wall pipe trays.
 */
/** Must match `FLOOR_Y` in simulation.ts. */
const FLOOR_Y = .65;
/** Must match `CELL` in simulation.ts. */
const CELL = 4;

/** Metres above the bunker floor slab. */
export const CATWALK_DECK_RISE = 3.2;
/** Walkable grate top Y. */
export const CATWALK_DECK_Y = FLOOR_Y + CATWALK_DECK_RISE;

/**
 * Mezzanine tile footprint (matches industrial-catwalk pad GLB).
 * ~3.8 m square so adjacent open-cell pads overlap and form a continuous network.
 */
export const CATWALK_PAD = 3.8;
/** Legacy run module size (straight / cross / T). */
export const CATWALK_MODULE_LEN = 2;
export const CATWALK_MODULE_W = 2.4;

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

type Cell = { c: number; r: number };

function worldXZ(c: number, r: number) {
 return { x: (c - 11) * CELL, z: -r * CELL };
}

/**
 * Open combat cells that receive a first-floor pad (excludes breath corridor, fissure,
 * pool, back, and intentional drop gaps). Encoded as "c,r" for Set membership.
 */
function intentionalGap(c: number, r: number): boolean {
 // N–S drop alleys through the hall (floodable volume under the grate network)
 if (c === 7 && r >= 14 && r <= 20) return true;
 if (c === 15 && r >= 14 && r <= 20) return true;
 // E–W gap bands north / south of the central hall void
 if (r === 14 && c >= 9 && c <= 13) return true;
 if (r === 21 && c >= 9 && c <= 13) return true;
 // Scattered single-cell drops for silhouette / fall drama
 if (c === 5 && (r === 18 || r === 22)) return true;
 if (c === 17 && (r === 12 || r === 18)) return true;
 if (c === 6 && r === 12) return true;
 if (c === 16 && r === 23) return true;
 return false;
}

/**
 * Same open-cell set as simulation.ts (combat floors only — no breath corridor).
 * Kept local so this module stays free of simulation imports.
 */
function combatOpenCells(): Cell[] {
 const set = new Set<string>();
 const rect = (a: number, b: number, c0: number, d: number) => {
  for (let col = a; col <= b; col++) for (let row = c0; row <= d; row++) set.add(`${col},${row}`);
 };
 rect(8, 14, 1, 5); // entrance
 rect(10, 12, 5, 11); // neck (overlaps entrance row 5)
 rect(4, 18, 11, 24); // hall
 for (let c = 9; c <= 12; c++) for (let r = 15; r <= 20; r++) set.delete(`${c},${r}`); // hall void
 const out: Cell[] = [];
 for (const key of set) {
  const [c, r] = key.split(',').map(Number);
  out.push({ c, r });
 }
 return out;
}

function zoneOf(c: number, r: number): 'entrance' | 'neck' | 'hall' | 'other' {
 if (r <= 5) return 'entrance';
 if (r <= 10) return 'neck';
 if (r <= 24) return 'hall';
 return 'other';
}

/** True when this open combat cell hosts a grated pad. */
export function cellHasCatwalk(c: number, r: number): boolean {
 if (intentionalGap(c, r)) return false;
 const z = zoneOf(c, r);
 if (z === 'entrance') {
  // Edge shelves only — leave the centre combat lane on the ground.
  return c <= 9 || c >= 13;
 }
 if (z === 'neck') return true;
 if (z === 'hall') return true;
 return false;
}

function coveredCells(): Cell[] {
 return combatOpenCells().filter(({ c, r }) => cellHasCatwalk(c, r));
}

function padSpan(c: number, r: number): CatwalkSpan {
 const p = worldXZ(c, r);
 const h = CATWALK_PAD * .5;
 return { minX: p.x - h, maxX: p.x + h, minZ: p.z - h, maxZ: p.z + h };
}

/** Solid grated spans (one AABB per covered cell). Gap cells have no AABB. */
export const CATWALK_SPANS: readonly CatwalkSpan[] = Object.freeze(
 coveredCells().map(({ c, r }) => padSpan(c, r)),
);

/**
 * Ladder climb volumes — approach from the ground, climb onto an adjacent pad.
 * Guards stay ground-only for v1.
 */
export const CATWALK_LADDERS: readonly CatwalkLadder[] = Object.freeze([
 // Entrance west edge → pad on (8,3)
 { x: -12, z: -10, hx: .5, hz: .55, minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35, landX: -12, landZ: -12, label: 'entrance-west' },
 // Entrance east edge → pad on (14,3)
 { x: 12, z: -10, hx: .5, hz: .55, minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35, landX: 12, landZ: -12, label: 'entrance-east' },
 // Neck south (hall approach) → pad on (11,10)
 { x: 0, z: -38, hx: .5, hz: .55, minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35, landX: 0, landZ: -40, label: 'neck-south' },
 // Hall NW → pad on (4,12)
 { x: -28, z: -46, hx: .5, hz: .55, minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35, landX: -28, landZ: -48, label: 'hall-nw' },
 // Hall NE → pad on (18,12)
 { x: 28, z: -46, hx: .5, hz: .55, minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35, landX: 28, landZ: -48, label: 'hall-ne' },
 // Hall SW deep → pad on (4,23)
 { x: -28, z: -94, hx: .5, hz: .55, minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35, landX: -28, landZ: -92, label: 'hall-sw' },
 // Hall SE deep → pad on (18,23)
 { x: 28, z: -94, hx: .5, hz: .55, minY: FLOOR_Y, maxY: CATWALK_DECK_Y + .35, landX: 28, landZ: -92, label: 'hall-se' },
]);

/** @deprecated Prefer CATWALK_LADDERS[0]; kept for older call sites during transition. */
export const CATWALK_LADDER = CATWALK_LADDERS[0]!;

export type CatwalkMountKind = 'pad' | 'straight' | 'cross' | 't' | 'ladder' | 'rail_broken';

export type CatwalkMount = {
 kind: CatwalkMountKind;
 x: number;
 z: number;
 /** World yaw (rad). */
 yaw: number;
 label: string;
};

/** Gap cells that border a covered pad — dangling rail dressing. */
function gapEdgeCells(): Cell[] {
 const covered = new Set(coveredCells().map(({ c, r }) => `${c},${r}`));
 const open = new Set(combatOpenCells().map(({ c, r }) => `${c},${r}`));
 const edges: Cell[] = [];
 for (const { c, r } of combatOpenCells()) {
  if (covered.has(`${c},${r}`)) continue;
  if (!open.has(`${c},${r}`)) continue;
  const neigh = [`${c + 1},${r}`, `${c - 1},${r}`, `${c},${r + 1}`, `${c},${r - 1}`];
  if (neigh.some(k => covered.has(k))) edges.push({ c, r });
 }
 return edges;
}

/**
 * Visual mounts: one pad per covered cell, ladders, broken rails on gap edges.
 * Deck pieces sit with grate top at CATWALK_DECK_Y; ladder feet on FLOOR_Y.
 */
export function catwalkMounts(): CatwalkMount[] {
 const mounts: CatwalkMount[] = [];
 for (const { c, r } of coveredCells()) {
  const p = worldXZ(c, r);
  mounts.push({ kind: 'pad', x: p.x, z: p.z, yaw: 0, label: `pad-${c}-${r}` });
 }
 for (const L of CATWALK_LADDERS) {
  mounts.push({ kind: 'ladder', x: L.x, z: L.z, yaw: 0, label: `ladder-${L.label}` });
 }
 for (const { c, r } of gapEdgeCells()) {
  const p = worldXZ(c, r);
  // Two facing dangling rails so the drop reads as a collapsed span.
  mounts.push({ kind: 'rail_broken', x: p.x + .9, z: p.z, yaw: 0, label: `gap-e-${c}-${r}` });
  mounts.push({ kind: 'rail_broken', x: p.x - .9, z: p.z, yaw: Math.PI, label: `gap-w-${c}-${r}` });
 }
 return mounts;
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
 *
 * These discs are intentionally the same as the 0.22.45 west-hall gallery so the
 * shipped bunker lightmap signature stays valid. Map-scale suspended pads and the
 * new ladder feet outside this pier do not add keepouts (larger / relocated discs
 * would force a Blender rebake). Revisit after the next bunker-bake.
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
 const combat = combatOpenCells();
 const covered = coveredCells();
 const combatKeys = new Set(combat.map(({ c, r }) => `${c},${r}`));
 // Deduplicate entrance/neck overlap already handled by Set in combatOpenCells
 const pct = combat.length ? (100 * covered.length) / combat.length : 0;
 return {
  combatOpen: combat.length,
  coveredCells: covered.length,
  coveragePct: pct,
  climbPoints: CATWALK_LADDERS.length,
  spans: CATWALK_SPANS.length,
  gapEdgeCells: gapEdgeCells().length,
  combatKeys,
 };
}
