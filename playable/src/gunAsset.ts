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
 * Camera-local rest for the AK74U viewmodel group (sway and aim offsets are added on top).
 * The rig itself is placed by `fitAk74u` so the camera sits at AK74U_HIP_EYE.
 */
export const AK74U_HELD_POS={x:0,y:0,z:0} as const;
export const AK74U_HELD_ROT={x:0,y:0,z:0} as const;
/**
 * The glTF is authored in metres around a standing FPS rig (neck ≈ 1.51 m, carbine facing −Z).
 * Hip view: the eye sits left of and above the receiver, so the carbine rests right of centre
 * and points in toward the crosshair (Sketchfab IDLE view).
 */
export const AK74U_HIP_EYE={x:-.07,y:1.615,z:-.01} as const;
/** Aim-down-sights: the eye behind the rear notch, the front post on the crosshair (Sketchfab AIM view). */
export const AK74U_ADS_EYE={x:.064,y:1.576,z:0} as const;
/**
 * Aim-down-sights tuning. Shouldering a folding-stock carbine takes ~0.2 s; the tighter view
 * is a 1.25× lens-free zoom, and a braced stock soaks up part of the muzzle climb and sway.
 */
export const AK74U_ADS={seconds:.2,fov:52,recoilScale:.7,swayScale:.25} as const;
/** Camera-local offset of the viewmodel at aim blend `aim` (0 hip … 1 sights). */
export function ak74uAimOffset(aim:number){
 const k=Math.min(1,Math.max(0,aim));
 return {
  x:(AK74U_HIP_EYE.x-AK74U_ADS_EYE.x)*k,
  y:(AK74U_HIP_EYE.y-AK74U_ADS_EYE.y)*k,
  z:(AK74U_HIP_EYE.z-AK74U_ADS_EYE.z)*k,
 };
}
/** Room-reflection strength on the carbine: just enough to keep edges readable in the dark (more greys the black finish; the knife uses .45 on bare steel). */
export const AK74U_ENV_INTENSITY=.1;
/** Bones that carry the spare magazine parked out of view between reloads. */
const AK74U_SPARE_MAG_BONES=['carg2'];
/** Bone of the magazine seated in the carbine. */
const AK74U_LOADED_MAG_BONE='carg_';

export type GunFit='held'|'pickup'|'guard';

type AkProto={scene:THREE.Group;clips:THREE.AnimationClip[]};
type TtProto=THREE.Group;

let akPending:Promise<AkProto|null>|null=null;
const akWaiters:Array<(p:AkProto|null)=>void>=[];
let _akProto:AkProto|null|undefined=undefined;

const ttProtos:Record<'tt33',TtProto|null|undefined>={tt33:undefined};
const ttPending:Record<'tt33',Promise<TtProto|null>|null>={tt33:null};
const ttWaiters:Record<'tt33',Array<(scene:TtProto|null)=>void>>={tt33:[]};

