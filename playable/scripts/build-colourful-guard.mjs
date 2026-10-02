/** Cartoon faceless civilians. Reuses CC0 Quaternius skeleton + gait clips.
 * Run: node scripts/build-colourful-guard.mjs
 *
 * Body mesh is shared pure-red / pure-blue / cream kit. Hairstyle kits are
 * separate SkinnedMeshes (`Hair_*`, plus `Facial_*` / `Cap_*`) on the Head bone.
 * Stickman-civilian inspiration; original geometry (no Unity asset).
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

const C={skin:0xecd5ad,jacket:0xff0000,trim:0x0000ff,trousers:0x0000ff,shoe:0xfff2a8,sole:0xffcc00,zip:0xffffff};
const rigid=n=>()=>[[n,1]];

function skinGeo(geo,color,weights){
 geo=geo.clone();
 geo.deleteAttribute('uv');
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

function cartoonMat(name){
 // Toy-like: matte, saturated vertex colours — not cloth PBR.
 return new T.MeshStandardMaterial({name,vertexColors:true,roughness:.88,metalness:0,flatShading:false,color:0xffffff});
}

function bindMesh(parts,name){
 const geometry=mergeGeometries(parts);
 geometry.computeBoundingBox();geometry.computeBoundingSphere();
 const mesh=new T.SkinnedMesh(geometry,cartoonMat(name));
 mesh.name=name;mesh.frustumCulled=false;
 scene.add(mesh);scene.updateMatrixWorld(true);mesh.bind(skeleton);
 return mesh;
}

// ——— Body (no hair) ———
const body=[];
const push=(geo,color,weights)=>body.push(skinGeo(geo,color,weights));

// Slightly chunkier cartoon jacket rings.
const rings=[[1.02,.32,.20],[1.10,.35,.22],[1.22,.36,.23],[1.38,.35,.23],[1.52,.34,.23],[1.68,.38,.24],[1.80,.42,.26],[1.90,.34,.22],[1.97,.20,.14],[2.01,.11,.11]];
const RING_SEGS=16;
const vertices=[];
for(let r=0;r<rings.length-1;r++)for(let i=0;i<RING_SEGS;i++){
 const vertex=(rr,j)=>{const [y,x,z]=rings[rr],a=j/RING_SEGS*Math.PI*2;return [Math.sin(a)*x,y,Math.cos(a)*z-.02];};
 vertices.push(...vertex(r,i),...vertex(r,i+1),...vertex(r+1,i),...vertex(r+1,i),...vertex(r,i+1),...vertex(r+1,i+1));
}
const torso=new T.BufferGeometry();torso.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
push(torso,C.jacket,p=>{const w=T.MathUtils.smoothstep(p.y,1.25,1.75);return [['Abdomen',1-w],['Torso',w]];});
push(ellipsoidGeo([0,1.05,-.03],[.36,.20,.24]),C.trousers,rigid('Hips'));
// Big blank cartoon head + ears (faceless).
push(ellipsoidGeo([0,2.26,.02],[.34,.38,.30],16),C.skin,rigid('Head'));
for(const s of [-1,1])push(ellipsoidGeo([s*.32,2.24,.01],[.06,.10,.05],8),C.skin,rigid('Head'));
push(capsuleGeo([-.125,1.93,.17],[.20,.18,.06],-.28),C.trim,rigid('Torso'));
push(capsuleGeo([.125,1.93,.17],[.20,.18,.06],.28),C.trim,rigid('Torso'));
for(let y=1.12;y<1.88;y+=.08)push(capsuleGeo([0,y,.23],[.015,.08,.015]),C.zip,rigid(y<1.48?'Abdomen':'Torso'));
push(ellipsoidGeo([0,1.80,.25],[.03,.04,.02],8),C.zip,rigid('Torso'));

for(const side of ['L','R']){
 const a=bones.get('UpperArm'+side).p,b=bones.get('LowerArm'+side).p,h=bones.get('Fist'+side).p;
 push(ellipsoidGeo(a.toArray(),[.17,.16,.16]),C.jacket,rigid('UpperArm'+side));
 {
  const {g,delta,length,a:aa}=segmentGeo(a,b,.155,.12);
  push(g,C.jacket,p=>{const t=T.MathUtils.clamp(p.clone().sub(aa).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1);return [['UpperArm'+side,1-w],['LowerArm'+side,w]];});
 }
 {
  const {g,delta,length,a:aa}=segmentGeo(b,h,.125,.10);
  push(g,C.jacket,p=>{const t=T.MathUtils.clamp(p.clone().sub(aa).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1);return [['LowerArm'+side,1-w],['Fist'+side,w]];});
 }
 push(ellipsoidGeo(b.toArray(),[.125,.125,.125]),C.jacket,rigid('LowerArm'+side));
 const cuff=h.clone().lerp(b,.13);
 {
  const {g,delta,length,a:aa}=segmentGeo(cuff,h,.112,.108);
  push(g,C.trim,p=>{const t=T.MathUtils.clamp(p.clone().sub(aa).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1);return [['LowerArm'+side,1-w],['Fist'+side,w]];});
 }
 push(ellipsoidGeo(h.clone().add(new T.Vector3(side==='L'?.10:-.10,0,0)).toArray(),[.15,.11,.12]),C.skin,rigid('Fist'+side));
 const u=bones.get('UpperLeg'+side).p,k=bones.get('LowerLeg'+side).p,f=bones.get('Foot'+side).p;
 {
  const {g,delta,length,a:aa}=segmentGeo(u,k,.185,.15);
  push(g,C.trousers,p=>{const t=T.MathUtils.clamp(p.clone().sub(aa).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1);return [['UpperLeg'+side,1-w],['LowerLeg'+side,w]];});
 }
 {
  const {g,delta,length,a:aa}=segmentGeo(k,f,.15,.125);
  push(g,C.trousers,p=>{const t=T.MathUtils.clamp(p.clone().sub(aa).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1);return [['LowerLeg'+side,1-w],['Foot'+side,w]];});
 }
 push(ellipsoidGeo(k.toArray(),[.16,.16,.16]),C.trousers,rigid('LowerLeg'+side));
 const x=f.x;
 push(ellipsoidGeo([x,.045,.055],[.17,.12,.27]),C.shoe,rigid('Foot'+side));
 push(ellipsoidGeo([x,-.027,.055],[.175,.055,.27]),C.sole,rigid('Foot'+side));
 push(ellipsoidGeo([x,.111,.125],[.13,.035,.09],8),C.shoe,rigid('Foot'+side));
}
const bodyMesh=bindMesh(body,'ColourfulCivilian');

// ——— Hair / facial / cap kits (Head-bound). Hair_* verts are white → runtime hairColor. ———
function kitParts(builder,vertColor=0xffffff){
 const parts=[];
 const add=(geo)=>parts.push(skinGeo(geo,vertColor,rigid('Head')));
 builder(add);
 return parts;
}
const hairParts=(builder)=>kitParts(builder,0xffffff);

const hairs={
 // Short spiky — upright cones around the crown.
 spiky:hairParts(add=>{
  add(ellipsoidGeo([0,2.28,0],[.30,.22,.28],12));
  for(const [a,h,r] of [[0,.22,.07],[.9,.20,.065],[1.8,.24,.07],[2.7,.19,.06],[3.6,.23,.07],[4.5,.18,.06],[5.4,.21,.065]]){
   const spike=new T.ConeGeometry(r,h,6);
   spike.translate(Math.sin(a)*.16,2.38+h*.35,Math.cos(a)*.14);
   add(spike);
  }
 }),
 // Business in front, party in the back.
 mullet:hairParts(add=>{
  add(ellipsoidGeo([0,2.34,.04],[.30,.22,.26],12)); // short top
  add(ellipsoidGeo([0,2.42,.16],[.22,.08,.12],10)); // fringe
  add(ellipsoidGeo([0,2.10,-.22],[.28,.28,.22],12)); // long back volume
  const curtain=new T.CylinderGeometry(.12,.16,.38,10,4);
  curtain.translate(0,1.88,-.28);curtain.rotateX(.35);
  add(curtain);
 }),
 // Big round toy afro.
 afro:hairParts(add=>{
  add(ellipsoidGeo([0,2.38,0],[.48,.46,.48],16));
 }),
 // Twin pigtails — female enemy guards.
 pigtails:hairParts(add=>{
  add(ellipsoidGeo([0,2.34,0],[.33,.28,.30],12));
  add(ellipsoidGeo([0,2.48,.08],[.22,.10,.18],10));
  for(const side of [-1,1]){
   add(ellipsoidGeo([side*.28,2.36,.02],[.09,.09,.09],8));
   const strand=new T.CylinderGeometry(.055,.04,.42,10,5);
   strand.translate(side*.34,2.08,.02);
   strand.rotateZ(side*-.35);
   add(strand);
   add(ellipsoidGeo([side*.42,1.82,.04],[.07,.09,.07],8));
  }
 }),
 // Tight crop under a cap / with a moustache.
 buzz:hairParts(add=>{
  add(ellipsoidGeo([0,2.30,0],[.31,.20,.28],12));
 }),
 // Mohawk ridge (etc.).
 mohawk:hairParts(add=>{
  add(ellipsoidGeo([0,2.28,0],[.28,.18,.26],10));
  for(let i=0;i<5;i++){
   const spike=new T.ConeGeometry(.06,.20+i*.02,6);
   spike.translate(0,2.42+i*.02,-.12+i*.07);
   add(spike);
  }
 }),
};

const hairNames=[];
for(const [id,parts] of Object.entries(hairs)){
 const m=bindMesh(parts,`Hair_${id}`);
 m.visible=false;
 hairNames.push(m.name);
}

// Handlebar moustache — tinted with hairColor at runtime.
{
 const parts=kitParts(add=>{
  for(const side of [-1,1]){
   const wing=new T.TorusGeometry(.07,.025,6,10,Math.PI);
   wing.rotateY(Math.PI/2);
   wing.rotateZ(side*.4);
   wing.translate(side*.09,2.08,.26);
   add(wing);
  }
  add(ellipsoidGeo([0,2.07,.27],[.05,.025,.035],8)); // centre
 },0xffffff);
 const m=bindMesh(parts,'Facial_handlebar');
 m.visible=false;
}

// Baseball cap — fixed navy verts (not hair-tinted).
{
 const CAP=0x1a237e;
 const parts=kitParts(add=>{
  add(ellipsoidGeo([0,2.42,0],[.36,.16,.34],12)); // crown
  const brim=new T.BoxGeometry(.42,.04,.22);
  brim.translate(0,2.30,.28);
  add(brim);
  add(ellipsoidGeo([0,2.48,.02],[.12,.04,.10],8)); // button
 },CAP);
 const m=bindMesh(parts,'Cap_baseball');
 m.visible=false;
}

scene.name='ColourfulGuard';scene.userData.originalMesh=true;scene.userData.hairStyles=hairNames;
const clips=gltf.animations.filter(a=>['idle','walk','run'].includes(a.name.toLowerCase()));
const output=await new GLTFExporter().parseAsync(scene,{binary:true,animations:clips,onlyVisible:false});
const out=new URL('../public/assets/colourful-guard/',import.meta.url);fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(new URL('civilian.glb',out),Buffer.from(output));
const tris=g=>g.index?g.index.count/3:g.attributes.position.count/3;
console.log({
 bytes:output.byteLength,
 bodyTris:tris(bodyMesh.geometry),
 hairs:hairNames,
 facial:['Facial_handlebar'],
 caps:['Cap_baseball'],
 bones:skeleton.bones.length,
 clips:clips.map(c=>c.name),
});
