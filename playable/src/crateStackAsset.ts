/**
 * Stacked supply crates: the "crates" shootout cover.
 *
 * Four Poly Haven crates (CC0, decimated in Blender, see public/assets/cover-props/README.md)
 * are cross stacked the way a quartermaster piles them: two long crates on the floor, the next
 * layer turned a quarter turn so it locks the one below, then lighter boxes on top. The pile
 * fills the sim's cover square and rises to about 1.85 m, so a standing diver is hidden behind it
 * exactly as the 2D sight test says.
 *
 * A wooden stub of the same layout shows at once; CaveWorld streams the glTF in by proximity
 * (survivalFx.coverJobs) and swaps it in piece for piece.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { dressCrateStack, sceneAt, type CrateScene } from './coverScenes';
import { teaBench, TEA_BENCH } from './guardScenes';

export const CRATE_STACK_URL = '/assets/cover-props/cover_crates.gltf';

export type CratePart = 'militaryCrate' | 'ammoCrate' | 'longCrate' | 'smallCrate';

/** Authored size of each crate (m): x = width, y = height, z = depth, bottom at y = 0. */
export const CRATE_SIZE: Record<CratePart, readonly [number, number, number]> = {
 militaryCrate: [1.241, .465, .519],
 ammoCrate: [.805, .301, .467],
 longCrate: [.529, .464, 1.165],
 smallCrate: [.821, .349, .409],
};

/** Uniform scale on every crate: the pile fills a 1.4 m cover square. */
export const CRATE_SCALE = 1.1;

export type CrateSlot = { part: CratePart; x: number; z: number; /** Resting layer: bottom height (m, before scale). */ y: number; yaw: number };

/** Layouts for a 1.4 × 1.4 m square, in authored units (scaled by CRATE_SCALE). */
const H = CRATE_SIZE;
const RECIPES: CrateSlot[][] = [
 // Quartermaster stack: two long crates, a crossed layer, then a stepped top.
 [
  { part: 'militaryCrate', x: 0, z: -.27, y: 0, yaw: 0 },
  { part: 'militaryCrate', x: .02, z: .27, y: 0, yaw: 0 },
  { part: 'militaryCrate', x: -.27, z: 0, y: H.militaryCrate[1], yaw: Math.PI / 2 },
  { part: 'militaryCrate', x: .27, z: .01, y: H.militaryCrate[1], yaw: Math.PI / 2 },
  { part: 'longCrate', x: -.27, z: -.02, y: H.militaryCrate[1] * 2, yaw: .03 },
  { part: 'ammoCrate', x: .3, z: .12, y: H.militaryCrate[1] * 2, yaw: Math.PI / 2 },
  { part: 'smallCrate', x: -.26, z: -.1, y: H.militaryCrate[1] * 2 + H.longCrate[1], yaw: Math.PI / 2 + .12 },
  { part: 'ammoCrate', x: .3, z: .1, y: H.militaryCrate[1] * 2 + H.ammoCrate[1], yaw: Math.PI / 2 - .08 },
 ],
 // Long crates on the floor, military crates across, ammo boxes piled on one side.
 [
  { part: 'longCrate', x: -.28, z: 0, y: 0, yaw: 0 },
  { part: 'longCrate', x: .28, z: .02, y: 0, yaw: -.02 },
  { part: 'militaryCrate', x: 0, z: -.27, y: H.longCrate[1], yaw: .02 },
  { part: 'militaryCrate', x: 0, z: .27, y: H.longCrate[1], yaw: -.03 },
  { part: 'militaryCrate', x: -.04, z: -.27, y: H.longCrate[1] + H.militaryCrate[1], yaw: -.04 },
  { part: 'ammoCrate', x: -.15, z: .28, y: H.longCrate[1] + H.militaryCrate[1], yaw: .05 },
  { part: 'ammoCrate', x: -.12, z: .28, y: H.longCrate[1] + H.militaryCrate[1] + H.ammoCrate[1], yaw: -.1 },
  { part: 'smallCrate', x: .1, z: -.25, y: H.longCrate[1] + H.militaryCrate[1] * 2, yaw: .2 },
 ],
 // Two crossed layers, a long crate laid across the top, a small box pushed to the back.
 [
  { part: 'militaryCrate', x: -.27, z: 0, y: 0, yaw: Math.PI / 2 },
  { part: 'militaryCrate', x: .27, z: 0, y: 0, yaw: Math.PI / 2 + .02 },
  { part: 'militaryCrate', x: 0, z: -.27, y: H.militaryCrate[1], yaw: -.02 },
  { part: 'militaryCrate', x: .01, z: .27, y: H.militaryCrate[1], yaw: .03 },
  { part: 'longCrate', x: 0, z: -.28, y: H.militaryCrate[1] * 2, yaw: Math.PI / 2 },
  { part: 'smallCrate', x: .2, z: .3, y: H.militaryCrate[1] * 2, yaw: -.06 },
  { part: 'ammoCrate', x: -.05, z: -.28, y: H.militaryCrate[1] * 2 + H.longCrate[1], yaw: .14 },
 ],
];

/** Deterministic recipe for a cover site, turned a quarter turn at random so no two piles match. */
export function crateStackLayout(x: number, z: number): { slots: CrateSlot[]; yaw: number } {
 const h = Math.abs(Math.round(x * 7.31 + z * 3.17));
 return { slots: RECIPES[h % RECIPES.length], yaw: ((h >> 2) % 4) * Math.PI / 2 };
}

