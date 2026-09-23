import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,boneWorldBox,normalizeHumanoid,
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

test('Soviet guard normalizes to human height via bones (not toy bind-pose)',async()=>{
 assert.ok(SOVIET_GUARD_HEIGHT>=1.7&&SOVIET_GUARD_HEIGHT<=1.85);
 installImageStubs();
 const glbPath=path.join(root,'public',SOVIET_GUARD_GLB.replace(/^\//,''));
 const buf=fs.readFileSync(glbPath);
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 const gltf=await new Promise<Awaited<ReturnType<GLTFLoader['parseAsync']>>>((resolve,reject)=>{
  new GLTFLoader().parse(ab,'',resolve,reject);
 });
 const scene=gltf.scene;
 normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
 const box=boneWorldBox(scene);
 const height=box.max.y-box.min.y;
 assert.ok(Math.abs(height-SOVIET_GUARD_HEIGHT)<0.04,`bone height ${height} ≈ ${SOVIET_GUARD_HEIGHT}`);
 assert.ok(Math.abs(box.min.y)<0.05,'feet near local y=0');
 // SkeletonUtils clone must keep the same posed height (plain clone skins break in-engine).
 const cloned=cloneSkinned(scene);
 const parent=new THREE.Group();
 parent.add(cloned);
 parent.updateMatrixWorld(true);
 const cBox=boneWorldBox(cloned);
 const cHeight=cBox.max.y-cBox.min.y;
 assert.ok(Math.abs(cHeight-SOVIET_GUARD_HEIGHT)<0.05,`cloned bone height ${cHeight}`);
});
