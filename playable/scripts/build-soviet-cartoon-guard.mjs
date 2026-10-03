/** Soviet cartoon guards: 1970s Soviet animation / propaganda-poster proportions in period kit.
 * Run: node scripts/build-soviet-cartoon-guard.mjs
 *
 * Same CC0 Quaternius skeleton and idle/walk/run clips as the colourful civilians, original
 * geometry: M43 gymnastyorka with stand collar, breast pockets, shoulder boards and brass
 * buttons; leather belt; flared galife breeches; tall black kirza boots; a big cartoon head with
 * a face (eyes, brows, red nose, cheeks). Headgear and character kits are separate
 * SkinnedMeshes the archetypes switch on: `Hat_*`, `Kit_*`, `Face_*`, `Hair_crop`.
 */
import fs from 'node:fs';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {mergeGeometries,mergeVertices} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
globalThis.self=globalThis;
globalThis.createImageBitmap=async()=>({width:4,height:4,close(){}});
globalThis.ProgressEvent=class extends Event{};
globalThis.FileReader=class{readAsArrayBuffer(blob){blob.arrayBuffer().then(b=>{this.result=b;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(b=>{this.result=`data:${blob.type};base64,${Buffer.from(b).toString('base64')}`;this.onloadend?.();});}};
const source=new URL('../public/assets/soviet-uniform/quaternius_soldier_male.glb',import.meta.url);
const data=fs.readFileSync(source);
const gltf=await new GLTFLoader().parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
const scene=gltf.scene;let original;const old=[];
scene.traverse(o=>{if(o.isMesh){old.push(o);if(o.isSkinnedMesh)original=o;}});
original.skeleton.pose();scene.updateMatrixWorld(true);
const skeleton=original.skeleton;
const bones=new Map(skeleton.bones.map((b,i)=>[b.name,{b,i,p:b.getWorldPosition(new T.Vector3())}]));
for(const o of old)o.removeFromParent();

const C={skin:0xecd5ad,tunic:0x857c45,tunicDark:0x6c6438,breeches:0x6c653a,boot:0x1a1816,sole:0x0c0b0a,belt:0x6e3e1c,brass:0xe0b03a,red:0xd41a14,
 eye:0xf7f3ea,pupil:0x16120e,brow:0x3a2818,nose:0xe88a72,cheek:0xf0a08c,mouth:0x6a2a22};
const rigid=n=>()=>[[n,1]];

function skinGeo(geo,color,weights,{keepUv=false}={}){
 geo=geo.clone();
 // Body stays vertex-colour only; hair kits keep UVs for strand PBR maps.
 if(!keepUv)geo.deleteAttribute('uv');
 else if(!geo.getAttribute('uv')){
  // Fallback cylindrical UV from position if a part lost its UVs.
  const p=geo.attributes.position,uvs=[];
  for(let i=0;i<p.count;i++){
   const x=p.getX(i),y=p.getY(i),z=p.getZ(i);
   uvs.push(0.5+Math.atan2(z,x)/(Math.PI*2),(y-1.0)/1.6);
  }
  geo.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));
 }
 geo=mergeVertices(geo,1e-4);
 geo.computeVertexNormals();
 const p=geo.attributes.position,n=p.count,c=new T.Color(color),cols=[],ids=[],ws=[];
 for(let i=0;i<n;i++){
  cols.push(c.r,c.g,c.b);
  const w=weights(new T.Vector3().fromBufferAttribute(p,i));
  ids.push(...w.map(x=>bones.get(x[0]).i),...Array(4-w.length).fill(0));
  ws.push(...w.map(x=>x[1]),...Array(4-w.length).fill(0));
 }
 geo.setAttribute('color',new T.Float32BufferAttribute(cols,3));
 geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(ids,4));
 geo.setAttribute('skinWeight',new T.Float32BufferAttribute(ws,4));
 return geo;
}

