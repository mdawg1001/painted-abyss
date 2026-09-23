import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,SOVIET_GUARD_LOCOMOTION,
 boneWorldBox,meshWorldBox,normalizeHumanoid,
 attachGuardLocomotion,updateGuardLocomotion,
} from '../src/sovietGuardAsset';
import {FLOOR_Y,WALK_EYE_Y} from '../src/simulation';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

/** Minimal DOM stubs so GLTFLoader can decode embedded textures in Node. */
function installImageStubs(){
 (globalThis as unknown as {self:unknown}).self=globalThis;
 class FakeImage{
  width=1;height=1;onload:(()=>void)|null=null;onerror:((e?:unknown)=>void)|null=null;_src='';
  set src(v:string){this._src=v;queueMicrotask(()=>{this.width=4;this.height=4;this.onload?.();});}
  get src(){return this._src;}
 }
 (globalThis as unknown as {Image:unknown}).Image=FakeImage;
 (globalThis as unknown as {HTMLImageElement:unknown}).HTMLImageElement=FakeImage;
 (globalThis as unknown as {document:unknown}).document={
  createElementNS:()=>new FakeImage(),
  createElement:()=>new FakeImage(),
 };
 (globalThis as unknown as {createImageBitmap:unknown}).createImageBitmap=async()=>({width:4,height:4,close(){}});
}

async function loadSovietScene(){
 installImageStubs();
 const glbPath=path.join(root,'public',SOVIET_GUARD_GLB.replace(/^\//,''));
 const buf=fs.readFileSync(glbPath);
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 const gltf=await new Promise<Awaited<ReturnType<GLTFLoader['parseAsync']>>>((resolve,reject)=>{
  new GLTFLoader().parse(ab,'',resolve,reject);
 });
 return gltf.scene;
}

test('Soviet guard normalizes to adult mesh height (not toy bind-pose)',async()=>{
 assert.ok(SOVIET_GUARD_HEIGHT>=1.85&&SOVIET_GUARD_HEIGHT<=2.0);
 const scene=await loadSovietScene();
 normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
 const box=meshWorldBox(scene);
 const height=box.max.y-box.min.y;
 assert.ok(Math.abs(height-SOVIET_GUARD_HEIGHT)<0.05,`mesh height ${height} ≈ ${SOVIET_GUARD_HEIGHT}`);
 assert.ok(Math.abs(box.min.y)<0.05,'feet near local y=0');
 // Crown near player eye when feet on FLOOR_Y, below hatch door (~FLOOR_Y+2.3).
 const crownWorld=FLOOR_Y+height;
 assert.ok(crownWorld>=WALK_EYE_Y-.05,`crown ${crownWorld} near eye ${WALK_EYE_Y}`);
 assert.ok(crownWorld<=FLOOR_Y+2.35,`crown ${crownWorld} below door top`);
 // SkeletonUtils clone must keep the same posed height.
 const cloned=cloneSkinned(scene);
 const parent=new THREE.Group();
 parent.add(cloned);
 parent.updateMatrixWorld(true);
 const cBox=meshWorldBox(cloned);
 const cHeight=cBox.max.y-cBox.min.y;
 assert.ok(Math.abs(cHeight-SOVIET_GUARD_HEIGHT)<0.06,`cloned mesh height ${cHeight}`);
});

test('procedural idle/walk/run clips ship and drive the skeleton',async()=>{
 const locoPath=path.join(root,'public',SOVIET_GUARD_LOCOMOTION.replace(/^\//,''));
 assert.ok(fs.existsSync(locoPath),'guard-locomotion.json present');
 const payload=JSON.parse(fs.readFileSync(locoPath,'utf8')) as{
  source:string;
  clips:{idle:object;walk:object;run:object};
 };
 assert.match(payload.source,/[Pp]rocedural|Quaternius|Mixamo/);
 const clips={
  idle:THREE.AnimationClip.parse(payload.clips.idle as THREE.AnimationClipJSON),
  walk:THREE.AnimationClip.parse(payload.clips.walk as THREE.AnimationClipJSON),
  run:THREE.AnimationClip.parse(payload.clips.run as THREE.AnimationClipJSON),
 };
 assert.ok(clips.idle.duration>1);
 assert.ok(clips.walk.duration>.5);
 assert.ok(clips.run.duration>.5);
 // Rotation-only (no skating root translation).
 for(const c of Object.values(clips)){
  assert.ok(c.tracks.every(t=>!t.name.endsWith('.position')),`${c.name} has no position tracks`);
  assert.ok(c.tracks.length>=8,`${c.name} has enough bone tracks`);
 }

 const scene=await loadSovietScene();
 normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
 const instance=cloneSkinned(scene);
 instance.name='sovietGuardMesh';
 const group=new THREE.Group();
 group.name='sovietGuard';
 group.add(instance);
 const loco=attachGuardLocomotion(instance,clips);
 assert.ok(loco,'mixer attached');
 assert.equal(loco!.current,'idle');

 // Idle → walk crossfade while moving at patrol speed.
 updateGuardLocomotion(loco!,.05,{moving:true,speed:1.2,state:'patrol'});
 assert.equal(loco!.current,'walk');
 for(let i=0;i<10;i++)updateGuardLocomotion(loco!,1/30,{moving:true,speed:1.2,state:'patrol'});
 const walkBox=boneWorldBox(instance);
 assert.ok(Math.abs(walkBox.min.y)<0.08,`planted feet minY=${walkBox.min.y}`);

 // Chase → run.
 updateGuardLocomotion(loco!,.05,{moving:true,speed:2.15,state:'chase'});
 assert.equal(loco!.current,'run');

 // Stop at water → idle.
 updateGuardLocomotion(loco!,.05,{moving:false,speed:0,state:'chase'});
 assert.equal(loco!.current,'idle');
 const idleBox=boneWorldBox(instance);
 assert.ok(Math.abs(idleBox.min.y)<0.08,`idle feet minY=${idleBox.min.y}`);
});
