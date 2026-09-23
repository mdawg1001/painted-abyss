/**
 * Bake Mixamo-quality procedural idle / walk / run clips onto the WW2 Soviet
 * Uniform skeleton (rotation tracks only).
 *
 * Why procedural: Quaternius UAL + Mixamo Soldier `SkeletonUtils.retargetClip`
 * both collapse this Sketchfab Unreal-style rest pose (incompatible bone axes).
 * The retarget script remains at `retarget-guard-locomotion.mjs` for a future
 * Blender/axis-fix pass. These clips are authored as local-Euler offsets on
 * the measured swing axes (thigh/calf local X, etc.) so feet stay plantable.
 *
 * Usage: node scripts/bake-guard-locomotion.mjs
 * Output: public/assets/soviet-uniform/guard-locomotion.json
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sovietGlb = path.join(root, 'public/assets/soviet-uniform/ww2_soviet_uniform.glb');
const outJson = path.join(root, 'public/assets/soviet-uniform/guard-locomotion.json');

function installDomStubs() {
  globalThis.self = globalThis;
  class FakeImage {
    width = 1; height = 1; onload = null; onerror = null; _src = '';
    set src(v) {
      this._src = v;
      queueMicrotask(() => { this.width = 4; this.height = 4; this.onload?.(); });
    }
    get src() { return this._src; }
  }
  globalThis.Image = FakeImage;
  globalThis.HTMLImageElement = FakeImage;
  globalThis.document = {
    createElementNS: () => new FakeImage(),
    createElement: () => new FakeImage(),
  };
  globalThis.createImageBitmap = async () => ({ width: 4, height: 4, close() {} });
}

/**
 * Local-space offsets applied as `rest * offset` so the bind pose stays the base.
 * Axes chosen by probing foot world motion on this GLB (thigh/calf swing = local X).
 */
