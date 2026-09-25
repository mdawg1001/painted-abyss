/**
 * Ceiling lamps — Poly Haven "Caged Hanging Light" (CC0): caged fluorescent tube fixtures hung on
 * their two chains from the bunker ceiling.
 * Runtime files: `public/assets/caged_hanging_light/` (1k glTF + textures).
 *
 * Horror lighting, physically driven:
 *  - each lamp is a real pendulum on its chains (period from g and chain length), so the pool of
 *    light and every shadow under it sway; gunshots and nearby hits kick the lamps;
 *  - cold tube light thrown straight down: hard pools, dark between them;
 *  - some fixtures are failing (buzz dropouts) and a few are dying (dark, then bursts);
 *  - in the final wave every lamp stutters.
 * A fixed pool of spotlights follows the lamps nearest the player (constant light count, so no
 * shader recompiles); the nearest one casts shadows (guards throw silhouettes through its pool).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { cells, world } from './simulation';

export const HANGING_LIGHT_SOURCE = 'https://polyhaven.com/a/caged_hanging_light';
export const HANGING_LIGHT_LICENSE = 'CC0 1.0 Universal (public domain dedication)';
const BASE = '/assets/caged_hanging_light/';
const FILE = 'caged_hanging_light_1k.gltf';

export const HANGING_LIGHT = {
 /** Ceiling height the chain plates are fixed to (m). */
 ceilingY: 8,
 /** Authored fixture is 1.16 m long, 0.75 m tall with chains; scaled up a touch for the tall ceiling. */
 scale: 1.3,
 /** Pendulum length: ceiling plate to the tube's centre of mass (m, after scale). */
 cable: 0.85,
 /** Where the tube sits below the ceiling (m, after scale): the light source. */
 tubeDrop: 0.86,
 /** Lamp spacing and count: 7 lamps, 60 % fewer than the original 18, spread ≥22 m apart. */
 spacing: 22,
 max: 7,
 /** Old fluorescent tube: cold, faintly green. */
 color: 0xd2f2e2,
 /** Spot cone: tight hard pools. */
 intensity: 230,
 distance: 22,
 angle: 0.62,
 penumbra: 0.22,
 decay: 1.35,
 /** Spotlights that follow the nearest lamps; the first `shadowed` of them cast shadows. */
 pool: 5,
 shadowed: 1,
 shadowMap: 512,
 /** Pendulum (chains): gravity, damping per second, idle draught, kick per gunshot within `kickRadius`. */
 gravity: 9.81,
 damping: 0.12,
 draught: 0.012,
 kick: 0.09,
 kickRadius: 9,
 /** Hard limit on swing angle (rad). */
 maxSwing: 0.22,
} as const;

export type LampState = 'steady' | 'failing' | 'dying';
export type HangingLamp = {
 x: number; z: number;
 pivot: THREE.Group;
 fixture: THREE.Group;
 bulb: THREE.MeshBasicMaterial;
 halo: THREE.SpriteMaterial;
 state: LampState;
 phase: number;
 /** Swing angles about x and z (rad) and their angular velocities. */
 ax: number; az: number; vx: number; vz: number;
 /** Current light level 0..1.3 (for the bulb and whichever spot follows it). */
 level: number;
 /** Dying lamps: seconds until the next burst / end of the current burst. */
 timer: number; burst: boolean;
};

export type HangingLights = {
 group: THREE.Group;
 lamps: HangingLamp[];
 spots: THREE.SpotLight[];
};

const hash = (i: number) => (((i + 1) * 2654435761) >>> 0) / 4294967296;

