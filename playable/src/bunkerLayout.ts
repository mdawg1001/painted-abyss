/**
 * Soviet bunker dressing: where every piece of the art pass goes.
 *
 * Pure data, no THREE. It reads the simulation grid (`cells`) and never changes it: collision,
 * sight lines, AI and flooding still run on the same 4 m cells. Everything here is visual and
 * is kept inside two envelopes the simulation already implies:
 *  - wall clearance: the diver's centre never gets closer than 0.48 m to a wall plane, so
 *    nothing below the ceiling zone protrudes more than `BUNKER.maxProtrusion` into a room;
 *  - swim ceiling: a swimmer's eye can rise to SURFACE_Y, so anything spanning open floor
 *    (beams, lintels) keeps its underside above SURFACE_Y + `BUNKER.headroom`.
 *
 * Kit pieces come from Quaternius's Modular Sci-Fi MegaKit (CC0) on its native 4 m grid, which
 * matches CELL. A wall piece sits on its tile's −x edge, faces +x, and runs z −2..2.
 */
import { cells as levelCells, world, CELL, FLOOR_Y, SURFACE_Y, breathZone, breathHatchSpawn, EXIT } from './simulation';

export const BUNKER = {
 /** Floor to ceiling slab (m). The water can rise to SURFACE_Y, so the halls stay tall. */
 height: 8,
 /** Top of the oil-paint band (m above the floor), then a thin dark stripe, then whitewash. */
 dado: 1.55,
 stripe: .06,
 beamDepth: .62, beamWidth: .5,
 /** Deep lintel over a passage mouth. */
 lintelDepth: 1.05, lintelWidth: .7,
 /** Flat pilaster on a straight wall, every second cell seam. */
 pilasterWidth: .8, pilasterDepth: .2,
 /** Square corner guard on a convex corner (half size). */
 cornerHalf: .26,
 /** Painted yellow/black bumper at the foot of a corner guard (m). */
 hazardHeight: 1.1,
 /** Two service pipes on brackets under the cable tray (m above the floor / off the wall / radius). */
 pipes: [{ y: 5.3, off: .24, r: .1 }, { y: 5.62, off: .19, r: .065 }],
 bracketEvery: 2,
 /** Nothing below the ceiling zone may stand further than this off a wall (m). */
 maxProtrusion: .4,
 /** Clear space between the highest swimming eye and anything spanning a room (m). */
 headroom: .3,
} as const;

/** Surface finishes the bunker shader understands (vertex attribute). */
export const FINISH = {
 paint: 0,     // plastered wall: oil-paint dado, stripe, whitewash above (by height)
 enamel: 1,    // painted steel; chips to rust
 floor: 2,     // painted concrete floor, worn to bare concrete
 ceiling: 3,   // whitewashed slab, water stains, peeling
 rubber: 4,    // cable sheath
 galv: 5,      // galvanised / bare grey steel
 hazard: 6,    // yellow and black diagonal bumper paint
 concrete: 7,  // bare cast concrete
} as const;
export type Finish = typeof FINISH[keyof typeof FINISH];
export type Surf = { tint: number; finish: Finish };

export type Zone = 'corridor' | 'entrance' | 'neck' | 'hall' | 'fissure' | 'pool' | 'back';