const POSES = {
  idle: {
    duration: 3.2,
    fps: 30,
    bones: {
      pelvis_02: (t) => e(0.015 * Math.sin(t * Math.PI * 2), 0.02 * Math.sin(t * Math.PI * 2 + 0.4), 0.012 * Math.sin(t * Math.PI * 2 * 0.5)),
      spine_01_03: (t) => e(0.025 * Math.sin(t * Math.PI * 2), 0, 0.01 * Math.sin(t * Math.PI * 2 + 1)),
      spine_02_04: (t) => e(0.02 * Math.sin(t * Math.PI * 2 + 0.2), 0, 0),
      spine_03_05: (t) => e(0.015 * Math.sin(t * Math.PI * 2 + 0.4), 0, 0),
      clavicle_l_08: (t) => e(0, 0, 0.02 * Math.sin(t * Math.PI * 2)),
      clavicle_r_029: (t) => e(0, 0, -0.02 * Math.sin(t * Math.PI * 2)),
      upperarm_l_09: (t) => e(0.04 * Math.sin(t * Math.PI * 2 + 0.5), 0, 0.03),
      upperarm_r_030: (t) => e(0.04 * Math.sin(t * Math.PI * 2 + 0.5), 0, -0.03),
      head_07: (t) => e(0.02 * Math.sin(t * Math.PI * 2 * 0.5), 0.03 * Math.sin(t * Math.PI * 2 * 0.35), 0),
    },
  },
  walk: {
    duration: 1.0, // one full stride cycle at ~1.2 m/s
    fps: 30,
    bones: {
      pelvis_02: (t) => {
        const w = t * Math.PI * 2;
        return e(0.04 * Math.sin(w * 2), 0.08 * Math.sin(w), 0.05 * Math.sin(w * 2));
      },
      spine_01_03: (t) => e(0.05 * Math.sin(t * Math.PI * 2), 0.06 * Math.sin(t * Math.PI * 2 + Math.PI), 0),
      spine_02_04: (t) => e(0.03 * Math.sin(t * Math.PI * 2 + 0.2), 0.04 * Math.sin(t * Math.PI * 2 + Math.PI), 0),
      // Left leg (phase 0)
      thigh_l_056: (t) => e(0.55 * Math.sin(t * Math.PI * 2), 0.04 * Math.sin(t * Math.PI * 2), 0.03),
      calf_l_058: (t) => {
        const s = Math.sin(t * Math.PI * 2);
        // Knee bends more on rear swing / lift
        return e(0.15 + 0.55 * Math.max(0, -s), 0, 0);
      },
      foot_l_060: (t) => e(-0.2 * Math.sin(t * Math.PI * 2), 0, 0),
      // Right leg (phase π)
      thigh_r_050: (t) => e(0.55 * Math.sin(t * Math.PI * 2 + Math.PI), 0.04 * Math.sin(t * Math.PI * 2 + Math.PI), -0.03),
      calf_r_052: (t) => {
        const s = Math.sin(t * Math.PI * 2 + Math.PI);
        return e(0.15 + 0.55 * Math.max(0, -s), 0, 0);
      },
      foot_r_054: (t) => e(-0.2 * Math.sin(t * Math.PI * 2 + Math.PI), 0, 0),
      // Arms opposite to legs
      upperarm_l_09: (t) => e(0.45 * Math.sin(t * Math.PI * 2 + Math.PI), 0, 0.15),
      lowerarm_l_011: (t) => e(0.2 + 0.25 * Math.max(0, Math.sin(t * Math.PI * 2 + Math.PI)), 0, 0),
      upperarm_r_030: (t) => e(0.45 * Math.sin(t * Math.PI * 2), 0, -0.15),
      lowerarm_r_032: (t) => e(0.2 + 0.25 * Math.max(0, Math.sin(t * Math.PI * 2)), 0, 0),
      head_07: (t) => e(0.02, 0.04 * Math.sin(t * Math.PI * 2), 0),
    },
  },
  run: {
    duration: 0.72, // faster cycle for ~2.15 m/s chase
    fps: 30,
    bones: {
      pelvis_02: (t) => {
        const w = t * Math.PI * 2;
        return e(0.08 * Math.sin(w * 2), 0.12 * Math.sin(w), 0.08 * Math.sin(w * 2));
      },
      spine_01_03: (t) => e(0.12 + 0.06 * Math.sin(t * Math.PI * 2), 0.1 * Math.sin(t * Math.PI * 2 + Math.PI), 0),
      spine_02_04: (t) => e(0.08 + 0.04 * Math.sin(t * Math.PI * 2), 0.06 * Math.sin(t * Math.PI * 2 + Math.PI), 0),
      thigh_l_056: (t) => e(0.85 * Math.sin(t * Math.PI * 2), 0.06 * Math.sin(t * Math.PI * 2), 0.04),
      calf_l_058: (t) => {
        const s = Math.sin(t * Math.PI * 2);
        return e(0.25 + 0.85 * Math.max(0, -s), 0, 0);
      },
      foot_l_060: (t) => e(-0.3 * Math.sin(t * Math.PI * 2), 0, 0),
      thigh_r_050: (t) => e(0.85 * Math.sin(t * Math.PI * 2 + Math.PI), 0.06 * Math.sin(t * Math.PI * 2 + Math.PI), -0.04),
      calf_r_052: (t) => {
        const s = Math.sin(t * Math.PI * 2 + Math.PI);
        return e(0.25 + 0.85 * Math.max(0, -s), 0, 0);
      },
      foot_r_054: (t) => e(-0.3 * Math.sin(t * Math.PI * 2 + Math.PI), 0, 0),
      upperarm_l_09: (t) => e(0.7 * Math.sin(t * Math.PI * 2 + Math.PI), 0, 0.2),
      lowerarm_l_011: (t) => e(0.35 + 0.35 * Math.max(0, Math.sin(t * Math.PI * 2 + Math.PI)), 0, 0),
      upperarm_r_030: (t) => e(0.7 * Math.sin(t * Math.PI * 2), 0, -0.2),
      lowerarm_r_032: (t) => e(0.35 + 0.35 * Math.max(0, Math.sin(t * Math.PI * 2)), 0, 0),
      head_07: (t) => e(0.05, 0.05 * Math.sin(t * Math.PI * 2), 0),
    },
  },
};

