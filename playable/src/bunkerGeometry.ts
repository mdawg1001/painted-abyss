/**
 * Bunker geometry baking: placements → per-bucket, per-sheet BufferGeometry lists.
 * THREE only (no DOM, no Vite asset imports), so the offline light baker runs the exact same code.
 */
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { FINISH, type BunkerLayout, type Placement, type Surf } from './bunkerLayout';
import { breathZone } from './simulation';
import type { Sheet, KitPrim, KitPiece, BunkerKit } from './bunkerKit';

/**
 * Stand-in faces for the structural pieces until kit.bin arrives (a few hundred ms):
 * the same painted planes, so the bunker is closed from the first frame.
 */
const FALLBACK: Record<string, { axis: 'x' | 'y'; at: number; a0: number; a1: number; b0: number; b1: number; slot: string }> = {
 WallAstra_Straight_Flat: { axis: 'x', at: -2, a0: 0, a1: 3, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 ShortWall_WhitePlate2_Straight: { axis: 'x', at: -2, a0: 0, a1: 2, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 ShortWall_Simple1_Straight: { axis: 'x', at: -2, a0: 0, a1: 1, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 TopCables_Straight: { axis: 'x', at: -2, a0: 3, a1: 5, b0: -2, b1: 2, slot: 'MI_Trim_03_Dark' },
 TopCables_Straight_Hanging: { axis: 'x', at: -2, a0: 3, a1: 5, b0: -2, b1: 2, slot: 'MI_Trim_03_Dark' },
 Platform_Simple: { axis: 'y', at: 0, a0: -2, a1: 2, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 Platform_Metal2: { axis: 'y', at: 0, a0: -2, a1: 2, b0: -2, b1: 2, slot: 'MI_Trim_02' },
};

function fallbackPrim(name: string): KitPiece | null {
 const f = FALLBACK[name];
 if (!f) return null;
 const pos = new Float32Array(12), nor = new Float32Array(12), uv = new Float32Array(8);
 const q = f.axis === 'x'
  ? [[f.at, f.a0, f.b1], [f.at, f.a0, f.b0], [f.at, f.a1, f.b0], [f.at, f.a1, f.b1]]
  : [[f.a0, f.at, f.b1], [f.a1, f.at, f.b1], [f.a1, f.at, f.b0], [f.a0, f.at, f.b0]];
 q.forEach((v, i) => { pos.set(v, i * 3); nor.set(f.axis === 'x' ? [1, 0, 0] : [0, 1, 0], i * 3); uv.set([i === 1 || i === 2 ? 1 : 0, i >= 2 ? 1 : 0], i * 2); });
 return { min: [], max: [], prims: [{ slot: f.slot, sheet: 'none', pos, nor, uv, idx: new Uint16Array([0, 1, 2, 0, 2, 3]) }] };
}

// ── Geometry baking ──────────────────────────────────────────────────────────
const _m = new THREE.Matrix4(), _n = new THREE.Matrix3(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();
const UP = new THREE.Vector3(0, 1, 0);

function surfAttr(count: number, surf: Surf) {
 _c.setHex(surf.tint);
 const a = new Float32Array(count * 4);
 for (let i = 0; i < count; i++) a.set([_c.r, _c.g, _c.b, surf.finish], i * 4);
 return new THREE.BufferAttribute(a, 4);
}

function finish(geo: THREE.BufferGeometry, surf: Surf) {
 const g = geo.index ? geo : geo;
 for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
 g.setAttribute('aSurf', surfAttr(g.attributes.position.count, surf));
 return g;
}

function kitGeometry(prim: KitPrim, matrix: THREE.Matrix4, surf: Surf) {
 const g = new THREE.BufferGeometry();
 g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(prim.pos), 3));
 g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(prim.nor), 3));
 g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(prim.uv), 2));
 g.setIndex(new THREE.BufferAttribute(new Uint16Array(prim.idx), 1));
 g.applyMatrix4(matrix);
 return finish(g, surf);
}

/** Draw groups in a bucket. Cables are thin and near black: they skip the lightmap. */
export type BakeKey = Sheet | 'decal' | 'cable';
/**
 * A box with chamfered edges whose normals blend across the chamfer, so every edge reads as a
 * softly rounded edge catching a line of light, for 44 triangles: 6 inset faces, 12 edge strips
 * and 8 corner triangles. Centred on the origin.
 */
