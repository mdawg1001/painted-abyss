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
   const g = new THREE.BoxGeometry(p.sx, p.sy, p.sz);
   if (p.yaw) g.rotateY(p.yaw);
   g.translate(p.x, p.y, p.z);
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'cyl') {
   const a = new THREE.Vector3(...p.a), b = new THREE.Vector3(...p.b);
   const len = a.distanceTo(b);
   if (len < 1e-3) continue;
   const g = new THREE.CylinderGeometry(p.radius, p.radius, len, 12, 1, true);
   _q.setFromUnitVectors(UP, _v.subVectors(b, a).normalize());
   g.applyMatrix4(_m.compose(a.add(b).multiplyScalar(.5), _q, _s.set(1, 1, 1)));
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'ball') {
   const g = new THREE.SphereGeometry(p.radius, 10, 6);
   g.translate(p.x, p.y, p.z);
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
