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
test('original mesh is lightweight, texture-free, fully weighted and independently cloneable',async()=>{
 const g=await load();let mesh!:THREE.SkinnedMesh;let count=0;
 g.scene.traverse(o=>{if((o as THREE.Mesh).isMesh){count++;mesh=o as THREE.SkinnedMesh;}});
 assert.equal(count,1);assert.equal(mesh.name,'ColourfulCivilian');assert.equal(mesh.skeleton.bones.length,23);
 const geo=mesh.geometry;
 const triCount=geo.index?geo.index.count/3:geo.attributes.position.count/3;
 assert.ok(triCount<16000&&triCount>4000,`expected denser smooth mesh, got ${triCount} tris`);
 assert.equal((mesh.material as THREE.MeshStandardMaterial).map,null);
 assert.equal((mesh.material as THREE.MeshStandardMaterial).flatShading,false,'smooth shading — not faceted flatShading');
 // Corner normals must vary on most triangles — proves weld-before-normals (not face-flat).
 const nrm=geo.attributes.normal;let smoothTris=0;
 const corner=(i:number)=>{
  if(geo.index)return[geo.index.getX(i),geo.index.getX(i+1),geo.index.getX(i+2)];
  return[i,i+1,i+2];
 };
 for(let i=0;i<(geo.index?geo.index.count:nrm.count);i+=3){
  const [a,b,c]=corner(i);
  const d=Math.hypot(nrm.getX(a)-nrm.getX(b),nrm.getY(a)-nrm.getY(b),nrm.getZ(a)-nrm.getZ(b))
   +Math.hypot(nrm.getX(b)-nrm.getX(c),nrm.getY(b)-nrm.getY(c),nrm.getZ(b)-nrm.getZ(c));
  if(d>1e-3)smoothTris++;
 }
 assert.ok(smoothTris>triCount*.55,`smooth corner normals on ${smoothTris}/${triCount} tris`);
 const weights=mesh.geometry.attributes.skinWeight,indices=mesh.geometry.attributes.skinIndex;
 for(let i=0;i<weights.count;i++){
  assert.ok(Math.abs(weights.getX(i)+weights.getY(i)+weights.getZ(i)+weights.getW(i)-1)<1e-6);
  for(const n of [indices.getX(i),indices.getY(i),indices.getZ(i),indices.getW(i)])assert.ok(n>=0&&n<23);
 }
 const other=clone(g.scene);const copy=other.getObjectByName(mesh.name) as THREE.SkinnedMesh;
 assert.notEqual(copy.skeleton.bones[0],mesh.skeleton.bones[0]);assert.equal(copy.geometry,mesh.geometry);
 const before=mesh.skeleton.bones[0].quaternion.clone();copy.skeleton.bones[0].rotation.x+=.4;assert.ok(before.equals(mesh.skeleton.bones[0].quaternion));
});
test('skinned surface stays finite and human-sized throughout the embedded gait cycles',async()=>{
 const g=await load();normalizeHumanoid(g.scene);let mesh!:THREE.SkinnedMesh;g.scene.traverse(o=>{if((o as THREE.SkinnedMesh).isSkinnedMesh)mesh=o as THREE.SkinnedMesh;});
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
