/**
 * Retarget Kevin Iglesias "Human Melee Animations FREE" clips (Unity Asset Store, standard EULA)
 * onto the corridor guard (Quaternius Soldier_Male rig).
 *
 * Why the earlier retarget attempt failed and this one doesn't: SkeletonUtils.retargetClip copies
 * local rotations, which only works when both rigs share bone axes. These two rigs do not (the
 * Unity rig's bones run along +X/−X, Quaternius's along +Y). So this works in world space:
 *
 *   targetWorld(t) = [ srcWorld(t) · srcBindWorld⁻¹ ] · align · targetBindWorld
 *
 * i.e. every bone gets the same world-space rotation the source bone made since its bind pose
 * (both rigs bind in a T-pose facing +Z), with `align` a tiny swing that takes up the leftover
 * difference in each bone's bind direction. Locals come back out through the target hierarchy.
 * The pelvis travels with the source hips (scaled by leg length); Quaternius's feet are IK bones
 * parented to the root, so each foot is placed at the end of its retargeted shin by forward
 * kinematics instead of copied, which keeps the foot on the leg whatever the proportions.
 *
 * Input: the .unitypackage from ~/Library/Unity/Asset Store-5.x (FBX clips are converted with
 * FBX2glTF: `npm i fbx2gltf`). Output: public/assets/soviet-uniform/guard-actions.json
 * (THREE.AnimationClip JSON, bone names of the Quaternius rig).
 *
 * Usage: node scripts/retarget-kevin-iglesias.mjs "<Human Melee Animations FREE.unitypackage>" [FBX2glTF binary]
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import zlib from 'node:zlib';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GUARD_GLB = path.join(root, 'public/assets/soviet-uniform/quaternius_soldier_male.glb');
const OUT = path.join(root, 'public/assets/soviet-uniform/guard-actions.json');
const FPS = 30;

/** Clips to bring over: [unity path under Animations/Male, name in game]. */
const CLIPS = [
 ['Combat/HumanM@Death01.fbx', 'death'],
 ['Combat/HumanM@CombatDamage01.fbx', 'hit'],
 ['Combat/1H/HumanM@Attack1H01_R.fbx', 'stab'],
];

/** Quaternius bone ← Kevin Iglesias bone. */
const MAP = {
 Body_1: 'B-hips', Hips: 'B-hips', Abdomen: 'B-spine', Torso: 'B-chest', Neck: 'B-neck', Head: 'B-head',
 ShoulderL: 'B-shoulderL', UpperArmL: 'B-upperArmL', LowerArmL: 'B-forearmL', FistL: 'B-handL',
 ShoulderR: 'B-shoulderR', UpperArmR: 'B-upperArmR', LowerArmR: 'B-forearmR', FistR: 'B-handR',
 UpperLegL: 'B-thighL', LowerLegL: 'B-shinL', FootL: 'B-footL',
 UpperLegR: 'B-thighR', LowerLegR: 'B-shinR', FootR: 'B-footR',
};
/** Bone whose bind direction (toward this child) is matched by the align swing. */
const CHILD = {
 Abdomen: 'Torso', Torso: 'Neck', Neck: 'Head', ShoulderL: 'UpperArmL', UpperArmL: 'LowerArmL', LowerArmL: 'FistL',
 ShoulderR: 'UpperArmR', UpperArmR: 'LowerArmR', LowerArmR: 'FistR', UpperLegL: 'LowerLegL', UpperLegR: 'LowerLegR',
};
const SRC_CHILD = {
 'B-spine': 'B-chest', 'B-chest': 'B-neck', 'B-neck': 'B-head', 'B-shoulderL': 'B-upperArmL', 'B-upperArmL': 'B-forearmL', 'B-forearmL': 'B-handL',
 'B-shoulderR': 'B-upperArmR', 'B-upperArmR': 'B-forearmR', 'B-forearmR': 'B-handR', 'B-thighL': 'B-shinL', 'B-thighR': 'B-shinR',
};
/** Minimum height (Quaternius units, bind height ≈ 2.2) of each joint above the floor. */
const FLOOR_CLEAR = {
 Body_1: 0.16, Hips: 0.16, Abdomen: 0.17, Torso: 0.18, Neck: 0.2, Head: 0.3,
 UpperArmL: 0.08, LowerArmL: 0.07, FistL: 0.06, UpperArmR: 0.08, LowerArmR: 0.07, FistR: 0.06,
 UpperLegL: 0.1, LowerLegL: 0.08, UpperLegR: 0.1, LowerLegR: 0.08, FootL: 0.02, FootR: 0.02,
};
/** Shin → foot, for placing the IK feet. */
const FOOT_OF = { FootL: 'LowerLegL', FootR: 'LowerLegR' };