/** Room-centre mounts: cells whose four neighbours are floor (clear of walls), spread out. */
export function hangingLightMounts(spacing: number = HANGING_LIGHT.spacing, max: number = HANGING_LIGHT.max) {
 const out: { x: number; z: number; yaw: number }[] = [];
 const keys = [...cells].sort();
 for (const key of keys) {
  const [c, r] = key.split(',').map(Number);
  if (![[1, 0], [-1, 0], [0, 1], [0, -1]].every(([dc, dr]) => cells.has(`${c + dc},${r + dr}`))) continue;
  const p = world(c, r);
  if (out.every(m => Math.hypot(m.x - p.x, m.z - p.z) >= spacing)) out.push({ x: p.x, z: p.z, yaw: hash(out.length * 11 + 2) < .5 ? 0 : Math.PI / 2 });
  if (out.length >= max) break;
 }
 return out;
}

/** 60% steady, 30% failing, 10% dying; scattered by hash. */
export function lampState(i: number): LampState {
 const h = hash(i * 7 + 3);
 return h < 0.1 ? 'dying' : h < 0.4 ? 'failing' : 'steady';
}

/** Pendulum step for one axis: small-angle-exact form of θ'' = −(g/L)·sin θ − damping·θ'. */
export function swingStep(a: number, v: number, dt: number, g: number = HANGING_LIGHT.gravity, L: number = HANGING_LIGHT.cable, damping: number = HANGING_LIGHT.damping) {
 const acc = -(g / L) * Math.sin(a) - damping * v;
 v += acc * dt;
 a += v * dt;
 const m = HANGING_LIGHT.maxSwing;
 if (a > m) { a = m; v = Math.min(v, 0); } else if (a < -m) { a = -m; v = Math.max(v, 0); }
 return [a, v] as const;
}

/**
 * Light level for a lamp at time t (0 = dark, 1 = nominal). `panic` (0..1) makes every lamp stutter.
 * Mutates the dying-lamp burst timer.
 */
export function lampLevel(l: HangingLamp, t: number, dt: number, panic: number, rand: () => number = Math.random) {
 const p = l.phase;
 // Mains ripple on every tungsten filament.
 let f = 0.94 + 0.06 * Math.sin(t * 19 + p);
 if (l.state === 'failing') {
  const buzz = Math.sin(t * 31 + p) + Math.sin(t * 57 + p * 1.9) * 0.7 + Math.sin(t * 7.3 + p * 0.6) * 0.9;
  if (buzz > 1.55) f *= 0.05; else if (buzz > 1.2) f *= 0.45;
 } else if (l.state === 'dying') {
  l.timer -= dt;
  if (l.timer <= 0) { l.burst = !l.burst; l.timer = l.burst ? 0.12 + rand() * 0.9 : 1.5 + rand() * 5; }
  f = l.burst ? (Math.sin(t * 43 + p) > -0.2 ? 1.1 : 0.1) : 0.03;
 }
 if (panic > 0) {
  const s = Math.sin(t * 23 + p * 3) + Math.sin(t * 41 + p);
  if (s > 1.4 - panic * 0.9) f *= 0.08;
 }
 return f;
}

let haloTex: THREE.Texture | null = null;
function haloTexture() {
 if (haloTex) return haloTex;
 if (typeof document === 'undefined') return null;
 const c = document.createElement('canvas'); c.width = c.height = 64;
 const g = c.getContext('2d')!;
 const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
 gr.addColorStop(0, 'rgba(240,255,250,1)'); gr.addColorStop(.2, 'rgba(200,240,225,.45)'); gr.addColorStop(1, 'rgba(160,220,200,0)');
 g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
 haloTex = new THREE.CanvasTexture(c); haloTex.colorSpace = THREE.SRGBColorSpace;
 return haloTex;
}

