import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,CORRIDOR_DOOR_PANEL_H,CORRIDOR_EYE_ABOVE_FLOOR,
 meshWorldBox,bindPoseMeshHeight,bakeSkinnedMeshes,normalizeHumanoid,
 updateGuardAnimation,createSovietGuardVisual,
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

async function loadRawScene(){
 installImageStubs();
 const glbPath=path.join(root,'public',SOVIET_GUARD_GLB.replace(/^\//,''));
 const buf=fs.readFileSync(glbPath);
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 return new Promise<Awaited<ReturnType<GLTFLoader['parseAsync']>>>((resolve,reject)=>{
  new GLTFLoader().parse(ab,'',resolve,reject);
 });
}

test('raw Sketchfab bind-pose is toy-sized vs skinned AABB (why we bake)',async()=>{
 const gltf=await loadRawScene();
 assert.equal(gltf.animations.length,0,'no authored clips');
 const scene=gltf.scene;
 scene.updateMatrixWorld(true);
 const bindH=bindPoseMeshHeight(scene);
 const skinnedH=new THREE.Box3().setFromObject(scene).max.y-new THREE.Box3().setFromObject(scene).min.y;
 assert.ok(bindH>0.05&&bindH<0.8,`bind-pose toy height ${bindH}`);
 assert.ok(skinnedH>1.5,`skinned/bone AABB ${skinnedH} looks adult (misleading)`);
 assert.ok(bindH<skinnedH*.5,'bind pose much shorter than setFromObject — bake required');
});

test('baked Soviet guard mesh is adult vs corridor door / eye',async()=>{
 assert.ok(SOVIET_GUARD_HEIGHT>=1.9&&SOVIET_GUARD_HEIGHT<=2.05,'tall adult target');
 assert.ok(SOVIET_GUARD_HEIGHT>CORRIDOR_EYE_ABOVE_FLOOR);
 assert.ok(SOVIET_GUARD_HEIGHT<CORRIDOR_DOOR_PANEL_H);
 const gltf=await loadRawScene();
 const scene=gltf.scene;
 const n=bakeSkinnedMeshes(scene);
 assert.ok(n>=1,`baked ${n} skinned meshes`);
 let left=0;
 scene.traverse(o=>{if((o as THREE.SkinnedMesh).isSkinnedMesh)left++;});
 assert.equal(left,0,'no SkinnedMesh left after bake');
 normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
 const mesh=meshWorldBox(scene);
 const meshH=mesh.max.y-mesh.min.y;
 assert.ok(Math.abs(meshH-SOVIET_GUARD_HEIGHT)<0.05,`mesh height ${meshH}`);
 assert.ok(Math.abs(mesh.min.y)<0.05,'feet near local y=0');
 // Plain clone of baked mesh keeps height (no skin to break).
 const cloned=scene.clone(true);
 const parent=new THREE.Group();
 parent.add(cloned);
 parent.updateMatrixWorld(true);
 const cH=meshWorldBox(cloned).max.y-meshWorldBox(cloned).min.y;
 assert.ok(Math.abs(cH-SOVIET_GUARD_HEIGHT)<0.06,`cloned height ${cH}`);
});

test('procedural walk bobs the guard body off rest',()=>{
 const visual=createSovietGuardVisual();
 const y0=visual.body.position.y;
 updateGuardAnimation(visual,1/30,true);
 updateGuardAnimation(visual,1/30,true);
 updateGuardAnimation(visual,1/30,true);
 assert.ok(Math.abs(visual.body.position.y-y0)>0.01||Math.abs(visual.body.rotation.z)>0.01,'walk bob/sway');
});
