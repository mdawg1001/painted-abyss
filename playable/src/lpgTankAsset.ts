/**
 * Small LPG tank (Poly Haven) — floor scenery prop.
 * Runtime files live in `public/assets/lpg_tank/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FLOOR_Y } from './simulation';

export const LPG_TANK_URL='/assets/lpg_tank/small_lpg_tank_1k.gltf';
/** World placement — west edge of the central cavern (open floor cell). */
export const LPG_TANK_POS={x:-12,y:FLOOR_Y,z:-44};
export const LPG_TANK_YAW=.7;
/** Target height after normalize (~camping cylinder). */
export const LPG_TANK_HEIGHT=.72;

const stubMat=()=>new THREE.MeshStandardMaterial({
 color:0x6a7580,metalness:.65,roughness:.4,emissive:0x1a2228,emissiveIntensity:.2,
});

/** Brighten PBR so the tank reads under cave murk. */
export function litLpgMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.envMapIntensity=.4;
   sm.emissive=new THREE.Color(0x243038);
   sm.emissiveIntensity=.28;
   sm.needsUpdate=true;
  }
 });
}

export function normalizeLpgToFloor(root:THREE.Object3D,targetHeight=LPG_TANK_HEIGHT){
 const box=new THREE.Box3().setFromObject(root);
 const size=box.getSize(new THREE.Vector3());
 const scale=targetHeight/Math.max(size.y,.001);
 root.scale.multiplyScalar(scale);
 box.setFromObject(root);
 const center=box.getCenter(new THREE.Vector3());
 root.position.x-=center.x;
 root.position.z-=center.z;
 root.position.y-=box.min.y;
}

/** Procedural stand-in while glTF loads. */
export function createLpgTankStub():THREE.Group{
 const g=new THREE.Group();
 g.name='lpgTankStub';
 const body=new THREE.Mesh(new THREE.CylinderGeometry(.18,.2,LPG_TANK_HEIGHT*.72,12),stubMat());
 body.position.y=LPG_TANK_HEIGHT*.36;
 const collar=new THREE.Mesh(new THREE.TorusGeometry(.14,.025,8,16),stubMat());
 collar.rotation.x=Math.PI/2;collar.position.y=LPG_TANK_HEIGHT*.72;
 const valve=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,.08,8),new THREE.MeshStandardMaterial({color:0x333838,metalness:.7,roughness:.35}));
 valve.position.y=LPG_TANK_HEIGHT*.8;
 g.add(body,collar,valve);
 litLpgMaterials(g);
 return g;
}

/**
 * Mount a stub immediately, then upgrade to the Poly Haven glTF.
 * Root sits on FLOOR_Y at `LPG_TANK_POS`.
 */
export function mountLpgTank(scene:THREE.Scene,onReady?:(mesh:THREE.Group)=>void):THREE.Group{
 const root=new THREE.Group();
 root.name='lpgTank';
 root.position.set(LPG_TANK_POS.x,LPG_TANK_POS.y,LPG_TANK_POS.z);
 root.rotation.y=LPG_TANK_YAW;
 root.add(createLpgTankStub());
 scene.add(root);

 const loader=new GLTFLoader();
 loader.setPath('/assets/lpg_tank/');
 loader.loadAsync('small_lpg_tank_1k.gltf').then(gltf=>{
  const mesh=gltf.scene;
  normalizeLpgToFloor(mesh);
  litLpgMaterials(mesh);
  root.clear();
  root.add(mesh);
  onReady?.(root);
 }).catch(err=>{
  console.warn('LPG tank asset failed to load; keeping stub.',err);
 });
 return root;
}
