/**
 * Staged guard scenes, drawn: poses, props and the moment the scene breaks.
 *
 * The Quaternius rig has only idle / walk / run, so the scene body language is authored
 * here as procedural poses: a pose is a set of targets in the character's own frame (feet,
 * hands, a lean for each spine bone) that a small solver turns into bone rotations each frame,
 * with analytic two-bone IK for arms and legs. The idle clip still runs underneath (breathing,
 * weight shift) and the pose is blended over it, so everything stays alive.
 *
 *  - Radio operator: sits on the stool hunched over the log, pencil scratching across the
 *    page; every so often he straightens, presses a headphone cup to his ear and talks.
 *  - Quartermaster: sits back on the long crate, forearm on his knee, mug in his fist; sips,
 *    laughs at the conscript's story, nods.
 *  - Conscript: stands hand on his belt, papirosa in the other; drags (the ember flares), then
 *    talks with the cigarette hand, big cartoon gestures.
 *
 * When the sim breaks a scene the pose blends out over half a second while the body slides
 * from the seat onto his sim position: he gets up. The mug and papirosa drop to the floor and
 * the operator's stool goes over.
 *
 * Character frame: +Z forward, +X his left, +Y up. Rig frame = the armature, skeleton units.
 */
import * as THREE from 'three';
import { FLOOR_Y } from './simulation';
import { guardScene, type GuardSceneId } from './guardScenes';
import { enamelMug, pencil } from './coverScenes';
import type { SovietGuardVisual } from './sovietGuardAsset';

type Rest = { q: THREE.Quaternion; p: THREE.Vector3; W: THREE.Quaternion; P: THREE.Vector3 };
export type SceneRig = { bones: Map<string, THREE.Bone>; rest: Map<string, Rest>; armature: THREE.Object3D };

const ORDER = ['Bone', 'Body_1', 'Hips', 'Abdomen', 'Torso', 'Neck', 'Head', 'ShoulderL', 'UpperArmL', 'LowerArmL', 'FistL', 'ShoulderR', 'UpperArmR', 'LowerArmR', 'FistR', 'UpperLegL', 'LowerLegL', 'UpperLegR', 'LowerLegR', 'FootL', 'FootR'];

/** Scene rigs by guard body (kept out of userData, which three deep-copies as JSON). */
export const sceneRigs = new WeakMap<THREE.Object3D, SceneRig>();

/** Record the bind pose of a freshly cloned guard (call before its mixer first runs). */
export function captureSceneRig(body: THREE.Object3D): SceneRig | null {
 const bones = new Map<string, THREE.Bone>();
 body.traverse(o => { if ((o as THREE.Bone).isBone && !bones.has(o.name)) bones.set(o.name, o as THREE.Bone); });
 if (!ORDER.every(n => bones.has(n))) return null;
 const rest = new Map<string, Rest>();
 for (const n of ORDER) {
  const b = bones.get(n)!;
  const parent = rest.get(b.parent?.name ?? '');
  const W = parent ? parent.W.clone().multiply(b.quaternion) : b.quaternion.clone();
  const P = parent ? parent.P.clone().add(b.position.clone().applyQuaternion(parent.W)) : b.position.clone();
  rest.set(n, { q: b.quaternion.clone(), p: b.position.clone(), W, P });
 }
 const rig = { bones, rest, armature: bones.get('Bone')!.parent! };
 sceneRigs.set(body, rig);
 return rig;
}

/** Pose targets, in metres in the character frame (feet origin), converted to rig units inside. */
export type ScenePose = {
 /** Seated: hip joint height (m) and how far back of the root the hips sit (m). */
 seat?: { hipY: number; hipZ: number; footL: THREE.Vector3; footR: THREE.Vector3 };
 /** Cumulative spine leans (rad) [pitch forward, yaw left, roll right]. */
 hips: [number, number, number]; abdomen: [number, number, number]; torso: [number, number, number];
 neck: [number, number, number]; head: [number, number, number];
 /** Hand targets (m, character frame) and elbow hints; a function sees the solved head position. */
 handL?: (head: THREE.Vector3) => { at: THREE.Vector3; pole: THREE.Vector3 };
 handR?: (head: THREE.Vector3) => { at: THREE.Vector3; pole: THREE.Vector3 };
};