function installDomStubs() {
 globalThis.self = globalThis;
 class FakeImage { width = 1; height = 1; onload = null; addEventListener(e, f) { if (e === 'load') queueMicrotask(f); } removeEventListener() {} set src(v) { queueMicrotask(() => this.onload?.()); } }
 globalThis.Image = FakeImage;
 const ctx = { fillRect() {}, drawImage() {}, getImageData: () => ({ data: new Uint8ClampedArray(4) }), putImageData() {} };
 globalThis.document = { createElementNS: () => new FakeImage(), createElement: t => (t === 'canvas' ? { width: 4, height: 4, getContext: () => ctx, style: {} } : new FakeImage()) };
 globalThis.createImageBitmap = async () => ({ width: 4, height: 4, close() {} });
 globalThis.window ??= globalThis;
}

const ab = p => { const b = fs.readFileSync(p); return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength); };
const loadGlb = p => new Promise((res, rej) => new GLTFLoader().parse(ab(p), '', res, rej));

/** Minimal .unitypackage reader: gzipped tar of <guid>/{pathname,asset}. */
function unpack(pkg) {
 const tar = zlib.gunzipSync(fs.readFileSync(pkg));
 const by = {};
 for (let o = 0; o + 512 <= tar.length;) {
  const name = tar.subarray(o, o + 100).toString().replace(/\0.*$/s, '');
  if (!name) break;
  const size = parseInt(tar.subarray(o + 124, o + 136).toString().replace(/\0.*$/s, '').trim() || '0', 8);
  const body = tar.subarray(o + 512, o + 512 + size);
  const parts = name.replace(/^\.\//, '').split('/');
  if (parts.length === 2 && parts[1]) (by[parts[0]] ??= {})[parts[1]] = body;
  o += 512 + Math.ceil(size / 512) * 512;
 }
 const files = {};
 for (const f of Object.values(by)) if (f.pathname && f.asset) files[f.pathname.toString().split('\n')[0].trim()] = f.asset;
 return files;
}

function bindWorld(skinned) {
 const out = {};
 skinned.skeleton.bones.forEach((b, i) => {
  const m = skinned.skeleton.boneInverses[i].clone().invert();
  const p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  m.decompose(p, q, s);
  out[b.name] = { p, q, bone: b };
 });
 return out;
}

async function main() {
 installDomStubs();
 const [pkg, fbx2gltf = path.join(root, 'node_modules/fbx2gltf/bin/Linux/FBX2glTF')] = process.argv.slice(2);
 const files = unpack(pkg);
 const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ki-'));
 const K = 'Assets/Kevin Iglesias/Human Animations/';
 const toGlb = (rel, name) => {
  const fbx = path.join(tmp, name + '.fbx');
  fs.writeFileSync(fbx, files[K + rel]);
  execFileSync(fbx2gltf, ['--binary', '--input', fbx, '--output', path.join(tmp, name)], { stdio: 'ignore' });
  return path.join(tmp, name + '.glb');
 };

 // Target: guard bind pose and hierarchy.
 const guard = await loadGlb(GUARD_GLB);
 let tSkin; guard.scene.traverse(o => { if (o.isSkinnedMesh && !tSkin) tSkin = o; });
 const tBind = bindWorld(tSkin);
 const tBones = tSkin.skeleton.bones;
 const parentOf = b => (b.parent && b.parent.isBone ? b.parent.name : null);
 // Bind locals (the node rest in the GLB is a posed frame, not the bind pose).
 const tLocal = {};
 for (const b of tBones) {
  const pn = parentOf(b), W = tBind[b.name];
  if (!pn) { tLocal[b.name] = { p: W.p.clone(), q: W.q.clone() }; continue; }
  const P = tBind[pn], iq = P.q.clone().invert();
  tLocal[b.name] = { p: W.p.clone().sub(P.p).applyQuaternion(iq), q: iq.multiply(W.q.clone()) };
 }

 // Source: bind pose from the model.
 const model = await loadGlb(toGlb('Models/HumanM_Model.fbx', 'model'));
 let sSkin; model.scene.traverse(o => { if (o.isSkinnedMesh && !sSkin) sSkin = o; });
 const sBind = bindWorld(sSkin);

 // Align swings (bind direction differences) and scale.
 const dir = (bind, a, b) => bind[b].p.clone().sub(bind[a].p).normalize();
 const align = {};
 for (const [t, s] of Object.entries(MAP)) {
  align[t] = new THREE.Quaternion();
  if (CHILD[t] && SRC_CHILD[s]) align[t].setFromUnitVectors(dir(tBind, t, CHILD[t]), dir(sBind, s, SRC_CHILD[s]));
 }
 const legT = tBind.UpperLegL.p.distanceTo(tBind.LowerLegL.p) + tBind.LowerLegL.p.distanceTo(tBind.FootL.p);
 const legS = sBind['B-thighL'].p.distanceTo(sBind['B-shinL'].p) + sBind['B-shinL'].p.distanceTo(sBind['B-footL'].p);
 const scale = legT / legS;

 const clips = [];
 for (const [rel, name] of CLIPS) {
  const src = await loadGlb(toGlb('Animations/Male/' + rel, name));
  const clip = src.animations[0];
  const nodes = {}; src.scene.traverse(o => { nodes[o.name] = o; });
  const mixer = new THREE.AnimationMixer(src.scene);
  const act = mixer.clipAction(clip); act.play();
  const n = Math.max(2, Math.round(clip.duration * FPS) + 1);
  const times = [], rot = {}, pos = {};
  let reach = -Infinity, hitTime = 0;
  for (const b of tBones) { rot[b.name] = []; pos[b.name] = []; }
  for (let k = 0; k < n; k++) {
   const t = Math.min(clip.duration, k / FPS);
   times.push(t);
   mixer.setTime(t); src.scene.updateMatrixWorld(true);
   const sw = {};
   for (const s of new Set(Object.values(MAP))) {
    sw[s] = { q: nodes[s].getWorldQuaternion(new THREE.Quaternion()), p: nodes[s].getWorldPosition(new THREE.Vector3()) };
   }
   // Target world rotations.
   const wq = {}, wp = {};
   const solve = b => {
    const pn = parentOf(b);
    const L = tLocal[b.name];
    const pq = pn ? wq[pn] : new THREE.Quaternion(), pp = pn ? wp[pn] : new THREE.Vector3();
    const s = MAP[b.name];
    if (s) {
     const delta = sw[s].q.clone().multiply(sBind[s].q.clone().invert());
     wq[b.name] = delta.multiply(align[b.name].clone()).multiply(tBind[b.name].q.clone());
    } else wq[b.name] = pq.clone().multiply(L.q);
    wp[b.name] = pp.clone().add(L.p.clone().applyQuaternion(pq));
    if (b.name === 'Body_1') {
     // Pelvis travels with the source hips (scaled).
     wp[b.name] = tBind.Body_1.p.clone().add(sw['B-hips'].p.clone().sub(sBind['B-hips'].p).multiplyScalar(scale));
    }
    for (const c of b.children) if (c.isBone) solve(c);
   };
   for (const b of tBones) if (!parentOf(b)) solve(b);
   // IK feet: at the end of the retargeted shin.
   for (const [foot, shin] of Object.entries(FOOT_OF)) {
    const off = tBind[foot].p.clone().sub(tBind[shin].p).applyQuaternion(tBind[shin].q.clone().invert());
    wp[foot] = wp[shin].clone().add(off.applyQuaternion(wq[shin]));
   }
   // Keep the body out of the floor: a limb joint sits a limb's radius above it at least
   // (the chibi head is big). Lift the pelvis — and so everything — by whatever is missing.
   let lift = 0;
   for (const [bone, r] of Object.entries(FLOOR_CLEAR)) lift = Math.max(lift, r - wp[bone].y);
   if (lift > 0) for (const b of tBones) wp[b.name].y += lift;
   // Strike frame: the right fist furthest out in front of the pelvis.
   const fwd = wp.FistR.z - wp.Body_1.z;
   if (fwd > reach) { reach = fwd; hitTime = t; }
   // Back to locals.
   for (const b of tBones) {
    const pn = parentOf(b);
    const iq = pn ? wq[pn].clone().invert() : new THREE.Quaternion();
    const lp = pn ? wp[b.name].clone().sub(wp[pn]).applyQuaternion(iq) : wp[b.name].clone();
    const lq = iq.multiply(wq[b.name]);
    rot[b.name].push(...lq.toArray());
    pos[b.name].push(...lp.toArray());
   }
  }
  const tracks = [];
  for (const b of tBones) {
   // Keep quaternion signs continuous for clean interpolation.
   const r = rot[b.name];
   for (let i = 4; i < r.length; i += 4) {
    if (r[i] * r[i - 4] + r[i + 1] * r[i - 3] + r[i + 2] * r[i - 2] + r[i + 3] * r[i - 1] < 0) for (let j = 0; j < 4; j++) r[i + j] = -r[i + j];
   }
   tracks.push(new THREE.QuaternionKeyframeTrack(`${b.name}.quaternion`, times, r.map(v => +v.toFixed(5))));
   tracks.push(new THREE.VectorKeyframeTrack(`${b.name}.position`, times, pos[b.name].map(v => +v.toFixed(5))));
  }
  const json = THREE.AnimationClip.toJSON(new THREE.AnimationClip(name, clip.duration, tracks));
  json.hitTime = +hitTime.toFixed(3);
  clips.push(json);
  console.log(`${name}: ${clip.duration.toFixed(2)} s, ${n} frames, fist furthest out at ${hitTime.toFixed(2)} s`);
 }
 fs.writeFileSync(OUT, JSON.stringify({
  source: 'Kevin Iglesias — Human Melee Animations FREE (Unity Asset Store, standard EULA)',
  url: 'https://assetstore.unity.com/packages/3d/animations/human-melee-animations-free-165785',
  retarget: 'scripts/retarget-kevin-iglesias.mjs',
  legScale: +scale.toFixed(4),
  clips,
 }));
 console.log('wrote', path.relative(root, OUT), (fs.statSync(OUT).size / 1024).toFixed(0) + ' KB');
}

main().catch(e => { console.error(e); process.exit(1); });
