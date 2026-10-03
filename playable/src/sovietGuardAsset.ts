import { PALETTE } from './artPalette';
/**
 * Original colourful civilian mesh on the existing combat-compatible skeleton.
 * Mesh generator: scripts/build-colourful-guard.mjs. The original soldier is preserved.
 *
 * Quaternius Ultimate Animated Character — Soldier_Male (CC0 1.0):
 * https://quaternius.com/packs/ultimateanimatedcharacter.html
 * Authored Idle / Walk / Run skeletal clips (not procedural).
 *
 * Mixamo autorig of the prior Sketchfab WW2 Soviet Uniform was blocked
 * (Adobe OAuth on Mixamo API/site; no credentials in this environment).
 * SkeletonUtils.retarget onto that Unreal-style rig also failed — see
 * NOTICE.md and `scripts/retarget-guard-locomotion.mjs`.
 *
 * Locomotion and skeleton remain Quaternius CC0; the visible mesh is original.
 * Scale: mesh AABB → ~1.90 m, feet on local y=0.
 * Always clone with `SkeletonUtils.clone` so skinned bind stays linked.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { createCivilianRifle } from './civilianRifle';
import { buildGuardRig, makeGuardCombatState, type GuardRig, type GuardCombatState } from './guardCombatPose';
import { guardArchetype, GUARD_UNIFORM, hairObjectName, facialObjectName, capObjectName, type GuardArchetype, activeGuardStyle, sovietArchetype, guardPosture, SOVIET_KITS, type GuardStyle } from './guardArchetypes';
import { applyHairStrandMaps } from './hairStrandMaps';
import { createOfficerCap } from './sovietKeyAsset';
import { captureSceneRig } from './guardSceneVisual';
export { GUARD_ARCHETYPES, guardArchetype, GUARD_UNIFORM, hairObjectName, facialObjectName, capObjectName, activeGuardStyle, sovietArchetype, guardPosture, SOVIET_ARCHETYPES } from './guardArchetypes';

/** Attribution for the reused skeleton and gait clips; original mesh credit is in its NOTICE. */
export const SOVIET_GUARD_SOURCE='https://quaternius.com/packs/ultimateanimatedcharacter.html';
export const SOVIET_GUARD_AUTHOR='Quaternius';
export const SOVIET_GUARD_LICENSE='CC0 1.0';
export const SOVIET_GUARD_PACK='Ultimate Animated Character Pack — Soldier_Male';
/** Prior Sketchfab mesh (CC BY) — Mixamo autorig blocked; retained for credit history only. */
export const SOVIET_GUARD_SKETCHFAB_PRIOR='https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99';
/** Original mesh; legacy SOVIET names retained for the gameplay API. */
export const SOVIET_GUARD_GLB='/assets/colourful-guard/civilian.glb';
/** Soviet cartoon guards (default style): scripts/build-soviet-cartoon-guard.mjs. */
export const SOVIET_CARTOON_GLB='/assets/soviet-cartoon-guard/guard.glb';
/** True when shipped clips are procedural bake (should be false — real Quaternius clips). */
export const GUARD_LOCO_PROCEDURAL=false;
/**
 * Standing height in metres (feet → crown) from **mesh** extent.
 * Crown near player eye (`WALK_EYE_Y` = FLOOR_Y+1.6) and below hatch door (~2.3 m open).
 */
export const SOVIET_GUARD_HEIGHT=1.90;
/** Guard readability (tuned so face and uniform read without blowing out). */
export const GUARD_EMISSIVE_LIFT=.2;
export const GUARD_KEY_INTENSITY=6;
export const GUARD_RIM_INTENSITY=2.5;

/**
 * Ground speed baked into each authored clip at SOVIET_GUARD_HEIGHT (m/s).
 * Measured from the planted foot's backward slide during contact
 * (`tests/soviet-guard-gait.test.ts` re-measures the GLB and fails if these drift).
 * Stride rate is scaled from these so the planted foot stays locked to the floor.
 */
export const GUARD_WALK_CLIP_SPEED=1.205;
export const GUARD_RUN_CLIP_SPEED=3.049;
/** Walk→run blend band (m/s). Below the start it is pure walk, above the end pure run. */
export const GUARD_GAIT_BLEND_START=2.09;
export const GUARD_GAIT_BLEND_END=2.95;
/** Idle→walk blend band (m/s): the first steps out of a stand. */
export const GUARD_IDLE_BLEND_END=.45;

