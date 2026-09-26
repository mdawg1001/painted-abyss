/**
 * Player inventory gun — Sketchfab “AK74U | FREE ANIMATION.” by BURNER
 * (CC BY 4.0), plus the Soviet TT-33 for guard hands.
 *
 * - diver's held gun: full FPS arms+AK viewmodel with DRAW / IDLE / SHOOT / RELOAD clips
 * - corridor floor pickup: AK meshes only (arms hidden)
 * - pistol in the Soviet guard's hand (TT-33)
 *
 * Guard body scale, AI, and gear rules stay in simulation / sovietGuardAsset.
 * https://sketchfab.com/3d-models/ak74u-free-animation-2ab66220c48b465e9501067667965569
 * https://sketchfab.com/3d-models/soviet-pistol-tt-33-0e2876969dff4d0ea86e9dbf3cb0dce9
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';

export const AK74U_SOURCE='https://sketchfab.com/3d-models/ak74u-free-animation-2ab66220c48b465e9501067667965569';
export const AK74U_AUTHOR='BURNER';
export const AK74U_AUTHOR_URL='https://sketchfab.com/Alexander_Ovelar';
export const AK74U_LICENSE='CC BY 4.0';
/** Public path — must match `playable/public/assets/ak74u/ak74u.glb`. */
export const AK74U_GLB='/assets/ak74u/ak74u.glb';
/** Sketchfab face count for the published model. */
export const AK74U_TRIANGLES=69013;
export const AK74U_ANIMATIONS=['DRAW','IDLE','INSPEC','OLSER','RELOAD1','RELOAD2','SHOOT'] as const;
export type Ak74uClip=typeof AK74U_ANIMATIONS[number];

/** @deprecated Alias kept for any lingering imports; use AK74U_*. */
export const RETRO_GUN_SOURCE=AK74U_SOURCE;
export const RETRO_GUN_AUTHOR=AK74U_AUTHOR;
export const RETRO_GUN_AUTHOR_URL=AK74U_AUTHOR_URL;
export const RETRO_GUN_LICENSE=AK74U_LICENSE;
export const RETRO_GUN_GLB=AK74U_GLB;
export const RETRO_GUN_TRIANGLES=AK74U_TRIANGLES;

export const TT33_SOURCE='https://sketchfab.com/3d-models/soviet-pistol-tt-33-0e2876969dff4d0ea86e9dbf3cb0dce9';
export const TT33_AUTHOR='Stupid Mad Polygon';
export const TT33_AUTHOR_URL='https://sketchfab.com/stupidmadpolygon';
export const TT33_LICENSE='CC BY 4.0';
/** Public path — must match `playable/public/assets/tt33/tt33.glb`. */
export const TT33_GLB='/assets/tt33/tt33.glb';

/**
 * Authored mesh space (TT-33): barrel along −X, grip along −Y.
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

/**
 * Camera-local rest for the AK74U FPS arms+gun viewmodel.
 * The Sketchfab clip is authored as a first-person aim; keep near the eye.
 */
export const AK74U_HELD_POS={x:0,y:-.02,z:0} as const;
export const AK74U_HELD_ROT={x:0,y:0,z:0} as const;
/** Uniform scale after drabbing the authored centimetre FBX (root already ×0.01). */
export const AK74U_HELD_SCALE=1;
/** Floor pickup length along the barrel (m). */
export const AK74U_PICKUP_LENGTH=.78;

export type GunFit='held'|'pickup'|'guard';

type AkProto={scene:THREE.Group;clips:THREE.AnimationClip[]};
type TtProto=THREE.Group;

let akPending:Promise<AkProto|null>|null=null;
const akWaiters:Array<(p:AkProto|null)=>void>=[];
let _akProto:AkProto|null|undefined=undefined;

