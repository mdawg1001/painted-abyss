/**
 * Skinner rat-cage dress — procedural Soviet industrial bars / mesh / floor
 * grates / harsh observation lamps. No external GLBs; palette matches bunker steel.
 */
import * as THREE from 'three';
import { PALETTE } from './artPalette';
import { FLOOR_Y } from './simulation';
import {
 cageBarPanels,
 cageFloorGrates,
 cageMeshAprons,
 cageObsLamps,
 inCageWatchedZone,
 type CageBarPanel,
 type CageFloorGrate,
 type CageMeshApron,
 type CageObsLamp,
} from './cageDressLayout';

export {
 cageBarPanels,
 cageFloorGrates,
 cageMeshAprons,
 cageObsLamps,
 cageWatchedZones,
 inCageWatchedZone,
 cageDressStats,
 CAGE_WATCHED_TIP,
} from './cageDressLayout';

const steelMat = () => new THREE.MeshStandardMaterial({
 color: PALETTE.steel,
 roughness: .82,
 metalness: .55,
 emissive: 0x0a0c0b,
 emissiveIntensity: .06,
});

const grateMat = () => new THREE.MeshStandardMaterial({
 color: 0x3a403c,
 roughness: .88,
 metalness: .42,
 emissive: 0x080908,
 emissiveIntensity: .05,
});

const meshMat = () => new THREE.MeshStandardMaterial({
 color: 0x4a524c,
 roughness: .86,
 metalness: .4,
 emissive: 0x121614,
 emissiveIntensity: .18,
 transparent: true,
 opacity: .82,
 depthWrite: true,
 side: THREE.DoubleSide,
});

function buildBarPanel(p: CageBarPanel, mat: THREE.Material): THREE.Group {
 const root = new THREE.Group();
 root.name = `cageBar_${p.label}`;
 // Frame
 const frameT = Math.max(.04, p.thick * 1.35);
 const top = new THREE.Mesh(new THREE.BoxGeometry(p.w, frameT, frameT), mat);
 const bot = top.clone();
 top.position.y = p.h * .5;
 bot.position.y = -p.h * .5;
 const left = new THREE.Mesh(new THREE.BoxGeometry(frameT, p.h, frameT), mat);
 const right = left.clone();
 left.position.x = -p.w * .5;
 right.position.x = p.w * .5;
 root.add(top, bot, left, right);
 // Vertical bars
 const inner = p.w - frameT * 2;
 const n = Math.max(3, Math.floor(inner / p.spacing));
 const step = inner / (n + 1);
 for (let i = 1; i <= n; i++) {
  const bar = new THREE.Mesh(new THREE.BoxGeometry(p.thick, p.h - frameT, p.thick), mat);
  bar.position.set(-p.w * .5 + frameT + step * i, 0, 0);
  root.add(bar);
 }
 // One horizontal cross-bar (observation slit read)
 const cross = new THREE.Mesh(new THREE.BoxGeometry(p.w - frameT, p.thick * .9, p.thick * .9), mat);
 cross.position.y = p.h * .12;
 root.add(cross);
 root.position.set(p.x, p.y, p.z);
 root.rotation.y = p.yaw;
 return root;
}

function buildMeshApron(a: CageMeshApron, mat: THREE.Material): THREE.Group {
 const root = new THREE.Group();
 root.name = `cageMesh_${a.label}`;
 // Crossed bars — reads as wire mesh under the grate (cage ceiling from the floor).
 const cell = .2;
 const barT = .028;
 for (let x = -a.w * .5; x <= a.w * .5 + .001; x += cell) {
  const v = new THREE.Mesh(new THREE.BoxGeometry(barT, barT, a.d), mat);
  v.position.set(x, 0, 0);
  root.add(v);
 }
 for (let z = -a.d * .5; z <= a.d * .5 + .001; z += cell) {
  const h = new THREE.Mesh(new THREE.BoxGeometry(a.w, barT, barT), mat);
  h.position.set(0, 0, z);
  root.add(h);
 }
 root.position.set(a.x, a.y, a.z);
 root.rotation.y = a.yaw;
 return root;
}

function buildFloorGrate(g: CageFloorGrate, mat: THREE.Material): THREE.Group {
 const root = new THREE.Group();
 root.name = `cageFloor_${g.label}`;
 const thick = .045;
 const plate = new THREE.Mesh(new THREE.BoxGeometry(g.w, thick * .35, g.d), mat);
 plate.position.y = FLOOR_Y + thick * .2;
 root.add(plate);
 const gap = .11;
 for (let x = -g.w * .5 + .08; x <= g.w * .5 - .08; x += gap) {
  const bar = new THREE.Mesh(new THREE.BoxGeometry(.04, thick, g.d * .92), mat);
  bar.position.set(x, FLOOR_Y + thick * .55, 0);
  root.add(bar);
 }
 // Frame rim
 const rimN = new THREE.Mesh(new THREE.BoxGeometry(g.w, thick * .7, .05), mat);
 const rimS = rimN.clone();
 rimN.position.set(0, FLOOR_Y + thick * .45, -g.d * .5);
 rimS.position.set(0, FLOOR_Y + thick * .45, g.d * .5);
 root.add(rimN, rimS);
 root.position.set(g.x, 0, g.z);
 root.rotation.y = g.yaw;
 return root;
}