export type GuardLocomotionKind='idle'|'walk'|'run';

export type SovietGuardLocomotion={
 mixer:THREE.AnimationMixer;
 actions:Record<GuardLocomotionKind,THREE.AnimationAction>;
 /** Gait he is heading into (dominant target weight). */
 current:GuardLocomotionKind;
 skin:THREE.SkinnedMesh;
 /** Smoothed blend weights actually applied to the mixer. */
 weights:Record<GuardLocomotionKind,number>;
 /** Shared normalised gait phase (0..1) so walk and run feet stay in step while blending. */
 phase:number;
};

export type SovietGuardVisual={
 root:THREE.Group;
 /** Mesh pivot with feet on local y=0. */
 body:THREE.Object3D;
 ready:boolean;
 /** Child props toggled from this sentry's inventory. */
 gun:THREE.Object3D;
 bottle:THREE.Object3D;
 coat:THREE.Object3D;
 /** Skeletal idle/walk/run when clips + skinned mesh are ready. */
 loco:SovietGuardLocomotion|null;
 /** Warm key light carried with him (his own lamp) so he reads clearly in the dark. */
 fill:THREE.PointLight;
 rim:THREE.PointLight;
 /** Slot index → `guardArchetype(outfit)` (cycles every six). */
 outfit:number;
 /** Bones for the procedural combat layer (null on the capsule stub). */
 rig:GuardRig|null;
 /** Smoothed combat-pose state (pelvis warp, stance, expression, breathing). */
 pose:GuardCombatState;
};

type GuardGltfBundle={
 scene:THREE.Object3D;
 clips:Record<GuardLocomotionKind,THREE.AnimationClip>;
};

const loadPromises:Partial<Record<GuardStyle,Promise<GuardGltfBundle>>>={};

function clothMat(color:number,rough=.82){
 return new THREE.MeshStandardMaterial({
  color,roughness:rough,metalness:.05,
  emissive:0x1a1410,emissiveIntensity:.22,
 });
}

/** Capsule stand-in while the glTF loads (or if it fails) — stark red/blue toy kit. */
export function buildSovietGuardStub(arch?:GuardArchetype,style:GuardStyle='toy'){
 const a=arch??guardArchetype(0);
 const soviet=style==='soviet';
 const body=new THREE.Group();
 body.name='sovietGuardBody';
 const h=SOVIET_GUARD_HEIGHT*a.height;
 const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.28*a.width,h*.42,6,10),clothMat(soviet?0xa39a5c:GUARD_UNIFORM.jacket));
 torso.position.y=h*.58;
 torso.castShadow=true;torso.receiveShadow=true;
 body.add(torso);
 const legs=new THREE.Mesh(new THREE.CapsuleGeometry(.22*a.width,h*.28,4,8),clothMat(soviet?0x847b4a:GUARD_UNIFORM.trousers));
 legs.position.y=h*.28;body.add(legs);
 const head=new THREE.Mesh(new THREE.SphereGeometry(.17*a.head,12,10),clothMat(a.skin,.55));
 head.position.y=h*.92;
 head.castShadow=true;
 body.add(head);
 return body;
}

function findNamedBone(root:THREE.Object3D,names:string[]):THREE.Object3D|null{
 const want=new Set(names.map(n=>n.toLowerCase()));
 let found:THREE.Object3D|null=null;
 root.traverse(o=>{
  if(found)return;
  if(want.has(o.name.toLowerCase()))found=o;
 });
 return found;
}

function makeGearProps(root:THREE.Group){
 const gun=new THREE.Group();
 gun.name='guardGun';
 gun.userData.gunAlive=true;
 gun.userData.rifle=true;
 gun.add(createCivilianRifle());
 gun.visible=false;
 root.add(gun);

 const bottle=new THREE.Mesh(
  new THREE.CylinderGeometry(.06,.07,.32,10),
  new THREE.MeshStandardMaterial({color:0x3d8f62,roughness:.45,metalness:.15}),
 );
 bottle.name='guardBottle';
 bottle.position.set(-.34,SOVIET_GUARD_HEIGHT*.6,.1);
 bottle.visible=false;
 root.add(bottle);

 const coat=new THREE.Mesh(
  new THREE.CapsuleGeometry(.36,SOVIET_GUARD_HEIGHT*.32,4,8),
  new THREE.MeshStandardMaterial({color:0xc49662,roughness:.88,metalness:0,transparent:true,opacity:.72}),
 );
 coat.name='guardCoat';
 coat.position.y=SOVIET_GUARD_HEIGHT*.58;
 coat.visible=false;
 root.add(coat);

 return{gun,bottle,coat};
}

