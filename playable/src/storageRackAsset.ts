/**
 * Stocked steel storage racks: the "wall" shootout cover.
 *
 * A civil-defence shelter keeps its stores on olive steel racking: zinc ammunition crates,
 * 20 litre fuel cans, green field medical boxes, wooden supply crates. Two racks stand end to end
 * to fill the sim's 2.4 × 0.7 m cover box, 1.9 m tall, packed shelf by shelf so the row reads as
 * a wall of stores and hides a standing diver the way the 2D sight test says it does.
 *
 * Models: Poly Haven worn_metal_rack, metal_jerrycan_green, medical_box (CC0, decimated in
 * Blender) plus the crate set from crateStackAsset. See public/assets/cover-props/README.md.
 * A grey block of the rack's size shows until CaveWorld streams the glTF in (survivalFx.coverJobs).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CRATE_SIZE, loadCrateParts, type CratePart } from './crateStackAsset';
import { DRESS_SIZE, loadDressParts, dressRack, type DressPart, type RackScene } from './coverScenes';

export const STORAGE_RACK_URL = '/assets/cover-props/cover_rack.gltf';

type RackPart = 'rack' | 'jerrycan' | 'medicalBox';
type Part = RackPart | CratePart | DressPart;

/** Authored sizes (m): width x, height y, depth z, bottom at y = 0. */
const SIZE: Record<Part, readonly [number, number, number]> = {
 rack: [.915, 1.9, .6],
 jerrycan: [.36, .5, .171],
 medicalBox: [.525, .098, .35],
 ...CRATE_SIZE,
 ...DRESS_SIZE,
};

export const STORAGE_RACK = {
 /** One rack after scaling: two fill the 2.4 m cover box. */
 width: 1.2,
 depth: .7,
 height: 1.9,
 /** Shelf deck heights of worn_metal_rack (m). */
 shelves: [.06, .43, .92, 1.41, 1.9],
} as const;

type Item = { part: Part; x: number; y: number; z: number; yaw: number; s?: number };

/** Stock for one shelf level, x across the rack (±0.6), z front (+) to back. */
const LEVELS: ((y: number) => Item[])[] = [
 y => [{ part: 'ammoCrate', x: -.17, y, z: .02, yaw: 0 }, { part: 'medicalBox', x: .4, y, z: .07, yaw: Math.PI / 2 }, { part: 'medicalBox', x: .4, y: y + .098, z: .07, yaw: Math.PI / 2 + .06 }, { part: 'medicalBox', x: .4, y: y + .196, z: .08, yaw: Math.PI / 2 - .05 }],
 y => [{ part: 'militaryCrate', x: 0, y, z: .04, yaw: 0, s: .93 }],
 y => [-.38, 0, .38].flatMap((x, i) => [{ part: 'jerrycan' as Part, x: x + (i - 1) * .02, y, z: .13, yaw: (i - 1) * .05, s: .95 }, { part: 'jerrycan' as Part, x, y, z: -.13, yaw: Math.PI + i * .04, s: .95 }]),
 y => [{ part: 'longCrate', x: 0, y, z: 0, yaw: Math.PI / 2 + .02, s: .98 }],
 y => [{ part: 'smallCrate', x: -.22, y, z: .05, yaw: .04, s: .9 }, { part: 'ammoCrate', x: .36, y, z: 0, yaw: Math.PI / 2 - .03, s: .85 }],
 y => [{ part: 'ammoCrate', x: -.18, y, z: .02, yaw: .02 }, { part: 'ammoCrate', x: .35, y, z: 0, yaw: Math.PI / 2, s: .85 }],
 y => [{ part: 'medicalBox', x: -.3, y, z: .08, yaw: 0 }, { part: 'medicalBox', x: -.3, y: y + .098, z: .06, yaw: .08 }, { part: 'medicalBox', x: -.29, y: y + .196, z: .09, yaw: -.05 }, { part: 'medicalBox', x: .29, y, z: .08, yaw: 0 }, { part: 'medicalBox', x: .3, y: y + .098, z: .1, yaw: .1 }],
 // 7: a row of oil tins, two deep.
 y => [-.42, -.21, 0, .21, .42].flatMap((x, i) => [{ part: 'oilTin' as Part, x, y, z: .14, yaw: i * .3 }, { part: 'oilTin' as Part, x: x + (i < 4 ? .06 : -.06), y, z: -.14, yaw: -i * .2 }]),
 // 8: the workshop bench stock: tool box and the tester.
 y => [{ part: 'toolbox', x: -.3, y, z: .05, yaw: .05 }, { part: 'multimeter', x: .12, y, z: .1, yaw: -.25 }, { part: 'oilTin', x: .42, y, z: -.1, yaw: .4 }],
];
/** Stock per deck (bottom deck, three shelves, top), as indices into LEVELS; -1 leaves it bare. */
const STOCK: Record<RackScene, number[][]> = {
 stores: [[0, 1, 2, 3, 6], [5, 2, 4, 1, -1], [0, 3, 1, 2, 5], [6, 1, 3, 2, -1]],
 masks: [[0, 6, 1, 6, 6], [6, 1, 6, 3, -1]],
 fuel: [[7, 2, 2, 2, 7], [5, 2, 2, 1, -1]],
 workshop: [[7, 8, 4, 1, 8], [5, 3, 8, 2, -1]],
};