function stubFixture(): { group: THREE.Group; bulb: THREE.MeshBasicMaterial } {
 const H = HANGING_LIGHT;
 const g = new THREE.Group();
 g.name = 'hangingStub';
 const steel = new THREE.MeshStandardMaterial({ color: 0x2c2f2b, roughness: .7, metalness: .6 });
 const housing = new THREE.Mesh(new THREE.BoxGeometry(1.16 * H.scale, .12, .2), steel);
 housing.position.y = -H.tubeDrop + .1;
 const bulb = new THREE.MeshBasicMaterial({ color: H.color });
 const tube = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 1.05 * H.scale, 8), bulb);
 tube.rotation.z = Math.PI / 2;
 tube.position.y = -H.tubeDrop;
 const chainGeo = new THREE.CylinderGeometry(.01, .01, H.tubeDrop - .1, 4);
 for (const x of [-.35, .35]) { const c = new THREE.Mesh(chainGeo, steel); c.position.set(x * H.scale, -(H.tubeDrop - .1) / 2, 0); g.add(c); }
 g.add(housing, tube);
 return { group: g, bulb };
}

/** Build lamps (stub fixtures) and the spot pool. Meshes upgrade to the glTF with `upgradeHangingLights`. */
export function createHangingLights(mounts = hangingLightMounts()): HangingLights {
 const H = HANGING_LIGHT;
 const group = new THREE.Group();
 group.name = 'hangingLights';
 const lamps: HangingLamp[] = mounts.map((m, i) => {
  const pivot = new THREE.Group();
  pivot.position.set(m.x, H.ceilingY, m.z);
  pivot.rotation.order = 'YXZ';
  const fixture = new THREE.Group();
  fixture.rotation.y = m.yaw;
  const stub = stubFixture();
  fixture.add(stub.group);
  pivot.add(fixture);
  group.add(pivot);
  const halo = new THREE.SpriteMaterial({ map: haloTexture(), color: H.color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .8, fog: false });
  const glow = new THREE.Sprite(halo);
  glow.scale.set(1.5 * H.scale, .55, 1);
  glow.position.y = -H.tubeDrop;
  fixture.add(glow);
  const state = lampState(i);
  const a0 = (hash(i * 13 + 1) - .5) * .08, b0 = (hash(i * 17 + 5) - .5) * .08;
  return { x: m.x, z: m.z, pivot, fixture, bulb: stub.bulb, halo, state, phase: hash(i) * Math.PI * 2, ax: a0, az: b0, vx: 0, vz: 0, level: 1, timer: hash(i * 3) * 4, burst: false };
 });
 const spots: THREE.SpotLight[] = [];
 for (let k = 0; k < H.pool; k++) {
  const s = new THREE.SpotLight(H.color, 0, H.distance, H.angle, H.penumbra, H.decay);
  s.name = 'hangingSpot';
  if (k < H.shadowed) {
   s.castShadow = true;
   s.shadow.mapSize.set(H.shadowMap, H.shadowMap);
   s.shadow.bias = -0.0008;
   s.shadow.normalBias = 0.03;
   s.shadow.camera.near = .2;
   s.shadow.camera.far = H.distance;
  }
  group.add(s, s.target);
  spots.push(s);
 }
 return { group, lamps, spots };
}

/** Swap stubs for the Poly Haven fixture. Resolves false if the glTF fails (stubs stay). */
export async function upgradeHangingLights(h: HangingLights): Promise<boolean> {
 try {
  const loader = new GLTFLoader();
  loader.setPath(BASE);
  const gltf = await loader.loadAsync(FILE);
  const proto = gltf.scene;
  // Authored in metres with the chain plates at y = 0: hang it straight from the ceiling.
  proto.scale.setScalar(HANGING_LIGHT.scale);
  const box = new THREE.Box3().setFromObject(proto);
  const c = box.getCenter(new THREE.Vector3());
  proto.position.set(-c.x, -box.max.y, -c.z);
  proto.traverse(o => {
   if (!(o instanceof THREE.Mesh)) return;
   // The tube sits inside its own mesh; letting it cast would black out its own light.
   o.castShadow = false; o.receiveShadow = false;
   const m = o.material as THREE.MeshStandardMaterial;
   if (m && 'emissive' in m) { m.emissive.setHex(HANGING_LIGHT.color); m.envMapIntensity = .3; m.needsUpdate = true; }
  });
  for (const l of h.lamps) {
   const stub = l.fixture.getObjectByName('hangingStub');
   const model = proto.clone(true);
   // Per-lamp emissive so each bulb flickers on its own.
   model.traverse(o => {
    if (!(o instanceof THREE.Mesh)) return;
    o.material = (o.material as THREE.Material).clone();
   });
   model.name = 'hangingModel';
   l.fixture.add(model);
   if (stub) stub.visible = false;
  }
  return true;
 } catch (err) {
  console.error('Hanging light failed to load', err);
  return false;
 }
}

