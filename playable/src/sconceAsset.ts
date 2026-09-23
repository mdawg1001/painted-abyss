/**
 * Wall lamps — Poly Haven “Industrial Caged Sconce”.
 * A single self-contained GLB (the "_b" caged variant) lives in
 * `public/assets/industrial_caged_sconce/` and is cloned onto the cave walls.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { cells, world, CELL } from './simulation';

export const SCONCE_ASSET_URL='/assets/industrial_caged_sconce/industrial_caged_sconce.glb';
export const SCONCE_SOURCE='https://polyhaven.com/a/industrial_caged_sconce';
export const SCONCE_LICENSE='CC0 1.0 Universal (public domain dedication)';

/** Height of the mounted fixture in metres/world-units, and where its centre sits on the wall. */
export const SCONCE_TARGET_HEIGHT=1.3;
export const SCONCE_MOUNT_Y=4.4;
/** Warm incandescent glow for the caged bulb. */
export const SCONCE_LIGHT_COLOR=0xffb066;
const SCONCE_LIGHT_INTENSITY=11;
const SCONCE_LIGHT_DISTANCE=12;
const SCONCE_LIGHT_DECAY=1.6;

const BASE='/assets/industrial_caged_sconce/';
const GLB='industrial_caged_sconce.glb';

export type SconceMount={x:number;z:number;yaw:number};
/** Half the sconces are dark, a tenth flicker, the rest burn steady. */
export type SconceState='steady'|'flicker'|'off';
export type SconceLight={light:THREE.PointLight;base:number;phase:number;state:SconceState};
export type WallSconces={group:THREE.Group;lights:SconceLight[]};

/** Deterministic, spatially spread assignment: ~50% off, ~10% flicker, remainder steady. */
export function assignSconceStates(n:number):SconceState[]{
 const states:SconceState[]=new Array(n).fill('steady');
 if(n<=0)return states;
 const offCount=Math.round(n*0.5);
 const flickerCount=Math.round(n*0.1);
 // Order indices by a hash so the off/flicker picks are scattered, not clustered by wall order.
 const hash=(i:number)=>((i+1)*2654435761)>>>0;
 const order=[...Array(n).keys()].sort((a,b)=>hash(a)-hash(b));
 order.forEach((idx,rank)=>{
  states[idx]=rank<offCount?'off':rank<offCount+flickerCount?'flicker':'steady';
 });
 return states;
}

/**
 * Interior-facing mount points from the cave's solid wall faces. Walls are boxes at
 * (p.x+dc*2.5, p.z-dr*2.5); the inner face sits half a unit toward the room, and the
 * fixture faces along the inward normal (-dc, +dr). Greedy spacing keeps the sconces
 * spread along the walls and reaching the far chambers instead of clustering.
 */
export function wallSconceMounts(minDistance=14,max=26):SconceMount[]{
 const chosen:SconceMount[]=[];
 for(const key of cells){
  const [c,r]=key.split(',').map(Number),p=world(c,r);
  for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){
   if(cells.has(`${c+dc},${r+dr}`))continue;
   const nx=-dc,nz=dr,x=p.x+dc*2.5+nx*.5,z=p.z-dr*2.5+nz*.5;
   const mount:SconceMount={x,z,yaw:Math.atan2(nx,nz)};
   if(chosen.every(k=>Math.hypot(k.x-mount.x,k.z-mount.z)>minDistance))chosen.push(mount);
   if(chosen.length>=max)return chosen;
  }
 }
 return chosen;
}

/** Boost the baked emissive so the bulb reads as lit under the cave murk. */
export function litSconceMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!(m instanceof THREE.MeshStandardMaterial))continue;
   m.emissive.setHex(0xffb867);
   m.emissiveIntensity=2.6;
   m.needsUpdate=true;
  }
 });
}

const inwardVec=(yaw:number)=>new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));

/**
 * Warm point light (+ a tiny emissive stub bulb) per mount, added immediately so the
 * cave is lit even before the glTF finishes loading. Returns the group and the lights
 * (for per-frame flicker).
 */
export function createWallSconces(mounts:SconceMount[]):WallSconces{
 const group=new THREE.Group();
 group.name='wallSconces';
 const lights:SconceLight[]=[];
 const states=assignSconceStates(mounts.length);
 const stubGeo=new THREE.SphereGeometry(.09,8,6);
 const litStubMat=new THREE.MeshBasicMaterial({color:0xffca7a});
 // Unlit fixtures get a cold, dark bulb so they read as switched off.
 const darkStubMat=new THREE.MeshBasicMaterial({color:0x2a2118});
 for(let i=0;i<mounts.length;i++){
  const m=mounts[i],state=states[i],on=state!=='off',inward=inwardVec(m.yaw);
  const stub=new THREE.Mesh(stubGeo,on?litStubMat:darkStubMat);
  stub.name='sconceStub';
  stub.position.set(m.x,SCONCE_MOUNT_Y+.45,m.z).addScaledVector(inward,.28);
  group.add(stub);
  const light=new THREE.PointLight(SCONCE_LIGHT_COLOR,SCONCE_LIGHT_INTENSITY,SCONCE_LIGHT_DISTANCE,SCONCE_LIGHT_DECAY);
  light.position.set(m.x,SCONCE_MOUNT_Y+.55,m.z).addScaledVector(inward,.5);
  // Off fixtures cast no light (also spares the renderer half the point lights).
  light.visible=on;
  group.add(light);
  lights.push({light,base:light.intensity,phase:Math.random()*Math.PI*2,state});
 }
 return{group,lights};
}

/** Kill the baked bulb glow on an "off" fixture so it reads as unlit (clones shared materials first). */
function darkenSconce(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const clone=(m:THREE.Material)=>{
   const c=m.clone();
   if(c instanceof THREE.MeshStandardMaterial){c.emissive.setHex(0x000000);c.emissiveIntensity=0;c.needsUpdate=true;}
   return c;
  };
  o.material=Array.isArray(o.material)?o.material.map(clone):clone(o.material);
 });
}

/** Replace the stub bulbs with cloned Poly Haven caged-sconce meshes bolted to each wall. */
export async function upgradeWallSconces(group:THREE.Group,mounts:SconceMount[],lights:SconceLight[]):Promise<boolean>{
 try{
  const loader=new GLTFLoader();
  loader.setPath(BASE);
  const gltf=await loader.loadAsync(GLB);
  const proto=gltf.scene;
  litSconceMaterials(proto);
  const size=new THREE.Box3().setFromObject(proto).getSize(new THREE.Vector3());
  const scale=SCONCE_TARGET_HEIGHT/(size.y||1);
  // Drop the placeholder bulbs now that the real fixtures are ready.
  for(const stub of group.children.filter(o=>o.name==='sconceStub'))group.remove(stub);
  for(let i=0;i<mounts.length;i++){
   const m=mounts[i],inward=inwardVec(m.yaw);
   const inst=proto.clone(true);
   // Off fixtures share geometry but get their own darkened materials (no bulb glow).
   if(lights[i]?.state==='off')darkenSconce(inst);
   inst.scale.setScalar(scale);
   inst.rotation.y=m.yaw;
   inst.position.set(m.x,SCONCE_MOUNT_Y,m.z).addScaledVector(inward,-.05);
   group.add(inst);
  }
  return true;
 }catch(err){
  console.warn('Wall sconce model failed to load; keeping light stubs.',err);
  return false;
 }
}
