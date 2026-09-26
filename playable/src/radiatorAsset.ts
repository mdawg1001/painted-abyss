/**
 * Wall radiators — Sketchfab “Vintage Cast Iron Radiator 3D Model” by Ati / azripxd
 * (CC BY 4.0).
 * https://sketchfab.com/3d-models/vintage-cast-iron-radiator-3d-model-7d4d8077bc524dbeb11a28ca09badf57
 *
 * Official Sketchfab glTF, unchanged. Four room-scale units sit flush on
 * memorable Soviet breath-corridor and entrance-lab walls as installed
 * heating — clear of the hatch stash and the guard wall-clearance path.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { SconceMount } from './sconceAsset';
import { FLOOR_Y, STASH_POSITION, breathHatchSpawn } from './simulation';

export const RADIATOR_URL='/assets/vintage-radiator/vintage_radiator.glb';
export const RADIATOR_SOURCE='https://sketchfab.com/3d-models/vintage-cast-iron-radiator-3d-model-7d4d8077bc524dbeb11a28ca09badf57';
export const RADIATOR_AUTHOR='Ati';
export const RADIATOR_AUTHOR_URL='https://sketchfab.com/azripxd';
export const RADIATOR_LICENSE='CC BY 4.0';

/**
 * Room-scale cast-iron radiator height (m) — waist-to-chest / window-sill for a
 * standing adult. The authored mesh is ~2 m tall in Sketchfab units; uniform
 * scale brings it to this (width ~1.35 m, depth ~0.43 m).
 */
export const RADIATOR_TARGET_HEIGHT=1.35;
/** Exact count of wall units (memorable corridor + lab faces only). */
export const RADIATOR_COUNT=4;
/**
 * Rear face stand-off from the wall plane into the room (m). Clears rock face
 * bumps without floating; depth after scale is ~0.43 m, so the front stays
 * well inside GUARD_WALL_CLEARANCE (1.3 m).
 */
export const RADIATOR_WALL_CLEARANCE=.22;
/** Keep radiators this far from the hatch stash (m). */
export const RADIATOR_STASH_CLEAR=5;
/** Keep radiators this far from the hatch spawn (m). */
export const RADIATOR_HATCH_CLEAR=5.5;

export type RadiatorMount=SconceMount&{along?:number;yawJitter?:number;label:string};
export type WallRadiators={group:THREE.Group;ready:boolean;mounts:RadiatorMount[]};

const inwardVec=(yaw:number)=>new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));
const alongVec=(yaw:number)=>new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw));

/**
 * Four memorable wall mounts: mid breath corridor (both long walls) + entrance
 * lab (both long walls). Along-wall offsets and slight yaw jitter so they read
 * as bolted heating. Yaw ±π/2 follows wallSconceMounts (inward into the room).
 */
export function radiatorMounts():RadiatorMount[]{
 const mounts:RadiatorMount[]=[
  // Breath corridor — mid run, west then east (opposite sides, different Z).
  {x:-6,z:12,yaw:Math.PI/2,along:.4,yawJitter:-.03,label:'breath-west'},
  {x:2,z:8,yaw:-Math.PI/2,along:-.35,yawJitter:.04,label:'breath-east'},
  // Entrance lab — west + east long walls (first chamber past the hatch corridor).
  {x:-14,z:-12,yaw:Math.PI/2,along:-.25,yawJitter:.05,label:'lab-west'},
  {x:14,z:-16,yaw:-Math.PI/2,along:.45,yawJitter:-.04,label:'lab-east'},
 ];
 const spawn=breathHatchSpawn();
 const kept=mounts.filter(m=>{
  if(Math.hypot(m.x-STASH_POSITION.x,m.z-STASH_POSITION.z)<RADIATOR_STASH_CLEAR)return false;
  if(Math.hypot(m.x-spawn.x,m.z-spawn.z)<RADIATOR_HATCH_CLEAR)return false;
  return true;
 });
 if(kept.length!==RADIATOR_COUNT)throw new Error(`expected ${RADIATOR_COUNT} radiator mounts, got ${kept.length}`);
 return kept;
}

