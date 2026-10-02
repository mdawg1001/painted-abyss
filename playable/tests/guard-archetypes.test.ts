import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {
 GUARD_ARCHETYPES,guardArchetype,hairObjectName,GUARD_UNIFORM,
} from '../src/guardArchetypes';
import {applyGuardArchetype,normalizeHumanoid,SOVIET_GUARD_HEIGHT} from '../src/sovietGuardAsset';
import {buildGuardRig,makeGuardCombatState} from '../src/guardCombatPose';

async function load(){
 const b=fs.readFileSync(new URL('../public/assets/colourful-guard/civilian.glb',import.meta.url));
 return new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
}

test('six designed archetypes keep a shared coral kit and unique silhouettes',()=>{
 assert.equal(GUARD_ARCHETYPES.length,6);
 assert.equal(GUARD_UNIFORM.jacket,0xe95b49);
 assert.equal(GUARD_UNIFORM.trousers,0x268d9a);
 const ids=new Set(GUARD_ARCHETYPES.map(a=>a.id));
 assert.equal(ids.size,6);
 const hairs=new Set(GUARD_ARCHETYPES.map(a=>a.hair));
 assert.ok(hairs.has('bald')&&hairs.has('ponytail')&&hairs.has('bob'));
 // Distinct body scales — recognisable before the head.
 const keys=GUARD_ARCHETYPES.map(a=>`${a.width.toFixed(2)}:${a.height.toFixed(2)}:${a.belly.toFixed(2)}`);
 assert.equal(new Set(keys).size,6);
 assert.equal(guardArchetype(6).id,guardArchetype(0).id,'cycles every six');
 assert.equal(hairObjectName('bald'),null);
 assert.equal(hairObjectName('bob'),'Hair_bob');
});

test('GLB ships body plus hair kits; archetype picks one hair and remaps skin',async()=>{
 const g=await load();
 const names:string[]=[];
 g.scene.traverse(o=>{if((o as THREE.Mesh).isMesh)names.push(o.name);});
 assert.ok(names.includes('ColourfulCivilian'));
 for(const id of ['sidePart','curls','bob','messy','ponytail'])assert.ok(names.includes(`Hair_${id}`),id);
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const scene=clone(g.scene);
 scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
 const pose=makeGuardCombatState(3);
 const rig=buildGuardRig(scene);
 assert.ok(rig);
 applyGuardArchetype(scene,rig,pose,3); // slim — bob
 const bob=scene.getObjectByName('Hair_bob')!;
 const curls=scene.getObjectByName('Hair_curls')!;
 assert.equal(bob.visible,true);
 assert.equal(curls.visible,false);
 assert.equal(pose.postureSlouch,guardArchetype(3).posture.slouch);
 // Uniform scale only — non-uniform skinned scale was melting characters.
 assert.ok(Math.abs(scene.scale.x-scene.scale.y)<1e-9&&Math.abs(scene.scale.y-scene.scale.z)<1e-9);
 assert.ok(Math.abs(rig.head.scale.x-1)<1e-6&&Math.abs(rig.abdomen.scale.x-1)<1e-6,'bone.scale left near identity');
 const body=scene.getObjectByName('ColourfulCivilian') as THREE.Mesh;
 const col=body.geometry.getAttribute('color');
 const skin=new THREE.Color(guardArchetype(3).skin);
 let matched=0;
 for(let i=0;i<col.count;i++){
  if(Math.abs(col.getX(i)-skin.r)+Math.abs(col.getY(i)-skin.g)+Math.abs(col.getZ(i)-skin.b)<.05)matched++;
 }
 assert.ok(matched>80,'skin verts remapped to archetype tone');
});

test('archetype + walk + combat pose keeps feet on the floor (no melt / flail)',async()=>{
 const g=await load();
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const clips:Record<string,THREE.AnimationClip>={};
 for(const a of g.animations)clips[a.name.toLowerCase()]=a;
 const {attachGuardLocomotion,updateGuardLocomotion}=await import('../src/sovietGuardAsset');
 const {applyGuardCombatPose}=await import('../src/guardCombatPose');
 for(let outfit=0;outfit<6;outfit++){
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  const pose=makeGuardCombatState(outfit,guardArchetype(outfit).posture);
  const rig=buildGuardRig(scene);
  assert.ok(rig);
  applyGuardArchetype(scene,rig,pose,outfit);
  const loco=attachGuardLocomotion(scene,{idle:clips.idle,walk:clips.walk,run:clips.run})!;
  const gun=new THREE.Object3D();
  for(let i=0;i<90;i++){
   updateGuardLocomotion(loco,1/60,{moving:true,speed:1.2,state:'chase',direction:1});
   applyGuardCombatPose(rig,pose,gun,{target:new THREE.Vector3(0,1.5,4),aim:.5,engaged:true,recoil:0,speed:1.2,dt:1/60});
   scene.updateMatrixWorld(true);
   const box=new THREE.Box3().setFromObject(scene.getObjectByName('ColourfulCivilian')!);
   assert.ok(box.min.y>-0.35&&box.min.y<0.35,`${guardArchetype(outfit).id} feet ${box.min.y}`);
   assert.ok(box.max.y>1.2&&box.max.y<3.2,`${guardArchetype(outfit).id} height ${box.max.y}`);
   const size=box.getSize(new THREE.Vector3());
   assert.ok(size.x<2.5&&size.z<2.5,`${guardArchetype(outfit).id} not flailing ${size.toArray()}`);
  }
 }
});