function cloneTree(src:THREE.Object3D,unlit:boolean,envMap:THREE.Texture|null=null){
 // Skinned FPS arms+gun must use SkeletonUtils.clone or the skeleton binding breaks.
 const clone=cloneSkeleton(src);
 clone.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  const next=mats.map(m=>{
   const sm=m as THREE.MeshStandardMaterial;
   if(unlit){
    // Pickup meshes stay unlit but get a cyan lift so they read under bloom.
    const color=sm.color?sm.color.clone():new THREE.Color(0xffffff);
    color.lerp(new THREE.Color(0x7ae8ff),.18);
    return new THREE.MeshBasicMaterial({
     name:sm.name,
     map:sm.map??null,
     color,
     side:THREE.DoubleSide,
    });
   }
   // Authored PBR as-is: the viewmodel is lit by the bunker's own lights. A faint room
   // reflection (same one the knife uses) keeps the steel edges readable in the dark.
   const copy=sm.clone();
   if(envMap&&'envMap' in copy){copy.envMap=envMap;copy.envMapIntensity=AK74U_ENV_INTENSITY;}
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

/** Material name of a mesh (node names in the glTF are just Object_57…; materials are named). */
function matName(o:THREE.Object3D){
 const m=(o as THREE.Mesh).material;
 return ((Array.isArray(m)?m[0]:m)?.name||'').toLowerCase();
}
/** Arm and hoodie skins (hidden on the floor pickup): materials Ch08_body / Ch08_body1. */
function isArmMesh(o:THREE.Object3D){
 return (o as THREE.Mesh).isMesh===true&&matName(o).startsWith('ch08');
}

/**
 * The reload's spare magazine is parked on its own bone at the rig's feet. Off the rig (floor
 * pickup) collapse it to a point tucked inside the loaded magazine, so it neither shows nor
 * stretches the carbine's bounds.
 */
function hideSpareMag(root:THREE.Object3D){
 root.updateMatrixWorld(true);
 const find=(prefix:string)=>{let hit:THREE.Object3D|null=null;root.traverse(o=>{if(!hit&&o.name.startsWith(prefix))hit=o;});return hit as THREE.Object3D|null;};
 const loaded=find(AK74U_LOADED_MAG_BONE);
 for(const name of AK74U_SPARE_MAG_BONES){
  const spare=find(name);
  if(!spare)continue;
  if(loaded&&spare.parent){
   const at=loaded.getWorldPosition(new THREE.Vector3());
   spare.position.copy(spare.parent.worldToLocal(at));
  }
  spare.scale.setScalar(1e-4);
 }
 root.updateMatrixWorld(true);
}

/**
 * Fit the AK74U FPS viewmodel for camera parent (held) or floor (pickup). Both keep the
 * authored metre scale: the carbine is 0.73 m stock out, like the real AKS-74U.
 *  - held: the rig hangs so the camera sits at AK74U_HIP_EYE, facing −Z like the camera.
 *  - pickup: arms hidden, carbine laid on its side, resting on the floor.
 */
export function fitAk74u(model:THREE.Object3D,fit:Exclude<GunFit,'guard'>){
 const wrap=new THREE.Group();
 wrap.name='ak74uMesh';
 const pivot=new THREE.Group();
 pivot.add(model);
 wrap.add(pivot);
 if(fit==='held'){
  pivot.position.set(-AK74U_HIP_EYE.x,-AK74U_HIP_EYE.y,-AK74U_HIP_EYE.z);
  wrap.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   o.frustumCulled=false;
   o.castShadow=false;
   o.receiveShadow=false;
  });
  return wrap;
 }
 // Drop the arm skins outright: hidden meshes still count in bounds (the pickup's floor lift).
 const arms:THREE.Object3D[]=[];
 model.traverse(o=>{if(isArmMesh(o))arms.push(o);});
 for(const o of arms)o.removeFromParent();
 hideSpareMag(model);
 // Lay it on its side (barrel toward +X), then sit the lowest vertex on the floor.
 wrap.rotation.set(0,-Math.PI/2,Math.PI/2);
 wrap.updateMatrixWorld(true);
 const box=new THREE.Box3();
 model.traverse(o=>{if((o as THREE.Mesh).isMesh)box.expandByObject(o,true);});
 const c=box.getCenter(new THREE.Vector3());
 // Box is in the wrap's parent frame (wrap sits at the origin), so shift the wrap directly.
 wrap.position.set(.18-c.x,.02-box.min.y,-c.z);
 wrap.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;}});
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

/** Kick off the FPS pack without mounting (idle prefetch after Begin dive). */
export function prefetchAk74u(){
 return loadAkProto();
}

export type Ak74uMountOptions={
 /** Room reflection for the PBR materials (the knife's env map). */
 envMap?:THREE.Texture|null;
 /** Called once the glTF has replaced the stub (e.g. to adopt the bunker's point-light cull). */
 onMount?:(fitted:THREE.Object3D)=>void;
};

/**
 * Swap the placeholder for the AK74U viewmodel (held) or floor carbine (pickup). Mounts once
 * per holder; resolves true when the glTF is in.
 * No lights are added: anything put in the viewmodel would light the whole bunker.
 */