export type CageObsLight = {
 mount: CageObsLamp;
 spot: THREE.SpotLight;
 target: THREE.Object3D;
 bulb: THREE.Mesh;
 base: number;
};

export type CageDress = {
 group: THREE.Group;
 lights: CageObsLight[];
 /** 0..1 — how hard the observation lamps are currently burning. */
 watchLevel: number;
};

function buildObsLamp(m: CageObsLamp, steel: THREE.Material): CageObsLight {
 const pivot = new THREE.Group();
 pivot.name = `cageObs_${m.label}`;
 pivot.position.set(m.x, m.y, m.z);
 // Caged bulb stub (harsh lab lamp, not warm sconce)
 const cage = new THREE.Mesh(new THREE.SphereGeometry(.09, 8, 6), steel);
 const bulbMat = new THREE.MeshStandardMaterial({
  color: 0xd8e8e4,
  emissive: 0xb8d4cc,
  emissiveIntensity: 1.1,
  roughness: .35,
  metalness: .1,
 });
 const bulb = new THREE.Mesh(new THREE.SphereGeometry(.055, 8, 6), bulbMat);
 // Guard cage bars around bulb
 for (let i = 0; i < 6; i++) {
  const a = (i / 6) * Math.PI * 2;
  const rod = new THREE.Mesh(new THREE.BoxGeometry(.012, .16, .012), steel);
  rod.position.set(Math.cos(a) * .08, 0, Math.sin(a) * .08);
  pivot.add(rod);
 }
 pivot.add(cage, bulb);

 const spot = new THREE.SpotLight(0xcfe8e0, 0, 14, 0.42, 0.18, 1.6);
 spot.position.set(0, 0, 0);
 spot.castShadow = false;
 const target = new THREE.Object3D();
 target.position.set(m.aimX - m.x, FLOOR_Y - m.y, m.aimZ - m.z);
 pivot.add(spot, target);
 spot.target = target;

 return { mount: m, spot, target, bulb, base: 95 };
}

/** Build the full cage dress group (immediate, no streaming). */
export function createCageDress(): CageDress {
 const group = new THREE.Group();
 group.name = 'skinnerCageDress';
 const steel = steelMat();
 const grate = grateMat();
 const mesh = meshMat();
 for (const p of cageBarPanels()) group.add(buildBarPanel(p, steel));
 for (const a of cageMeshAprons()) group.add(buildMeshApron(a, mesh));
 for (const g of cageFloorGrates()) group.add(buildFloorGrate(g, grate));
 const lights: CageObsLight[] = [];
 for (const m of cageObsLamps()) {
  const L = buildObsLamp(m, steel);
  // Parent lamp under group so dispose/cull stays simple.
  const holder = L.spot.parent;
  if (holder) group.add(holder);
  lights.push(L);
 }
 return { group, lights, watchLevel: 0 };
}

/**
 * Harden observation lamps when the diver is in a watched choke.
 * Visual/audio telegraph only — no combat stat changes.
 */
export function stepCageDress(
 dress: CageDress,
 dt: number,
 player: { x: number; z: number },
): { entered: boolean; zoneLabel: string | null } {
 const zone = inCageWatchedZone(player.x, player.z);
 const want = zone ? 1 : 0;
 const k = 1 - Math.exp(-dt * 3.2);
 dress.watchLevel += (want - dress.watchLevel) * k;
 const lvl = dress.watchLevel;
 for (const L of dress.lights) {
  const inThis =
   zone &&
   Math.hypot(player.x - L.mount.aimX, player.z - L.mount.aimZ) < 6.5;
  const power = L.base * (0.22 + lvl * (inThis ? 1.15 : 0.55));
  L.spot.intensity = power;
  const mat = L.bulb.material as THREE.MeshStandardMaterial;
  mat.emissiveIntensity = 0.35 + lvl * (inThis ? 1.8 : 0.7);
  // Slight aim pull toward the player while watched (lab tracking feel).
  if (lvl > 0.05) {
   const tx = L.mount.aimX + (player.x - L.mount.aimX) * lvl * 0.55;
   const tz = L.mount.aimZ + (player.z - L.mount.aimZ) * lvl * 0.55;
   L.target.position.set(tx - L.mount.x, FLOOR_Y - L.mount.y, tz - L.mount.z);
  }
 }
 return { entered: !!zone, zoneLabel: zone?.label ?? null };
}