const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), down = new THREE.Vector3();

/**
 * Per frame: swing, flicker, and hand the spot pool to the lamps nearest `eye`.
 * `kicks` are gunshot / impact points this frame. `panic` 0..1 (final wave), `tint` overrides the colour (relic slam).
 */
export function stepHangingLights(h: HangingLights, dt: number, t: number, eye: THREE.Vector3, kicks: { x: number; z: number; power?: number }[], panic: number, tint: number | null) {
 const H = HANGING_LIGHT;
 dt = Math.min(dt, 1 / 20);
 for (const l of h.lamps) {
  for (const k of kicks) {
   const dx = l.x - k.x, dz = l.z - k.z, d = Math.hypot(dx, dz);
   if (d > H.kickRadius) continue;
   const s = H.kick * (k.power ?? 1) * (1 - d / H.kickRadius);
   // Pressure wave pushes the lamp away from the shot, plus a random twist.
   l.vx += (dz / (d + .5)) * s + (Math.random() - .5) * s * .6;
   l.vz += (-dx / (d + .5)) * s + (Math.random() - .5) * s * .6;
  }
  // Faint draught through the bunker keeps every lamp barely alive.
  l.vx += (Math.random() - .5) * H.draught * Math.sqrt(dt) * 2;
  l.vz += (Math.random() - .5) * H.draught * Math.sqrt(dt) * 2;
  [l.ax, l.vx] = swingStep(l.ax, l.vx, dt);
  [l.az, l.vz] = swingStep(l.az, l.vz, dt);
  l.pivot.rotation.set(l.ax, 0, l.az);
  l.level = lampLevel(l, t, dt, panic);
  l.bulb.color.setHex(tint ?? H.color).multiplyScalar(Math.max(.04, Math.min(1.2, l.level)));
  l.halo.color.setHex(tint ?? H.color);
  l.halo.opacity = Math.max(0, Math.min(1, l.level)) * .9;
  const model = l.fixture.getObjectByName('hangingModel');
  if (model) model.traverse(o => {
   const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
   if (m && 'emissiveIntensity' in m) { m.emissiveIntensity = 2.2 * l.level; if (tint != null) m.emissive.setHex(tint); else m.emissive.setHex(H.color); }
  });
 }
 // Nearest lamps get the real lights.
 const order = h.lamps.map((l, i) => ({ i, d: (l.x - eye.x) ** 2 + (l.z - eye.z) ** 2 })).sort((a, b) => a.d - b.d);
 h.spots.forEach((s, k) => {
  const pick = order[k];
  if (!pick) { s.intensity = 0; return; }
  const l = h.lamps[pick.i];
  l.pivot.getWorldPosition(tmpA);
  // Source just under the tube, following the swing; cone straight down the chains.
  down.set(0, -1, 0).applyEuler(l.pivot.rotation);
  tmpA.addScaledVector(down, H.tubeDrop + .08);
  tmpB.copy(tmpA).addScaledVector(down, 6);
  s.position.copy(tmpA);
  s.target.position.copy(tmpB);
  s.target.updateMatrixWorld();
  s.color.setHex(tint ?? H.color);
  s.intensity = H.intensity * l.level;
 });
}