const _e = new THREE.Euler(0, 0, 0, 'YXZ');
const E = (r: [number, number, number]) => new THREE.Quaternion().setFromEuler(_e.set(r[0], r[1], -r[2], 'YXZ'));
const fromTo = (a: THREE.Vector3, b: THREE.Vector3) => new THREE.Quaternion().setFromUnitVectors(a.clone().normalize(), b.clone().normalize());

/** Two-bone IK: elbow/knee position for root S, target T, segment lengths a, b and a pole direction. */
function ik(S: THREE.Vector3, T: THREE.Vector3, a: number, b: number, pole: THREE.Vector3) {
 const d = T.clone().sub(S);
 const len = THREE.MathUtils.clamp(d.length(), Math.abs(a - b) + 1e-3, a + b - 1e-3);
 const dir = d.normalize();
 const p = pole.clone().sub(dir.clone().multiplyScalar(pole.dot(dir)));
 if (p.lengthSq() < 1e-8) p.set(0, 0, 1);
 p.normalize();
 const cosA = (a * a + len * len - b * b) / (2 * a * len);
 const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
 const mid = S.clone().add(dir.clone().multiplyScalar(a * cosA)).add(p.multiplyScalar(a * sinA));
 return { mid, end: S.clone().add(dir.multiplyScalar(len)) };
}

/** Character frame (metres, feet origin, before heading) ↔ rig units. */
export type RigFrame = { toU: (m: THREE.Vector3) => THREE.Vector3; toM: (u: THREE.Vector3) => THREE.Vector3 };

/** Frame for a guard visual: outer root scale × the mesh's normalise transform. */
export function rigFrame(v: { root: THREE.Object3D; body: THREE.Object3D }): RigFrame {
 const s = v.root.scale, k = v.body.scale.x || 1, o = v.body.position;
 return {
  toU: m => new THREE.Vector3((m.x / s.x - o.x) / k, (m.y / s.y - o.y) / k, (m.z / s.z - o.z) / k),
  toM: u => new THREE.Vector3((o.x + k * u.x) * s.x, (o.y + k * u.y) * s.y, (o.z + k * u.z) * s.z),
 };
}

