import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,normalizeHumanoid,
 attachGuardLocomotion,updateGuardLocomotion,mountGuardGunOnHand,
} from '../src/sovietGuardAsset';
import {
 buildGuardRig,addGuardFaceMorphs,makeGuardCombatState,applyGuardCombatPose,updateGuardMoveFrame,
 GUARD_STANCE_CROUCH,
} from '../src/guardCombatPose';

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
 if(!(globalThis as unknown as {ProgressEvent?:unknown}).ProgressEvent){
  (globalThis as unknown as {ProgressEvent:unknown}).ProgressEvent=class ProgressEvent extends Event{
   lengthComputable=false;loaded=0;total=0;
   constructor(type:string,init:Record<string,unknown>={}){
    super(type);
    Object.assign(this,init);
   }
  };
 }
}

async function loadGuardGltf(){
 installImageStubs();
 const glbPath=path.join(root,'public',SOVIET_GUARD_GLB.replace(/^\//,''));
 const buf=fs.readFileSync(glbPath);
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 const gltf=await new Promise<Awaited<ReturnType<GLTFLoader['parseAsync']>>>((resolve,reject)=>{
  new GLTFLoader().parse(ab,'',resolve,reject);
 });
 return gltf;
}


async function guardInstance(){
 const gltf=await loadGuardGltf();
 const scene=gltf.scene;
 normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
 addGuardFaceMorphs(scene);
 const inst=cloneSkinned(scene);
 const root=new THREE.Group();root.add(inst);
 const gun=new THREE.Group();mountGuardGunOnHand(inst,gun);
 const loco=attachGuardLocomotion(inst,{
  idle:gltf.animations.find(a=>a.name==='idle')!,walk:gltf.animations.find(a=>a.name==='walk')!,run:gltf.animations.find(a=>a.name==='run')!,
 })!;
 const rig=buildGuardRig(inst)!;
 return{root,inst,gun,loco,rig};
}
const wp=(o:THREE.Object3D)=>o.getWorldPosition(new THREE.Vector3());

test('firing stance: two hands on the gun, knees bent with feet planted, chest on target',async()=>{
 const {root,gun,loco,rig}=await guardInstance();
 assert.ok(rig,'rig bones found');
 const target=new THREE.Vector3(1.5,1.6,6);
 const st=makeGuardCombatState();
 // Clip pose only, for reference.
 updateGuardLocomotion(loco,1/60,{moving:false,speed:0,state:'chase'});
 root.updateMatrixWorld(true);
 const hipsBefore=wp(rig.pelvis).y,footL0=wp(rig.legL[2]),footR0=wp(rig.legR[2]);
 for(let i=0;i<90;i++){
  updateGuardLocomotion(loco,1/60,{moving:false,speed:0,state:'chase'});
  root.updateMatrixWorld(true);
  applyGuardCombatPose(rig,st,gun,{target,aim:1,engaged:true,recoil:0,speed:0,dt:1/60});
 }
 root.updateMatrixWorld(true);
 const drop=hipsBefore-wp(rig.pelvis).y;
 assert.ok(drop>GUARD_STANCE_CROUCH*.6&&drop<GUARD_STANCE_CROUCH*1.6,`hips drop ${drop.toFixed(3)} m`);
 // IK keeps each lower leg's end on its (clip-placed) foot.
 for(const [leg,foot0] of [[rig.legL,footL0],[rig.legR,footR0]] as const){
  const foot=wp(leg[2]);
  assert.ok(foot.distanceTo(foot0)<.06,'boots stay on the floor');
 }
 const knee=wp(rig.legL[1]),hip=wp(rig.legL[0]),ankle=wp(rig.legL[2]);
 const bend=new THREE.Vector3().subVectors(hip,knee).normalize().dot(new THREE.Vector3().subVectors(ankle,knee).normalize());
 assert.ok(bend>-0.995,'knees are bent, not locked');
 // Both wrists meet on the grip.
 const wr=wp(rig.armR[2]),wl=wp(rig.armL[2]);
 assert.ok(wr.distanceTo(wl)<.14,`hands ${wr.distanceTo(wl).toFixed(3)} m apart`);
 // Gun out in front, between him and the target.
 const chest=wp(rig.torso);
 const toT=target.clone().sub(chest).setY(0).normalize();
 const toGun=wr.clone().sub(chest).setY(0);
 assert.ok(toGun.dot(toT)>.25,'gun held out toward the target');
 // Barrel (−Z) at the target.
 const g=wp(gun);const bar=new THREE.Vector3(0,0,-1).applyQuaternion(gun.getWorldQuaternion(new THREE.Quaternion()));
 assert.ok(bar.dot(target.clone().sub(g).normalize())>.99,'barrel on target');
 // Chest squared up (bind forward of Torso points at the target horizontally).
 const f=rig.fwd.get(rig.torso)!.clone().applyQuaternion(rig.torso.getWorldQuaternion(new THREE.Quaternion())).setY(0).normalize();
 assert.ok(f.dot(toT)>.95,'chest faces the target');
 // Scowl.
 assert.ok(rig.face&&rig.face.morphTargetInfluences![0]>.9,'brows knit, eyes narrowed');
});

test('strafing sideways: pelvis turns into the step, chest stays on the target; backpedal reverses the gait',async()=>{
 const {root,gun,loco,rig}=await guardInstance();
 const target=new THREE.Vector3(0,1.6,8);
 const st=makeGuardCombatState();
 let dir=1;
 for(let i=0;i<90;i++){
  dir=updateGuardMoveFrame(st,.9,0,0,.9,1/60); // moving along +X (his left) while facing +Z
  updateGuardLocomotion(loco,1/60,{moving:true,speed:.9,state:'chase',direction:dir});
  root.updateMatrixWorld(true);
  applyGuardCombatPose(rig,st,gun,{target,aim:1,engaged:true,recoil:0,speed:.9,dt:1/60});
 }
 assert.equal(dir,1);
 assert.ok(st.warp>.9,`pelvis warped ${st.warp.toFixed(2)} rad toward the step`);
 root.updateMatrixWorld(true);
 const f=rig.fwd.get(rig.torso)!.clone().applyQuaternion(rig.torso.getWorldQuaternion(new THREE.Quaternion())).setY(0).normalize();
 assert.ok(f.z>.93,'chest still on the target');
 const phase0=loco.phase;
 for(let i=0;i<60;i++)dir=updateGuardMoveFrame(st,0,-.9,0,.9,1/60);
 assert.equal(dir,-1,'moving away from the target backpedals');
 updateGuardLocomotion(loco,.1,{moving:true,speed:.9,state:'chase',direction:dir});
 const d=((loco.phase-phase0)%1+1)%1;
 assert.ok(d>.5,'walk phase runs backwards');
});