/** Per-compartment scheme. Lower wall colours are the stock Soviet institutional enamels. */
export const ZONE_STYLE: Record<Zone, { label: string; lower: number; stripe: number; floor: number; floorFinish: Finish; floorPiece: string; pipe: [number, number] }> = {
 corridor: { label: 'ОТСЕК 1', lower: 0x49654e, stripe: 0x23261f, floor: 0x3d423d, floorFinish: FINISH.enamel, floorPiece: 'Platform_Metal2', pipe: [0x4a6a4a, 0x7a3a26] },
 entrance: { label: 'ОТСЕК 2', lower: 0x4c7677, stripe: 0x1f2a2a, floor: 0x6a675f, floorFinish: FINISH.floor, floorPiece: 'Platform_Simple', pipe: [0x4a6a4a, 0x7a3a26] },
 neck: { label: 'ОТСЕК 3', lower: 0x49654e, stripe: 0x23261f, floor: 0x5c3429, floorFinish: FINISH.floor, floorPiece: 'Platform_Simple', pipe: [0x4a6a4a, 0x7a3a26] },
 hall: { label: 'ОТСЕК 4', lower: 0x3f5a48, stripe: 0x1f231d, floor: 0x5a3328, floorFinish: FINISH.floor, floorPiece: 'Platform_Simple', pipe: [0x4a6a4a, 0x8a6a2a] },
 fissure: { label: 'ОТСЕК 5', lower: 0x6b5a3d, stripe: 0x2a2419, floor: 0x5b5850, floorFinish: FINISH.concrete, floorPiece: 'Platform_Simple', pipe: [0x4a6a4a, 0x7a3a26] },
 pool: { label: 'ОТСЕК 6', lower: 0x3e6c70, stripe: 0x1c2627, floor: 0x5b5850, floorFinish: FINISH.concrete, floorPiece: 'Platform_Simple', pipe: [0x4a6a4a, 0x7a3a26] },
 back: { label: 'ОТСЕК 7', lower: 0x6a3a2d, stripe: 0x1e1512, floor: 0x4a2c24, floorFinish: FINISH.floor, floorPiece: 'Platform_Simple', pipe: [0x4a6a4a, 0x7a3a26] },
};
export const WHITEWASH = 0xd6d2c2;
export const CEILING_TINT = 0xcfcabb;
export const ENAMEL_DARK = 0x353a33;
export const TRAY_GREY = 0x7d8079;
export const CABLE_BLACK = 0x17181a;

export function zoneOf(c: number, r: number): Zone {
 if (breathZone(c, r) !== '') return 'corridor';
 if (c >= 17 && r <= 4) return 'pool';
 if (c === 19 && r <= 10) return 'fissure';
 if (r <= 5) return 'entrance';
 if (r <= 10) return 'neck';
 if (r <= 24) return 'hall';
 return 'back';
}

/** Deterministic 0..1 hash for dressing variation (stable across reloads). */
export function hash3(a: number, b: number, s = 0) {
 let h = Math.imul(a | 0, 374761393) ^ Math.imul(b | 0, 668265263) ^ Math.imul(s | 0, 2147483647);
 h = Math.imul(h ^ (h >>> 13), 1274126177);
 h ^= h >>> 16;
 return (h >>> 0) / 4294967296;
}

export type Keepout = { x: number; z: number; r: number };

/** A wall face: open cell (c,r), solid neighbour (c+dc, r+dr). */
export type WallEdge = {
 c: number; r: number; dc: number; dr: number; zone: Zone;
 /** Point on the wall plane at the edge centre (floor height) and the kit yaw. */
 x: number; z: number; yaw: number;
 /** Inward unit normal and the along-wall unit tangent (world xz). */
 nx: number; nz: number; tx: number; tz: number;
 /** What the wall does past each end: continues, turns in (concave) or wraps round (convex). */
 endPlus: 'straight' | 'in' | 'out'; endMinus: 'straight' | 'in' | 'out';
};

export type KitPlacement = {
 kind: 'kit'; piece: string; c: number; r: number;
 x: number; y: number; z: number; yaw: number;
 /** Upside down (ceiling plates). */
 flip?: boolean;
 scale?: [number, number, number];
 /** Surface for each kit material slot; a slot not listed is dropped. */
 slots: Record<string, Surf>;
};
export type BoxPlacement = { kind: 'box'; c: number; r: number; x: number; y: number; z: number; sx: number; sy: number; sz: number; yaw: number; surf: Surf; bevel?: number };
export type CylPlacement = { kind: 'cyl'; c: number; r: number; a: [number, number, number]; b: [number, number, number]; radius: number; surf: Surf };
export type BallPlacement = { kind: 'ball'; c: number; r: number; x: number; y: number; z: number; radius: number; surf: Surf };
export type TorusPlacement = { kind: 'torus'; c: number; r: number; x: number; y: number; z: number; nx: number; nz: number; radius: number; tube: number; surf: Surf };
export type DecalPlacement = { kind: 'decal'; c: number; r: number; id: string; x: number; y: number; z: number; nx: number; nz: number; w: number; h: number };
export type Placement = KitPlacement | BoxPlacement | CylPlacement | BallPlacement | TorusPlacement | DecalPlacement;

