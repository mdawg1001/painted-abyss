/**
 * Staged guard scenes: the opening garrison's entrance guards are caught mid-shift (radio
 * desk, tea on the crates), distracted until something puts them on alert, then they get up
 * and fight. The pose solver puts hands and feet where the scene asks.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { Mission, FLOOR_Y, WALK_EYE_Y, fits, isOpen, GUARD_BODY_RADIUS } from '../src/simulation';
import { guardScenes, guardScene } from '../src/guardScenes';
import { captureSceneRig, applyScenePose, rigFrame, scenePose } from '../src/guardSceneVisual';
import { SOVIET_ARCHETYPES, sovietArchetype, SOVIET_KITS } from '../src/guardArchetypes';
import { normalizeHumanoid } from '../src/sovietGuardAsset';

const seeded = (seed: number) => { let s = seed * 9301 + 49297; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; };
const wait = (m: Mission, s: number, fn?: () => void) => { for (let i = 0; i < Math.round(s * 60); i++) { fn?.(); m.update(1 / 60, false); } };
const staged = () => {
 const m = new Mission(true); m.rand = seeded(5); m.spawnGuards(); m.director.enabled = false;
 m.breathWaterY = FLOOR_Y - .1;
 return m;
};

test('three guards start mid-scene: operator at the entrance desk, quartermaster and conscript at the cavern crates', () => {
 const m = staged();
 const cast = m.guards.filter(g => g.active && g.scene);
 assert.deepEqual(cast.map(g => g.scene!.id).sort(), ['radio', 'teaSit', 'teaTalk']);
 // Their slots carry the matching cast: operator, quartermaster, conscript.
 assert.equal(sovietArchetype(m.guards.indexOf(cast.find(g => g.scene!.id === 'radio')!)).id, 'operator');
 assert.equal(sovietArchetype(m.guards.indexOf(cast.find(g => g.scene!.id === 'teaSit')!)).id, 'quartermaster');
 assert.equal(sovietArchetype(m.guards.indexOf(cast.find(g => g.scene!.id === 'teaTalk')!)).id, 'conscript');
 for (const s of guardScenes()) assert.ok(fits({ x: s.x, y: 3, z: s.z }, GUARD_BODY_RADIUS - .02) || isOpen(s.x, s.z), `${s.id} stands on open floor`);
 // With nobody about they hold their places and keep facing their work.
 m.position = { x: 500, y: WALK_EYE_Y, z: 500 };
 wait(m, 20, () => { m.position = { x: 500, y: WALK_EYE_Y, z: 500 }; });
 for (const g of cast) {
  const s = guardScene(g.scene!.id);
  assert.equal(g.state, 'patrol');
  assert.ok(!g.scene!.broken);
  assert.ok(Math.hypot(g.position.x - s.x, g.position.z - s.z) < .01, `${s.id} stays put`);
  assert.ok(Math.abs(g.heading - s.heading) < 1e-6);
 }
});

test('busy guards notice later; once one is on alert the scene breaks and he steps onto open floor', () => {
 const m = staged();
 const op = m.guards.find(g => g.scene?.id === 'radio')!;
 // Six metres straight in front of him, standing still, no torch: a guard on a post would see you.
 const ahead = (d: number) => ({ x: op.position.x + Math.sin(op.heading) * d, y: WALK_EYE_Y, z: op.position.z + Math.cos(op.heading) * d });
 let probe = ahead(6.5);
 if (!isOpen(probe.x, probe.z)) probe = { x: op.position.x - Math.sin(op.heading) * 6.5, y: WALK_EYE_Y, z: op.position.z - Math.cos(op.heading) * 6.5 };
 m.torch = false;
 wait(m, 1.5, () => { m.position = { ...probe }; });
 const sawFromFar = op.state !== 'patrol';
 // Right beside him he notices whatever he is doing.
 const close = { x: op.position.x + .9, y: WALK_EYE_Y, z: op.position.z };
 wait(m, 1.5, () => { m.position = { ...close }; });
 assert.notEqual(op.state, 'patrol');
 assert.ok(op.scene!.broken, 'the alert ends his scene');
 assert.ok(op.scene!.brokeAt >= 0);
 assert.ok(fits({ x: op.position.x, y: 3, z: op.position.z }, GUARD_BODY_RADIUS - .02), 'stood up onto open floor');
 // The six-metre probe is inside a patrol guard's 10 m in-view sight but beyond a busy guard's.
 assert.equal(sawFromFar, false, 'busy with the log, he missed a diver 6.5 m away');
});

test('a squad call breaks every scene in earshot and they never go back to it', () => {
 const m = staged();
 const tea = m.guards.find(g => g.scene?.id === 'teaSit')!;
 m.position = { x: 500, y: WALK_EYE_Y, z: 500 };
 m.squadAlert(tea, 'spotted');
 wait(m, .2, () => { m.position = { x: 500, y: WALK_EYE_Y, z: 500 }; });
 const talk = m.guards.find(g => g.scene?.id === 'teaTalk')!;
 assert.ok(tea.scene!.broken && talk.scene!.broken);
 wait(m, 60, () => { m.position = { x: 500, y: WALK_EYE_Y, z: 500 }; });
 assert.ok(tea.scene!.broken, 'a broken scene stays broken');
});

test('the scene solver puts hands and seated feet where the pose asks', async () => {
 const b = fs.readFileSync(new URL('../public/assets/soviet-cartoon-guard/guard.glb', import.meta.url));
 const gltf = await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer, '');
 normalizeHumanoid(gltf.scene);
 const body = clone(gltf.scene);
 const root = new THREE.Group(); root.add(body); root.scale.set(1.1, .95, 1.05);
 const rig = captureSceneRig(body)!;
 assert.ok(rig, 'rig captured');
 for (const id of ['radio', 'teaSit', 'teaTalk'] as const) {
  const { pose } = scenePose(id, 3.3);
  applyScenePose(rig, pose, 1, rigFrame({ root, body }));
  root.updateMatrixWorld(true);
  const head = new THREE.Vector3(); rig.bones.get('Head')!.getWorldPosition(head);
  for (const side of ['L', 'R'] as const) {
   const want = (side === 'L' ? pose.handL : pose.handR)?.(head);
   if (!want) continue;
   const got = rig.bones.get('Fist' + side)!.getWorldPosition(new THREE.Vector3());
   assert.ok(got.distanceTo(want.at) < .06, `${id} hand ${side} within 6 cm (${got.distanceTo(want.at).toFixed(3)})`);
  }
  if (pose.seat) {
   for (const side of ['L', 'R'] as const) {
    const got = rig.bones.get('Foot' + side)!.getWorldPosition(new THREE.Vector3());
    assert.ok(got.y < .1, `${id} ${side} foot on the floor`);
   }
   const hip = rig.bones.get('UpperLegL')!.getWorldPosition(new THREE.Vector3());
   assert.ok(Math.abs(hip.y - pose.seat.hipY) < .03, `${id} hips on the seat`);
  }
 }
});

test('every Soviet archetype only asks for kits the model ships', async () => {
 const b = fs.readFileSync(new URL('../public/assets/soviet-cartoon-guard/guard.glb', import.meta.url));
 const gltf = await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer, '');
 const names = new Set<string>(); gltf.scene.traverse(o => names.add(o.name));
 assert.ok(names.has('SovietCartoon'));
 for (const k of SOVIET_KITS) assert.ok(names.has(k), k);
 for (const a of SOVIET_ARCHETYPES) for (const k of a.kits) assert.ok(names.has(k), `${a.id}: ${k}`);
 assert.ok(SOVIET_ARCHETYPES.length >= 10, 'one per guard slot');
});