function ellipsoidGeo(at,scale,segments=14){
 const g=new T.SphereGeometry(1,segments,12);g.scale(...scale);g.translate(...at);return g;
}
function capsuleGeo(at,size,angle=0){
 const [sx,sy,sz]=size;const g=new T.CapsuleGeometry(Math.min(sx,sz)*.5,Math.max(sy-.01,.02),5,8);
 g.scale(sx/Math.min(sx,sz),1,sz/Math.min(sx,sz));g.rotateZ(angle);g.translate(...at);return g;
}
function segmentGeo(a,b,r1,r2){
 const delta=b.clone().sub(a),length=delta.length();const g=new T.CylinderGeometry(r2,r1,length,12,5);
 g.applyQuaternion(new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),delta.clone().normalize()));
 g.translate(...a.clone().add(b).multiplyScalar(.5).toArray());
 return{g,delta,length,a};
}

function cartoonMat(name,{textured=false}={}){
 // Body: vertex colours. Hair/facial: UVs ready for runtime strand maps (tint via color).
 return new T.MeshStandardMaterial({
  name,vertexColors:!textured,roughness:textured?.62:.88,metalness:0,flatShading:false,color:0xffffff,
 });
}

function bindMesh(parts,name,{textured=false}={}){
 const geometry=mergeGeometries(parts);
 geometry.computeBoundingBox();geometry.computeBoundingSphere();
 const mesh=new T.SkinnedMesh(geometry,cartoonMat(name,{textured}));
 mesh.name=name;mesh.frustumCulled=false;
 scene.add(mesh);scene.updateMatrixWorld(true);mesh.bind(skeleton);
 return mesh;
}

/** Weights blending bone a → b along the segment a→b (t from 0.65 to 1). */
const segW=(boneA,boneB,aa,delta,length)=>p=>{const t=T.MathUtils.clamp(p.clone().sub(aa).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1);return [[boneA,1-w],[boneB,w]];};
/** Open elliptic band (belt, collar, cap band). */
function bandGeo(y,rx,rz,h,z=0,segments=28,x=0){
 const g=new T.CylinderGeometry(1,1,h,segments,1,true);g.scale(rx,1,rz);g.translate(x,y,z);return g;
}
function boxGeo(at,size,rot=[0,0,0]){
 const g=new T.BoxGeometry(...size);g.rotateX(rot[0]);g.rotateY(rot[1]);g.rotateZ(rot[2]);g.translate(...at);return g;
}
function ellRot(at,scale,rotZ,segments=10){const g=new T.SphereGeometry(1,segments,8);g.scale(...scale);g.rotateZ(rotZ);g.translate(...at);return g;}
/** Five-point star, extruded thin, facing +Z. */
function starGeo(at,r,depth=.012,rotY=0,tiltX=0){
 const s=new T.Shape();
 for(let i=0;i<10;i++){const a=Math.PI/2+i*Math.PI/5,rr=i%2?r*.42:r;const x=Math.cos(a)*rr,y=Math.sin(a)*rr;i?s.lineTo(x,y):s.moveTo(x,y);}
 const g=new T.ExtrudeGeometry(s,{depth,bevelEnabled:false});
 g.rotateX(tiltX);g.rotateY(rotY);g.translate(...at);return g;
}

// ——— Body: M43 gymnastyorka, belt, galife breeches, kirza boots, cartoon head with a face ———
const body=[];
const push=(geo,color,weights)=>body.push(skinGeo(geo,color,weights));