/** Parent the TT-33 to the right fist so it follows walk/run hand motion. */
export function mountGuardGunOnHand(body:THREE.Object3D,gun:THREE.Object3D){
 const fist=findNamedBone(body,['FistR','Hand_R','hand_r','mixamorigRightHand','RightHand']);
 if(!fist)return false;
 if(gun.parent)gun.parent.remove(gun);
 // Clear chest-stub layout; local offset in fist space (barrel forward −Z after fitTt33).
 gun.position.set(0.02,-0.02,-0.08);
 gun.rotation.set(0,0,0);
 gun.scale.set(1,1,1);
 fist.add(gun);
 return true;
}

/** Axis-aligned box of skeleton bones in world space (posed height). */
export function boneWorldBox(root:THREE.Object3D):THREE.Box3{
 root.updateMatrixWorld(true);
 const box=new THREE.Box3();
 let any=false;
 root.traverse(o=>{
  if(!(o as THREE.Bone).isBone)return;
  const p=new THREE.Vector3();
  o.getWorldPosition(p);
  if(!any){box.set(p,p);any=true;}
  else box.expandByPoint(p);
 });
 if(!any)box.setFromObject(root);
 return box;
}

/**
 * Visible mesh AABB. Authored standing pose → drawn height.
 */
export function meshWorldBox(root:THREE.Object3D):THREE.Box3{
 root.updateMatrixWorld(true);
 return new THREE.Box3().setFromObject(root);
}

/** Body mesh only — hair/cap/facial kits must not drive height normalisation. */
function bodyWorldBox(root:THREE.Object3D):THREE.Box3{
 const body=root.getObjectByName('ColourfulCivilian')??root.getObjectByName('SovietCartoon');
 if(body){root.updateMatrixWorld(true);return new THREE.Box3().setFromObject(body);}
 return meshWorldBox(root);
}

/**
 * Scale so **body** crown→feet ≈ `targetHeight`, then put feet on local y=0.
 * Uses the body mesh only so giant afros / pigtails cannot crush the character.
 */
export function normalizeHumanoid(scene:THREE.Object3D,targetHeight=SOVIET_GUARD_HEIGHT){
 scene.scale.set(1,1,1);
 scene.position.set(0,0,0);
 scene.rotation.set(0,0,0);
 const box=bodyWorldBox(scene);
 const height=Math.max(box.max.y-box.min.y,.001);
 const scale=targetHeight/height;
 scene.scale.setScalar(scale);
 const box2=bodyWorldBox(scene);
 const center=box2.getCenter(new THREE.Vector3());
 scene.position.x-=center.x;
 scene.position.z-=center.z;
 scene.position.y-=box2.min.y;
 scene.updateMatrixWorld(true);
}

function litGuardMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
  const isHair=o.name.startsWith('Hair_')||o.name.startsWith('Facial_');
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   if('flatShading' in sm&&sm.flatShading)sm.flatShading=false;
   if(isHair){
    // Strand albedo/normal/roughness; archetype tints via material.color.
    applyHairStrandMaps(sm);
    sm.emissive.setHex(0x000000);
    sm.emissiveIntensity=0;
    sm.needsUpdate=true;
    continue;
   }
   // Cartoon toy body: matte, fully saturated primaries — no cloth sheen.
   if(sm.vertexColors){sm.roughness=.92;sm.metalness=0;sm.color?.setHex(0xffffff);}
   const phys=sm as THREE.MeshPhysicalMaterial;
   if('sheen' in phys)phys.sheen=0;
   sm.envMapIntensity=.1;
   if(!sm.emissive)sm.emissive=new THREE.Color(0x000000);
   // Soft self-light so bunker grade doesn't wash pure red/blue into pastel.
   if(sm.vertexColors){
    sm.emissive.setHex(0xffffff);
    sm.emissiveIntensity=.06;
   }else{
    const base=sm.color?sm.color.clone():new THREE.Color(GUARD_UNIFORM.jacket);
    sm.emissive.copy(base);
    sm.emissiveIntensity=GUARD_EMISSIVE_LIFT;
   }
   sm.needsUpdate=true;
  }
 });
}