function e(x, y, z) {
  return new THREE.Euler(x, y, z, 'XYZ');
}

function bakeClip(name, def, restQuats) {
  const nFrames = Math.max(2, Math.round(def.duration * def.fps));
  const dt = def.duration / (nFrames - 1);
  const tracks = [];
  const q = new THREE.Quaternion();
  const qOff = new THREE.Quaternion();

  for (const [boneName, fn] of Object.entries(def.bones)) {
    const rest = restQuats.get(boneName);
    if (!rest) continue;
    const times = new Float32Array(nFrames);
    const values = new Float32Array(nFrames * 4);
    for (let i = 0; i < nFrames; i++) {
      const t = i * dt;
      // Phase 0..1 over clip duration
      const phase = t / def.duration;
      times[i] = t;
      qOff.setFromEuler(fn(phase));
      q.copy(rest).multiply(qOff);
      q.toArray(values, i * 4);
    }
    tracks.push(new THREE.QuaternionKeyframeTrack(`.bones[${boneName}].quaternion`, times, values));
  }
  const clip = new THREE.AnimationClip(name, def.duration, tracks);
  return clip;
}

async function main() {
  installDomStubs();
  const buf = fs.readFileSync(sovietGlb);
  const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  const gltf = await new Promise((res, rej) => new GLTFLoader().parse(ab, '', res, rej));

  const restQuats = new Map();
  gltf.scene.traverse((o) => {
    if (o.isBone) restQuats.set(o.name, o.quaternion.clone());
  });
  console.log('rest bones', restQuats.size);

  const clips = [];
  for (const [name, def] of Object.entries(POSES)) {
    const clip = bakeClip(name, def, restQuats);
    clips.push(clip);
    console.log(`${name}: ${clip.duration.toFixed(2)}s, ${clip.tracks.length} tracks`);
  }

  // Sanity: play walk and check height stays adult
  let skin = null;
  gltf.scene.traverse((o) => { if (!skin && o.isSkinnedMesh) skin = o; });
  const mixer = new THREE.AnimationMixer(skin);
  mixer.clipAction(clips.find((c) => c.name === 'walk')).play();
  for (let i = 0; i < 20; i++) mixer.update(1 / 30);
  gltf.scene.updateMatrixWorld(true);
  const box = new THREE.Box3();
  let any = false;
  gltf.scene.traverse((o) => {
    if (!o.isBone) return;
    const p = new THREE.Vector3();
    o.getWorldPosition(p);
    if (!any) { box.set(p, p); any = true; }
    else box.expandByPoint(p);
  });
  const h = box.max.y - box.min.y;
  console.log(`walk pose bone H=${h.toFixed(3)} minY=${box.min.y.toFixed(3)}`);
  if (h < 1.2 || Math.abs(box.min.y) > 0.35) {
    console.warn('Walk pose looks collapsed — tune amplitudes.');
  }

  const payload = {
    source: 'Procedural Mixamo-style locomotion (authored on WW2 Soviet Uniform skeleton)',
    sourceUrl: 'playable/scripts/bake-guard-locomotion.mjs',
    note: 'Quaternius UAL + Mixamo Soldier SkeletonUtils.retargetClip failed (rest-pose axis mismatch). See retarget-guard-locomotion.mjs for the open Mixamo/CC0 path.',
    clips: Object.fromEntries(clips.map((c) => [c.name, THREE.AnimationClip.toJSON(c)])),
  };
  fs.writeFileSync(outJson, JSON.stringify(payload));
  console.log('wrote', outJson, `(${(fs.statSync(outJson).size / 1024).toFixed(0)} KB)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
