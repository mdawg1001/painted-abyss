/**
 * Hidden wall pipe — Sketchfab “04_DOOM_pipe (detail)” by gleb_tihon (CC BY 4.0).
 * https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9
 *
 * A floor-to-ceiling riser (green main line, clamp collar, red hand-wheel valve,
 * bracket frame and bypass loop) standing against the south wall of the far
 * south-west cavern corner: a dead end the marker routes never lead past, lit
 * only by spill from the nearest sconce and the diver's torch.
 *
 * Source glTF is ~794k triangles / 25 MB; the shipped GLB is welded, simplified
 * to ~49k triangles and meshopt-compressed (~0.5 MB). See
 * public/assets/doom-pipe/README.md.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import type { SconceMount } from './sconceAsset';

export const PIPE_ASSET_URL='/assets/doom-pipe/doom_pipe.glb';
export const PIPE_SOURCE='https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9';
export const PIPE_AUTHOR='gleb_tihon';
export const PIPE_LICENSE='CC BY 4.0';

/**
 * South face of cells (4,24)/(5,24): the inner wall plane sits at z = -98 and the
 * room lies toward +z. Row 25 is solid under cols 4–9, so this stretch is a blind
 * wall behind the west shelf, off every turquoise and amber route. x = -26 sits
 * in the seam between the two cells' wall-face boulders.
 */
export const PIPE_MOUNT:SconceMount={x:-26,z:-98,yaw:0};
/** Cave floor mesh plane and roof plane (CaveWorld builds them at y 0 and 8). */
const CAVE_FLOOR_PLANE=0;
const CAVE_ROOF_PLANE=8;
/** Run the riser from just under the sand to just into the roof so neither end shows cut. */
export const PIPE_BOTTOM_Y=CAVE_FLOOR_PLANE-.05;
export const PIPE_TOP_Y=CAVE_ROOF_PLANE+.1;
/** Rear of the bracket frame clears the wall-face boulders (they bulge ~0.25 m past the wall plane). */
export const PIPE_WALL_CLEARANCE=.35;

/** Albedo multiplier for silt and corrosion on the factory paint. */
export const PIPE_GRIME=.55;

export type WallPipe={group:THREE.Group;ready:boolean};

const inwardVec=(yaw:number)=>new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));

export function createWallPipe(mount:SconceMount=PIPE_MOUNT):WallPipe{
 const group=new THREE.Group();
 group.name='doomPipe';
 group.userData.mount=mount;
 return{group,ready:false};
}

/**
 * The authored model is Y-up with the hand-wheel facing +Z and the bracket frame
 * at -Z. Scale it to span floor to roof, put its back against the wall and turn
 * +Z to face into the room.
 */
export function fitPipeToWall(model:THREE.Object3D,mount:SconceMount){
 model.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(model);
 const size=box.getSize(new THREE.Vector3());
 const scale=(PIPE_TOP_Y-PIPE_BOTTOM_Y)/(size.y||1);
 const centreX=(box.min.x+box.max.x)*.5;
 // Local origin: bottom-centre of the rear face.
 model.position.set(-centreX,-box.min.y,-box.min.z);
 const pivot=new THREE.Group();
 pivot.name='doomPipeMount';
 pivot.add(model);
 pivot.scale.setScalar(scale);
 pivot.rotation.y=mount.yaw;
 pivot.position.set(mount.x,PIPE_BOTTOM_Y,mount.z).addScaledVector(inwardVec(mount.yaw),PIPE_WALL_CLEARANCE);
 return pivot;
}

export async function upgradeWallPipe(visual:WallPipe):Promise<boolean>{
 const mount=visual.group.userData.mount as SconceMount;
 if(typeof document==='undefined')return false;
 try{
  const loader=new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf=await loader.loadAsync(PIPE_ASSET_URL);
  const model=gltf.scene;
  model.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   o.castShadow=true;o.receiveShadow=true;
   const mats=Array.isArray(o.material)?o.material:[o.material];
   for(const m of mats){
    if(!(m instanceof THREE.MeshStandardMaterial))continue;
    // Several source materials leave metallicFactor at the glTF default of 1. With no
    // cave env map a full metal reads black under point lights, so cap it: painted
    // steel still catches the torch but keeps its green/red/bone paint.
    m.metalness=Math.min(m.metalness,.35);
    m.roughness=Math.max(m.roughness,.55);
    // Clean studio paint blows out under the dive torch; years underwater grime it down.
    m.color.multiplyScalar(PIPE_GRIME);
    // The one emissive part is a small indicator strip; keep it a faint tell, not a lamp.
    if(m.emissive.getHex()!==0)m.emissiveIntensity=.35;
    m.needsUpdate=true;
   }
  });
  visual.group.add(fitPipeToWall(model,mount));
  visual.ready=true;
  return true;
 }catch(err){
  console.warn('Doom pipe failed to load.',err);
  return false;
 }
}
