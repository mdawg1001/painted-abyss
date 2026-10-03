/**
 * Step 1 of the bunker light bake: write the exact bunker the game builds, plus its lights and
 * the solid props that shadow it, for Blender (bake.py).
 *
 *   node --import tsx scripts/bunker-bake/export.ts <out-dir>
 *
 * Output: <out-dir>/bake-in.bin
 *   u32 headerBytes | header JSON | per mesh: f32 pos[3n] f32 nor[3n] f32 uv[2n] f32 surf[4n] u32 idx[m] u8 seen[m/3] (pad 4)
 * The header lists meshes (bucket, key, counts), lights (three.js units) and box occluders.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import * as THREE from 'three';
import { buildBunkerLayout, ZONE_STYLE, WHITEWASH, BUNKER } from '../../src/bunkerLayout';
import { bunkerKeepouts } from '../../src/bunkerKeepouts';
import { parseBunkerKit } from '../../src/bunkerKit';
import { bakeBunker, mergeBucket, bunkerBucketOf, bunkerSignature } from '../../src/bunkerGeometry';
import { stencilRects } from '../../src/bunkerDecals';
import { hangingLightMounts, HANGING_LIGHT } from '../../src/hangingLightAsset';
import { zoneAt, zoneLight } from '../../src/zoneLighting';
import { SURVIVAL_COVER } from '../../src/survivalConfig';
import { radiatorMounts } from '../../src/radiatorAsset';
import { createDiveChests, FLOOR_Y, RELIC_PLINTH, cells, CELL } from '../../src/simulation';

const root = resolve(import.meta.dirname, '../..');
const out = resolve(process.argv[2] ?? 'bake-work');
mkdirSync(out, { recursive: true });

const buf = readFileSync(resolve(root, 'public/assets/soviet-bunker-kit/kit.bin'));
const kit = parseBunkerKit(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
const kitVertices = [...kit.values()].reduce((n, p) => n + p.prims.reduce((m, q) => m + q.pos.length / 3, 0), 0);
const layout = buildBunkerLayout({ keepouts: bunkerKeepouts() });
const signature = bunkerSignature(layout, kitVertices);
const rects = stencilRects(layout.labels);
const baked = bakeBunker(layout.placements, { kit, bucketOf: bunkerBucketOf, decalRect: id => rects.get(id) ?? null });

/**
 * Can the diver ever see this face? Step off it along its normal: if that lands inside a solid
 * cell, or above the slab / below the floor, the face looks into rock and gets no lightmap space.
 */
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _n = new THREE.Vector3();
function faceSeen(P: ArrayLike<number>, i: number, j: number, k: number) {
 _a.fromArray(P as number[], i * 3); _b.fromArray(P as number[], j * 3); _c.fromArray(P as number[], k * 3);
 _n.subVectors(_b, _a).cross(_c.clone().sub(_a));
 if (_n.lengthSq() < 1e-12) return false;
 _n.normalize();
 const px = (_a.x + _b.x + _c.x) / 3 + _n.x * .06, py = (_a.y + _b.y + _c.y) / 3 + _n.y * .06, pz = (_a.z + _b.z + _c.z) / 3 + _n.z * .06;
 if (py < FLOOR_Y - .005 || py > FLOOR_Y + BUNKER.height + .005) return false;
 return cells.has(`${Math.round(px / CELL) + 11},${Math.round(-pz / CELL)}`);
}

type MeshRec = { bucket: string; key: string; vertices: number; indices: number };
const meshes: MeshRec[] = [];
const blobs: Buffer[] = [];
const f32 = (a: ArrayLike<number>) => Buffer.from(new Float32Array(a as ArrayLike<number>).buffer);
for (const [bucket, groups] of [...baked].sort(([a], [b]) => a.localeCompare(b))) {
 for (const [key, list] of [...groups].sort(([a], [b]) => a.localeCompare(b))) {
  const g = mergeBucket(list);
  if (!g) continue;
  const n = g.attributes.position.count;
  const idx = g.index ? Array.from(g.index.array) : Array.from({ length: n }, (_, i) => i);
  meshes.push({ bucket, key, vertices: n, indices: idx.length });
  const seen = Buffer.alloc(Math.ceil(idx.length / 3 / 4) * 4);
  const P = g.attributes.position.array;
  for (let t = 0; t < idx.length / 3; t++) seen[t] = faceSeen(P, idx[t * 3], idx[t * 3 + 1], idx[t * 3 + 2]) ? 1 : 0;
  blobs.push(f32(g.attributes.position.array), f32(g.attributes.normal.array), f32(g.attributes.uv.array), f32(g.attributes.aSurf.array), Buffer.from(new Uint32Array(idx).buffer), seen);
 }
}

