/**
 * Sparse bunker service galleries — grated decks + ladders + wall brackets.
 * Authored GLBs under `/assets/industrial-catwalk/` (straight / cross / T / ladder / rail / bracket).
 * Pattern mirrors radiatorAsset: mounts → procedural stubs → PropStreaming upgrade.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
 CATWALK_DECK_Y,
 CATWALK_DECK_RISE,
 CATWALK_LADDER,
 CATWALK_LADDERS,
 CATWALK_MODULE_LEN,
 CATWALK_MODULE_W,
 catwalkMounts,
 type CatwalkMount,
 type CatwalkMountKind,
} from './catwalkLayout';
import { FLOOR_Y } from './simulation';
import { PALETTE } from './artPalette';

export {
 CATWALK_DECK_Y,
 CATWALK_DECK_RISE,
 CATWALK_LADDER,
 CATWALK_LADDERS,
 catwalkMounts,
} from './catwalkLayout';
export type { CatwalkMount, CatwalkMountKind, CatwalkLadder } from './catwalkLayout';

const BASE = '/assets/industrial-catwalk';
export const CATWALK_URLS: Record<CatwalkMountKind, string> = {
 straight: `${BASE}/catwalk_straight.glb`,
 cross: `${BASE}/catwalk_cross.glb`,
 t: `${BASE}/catwalk_t.glb`,
 ladder: `${BASE}/catwalk_ladder.glb`,
 rail_broken: `${BASE}/catwalk_rail_broken.glb`,
 bracket: `${BASE}/catwalk_bracket.glb`,
};

export type WestCatwalks = {
 group: THREE.Group;
 ready: boolean;
 mounts: CatwalkMount[];
};

/** Bunker enamel/steel stub materials (matches kit ENAMEL_DARK / tray grey feel). */
const steelMat = () => new THREE.MeshStandardMaterial({
 color: PALETTE.steel, roughness: .78, metalness: .48,
 emissive: 0x101210, emissiveIntensity: .08,
});
const concreteMat = () => new THREE.MeshStandardMaterial({
 color: 0x5c5850, roughness: .92, metalness: .05,
});

/** Procedural stand-in until the matching glTF streams in. */
export function buildCatwalkStub(mount: CatwalkMount): THREE.Group {
 const root = new THREE.Group();
 root.name = 'catwalkStub';
 root.userData.mount = mount;
 const mat = steelMat();
 if (mount.kind === 'ladder') {
  const h = CATWALK_DECK_RISE + .15;
  const left = new THREE.Mesh(new THREE.BoxGeometry(.07, h, .07), mat);
  const right = left.clone();
  left.position.set(-.29, h * .5, 0);
  right.position.set(.29, h * .5, 0);
  root.add(left, right);
  for (let i = 0; i < 10; i++) {
   const rung = new THREE.Mesh(new THREE.BoxGeometry(.58, .045, .05), mat);
   rung.position.set(0, .2 + i * (h - .3) / 9, 0);
   root.add(rung);
  }
  root.position.set(mount.x, FLOOR_Y, mount.z);
  root.rotation.y = mount.yaw;
  return root;
 }
 if (mount.kind === 'rail_broken') {
  const stump = new THREE.Mesh(new THREE.BoxGeometry(.06, .5, .06), mat);
  stump.position.y = .25;
  const dang = new THREE.Mesh(new THREE.BoxGeometry(.05, .05, 1.05), mat);
  dang.position.set(0, .42, .38);
  dang.rotation.x = .55;
  root.add(stump, dang);
  root.position.set(mount.x, CATWALK_DECK_Y, mount.z);
  root.rotation.y = mount.yaw;
  return root;
 }
 if (mount.kind === 'bracket') {
  const wall = new THREE.Mesh(new THREE.BoxGeometry(.2, .85, .05), concreteMat());
  wall.position.set(0, .15, -.06);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(.16, .07, .65), mat);
  seat.position.set(0, .02, .32);
  const brace = new THREE.Mesh(new THREE.BoxGeometry(.07, .5, .07), mat);
  brace.position.set(0, -.3, .18);
  brace.rotation.x = .55;
  root.add(wall, seat, brace);
  root.position.set(mount.x, CATWALK_DECK_Y, mount.z);
  root.rotation.y = mount.yaw;
  return root;
 }
 const w = CATWALK_MODULE_W;
 const len = CATWALK_MODULE_LEN;
 const deck = new THREE.Mesh(new THREE.BoxGeometry(w, .09, len), mat);
 deck.position.y = .045;
 const railL = new THREE.Mesh(new THREE.BoxGeometry(.05, 1.05, len * .95), mat);
 railL.position.set(-(w * .5 - .03), .55, 0);
 const railR = railL.clone();
 railR.position.x = w * .5 - .03;
 // Kick plates
 const kickL = new THREE.Mesh(new THREE.BoxGeometry(.04, .18, len * .94), mat);
 kickL.position.set(-(w * .5 - .03), .12, 0);
 const kickR = kickL.clone();
 kickR.position.x = w * .5 - .03;
 root.add(deck, railL, railR, kickL, kickR);
 if (mount.kind === 't' || mount.kind === 'cross') {
  const spur = new THREE.Mesh(new THREE.BoxGeometry(len, .09, w), mat);
  spur.position.set(mount.kind === 't' ? .85 : 0, .045, 0);
  root.add(spur);
 }
 // Hanger stubs under deck
 for (const z of [-.6, .6]) {
  for (const side of [-1, 1]) {
   const post = new THREE.Mesh(new THREE.BoxGeometry(.08, 1.0, .08), mat);
   post.position.set(side * (w * .5 - .1), -.5, z);
   root.add(post);
  }
 }
 root.position.set(mount.x, CATWALK_DECK_Y, mount.z);
 root.rotation.y = mount.yaw;
 return root;
}

