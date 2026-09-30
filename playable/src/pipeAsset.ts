/**
 * Leak-valve riser — Sketchfab “04_DOOM_pipe (detail)” by gleb_tihon (CC BY 4.0).
 * https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9
 *
 * The green main line, clamp collar, red hand-wheel gate valve, bracket frame
 * and bypass loop stand against the south wall of the far south-west cavern
 * corner: a dead end the marker routes never lead past. Scaled so the handwheel
 * is a real ~0.3 m wheel at chest height (see valve.ts); a plain run of the same
 * pipe carries it on up into the roof.
 *
 * The shipped GLB (scripts/build-doom-pipe.mjs) splits the wheel into its own
 * node, `valveWheel`, pivoted on the spin axis, so turning it is one rotation.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { MODEL, PIPE_ORIGIN, PIPE_SCALE, PIPE_MODEL_TOP_Y, PIPE_WALL, PIPE_WALL_CLEARANCE, modelToWorld } from './valve';
import type { SconceMount } from './sconceAsset';

export const PIPE_ASSET_URL='/assets/doom-pipe/doom_pipe.glb';
export const PIPE_SOURCE='https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9';
export const PIPE_AUTHOR='gleb_tihon';
export const PIPE_LICENSE='CC BY 4.0';
/** Cave roof plane (CaveWorld builds it at y 8); the extension runs just into it. */
export const PIPE_ROOF_Y=8.1;
/** Albedo multiplier for silt and corrosion on the factory paint. */
export const PIPE_GRIME=.55;

/** Wall face the riser stands on (the south face of cells (4,24)/(5,24)); faces +Z into the room. */
export const PIPE_MOUNT:SconceMount={x:PIPE_WALL.x,z:PIPE_WALL.z,yaw:0};
export { PIPE_WALL_CLEARANCE };

export type WallPipe={group:THREE.Group;ready:boolean;wheel:THREE.Object3D|null};

export function createWallPipe():WallPipe{
 const group=new THREE.Group();
 group.name='doomPipe';
 return{group,ready:false,wheel:null};
}

/** Painted steel that reads under the torch instead of going black or blowing out. */
function weatherMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!(m instanceof THREE.MeshStandardMaterial)||m.userData.weathered)continue;
   m.userData.weathered=true;
   // Several source materials leave metallicFactor at the glTF default of 1; with no
   // cave env map a full metal renders black under point lights.
   m.metalness=Math.min(m.metalness,.35);
   m.roughness=Math.max(m.roughness,.55);
   m.color.multiplyScalar(PIPE_GRIME);
   // The one emissive part is a small indicator strip; keep it a faint tell, not a lamp.
   if(m.emissive.getHex()!==0)m.emissiveIntensity=.35;
   m.needsUpdate=true;
  }
 });
}

/** Plain length of the green main line from the model's cut top up into the roof, with a bolted flange at the joint. */
function buildRoofRun(green:THREE.Material,flange:THREE.Material):THREE.Group{
 const g=new THREE.Group();g.name='doomPipeRoofRun';
 const r=MODEL.topPipeR*PIPE_SCALE;
 const c=modelToWorld({x:0,y:0,z:MODEL.topPipeZ});
 const h=PIPE_ROOF_Y-PIPE_MODEL_TOP_Y+.02;
 const run=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,24,1,true),green);
 run.position.set(c.x,PIPE_MODEL_TOP_Y-.01+h/2,c.z);
 const ring=new THREE.Mesh(new THREE.CylinderGeometry(r*1.28,r*1.28,.035,24),flange);
 ring.position.set(c.x,PIPE_MODEL_TOP_Y+.012,c.z);
 g.add(run,ring);
 for(let i=0;i<8;i++){
  const a=i/8*Math.PI*2;
  const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.009,.009,.05,6),flange);
  bolt.position.set(c.x+Math.cos(a)*r*1.14,PIPE_MODEL_TOP_Y+.012,c.z+Math.sin(a)*r*1.14);
  g.add(bolt);
 }
 g.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
 return g;
}

function findMaterial(root:THREE.Object3D,name:string):THREE.Material|null{
 let found:THREE.Material|null=null;
 root.traverse(o=>{
  if(found||!(o instanceof THREE.Mesh))return;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  found=mats.find(m=>m.name===name)??null;
 });
 return found;
}

/** Model → world: scale, stand the rear face on the wall, foot in the sand. */
export function fitPipeToWall(model:THREE.Object3D,_mount:SconceMount=PIPE_MOUNT){
 const pivot=new THREE.Group();
 pivot.name='doomPipeMount';
 model.position.set(0,-MODEL.minY,-MODEL.backZ);
 pivot.add(model);
 pivot.scale.setScalar(PIPE_SCALE);
 pivot.position.set(PIPE_ORIGIN.x,PIPE_ORIGIN.y,PIPE_ORIGIN.z);
 return pivot;
}

/** Wheel rotation: `turned` radians clockwise as the player (looking −Z) sees it. */
export function setPipeWheel(visual:WallPipe,turned:number){
 if(visual.wheel)visual.wheel.rotation.z=-turned;
}

export async function upgradeWallPipe(visual:WallPipe):Promise<boolean>{
 if(typeof document==='undefined')return false;
 try{
  const loader=new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf=await loader.loadAsync(PIPE_ASSET_URL);
  const model=gltf.scene;
  weatherMaterials(model);
  visual.group.add(fitPipeToWall(model));
  visual.wheel=model.getObjectByName('valveWheel')??null;
  const green=findMaterial(model,'mat_t5'),flange=findMaterial(model,'mat_t6');
  if(green&&flange)visual.group.add(buildRoofRun(green,flange));
  visual.ready=true;
  return true;
 }catch(err){
  console.warn('Doom pipe failed to load.',err);
  return false;
 }
}
