/**
 * Attempt: retarget Quaternius Universal Animation Library (CC0) Idle/Walk/Jog
 * onto the WW2 Soviet Uniform skeleton via SkeletonUtils.retargetClip.
 *
 * Status: FAILED in practice — Quaternius (and Mixamo Soldier) rest-pose bone
 * axes are incompatible with this Sketchfab Unreal-style rig; world-space and
 * local-delta retargets collapse height. Kept as the open Mixamo/CC0 path for a
 * future Blender/axis-fix pass. Shipped clips come from bake-guard-locomotion.mjs.
 *
 * Usage:
 *   node scripts/retarget-guard-locomotion.mjs /path/to/UAL1_Standard.fbx
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { retargetClip } from 'three/examples/jsm/utils/SkeletonUtils.js';
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
  const canvas = () => ({
    width: 4, height: 4,
    getContext: () => ({
      fillRect() {}, drawImage() {},
      getImageData: () => ({ data: new Uint8ClampedArray(4) }),
      putImageData() {},
    }),
    toDataURL: () => 'data:image/png;base64,iVBORw0KGgo=',
  });
  globalThis.document = {
    createElementNS: () => new FakeImage(),
    createElement: (t) => (t === 'canvas' ? canvas() : new FakeImage()),
  };
  globalThis.createImageBitmap = async () => ({ width: 4, height: 4, close() {} });
  globalThis.OffscreenCanvas = class {
    constructor(w, h) { this.width = w; this.height = h; }
    getContext() {
      return {
        fillRect() {}, drawImage() {},
        getImageData: () => ({ data: new Uint8ClampedArray(4) }),
        putImageData() {},
      };
    }
  };
}

function findSkinned(rootObj) {
  let mesh = null;
  rootObj.traverse((o) => { if (!mesh && o.isSkinnedMesh) mesh = o; });
  return mesh;
}

/** Strip Sketchfab numeric suffixes: pelvis_02 → pelvis, spine_01_03 → spine_01, ball_l_00 → ball_l */
function coreName(boneName) {
  return boneName.replace(/_0*\d+$/, '').toLowerCase();
}

function buildNameMap(targetBones, sourceBones) {
  const srcByCore = new Map();
  for (const b of sourceBones) {
    const c = coreName(b.name.replace(/_leaf(_[lr])?$/i, ''));
    srcByCore.set(c, b.name);
    srcByCore.set(b.name.toLowerCase(), b.name);
  }
  // Quaternius uses "Head" with capital H
  if (!srcByCore.has('head')) {
    const h = sourceBones.find((s) => s.name.toLowerCase() === 'head');
    if (h) srcByCore.set('head', h.name);
  }
  const names = {};
  for (const b of targetBones) {
    const c = coreName(b.name);
    const src = srcByCore.get(c);
    if (src) names[b.name] = src;
  }
  return names;
}

/**
 * Drop translation tracks. Quaternius root/hip positions fight our world
 * locomotion and sink feet through the floor after retarget scale mismatch.
 * Rotation-only clips keep stride quality; the game drives XZ translation.
 */
function stripPositionTracks(clip) {
  clip.tracks = clip.tracks.filter((tr) => !tr.name.endsWith('.position'));
}

async function main() {
  installDomStubs();
  const fbxPath = process.argv[2] || '/tmp/ual/UAL1_Standard.fbx';
  if (!fs.existsSync(fbxPath)) {
    console.error('Missing Quaternius FBX:', fbxPath);
    process.exit(1);
  }

  const sovietBuf = fs.readFileSync(sovietGlb);
  const sab = sovietBuf.buffer.slice(sovietBuf.byteOffset, sovietBuf.byteOffset + sovietBuf.byteLength);
  const sovietGltf = await new Promise((res, rej) => new GLTFLoader().parse(sab, '', res, rej));
  const targetSkin = findSkinned(sovietGltf.scene);
  if (!targetSkin) throw new Error('Soviet GLB has no SkinnedMesh');

  const fbxBuf = fs.readFileSync(fbxPath);
  const fab = fbxBuf.buffer.slice(fbxBuf.byteOffset, fbxBuf.byteOffset + fbxBuf.byteLength);
  const fbx = new FBXLoader().parse(fab, '');
  const sourceSkin = findSkinned(fbx);
  if (!sourceSkin) throw new Error('UAL FBX has no SkinnedMesh');

  const names = buildNameMap(targetSkin.skeleton.bones, sourceSkin.skeleton.bones);
  console.log(`bone map ${Object.keys(names).length}/${targetSkin.skeleton.bones.length}`);
  for (const [t, s] of Object.entries(names)) console.log(`  ${t} <- ${s}`);

  const wanted = {
    idle: 'Armature|Idle_Loop',
    walk: 'Armature|Walk_Loop',
    run: 'Armature|Jog_Fwd_Loop',
  };

  const clips = [];
  for (const [key, srcName] of Object.entries(wanted)) {
    const clip = fbx.animations.find((a) => a.name === srcName);
    if (!clip) throw new Error(`Missing clip ${srcName}`);
    console.log(`retarget ${srcName} (${clip.duration.toFixed(2)}s, ${clip.tracks.length} tracks)`);
    const rt = retargetClip(targetSkin, sourceSkin, clip, {
      names,
      hip: 'pelvis',
      useFirstFramePosition: true,
      fps: 30,
      preserveBonePositions: true,
    });
    rt.name = key;
    stripPositionTracks(rt);
    console.log(`  -> ${rt.tracks.length} tracks`);
    clips.push(rt);
  }

  const payload = {
    source: 'Quaternius Universal Animation Library (CC0)',
    sourceUrl: 'https://quaternius.com/packs/universalanimationlibrary.html',
    clips: Object.fromEntries(clips.map((c) => [c.name, THREE.AnimationClip.toJSON(c)])),
  };
  fs.writeFileSync(outJson, JSON.stringify(payload));
  console.log('wrote', outJson, `(${(fs.statSync(outJson).size / 1024).toFixed(0)} KB)`);
  for (const c of clips) {
    console.log(`  ${c.name}: ${c.duration.toFixed(2)}s, ${c.tracks.length} tracks`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