/** Solve a pose onto the rig and blend it over whatever the mixer left in the bones. */
export function applyScenePose(rig: SceneRig, pose: ScenePose, w: number, frame: RigFrame) {
 if (w <= 0) return;
 const R = rig.rest, B = rig.bones;
 const W = new Map<string, THREE.Quaternion>(), P = new Map<string, THREE.Vector3>();
 const m2u = frame.toU;
 // Root bone as animated.
 const root = B.get('Bone')!;
 W.set('Bone', root.quaternion.clone()); P.set('Bone', root.position.clone());
 const place = (n: string, Wn: THREE.Quaternion, Pn?: THREE.Vector3) => {
  const parent = B.get(n)!.parent!.name;
  W.set(n, Wn);
  P.set(n, Pn ?? P.get(parent)!.clone().add(R.get(n)!.p.clone().applyQuaternion(W.get(parent)!)));
 };
 // Body_1 carries hips and legs: lowered and set back onto the seat when sitting.
 const body = B.get('Body_1')!;
 if (pose.seat) {
  const hipU = m2u(new THREE.Vector3(0, pose.seat.hipY, pose.seat.hipZ));
  const legOff = R.get('UpperLegL')!.p.clone().applyQuaternion(R.get('Body_1')!.W);
  place('Body_1', R.get('Body_1')!.W.clone(), new THREE.Vector3(R.get('Body_1')!.P.x, hipU.y - legOff.y, hipU.z - legOff.z));
 } else place('Body_1', W.get('Bone')!.clone().multiply(body.quaternion), P.get('Bone')!.clone().add(body.position.clone().applyQuaternion(W.get('Bone')!)));
 // Spine: cumulative leans over the rest orientation.
 let acc = E(pose.hips);
 place('Hips', acc.clone().multiply(R.get('Hips')!.W));
 for (const [n, r] of [['Abdomen', pose.abdomen], ['Torso', pose.torso], ['Neck', pose.neck], ['Head', pose.head]] as const) {
  acc = acc.clone().multiply(E(r));
  place(n, acc.clone().multiply(R.get(n)!.W));
 }
 const headMetres = frame.toM(P.get('Head')!.clone());
 // Arms.
 for (const s of ['L', 'R'] as const) {
  const sh = 'Shoulder' + s, up = 'UpperArm' + s, lo = 'LowerArm' + s, fi = 'Fist' + s;
  place(sh, W.get('Torso')!.clone().multiply(R.get(sh)!.q));
  const target = s === 'L' ? pose.handL?.(headMetres) : pose.handR?.(headMetres);
  if (!target) {
   // Arm left to the clip: keep its animated locals relative to the solved shoulder.
   for (const n of [up, lo, fi]) place(n, W.get(B.get(n)!.parent!.name)!.clone().multiply(B.get(n)!.quaternion));
   continue;
  }
  place(up, W.get(sh)!.clone().multiply(R.get(up)!.q));
  const S = P.get(up)!, a = R.get(lo)!.p.length(), b = R.get(fi)!.p.length();
  const { mid, end } = ik(S, m2u(target.at), a, b, target.pole);
  const restUp = R.get(lo)!.P.clone().sub(R.get(up)!.P), restLo = R.get(fi)!.P.clone().sub(R.get(lo)!.P);
  const qUp = fromTo(restUp, mid.clone().sub(S)), qLo = fromTo(restLo, end.clone().sub(mid));
  place(up, qUp.clone().multiply(R.get(up)!.W));
  place(lo, qLo.clone().multiply(R.get(lo)!.W), mid);
  place(fi, qLo.clone().multiply(R.get(fi)!.W), end);
 }
 // Legs (seated only; standing legs stay on the clip).
 if (pose.seat) {
  for (const s of ['L', 'R'] as const) {
   const up = 'UpperLeg' + s, lo = 'LowerLeg' + s, ft = 'Foot' + s;
   place(up, W.get('Body_1')!.clone().multiply(R.get(up)!.q));
   const H = P.get(up)!, F = m2u(s === 'L' ? pose.seat.footL : pose.seat.footR);
   const a = R.get(lo)!.p.length(), b = R.get(ft)!.P.distanceTo(R.get(lo)!.P);
   const { mid, end } = ik(H, F, a, b, new THREE.Vector3(s === 'L' ? .25 : -.25, .4, 1));
   const restUp = R.get(lo)!.P.clone().sub(R.get(up)!.P), restLo = R.get(ft)!.P.clone().sub(R.get(lo)!.P);
   place(up, fromTo(restUp, mid.clone().sub(H)).multiply(R.get(up)!.W));
   place(lo, fromTo(restLo, end.clone().sub(mid)).multiply(R.get(lo)!.W), mid);
   place(ft, R.get(ft)!.W.clone(), end);
  }
 }
 // Write locals, blended over the clip.
 const inv = new THREE.Quaternion(), q = new THREE.Quaternion(), p = new THREE.Vector3();
 for (const n of ORDER) {
  if (n === 'Bone' || !W.has(n)) continue;
  if (!pose.seat && (n.startsWith('UpperLeg') || n.startsWith('LowerLeg') || n.startsWith('Foot'))) continue;
  const b = B.get(n)!, parent = b.parent!.name;
  inv.copy(W.get(parent)!).invert();
  q.copy(inv).multiply(W.get(n)!);
  b.quaternion.slerp(q, w);
  if (n === 'Body_1' || n.startsWith('Foot')) {
   p.copy(P.get(n)!).sub(P.get(parent)!).applyQuaternion(inv);
   b.position.lerp(p, w);
  }
 }
}

// ── Scene choreography ─────────────────────────────────────────────────────────
const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const s01 = (a: number, b: number, x: number) => THREE.MathUtils.smoothstep(x, a, b);
/** 0→1→0 bump over [a, b] with ramps of length r. */
const bump = (t: number, a: number, b: number, r: number) => s01(a, a + r, t) * (1 - s01(b - r, b, t));

