import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {
 GUARD_ARCHETYPES,guardArchetype,GUARD_UNIFORM,
} from '../src/guardArchetypes';
import {applyGuardArchetype,normalizeHumanoid,SOVIET_GUARD_HEIGHT,attachGuardLocomotion,updateGuardLocomotion} from '../src/sovietGuardAsset';
import {buildGuardRig,makeGuardCombatState,applyGuardCombatPose} from '../src/guardCombatPose';

async function load(){
 const b=fs.readFileSync(new URL('../public/assets/colourful-guard/civilian.glb',import.meta.url));
 return new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
}

test('six designed archetypes keep a shared coral kit',()=>{
 assert.equal(GUARD_ARCHETYPES.length,6);
 assert.equal(GUARD_UNIFORM.jacket,0xe95b49);
 assert.equal(new Set(GUARD_ARCHETYPES.map(a=>a.id)).size,6);
 assert.equal(guardArchetype(6).id,guardArchetype(0).id);
});

test('archetype remaps skin colours without changing scale or bone scale',async()=>{
 const g=await load();
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const scene=clone(g.scene);
 scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
 const pose=makeGuardCombatState(3);
 const rig=buildGuardRig(scene);
 assert.ok(rig);
 const scaleBefore=scene.scale.clone();
 applyGuardArchetype(scene,rig,pose,3);
 assert.ok(scene.scale.equals(scaleBefore),'no Object3D scale change');
 assert.ok(Math.abs(rig.head.scale.x-1)<1e-6);
 assert.equal(pose.postureSwagger,0);
 const body=scene.getObjectByName('ColourfulCivilian') as THREE.Mesh;
 const col=body.geometry.getAttribute('color');
 const skin=new THREE.Color(guardArchetype(3).skin);
 let matched=0;
 for(let i=0;i<col.count;i++){
  if(Math.abs(col.getX(i)-skin.r)+Math.abs(col.getY(i)-skin.g)+Math.abs(col.getZ(i)-skin.b)<.05)matched++;
 }
 assert.ok(matched>80,'skin verts remapped');
});

test('walk + combat pose keeps feet on the floor for every archetype',async()=>{
 const g=await load();
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const clips:Record<string,THREE.AnimationClip>={};
 for(const a of g.animations)clips[a.name.toLowerCase()]=a;
 for(let outfit=0;outfit<6;outfit++){
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  const pose=makeGuardCombatState(outfit);
  const rig=buildGuardRig(scene);
  assert.ok(rig);
  applyGuardArchetype(scene,rig,pose,outfit);
  const loco=attachGuardLocomotion(scene,{idle:clips.idle,walk:clips.walk,run:clips.run})!;
  const gun=new THREE.Object3D();
  for(let i=0;i<90;i++){
   updateGuardLocomotion(loco,1/60,{moving:true,speed:1.2,state:'chase',direction:1});
   applyGuardCombatPose(rig,pose,gun,{target:new THREE.Vector3(0,1.5,4),aim:.5,engaged:true,recoil:0,speed:1.2,dt:1/60});
   scene.updateMatrixWorld(true);
   const mesh=scene.getObjectByName('ColourfulCivilian')!;
   mesh.skeleton.update();
   let minY=Infinity,maxY=-Infinity,maxW=0;
   const v=new THREE.Vector3();
   const pos=mesh.geometry.attributes.position;
   for(let vi=0;vi<pos.count;vi+=Math.max(1,Math.floor(pos.count/150))){
    mesh.getVertexPosition(vi,v);v.applyMatrix4(mesh.matrixWorld);
    minY=Math.min(minY,v.y);maxY=Math.max(maxY,v.y);
   }
   const box=new THREE.Box3().setFromObject(mesh);
   maxW=Math.max(box.max.x-box.min.x,box.max.z-box.min.z);
   assert.ok(minY>-0.35&&minY<0.4,`${guardArchetype(outfit).id} feet ${minY}`);
   assert.ok(maxY>1.2&&maxY<3.2,`${guardArchetype(outfit).id} height ${maxY}`);
   assert.ok(maxW<2.8,`${guardArchetype(outfit).id} width ${maxW}`);
  }
 }
});