export type BunkerLayout = {
 edges: WallEdge[];
 placements: Placement[];
 /** Decal ids that need a unique painted label (pilaster grid marks etc.). */
 labels: Map<string, string>;
 /** Sealed hermetic doors (centre on the wall plane, inward normal); the first is the hatch. */
 doors: { x: number; z: number; nx: number; nz: number }[];
};

const DIRS: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];

export type LayoutOptions = {
 cells?: Set<string>;
 keepouts?: Keepout[];
 /** Cells that keep an open roof (the exit shaft). */
 openRoof?: Set<string>;
};

export function wallEdges(cells: Set<string>): WallEdge[] {
 const open = (c: number, r: number) => cells.has(`${c},${r}`);
 const out: WallEdge[] = [];
 for (const key of [...cells].sort()) {
  const [c, r] = key.split(',').map(Number);
  const p = world(c, r);
  for (const [dc, dr] of DIRS) {
   if (open(c + dc, r + dr)) continue;
   // Outward direction in world xz: +col is +x, +row is −z.
   const ox = dc, oz = -dr;
   const tc = -dr, tr = dc; // along the wall in cell space
   const end = (s: number) => !open(c + tc * s, r + tr * s) ? 'in' as const : open(c + tc * s + dc, r + tr * s + dr) ? 'out' as const : 'straight' as const;
   out.push({
    c, r, dc, dr, zone: zoneOf(c, r),
    x: p.x + ox * CELL / 2, z: p.z + oz * CELL / 2,
    yaw: Math.atan2(oz, -ox),
    nx: -ox, nz: -oz, tx: tc, tz: -tr,
    endPlus: end(1), endMinus: end(-1),
   });
  }
 }
 return out;
}

/** Grid vertex (i, j): the corner shared by cells (i−1..i, j−1..j). */
export function vertexWorld(i: number, j: number) {
 return { x: (i - 11) * CELL - CELL / 2, z: -j * CELL + CELL / 2 };
}