function prepareModel(model: THREE.Object3D, envMap?: THREE.Texture | null) {
 model.traverse(o => {
  if (!(o instanceof THREE.Mesh)) return;
  o.castShadow = true;
  o.receiveShadow = true;
  for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
   if (!(m instanceof THREE.MeshStandardMaterial)) continue;
   m.metalness = Math.min(m.metalness || .5, .52);
   m.roughness = Math.max(m.roughness || .5, .72);
   // Neutralise any leftover warm / orange warehouse tint toward bunker steel.
   if (m.color) {
    const hsl = { h: 0, s: 0, l: 0 };
    m.color.getHSL(hsl);
    if (hsl.h > .05 && hsl.h < .15 && hsl.s > .2) m.color.setHex(PALETTE.steel);
   }
   if (envMap) { m.envMap = envMap; m.envMapIntensity = .28; }
   m.needsUpdate = true;
  }
 });
}

/**
 * Place an authored module: decks sit with grate top near CATWALK_DECK_Y; ladder feet on FLOOR_Y.
 * Authored deck meshes are Y-up with origin at deck underside (y≈0); hangers may extend slightly below.
 */
export function fitCatwalk(model: THREE.Object3D, mount: CatwalkMount): THREE.Group {
 model.updateMatrixWorld(true);
 const box = new THREE.Box3().setFromObject(model);
 const pivot = new THREE.Group();
 pivot.name = `catwalk_${mount.label}`;
 pivot.userData.mount = mount;
 model.position.set(
  -(box.min.x + box.max.x) * .5,
  -box.min.y,
  -(box.min.z + box.max.z) * .5,
 );
 pivot.add(model);
 pivot.rotation.y = mount.yaw;
 if (mount.kind === 'ladder') {
  pivot.position.set(mount.x, FLOOR_Y, mount.z);
 } else if (mount.kind === 'rail_broken' || mount.kind === 'bracket') {
  pivot.position.set(mount.x, CATWALK_DECK_Y, mount.z);
 } else {
  // After lifting so mesh minY=0, deck underside sits near the hanger length above 0.
  // Authored grate top is ~0.09–0.12 above the underside plate; hangers ~0.55 below underside.
  // Place so the grate top (underside + ~0.1, after lift ≈ hangerDepth + 0.1) meets the walk Y.
  const hangerDepth = Math.max(0, -Math.min(0, box.min.y));
  const deckTopLocal = hangerDepth + .1;
  pivot.position.set(mount.x, CATWALK_DECK_Y - deckTopLocal, mount.z);
 }
 return pivot;
}

export function createCatwalk(mounts = catwalkMounts()): WestCatwalks {
 const group = new THREE.Group();
 group.name = 'bunkerServiceGalleries';
 for (const m of mounts) group.add(buildCatwalkStub(m));
 return { group, ready: false, mounts };
}

const proto = new Map<CatwalkMountKind, THREE.Object3D>();

async function loadKind(kind: CatwalkMountKind): Promise<THREE.Object3D> {
 const hit = proto.get(kind);
 if (hit) return hit;
 const { scene } = await new GLTFLoader().loadAsync(CATWALK_URLS[kind]);
 proto.set(kind, scene);
 return scene;
}

/** Swap stubs for authored modular GLBs (one fetch per kind, cloned per mount). */
export async function upgradeCatwalk(visual: WestCatwalks, envMap?: THREE.Texture | null): Promise<boolean> {
 if (typeof document === 'undefined' || visual.ready) return visual.ready;
 try {
  const kinds = [...new Set(visual.mounts.map(m => m.kind))];
  await Promise.all(kinds.map(k => loadKind(k)));
  for (const child of [...visual.group.children]) visual.group.remove(child);
  for (const mount of visual.mounts) {
   const src = proto.get(mount.kind)!;
   const model = src.clone(true);
   prepareModel(model, envMap);
   visual.group.add(fitCatwalk(model, mount));
  }
  visual.ready = true;
  return true;
 } catch (err) {
  console.warn('Bunker gallery catwalk failed to load; keeping stubs.', err);
  return false;
 }
}