const ttProtos:Record<'tt33',TtProto|null|undefined>={tt33:undefined};
const ttPending:Record<'tt33',Promise<TtProto|null>|null>={tt33:null};
const ttWaiters:Record<'tt33',Array<(scene:TtProto|null)=>void>>={tt33:[]};

function cloneTree(src:THREE.Object3D,unlit:boolean){
 // Skinned FPS arms+gun must use SkeletonUtils.clone or the skeleton binding breaks.
 const clone=cloneSkeleton(src);
 clone.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  const next=mats.map(m=>{
   const sm=m as THREE.MeshStandardMaterial;
   if(unlit){
    // Pickup meshes stay unlit but get a hard cyan lift so bloom catches them.
    const color=sm.color?sm.color.clone():new THREE.Color(0xffffff);
    color.lerp(new THREE.Color(0x5ce0ff),.42);
    return new THREE.MeshBasicMaterial({
     map:sm.map??null,
     color,
     side:THREE.DoubleSide,
    });
   }
   const copy=sm.clone();
   copy.envMapIntensity=.45;
   if(!copy.emissive)copy.emissive=new THREE.Color(0x000000);
   // Hot cyan neon so held AK / guard TT-33 scream into UnrealBloomPass.
   copy.emissive.setHex(0x2ad4ff);
   copy.emissiveIntensity=2.4;
   copy.needsUpdate=true;
   return copy;
  });
  o.material=Array.isArray(o.material)?next:next[0];
 });
 return clone;
}

/**
 * Center the TT-33, aim it, and scale it to the placeholder's reach.
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
  const yaw=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI);
  const lay=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),Math.PI/2);
  wrap.quaternion.copy(lay.multiply(yaw));
 }else{
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

/** Hide arm/hoodie skins so the floor pickup is the carbine only. */
function stripArms(root:THREE.Object3D){
 root.traverse(o=>{
  const n=(o.name||'').toLowerCase();
  if(n.includes('ch08_body')||n.includes('ch08_hoodie')||n.includes('hoodie')){
   o.visible=false;
  }
 });
}

/**
 * Fit the AK74U FPS viewmodel for camera parent (held) or floor (pickup).
 * Held keeps authored FPS orientation; pickup isolates the gun meshes.
 */
export function fitAk74u(model:THREE.Object3D,fit:Exclude<GunFit,'guard'>){
 const wrap=new THREE.Group();
 wrap.name='ak74uMesh';
 const pivot=new THREE.Group();
 pivot.add(model);
 wrap.add(pivot);
 if(fit==='pickup')stripArms(model);
 model.updateMatrixWorld(true);
 const box0=new THREE.Box3().setFromObject(model);
 const size=box0.getSize(new THREE.Vector3());
 const center=box0.getCenter(new THREE.Vector3());
 if(fit==='held'){
  // Authored as a standing FPS rig (metres after the FBX ×0.01). Put the eye at the
  // camera: shift so the top of the bbox sits on the lens and the figure faces −Z.
  pivot.position.set(-center.x,-(box0.max.y-0.02),-center.z);
  wrap.scale.setScalar(AK74U_HELD_SCALE);
  wrap.position.set(0,0,0);
  wrap.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   o.frustumCulled=false;
   o.castShadow=false;
   o.receiveShadow=false;
  });
 }else{
  pivot.position.copy(center).multiplyScalar(-1);
  const length=Math.max(size.x,size.z,1e-4);
  wrap.scale.setScalar(AK74U_PICKUP_LENGTH/length);
  wrap.rotation.set(0,Math.PI/2,Math.PI/2);
  wrap.updateMatrixWorld(true);
  const box1=new THREE.Box3().setFromObject(wrap);
  wrap.position.set(.18-box1.getCenter(new THREE.Vector3()).x,.02-box1.min.y,0);
  wrap.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
 }
 return wrap;
}

/** @deprecated Use fitAk74u. */
export function fitRetroGun(model:THREE.Object3D,fit:Exclude<GunFit,'guard'>){
 return fitAk74u(model,fit);
}

