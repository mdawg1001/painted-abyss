import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {
 GUARD_ARCHETYPES,guardArchetype,GUARD_UNIFORM,hairObjectName,
} from '../src/guardArchetypes';
import {
 applyGuardArchetype,hideGuardHairKits,normalizeHumanoid,SOVIET_GUARD_HEIGHT,
 attachGuardLocomotion,updateGuardLocomotion,guardRootScale,
} from '../src/sovietGuardAsset';
import {buildGuardRig,makeGuardCombatState,applyGuardCombatPose} from '../src/guardCombatPose';

async function load(){
 const b=fs.readFileSync(new URL('../public/assets/colourful-guard/civilian.glb',import.meta.url));
 return new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
}

test('six designed archetypes keep a shared stark red/blue kit',()=>{
 assert.equal(GUARD_ARCHETYPES.length,6);
 assert.equal(GUARD_UNIFORM.jacket,0xff0000);
 assert.equal(GUARD_UNIFORM.trousers,0x0000ff);
 assert.equal(GUARD_UNIFORM.trim,0x0000ff);
 assert.equal(new Set(GUARD_ARCHETYPES.map(a=>a.id)).size,6);
 assert.equal(guardArchetype(6).id,guardArchetype(0).id);
});

test('GLB ships five hair kits on the shared skeleton',async()=>{
 const g=await load();
 const names:string[]=[];
 g.scene.traverse(o=>{if(o.name.startsWith('Hair_'))names.push(o.name);});
 assert.deepEqual(names.sort(),['Hair_bob','Hair_curls','Hair_messy','Hair_ponytail','Hair_sidePart'].sort());
 assert.ok(g.scene.getObjectByName('ColourfulCivilian'));
});

test('archetype shows one hair kit, remaps skin, leaves skinned scale alone',async()=>{
 const g=await load();
 hideGuardHairKits(g.scene);
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const scene=clone(g.scene);
 scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
 const pose=makeGuardCombatState(0);
 const rig=buildGuardRig(scene);
 assert.ok(rig);
 const scaleBefore=scene.scale.clone();
 applyGuardArchetype(scene,rig,pose,0); // lanky → sidePart
 assert.ok(scene.scale.equals(scaleBefore),'skinned mesh scale untouched');
 assert.ok(Math.abs(rig.head.scale.x-1)<1e-6,'no bone.scale');
 assert.ok(scene.getObjectByName('Hair_sidePart')?.visible);
 assert.equal(scene.getObjectByName('Hair_curls')?.visible,false);
 assert.equal(scene.getObjectByName('Hair_ponytail')?.visible,false);
 // Broad is bald — every hair kit stays hidden.
 const broad=clone(g.scene);
 applyGuardArchetype(broad,buildGuardRig(broad),makeGuardCombatState(2),2);
 broad.traverse(o=>{if(o.name.startsWith('Hair_'))assert.equal(o.visible,false,`${o.name} hidden when bald`);});
 const body=scene.getObjectByName('ColourfulCivilian') as THREE.Mesh;
 const col=body.geometry.getAttribute('color');
 const skin=new THREE.Color(guardArchetype(0).skin);
 let matched=0;
 for(let i=0;i<col.count;i++){
  if(Math.abs(col.getX(i)-skin.r)+Math.abs(col.getY(i)-skin.g)+Math.abs(col.getZ(i)-skin.b)<.05)matched++;
 }
 assert.ok(matched>80,'skin verts remapped');
 assert.ok(Math.abs(pose.postureSwagger-guardArchetype(0).posture.swagger)<1e-6);
});

test('guardRootScale encodes tall/narrow vs short/stocky on the outer root',()=>{
 const lanky=guardRootScale(0);
 const sturdy=guardRootScale(1);
 assert.ok(lanky.y>sturdy.y,'lanky taller');
 assert.ok(lanky.x<sturdy.x,'lanky narrower');
 const officer=guardRootScale(5,'officer');
 assert.ok(officer.y>guardRootScale(5).y);
 assert.equal(hairObjectName('bald'),null);
 assert.equal(hairObjectName('ponytail'),'Hair_ponytail');
});

test('walk + combat pose keeps feet near the floor for every archetype',async()=>{
 const g=await load();
 hideGuardHairKits(g.scene);
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const clips:Record<string,THREE.AnimationClip>={};
 for(const a of g.animations)clips[a.name.toLowerCase()]=a;
 for(let outfit=0;outfit<6;outfit++){
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  const pose=makeGuardCombatState(outfit,guardArchetype(outfit).posture);
  const rig=buildGuardRig(scene);
  assert.ok(rig);
  applyGuardArchetype(scene,rig,pose,outfit);
  // Outer-root silhouette (what CaveWorld/survivalFx apply).
  const wrap=new THREE.Group();
  wrap.scale.copy(guardRootScale(outfit));
  wrap.add(scene);
  const loco=attachGuardLocomotion(scene,{idle:clips.idle,walk:clips.walk,run:clips.run})!;
  const gun=new THREE.Object3D();
  for(let i=0;i<90;i++){
   updateGuardLocomotion(loco,1/60,{moving:true,speed:1.2,state:'chase',direction:1});
   applyGuardCombatPose(rig,pose,gun,{target:new THREE.Vector3(0,1.5,4),aim:.5,engaged:true,recoil:0,speed:1.2,dt:1/60});
   wrap.updateMatrixWorld(true);
   const mesh=scene.getObjectByName('ColourfulCivilian') as THREE.SkinnedMesh;
   mesh.skeleton.update();
   let minY=Infinity,maxY=-Infinity;
   const v=new THREE.Vector3();
   const pos=mesh.geometry.attributes.position;
   for(let vi=0;vi<pos.count;vi+=Math.max(1,Math.floor(pos.count/150))){
    mesh.getVertexPosition(vi,v);v.applyMatrix4(mesh.matrixWorld);
    minY=Math.min(minY,v.y);maxY=Math.max(maxY,v.y);
   }
   const box=new THREE.Box3().setFromObject(mesh);
   const maxW=Math.max(box.max.x-box.min.x,box.max.z-box.min.z);
   assert.ok(minY>-0.45&&minY<0.55,`${guardArchetype(outfit).id} feet ${minY}`);
   assert.ok(maxY>1.0&&maxY<3.6,`${guardArchetype(outfit).id} height ${maxY}`);
   assert.ok(maxW<3.2,`${guardArchetype(outfit).id} width ${maxW}`);
  }
 }
});
