/**
 * Diving-knife visual (Poly Haven “Fish Knife”).
 *
 * Held FPS viewmodel when the inventory knife is selected: a gloved diver's
 * hand (diverHand.ts) grips the knife in the lower-right of the camera. Authored PBR maps stay
 * intact; a soft RoomEnvironment envMap adds steel response without local
 * point lights (those bloom white against UnrealBloomPass).
 *
 * Runtime files live in `public/assets/knife/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { buildDiverHand, applyHandEnvMap } from './diverHand';

/** Public path — must match files under `playable/public/assets/knife/`. */
export const KNIFE_ASSET_URL='/assets/knife/fish_knife_1k.gltf';
export const KNIFE_THUMB_URL='/assets/knife/thumb.png';

/**
 * Camera-local corner shared with the dive torch (CaveWorld torchRest*).
 */
export const HELD_VIEW_POS={x:.44,y:-.4,z:-.62} as const;
export const HELD_VIEW_ROT={x:.18,y:-.22,z:.32} as const;

/**
 * Knife viewmodel, modelled on how shooters hold a melee weapon: a gloved
 * right fist low in the bottom-right, forearm running out of the frame
 * corner, blade angled up and in toward the crosshair. Everything is real
 * scale (22 cm knife, adult hand) placed ~40 cm from the eye — the knife reads
 * large because it is close, never because it is scaled up.
 *
 * KNIFE_HOLD_POS is the centre of the gripped handle in camera space.
 */
export const KNIFE_HOLD_POS={x:.16,y:-.14,z:-.3} as const;
/** Camera-space blade direction (grip → tip): forward, up, toward centre. */
export const KNIFE_BLADE_DIR=Object.freeze(new THREE.Vector3(-.6,.45,-.65).normalize());
/** Camera-space wrist → knuckles direction (orthogonalised against the blade). */
export const KNIFE_KNUCKLE_HINT=Object.freeze(new THREE.Vector3(.278,.891,.36).normalize());

/** Rotation that maps the fist frame (Y blade, Z knuckles) onto the given camera directions. */
export function holdEuler(blade:THREE.Vector3,knuckleHint:THREE.Vector3):THREE.Euler{
 const y=blade.clone().normalize();
 const z=knuckleHint.clone().addScaledVector(y,-knuckleHint.dot(y)).normalize();
 const x=new THREE.Vector3().crossVectors(y,z).normalize();
 const m=new THREE.Matrix4().makeBasis(x,y,z);
 return new THREE.Euler().setFromRotationMatrix(m,'XYZ');
}
const holdRot=holdEuler(KNIFE_BLADE_DIR,KNIFE_KNUCKLE_HINT);
/**
 * Camera-space direction the forearm runs from the wrist: out through the
 * bottom-right corner and back past the eye, so the arm visibly connects the
 * fist to the player instead of the knife hovering in space.
 */
export const KNIFE_FOREARM_DIR=Object.freeze(new THREE.Vector3(.35,-.88,.33).normalize());
/** Forearm direction expressed in the fist frame (what buildDiverHand needs). */
export function forearmInFist(rot:THREE.Euler=holdRot):THREE.Vector3{
 const q=new THREE.Quaternion().setFromEuler(rot).invert();
 return KNIFE_FOREARM_DIR.clone().applyQuaternion(q);
}
export const KNIFE_HOLD_ROT={x:holdRot.x,y:holdRot.y,z:holdRot.z} as const;
/** Real-world size. The old non-uniform 10×5×2.2 stretch is what made it look like a floating cleaver. */
export const KNIFE_HOLD_SCALE={x:1,y:1,z:1} as const;
/** Thrust depth: the fist drives ~15 cm forward along the view axis at full extension. */
export const KNIFE_STAB_REACH=.15;
export const KNIFE_STAB_Z=KNIFE_HOLD_POS.z-KNIFE_STAB_REACH;
/** Stab / equip timings (seconds). */
export const KNIFE_STAB_TIME=.32;
export const KNIFE_EQUIP_TIME=.38;

export type ViewOffset={x:number;y:number;z:number;pitch:number;yaw:number;roll:number};
const ZERO:ViewOffset={x:0,y:0,z:0,pitch:0,yaw:0,roll:0};