// Tunic: chunky rings from the hips to the collar (same proportions as the civilians).
const rings=[[1.02,.33,.21],[1.10,.35,.22],[1.22,.36,.23],[1.38,.355,.235],[1.52,.345,.235],[1.68,.38,.245],[1.80,.42,.26],[1.90,.34,.22],[1.97,.20,.14],[2.01,.12,.11]];
const RING_SEGS=18;
const vertices=[];
for(let r=0;r<rings.length-1;r++)for(let i=0;i<RING_SEGS;i++){
 const vertex=(rr,j)=>{const [y,x,z]=rings[rr],a=j/RING_SEGS*Math.PI*2;return [Math.sin(a)*x,y,Math.cos(a)*z-.02];};
 vertices.push(...vertex(r,i),...vertex(r,i+1),...vertex(r+1,i),...vertex(r+1,i),...vertex(r,i+1),...vertex(r+1,i+1));
}
const torso=new T.BufferGeometry();torso.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
push(torso,C.tunic,p=>{const w=T.MathUtils.smoothstep(p.y,1.25,1.75);return [['Abdomen',1-w],['Torso',w]];});
// Tunic skirt: the gymnastyorka hangs out over the breeches below the belt, flaring a little.
{
 const g=new T.CylinderGeometry(1,1.12,.26,RING_SEGS,2,true);g.scale(.37,1,.25);g.translate(0,1.08,-.02);
 push(g,C.tunic,p=>{const w=T.MathUtils.smoothstep(p.y,.98,1.2);return [['Hips',1-w],['Abdomen',w]];});
}
push(ellipsoidGeo([0,1.02,-.03],[.36,.17,.24]),C.breeches,rigid('Hips'));
// Belt with a brass star buckle.
push(bandGeo(1.215,.372,.252,.075,-.02),C.belt,rigid('Abdomen'));
push(boxGeo([0,1.215,.235],[.13,.095,.03]),C.brass,rigid('Abdomen'));
push(starGeo([0,1.215,.25],.035,.008),C.red,rigid('Abdomen'));
// Stand collar and the short button placket.
push(bandGeo(2.0,.175,.15,.09,-.005),C.tunic,rigid('Torso'));
for(const y of [1.94,1.86,1.78])push(ellipsoidGeo([0,y,.255],[.022,.022,.015],8),C.brass,rigid('Torso'));
// Breast pockets with flaps and buttons.
for(const s of [-1,1]){
 push(boxGeo([s*.16,1.7,.245],[.15,.13,.025],[.12,0,0]),C.tunicDark,rigid('Torso'));
 push(boxGeo([s*.16,1.775,.262],[.16,.05,.02],[.12,0,0]),C.tunic,rigid('Torso'));
 push(ellipsoidGeo([s*.16,1.765,.276],[.016,.016,.01],8),C.brass,rigid('Torso'));
}
// Shoulder boards: khaki with red piping.
for(const s of [-1,1]){
 push(boxGeo([s*.25,1.925,-.01],[.22,.03,.11],[0,0,-s*.18]),C.red,rigid('Torso'));
 push(boxGeo([s*.25,1.935,-.01],[.205,.03,.095],[0,0,-s*.18]),C.tunic,rigid('Torso'));
}

// Head: big cartoon head with ears and a face.
push(ellipsoidGeo([0,2.26,.02],[.34,.38,.30],18),C.skin,rigid('Head'));
for(const s of [-1,1])push(ellipsoidGeo([s*.32,2.24,.01],[.06,.10,.05],8),C.skin,rigid('Head'));
for(const s of [-1,1]){
 push(ellipsoidGeo([s*.115,2.31,.285],[.072,.085,.04],12),C.eye,rigid('Head'));
 push(ellipsoidGeo([s*.105,2.30,.318],[.034,.045,.016],10),C.pupil,rigid('Head'));
 // Thick brows, angled down toward the nose: a stern poster soldier.
 push(ellRot([s*.12,2.425,.272],[.085,.024,.03],s*.22),C.brow,rigid('Head'));
 push(ellipsoidGeo([s*.2,2.16,.25],[.06,.04,.03],10),C.cheek,rigid('Head'));
}
// Big rounded nose and a firm mouth.
push(ellipsoidGeo([0,2.215,.335],[.075,.085,.075],12),C.nose,rigid('Head'));
push(ellRot([0,2.08,.3],[.075,.016,.02],0),C.mouth,rigid('Head'));
// Neck between collar and head.
push(ellipsoidGeo([0,2.03,-.01],[.13,.08,.12],10),C.skin,rigid('Neck'));