/**
 * Legacy olive-kit dye. Colourful civilians keep the shared red/blue kit — no-op when
 * the mesh is flagged `colourfulGuard`.
 */
export function tintGuardOutfit(root:THREE.Object3D,hex:number){
 if(root.userData.colourfulGuard||root.getObjectByName('ColourfulCivilian'))return;
 const tint=new THREE.Color(hex);
 const olive=new THREE.Color(0x4a5a3a);
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const src=Array.isArray(o.material)?o.material:[o.material];
  const next=src.map(m=>{
   const sm=m.clone() as THREE.MeshStandardMaterial;
   if(!('color' in sm)||!sm.color)return sm;
   const name=`${sm.name||''} ${o.name||''}`.toLowerCase();
   if(/skin|face|head|hand|flesh|body/.test(name))return sm;
   const c=sm.color;
   const luma=.2126*c.r+.7152*c.g+.0722*c.b;
   if(luma>.42&&c.r>c.b+.05&&c.r>c.g*.8)return sm;
   if('metalness' in sm&&(sm.metalness??0)>.45)return sm;
   const dyed=c.clone().lerp(tint,.62);
   if(hex!==0x4a5a3a)c.copy(dyed);else c.lerp(olive,.15);
   if(sm.emissive){sm.emissive.copy(c);sm.emissiveIntensity=GUARD_EMISSIVE_LIFT;}
   sm.needsUpdate=true;
   return sm;
  });
  o.material=next.length===1?next[0]:next;
 });
}

function findSkinnedMesh(root:THREE.Object3D):THREE.SkinnedMesh|null{
 let skin:THREE.SkinnedMesh|null=null;
 let body:THREE.SkinnedMesh|null=null;
 root.traverse(o=>{
  if(!(o as THREE.SkinnedMesh).isSkinnedMesh)return;
  const sm=o as THREE.SkinnedMesh;
  if(sm.name==='ColourfulCivilian'||sm.name==='SovietCartoon')body=sm;
  if(!skin)skin=sm;
 });
 return body??skin;
}

const DEFAULT_SKIN=new THREE.Color(0xecd5ad);

/** Remap authored skin verts on a private geometry clone. */
function remapSkinColors(mesh:THREE.Mesh,hex:number){
 const col=mesh.geometry.getAttribute('color');
 if(!col)return;
 const next=new THREE.Color(hex);
 for(let i=0;i<col.count;i++){
  const r=col.getX(i),g=col.getY(i),b=col.getZ(i);
  const d=Math.abs(r-DEFAULT_SKIN.r)+Math.abs(g-DEFAULT_SKIN.g)+Math.abs(b-DEFAULT_SKIN.b);
  if(d<.45)col.setXYZ(i,next.r,next.g,next.b);
 }
 col.needsUpdate=true;
}

/** Hide hair / facial / cap kits (GLTF load does not preserve `visible:false`). */
export function hideGuardHairKits(root:THREE.Object3D){
 root.traverse(o=>{
  if(o.name.startsWith('Hair_')||o.name.startsWith('Facial_')||o.name.startsWith('Cap_'))o.visible=false;
 });
}

/**
 * Outer-root silhouette scale for a role × archetype.
 * Applied on `visual.root` (not the skinned mixer target) so Quaternius scale
 * tracks cannot melt the bind pose. Never touch bone.scale / body.scale.
 */
export function guardRootScale(outfit:number,role?:string,style:GuardStyle='toy'):THREE.Vector3{
 const arch=style==='soviet'?sovietArchetype(outfit):guardArchetype(outfit);
 const roleMul=role==='heavy'?1.12:role==='officer'?1.14:1;
 return new THREE.Vector3(arch.width*roleMul,arch.height*roleMul,arch.depth*roleMul);
}

function tintKitMesh(o:THREE.Object3D,hex:number){
 if(!(o instanceof THREE.Mesh))return;
 const mats=Array.isArray(o.material)?o.material:[o.material];
 for(const m of mats){
  if(!m||!('color' in m))continue;
  const sm=m as THREE.MeshStandardMaterial;
  // Keep strand maps; only tint. No emissive wash (that flattened hair to plastic).
  sm.color.setHex(hex);
  if(sm.emissive){sm.emissive.setHex(0x000000);sm.emissiveIntensity=0;}
  // Always re-bind after material.clone() — clones can drop DataTexture links.
  if(o.name.startsWith('Hair_')||o.name.startsWith('Facial_'))applyHairStrandMaps(sm);
  sm.needsUpdate=true;
 }
}