/**
 * Stab pose offset at normalised time t∈[0,1]: short wind-up (fist draws back
 * and cocks), fast drive forward toward the crosshair, slower recovery.
 */
export function stabOffset(t:number):ViewOffset{
 if(t<=0||t>=1)return {...ZERO};
 const wind=.14,drive=.34;
 let k:number;          // thrust amount, −0.18 (wound) … 1 (full reach)
 if(t<wind){const u=t/wind;k=-.18*Math.sin(u*Math.PI*.5);}
 else if(t<drive){const u=(t-wind)/(drive-wind);k=-.18+1.18*(1-Math.pow(1-u,3));}
 else{const u=(t-drive)/(1-drive);k=1-(u*u*(3-2*u));}
 return {
  x:-.05*Math.max(0,k),
  y:.035*Math.max(0,k)+.03*Math.min(0,k),
  z:-KNIFE_STAB_REACH*k,
  pitch:-.25*k,       // tip drops onto the aim line as the arm extends
  yaw:.12*k,
  roll:.1*k,
 };
}

/** Draw animation: fist rises from below the frame and settles. t∈[0,1]. */
export function equipOffset(t:number):ViewOffset{
 if(t>=1)return {...ZERO};
 const u=Math.max(0,t);
 const e=1-Math.pow(1-u,3);
 const settle=Math.sin(u*Math.PI)*.04;
 return {x:.06*(1-e),y:-.22*(1-e),z:.04*(1-e),pitch:.9*(1-e)-settle,yaw:0,roll:-.5*(1-e)};
}

const stubMetal=()=>new THREE.MeshStandardMaterial({
 color:0x6a7078,metalness:.55,roughness:.55,envMapIntensity:.35,
});
const stubGrip=()=>new THREE.MeshStandardMaterial({
 color:0x3a2418,metalness:.05,roughness:.9,envMapIntensity:.15,
});

/**
 * Keep Poly Haven PBR maps. Soft envMap only — no emissive wash, no local lamps.
 */
export function prepareKnifeMaterials(root:THREE.Object3D,envMap?:THREE.Texture|null){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.emissive?.setHex(0x000000);
   sm.emissiveIntensity=0;
   if(envMap){
    sm.envMap=envMap;
    sm.envMapIntensity=.45;
   }
   sm.needsUpdate=true;
  }
 });
}

/**
 * Aim blade tip along −Z (look) and put the butt at the origin so the hand
 * holds the grip — tip extends into the scene, not back at the camera.
 */
export function alignKnifeBladeForward(scene:THREE.Object3D){
 scene.rotation.set(0,0,0);
 scene.quaternion.identity();
 scene.position.set(0,0,0);
 scene.updateMatrixWorld(true);

 let blade:THREE.Object3D|undefined;
 let handle:THREE.Object3D|undefined;
 scene.traverse(o=>{
  if(o.name==='fish_knife_blade')blade=o;
  if(o.name==='fish_knife_handle')handle=o;
 });

 if(blade&&handle){
  const bladeC=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
  const handleC=new THREE.Box3().setFromObject(handle).getCenter(new THREE.Vector3());
  const tipDir=bladeC.clone().sub(handleC);
  if(tipDir.lengthSq()<1e-8)tipDir.set(0,0,-1);
  tipDir.normalize();
  // Rotate so handle→blade aims at look (−Z).
  scene.quaternion.setFromUnitVectors(tipDir,new THREE.Vector3(0,0,-1));
  scene.updateMatrixWorld(true);

  // Roll flat face toward camera-up so fish scales read.
  const hs=new THREE.Box3().setFromObject(handle).getSize(new THREE.Vector3());
  if(hs.x<hs.y){
   scene.rotateZ(Math.PI/2);
   scene.updateMatrixWorld(true);
   // Re-aim tip after roll (roll can tilt the tip off −Z).
   const blade2=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
   const handle2=new THREE.Box3().setFromObject(handle).getCenter(new THREE.Vector3());
   const tip2=blade2.clone().sub(handle2);
   if(tip2.lengthSq()>1e-8){
    tip2.normalize();
    const fix=new THREE.Quaternion().setFromUnitVectors(tip2,new THREE.Vector3(0,0,-1));
    scene.quaternion.premultiply(fix);
    scene.updateMatrixWorld(true);
   }
  }
 }else{
  const size=new THREE.Box3().setFromObject(scene).getSize(new THREE.Vector3());
  if(size.x>=size.y&&size.x>=size.z)scene.rotation.y=-Math.PI/2;
  else if(size.y>=size.x&&size.y>=size.z)scene.rotation.x=Math.PI/2;
  scene.updateMatrixWorld(true);
 }

 // Pivot on the wooden grip so the pose origin is the handle, tip still −Z.
 scene.updateMatrixWorld(true);
 if(handle){
  const grip=new THREE.Box3().setFromObject(handle).getCenter(new THREE.Vector3());
  scene.position.sub(grip);
 }else{
  const box=new THREE.Box3().setFromObject(scene);
  scene.position.x-=(box.min.x+box.max.x)*.5;
  scene.position.y-=(box.min.y+box.max.y)*.5;
  scene.position.z-=box.max.z;
 }
}