/** Top of the pile (m, scaled). */
export function crateStackHeight(slots: CrateSlot[]) {
 return Math.max(...slots.map(s => s.y + CRATE_SIZE[s.part][1])) * CRATE_SCALE;
}

/** Footprint half extents of a layout after its yaw (m, scaled), for the collision square. */
export function crateStackExtent(slots: CrateSlot[], yaw: number) {
 let hx = 0, hz = 0;
 for (const s of slots) {
  const [w, , d] = CRATE_SIZE[s.part];
  const a = s.yaw + yaw, c = Math.abs(Math.cos(a)), n = Math.abs(Math.sin(a));
  const px = s.x * Math.cos(yaw) + s.z * Math.sin(yaw), pz = -s.x * Math.sin(yaw) + s.z * Math.cos(yaw);
  hx = Math.max(hx, Math.abs(px) + (w * c + d * n) / 2);
  hz = Math.max(hz, Math.abs(pz) + (w * n + d * c) / 2);
 }
 return { hx: hx * CRATE_SCALE, hz: hz * CRATE_SCALE };
}

function place(o: THREE.Object3D, s: CrateSlot) {
 o.position.set(s.x * CRATE_SCALE, s.y * CRATE_SCALE, s.z * CRATE_SCALE);
 o.rotation.y = s.yaw;
 o.scale.setScalar(CRATE_SCALE);
}

let stubGeo: Record<CratePart, THREE.BoxGeometry> | null = null;
let stubMat: THREE.MeshStandardMaterial | null = null;

/** Wooden boxes in the final layout, shown until the glTF streams in. */
export function createCrateStack(x: number, z: number): THREE.Group {
 const { slots, yaw } = crateStackLayout(x, z);
 const root = new THREE.Group();
 root.name = 'crateStack';
 root.rotation.y = yaw;
 root.userData.slots = slots;
 root.userData.site = { x, z };
 stubGeo ??= Object.fromEntries(Object.entries(CRATE_SIZE).map(([k, [w, h, d]]) => {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0); return [k, g];
 })) as Record<CratePart, THREE.BoxGeometry>;
 stubMat ??= new THREE.MeshStandardMaterial({ color: 0x6b5a3e, roughness: .85 });
 for (const s of slots) {
  const m = new THREE.Mesh(stubGeo[s.part], stubMat);
  m.name = 'crateStub';
  place(m, s);
  root.add(m);
 }
 return root;
}

let parts: Promise<Record<CratePart, THREE.Mesh>> | null = null;

export function loadCrateParts() {
 parts ??= new GLTFLoader().loadAsync(CRATE_STACK_URL).then(gltf => {
  const out = {} as Record<CratePart, THREE.Mesh>;
  for (const k of Object.keys(CRATE_SIZE) as CratePart[]) {
   const m = gltf.scene.getObjectByName(k) as THREE.Mesh | undefined;
   if (!m) throw new Error(`cover_crates.gltf: no ${k}`);
   const mat = m.material as THREE.MeshStandardMaterial;
   // Same murk lift as the dive chests, so the pile reads at the edge of the lamp light.
   mat.envMapIntensity = .3;
   mat.emissive = new THREE.Color(0x2a2c26);
   mat.emissiveIntensity = .3;
   m.geometry.computeBoundingSphere();
   out[k] = m;
  }
  return out;
 });
 return parts;
}

/** Swap the stub boxes for the authored crates. */
export async function upgradeCrateStack(root: THREE.Group): Promise<boolean> {
 try {
  const p = await loadCrateParts();
  const slots = root.userData.slots as CrateSlot[];
  for (const o of root.children.filter(c => c.name === 'crateStub')) root.remove(o);
  for (const s of slots) {
   const m = new THREE.Mesh(p[s.part].geometry, p[s.part].material);
   m.name = s.part;
   m.castShadow = m.receiveShadow = true;
   place(m, s);
   root.add(m);
  }
  const site = root.userData.site as { x: number; z: number };
  const scene = (sceneAt(site.x, site.z) ?? 'issue') as CrateScene;
  const S = CRATE_SCALE;
  const tops = slots.map(s => {
   const [w, h, d] = CRATE_SIZE[s.part];
   return { part: s.part, x: s.x * S, y: s.y * S, z: s.z * S, yaw: s.yaw, top: (s.y + h) * S, hw: w * S / 2 * .8, hd: d * S / 2 * .8 };
  });
  // Only lids nothing rests on are free to dress.
  const free = tops.filter(t => !tops.some(o => o !== t && Math.abs(o.y - t.top) < .02 && Math.hypot(o.x - t.x, o.z - t.z) < .35));
  if (scene === 'tea') {
   // The quartermaster's bench: a long crate laid along the stack's east face.
   const b = teaBench(), yaw = root.rotation.y, dx = b.x - site.x, dz = b.z - site.z;
   const bench = new THREE.Mesh(p.longCrate.geometry, p.longCrate.material);
   bench.name = 'teaBench';
   bench.castShadow = bench.receiveShadow = true;
   bench.position.set(dx * Math.cos(yaw) - dz * Math.sin(yaw), 0, dx * Math.sin(yaw) + dz * Math.cos(yaw));
   bench.rotation.y = -yaw;
   bench.scale.set(1, TEA_BENCH.height / CRATE_SIZE.longCrate[1], 1);
   root.add(bench);
  }
  await dressCrateStack(root, scene, free.length ? free : tops, crateStackExtent(slots, 0), Math.abs(site.x * 3 + site.z));
  return true;
 } catch {
  return false;
 }
}