/**
 * Hair / facial / cap kits + skin tone + idle posture.
 * Silhouette (width/height/depth) is applied on `visual.root` via `guardRootScale`.
 * Never scales the skinned mesh or bones — that melts Quaternius locomotion.
 */
export function applyGuardArchetype(root:THREE.Object3D,_rig:GuardRig|null,pose:GuardCombatState,outfit:number){
 const arch=guardArchetype(outfit);
 root.userData.archetype=arch.id;
 root.userData.colourfulGuard=true;
 root.userData.guardOutfit=outfit;
 const wantHair=hairObjectName(arch.hair);
 const wantFacial=facialObjectName(arch.facial);
 const wantCap=capObjectName(arch.cap);
 root.traverse(o=>{
  if(o.name.startsWith('Hair_')){
   o.visible=!!wantHair&&o.name===wantHair;
   if(o.visible)tintKitMesh(o,arch.hairColor);
   return;
  }
  if(o.name.startsWith('Facial_')){
   o.visible=!!wantFacial&&o.name===wantFacial;
   if(o.visible)tintKitMesh(o,arch.hairColor);
   return;
  }
  if(o.name.startsWith('Cap_')){
   // Cap keeps authored navy verts — leave material white.
   o.visible=!!wantCap&&o.name===wantCap;
   if(o.visible&&o instanceof THREE.Mesh){
    const mats=Array.isArray(o.material)?o.material:[o.material];
    for(const m of mats){
     if(!m||!('color' in m))continue;
     (m as THREE.MeshStandardMaterial).color.setHex(0xffffff);
     (m as THREE.MeshStandardMaterial).needsUpdate=true;
    }
   }
  }
 });
 // Body skin tone (geometry must be unique per instance).
 const body=root.getObjectByName('ColourfulCivilian') as THREE.Mesh|undefined;
 if(body?.isMesh){
  if(!body.geometry.userData.skinClone){
   body.geometry=body.geometry.clone();
   body.geometry.userData.skinClone=true;
  }
  remapSkinColors(body,arch.skin);
 }
 pose.posturePitch=arch.posture.spinePitch;
 pose.postureSlouch=arch.posture.slouch;
 pose.postureSwagger=arch.posture.swagger;
}

/**
 * Soviet cartoon kit for a slot: headgear and character kits on, skin tone, hair tint, posture.
 * Kits keep vertex colours; only `Hair_crop` is tinted (white vertices × material colour).
 */
export function applySovietArchetype(root:THREE.Object3D,pose:GuardCombatState,outfit:number){
 const arch=sovietArchetype(outfit);
 root.userData.archetype=arch.id;
 root.userData.guardOutfit=outfit;
 const on=new Set<string>(arch.kits);
 root.traverse(o=>{
  if(!(SOVIET_KITS as readonly string[]).includes(o.name))return;
  o.visible=on.has(o.name);
  if(o.visible&&o.name==='Hair_crop'&&o instanceof THREE.Mesh){
   const m=o.material as THREE.MeshStandardMaterial;
   m.color.setHex(arch.hairColor);m.emissive?.setHex(0);m.emissiveIntensity=0;m.needsUpdate=true;
  }
 });
 // Painted, not glowing: the toy kit's emissive lift washes khaki out to lime under bunker light.
 root.traverse(o=>{
  const m=(o as THREE.Mesh).material as THREE.MeshStandardMaterial|undefined;
  if(m?.isMeshStandardMaterial&&m.vertexColors){m.emissiveIntensity=.012;m.roughness=.78;m.needsUpdate=true;}
 });
 const body=root.getObjectByName('SovietCartoon') as THREE.Mesh|undefined;
 if(body?.isMesh){
  if(!body.geometry.userData.skinClone){body.geometry=body.geometry.clone();body.geometry.userData.skinClone=true;}
  remapSkinColors(body,arch.skin);
 }
 pose.posturePitch=arch.posture.spinePitch;
 pose.postureSlouch=arch.posture.slouch;
 pose.postureSwagger=arch.posture.swagger;
}