/**
 * Knife meshes arrive tip −Z, flats facing ±Y (alignKnifeBladeForward). The
 * mount turns them into the fist frame: tip +Y out of the thumb side, flats
 * facing palm / fingertips (±X), edge toward the fingers (+Z) like a real
 * hammer grip.
 */
/** Fish-knife prop is 22 cm; a dive knife is ~30 cm with a 14 cm blade. */
export const KNIFE_MESH_SCALE=1.35;
/** Slide the knife so the guard sits just above the index finger; the pommel shows below the pinky. */
export const KNIFE_MESH_SHIFT=0;
export const KNIFE_MOUNT_EULER=Object.freeze(new THREE.Euler(Math.PI/2,Math.PI/2,0,'YXZ'));

/**
 * The Poly Haven fish knife has a 12 cm handle — longer than a gloved fist,
 * so a big pommel stuck out of the hand. Squash the handle (not the blade)
 * along its length to ~9 cm, keeping the end that meets the blade in place.
 */
export const KNIFE_HANDLE_LENGTH_SCALE=.62;
export function shortenFishKnifeHandle(scene:THREE.Object3D){
 const handle=scene.getObjectByName('fish_knife_handle');
 const blade=scene.getObjectByName('fish_knife_blade');
 if(!handle||!blade)return;
 scene.updateMatrixWorld(true);
 const hb=new THREE.Box3().setFromObject(handle);
 const bc=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
 const size=hb.getSize(new THREE.Vector3());
 // Long axis in the parent's space.
 const axis=size.x>=size.y&&size.x>=size.z?'x':size.y>=size.z?'y':'z';
 const hc=hb.getCenter(new THREE.Vector3());
 const toward=Math.sign(bc[axis]-hc[axis])||1;
 const joint=toward>0?hb.max[axis]:hb.min[axis];
 // Scale the node about the joint: find which local axis is the long one.
 const geo=(handle as THREE.Mesh).geometry;
 if(!geo)return;
 geo.computeBoundingBox();
 const ls=geo.boundingBox!.getSize(new THREE.Vector3());
 const lAxis=ls.x>=ls.y&&ls.x>=ls.z?'x':ls.y>=ls.z?'y':'z';
 handle.scale[lAxis]*=KNIFE_HANDLE_LENGTH_SCALE;
 handle.updateMatrixWorld(true);
 const nb=new THREE.Box3().setFromObject(handle);
 const newJoint=toward>0?nb.max[axis]:nb.min[axis];
 handle.position[axis]+=joint-newJoint;
 scene.updateMatrixWorld(true);
}

/**
 * The fish knife is a slim 2 cm fillet blade; a diver's knife is broader.
 * Widen only the blade across its width (not length or thickness).
 */
export const KNIFE_BLADE_WIDTH_SCALE=1.45;
export function widenFishKnifeBlade(scene:THREE.Object3D){
 const blade=scene.getObjectByName('fish_knife_blade') as THREE.Mesh|undefined;
 if(!blade?.geometry)return;
 blade.geometry.computeBoundingBox();
 const s=blade.geometry.boundingBox!.getSize(new THREE.Vector3());
 const dims:('x'|'y'|'z')[]=(['x','y','z'] as const).slice().sort((a,b)=>s[b]-s[a]);
 blade.scale[dims[1]]*=KNIFE_BLADE_WIDTH_SCALE; // middle extent = width
}

