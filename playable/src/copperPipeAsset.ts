/**
 * Wall copper — Sketchfab “Copper Pipe Section” by pixol3d (CC BY 4.0).
 * https://sketchfab.com/3d-models/copper-pipe-section-91807ce330af449bbd3c59b5ede8ce67
 *
 * Official Sketchfab glTF (48,634 triangles), unchanged. The same section is
 * repeated along the blind south wall of the far south-west cavern — the wall
 * the hand-wheel doom pipe already stands on — so the run covers that wall
 * from corner to corner and tees into the riser at wheel height.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { SconceMount } from './sconceAsset';
import { CELL, cells, world } from './simulation';
import { PIPE_MOUNT, PIPE_WALL_CLEARANCE } from './pipeAsset';
import { WHEEL_CENTRE } from './valve';

export const COPPER_FAR_URL='/assets/copper-pipe/copper_pipe_far.glb';
export const COPPER_DETAIL_DISTANCE=8;
export const COPPER_DETAIL_PREFETCH=12;
export const COPPER_LOD_HYSTERESIS=1;
export const COPPER_PIPE_URL='/assets/copper-pipe/copper_pipe.glb';
export const COPPER_SOURCE='https://sketchfab.com/3d-models/copper-pipe-section-91807ce330af449bbd3c59b5ede8ce67';
export const COPPER_AUTHOR='pixol3d';
export const COPPER_LICENSE='CC BY 4.0';
/**
 * How many copies of the section make the run. Uniform scale — the mesh is not stretched.
 * Eight keeps each copy ≈3 m long, which puts the copper at real bore (~10 cm) and the rack
 * ≈0.7 m deep, so it tees into the riser behind the leak valve's handwheel instead of
 * burying the wheel and the diver standing at it.
 */
export const COPPER_SECTION_COUNT=8;
/**
 * Metres each copy bites into the next so the joint is a coupling, not a lit crack.
 * Outer ends still land on the wall corners.
 */
export const COPPER_JOINT_OVERLAP=.05;
/** Rear face shares the doom pipe's wall clearance so the tee has no step off the rock. */
export const COPPER_WALL_CLEARANCE=PIPE_WALL_CLEARANCE;
/**
 * World Y of the hand-wheel centre on the fitted doom pipe (valve.ts).
 * The copper axis sits on that centre so the run enters the valve, not the floor or the roof.
 */
export const COPPER_AXIS_Y=WHEEL_CENTRE.y;

export type CopperSection={far:THREE.Object3D;near?:THREE.Object3D;centre:THREE.Vector3;detailed:boolean};
export type CopperPipe={group:THREE.Group;ready:boolean;sections:CopperSection[];detailReady:boolean;detailLoading:boolean;detailAttempts:number;retryAfter:number;disposed:boolean};
export type CopperWallSpan={x0:number;x1:number;z:number;yaw:number;length:number};

const inwardVec=(yaw:number)=>new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));

/**
 * Contiguous south-wall face that holds the hand-wheel riser.
 * Open cells whose south neighbour is solid, at the riser's wall plane.
 * The passage gap keeps the east shelf from being glued onto this wall.
 */
export function copperWallSpan(mount:SconceMount=PIPE_MOUNT):CopperWallSpan{
 const faces:{x0:number;x1:number;z:number}[]=[];
 for(const key of cells){
  const [c,r]=key.split(',').map(Number);
  if(cells.has(`${c},${r+1}`))continue;
  const p=world(c,r);
  const z=p.z-CELL/2;
  if(Math.abs(z-mount.z)>.05)continue;
  faces.push({x0:p.x-CELL/2,x1:p.x+CELL/2,z});
 }
 faces.sort((a,b)=>a.x0-b.x0);
 const groups:CopperWallSpan[]=[];
 for(const f of faces){
  const g=groups[groups.length-1];
  if(g&&Math.abs(f.x0-g.x1)<.05&&Math.abs(f.z-g.z)<.05)g.x1=f.x1;
  else groups.push({x0:f.x0,x1:f.x1,z:f.z,yaw:mount.yaw,length:f.x1-f.x0});
 }
 for(const g of groups)g.length=g.x1-g.x0;
 const span=groups.find(g=>mount.x>=g.x0-.01&&mount.x<=g.x1+.01);
 if(!span)throw new Error('hand-wheel pipe is not on a cavern wall face');
 return span;
}

/** Along-wall length of one tiled section, including the bite that hides the joint. */
export function copperSectionLength(span:CopperWallSpan=copperWallSpan()){
 const n=COPPER_SECTION_COUNT;
 return (span.length+(n-1)*COPPER_JOINT_OVERLAP)/n;
}

/** Centres of each repeated section. The first starts on x0 and the last ends on x1. */
export function copperMounts(span:CopperWallSpan=copperWallSpan()):SconceMount[]{
 const len=copperSectionLength(span);
 const step=len-COPPER_JOINT_OVERLAP;
 const mounts:SconceMount[]=[];
 for(let i=0;i<COPPER_SECTION_COUNT;i++){
  mounts.push({x:span.x0+len/2+i*step,z:span.z,yaw:span.yaw});
 }
 return mounts;
}

