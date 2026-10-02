import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {clone} from 'three/examples/jsm/utils/SkeletonUtils.js';
import {
 GUARD_ARCHETYPES,guardArchetype,GUARD_UNIFORM,hairObjectName,facialObjectName,capObjectName,
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

test('eight enemy-guard archetypes keep a shared stark red/blue kit',()=>{
 assert.equal(GUARD_ARCHETYPES.length,8);
 assert.equal(GUARD_UNIFORM.jacket,0xff0000);
 assert.equal(GUARD_UNIFORM.trousers,0x0000ff);
 assert.equal(new Set(GUARD_ARCHETYPES.map(a=>a.id)).size,8);
 assert.equal(guardArchetype(1).hair,'pigtails');
 assert.equal(guardArchetype(4).hair,'pigtails');
 assert.equal(guardArchetype(0).hair,'spiky');
 assert.equal(guardArchetype(2).hair,'afro');
 assert.equal(guardArchetype(3).facial,'handlebar');
 assert.equal(guardArchetype(5).hair,'mullet');
 assert.equal(guardArchetype(6).cap,'baseball');
 assert.equal(guardArchetype(7).hair,'mohawk');
});

test('GLB ships makeover hair kits plus facial and cap',async()=>{
 const g=await load();
 const names:string[]=[];
 g.scene.traverse(o=>{
  if(o.name.startsWith('Hair_')||o.name.startsWith('Facial_')||o.name.startsWith('Cap_'))names.push(o.name);
 });
 assert.deepEqual(names.sort(),[
  'Cap_baseball','Facial_handlebar',
  'Hair_afro','Hair_buzz','Hair_mohawk','Hair_mullet','Hair_pigtails','Hair_spiky',
 ].sort());
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
 applyGuardArchetype(scene,rig,pose,0); // lanky → spiky
 assert.ok(scene.scale.equals(scaleBefore),'skinned mesh scale untouched');
 assert.ok(scene.getObjectByName('Hair_spiky')?.visible);
 assert.equal(scene.getObjectByName('Hair_mullet')?.visible,false);
 assert.equal(scene.getObjectByName('Cap_baseball')?.visible,false);
 const body=scene.getObjectByName('ColourfulCivilian') as THREE.Mesh;
 const col=body.geometry.getAttribute('color');
 const skin=new THREE.Color(guardArchetype(0).skin);
 let matched=0;
 for(let i=0;i<col.count;i++){
  if(Math.abs(col.getX(i)-skin.r)+Math.abs(col.getY(i)-skin.g)+Math.abs(col.getZ(i)-skin.b)<.05)matched++;
 }
 assert.ok(matched>80,'skin verts remapped');
});

test('handlebar and baseball cap kits enable correctly',async()=>{
 const g=await load();
 hideGuardHairKits(g.scene);
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 // Broad: buzz + handlebar
 {
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  applyGuardArchetype(scene,buildGuardRig(scene),makeGuardCombatState(3),3);
  assert.ok(scene.getObjectByName('Hair_buzz')?.visible);
  assert.ok(scene.getObjectByName('Facial_handlebar')?.visible);
  assert.equal(scene.getObjectByName('Cap_baseball')?.visible,false);
 }
 // Scruffy: buzz + baseball cap
 {
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  applyGuardArchetype(scene,buildGuardRig(scene),makeGuardCombatState(6),6);
  assert.ok(scene.getObjectByName('Hair_buzz')?.visible);
  assert.ok(scene.getObjectByName('Cap_baseball')?.visible);
  assert.equal(scene.getObjectByName('Facial_handlebar')?.visible,false);
 }
 assert.equal(facialObjectName('handlebar'),'Facial_handlebar');
 assert.equal(capObjectName('baseball'),'Cap_baseball');
 assert.equal(hairObjectName('bald'),null);
});

test('female enemy guards show blue pigtails only',async()=>{
 const g=await load();
 hideGuardHairKits(g.scene);
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 for(const outfit of [1,4]){
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  applyGuardArchetype(scene,buildGuardRig(scene),makeGuardCombatState(outfit),outfit);
  assert.ok(scene.getObjectByName('Hair_pigtails')?.visible);
  const hair=scene.getObjectByName('Hair_pigtails') as THREE.Mesh;
  assert.equal((hair.material as THREE.MeshStandardMaterial).color.getHex(),0x3d9bff);
 }
});

test('hair kits have unmistakable silhouettes',async()=>{
 const g=await load();
 hideGuardHairKits(g.scene);
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const size=async(outfit:number)=>{
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  applyGuardArchetype(scene,buildGuardRig(scene),makeGuardCombatState(outfit),outfit);
  scene.updateMatrixWorld(true);
  let box=new THREE.Box3();
  scene.traverse(o=>{if(o instanceof THREE.Mesh&&o.visible&&o.name.startsWith('Hair_'))box.union(new THREE.Box3().setFromObject(o));});
  return box.getSize(new THREE.Vector3());
 };
 const spiky=await size(0),pigtails=await size(1),afro=await size(2),mullet=await size(5),mohawk=await size(7);
 assert.ok(afro.x>spiky.x*1.4,'afro much wider than spiky');
 assert.ok(pigtails.y>spiky.y*1.4,'pigtails much taller/longer than spiky');
 assert.ok(mullet.y>spiky.y*1.3,'mullet hangs much longer');
 assert.ok(mohawk.x<spiky.x*.5,'mohawk is a thin ridge');
 assert.ok(pigtails.x<1.0,'pigtails hang down, not out as wings');
});

test('guardRootScale encodes tall/narrow vs short/stocky on the outer root',()=>{
 const lanky=guardRootScale(0);
 const sturdy=guardRootScale(2);
 assert.ok(lanky.y>sturdy.y,'lanky taller');
 assert.ok(lanky.x<sturdy.x,'lanky narrower');
});

test('walk + combat pose keeps feet near the floor for every archetype',async()=>{
 const g=await load();
 hideGuardHairKits(g.scene);
 normalizeHumanoid(g.scene,SOVIET_GUARD_HEIGHT);
 const clips:Record<string,THREE.AnimationClip>={};
 for(const a of g.animations)clips[a.name.toLowerCase()]=a;
 for(let outfit=0;outfit<GUARD_ARCHETYPES.length;outfit++){
  const scene=clone(g.scene);
  scene.traverse(o=>{if(o instanceof THREE.Mesh)o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();});
  const pose=makeGuardCombatState(outfit,guardArchetype(outfit).posture);
  const rig=buildGuardRig(scene);
  assert.ok(rig);
  applyGuardArchetype(scene,rig,pose,outfit);
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