/** What each scene's body is doing at time t (s). Returns the pose plus prop cues. */
export function scenePose(id: GuardSceneId, t: number): { pose: ScenePose; drink: number; drag: number } {
 if (id === 'radio') {
  // 16 s loop: 11 s writing, then he straightens to listen on the headphones and answers.
  const ph = t % 16, call = bump(ph, 11, 15.6, .6);
  const scrib = Math.sin(t * 17) * .012, row = (t * .6) % 1;
  return {
   drink: 0, drag: 0,
   pose: {
    seat: { hipY: .51, hipZ: -.02, footL: V(.17, .02, .3), footR: V(-.15, .02, .34) },
    hips: [.16 - .1 * call, 0, 0], abdomen: [.12 - .08 * call, 0, 0], torso: [.08, -.05 * call, 0],
    neck: [.05, 0, 0], head: [.35 - .45 * call + .03 * Math.sin(t * 2.1), .12 * call, .1 * call],
    handR: () => ({ at: V(-.1 + row * .16 + scrib, .815 + Math.abs(scrib) * .4, .34 - row * .03), pole: V(-1, -.6, -.2) }),
    handL: head => call > .05
     ? { at: head.clone().lerp(V(.2, .82, .34), 1 - call).add(V(.26 * call, .02 * call, -.02 * call)), pole: V(1, -.8, 0) }
     : { at: V(.2, .815, .32), pole: V(1, -.6, 0) },
   },
  };
 }
 if (id === 'teaSit') {
  // 9 s loop: sip at 2–4 s, a belly laugh at 6–7.5 s, nods in between.
  const ph = t % 9, sip = bump(ph, 1.6, 4.2, .7), laugh = bump(ph, 6, 7.6, .3);
  const shake = laugh * Math.sin(t * 22) * .05;
  return {
   drink: sip, drag: 0,
   pose: {
    seat: { hipY: .54, hipZ: -.04, footL: V(.24, .02, .36), footR: V(-.22, .02, .4) },
    hips: [-.1 - .12 * laugh, 0, 0], abdomen: [-.04 + shake, .08, 0], torso: [.02 + shake, .12, .03],
    neck: [0, .05, 0], head: [.08 - .35 * sip - .25 * laugh + .06 * Math.sin(t * 1.3) * (1 - sip), .3 - .2 * sip, -.06],
    handL: () => ({ at: V(.2, .66 + shake * .3, .36), pole: V(1, 0, -.2) }),
    handR: head => ({ at: V(-.2, .7, .34).lerp(head.clone().add(V(-.05, -.14, .2)), sip), pole: V(-1, -.5, -.3) }),
   },
  };
 }
 // teaTalk: 8 s loop: drag at 0.5–2 s, then talking with the cigarette hand.
 const ph = t % 8, drag = bump(ph, .5, 2.1, .4), talk = s01(2.2, 2.8, ph) * (1 - s01(7.4, 8, ph));
 const g1 = Math.sin(t * 3.1), g2 = Math.sin(t * 4.7 + 1);
 return {
  drink: 0, drag,
  pose: {
   hips: [0, -.05, .04], abdomen: [.02, 0, 0], torso: [.03 * talk * g2, .1 * talk * g1, 0],
   neck: [0, 0, 0], head: [.05 - .12 * drag + .08 * talk * Math.abs(g2), .1 * talk * g1, .06 * talk * g2],
   // Hand on the belt, elbow out: the cocky stance of a boy telling a story.
   handL: () => ({ at: V(.27, .9, .06), pole: V(1, 0, -.6) }),
   handR: head => ({
    at: V(-.24 + .12 * talk * g1, 1.02 + .14 * talk * Math.abs(g2), .32 + .08 * talk * g2).lerp(head.clone().add(V(-.04, -.15, .17)), drag),
    pole: V(-1, -.6, -.2),
   }),
  },
 };
}

type Props = { mug?: THREE.Object3D; pencil?: THREE.Object3D; papirosa?: THREE.Group; ember?: THREE.Sprite;
 dropped?: { o: THREE.Object3D; v: THREE.Vector3; spin: THREE.Vector3; rest: number }[] };

