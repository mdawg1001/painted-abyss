/**
 * First-person diver's right hand: neoprene glove closed in a hammer grip,
 * wrist cuff, and a wetsuit forearm that runs off the bottom-right of the view.
 *
 * Built procedurally so it needs no extra asset. Everything is in the "fist
 * frame" used by the held knife:
 *  - origin = centre of the gripped handle
 *  - +Y     = along the handle toward the blade (thumb / index side)
 *  - +Z     = wrist → knuckles (metacarpal direction)
 *  - +X     = Y × Z, the side the fingertips curl round to; the palm sits on −X
 *
 * Dimensions are an adult hand in a 3 mm glove (≈ 9 cm across the knuckles,
 * finger radius ≈ 1 cm). Real scale: the viewmodel is never enlarged.
 */
import * as THREE from 'three';

/** Wrist centre in the fist frame; the forearm hangs from here. */
export const WRIST_POS=Object.freeze({x:-.03,y:-.004,z:-.082});
/**
 * Forearm direction (wrist → elbow) in the fist frame: mostly straight back
 * along −Z, with ~30° of wrist extension (toward −X, the back of the hand) and
 * ~12° of ulnar tilt (toward −Y). Keeps the wrist inside its real range while
 * the blade points into the scene.
 */
export const FOREARM_DIR=Object.freeze(new THREE.Vector3(-.5,-.2,-.84).normalize());
/** Largest wrist bend we allow between the forearm and the −Z (neutral) axis. */
export const WRIST_MAX_BEND=THREE.MathUtils.degToRad(62);

/** Clamp a requested forearm direction to the wrist's range of motion. */
export function clampForearm(dir:THREE.Vector3):THREE.Vector3{
 const d=dir.clone().normalize();
 const neutral=new THREE.Vector3(0,0,-1);
 const ang=d.angleTo(neutral);
 if(ang<=WRIST_MAX_BEND)return d;
 const axis=new THREE.Vector3().crossVectors(neutral,d).normalize();
 return neutral.applyAxisAngle(axis,WRIST_MAX_BEND);
}
export const FOREARM_LEN=.62;

/** Seeded value noise → tiling bump texture for neoprene grain (no canvas, works in node). */
function neopreneGrain(size=64,seed=7):THREE.DataTexture{
 let s=seed>>>0;
 const rnd=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};
 const data=new Uint8Array(size*size*4);
 for(let i=0;i<size*size;i++){
  const v=Math.round(118+rnd()*60);
  data[i*4]=data[i*4+1]=data[i*4+2]=v;data[i*4+3]=255;
 }
 const t=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);
 t.wrapS=t.wrapT=THREE.RepeatWrapping;
 t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;
 t.needsUpdate=true;
 return t;
}

export type HandMaterials={glove:THREE.MeshPhysicalMaterial;palm:THREE.MeshPhysicalMaterial;sleeve:THREE.MeshPhysicalMaterial;trim:THREE.MeshStandardMaterial;};

export function makeHandMaterials():HandMaterials{
 const grain=neopreneGrain();
 grain.repeat.set(6,6);
 // Neoprene: very rough, faint fabric sheen along silhouettes.
 const glove=new THREE.MeshPhysicalMaterial({
  color:0x23272c,roughness:.82,metalness:0,sheen:.7,sheenRoughness:.55,sheenColor:new THREE.Color(0x5d6b77),
  bumpMap:grain,bumpScale:.6,envMapIntensity:.6,
 });
 const palm=new THREE.MeshPhysicalMaterial({
  color:0x3a3f45,roughness:.9,metalness:0,sheen:.4,sheenRoughness:.7,sheenColor:new THREE.Color(0x4a545c),
  bumpMap:grain,bumpScale:1.4,envMapIntensity:.55,
 });
 const sleeve=new THREE.MeshPhysicalMaterial({
  color:0x1c2a36,roughness:.78,metalness:0,sheen:.8,sheenRoughness:.5,sheenColor:new THREE.Color(0x4f6a80),
  bumpMap:grain,bumpScale:.5,envMapIntensity:.6,
 });
 const trim=new THREE.MeshStandardMaterial({color:0x3b4249,roughness:.7,metalness:.05,envMapIntensity:.5});
 return {glove,palm,sleeve,trim};
}

const Y_UP=new THREE.Vector3(0,1,0);

/** Tapered segment a→b with rounded ends (a joint sphere at each end). */
function limb(a:THREE.Vector3,b:THREE.Vector3,ra:number,rb:number,mat:THREE.Material,name?:string):THREE.Group{
 const g=new THREE.Group();
 if(name)g.name=name;
 const len=a.distanceTo(b);
 const cyl=new THREE.Mesh(new THREE.CylinderGeometry(rb,ra,len,14,1,true),mat);
 cyl.position.copy(a).add(b).multiplyScalar(.5);
 cyl.quaternion.setFromUnitVectors(Y_UP,b.clone().sub(a).normalize());
 const ja=new THREE.Mesh(new THREE.SphereGeometry(ra,14,10),mat);ja.position.copy(a);
 const jb=new THREE.Mesh(new THREE.SphereGeometry(rb,14,10),mat);jb.position.copy(b);
 g.add(cyl,ja,jb);
 return g;
}

function ellipsoid(c:THREE.Vector3,r:THREE.Vector3,mat:THREE.Material,rot?:THREE.Euler):THREE.Mesh{
 const m=new THREE.Mesh(new THREE.SphereGeometry(1,22,16),mat);
 m.position.copy(c);m.scale.copy(r);if(rot)m.rotation.copy(rot);
 return m;
}

const V=(x:number,y:number,z:number)=>new THREE.Vector3(x,y,z);