function attachKnifeMesh(root:THREE.Group,mesh:THREE.Object3D){
 const mount=root.getObjectByName('knifeMount');
 if(!mount){root.add(mesh);return;}
 const prev=mount.getObjectByName('knifeMesh');
 if(prev)mount.remove(prev);
 mesh.name='knifeMesh';
 mount.add(mesh);
}

function createKnifeMeshStub():THREE.Group{
 const g=new THREE.Group();
 g.name='knifeMesh';
 const blade=new THREE.Mesh(new THREE.BoxGeometry(.045,.014,.22),stubMetal());
 blade.name='fish_knife_blade';blade.position.z=-.12;
 const tip=new THREE.Mesh(new THREE.ConeGeometry(.02,.05,4),stubMetal());
 tip.rotation.x=-Math.PI/2;tip.position.z=-.24;
 const handle=new THREE.Mesh(new THREE.CylinderGeometry(.018,.02,.09,8),stubGrip());
 handle.name='fish_knife_handle';handle.rotation.x=Math.PI/2;handle.position.z=-.02;
 g.add(blade,tip,handle);
 alignKnifeBladeForward(g);
 return g;
}

/**
 * Held knife viewmodel: knifeVisual (camera-space pose) → knifeGrip (fist
 * frame) → gloved hand + knifeMount → knifeMesh. Hidden until the caller shows it.
 */
export function createKnifeStub():THREE.Group{
 const g=new THREE.Group();
 g.name='knifeVisual';
 g.frustumCulled=false;
 const grip=new THREE.Group();
 grip.name='knifeGrip';
 g.add(grip);
 grip.add(buildDiverHand(undefined,forearmInFist()));
 const mount=new THREE.Group();
 mount.name='knifeMount';
 mount.rotation.copy(KNIFE_MOUNT_EULER);
 mount.scale.setScalar(KNIFE_MESH_SCALE);
 mount.position.y=KNIFE_MESH_SHIFT;
 grip.add(mount);
 attachKnifeMesh(g,createKnifeMeshStub());
 poseKnife(g);
 g.visible=false;
 g.userData.knifeReady=true;
 return g;
}

/** Camera-local rest pose for the held diving knife. */
export function poseKnife(g:THREE.Group){
 g.scale.set(KNIFE_HOLD_SCALE.x,KNIFE_HOLD_SCALE.y,KNIFE_HOLD_SCALE.z);
 g.position.set(KNIFE_HOLD_POS.x,KNIFE_HOLD_POS.y,KNIFE_HOLD_POS.z);
 g.rotation.set(KNIFE_HOLD_ROT.x,KNIFE_HOLD_ROT.y,KNIFE_HOLD_ROT.z);
}

/**
 * Load Poly Haven fish_knife into an existing knife group (replaces stub meshes).
 */
export async function upgradeKnifeVisual(root:THREE.Group,envMap?:THREE.Texture|null):Promise<boolean>{
 try{
  const loader=new GLTFLoader();
  loader.setPath('/assets/knife/');
  const gltf=await loader.loadAsync('fish_knife_1k.gltf');
  const scene=gltf.scene;
  shortenFishKnifeHandle(scene);
  widenFishKnifeBlade(scene);
  alignKnifeBladeForward(scene);
  prepareKnifeMaterials(scene,envMap??null);
  scene.traverse(o=>{o.frustumCulled=false;});
  attachKnifeMesh(root,scene);
  poseKnife(root);
  root.userData.knifeReady=true;
  return true;
 }catch(err){
  console.warn('Knife asset failed to load; keeping stub.',err);
  root.userData.knifeReady=true;
  return false;
 }
}

export function applyKnifeEnvMap(root:THREE.Object3D,envMap:THREE.Texture){
 const mount=root.getObjectByName('knifeMount');
 prepareKnifeMaterials(mount??root,envMap);
 const hand=root.getObjectByName('knifeHand');
 if(hand)applyHandEnvMap(hand,envMap);
}

export function createKnifeVisual():THREE.Group{
 return createKnifeStub();
}

/** Only show once glTF (or failed stub) is ready — prevents white chrome flash. */
export function knifeMeshReady(g:THREE.Group|null|undefined):boolean{
 return !!g?.userData?.knifeReady;
}
