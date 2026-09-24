/**
 * Wall copper — Sketchfab “Copper Pipe Section” by pixol3d (CC BY 4.0).
 * https://sketchfab.com/3d-models/copper-pipe-section-91807ce330af449bbd3c59b5ede8ce67
 *
 * Official Sketchfab glTF (48,634 triangles), unchanged. The authored run is
 * ~49 units long, ~12 tall and ~6 deep; scaled so the long axis is a 2.4 m
 * copper section (thin lines land near 15–25 mm, a real pipe, not a toy and
 * not a room). Mounted on the east wall of the breath corridor, rear face
 * against that wall, clear of the hatch, the tank mounts and the guard's lane.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { SconceMount } from './sconceAsset';

export const COPPER_PIPE_URL='/assets/copper-pipe/copper_pipe.glb';
export const COPPER_SOURCE='https://sketchfab.com/3d-models/copper-pipe-section-91807ce330af449bbd3c59b5ede8ce67';
export const COPPER_AUTHOR='pixol3d';
export const COPPER_LICENSE='CC BY 4.0';
/** Along-wall length in metres. Authored glTF long axis is ~49 units. */
export const COPPER_LENGTH_M=2.4;
/**
 * Rear face inset from the wall plane. Corridor rock blobs bulge ~0.25 m
 * past that plane; 0.30 m keeps the mesh on the wall without burying it.
 */
export const COPPER_WALL_CLEARANCE=.3;
/** Bottom of the section — waist height above the walk floor (FLOOR_Y is 0.65). */
export const COPPER_BOTTOM_Y=1.25;
/**
 * East inner face of breath cell (11, −4): x = 2, z = 16, facing −X into the
 * corridor. Middle of the run, between the east-wall tanks, off the hatch.
 */
export const COPPER_MOUNT:SconceMount={x:2,z:16,yaw:-Math.PI/2};

export type CopperPipe={group:THREE.Group;ready:boolean};

const inwardVec=(yaw:number)=>new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));

export function createCopperPipe(mount:SconceMount=COPPER_MOUNT):CopperPipe{
 const group=new THREE.Group();
 group.name='copperPipe';
 group.userData.mount=mount;
 return{group,ready:false};
}

/**
 * Authored model is Y-up. The long run is local Z, the height is local Y, and
 * the shallow depth is local X with the rear face at max X. Scale the run to
 * COPPER_LENGTH_M, sit the bottom on COPPER_BOTTOM_Y, and turn local −X to
 * face into the room so the rear face lands COPPER_WALL_CLEARANCE off the wall.
 */
export function fitCopperPipe(model:THREE.Object3D,mount:SconceMount=COPPER_MOUNT){
 model.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(model);
 const size=box.getSize(new THREE.Vector3());
 const scale=COPPER_LENGTH_M/(size.z||1);
 const centreZ=(box.min.z+box.max.z)*.5;
 model.position.set(-box.max.x,-box.min.y,-centreZ);
 const pivot=new THREE.Group();
 pivot.name='copperPipeMount';
 pivot.add(model);
 pivot.scale.setScalar(scale);
 pivot.rotation.y=mount.yaw+Math.PI/2;
 pivot.position.set(mount.x,COPPER_BOTTOM_Y,mount.z).addScaledVector(inwardVec(mount.yaw),COPPER_WALL_CLEARANCE);
 return pivot;
}

export async function upgradeCopperPipe(visual:CopperPipe,envMap?:THREE.Texture|null):Promise<boolean>{
 const mount=visual.group.userData.mount as SconceMount;
 if(typeof document==='undefined')return false;
 try{
  const loader=new GLTFLoader();
  const gltf=await loader.loadAsync(COPPER_PIPE_URL);
  const model=gltf.scene;
  model.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   o.castShadow=true;o.receiveShadow=true;
   const mats=Array.isArray(o.material)?o.material:[o.material];
   for(const m of mats){
    if(!(m instanceof THREE.MeshStandardMaterial))continue;
    if(envMap){m.envMap=envMap;m.envMapIntensity=.65;}
    m.needsUpdate=true;
   }
  });
  visual.group.add(fitCopperPipe(model,mount));
  visual.ready=true;
  return true;
 }catch(err){
  console.warn('Copper pipe failed to load.',err);
  return false;
 }
}