function pickLocoClips(anims:THREE.AnimationClip[]):Record<GuardLocomotionKind,THREE.AnimationClip>|null{
 const by=new Map(anims.map(a=>[a.name.toLowerCase(),a]));
 const idle=by.get('idle');
 const walk=by.get('walk');
 const run=by.get('run');
 if(!idle||!walk||!run)return null;
 idle.name='idle';walk.name='walk';run.name='run';
 return{idle,walk,run};
}

function loadGuardBundle(style:GuardStyle=activeGuardStyle()){
 const cached=loadPromises[style];
 if(cached)return cached;
 const loadPromise=(async()=>{
  const gltf=await new GLTFLoader().loadAsync(style==='soviet'?SOVIET_CARTOON_GLB:SOVIET_GUARD_GLB);
  const scene=gltf.scene;
  scene.name='sovietGuardMesh';
  // Exporter ignores authored visible:false — hide kits on the shared template.
  hideGuardHairKits(scene);
  scene.traverse(o=>{if((SOVIET_KITS as readonly string[]).includes(o.name))o.visible=false;});
  // One shared adult height; per-guard tall/short is `visual.root` scale only.
  normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
  litGuardMaterials(scene);
  // The approved character is deliberately faceless; no expression morphs.
  const clips=pickLocoClips(gltf.animations);
  if(!clips)throw new Error('Guard GLB missing idle/walk/run clips');
  return{scene,clips};
 })().catch(err=>{
  console.warn('Soviet guard mesh failed to load; using stub.',err);
  delete loadPromises[style];
  throw err;
 });
 loadPromises[style]=loadPromise;
 return loadPromise;
}

/** Attach AnimationMixer + idle/walk/run actions (mixer on body so bone tracks resolve). */
export function attachGuardLocomotion(
 body:THREE.Object3D,
 clips:Record<GuardLocomotionKind,THREE.AnimationClip>,
):SovietGuardLocomotion|null{
 const skin=findSkinnedMesh(body);
 if(!skin)return null;
 const mixer=new THREE.AnimationMixer(body);
 const actions={
  idle:mixer.clipAction(clips.idle),
  walk:mixer.clipAction(clips.walk),
  run:mixer.clipAction(clips.run),
 } as const;
 for(const a of Object.values(actions)){
  a.enabled=true;
  a.setLoop(THREE.LoopRepeat,Infinity);
  a.setEffectiveWeight(0);
  a.play();
 }
 // Gait clips are phase-driven by hand below; the mixer only evaluates them.
 actions.walk.timeScale=0;
 actions.run.timeScale=0;
 actions.idle.timeScale=1;
 actions.idle.setEffectiveWeight(1);
 return{mixer,actions,current:'idle',skin,weights:{idle:1,walk:0,run:0},phase:0};
}

const smooth01=(e0:number,e1:number,x:number)=>{const t=THREE.MathUtils.clamp((x-e0)/(e1-e0),0,1);return t*t*(3-2*t);};

/**
 * Target blend weights for a ground speed (a 1D blend space: idle → walk → run).
 * `turnRate` (rad/s) adds a small stepping-in-place walk layer while pivoting.
 */
export function guardGaitWeights(speed:number,turnRate=0):Record<GuardLocomotionKind,number>{
 const s=Math.max(0,speed);
 const move=smooth01(.02,GUARD_IDLE_BLEND_END,s);
 const run=smooth01(GUARD_GAIT_BLEND_START,GUARD_GAIT_BLEND_END,s);
 // Pivot footwork: feet shuffle while the body swings round on the spot.
 const pivot=(1-move)*THREE.MathUtils.clamp(Math.abs(turnRate)/2.4,0,1)*.45;
 const gait=Math.max(move,pivot);
 return{idle:1-gait,walk:gait*(1-run),run:gait*run};
}

/**
 * Drive idle / walk / run as a phase-synchronised blend space from real ground speed.
 *
 * - Stride rate comes from speed ÷ stride length, so the planted foot does not skate.
 * - Walk and run share one normalised phase, so crossing the blend band never
 *   double-steps or scissors the legs.
 * - Weights ease with a short time constant, so state flips never pop.
 */
