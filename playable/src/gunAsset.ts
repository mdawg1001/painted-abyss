/**
 * Player inventory gun — Sketchfab “3D Retro Gun Model - Free Download”
 * by PolyCube (Free Standard), plus the Soviet TT-33 for guard hands.
 *
 * Replaces the box placeholder only:
 * - diver's held gun (PolyCube, unlit so it reads with the torch stowed)
 * - corridor floor pickup (PolyCube)
 * - pistol in the Soviet guard's hand (TT-33)
 *
 * Guard body scale, AI, and gear rules stay in simulation / sovietGuardAsset.
 * https://sketchfab.com/3d-models/3d-retro-gun-model-free-download-ff244414e90c43fa9bd1bc4c4ca7c0bb
 * https://sketchfab.com/3d-models/soviet-pistol-tt-33-0e2876969dff4d0ea86e9dbf3cb0dce9
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const RETRO_GUN_SOURCE='https://sketchfab.com/3d-models/3d-retro-gun-model-free-download-ff244414e90c43fa9bd1bc4c4ca7c0bb';
export const RETRO_GUN_AUTHOR='PolyCube';
export const RETRO_GUN_AUTHOR_URL='https://sketchfab.com/ItsPolyCube';
export const RETRO_GUN_LICENSE='Free Standard';
/** Public path — must match `playable/public/assets/retro-gun/retro_gun.glb`. */
export const RETRO_GUN_GLB='/assets/retro-gun/retro_gun.glb';
/** Official Sketchfab viewer face count for the PolyCube gun. */
export const RETRO_GUN_TRIANGLES=1220;

export const TT33_SOURCE='https://sketchfab.com/3d-models/soviet-pistol-tt-33-0e2876969dff4d0ea86e9dbf3cb0dce9';
export const TT33_AUTHOR='Stupid Mad Polygon';
export const TT33_AUTHOR_URL='https://sketchfab.com/stupidmadpolygon';
export const TT33_LICENSE='CC BY 4.0';
/** Public path — must match `playable/public/assets/tt33/tt33.glb`. */
export const TT33_GLB='/assets/tt33/tt33.glb';

/**
 * Authored mesh space: barrel along −X, grip along −Y.
 * Lengths below match the box placeholders these meshes replace.
 */
export const TT33_HELD_LENGTH=.42;
export const TT33_PICKUP_LENGTH=.8;
export const TT33_GUARD_LENGTH=.5;
/**
 * Local offset in the guard's right-hand bone (FistR) after the Quaternius
 * soldier parents the gun group there. Near-origin so the pistol follows the fist.
 */
export const TT33_GUARD_POS={x:.02,y:-.02,z:-.06} as const;

export type GunFit='held'|'pickup'|'guard';

type ProtoKind='retro'|'tt33';

const protos:Record<ProtoKind,THREE.Group|null|undefined>={retro:undefined,tt33:undefined};
const pending:Record<ProtoKind,Promise<THREE.Group|null>|null>={retro:null,tt33:null};
const waiters:Record<ProtoKind,Array<(scene:THREE.Group|null)=>void>>={retro:[],tt33:[]};

function cloneTree(src:THREE.Object3D,unlit:boolean){
 const clone=src.clone(true);
 clone.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.geometry=o.geometry.clone();
  const mats=Array.isArray(o.material)?o.material:[o.material];
  const next=mats.map(m=>{
   const sm=m as THREE.MeshStandardMaterial;
   if(unlit){
    return new THREE.MeshBasicMaterial({
     map:sm.map??null,
     color:sm.color?sm.color.clone():new THREE.Color(0xffffff),
     side:THREE.DoubleSide,
    });
   }
   const copy=sm.clone();
   copy.envMapIntensity=.45;
   if(!copy.emissive)copy.emissive=new THREE.Color(0x000000);
   copy.emissive.setHex(0x222426);
   copy.emissiveIntensity=.35;
   copy.needsUpdate=true;
   return copy;
  });
  o.material=Array.isArray(o.material)?next:next[0];
 });
 return clone;
}

/**
 * Center the pistol, aim it, and scale it to the placeholder's reach.
 * Barrel in the file points along −X.
 */
