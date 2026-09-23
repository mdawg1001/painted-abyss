import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,CORRIDOR_DOOR_PANEL_H,CORRIDOR_EYE_ABOVE_FLOOR,
 boneWorldBox,meshWorldBox,normalizeHumanoid,bindGuardBones,updateGuardAnimation,
 createSovietGuardVisual,
} from '../src/sovietGuardAsset';

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

async function loadGuardScene(){
 installImageStubs();
 const glbPath=path.join(root,'public',SOVIET_GUARD_GLB.replace(/^\//,''));
 const buf=fs.readFileSync(glbPath);
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 return new Promise<Awaited<ReturnType<GLTFLoader['parseAsync']>>>((resolve,reject)=>{
  new GLTFLoader().parse(ab,'',resolve,reject);
 });
}

test('Soviet guard mesh height is adult vs corridor door / eye',async()=>{
 assert.ok(SOVIET_GUARD_HEIGHT>=1.82&&SOVIET_GUARD_HEIGHT<=1.95,'target adult mesh height');
 assert.ok(SOVIET_GUARD_HEIGHT>CORRIDOR_EYE_ABOVE_FLOOR,'crown above standing eye offset');
 assert.ok(SOVIET_GUARD_HEIGHT<CORRIDOR_DOOR_PANEL_H,'shorter than 2.6 m door panels');
 const gltf=await loadGuardScene();
 assert.equal(gltf.animations.length,0,'authored GLB has no clips — procedural anim expected');
 const scene=gltf.scene;
 normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
 const mesh=meshWorldBox(scene);
 const meshH=mesh.max.y-mesh.min.y;
 assert.ok(Math.abs(meshH-SOVIET_GUARD_HEIGHT)<0.05,`mesh height ${meshH} ≈ ${SOVIET_GUARD_HEIGHT}`);
 assert.ok(Math.abs(mesh.min.y)<0.05,'mesh feet near local y=0');
 // SkeletonUtils clone must keep the same posed height (plain clone skins break in-engine).
 const cloned=cloneSkinned(scene);
 const parent=new THREE.Group();
 parent.add(cloned);
 parent.updateMatrixWorld(true);
 const cMesh=meshWorldBox(cloned);
 const cHeight=cMesh.max.y-cMesh.min.y;
 assert.ok(Math.abs(cHeight-SOVIET_GUARD_HEIGHT)<0.06,`cloned mesh height ${cHeight}`);
 const bones=boneWorldBox(cloned);
 assert.ok(bones.max.y-bones.min.y>1.5,'bones still span a human-sized figure');
});

test('Soviet guard procedural walk moves thigh bones off rest',async()=>{
 const gltf=await loadGuardScene();
 const scene=gltf.scene;
 normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
 const visual=createSovietGuardVisual();
 visual.root.remove(visual.body);
 const cloned=cloneSkinned(scene);
 cloned.name='sovietGuardMesh';
 visual.root.add(cloned);
 visual.body=cloned;
 visual.ready=true;
 visual.bones=bindGuardBones(cloned);
 assert.ok(visual.bones.thighL&&visual.bones.thighR,'found thigh bones');
 const restL=visual.bones.rest.get(visual.bones.thighL!)!.clone();
 updateGuardAnimation(visual,1/30,true);
 updateGuardAnimation(visual,1/30,true);
 updateGuardAnimation(visual,1/30,true);
 const q=visual.bones.thighL!.quaternion;
 const angle=restL.angleTo(q);
 assert.ok(angle>0.05,`walk swung thigh off rest (angle ${angle})`);
});