for(const side of ['L','R']){
 const a=bones.get('UpperArm'+side).p,b=bones.get('LowerArm'+side).p,h=bones.get('Fist'+side).p;
 push(ellipsoidGeo(a.toArray(),[.17,.16,.16]),C.tunic,rigid('UpperArm'+side));
 {const {g,delta,length,a:aa}=segmentGeo(a,b,.15,.12);push(g,C.tunic,segW('UpperArm'+side,'LowerArm'+side,aa,delta,length));}
 {const {g,delta,length,a:aa}=segmentGeo(b,h,.12,.105);push(g,C.tunic,segW('LowerArm'+side,'Fist'+side,aa,delta,length));}
 push(ellipsoidGeo(b.toArray(),[.12,.12,.12]),C.tunic,rigid('LowerArm'+side));
 const cuff=h.clone().lerp(b,.12);
 {const {g,delta,length,a:aa}=segmentGeo(cuff,h,.112,.11);push(g,C.tunicDark,segW('LowerArm'+side,'Fist'+side,aa,delta,length));}
 push(ellipsoidGeo(h.clone().add(new T.Vector3(side==='L'?.10:-.10,0,0)).toArray(),[.15,.11,.12]),C.skin,rigid('Fist'+side));
 const u=bones.get('UpperLeg'+side).p,k=bones.get('LowerLeg'+side).p,f=bones.get('Foot'+side).p;
 const sx=side==='L'?1:-1;
 // Galife breeches: the cartoon jodhpur flare on the outer thigh.
 {const {g,delta,length,a:aa}=segmentGeo(u,k,.18,.13);push(g,C.breeches,segW('UpperLeg'+side,'LowerLeg'+side,aa,delta,length));}
 push(ellipsoidGeo([u.x+sx*.07,u.y-.17,u.z],[.2,.2,.17],14),C.breeches,rigid('UpperLeg'+side));
 // Kirza boots to just under the knee.
 const kb=k.clone().lerp(f,.1);
 {const {g,delta,length,a:aa}=segmentGeo(kb,f.clone().setY(.12),.14,.125);push(g,C.boot,segW('LowerLeg'+side,'Foot'+side,aa,delta,length));}
 push(bandGeo(kb.y-.02,.15,.15,.06,kb.z,20,kb.x),C.boot,rigid('LowerLeg'+side));
 push(ellipsoidGeo(k.toArray(),[.15,.15,.15]),C.breeches,rigid('LowerLeg'+side));
 const x=f.x;
 push(ellipsoidGeo([x,.06,.05],[.15,.11,.26]),C.boot,rigid('Foot'+side));
 push(ellipsoidGeo([x,-.02,.05],[.155,.045,.265]),C.sole,rigid('Foot'+side));
}
const bodyMesh=bindMesh(body,'SovietCartoon');