/** Rack layout for one cover box: two stocked racks end to end along local X. */
export function storageRackLayout(seed: number, scene: RackScene = 'stores'): Item[] {
 const h = Math.abs(Math.round(seed));
 const out: Item[] = [];
 for (const side of [-1, 1]) {
  const cx = side * STORAGE_RACK.width / 2;
  out.push({ part: 'rack', x: cx, y: 0, z: 0, yaw: 0 });
  const set = STOCK[scene], stock = set[(h + (side > 0 ? 1 : 0)) % set.length];
  stock.forEach((lv, deck) => {
   if (lv < 0) return;
   // A few items stand on the far side of the rack: same stock, turned.
   const flip = (h + deck + side) % 3 === 0 ? -1 : 1;
   for (const it of LEVELS[lv](STORAGE_RACK.shelves[deck])) out.push({ ...it, x: cx + it.x * flip, z: it.z * flip, yaw: it.yaw + (flip < 0 ? Math.PI : 0) });
  });
 }
 return out;
}

function scaleFor(it: Item): THREE.Vector3 {
 if (it.part === 'rack') return new THREE.Vector3(STORAGE_RACK.width / SIZE.rack[0], 1, STORAGE_RACK.depth / SIZE.rack[2]);
 return new THREE.Vector3().setScalar(it.s ?? 1);
}

function place(o: THREE.Object3D, it: Item) {
 o.position.set(it.x, it.y, it.z);
 o.rotation.y = it.yaw;
 o.scale.copy(scaleFor(it));
}

let stubGeo: THREE.BoxGeometry | null = null, stubMat: THREE.MeshStandardMaterial | null = null;

/** Two grey blocks the size of the racks, until the stocked racks stream in. */
export function createStorageRack(hx: number, hz: number, seed: number, scene: RackScene = 'stores'): THREE.Group {
 const root = new THREE.Group();
 root.name = 'storageRack';
 root.rotation.y = hz > hx ? Math.PI / 2 : 0;
 // Which face is the aisle side is a coin toss per site.
 if (Math.abs(Math.round(seed)) % 2) root.rotation.y += Math.PI;
 root.userData.items = storageRackLayout(seed, scene);
 root.userData.scene = scene;
 root.userData.seed = seed;
 stubGeo ??= (() => { const g = new THREE.BoxGeometry(STORAGE_RACK.width - .04, STORAGE_RACK.height, STORAGE_RACK.depth - .04); g.translate(0, STORAGE_RACK.height / 2, 0); return g; })();
 stubMat ??= new THREE.MeshStandardMaterial({ color: 0x4d5546, roughness: .8, metalness: .2 });
 for (const side of [-1, 1]) {
  const m = new THREE.Mesh(stubGeo, stubMat);
  m.name = 'rackStub';
  m.position.x = side * STORAGE_RACK.width / 2;
  root.add(m);
 }
 return root;
}

let rackParts: Promise<Record<RackPart, THREE.Mesh>> | null = null;
function loadRackParts() {
 rackParts ??= new GLTFLoader().loadAsync(STORAGE_RACK_URL).then(gltf => {
  const out = {} as Record<RackPart, THREE.Mesh>;
  for (const k of ['rack', 'jerrycan', 'medicalBox'] as RackPart[]) {
   const m = gltf.scene.getObjectByName(k) as THREE.Mesh | undefined;
   if (!m) throw new Error(`cover_rack.gltf: no ${k}`);
   const mat = m.material as THREE.MeshStandardMaterial;
   mat.envMapIntensity = .35;
   mat.emissive = new THREE.Color(0x262a24);
   mat.emissiveIntensity = .3;
   out[k] = m;
  }
  return out;
 });
 return rackParts;
}

/** Swap the stub blocks for the stocked racks. */
export async function upgradeStorageRack(root: THREE.Group): Promise<boolean> {
 try {
  const [rack, crates, dress] = await Promise.all([loadRackParts(), loadCrateParts(), loadDressParts()]);
  const meshes = { ...crates, ...rack } as Record<string, THREE.Mesh>;
  for (const o of root.children.filter(c => c.name === 'rackStub')) root.remove(o);
  for (const it of root.userData.items as Item[]) {
   let m: THREE.Object3D;
   if (it.part in dress) m = dress[it.part as DressPart].clone(true);
   else { const src = meshes[it.part]; const mesh = new THREE.Mesh(src.geometry, src.material); mesh.castShadow = mesh.receiveShadow = true; m = mesh; }
   m.name = it.part;
   place(m, it);
   root.add(m);
  }
  await dressRack(root, root.userData.scene, STORAGE_RACK.width, root.userData.seed);
  return true;
 } catch {
  return false;
 }
}

/** Every stocked item's footprint stays inside its rack (tests). */
export function storageRackFootprint(seed: number, scene: RackScene = 'stores') {
 return storageRackLayout(seed, scene).map(it => {
  const [w, h, d] = SIZE[it.part], s = scaleFor(it);
  const c = Math.abs(Math.cos(it.yaw)), n = Math.abs(Math.sin(it.yaw));
  return { part: it.part, y: it.y, hx: (w * s.x * c + d * s.z * n) / 2 + Math.abs(it.x), hz: (w * s.x * n + d * s.z * c) / 2 + Math.abs(it.z), top: it.y + h * s.y };
 });
}