export function buildBunkerLayout(opts: LayoutOptions = {}): BunkerLayout {
 const cells = opts.cells ?? levelCells;
 const keepouts = opts.keepouts ?? [];
 const openRoof = opts.openRoof ?? new Set(['19,3']);
 const open = (c: number, r: number) => cells.has(`${c},${r}`);
 const placements: Placement[] = [];
 const labels = new Map<string, string>();
 const edges = wallEdges(cells);
 const H = BUNKER.height;
 const clear = (x: number, z: number, pad = 0) => keepouts.every(k => Math.hypot(k.x - x, k.z - z) >= k.r + pad);
 const cellOf = (x: number, z: number) => ({ c: Math.round(x / CELL) + 11, r: Math.round(-z / CELL) });

 // ── Floors and ceiling plates ────────────────────────────────────────────────
 for (const key of [...cells].sort()) {
  const [c, r] = key.split(',').map(Number);
  const p = world(c, r), st = ZONE_STYLE[zoneOf(c, r)];
  const floor: Surf = { tint: st.floor, finish: st.floorFinish };
  placements.push({ kind: 'kit', piece: st.floorPiece, c, r, x: p.x, y: FLOOR_Y, z: p.z, yaw: 0, slots: anySlot(floor) });
  if (!openRoof.has(key)) placements.push({ kind: 'kit', piece: 'Platform_Simple', c, r, x: p.x, y: FLOOR_Y + H, z: p.z, yaw: 0, flip: true, slots: anySlot({ tint: CEILING_TINT, finish: FINISH.ceiling }) });
 }

 // ── Walls: panel (0–3), plaster plates (3–5, 5–6), cable tray (6–8) ─────────
 for (const e of edges) {
  const st = ZONE_STYLE[e.zone];
  const paint: Surf = { tint: st.lower, finish: FINISH.paint };
  const trim: Surf = { tint: ENAMEL_DARK, finish: FINISH.enamel };
  // Kit pieces are authored about the tile centre, with the wall on the tile's −x edge.
  const cx = e.x + e.nx * CELL / 2, cz = e.z + e.nz * CELL / 2;
  const at = (piece: string, y: number, slots: Record<string, Surf>): KitPlacement => ({ kind: 'kit', piece, c: e.c, r: e.r, x: cx, y, z: cz, yaw: e.yaw, slots });
  placements.push(at('WallAstra_Straight_Flat', FLOOR_Y, { MI_Trim_03: paint, MI_Trim_03_Dark: paint, MI_Trim_02: trim }));
  placements.push(at('ShortWall_WhitePlate2_Straight', FLOOR_Y + 3, { MI_Trim_03: paint }));
  placements.push(at('ShortWall_Simple1_Straight', FLOOR_Y + 5, { MI_Trim_03: paint }));
  const hanging = (e.zone === 'hall' || e.zone === 'corridor' || e.zone === 'back') && hash3(e.c * 4 + e.dc + 7, e.r * 4 + e.dr + 3, 11) < .09;
  placements.push(at(hanging ? 'TopCables_Straight_Hanging' : 'TopCables_Straight', FLOOR_Y + 3, {
   MI_Trim_01: { tint: TRAY_GREY, finish: FINISH.galv },
   MI_Trim_02: trim,
   MI_Trim_03_Dark: trim,
   MI_Trim_03_Cables_Blue: { tint: CABLE_BLACK, finish: FINISH.rubber },
  }));
 }

 // ── Hermetic doors: the hatch, then sealed doors on quiet straight walls ─────
 const doors: BunkerLayout['doors'] = [];
 const doorEdges = new Set<WallEdge>();
 {
  const spawn = breathHatchSpawn();
  const hatchZ = spawn.z + CELL / 2;
  const { c, r } = cellOf(spawn.x + CELL / 2, spawn.z);
  hermeticDoor(placements, c, r, spawn.x, hatchZ, 0, -1, 'ГД-1');
  labels.set('door:ГД-1', 'ГД-1');
  doors.push({ x: spawn.x, z: hatchZ, nx: 0, nz: -1 });
  const want: Zone[] = ['entrance', 'hall', 'back', 'hall'];
  want.forEach((zone, k) => {
   const pool = edges.filter(e => e.zone === zone && e.endPlus === 'straight' && e.endMinus === 'straight' && !doorEdges.has(e)
    && clear(e.x, e.z, 2.6) && doors.every(d => Math.hypot(d.x - e.x, d.z - e.z) > 14));
   if (!pool.length) return;
   pool.sort((a, b) => hash3(a.c * 5 + a.dc, a.r * 5 + a.dr, 60 + k) - hash3(b.c * 5 + b.dc, b.r * 5 + b.dr, 60 + k));
   const e = pool[0];
   const label = `ГД-${k + 2}`;
   labels.set(`door:${label}`, label);
   hermeticDoor(placements, e.c, e.r, e.x, e.z, e.nx, e.nz, label);
   doors.push({ x: e.x, z: e.z, nx: e.nx, nz: e.nz });
   doorEdges.add(e);
  });
 }
 const nearDoor = (x: number, z: number) => doors.some(d => Math.abs(d.x - x) < 2.9 && Math.abs(d.z - z) < 2.9);

 // ── Pilasters and corner guards at grid vertices ─────────────────────────────
 let minC = Infinity, maxC = -Infinity, minR = Infinity, maxR = -Infinity;
 for (const k of cells) { const [c, r] = k.split(',').map(Number); minC = Math.min(minC, c); maxC = Math.max(maxC, c); minR = Math.min(minR, r); maxR = Math.max(maxR, r); }
 const axis = 'АБВГДЕЖИКЛМНПРСТУФ';
 for (let i = minC; i <= maxC + 1; i++) for (let j = minR; j <= maxR + 1; j++) {
  const q = [open(i - 1, j - 1), open(i, j - 1), open(i - 1, j), open(i, j)]; // (x−,z+) (x+,z+) (x−,z−) (x+,z−)
  const n = q.filter(Boolean).length;
  if (n === 0 || n === 4 || n === 1) continue;
  const v = vertexWorld(i, j);
  const own = q[3] ? { c: i, r: j } : q[2] ? { c: i - 1, r: j } : q[1] ? { c: i, r: j - 1 } : { c: i - 1, r: j - 1 };
  const zone = zoneOf(own.c, own.r), st = ZONE_STYLE[zone];
  const paint: Surf = { tint: st.lower, finish: FINISH.paint };
  const diagonal = n === 2 && q[0] === q[3];
  if (n === 3 || diagonal) {
   const s = BUNKER.cornerHalf * 2, hz = BUNKER.hazardHeight;
   placements.push({ kind: 'box', ...own, x: v.x, y: FLOOR_Y + hz / 2, z: v.z, sx: s, sy: hz, sz: s, yaw: 0, surf: { tint: 0xc9a227, finish: FINISH.hazard }, bevel: .03 });
   placements.push({ kind: 'box', ...own, x: v.x, y: FLOOR_Y + (hz + H) / 2, z: v.z, sx: s, sy: H - hz, sz: s, yaw: 0, surf: paint, bevel: .03 });
   continue;
  }
  // Straight wall through the vertex: open pair shares an edge.
  let nx = 0, nz = 0, along = 0;
  if (q[0] && q[1]) { nz = 1; along = i; }       // open to z+, wall runs along x
  else if (q[2] && q[3]) { nz = -1; along = i; } // open to z−
  else if (q[0] && q[2]) { nx = -1; along = j; } // open to x−, wall runs along z
  else { nx = 1; along = j; }
  if (along % 2 !== 0) continue;
  const d = BUNKER.pilasterDepth, w = BUNKER.pilasterWidth;
  const px = v.x + nx * d / 2, pz = v.z + nz * d / 2;
  if (!clear(px, pz, .9) || nearDoor(px, pz)) continue;
  placements.push({ kind: 'box', ...own, x: px, y: FLOOR_Y + H / 2, z: pz, sx: nx ? d : w, sy: H, sz: nx ? w : d, yaw: 0, surf: paint, bevel: .025 });
  // Structural grid mark stencilled on the pilaster face.
  const id = `grid:${i},${j}`;
  labels.set(id, `${axis[((j % axis.length) + axis.length) % axis.length]}-${i}`);
  placements.push({ kind: 'decal', ...own, id, x: v.x + nx * (d + .012), y: FLOOR_Y + 2.45, z: v.z + nz * (d + .012), nx, nz, w: .52, h: .26 });
 }

 // ── Ceiling beams (every second row seam) and lintels over passage mouths ───
 const span = (r: number, c: number) => { if (!open(c, r)) return null; let a = c, b = c; while (open(a - 1, r)) a--; while (open(b + 1, r)) b++; return [a, b] as const; };
 const beamY = FLOOR_Y + H - BUNKER.beamDepth / 2;
 const lintelY = FLOOR_Y + H - BUNKER.lintelDepth / 2;
 for (let r = minR; r < maxR; r++) for (let c = minC; c <= maxC; c++) {
  if (!open(c, r) || !open(c, r + 1)) continue;
  const A = span(r, c)!, B = span(r + 1, c)!;
  const mouth = (A[0] !== B[0] || A[1] !== B[1]) && Math.min(A[1], B[1]) - Math.max(A[0], B[0]) + 1 <= 3;
  const p = world(c, r), z = p.z - CELL / 2;
  if (mouth) {
   placements.push({ kind: 'box', c, r, x: p.x, y: lintelY, z, sx: CELL + .002, sy: BUNKER.lintelDepth, sz: BUNKER.lintelWidth, yaw: 0, surf: { tint: WHITEWASH, finish: FINISH.paint }, bevel: .03 });
  } else if ((r + 1) % 2 === 0) {
   placements.push({ kind: 'box', c, r, x: p.x, y: beamY, z, sx: CELL + .002, sy: BUNKER.beamDepth, sz: BUNKER.beamWidth, yaw: 0, surf: { tint: CEILING_TINT, finish: FINISH.ceiling }, bevel: .02 });
  }
 }

 // ── Service pipes on brackets, continuous round corners ─────────────────────
 for (const e of edges) {
  const st = ZONE_STYLE[e.zone];
  BUNKER.pipes.forEach((pipe, k) => {
   const ext = (end: 'straight' | 'in' | 'out') => end === 'straight' ? CELL / 2 : end === 'in' ? CELL / 2 - pipe.off : CELL / 2 + pipe.off;
   const t1 = ext(e.endPlus), t0 = -ext(e.endMinus);
   const ox = e.x + e.nx * pipe.off, oz = e.z + e.nz * pipe.off, y = FLOOR_Y + pipe.y;
   const surf: Surf = { tint: st.pipe[k], finish: FINISH.enamel };
   placements.push({ kind: 'cyl', c: e.c, r: e.r, a: [ox + e.tx * t0, y, oz + e.tz * t0], b: [ox + e.tx * t1, y, oz + e.tz * t1], radius: pipe.r, surf });
   if (e.endPlus !== 'straight') placements.push({ kind: 'ball', c: e.c, r: e.r, x: ox + e.tx * t1, y, z: oz + e.tz * t1, radius: pipe.r * 1.18, surf });
   if (e.endMinus !== 'straight') placements.push({ kind: 'ball', c: e.c, r: e.r, x: ox + e.tx * t0, y, z: oz + e.tz * t0, radius: pipe.r * 1.18, surf });
   if (k === 0) for (let t = -1; t <= 1; t += BUNKER.bracketEvery) {
    const bx = e.x + e.nx * (pipe.off / 2) + e.tx * t, bz = e.z + e.nz * (pipe.off / 2) + e.tz * t;
    placements.push({ kind: 'box', c: e.c, r: e.r, x: bx, y: y + .16, z: bz, sx: e.nx ? pipe.off + .02 : .05, sy: .6, sz: e.nx ? .05 : pipe.off + .02, yaw: 0, surf: { tint: ENAMEL_DARK, finish: FINISH.enamel } });
   }
  });
 }

 // ── Props: drums in quiet corners, ceiling vents, floor cable coils ─────────
 for (let i = minC; i <= maxC + 1; i++) for (let j = minR; j <= maxR + 1; j++) {
  const q = [open(i - 1, j - 1), open(i, j - 1), open(i - 1, j), open(i, j)];
  if (q.filter(Boolean).length !== 1) continue;
  const k = q.indexOf(true);
  const sx = k === 1 || k === 3 ? 1 : -1, sz = k <= 1 ? 1 : -1;
  const v = vertexWorld(i, j);
  const x = v.x + sx * .29, z = v.z + sz * .29;
  const { c, r } = cellOf(x, z);
  const zone = zoneOf(c, r);
  if (zone === 'corridor' || hash3(i, j, 5) > .55 || !clear(x, z, .6) || nearDoor(x, z)) continue;
  const drum = [0x3d4f3a, 0x4a3b2e, 0x2f4a55][Math.floor(hash3(i, j, 6) * 3)];
  placements.push({ kind: 'kit', piece: 'Prop_Barrel_Large', c, r, x, y: FLOOR_Y, z, yaw: hash3(i, j, 7) * Math.PI * 2, slots: { MI_Trim_01: { tint: drum, finish: FINISH.enamel }, MI_Trim_02: { tint: ENAMEL_DARK, finish: FINISH.enamel } } });
 }
 for (const key of [...cells].sort()) {
  const [c, r] = key.split(',').map(Number);
  const p = world(c, r);
  if (hash3(c, r, 21) < .22 && !openRoof.has(key)) {
   placements.push({ kind: 'kit', piece: 'Prop_Vent_Big', c, r, x: p.x + 1.05, y: FLOOR_Y + H, z: p.z, yaw: Math.PI / 2, slots: { MI_Trim_01: { tint: TRAY_GREY, finish: FINISH.galv }, MI_Trim_02: { tint: ENAMEL_DARK, finish: FINISH.enamel } } });
  }
 }
 for (const e of edges) {
  if (e.endPlus !== 'straight' || e.endMinus !== 'straight' || hash3(e.c * 3 + e.dc, e.r * 3 + e.dr, 31) > .06) continue;
  const x = e.x + e.nx * .62, z = e.z + e.nz * .62;
  if (!clear(x, z, .8) || nearDoor(x, z)) continue;
  placements.push({ kind: 'kit', piece: 'Prop_Cable_1', c: e.c, r: e.r, x, y: FLOOR_Y, z, yaw: e.yaw + hash3(e.c, e.r, 32) * .8, slots: { MI_Trim_03_Cables: { tint: CABLE_BLACK, finish: FINISH.rubber }, MI_Trim_02: { tint: ENAMEL_DARK, finish: FINISH.enamel } } });
 }

 // ── Stencils: compartment names, the shelter number, exit arrows, gauges ───
 dressStencils(edges.filter(e => !doorEdges.has(e) && !nearDoor(e.x, e.z)), placements, labels, clear);
 return { edges, placements, labels, doors };
}