// ——— Kits ———
/** Kit geometry with per-part vertex colours, rigid on one bone. */
function kit(name,bone,parts){
 const geos=parts.map(([geo,color])=>skinGeo(geo,color,rigid(bone)));
 const m=bindMesh(geos,name);m.visible=false;m.frustumCulled=false;return m;
}
const HAT={pilotka:0x857c45,fur:0x5e5850,furFlap:0x6e5236,helmet:0x46573a,crown:0x8f8a52,band:0xb01818,visor:0x141414,gold:0xe8b830,black:0x161616,steel:0x9a9a96};
const kits=[];
// Pilotka side cap, worn tilted to the right, red star in front.
kits.push(kit('Hat_pilotka','Head',[
 [(()=>{const g=ellipsoidGeo([0,0,0],[.24,.15,.42],16);g.rotateZ(-.2);g.translate(.05,2.66,.0);return g;})(),HAT.pilotka],
 [(()=>{const g=bandGeo(0,.355,.33,.1,0);g.rotateZ(-.2);g.translate(.04,2.58,-.01);return g;})(),HAT.pilotka],
 [starGeo([.07,2.62,.335],.05,.012,0,-.2),C.red],
]));
// Ushanka: fur crown, ear flaps tied up, front flap with the star.
kits.push(kit('Hat_ushanka','Head',[
 [ellipsoidGeo([0,2.6,0],[.4,.25,.37],16),HAT.fur],
 [ellipsoidGeo([.34,2.52,0],[.09,.17,.27],10),HAT.fur],
 [ellipsoidGeo([-.34,2.52,0],[.09,.17,.27],10),HAT.fur],
 [ellipsoidGeo([0,2.55,.3],[.33,.14,.09],12),HAT.fur],
 [ellipsoidGeo([0,2.73,0],[.33,.07,.31],12),HAT.furFlap],
 [starGeo([0,2.56,.395],.05),C.red],
]));
// SSh-40 steel helmet, and an oversized one for the youngest conscript.
for(const [name,k] of [['Hat_helmet',1],['Hat_helmetBig',1.2]]){
 const dome=new T.SphereGeometry(.43*k,20,12,0,Math.PI*2,0,Math.PI/2);dome.scale(1,.85,1.06);dome.translate(0,2.38+(k-1)*.08,0);
 const rim=bandGeo(2.38+(k-1)*.08,.45*k,.47*k,.05);
 kits.push(kit(name,'Head',[[dome,HAT.helmet],[rim,HAT.helmet],[starGeo([0,2.56+(k-1)*.1,.395*k],.055*k,.012,0,-.45),C.red]]));
}
// Furazhka: officer's peaked cap.
kits.push(kit('Hat_furazhka','Head',[
 [ellipsoidGeo([0,2.68,.02],[.44,.09,.44],18),HAT.crown],
 [bandGeo(2.585,.345,.33,.11),HAT.band],
 [(()=>{const g=ellipsoidGeo([0,0,0],[.27,.025,.15],14);g.rotateX(.25);g.translate(0,2.54,.33);return g;})(),HAT.visor],
 [starGeo([0,2.6,.34],.045,.01),HAT.gold],
]));
// Radio operator's headphones.
{
 const band=new T.TorusGeometry(.4,.025,8,24,Math.PI);band.translate(0,2.3,0);
 kits.push(kit('Kit_headphones','Head',[
  [band,HAT.black],
  [(()=>{const g=new T.CylinderGeometry(.1,.1,.06,16);g.rotateZ(Math.PI/2);g.translate(.38,2.26,0);return g;})(),HAT.black],
  [(()=>{const g=new T.CylinderGeometry(.1,.1,.06,16);g.rotateZ(Math.PI/2);g.translate(-.38,2.26,0);return g;})(),HAT.black],
 ]));
}
// Walrus moustache and round wire spectacles.
kits.push(kit('Face_moustache','Head',[
 [ellipsoidGeo([.07,2.15,.33],[.1,.045,.05],10),C.brow],
 [ellipsoidGeo([-.07,2.15,.33],[.1,.045,.05],10),C.brow],
 [ellipsoidGeo([.15,2.12,.3],[.05,.05,.04],8),C.brow],
 [ellipsoidGeo([-.15,2.12,.3],[.05,.05,.04],8),C.brow],
]));
{
 const ring=x=>{const g=new T.TorusGeometry(.08,.012,6,20);g.translate(x,2.31,.345);return g;};
 kits.push(kit('Face_specs','Head',[[ring(.115),HAT.steel],[ring(-.115),HAT.steel],[boxGeo([0,2.32,.35],[.08,.012,.012]),HAT.steel]]));
}
// Short cropped hair, tinted per archetype (vertex white × material colour).
kits.push(kit('Hair_crop','Head',[
 [ellipsoidGeo([0,2.4,-.04],[.345,.29,.29],16),0xffffff],
 [ellipsoidGeo([.3,2.31,-.03],[.045,.07,.08],8),0xffffff],
 [ellipsoidGeo([-.3,2.31,-.03],[.045,.07,.08],8),0xffffff],
]));
// Quartermaster's belly pushing the tunic out over the belt.
kits.push(kit('Kit_belly','Abdomen',[[ellipsoidGeo([0,1.3,.05],[.43,.3,.33],18),C.tunic],[bandGeo(1.215,.41,.35,.08,.03),C.belt],[boxGeo([0,1.215,.375],[.13,.095,.03]),C.brass],[starGeo([0,1.215,.39],.035,.008),C.red]]));
// Officer's cross strap (portupeya), right shoulder to left hip.
kits.push(kit('Kit_strap','Torso',[[boxGeo([.02,1.6,.262],[.05,.62,.015],[0,0,-.55]),C.belt]]));

scene.name='SovietCartoonGuard';scene.userData.originalMesh=true;scene.userData.kits=kits.map(k=>k.name);
const clips=gltf.animations.filter(a=>['idle','walk','run'].includes(a.name.toLowerCase()));
const output=await new GLTFExporter().parseAsync(scene,{binary:true,animations:clips,onlyVisible:false});
const out=new URL('../public/assets/soviet-cartoon-guard/',import.meta.url);fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(new URL('guard.glb',out),Buffer.from(output));
const tris=g=>g.index?g.index.count/3:g.attributes.position.count/3;
console.log({bytes:output.byteLength,bodyTris:tris(bodyMesh.geometry),kits:kits.map(k=>`${k.name}:${tris(k.geometry)}`),bones:skeleton.bones.length,clips:clips.map(c=>c.name)});