export function updateGuardLocomotion(
 loco:SovietGuardLocomotion,
 dt:number,
 opts:{moving:boolean;speed:number;state:string;turnRate?:number;
  /** +1 walks forward; −1 plays the gait backwards (backpedalling while firing). */
  direction?:number},
){
 const speed=opts.moving?Math.max(0,opts.speed):0;
 const target=guardGaitWeights(speed,opts.turnRate??0);
 loco.current=target.run>=target.walk&&target.run>=target.idle?'run':target.walk>=target.idle?'walk':'idle';
 // Critically-damped-ish weight easing (~0.12 s): smooth but responsive.
 const k=1-Math.exp(-Math.max(0,dt)/.12);
 let sum=0;
 for(const kind of ['idle','walk','run'] as const){
  loco.weights[kind]+= (target[kind]-loco.weights[kind])*k;
  sum+=loco.weights[kind];
 }
 for(const kind of ['idle','walk','run'] as const){
  loco.actions[kind].setEffectiveWeight(sum>1e-6?loco.weights[kind]/sum:kind==='idle'?1:0);
 }
 // Phase: blended stride length (metres per full cycle) sets cycles per second.
 const walkClip=loco.actions.walk.getClip(),runClip=loco.actions.run.getClip();
 const walkStride=GUARD_WALK_CLIP_SPEED*walkClip.duration;
 const runStride=GUARD_RUN_CLIP_SPEED*runClip.duration;
 const gaitW=loco.weights.walk+loco.weights.run;
 const runMix=gaitW>1e-4?loco.weights.run/gaitW:0;
 const stride=THREE.MathUtils.lerp(walkStride,runStride,runMix);
 // While pivoting on the spot, shuffle at a slow walking cadence.
 const pivotCadence=Math.min(1,Math.abs(opts.turnRate??0)/2.4)*.55/walkClip.duration;
 const cycles=Math.max(speed/stride,pivotCadence);
 const dir=(opts.direction??1)<0?-1:1;
 loco.phase=((loco.phase+dir*cycles*Math.max(0,dt))%1+1)%1;
 loco.actions.walk.time=loco.phase*walkClip.duration;
 loco.actions.run.time=loco.phase*runClip.duration;
 loco.mixer.update(dt);
}

/** Root group: feet sit on world y when `root.position.y = FLOOR_Y`. */
export function createSovietGuardVisual(outfit=0):SovietGuardVisual{
 const root=new THREE.Group();
 root.name=`sovietGuard:${outfit}`;
 const style=activeGuardStyle();
 const arch=guardArchetype(outfit);
 const body=buildSovietGuardStub(arch,style);
 root.add(body);
 const props=makeGearProps(root);
 // Key: in front of his chest, like a lamp clipped to the webbing (he faces +Z).
 const fill=new THREE.PointLight(PALETTE.ivory,GUARD_KEY_INTENSITY,3.6,2);
 fill.name='guardFill';fill.position.set(.25,1.75,.9);fill.castShadow=false;
 const rim=new THREE.PointLight(PALETTE.fill,GUARD_RIM_INTENSITY,3,2);
 rim.name='guardRim';rim.position.set(-.3,2.1,-.7);rim.castShadow=false;
 root.add(fill,rim);
 const officerCap=createOfficerCap(SOVIET_GUARD_HEIGHT);
 officerCap.visible=false; // civilians — only survivalFx may show for officer role
 root.add(officerCap);
 const pose=makeGuardCombatState(outfit,guardPosture(outfit,style));
 // Silhouette on the outer root (safe). Skinned body stays at unit scale.
 root.scale.copy(guardRootScale(outfit,undefined,style));
 root.userData.guardStyle=style;
 return{root,body,ready:false,loco:null,fill,rim,outfit,rig:null,pose,...props};
}

/**
 * Swap the stub for the cartoon civilian mesh + attach authored gait clips.
 * Uses SkeletonUtils.clone so skinned bind pose stays linked to the bones.
 * Applies one of six archetypes (silhouette / hair / skin / posture).
 */
