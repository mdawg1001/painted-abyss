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
const BASE='/assets/industrial_caged_sconce/';
const GLB='industrial_caged_sconce.glb';

export type SconceMount={x:number;z:number;yaw:number};
export type SconceLight={light:THREE.PointLight;base:number;phase:number};
export type WallSconces={group:THREE.Group;lights:SconceLight[]};

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
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=true;
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
 * Emissive stub bulbs only. Real point lights are omitted: each one is evaluated
 * in every cave fragment, which dropped the dive to a few frames per second.
 */
export function createWallSconces(mounts:SconceMount[]):WallSconces{
 const group=new THREE.Group();
 group.name='wallSconces';
 const lights:SconceLight[]=[];
 const stubGeo=new THREE.SphereGeometry(.09,6,5);
 const stubMat=new THREE.MeshBasicMaterial({color:0xffca7a});
 for(const m of mounts){
  const inward=inwardVec(m.yaw);
  const stub=new THREE.Mesh(stubGeo,stubMat);
  stub.name='sconceStub';
  stub.frustumCulled=true;
  stub.position.set(m.x,SCONCE_MOUNT_Y+.45,m.z).addScaledVector(inward,.28);
  group.add(stub);
 }
 return{group,lights};
}

/** Replace the stub bulbs with cloned Poly Haven caged-sconce meshes bolted to each wall. */
export async function upgradeWallSconces(group:THREE.Group,mounts:SconceMount[]):Promise<boolean>{
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
  for(const m of mounts){
   const inward=inwardVec(m.yaw);
   const inst=proto.clone(true);
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