export function chamferBox(w: number, h: number, d: number, bevel: number) {
 const L = [w, h, d];
 const b = Math.max(0, Math.min(bevel, .45 * Math.min(w, h, d)));
 const pos: number[] = [], nor: number[] = [], uv: number[] = [], idx: number[] = [];
 const vert = (p: number[], n: number[]) => {
  pos.push(p[0], p[1], p[2]); nor.push(n[0], n[1], n[2]);
  // Planar UVs in metres on the dominant axis (only the flat 'none' sheet samples them).
  const a = Math.abs(n[0]) >= Math.abs(n[1]) && Math.abs(n[0]) >= Math.abs(n[2]) ? 0 : Math.abs(n[1]) >= Math.abs(n[2]) ? 1 : 2;
  uv.push(p[(a + 1) % 3], p[(a + 2) % 3]);
  return pos.length / 3 - 1;
 };
 const outward = (i: number[]) => {
  // Wind every polygon so it faces away from the centre.
  const P = (k: number) => [pos[k * 3], pos[k * 3 + 1], pos[k * 3 + 2]];
  const [A, B, C] = i.slice(0, 3).map(P);
  const u = [B[0] - A[0], B[1] - A[1], B[2] - A[2]], v = [C[0] - A[0], C[1] - A[1], C[2] - A[2]];
  const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  const c = i.map(P).reduce((m, q) => [m[0] + q[0], m[1] + q[1], m[2] + q[2]], [0, 0, 0]);
  return n[0] * c[0] + n[1] * c[1] + n[2] * c[2] >= 0 ? i : [...i].reverse();
 };
 const quad = (q: number[]) => { const [a, b2, c, e] = outward(q); idx.push(a, b2, c, a, c, e); };
 const tri = (t: number[]) => { const [a, b2, c] = outward(t); idx.push(a, b2, c); };
 const axisN = (a: number, sgn: number) => { const n = [0, 0, 0]; n[a] = sgn; return n; };
 const half = (a: number) => L[a] / 2, inset = (a: number) => L[a] / 2 - b;
 // Faces.
 for (let a = 0; a < 3; a++) for (const sa of [-1, 1]) {
  const u = (a + 1) % 3, v = (a + 2) % 3, n = axisN(a, sa), q: number[] = [];
  for (const [su, sv] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { const p = [0, 0, 0]; p[a] = sa * half(a); p[u] = su * inset(u); p[v] = sv * inset(v); q.push(vert(p, n)); }
  quad(q);
 }
 if (b > 1e-5) {
  // Edge strips: the normal turns from one face's to the other's across the chamfer.
  for (let A = 0; A < 3; A++) for (let B = A + 1; B < 3; B++) for (const sA of [-1, 1]) for (const sB of [-1, 1]) {
   const C = 3 - A - B, q: number[] = [];
   for (const [face, sc] of [[A, -1], [A, 1], [B, 1], [B, -1]] as const) {
    const p = [0, 0, 0];
    p[C] = sc * inset(C);
    if (face === A) { p[A] = sA * half(A); p[B] = sB * inset(B); } else { p[B] = sB * half(B); p[A] = sA * inset(A); }
    q.push(vert(p, axisN(face, face === A ? sA : sB)));
   }
   quad(q);
  }
  // Corners.
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1]) {
   const S = [sx, sy, sz], t: number[] = [];
   for (let a = 0; a < 3; a++) { const p = S.map((sg, k) => sg * (k === a ? half(k) : inset(k))); t.push(vert(p, axisN(a, S[a]))); }
   tri(t);
  }
 }
 const g = new THREE.BufferGeometry();
 g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
 g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
 g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
 g.setIndex(idx);
 return g;
}

/** Default chamfer: a couple of centimetres, never more than a fifth of the thinnest side. */
export function defaultBevel(sx: number, sy: number, sz: number) {
 return Math.min(.02, .2 * Math.min(sx, sy, sz));
}

/** Pipes and fittings: sides round the bore (smooth normals). */
export const PIPE_SIDES = 20;

export type BakedBucket = Map<BakeKey, THREE.BufferGeometry[]>;
export type BakeOptions = {
 kit: BunkerKit | null;
 bucketOf: (c: number, r: number) => string;
 decalRect: (id: string) => [number, number, number, number] | null;
 /** Only these placement kinds (default all). */
 filter?: (p: Placement) => boolean;
};