export function createCopperPipe():CopperPipe{
 const group=new THREE.Group();
 group.name='copperPipe';
 return{group,ready:false,sections:[],detailReady:false,detailLoading:false,detailAttempts:0,retryAfter:0,disposed:false};
}

/**
 * Authored model is Y-up. The long run is local Z, the height is local Y, and
 * the shallow depth is local X with the rear face at max X. Scale uniformly so
 * the long axis is `length` metres, centre the axis on the hand-wheel, and turn
 * local −X into the room so the rear face lands COPPER_WALL_CLEARANCE off the wall.
 */
export function fitCopperPipe(model:THREE.Object3D,mount:SconceMount,length=copperSectionLength()){
 model.updateMatrixWorld(true);
 const sourceBounds=model.userData.lodSourceBounds;
 const box=sourceBounds
  ?new THREE.Box3(new THREE.Vector3(...sourceBounds.min),new THREE.Vector3(...sourceBounds.max))
  :new THREE.Box3().setFromObject(model);
 const size=box.getSize(new THREE.Vector3());
 const scale=length/(size.z||1);
 const height=size.y*scale;
 const centreZ=(box.min.z+box.max.z)*.5;
 model.position.set(-box.max.x,-box.min.y,-centreZ);
 const pivot=new THREE.Group();
 pivot.name='copperPipeMount';
 pivot.add(model);
 pivot.scale.setScalar(scale);
 pivot.rotation.y=mount.yaw+Math.PI/2;
 pivot.position.set(mount.x,COPPER_AXIS_Y-height/2,mount.z).addScaledVector(inwardVec(mount.yaw),COPPER_WALL_CLEARANCE);
 return pivot;
}

/** Repeat the same section along the wheel wall. `section` is cloned; it is not added itself. */
export function fitCopperRun(section:THREE.Object3D,span:CopperWallSpan=copperWallSpan()){
 const run=new THREE.Group();
 run.name='copperPipeRun';
 for(const mount of copperMounts(span)){
  run.add(fitCopperPipe(section.clone(true),mount,copperSectionLength(span)));
 }
 return run;
}

/** Hide/show sections independently; hysteresis avoids flicker at the distance boundary. */
export function updateCopperPipe(visual:CopperPipe,position:THREE.Vector3){
 let nearest=Infinity;
 for(const section of visual.sections){
  const distance=section.centre.distanceTo(position);
  nearest=Math.min(nearest,distance);
  section.detailed=!!section.near && distance<(section.detailed?COPPER_DETAIL_DISTANCE+COPPER_LOD_HYSTERESIS:COPPER_DETAIL_DISTANCE);
  section.far.visible=!section.detailed;
  if(section.near)section.near.visible=section.detailed;
 }
 return visual.ready&&!visual.disposed&&!visual.detailReady&&!visual.detailLoading&&visual.detailAttempts<3&&Date.now()>=visual.retryAfter&&nearest<COPPER_DETAIL_PREFETCH;
}

function prepareModel(model:THREE.Object3D,envMap?:THREE.Texture|null){
 model.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;
  for(const m of Array.isArray(o.material)?o.material:[o.material]){
   if(!(m instanceof THREE.MeshStandardMaterial))continue;
   if(envMap){m.envMap=envMap;m.envMapIntensity=.65;}
   m.needsUpdate=true;
  }
 });
}

/** Smaller geometry and textures arrive first; original download waits for approach. */
export async function upgradeCopperPipe(visual:CopperPipe,envMap?:THREE.Texture|null):Promise<boolean>{
 if(typeof document==='undefined'||visual.disposed)return false;
 if(visual.ready)return true;
 try{
  const {scene}=await new GLTFLoader().loadAsync(COPPER_FAR_URL);
  if(visual.disposed)return false;
  prepareModel(scene,envMap);
  const run=fitCopperRun(scene);
  visual.group.add(run);
  visual.sections=run.children.map(far=>({far,centre:new THREE.Box3().setFromObject(far).getCenter(new THREE.Vector3()),detailed:false}));
  visual.ready=true;
  return true;
 }catch(err){console.warn('Copper pipe preview failed to load.',err);return false;}
}

/** Download once for the run; all eight sections share the original geometry/textures. */
export async function upgradeCopperPipeDetail(visual:CopperPipe,envMap?:THREE.Texture|null):Promise<THREE.Object3D[]>{
 if(visual.disposed||!visual.ready||visual.detailReady||visual.detailLoading)return [];
 visual.detailLoading=true;visual.detailAttempts++;
 try{
  const {scene}=await new GLTFLoader().loadAsync(COPPER_PIPE_URL);
  if(visual.disposed)return [];
  prepareModel(scene,envMap);
  const run=fitCopperRun(scene);
  run.children.forEach((near,i)=>{near.visible=false;visual.sections[i].near=near;});
  visual.group.add(run);visual.detailReady=true;
  return [...run.children];
 }catch(err){
  visual.retryAfter=Date.now()+10000;
  console.warn('Copper detail unavailable; keeping the distant model.',err);return [];
 }finally{visual.detailLoading=false;}
}
