/**
 * Soviet pistol TT-33 (Sketchfab, CC BY 4.0).
 *
 * Replaces the box placeholder only:
 * - diver's held gun (unlit, so it reads with the torch stowed)
 * - corridor floor pickup
 * - pistol in the Soviet guard's hand
 *
 * Guard body scale, AI, and gear rules stay in simulation / sovietGuardAsset.
 * https://sketchfab.com/3d-models/soviet-pistol-tt-33-0e2876969dff4d0ea86e9dbf3cb0dce9
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const TT33_SOURCE='https://sketchfab.com/3d-models/soviet-pistol-tt-33-0e2876969dff4d0ea86e9dbf3cb0dce9';
export const TT33_AUTHOR='Stupid Mad Polygon';
export const TT33_AUTHOR_URL='https://sketchfab.com/stupidmadpolygon';
export const TT33_LICENSE='CC BY 4.0';
/** Public path — must match `playable/public/assets/tt33/tt33.glb`. */
export const TT33_GLB='/assets/tt33/tt33.glb';

/**
 * Authored mesh: barrel along −X, grip along −Y, about 0.28 m long.
 * Lengths below match the box placeholders these meshes replace.
 */
export const TT33_HELD_LENGTH=.42;
export const TT33_PICKUP_LENGTH=.8;
export const TT33_GUARD_LENGTH=.5;
/**
 * Same anchor as the guard stub box (chest-height, right-front).
 * y ≈ SOVIET_GUARD_HEIGHT * 0.66 (1.90 m adult → ~1.25).
 */
export const TT33_GUARD_POS={x:.32,y:1.25,z:-.38} as const;

export type GunFit='held'|'pickup'|'guard';

let proto:THREE.Group|null|undefined;
let pending:Promise<THREE.Group|null>|null=null;
const waiters:Array<(scene:THREE.Group|null)=>void>=[];

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
 * Center the authored pistol, aim it, and scale it to the placeholder's reach.
 * Barrel in the file points along −X.
 */
export function fitTt33(model:THREE.Object3D,fit:GunFit){
 const wrap=new THREE.Group();
 wrap.name='tt33Mesh';
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

function loadProto(){
 if(!pending){
  pending=(async()=>{
   try{
    const gltf=await new GLTFLoader().loadAsync(TT33_GLB);
    const scene=gltf.scene;
    scene.name='tt33Proto';
    return scene;
   }catch(err){
    console.warn('TT-33 mesh failed to load; keeping placeholder.',err);
    return null;
   }
  })().then(scene=>{
   proto=scene;
   const queued=waiters.splice(0);
   for(const fn of queued)fn(scene);
   return scene;
  });
 }
 return pending;
}

function whenTt33(fn:(scene:THREE.Group|null)=>void){
 if(proto!==undefined){fn(proto);return;}
 waiters.push(fn);
 loadProto();
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

/** Swap placeholder children for the TT-33 once the glTF is in. Stubs stay if the load fails. */
export function mountTt33(holder:THREE.Object3D,fit:GunFit){
 whenTt33(scene=>{
  if(!scene||holder.userData.gunAlive===false)return;
  const unlit=fit!=='guard';
  const fitted=fitTt33(cloneTree(scene,unlit),fit);
  dropStubs(holder);
  holder.add(fitted);
 });
}