let emberTex: THREE.Texture | null = null;
function papirosa() {
 const g = new THREE.Group();
 const tube = new THREE.Mesh(new THREE.CylinderGeometry(.0045, .0045, .075, 6), new THREE.MeshStandardMaterial({ color: 0xece4d0, roughness: .8 }));
 tube.rotation.z = Math.PI / 2;
 g.add(tube);
 if (!emberTex) {
  const c = document.createElement('canvas'); c.width = c.height = 32;
  const x = c.getContext('2d')!, gr = x.createRadialGradient(16, 16, 0, 16, 16, 16);
  gr.addColorStop(0, 'rgba(255,200,120,1)'); gr.addColorStop(.35, 'rgba(255,90,30,.8)'); gr.addColorStop(1, 'rgba(255,40,0,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 32, 32);
  emberTex = new THREE.CanvasTexture(c);
 }
 const ember = new THREE.Sprite(new THREE.SpriteMaterial({ map: emberTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
 ember.position.x = .04; ember.scale.setScalar(.03);
 g.add(ember);
 g.userData.ember = ember;
 return g;
}

/** Runs the staged scenes for the guard visuals; CaveWorld calls `sync` per guard per frame. */
export class GuardSceneDirector {
 private props = new Map<number, Props>();
 private released = new Set<number>();
 private stools = new Map<string, { o: THREE.Object3D; t: number; from: THREE.Euler; fromP: THREE.Vector3 }>();
 private _p = new THREE.Vector3(); private _q = new THREE.Quaternion();
 constructor(private scene: THREE.Scene) {}

 /**
  * Place and pose guard `i` if he is playing (or just broke) a scene. Call after his combat
  * pose. Returns true while the scene owns his root transform.
  */
 sync(i: number, v: SovietGuardVisual, g: { scene: { id: GuardSceneId; broken: boolean; brokeAt: number } | null; position: { x: number; z: number }; heading: number; hp: number; active: boolean },
  elapsed: number, dt: number, posed: boolean) {
  const st = g.scene;
  const props = this.props.get(i);
  if (props?.dropped) this.stepDropped(props, dt);
  if (!st || !g.active) { this.hideProps(props); return false; }
  const since = st.broken ? elapsed - st.brokeAt : -1;
  // Weight: 1 while the scene runs, eased to 0 over the stand-up.
  const w = st.broken ? 1 - s01(0, .55, since) : 1;
  const sc = guardScene(st.id);
  if (st.broken && since >= 0 && since < dt + 1e-3) this.breakProps(i, st.id, v);
  if (w <= 0 || g.hp <= 0) {
   this.hideProps(props);
   // Hand the seated bones back to the clip (it may not key their positions).
   const rig = sceneRigs.get(v.body);
   if (rig && !this.released.has(i)) {
    this.released.add(i);
    for (const n of ['Body_1', 'FootL', 'FootR']) rig.bones.get(n)!.position.copy(rig.rest.get(n)!.p);
   }
   return false;
  }
  this.released.delete(i);
  // Root: on the seat while seated, sliding onto his sim spot as he gets up.
  const k = 1 - w;
  v.root.position.set(THREE.MathUtils.lerp(sc.visual.x, g.position.x, k), FLOOR_Y, THREE.MathUtils.lerp(sc.visual.z, g.position.z, k));
  const dh = Math.atan2(Math.sin(g.heading - sc.visual.heading), Math.cos(g.heading - sc.visual.heading));
  v.root.rotation.y = sc.visual.heading + dh * k;
  // His rifle stays slung (hidden) until he is up.
  v.gun.visible = v.gun.visible && w < .35;
  const rig = sceneRigs.get(v.body);
  const t = elapsed + i * 3.7;
  const { pose, drink, drag } = scenePose(st.id, t);
  if (rig && posed) applyScenePose(rig, pose, w, rigFrame(v));
  if (!st.broken) this.syncProps(i, st.id, v, drink, drag);
  return true;
 }

 private propsFor(i: number, id: GuardSceneId) {
  let p = this.props.get(i);
  if (p) return p;
  p = {};
  if (id === 'teaSit') { p.mug = enamelMug(); this.scene.add(p.mug); }
  if (id === 'radio') { p.pencil = pencil(); this.scene.add(p.pencil); }
  if (id === 'teaTalk') { p.papirosa = papirosa(); p.ember = p.papirosa.userData.ember; this.scene.add(p.papirosa); }
  this.props.set(i, p);
  return p;
 }

 private hand(v: SovietGuardVisual, side: 'L' | 'R') {
  const rig = sceneRigs.get(v.body);
  const fist = rig?.bones.get('Fist' + side);
  if (!fist) return null;
  fist.updateWorldMatrix(true, false);
  return fist.getWorldPosition(this._p).clone();
 }

 private syncProps(i: number, id: GuardSceneId, v: SovietGuardVisual, drink: number, drag: number) {
  const p = this.propsFor(i, id);
  const at = this.hand(v, 'R');
  const yaw = v.root.rotation.y;
  if (!at) { this.hideProps(p); return; }
  const fwd = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)), right = new THREE.Vector3(-Math.cos(yaw), 0, Math.sin(yaw));
  if (p.mug) {
   // Held by the handle in his fist, tipped toward his mouth as he sips.
   p.mug.visible = true;
   p.mug.position.copy(at).addScaledVector(fwd, .05).addScaledVector(right, .02).add(new THREE.Vector3(0, -.03, 0));
   p.mug.rotation.set(0, 0, 0);
   p.mug.rotateY(yaw + Math.PI / 2);
   p.mug.rotateZ(-1.1 * drink);
  }
  if (p.pencil) {
   p.pencil.visible = true;
   p.pencil.position.copy(at).addScaledVector(fwd, .04).add(new THREE.Vector3(0, -.04, 0));
   p.pencil.rotation.set(0, yaw + .6, Math.PI / 2 - .9);
  }
  if (p.papirosa) {
   p.papirosa.visible = true;
   p.papirosa.position.copy(at).addScaledVector(fwd, .05).addScaledVector(right, -.01).add(new THREE.Vector3(0, .01, 0));
   p.papirosa.rotation.set(0, yaw - Math.PI / 2 + .4, .2);
   const e = p.ember!;
   const flare = .35 + .65 * drag + .1 * Math.sin(performance.now() * .013);
   e.scale.setScalar(.025 + .035 * flare);
   e.material.opacity = Math.min(1, .4 + flare);
  }
 }

 private hideProps(p?: Props) {
  if (!p) return;
  if (p.mug && !p.dropped?.some(d => d.o === p.mug)) p.mug.visible = false;
  if (p.pencil && !p.dropped?.some(d => d.o === p.pencil)) p.pencil.visible = false;
  if (p.papirosa && !p.dropped?.some(d => d.o === p.papirosa)) p.papirosa.visible = false;
 }

 /** The scene breaks: whatever he holds falls, the operator's stool goes over. */
 private breakProps(i: number, id: GuardSceneId, v: SovietGuardVisual) {
  const p = this.propsFor(i, id);
  const yaw = v.root.rotation.y;
  const back = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  p.dropped = [];
  for (const o of [p.mug, p.pencil, p.papirosa]) {
   if (!o?.visible) continue;
   p.dropped.push({ o, v: back.clone().multiplyScalar(-.6).add(new THREE.Vector3((Math.random() - .5) * .6, 1.2, (Math.random() - .5) * .6)), spin: new THREE.Vector3(5 + Math.random() * 4, Math.random() * 3, 3), rest: o === p.papirosa ? .005 : o === p.mug ? .045 : .004 });
  }
  if (id === 'radio') {
   let stool: THREE.Object3D | undefined;
   this.scene.traverse(o => { if (!stool && o.name === 'operatorStool') stool = o; });
   if (stool) this.stools.set('radio', { o: stool, t: 0, from: stool.rotation.clone(), fromP: stool.position.clone() });
  }
 }

 private stepDropped(p: Props, dt: number) {
  for (const d of p.dropped ?? []) {
   if (d.v.lengthSq() === 0) continue;
   d.v.y -= 9.81 * dt;
   d.o.position.addScaledVector(d.v, dt);
   d.o.rotation.x += d.spin.x * dt; d.o.rotation.y += d.spin.y * dt; d.o.rotation.z += d.spin.z * dt;
   const floor = FLOOR_Y + d.rest;
   if (d.o.position.y <= floor) {
    d.o.position.y = floor;
    // Lands on its side and stays there.
    d.o.rotation.set(Math.PI / 2, d.o.rotation.y, 0);
    d.v.set(0, 0, 0);
    if (d.o.userData.ember) (d.o.userData.ember as THREE.Sprite).material.opacity = .5;
   }
  }
  for (const [k, s] of this.stools) {
   s.t = Math.min(1, s.t + dt / .45);
   const e = s.t * s.t;
   s.o.rotation.set(s.from.x + 1.45 * e, s.from.y, s.from.z);
   s.o.position.set(s.fromP.x, s.fromP.y + .17 * Math.sin(Math.PI * s.t) * .3, s.fromP.z + .35 * e);
   if (s.t >= 1) this.stools.delete(k);
  }
 }
}
