import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {normalizeHumanoid,SOVIET_GUARD_HEIGHT} from '../src/sovietGuardAsset';
import {createCivilianRifle} from '../src/civilianRifle';

async function load(){
 const b=fs.readFileSync(new URL('../public/assets/colourful-guard/civilian.glb',import.meta.url));
 return new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
}
test('body + hair kits are lightweight, texture-free, fully weighted and cloneable',async()=>{
 const g=await load();
 const meshes:THREE.SkinnedMesh[]=[];
 g.scene.traverse(o=>{if((o as THREE.SkinnedMesh).isSkinnedMesh)meshes.push(o as THREE.SkinnedMesh);});
 assert.equal(meshes.length,9); // body + 6 hair + facial + cap
 const mesh=meshes.find(m=>m.name==='ColourfulCivilian')!;
 assert.ok(mesh);assert.equal(mesh.skeleton.bones.length,23);
 const kits=meshes.filter(m=>/^(Hair|Facial|Cap)_/.test(m.name)).map(m=>m.name).sort();
 assert.deepEqual(kits,[
  'Cap_baseball','Facial_handlebar',
  'Hair_afro','Hair_buzz','Hair_mohawk','Hair_mullet','Hair_pigtails','Hair_spiky',
 ]);
 const triCount=mesh.geometry.index?mesh.geometry.index.count/3:mesh.geometry.attributes.position.count/3;
 assert.ok(triCount<16000&&triCount>2000);
 assert.equal((mesh.material as THREE.MeshStandardMaterial).map,null);
 assert.equal((mesh.material as THREE.MeshStandardMaterial).flatShading,false);
 for(const m of meshes){
  const weights=m.geometry.attributes.skinWeight,indices=m.geometry.attributes.skinIndex;
  for(let i=0;i<weights.count;i++){
   assert.ok(Math.abs(weights.getX(i)+weights.getY(i)+weights.getZ(i)+weights.getW(i)-1)<1e-6);
   for(const n of [indices.getX(i),indices.getY(i),indices.getZ(i),indices.getW(i)])assert.ok(n>=0&&n<23);
  }
 }
 const other=clone(g.scene);const copy=other.getObjectByName(mesh.name) as THREE.SkinnedMesh;
 assert.notEqual(copy.skeleton.bones[0],mesh.skeleton.bones[0]);assert.equal(copy.geometry,mesh.geometry);
});
test('skinned body stays finite and human-sized throughout the embedded gait cycles',async()=>{
 const g=await load();normalizeHumanoid(g.scene);
 const mesh=g.scene.getObjectByName('ColourfulCivilian') as THREE.SkinnedMesh;
 assert.ok(mesh);
 const mixer=new THREE.AnimationMixer(g.scene);
 for(const clip of g.animations){
  mixer.stopAllAction();mixer.clipAction(clip).play();
  for(let i=0;i<24;i++){
   mixer.update(clip.duration/24);g.scene.updateMatrixWorld(true);mesh.computeBoundingBox();
   const box=mesh.boundingBox!.clone().applyMatrix4(mesh.matrixWorld),size=box.getSize(new THREE.Vector3());
   assert.ok(size.toArray().every(n=>Number.isFinite(n)&&n>.1&&n<3),`${clip.name}: ${size.toArray()}`);
   assert.ok(box.min.y>-.35&&box.min.y<.35,`${clip.name}: feet ${box.min.y}`);
   assert.ok(box.max.y<SOVIET_GUARD_HEIGHT+.5);
  }
 }
});
test('rifle clones share geometry and carry a muzzle at the visible barrel tip',()=>{
 const a=createCivilianRifle(),b=createCivilianRifle();assert.notEqual(a,b);
 assert.equal((a.getObjectByName('receiver') as THREE.Mesh).geometry,(b.getObjectByName('receiver') as THREE.Mesh).geometry);
 const tip=a.getObjectByName('guardMuzzle')!;assert.ok(tip.position.z<-.7);assert.ok(tip.position.y>0);
});
