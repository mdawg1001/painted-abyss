/**
 * Hidden wall pipe — Sketchfab “04_DOOM_pipe (detail)” by gleb_tihon (CC BY 4.0).
 * https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9
 *
 * Bolted along the south wall of the far south-west cavern corner: a dead end
 * the marker routes never lead past, lit only by the spill of the nearest sconce
 * and the diver's torch. The source scan is ~794k triangles; the shipped GLB is
 * decimated and texture-compressed (see public/assets/doom-pipe/README.md).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { FLOOR_Y } from './simulation';
import type { SconceMount } from './sconceAsset';

export const PIPE_ASSET_URL='/assets/doom-pipe/doom_pipe.glb';
export const PIPE_SOURCE='https://sketchfab.com/3d-models/04-doom-pipe-detail-41063ef623eb41f5a981fff8997e54b9';
export const PIPE_AUTHOR='gleb_tihon';
export const PIPE_LICENSE='CC BY 4.0';

/**
 * South face of cell (4,24)/(5,24): the inner wall plane sits at z = -98, the
 * room lies toward +z. Row 25 is solid under cols 4–9, so this whole stretch is
 * a blind wall behind the west shelf, off every turquoise and amber route.
 */
export const PIPE_MOUNT:SconceMount={x:-26,z:-98,yaw:0};
/** Longest horizontal run of the pipe once hung (metres). */
export const PIPE_TARGET_LENGTH=4.2;
/** Pipe centreline height above the cave floor. */
export const PIPE_MOUNT_Y=FLOOR_Y+2.35;
/** Clear the wall-face rock icosahedrons (~0.45 m in, ~0.35 m bulge). */
export const PIPE_STAND_OFF=.5;

export type WallPipe={group:THREE.Group;ready:boolean};

const inwardVec=(yaw:number)=>new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));

/** World-space origin of the pipe centreline in front of the wall. */
export function pipeAnchor(m:SconceMount=PIPE_MOUNT){
 return new THREE.Vector3(m.x,PIPE_MOUNT_Y,m.z).addScaledVector(inwardVec(m.yaw),PIPE_STAND_OFF);
}

/** Rusted cylinder with two flanges so something reads there before the GLB lands. */
function buildPipeStub(m:SconceMount):THREE.Group{
 const root=new THREE.Group();
 root.name='doomPipeStub';
 const mat=new THREE.MeshStandardMaterial({color:0x4a3b2e,roughness:.85,metalness:.55});
 const r=.16,len=PIPE_TARGET_LENGTH;
 const body=new THREE.Mesh(new THREE.CylinderGeometry(r,r,len,16),mat);
 body.rotation.z=Math.PI/2;
 root.add(body);
 for(const x of [-len*.32,len*.32]){
  const flange=new THREE.Mesh(new THREE.CylinderGeometry(r*1.45,r*1.45,.09,16),mat);
  flange.rotation.z=Math.PI/2;flange.position.x=x;
  root.add(flange);
 }
 root.position.copy(pipeAnchor(m));
 root.rotation.y=m.yaw;
 return root;
}

export function createWallPipe(mount:SconceMount=PIPE_MOUNT):WallPipe{
 const group=new THREE.Group();
 group.name='doomPipe';
 group.userData.mount=mount;
 group.add(buildPipeStub(mount));
 return{group,ready:false};
}

/**
 * Orient the authored mesh so its longest axis runs along the wall, its shortest
 * points into the room, and it sits centred on the anchor at PIPE_TARGET_LENGTH.
 */
export function fitPipeToWall(model:THREE.Object3D,mount:SconceMount){
 const box=new THREE.Box3().setFromObject(model);
 const size=box.getSize(new THREE.Vector3());
 const axes:[('x'|'y'|'z'),number][]=[['x',size.x],['y',size.y],['z',size.z]];
 axes.sort((a,b)=>b[1]-a[1]);
 const long=axes[0][0],thin=axes[2][0];
 // Local frame: X along the wall, Z into the room.
 const pivot=new THREE.Group();
 pivot.add(model);
 if(long==='y')model.rotation.z=Math.PI/2;
 else if(long==='z')model.rotation.y=Math.PI/2;
 // Bring the thinnest remaining axis round to face the room (+Z local).
 model.updateMatrixWorld(true);
 const turned=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
 if(turned.y<turned.z&&thin!==long)model.rotation.x=Math.PI/2;
 model.updateMatrixWorld(true);
 const fitted=new THREE.Box3().setFromObject(model);
 const fsize=fitted.getSize(new THREE.Vector3());
 const scale=PIPE_TARGET_LENGTH/(fsize.x||1);
 const centre=fitted.getCenter(new THREE.Vector3());
 model.position.sub(centre);
 pivot.scale.setScalar(scale);
 // Back face flush to the wall plane: shift so the rear of the mesh sits at the anchor's wall side.
 const depth=fsize.z*scale;
 const anchor=pipeAnchor(mount).addScaledVector(inwardVec(mount.yaw),depth*.5-PIPE_STAND_OFF*.35);
 pivot.position.copy(anchor);
 pivot.rotation.y=mount.yaw;
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
   for(const m of mats)if(m instanceof THREE.MeshStandardMaterial){m.envMapIntensity=.4;m.needsUpdate=true;}
  });
  const pivot=fitPipeToWall(model,mount);
  while(visual.group.children.length)visual.group.remove(visual.group.children[0]);
  visual.group.add(pivot);
  visual.ready=true;
  return true;
 }catch(err){
  console.warn('Doom pipe failed to load; keeping stub.',err);
  return false;
 }
}