export async function upgradeSovietGuardVisual(visual:SovietGuardVisual){
 try{
  const {scene,clips}=await loadGuardBundle();
  if(visual.ready&&visual.body.name==='sovietGuardMesh')return visual;
  visual.root.remove(visual.body);
  const instance=cloneSkinned(scene);
  // Bind pose for the staged-scene solver, before the mixer first moves a bone.
  captureSceneRig(instance);
  instance.name='sovietGuardMesh';instance.userData.colourfulGuard=true;
  // Private materials (and body geometry later) so hit-flash / skin stay per-guard.
  instance.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   o.material=Array.isArray(o.material)?o.material.map(m=>m.clone()):o.material.clone();
   // Re-apply strand maps after clone so hair-cards keep alpha/normal in Safari.
   if(o.name.startsWith('Hair_')||o.name.startsWith('Facial_')){
    const mats=Array.isArray(o.material)?o.material:[o.material];
    for(const m of mats){
     if(m&&'roughness' in m)applyHairStrandMaps(m as THREE.MeshStandardMaterial);
    }
   }
  });
  visual.root.add(instance);
  visual.body=instance;
  visual.ready=true;
  mountGuardGunOnHand(instance,visual.gun);
  visual.loco=attachGuardLocomotion(instance,clips);
  visual.rig=buildGuardRig(instance);
  if(instance.getObjectByName('SovietCartoon'))applySovietArchetype(instance,visual.pose,visual.outfit);
  else applyGuardArchetype(instance,visual.rig,visual.pose,visual.outfit);
  return visual;
 }catch{
  return visual;
 }
}

export function syncGuardGear(
 visual:SovietGuardVisual,
 inv:{gun:boolean;bottle:boolean;coat:boolean},
){
 visual.gun.visible=!!inv.gun;
 visual.bottle.visible=!!inv.bottle;
 visual.coat.visible=!!inv.coat;
}


const _bp=new THREE.Vector3(),_cp=new THREE.Vector3(),_cur=new THREE.Vector3(),_want=new THREE.Vector3();
const _qFull=new THREE.Quaternion(),_qDelta=new THREE.Quaternion(),_qWorld=new THREE.Quaternion(),_qParent=new THREE.Quaternion(),_qId=new THREE.Quaternion();
const _m=new THREE.Matrix4(),_up=new THREE.Vector3(0,1,0);
/** Rotate `bone` (weighted) so the direction bone→child points at `target`. */
function aimSegment(bone:THREE.Object3D,child:THREE.Object3D,target:THREE.Vector3,w:number){
 bone.updateWorldMatrix(true,false);child.updateWorldMatrix(false,false);
 bone.getWorldPosition(_bp);child.getWorldPosition(_cp);
 _cur.subVectors(_cp,_bp).normalize();_want.subVectors(target,_bp).normalize();
 if(_cur.lengthSq()<1e-8||_want.lengthSq()<1e-8)return;
 // (slerpQuaternions copies its first argument into `this`, so the full turn needs its own slot.)
 _qFull.setFromUnitVectors(_cur,_want);
 _qDelta.slerpQuaternions(_qId,_qFull,w);
 bone.getWorldQuaternion(_qWorld);
 _qWorld.premultiply(_qDelta);
 if(bone.parent){bone.parent.getWorldQuaternion(_qParent);_qParent.invert();_qWorld.premultiply(_qParent);}
 bone.quaternion.copy(_qWorld);
 bone.updateMatrixWorld(true);
}
/**
 * Pistol aim layered over the walk/idle clips: the right arm straightens toward the
 * target and the TT-33's barrel lines up on it. `w` 0..1 raises the gun; `recoil`
 * 0..1 kicks the muzzle up after a shot (decays in the caller).
 */
export function applyGuardAim(visual:SovietGuardVisual,target:THREE.Vector3,w:number,recoil=0){
 const body=visual.body;
 const upper=findNamedBone(body,['UpperArmR']),lower=findNamedBone(body,['LowerArmR']),fist=findNamedBone(body,['FistR']);
 if(!upper||!lower||!fist||w<=1e-3){
  visual.gun.quaternion.identity();
  return;
 }
 visual.root.updateMatrixWorld(true);
 // Kick: aim a little above the target while recoil is high.
 const kick=_want.set(0,.35*recoil,0);
 const t=target.clone().add(kick);
 aimSegment(upper,lower,t,w);
 aimSegment(lower,fist,t,w);
 // Barrel (−Z of the gun group) straight at the target.
 visual.gun.updateWorldMatrix(true,false);
 visual.gun.getWorldPosition(_bp);
 _m.lookAt(_bp,t,_up);
 _qWorld.setFromRotationMatrix(_m);
 if(visual.gun.parent){visual.gun.parent.getWorldQuaternion(_qParent);_qParent.invert();_qWorld.premultiply(_qParent);}
 visual.gun.quaternion.slerpQuaternions(_qId,_qWorld,w);
}
