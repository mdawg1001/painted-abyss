/**
 * West-hall industrial catwalk gallery — modular grated decks + ladder.
 * Authored GLBs under `/assets/industrial-catwalk/` (kit language: straight/cross/T/ladder/rail).
 * Pattern mirrors radiatorAsset: mounts → procedural stubs → PropStreaming upgrade.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
 CATWALK_DECK_Y,
 CATWALK_DECK_RISE,
 CATWALK_LADDER,
 catwalkMounts,
 type CatwalkMount,
 type CatwalkMountKind,
} from './catwalkLayout';
import { FLOOR_Y } from './simulation';

export {
 CATWALK_DECK_Y,
 CATWALK_DECK_RISE,
 CATWALK_LADDER,
 catwalkMounts,
} from './catwalkLayout';
export type { CatwalkMount, CatwalkMountKind } from './catwalkLayout';

const BASE = '/assets/industrial-catwalk';
export const CATWALK_URLS: Record<CatwalkMountKind, string> = {
 straight: `${BASE}/catwalk_straight.glb`,
 cross: `${BASE}/catwalk_cross.glb`,
 t: `${BASE}/catwalk_t.glb`,
 ladder: `${BASE}/catwalk_ladder.glb`,
 rail_broken: `${BASE}/catwalk_rail_broken.glb`,
};

export type WestCatwalks = {
 group: THREE.Group;
 ready: boolean;
 mounts: CatwalkMount[];
};

const steelMat = () => new THREE.MeshStandardMaterial({
 color: 0x4a4e52, roughness: .72, metalness: .55,
 emissive: 0x121416, emissiveIntensity: .1,
});

/** Procedural stand-in until the matching glTF streams in. */
export function buildCatwalkStub(mount: CatwalkMount): THREE.Group {
 const root = new THREE.Group();
 root.name = 'catwalkStub';
 root.userData.mount = mount;
 const mat = steelMat();
 if (mount.kind === 'ladder') {
  const h = CATWALK_DECK_RISE + .15;
  const left = new THREE.Mesh(new THREE.BoxGeometry(.06, h, .06), mat);
  const right = left.clone();
  left.position.set(-.28, h * .5, 0);
  right.position.set(.28, h * .5, 0);
  root.add(left, right);
  for (let i = 0; i < 10; i++) {
   const rung = new THREE.Mesh(new THREE.BoxGeometry(.55, .04, .05), mat);
   rung.position.set(0, .2 + i * (h - .3) / 9, 0);
   root.add(rung);
  }
  root.position.set(mount.x, FLOOR_Y, mount.z);
  root.rotation.y = mount.yaw;
  return root;
 }
 if (mount.kind === 'rail_broken') {
  const stump = new THREE.Mesh(new THREE.BoxGeometry(.05, .45, .05), mat);
  stump.position.y = .22;
  const dang = new THREE.Mesh(new THREE.BoxGeometry(.04, .04, 1.0), mat);
  dang.position.set(0, .4, .35);
  dang.rotation.x = .55;
  root.add(stump, dang);
  root.position.set(mount.x, CATWALK_DECK_Y, mount.z);
  root.rotation.y = mount.yaw;
  return root;
 }
 // Deck piece: thin grate box + side rails
 const deck = new THREE.Mesh(new THREE.BoxGeometry(1.2, .06, 2), mat);
 deck.position.y = .03;
 const railL = new THREE.Mesh(new THREE.BoxGeometry(.04, 1.0, 1.9), mat);
 railL.position.set(-.58, .55, 0);
 const railR = railL.clone();
 railR.position.x = .58;
 root.add(deck, railL, railR);
 if (mount.kind === 't' || mount.kind === 'cross') {
  const spur = new THREE.Mesh(new THREE.BoxGeometry(2, .06, 1.2), mat);
  spur.position.set(mount.kind === 't' ? .9 : 0, .03, 0);
  root.add(spur);
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
   m.metalness = Math.min(m.metalness || .55, .55);
   m.roughness = Math.max(m.roughness || .5, .48);
   // Kill any authored warm/orange tint — keep Soviet grey steel.
   if (m.color) {
    const hsl = { h: 0, s: 0, l: 0 };
    m.color.getHSL(hsl);
    if (hsl.h > .05 && hsl.h < .15 && hsl.s > .25) m.color.setHex(0x4a4e52);
   }
   if (envMap) { m.envMap = envMap; m.envMapIntensity = .35; }
   m.needsUpdate = true;
  }
 });
}

/**
 * Place an authored module: decks sit with top at CATWALK_DECK_Y; ladder feet on FLOOR_Y.
 * Authored meshes are Y-up with origin at deck underside (y=0) or ladder feet (y=0).
 */
export function fitCatwalk(model: THREE.Object3D, mount: CatwalkMount): THREE.Group {
 model.updateMatrixWorld(true);
 const box = new THREE.Box3().setFromObject(model);
 const pivot = new THREE.Group();
 pivot.name = `catwalk_${mount.label}`;
 pivot.userData.mount = mount;
 // Centre xz; put local min Y on the attachment plane.
 model.position.set(
  -(box.min.x + box.max.x) * .5,
  -box.min.y,
  -(box.min.z + box.max.z) * .5,
 );
 pivot.add(model);
 pivot.rotation.y = mount.yaw;
 if (mount.kind === 'ladder') {
  pivot.position.set(mount.x, FLOOR_Y, mount.z);
 } else if (mount.kind === 'rail_broken') {
  pivot.position.set(mount.x, CATWALK_DECK_Y, mount.z);
 } else {
  // Deck underside on CATWALK_DECK_Y − thickness ≈ top at DECK_Y after authored thick.
  // Authored grate top sits ~0.09 above local 0; lower so top ≈ CATWALK_DECK_Y.
  const top = box.max.y - box.min.y;
  pivot.position.set(mount.x, CATWALK_DECK_Y - top + .02, mount.z);
 }
 return pivot;
}

export function createCatwalk(mounts = catwalkMounts()): WestCatwalks {
 const group = new THREE.Group();
 group.name = 'westHallCatwalk';
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
  console.warn('Industrial catwalk failed to load; keeping stubs.', err);
  return false;
 }
}