// Lights, in three.js units (candela, metres). Sconces bake at their steady output.
/** `mask`: a fixed point lamp whose shadows the game applies from the baked mask (CaveWorld marks the same lamps `bakedShadow`). */
type Light = { type: 'point' | 'spot'; pos: number[]; color: string; intensity: number; distance: number; decay: number; angle?: number; penumbra?: number; mask?: boolean };
const dump = JSON.parse(readFileSync(resolve(import.meta.dirname, 'lights.json'), 'utf8')) as { type: string; name: string; path: string; pos: number[]; color: string; intensity: number; distance: number; decay: number; angle?: number }[];
const lights: Light[] = [];
for (const l of dump) {
 // Moving or player-held lights stay real time only: held torch/flash, loot glows, the swinging
 // tube spots (baked below from their mounts), and the cage observation spots.
 if (l.path.includes('PerspectiveCamera') || l.name === 'pickupGlow' || l.name === 'hangingSpot' || l.path.includes('skinnerCageDress')) continue;
 if (l.type !== 'PointLight' && l.type !== 'SpotLight') continue;
 const sconce = l.path.includes('wallSconces');
 // Sconces bake at their wing's steady output (a flickering one may be caught mid-dip).
 const intensity = sconce ? zoneLight(zoneAt(l.pos[0], l.pos[2])).intensity : l.intensity;
 if (!(intensity > 0) || (l.pos[0] === 0 && l.pos[1] === 0 && l.pos[2] === 0)) continue;
 lights.push({ type: l.type === 'SpotLight' ? 'spot' : 'point', pos: l.pos, color: l.color, intensity, distance: l.distance, decay: l.decay, angle: l.angle, penumbra: l.type === 'SpotLight' ? .8 : undefined, mask: l.type === 'PointLight' });
}
const lampY = HANGING_LIGHT.ceilingY - HANGING_LIGHT.tubeDrop;
for (const m of hangingLightMounts()) {
 lights.push({ type: 'spot', pos: [m.x, lampY, m.z], color: '#' + new THREE.Color(HANGING_LIGHT.color).getHexString(), intensity: HANGING_LIGHT.intensity, distance: HANGING_LIGHT.distance, decay: HANGING_LIGHT.decay, angle: HANGING_LIGHT.angle, penumbra: HANGING_LIGHT.penumbra });
}

// Solid props that sit in the light: cover, chests, radiators, the relic plinth.
const coverHeight: Record<string, number> = { crates: 1.45, wall: 1.3, cardboard: 1, desk: .78 };
const boxes: { c: number[]; h: number[] }[] = [];
for (const c of SURVIVAL_COVER) boxes.push({ c: [c.x, FLOOR_Y + coverHeight[c.kind] / 2, c.z], h: [c.hx, coverHeight[c.kind] / 2, c.hz] });
for (const c of createDiveChests()) boxes.push({ c: [c.position.x, FLOOR_Y + .35, c.position.z], h: [.45, .35, .35] });
for (const m of radiatorMounts()) {
 const nx = Math.sin(m.yaw), nz = Math.cos(m.yaw);
 boxes.push({ c: [m.x + nx * .33, FLOOR_Y + .7, m.z + nz * .33], h: [Math.abs(nz) * .55 + Math.abs(nx) * .2, .68, Math.abs(nx) * .55 + Math.abs(nz) * .2] });
}
boxes.push({ c: [RELIC_PLINTH.x, FLOOR_Y + RELIC_PLINTH.height / 2, RELIC_PLINTH.z], h: [1.25, RELIC_PLINTH.height / 2, 1.25] });

const header = {
 version: 1, signature, floorY: FLOOR_Y, dado: BUNKER.dado, whitewash: '#' + new THREE.Color(WHITEWASH).getHexString(),
 zones: Object.fromEntries(Object.entries(ZONE_STYLE).map(([k, v]) => [k, v.lower])),
 meshes, lights, boxes,
};
let hj = Buffer.from(JSON.stringify(header));
hj = Buffer.concat([hj, Buffer.alloc((4 - hj.length % 4) % 4, 32)]);
const len = Buffer.alloc(4); len.writeUInt32LE(hj.length);
writeFileSync(resolve(out, 'bake-in.bin'), Buffer.concat([len, hj, ...blobs]));
const tris = meshes.reduce((n, m) => n + m.indices / 3, 0);
console.log(`bake-in.bin: ${meshes.length} meshes, ${tris} triangles, ${lights.length} lights, ${boxes.length} occluders, signature ${signature}`);