/** Door leaf colour: the grey-green of Soviet blast doors. */
export const DOOR_GREEN = 0x56614f;
/** Kit frame opening, measured from Door_Frame_Square (m). */
export const DOOR_OPENING = { w: 3.12, h: 3.5 };

/**
 * A sealed hermetic door (ГД) flush on a wall: kit frame half set into the wall, a steel leaf in
 * the recess, six lever clamps (задрайки) round the edge and a handwheel. Front of the wheel stays
 * inside `BUNKER.maxProtrusion`.
 */
export function hermeticDoor(out: Placement[], c: number, r: number, x: number, z: number, nx: number, nz: number, label: string) {
 const yaw = Math.atan2(nx, nz);
 const tx = nz, tz = -nx; // along the wall
 const leaf: Surf = { tint: DOOR_GREEN, finish: FINISH.enamel };
 const dark: Surf = { tint: ENAMEL_DARK, finish: FINISH.enamel };
 const steel: Surf = { tint: 0x8a8c86, finish: FINISH.galv };
 out.push({ kind: 'kit', piece: 'Door_Frame_Square', c, r, x, y: FLOOR_Y, z, yaw, slots: { MI_Trim_01: { tint: 0x4a5446, finish: FINISH.enamel } } });
 const lw = DOOR_OPENING.w - .08, lh = DOOR_OPENING.h - .06, face = .19;
 out.push({ kind: 'box', c, r, x: x + nx * (face - .08), y: FLOOR_Y + .04 + lh / 2, z: z + nz * (face - .08), sx: nx ? .16 : lw, sy: lh, sz: nx ? lw : .16, yaw: 0, surf: leaf });
 // Stiffening ribs across the leaf.
 for (const h of [.9, 2.65]) out.push({ kind: 'box', c, r, x: x + nx * (face + .02), y: FLOOR_Y + h, z: z + nz * (face + .02), sx: nx ? .05 : lw - .3, sy: .12, sz: nx ? lw - .3 : .05, yaw: 0, surf: leaf });
 // Clamp levers: a hub on the leaf and a handle turned down.
 for (const [u, h] of [[-1.3, .75], [-1.3, 2.85], [1.3, .75], [1.3, 2.85], [-1.3, 1.8], [1.3, 1.8]] as const) {
  const px = x + tx * u + nx * (face + .05), pz = z + tz * u + nz * (face + .05);
  out.push({ kind: 'ball', c, r, x: px, y: FLOOR_Y + h, z: pz, radius: .06, surf: dark });
  out.push({ kind: 'cyl', c, r, a: [px, FLOOR_Y + h, pz], b: [px - tx * Math.sign(u) * .05, FLOOR_Y + h - .32, pz - tz * Math.sign(u) * .05], radius: .025, surf: steel });
 }
 // Handwheel with four spokes.
 const wy = FLOOR_Y + 1.8, wx = x + nx * (face + .12), wz = z + nz * (face + .12);
 out.push({ kind: 'torus', c, r, x: wx, y: wy, z: wz, nx, nz, radius: .36, tube: .032, surf: steel });
 for (const a of [0, Math.PI / 2]) {
  const du = Math.cos(a) * .36, dv = Math.sin(a) * .36;
  out.push({ kind: 'cyl', c, r, a: [wx - tx * du, wy - dv, wz - tz * du], b: [wx + tx * du, wy + dv, wz + tz * du], radius: .018, surf: steel });
 }
 out.push({ kind: 'cyl', c, r, a: [x + nx * face, wy, z + nz * face], b: [wx + nx * .02, wy, wz + nz * .02], radius: .05, surf: dark });
 out.push({ kind: 'decal', c, r, id: `door:${label}`, x: x + tx * .95 + nx * (face + .012), y: FLOOR_Y + 3.05, z: z + tz * .95 + nz * (face + .012), nx, nz, w: .8, h: .34 });
 void yaw;
}