function loadAkProto(){
 if(!akPending){
  akPending=(async()=>{
   try{
    const gltf=await new GLTFLoader().loadAsync(AK74U_GLB);
    const scene=gltf.scene;
    scene.name='ak74uProto';
    const clips=(gltf.animations||[]).map(c=>{
     const name=(c.name||'').includes('|')?(c.name.split('|').pop()||c.name):c.name;
     c.name=name;
     return c;
    });
    return {scene,clips} as AkProto;
   }catch(err){
    console.warn('AK74U mesh failed to load; keeping placeholder.',err);
    return null;
   }
  })().then(proto=>{
   _akProto=proto;
   const queued=akWaiters.splice(0);
   for(const fn of queued)fn(proto);
   return proto;
  });
 }
 return akPending;
}

function whenAk(fn:(p:AkProto|null)=>void){
 if(_akProto!==undefined){fn(_akProto);return;}
 akWaiters.push(fn);
 loadAkProto();
}

function loadTt33(){
 if(!ttPending.tt33){
  ttPending.tt33=(async()=>{
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
   ttProtos.tt33=scene;
   const queued=ttWaiters.tt33.splice(0);
   for(const fn of queued)fn(scene);
   return scene;
  });
 }
 return ttPending.tt33!;
}

function whenTt33(fn:(scene:TtProto|null)=>void){
 if(ttProtos.tt33!==undefined){fn(ttProtos.tt33);return;}
 ttWaiters.tt33.push(fn);
 loadTt33();
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

export type Ak74uRuntime={
 mixer:THREE.AnimationMixer;
 actions:Partial<Record<Ak74uClip,THREE.AnimationAction>>;
 current:Ak74uClip|'';
};

function buildActions(mixer:THREE.AnimationMixer,clips:THREE.AnimationClip[]){
 const actions:Ak74uRuntime['actions']={};
 for(const clip of clips){
  const name=clip.name as Ak74uClip;
  if(!(AK74U_ANIMATIONS as readonly string[]).includes(name))continue;
  const action=mixer.clipAction(clip);
  action.enabled=true;
  if(name==='IDLE'){
   action.setLoop(THREE.LoopRepeat,Infinity);
   action.clampWhenFinished=false;
  }else{
   action.setLoop(THREE.LoopOnce,1);
   action.clampWhenFinished=true;
  }
  actions[name]=action;
 }
 return actions;
}

function fadeTo(rt:Ak74uRuntime,name:Ak74uClip,fade=.15){
 const next=rt.actions[name];
 if(!next)return;
 if(rt.current===name&&next.isRunning())return;
 const prev=rt.current?rt.actions[rt.current]:undefined;
 next.reset();
 next.setEffectiveWeight(1);
 next.play();
 if(prev&&prev!==next)prev.crossFadeTo(next,fade,false);
 else if(fade>0)next.fadeIn(fade);
 rt.current=name;
 if(name!=='IDLE'){
  const onDone=(e:{action:THREE.AnimationAction})=>{
   if(e.action!==next)return;
   next.getMixer().removeEventListener('finished',onDone);
   if(rt.current===name)fadeTo(rt,'IDLE',.12);
  };
  next.getMixer().addEventListener('finished',onDone);
 }
}

/** Kick off the 23 MB FPS pack without mounting (idle prefetch after Begin dive). */
export function prefetchAk74u(){
 return loadAkProto();
}

/** Swap placeholder for the AK74U viewmodel (held) or floor carbine (pickup). */
export function mountAk74u(holder:THREE.Object3D,fit:Exclude<GunFit,'guard'>):Promise<boolean>{
 if(holder.userData.akMounted)return Promise.resolve(!!holder.userData.ak74u||fit==='pickup');
 holder.userData.akMounted=true;
 return new Promise(resolve=>{
  whenAk(proto=>{
   if(!proto||holder.userData.gunAlive===false){resolve(false);return;}
   // Held keeps PBR (normals/AO read under a local fill light). Pickup stays unlit.
   const model=cloneTree(proto.scene,fit==='pickup');
   const fitted=fitAk74u(model,fit);
   dropStubs(holder);
   holder.add(fitted);
   if(fit==='held'){
    // Soft fill so MeshStandardMaterial reads in the dark bunker (no world lights on the FPS layer).
    const fill=new THREE.HemisphereLight(0xa8e8ff,0x1a1510,1.35);
    fill.name='ak74uFill';
    fitted.add(fill);
    const key=new THREE.DirectionalLight(0xfff2e0,.7);
    key.position.set(.2,.4,.6);
    key.name='ak74uKey';
    fitted.add(key);
    // Persistent neon tell on the carbine so UnrealBloomPass always has something hot.
    const neon=new THREE.PointLight(0x2ad4ff,4.5,1.8,2);
    neon.name='ak74uNeon';
    neon.position.set(0,.05,-.35);
    fitted.add(neon);
    const mixer=new THREE.AnimationMixer(model);
    const actions=buildActions(mixer,proto.clips);
    const rt:Ak74uRuntime={mixer,actions,current:''};
    holder.userData.ak74u=rt;
    fadeTo(rt,'IDLE',0);
   }else{
    const mixer=new THREE.AnimationMixer(model);
    const idle=proto.clips.find(c=>c.name==='IDLE');
    if(idle){
     const a=mixer.clipAction(idle);
     a.play();
     mixer.update(0.05);
     a.stop();
    }
    mixer.stopAllAction();
   }
   resolve(true);
  });
 });
}

/** @deprecated Use mountAk74u. */
export function mountRetroGun(holder:THREE.Object3D,fit:Exclude<GunFit,'guard'>){
 mountAk74u(holder,fit);
}

/** Advance the held AK74U AnimationMixer. */
export function updateAk74u(holder:THREE.Object3D|null|undefined,dt:number){
 const rt=holder?.userData?.ak74u as Ak74uRuntime|undefined;
 if(!rt?.mixer)return;
 rt.mixer.update(dt);
}

/** Play a one-shot clip (DRAW / SHOOT / RELOAD*) then return to IDLE. */
export function playAk74u(holder:THREE.Object3D|null|undefined,clip:Ak74uClip,opts?:{timeScale?:number}){
 const rt=holder?.userData?.ak74u as Ak74uRuntime|undefined;
 if(!rt)return;
 const action=rt.actions[clip];
 if(!action)return;
 action.timeScale=opts?.timeScale??1;
 fadeTo(rt,clip,.08);
}

/** Equip draw when the inventory gun is selected. */
export function drawAk74u(holder:THREE.Object3D|null|undefined){
 playAk74u(holder,'DRAW');
}

/** Fire recoil/muzzle anim. */
export function shootAk74u(holder:THREE.Object3D|null|undefined){
 playAk74u(holder,'SHOOT');
}

/** Magazine change — scale RELOAD1 (~2s authored) to the pistol reload window. */
export function reloadAk74u(holder:THREE.Object3D|null|undefined,reloadSeconds=.9){
 const rt=holder?.userData?.ak74u as Ak74uRuntime|undefined;
 const clip=rt?.actions.RELOAD1?.getClip();
 const dur=clip?.duration||1.2;
 playAk74u(holder,'RELOAD1',{timeScale:Math.max(.5,dur/Math.max(reloadSeconds,.2))});
}

/** Swap placeholder children for the TT-33 (guard hand). Stubs stay if the load fails. */
export function mountTt33(holder:THREE.Object3D,fit:GunFit){
 whenTt33(scene=>{
  if(!scene||holder.userData.gunAlive===false)return;
  const unlit=fit!=='guard';
  const fitted=fitTt33(cloneTree(scene,unlit),fit);
  dropStubs(holder);
  holder.add(fitted);
 });
}