/** Turn placements into per-bucket, per-sheet geometry lists (not merged). */
export function bakeBunker(placements: Placement[], opts: BakeOptions) {
 const out = new Map<string, BakedBucket>();
 const push = (key: string, sheet: BakeKey, g: THREE.BufferGeometry) => {
  let b = out.get(key);
  if (!b) { b = new Map(); out.set(key, b); }
  let list = b.get(sheet);
  if (!list) { list = []; b.set(sheet, list); }
  list.push(g);
 };
 const flip = new THREE.Matrix4().makeRotationX(Math.PI);
 for (const p of placements) {
  if (opts.filter && !opts.filter(p)) continue;
  const key = opts.bucketOf(p.c, p.r);
  if (p.kind === 'kit') {
   const piece = opts.kit?.get(p.piece) ?? (opts.kit ? null : fallbackPrim(p.piece));
   if (!piece) continue;
   _q.setFromAxisAngle(UP, p.yaw);
   _m.compose(_v.set(p.x, p.y, p.z), _q, _s.set(...(p.scale ?? [1, 1, 1])));
   if (p.flip) _m.multiply(flip);
   for (const prim of piece.prims) {
    const surf = p.slots[prim.slot];
    if (!surf) continue;
    push(key, surf.finish === FINISH.rubber ? 'cable' : opts.kit ? prim.sheet : 'none', kitGeometry(prim, _m, surf));
   }
  } else if (p.kind === 'box') {
   const g = chamferBox(p.sx, p.sy, p.sz, p.bevel ?? defaultBevel(p.sx, p.sy, p.sz));
   if (p.yaw) g.rotateY(p.yaw);
   g.translate(p.x, p.y, p.z);
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'cyl') {
   const a = new THREE.Vector3(...p.a), b = new THREE.Vector3(...p.b);
   const len = a.distanceTo(b);
   if (len < 1e-3) continue;
   const g = new THREE.CylinderGeometry(p.radius, p.radius, len, p.sides ?? PIPE_SIDES, 1, !p.capped);
   _q.setFromUnitVectors(UP, _v.subVectors(b, a).normalize());
   g.applyMatrix4(_m.compose(a.add(b).multiplyScalar(.5), _q, _s.set(1, 1, 1)));
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'ball') {
   const g = new THREE.SphereGeometry(p.radius, 10, 6);
   g.translate(p.x, p.y, p.z);
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'elbow') {
   // Quarter torus: local +X points from the centre to the arc start, +Y is the tangent there.
   const X = new THREE.Vector3(...p.x), Y = new THREE.Vector3(...p.y), Z = new THREE.Vector3().crossVectors(X, Y);
   const g = new THREE.TorusGeometry(p.bend, p.radius, PIPE_SIDES, 6, Math.PI / 2);
   g.applyMatrix4(new THREE.Matrix4().makeBasis(X, Y, Z).setPosition(...p.centre));
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'torus') {
   const g = new THREE.TorusGeometry(p.radius, p.tube, 8, 28);
   g.rotateY(Math.atan2(p.nx, p.nz));
   g.translate(p.x, p.y, p.z);
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'decal') {
   const rect = opts.decalRect(p.id);
   if (!rect) continue;
   const g = new THREE.PlaneGeometry(p.w, p.h);
   const uv = g.attributes.uv as THREE.BufferAttribute;
   for (let i = 0; i < uv.count; i++) uv.setXY(i, rect[0] + uv.getX(i) * (rect[2] - rect[0]), rect[1] + uv.getY(i) * (rect[3] - rect[1]));
   g.rotateY(Math.atan2(p.nx, p.nz));
   g.translate(p.x, p.y, p.z);
   push(key, 'decal', finish(g, { tint: 0xffffff, finish: 0 }));
  }
 }
 return out;
}

/** Merge a bucket's lists into one geometry per sheet (inputs are disposed). */
export function mergeBucket(list: THREE.BufferGeometry[]) {
 const merged = mergeGeometries(list, false);
 list.forEach(g => g.dispose());
 if (!merged) return null;
 merged.computeBoundingBox();
 merged.computeBoundingSphere();
 return merged;
}

/** Draw-call bucket for a cell: 16 m chunks, corridor cells kept apart from the cave. */
export function bunkerBucketOf(c: number, r: number) {
 return `${breathZone(c, r) !== '' ? 'b' : 'c'}:${c >> 2},${r >> 2}`;
}

/**
 * Fingerprint of everything the light bake depends on: the layout and the kit geometry.
 * A baked lightmap only applies to the bunker it was baked for.
 */
export function bunkerSignature(layout: BunkerLayout, kitVertices: number) {
 const round = (_k: string, v: unknown) => typeof v === 'number' ? Math.round(v * 1e4) / 1e4 : v;
 const text = JSON.stringify({ p: layout.placements, l: [...layout.labels], k: kitVertices }, round);
 let h1 = 0x811c9dc5, h2 = 0x01000193;
 for (let i = 0; i < text.length; i++) {
  const c = text.charCodeAt(i);
  h1 = Math.imul(h1 ^ c, 16777619);
  h2 = Math.imul(h2 ^ c, 2246822519) + (h2 >>> 13);
 }
 return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}