/** Procedural stand-in: dark iron box on the floor until the glTF arrives. */
export function buildRadiatorStub(mount:RadiatorMount):THREE.Group{
 const root=new THREE.Group();
 root.name='radiatorStub';
 const h=RADIATOR_TARGET_HEIGHT;
 const w=1.28,d=.42;
 const mat=new THREE.MeshStandardMaterial({
  color:0x3a3530,roughness:.72,metalness:.45,
  emissive:0x1a1510,emissiveIntensity:.12,
 });
 const body=new THREE.Mesh(new THREE.BoxGeometry(w,h*.92,d),mat);
 body.position.y=h*.46;
 const footL=new THREE.Mesh(new THREE.BoxGeometry(.08,.08,.22),mat);
 const footR=footL.clone();
 footL.position.set(-w*.38,.04,0);
 footR.position.set(w*.38,.04,0);
 root.add(body,footL,footR);
 placeRadiatorRoot(root,mount,w,d);
 return root;
}

/**
 * Authored mesh is Y-up, width along X, depth along Z. Scale to human height,
 * feet on the floor, rear (min Z) against the wall so +Z faces into the room
 * (same yaw convention as wall sconces).
 */
export function fitRadiator(model:THREE.Object3D,mount:RadiatorMount){
 model.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(model);
 const size=box.getSize(new THREE.Vector3());
 const scale=RADIATOR_TARGET_HEIGHT/(size.y||1);
 model.position.set(-(box.min.x+box.max.x)*.5,-box.min.y,-box.min.z);
 const pivot=new THREE.Group();
 pivot.name='radiatorMount';
 pivot.add(model);
 pivot.scale.setScalar(scale);
 placeRadiatorRoot(pivot,mount,size.x*scale,size.z*scale);
 return pivot;
}

function placeRadiatorRoot(root:THREE.Object3D,mount:RadiatorMount,_width:number,_depth:number){
 const yaw=mount.yaw+(mount.yawJitter??0);
 const inward=inwardVec(yaw);
 const along=alongVec(yaw);
 root.rotation.y=yaw;
 root.position.set(mount.x,FLOOR_Y,mount.z)
  .addScaledVector(inward,RADIATOR_WALL_CLEARANCE)
  .addScaledVector(along,mount.along??0);
}

function prepareModel(model:THREE.Object3D,envMap?:THREE.Texture|null){
 model.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;
  for(const m of Array.isArray(o.material)?o.material:[o.material]){
   if(!(m instanceof THREE.MeshStandardMaterial))continue;
   // Authored metals often sit at metallicFactor 1; without a rich env map that
   // reads black under bunker point lights — soften like the doom pipe.
   m.metalness=Math.min(m.metalness,.55);
   m.roughness=Math.max(m.roughness,.48);
   if(envMap){m.envMap=envMap;m.envMapIntensity=.4;}
   m.needsUpdate=true;
  }
 });
}

export function createWallRadiators(mounts=radiatorMounts()):WallRadiators{
 const group=new THREE.Group();
 group.name='wallRadiators';
 for(const m of mounts)group.add(buildRadiatorStub(m));
 return{group,ready:false,mounts};
}

/** Swap stubs for the official Sketchfab glTF (one download, cloned per mount). */
export async function upgradeWallRadiators(visual:WallRadiators,envMap?:THREE.Texture|null):Promise<boolean>{
 if(typeof document==='undefined'||visual.ready)return visual.ready;
 try{
  const {scene}=await new GLTFLoader().loadAsync(RADIATOR_URL);
  prepareModel(scene,envMap);
  // Drop stubs.
  for(const child of [...visual.group.children])visual.group.remove(child);
  for(const mount of visual.mounts){
   visual.group.add(fitRadiator(scene.clone(true),mount));
  }
  visual.ready=true;
  return true;
 }catch(err){
  console.warn('Vintage radiator failed to load; keeping stubs.',err);
  return false;
 }
}