/**
 * Finger curled round a handle of radius ≈ 1.5 cm. Cross-section path in the
 * X/Z plane: knuckle behind the palm line → over the front of the handle →
 * down the far side → fingertip pressed back toward the palm heel.
 */
function finger(y:number,r:number,reach:number,mat:THREE.Material,name:string):THREE.Group{
 const g=new THREE.Group();g.name=name;
 const s=reach;
 const mcp=V(-.03,y,.006);
 const pip=V(-.03+.042*s,y,.006+.024*s);
 const dip=V(pip.x+.02*s,y,pip.z-.028*s);
 const tip=V(dip.x-.01*s,y,dip.z-.019*s);
 g.add(limb(mcp,pip,r*1.08,r,mat));
 g.add(limb(pip,dip,r,r*.94,mat));
 g.add(limb(dip,tip,r*.94,r*.82,mat));
 return g;
}

/**
 * The gloved hand in the fist frame (see file header). Returns the group plus
 * the forearm sub-group so callers can inspect it.
 */
export function buildDiverHand(mats:HandMaterials=makeHandMaterials(),forearmDir:THREE.Vector3=FOREARM_DIR):THREE.Group{
 const hand=new THREE.Group();
 hand.name='knifeHand';

 // Back of the hand / palm block: flattened ellipsoid over the metacarpals.
 hand.add(ellipsoid(V(-.034,-.002,-.036),V(.019,.046,.05),mats.glove));
 // Palm pad that presses the handle (lighter grip panel).
 hand.add(ellipsoid(V(-.022,-.004,-.03),V(.012,.042,.042),mats.palm));
 // Hypothenar (pinky-side heel) and thenar (thumb ball) pads.
 hand.add(ellipsoid(V(-.026,-.036,-.052),V(.016,.018,.03),mats.glove));
 hand.add(ellipsoid(V(-.022,.03,-.05),V(.019,.022,.032),mats.glove,new THREE.Euler(.35,0,.2)));

 // Knuckle ridge.
 for(const [y,r] of [[.03,.0118],[.01,.0122],[-.01,.0115],[-.028,.0102]] as const){
  const k=new THREE.Mesh(new THREE.SphereGeometry(r,14,10),mats.glove);
  k.position.set(-.031,y,.006);hand.add(k);
 }
 // Fingers: index → pinky.
 hand.add(finger(.031,.0104,1,mats.glove,'handIndex'));
 hand.add(finger(.0105,.0107,1.04,mats.glove,'handMiddle'));
 hand.add(finger(-.0095,.0102,.98,mats.glove,'handRing'));
 hand.add(finger(-.0275,.0088,.84,mats.glove,'handPinky'));

 // Thumb: from the thenar pad up past the index knuckle and across the
 // index finger's middle segment (classic hammer grip lock).
 const thumb=new THREE.Group();thumb.name='handThumb';
 const cmc=V(-.03,.03,-.062),mcp=V(-.016,.05,-.03),ip=V(.004,.047,-.004),tip=V(.02,.04,.012);
 thumb.add(limb(cmc,mcp,.0135,.0118,mats.glove));
 thumb.add(limb(mcp,ip,.0118,.0108,mats.glove));
 thumb.add(limb(ip,tip,.0108,.0092,mats.glove));
 hand.add(thumb);

 // Wrist + glove cuff with a velcro strap.
 const w=V(WRIST_POS.x,WRIST_POS.y,WRIST_POS.z);
 const along=clampForearm(forearmDir);
 const cuffEnd=w.clone().addScaledVector(along,.055);
 hand.add(limb(V(-.033,-.002,-.058),w,.024,.024,mats.glove));
 const cuff=limb(w.clone().addScaledVector(along,-.006),cuffEnd,.031,.036,mats.glove,'handCuff');
 hand.add(cuff);
 const strap=new THREE.Mesh(new THREE.TorusGeometry(.0355,.0045,8,28),mats.trim);
 strap.position.copy(w).addScaledVector(along,.03);
 strap.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),along);
 strap.name='handStrap';
 hand.add(strap);

 // Wetsuit forearm: tapered, slightly oval, running back toward the elbow.
 const forearm=new THREE.Group();forearm.name='handForearm';
 const fa=cuffEnd.clone().addScaledVector(along,-.01);
 const fb=w.clone().addScaledVector(along,FOREARM_LEN);
 const arm=new THREE.Mesh(new THREE.CylinderGeometry(.05,.034,fa.distanceTo(fb),20,6,false),mats.sleeve);
 arm.position.copy(fa).add(fb).multiplyScalar(.5);
 arm.quaternion.setFromUnitVectors(Y_UP,fb.clone().sub(fa).normalize());
 // Wider across the palm plane (Y) than front-to-back — real forearm section.
 arm.scale.set(.9,1,1.08);
 forearm.add(arm);
 // Stitched seam panel running up the top of the sleeve.
 // Offset toward the back of the hand (−X), kept perpendicular to the arm so it hugs the sleeve.
 const outward=V(-1,.25,0).addScaledVector(along,-V(-1,.25,0).dot(along)).normalize();
 const seamA=fa.clone().addScaledVector(outward,.032),seamB=fb.clone().addScaledVector(outward,.046);
 forearm.add(limb(seamA,seamB,.0028,.0034,mats.trim,'handSeam'));
 hand.add(forearm);

 hand.traverse(o=>{
  if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;}
 });
 return hand;
}

/** Point the hand's PBR at the same soft envMap the knife uses. */
export function applyHandEnvMap(root:THREE.Object3D,envMap:THREE.Texture){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const m=o.material as THREE.MeshStandardMaterial;
  if(!m||!('envMap' in m))return;
  m.envMap=envMap;m.needsUpdate=true;
 });
}