export function fitGun(model:THREE.Object3D,fit:GunFit,meshName='gunMesh'){
 const wrap=new THREE.Group();
 wrap.name=meshName;
 const pivot=new THREE.Group();
 pivot.add(model);
 wrap.add(pivot);
 model.updateMatrixWorld(true);
 const box0=new THREE.Box3().setFromObject(model);
 const size=box0.getSize(new THREE.Vector3());
 const center=box0.getCenter(new THREE.Vector3());
 pivot.position.copy(center).multiplyScalar(-1);
 const length=fit==='held'?TT33_HELD_LENGTH:fit==='pickup'?TT33_PICKUP_LENGTH:TT33_GUARD_LENGTH;
 wrap.scale.setScalar(length/Math.max(size.x,1e-4));
 if(fit==='pickup'){
  // −X barrel → +X, then lay the thin axis vertical so it rests like the old floor bar.
  const yaw=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI);
  const lay=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),Math.PI/2);
  wrap.quaternion.copy(lay.multiply(yaw));
 }else{
  // −X barrel → −Z (camera forward / guard forward). Grip stays down.
  wrap.quaternion.setFromAxisAngle(new THREE.Vector3(0,1,0),-Math.PI/2);
 }
 wrap.updateMatrixWorld(true);
 const box1=new THREE.Box3().setFromObject(wrap);
 const c=box1.getCenter(new THREE.Vector3());
 if(fit==='held'){
  wrap.position.set(-c.x,-.03-c.y,-.06-c.z);
  wrap.traverse(o=>{if(o instanceof THREE.Mesh){o.frustumCulled=false;o.castShadow=false;o.receiveShadow=false;}});
 }else if(fit==='pickup'){
  wrap.position.set(.18-c.x,.02-box1.min.y,-c.z);
  wrap.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
 }else{
  wrap.position.set(TT33_GUARD_POS.x-c.x,TT33_GUARD_POS.y-c.y,TT33_GUARD_POS.z-c.z);
  wrap.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
 }
 return wrap;
}

export function fitTt33(model:THREE.Object3D,fit:GunFit){
 return fitGun(model,fit,'tt33Mesh');
}

export function fitRetroGun(model:THREE.Object3D,fit:GunFit){
 return fitGun(model,fit,'retroGunMesh');
}

function loadProto(kind:ProtoKind,url:string,label:string){
 if(!pending[kind]){
  pending[kind]=(async()=>{
   try{
    const gltf=await new GLTFLoader().loadAsync(url);
    const scene=gltf.scene;
    scene.name=kind==='retro'?'retroGunProto':'tt33Proto';
    return scene;
   }catch(err){
    console.warn(`${label} mesh failed to load; keeping placeholder.`,err);
    return null;
   }
  })().then(scene=>{
   protos[kind]=scene;
   const queued=waiters[kind].splice(0);
   for(const fn of queued)fn(scene);
   return scene;
  });
 }
 return pending[kind]!;
}

function whenProto(kind:ProtoKind,url:string,label:string,fn:(scene:THREE.Group|null)=>void){
 if(protos[kind]!==undefined){fn(protos[kind]!);return;}
 waiters[kind].push(fn);
 loadProto(kind,url,label);
}

function dropStubs(holder:THREE.Object3D){
 for(const child of [...holder.children]){
  if(!child.userData.gunStub)continue;
  holder.remove(child);
  child.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   o.geometry.dispose();
   const mats=Array.isArray(o.material)?o.material:[o.material];
   for(const m of mats)m.dispose();
  });
 }
}

function mountProto(holder:THREE.Object3D,fit:GunFit,kind:ProtoKind,url:string,label:string){
 whenProto(kind,url,label,scene=>{
  if(!scene||holder.userData.gunAlive===false)return;
  const unlit=fit!=='guard';
  const fitted=(kind==='retro'?fitRetroGun:fitTt33)(cloneTree(scene,unlit),fit);
  dropStubs(holder);
  holder.add(fitted);
 });
}

/** Swap placeholder children for the PolyCube retro gun (inventory held / floor pickup). */
export function mountRetroGun(holder:THREE.Object3D,fit:Exclude<GunFit,'guard'>){
 mountProto(holder,fit,'retro',RETRO_GUN_GLB,'Retro gun');
}

/** Swap placeholder children for the TT-33 (guard hand). Stubs stay if the load fails. */
export function mountTt33(holder:THREE.Object3D,fit:GunFit){
 mountProto(holder,fit,'tt33',TT33_GLB,'TT-33');
}