export function mountAk74u(holder:THREE.Object3D,fit:Exclude<GunFit,'guard'>,opts:Ak74uMountOptions={}):Promise<boolean>{
 if(holder.userData.akMounted)return Promise.resolve(!!holder.userData.ak74u||fit==='pickup');
 holder.userData.akMounted=true;
 return new Promise(resolve=>{
  whenAk(proto=>{
   if(!proto||holder.userData.gunAlive===false){resolve(false);return;}
   // Both fits keep the authored PBR: an unlit black carbine vanishes on the dark floor.
   const model=cloneTree(proto.scene,false,opts.envMap??null);
   const mixer=new THREE.AnimationMixer(model);
   if(fit==='pickup'){
    // Hold the first IDLE frame so the magazine and bolt sit where the rig puts them.
    const idle=proto.clips.find(c=>c.name==='IDLE');
    if(idle){mixer.clipAction(idle).play();mixer.update(0);}
   }
   const fitted=fitAk74u(model,fit);
   dropStubs(holder);
   holder.add(fitted);
   if(fit==='held'){
    const actions=buildActions(mixer,proto.clips);
    const rt:Ak74uRuntime={mixer,actions,current:''};
    holder.userData.ak74u=rt;
    fadeTo(rt,'IDLE',0);
   }
   opts.onMount?.(fitted);
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

/**
 * Magazine change, stretched to the sim's reload window. An empty gun gets RELOAD2 (mag out,
 * mag in, then the charging handle racked); a partial mag gets the quicker RELOAD1.
 */
export function reloadAk74u(holder:THREE.Object3D|null|undefined,reloadSeconds=.9,empty=false){
 const rt=holder?.userData?.ak74u as Ak74uRuntime|undefined;
 const name:Ak74uClip=empty&&rt?.actions.RELOAD2?'RELOAD2':'RELOAD1';
 const dur=rt?.actions[name]?.getClip().duration||1.2;
 playAk74u(holder,name,{timeScale:Math.max(.5,dur/Math.max(reloadSeconds,.2))});
}

/** Turn the carbine over for a look (INSPEC). Only from rest, so it never cuts a reload or shot. */
export function inspectAk74u(holder:THREE.Object3D|null|undefined){
 const rt=holder?.userData?.ak74u as Ak74uRuntime|undefined;
 if(!rt||rt.current!=='IDLE')return false;
 playAk74u(holder,'INSPEC');
 return true;
}

/** Which clip the held viewmodel is playing ('' before the glTF mounts). */
export function ak74uClip(holder:THREE.Object3D|null|undefined):Ak74uClip|''{
 return (holder?.userData?.ak74u as Ak74uRuntime|undefined)?.current??'';
}

/**
 * Find the muzzle on the mounted carbine: the centre of the barrel's front face, measured on
 * the skinned mesh in its current pose. Returns the bone the barrel rides on and the muzzle in
 * that bone's frame, so a flash parented there follows DRAW / SHOOT / aim like the barrel does.
 */
export function ak74uMuzzle(holder:THREE.Object3D):{bone:THREE.Object3D;local:THREE.Vector3}|null{
 let gun:THREE.SkinnedMesh|null=null;
 holder.traverse(o=>{if(!gun&&(o as THREE.SkinnedMesh).isSkinnedMesh&&matName(o)==='krinkov')gun=o as THREE.SkinnedMesh;});
 if(!gun)return null;
 const mesh=gun as THREE.SkinnedMesh;
 holder.updateMatrixWorld(true);
 mesh.skeleton.update();
 const toHolder=new THREE.Matrix4().copy(holder.matrixWorld).invert();
 const pos=mesh.geometry.getAttribute('position');
 const pts:THREE.Vector3[]=[];
 const v=new THREE.Vector3();
 let minZ=Infinity,idxMin=0;
 for(let i=0;i<pos.count;i++){
  mesh.getVertexPosition(i,v);
  v.applyMatrix4(mesh.matrixWorld).applyMatrix4(toHolder);
  pts.push(v.clone());
  if(v.z<minZ){minZ=v.z;idxMin=i;}
 }
 // Barrel's front face: every vertex within 1.5 cm of the foremost one.
 const at=new THREE.Vector3();let n=0;
 for(const q of pts)if(q.z<minZ+.015){at.add(q);n++;}
 at.divideScalar(Math.max(1,n));
 at.z=minZ-.01;
 const skin=mesh.geometry.getAttribute('skinIndex');
 const weight=mesh.geometry.getAttribute('skinWeight');
 let best=0,bw=-1;
 for(let k=0;k<4;k++){const w=weight.getComponent(idxMin,k);if(w>bw){bw=w;best=skin.getComponent(idxMin,k);}}
 const bone=mesh.skeleton.bones[best];
 if(!bone)return null;
 const world=at.clone().applyMatrix4(holder.matrixWorld);
 return {bone,local:bone.worldToLocal(world)};
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