function anySlot(s: Surf): Record<string, Surf> {
 return new Proxy({}, { get: () => s, has: () => true }) as Record<string, Surf>;
}

/** Stencil ids with fixed art in the atlas (see bunkerDecals.ts). */
export const STENCILS = ['shelter', 'caution', 'exitL', 'exitR', 'nosmoke', 'volts', 'star', 'hermetic', 'gauge', 'zone:corridor', 'zone:entrance', 'zone:neck', 'zone:hall', 'zone:fissure', 'zone:pool', 'zone:back'] as const;

function dressStencils(edges: WallEdge[], out: Placement[], _labels: Map<string, string>, clear: (x: number, z: number, pad?: number) => boolean) {
 const flat = (e: WallEdge) => e.endPlus === 'straight' && e.endMinus === 'straight';
 const put = (e: WallEdge, id: string, y: number, w: number, h: number, t = 0) => {
  const x = e.x + e.tx * t + e.nx * .012, z = e.z + e.tz * t + e.nz * .012;
  out.push({ kind: 'decal', c: e.c, r: e.r, id, x, y: FLOOR_Y + y, z, nx: e.nx, nz: e.nz, w, h });
 };
 const used = new Set<WallEdge>();
 const pick = (pred: (e: WallEdge) => boolean, salt: number) => {
  const pool = edges.filter(e => !used.has(e) && pred(e) && clear(e.x + e.nx * .3, e.z + e.nz * .3, 1.2));
  if (!pool.length) return null;
  pool.sort((a, b) => hash3(a.c * 5 + a.dc, a.r * 5 + a.dr, salt) - hash3(b.c * 5 + b.dc, b.r * 5 + b.dr, salt));
  used.add(pool[0]);
  return pool[0];
 };
 // Compartment name and a depth gauge in every compartment.
 for (const zone of Object.keys(ZONE_STYLE) as Zone[]) {
  const a = pick(e => e.zone === zone && flat(e), 41);
  if (a) put(a, `zone:${zone}`, 2.55, 1.9, .62);
  const g = pick(e => e.zone === zone && flat(e), 43);
  if (g) put(g, 'gauge', 3.7, .46, 7.2, 1.1);
 }
 // The shelter plate faces the diver coming up the hatch corridor.
 const shelter = pick(e => e.zone === 'entrance' && e.dr === 1, 47) ?? pick(e => e.zone === 'entrance', 47);
 if (shelter) put(shelter, 'shelter', 3.05, 2.6, 1.3);
 // Exit arrows lead from the hall up the fissure to the pool: each points along its wall
 // towards the next waypoint (the fissure mouth, then the pool, then the exit itself).
 const waypoint: Partial<Record<Zone, [number, number]>> = { hall: [32, -44], fissure: [32, -16], pool: [EXIT.x, EXIT.z] };
 for (const [zone, n] of [['hall', 3], ['fissure', 3], ['pool', 1]] as const) {
  const [wx, wz] = waypoint[zone]!;
  for (let k = 0; k < n; k++) {
   const e = pick(x => x.zone === zone && flat(x) && Math.hypot(x.x - wx, x.z - wz) > 3, 50 + k);
   if (!e) break;
   // The viewer faces the wall (−n); their right hand, and the stencil's +u, is (nz, −nx).
   const right = e.nz * (wx - e.x) - e.nx * (wz - e.z);
   put(e, right > 0 ? 'exitR' : 'exitL', 2.05, 1.5, .5);
  }
 }
 const sprinkle: [string, number, number, number, number][] = [['caution', 6, 2.3, 1.5, .55], ['nosmoke', 4, 2.2, 1.3, .5], ['volts', 6, 5.95, .7, .5], ['star', 3, 4.1, .9, .9], ['hermetic', 3, 2.4, 1.6, .5]];
 sprinkle.forEach(([id, n, y, w, h], s) => {
  for (let k = 0; k < n; k++) {
   const e = pick(x => flat(x), 70 + s * 10 + k);
   if (!e) break;
   put(e, id, y, w, h, (hash3(e.c, e.r, 90 + s) - .5) * 1.2);
  }
 });
}

export const SWIM_CEILING = SURFACE_Y + BUNKER.headroom;
