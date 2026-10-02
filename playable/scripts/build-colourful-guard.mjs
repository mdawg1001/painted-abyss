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

// ——— Hair / facial / cap kits (Head-bound). Exaggerated silhouettes — must read at range. ———
function kitParts(builder,vertColor=0xffffff,{keepUv=false}={}){
 const parts=[];
 const add=(geo)=>parts.push(skinGeo(geo,vertColor,rigid('Head'),{keepUv}));
 builder(add);
 return parts;
}
const hairParts=(builder)=>kitParts(builder,0xffffff,{keepUv:true});

const hairs={
 // Hedgehog: short scalp + tall upright spikes (unmistakable from bob/buzz).
 spiky:hairParts(add=>{
  add(ellipsoidGeo([0,2.30,0],[.32,.16,.30],12));
  for(let i=0;i<12;i++){
   const a=i/12*Math.PI*2;
   const h=.42+(i%3)*.08;
   const spike=new T.ConeGeometry(.06,h,7);
   spike.translate(Math.sin(a)*.17,2.48+h*.5,Math.cos(a)*.15);
   add(spike);
  }
  for(const [x,z,h] of [[0,0,.55],[.1,.06,.48],[-.1,.06,.48],[0,-.08,.5]]){
   const spike=new T.ConeGeometry(.055,h,7);
   spike.translate(x,2.50+h*.5,z);
   add(spike);
  }
 }),
 // Short cropped top + long curtain down the back (party in the back).
 mullet:hairParts(add=>{
  add(ellipsoidGeo([0,2.36,.06],[.28,.16,.24],12)); // flat top
  add(ellipsoidGeo([0,2.44,.18],[.20,.07,.10],10)); // short fringe
  // Long rear sheet — hangs well below the neck.
  add(ellipsoidGeo([0,1.95,-.30],[.34,.45,.20],14));
  add(ellipsoidGeo([0,1.55,-.34],[.30,.28,.16],12));
  add(ellipsoidGeo([0,1.25,-.30],[.22,.16,.12],10)); // tip near mid-back
  for(const side of [-1,1])add(ellipsoidGeo([side*.22,1.70,-.28],[.12,.30,.12],10)); // side licks
 }),
 // Enormous toy afro — biggest kit by far.
 afro:hairParts(add=>{
  add(ellipsoidGeo([0,2.55,0],[.62,.58,.62],18));
  // Slight lobes so it isn't a perfect ball.
  for(const [x,y,z] of [[.35,2.45,.2],[-.35,2.45,.2],[.2,2.7,-.15],[-.2,2.7,-.15]]){
   add(ellipsoidGeo([x,y,z],[.28,.28,.28],10));
  }
 }),
 // Twin pigtails: scalp + bangs + TWO clear tails hanging DOWN (not out).
 pigtails:hairParts(add=>{
  add(ellipsoidGeo([0,2.36,0],[.34,.26,.30],14)); // scalp
  add(ellipsoidGeo([0,2.50,.14],[.24,.10,.14],10)); // bangs
  for(const side of [-1,1]){
   // High ear bun
   add(ellipsoidGeo([side*.32,2.40,.02],[.11,.11,.11],10));
   // Strand beads stacked downward — reads as a pigtail in silhouette.
   const xs=side*.36;
   for(const [y,r] of [[2.20,.075],[2.00,.07],[1.80,.065],[1.60,.06],[1.42,.055],[1.26,.05]]){
    add(ellipsoidGeo([xs,y,.04],[r,r*1.15,r],8));
   }
   // Soft tip puff
   add(ellipsoidGeo([xs,1.12,.04],[.07,.09,.07],8));
  }
 }),
 // Skin-tight buzz — almost bald, tiny fuzz only.
 buzz:hairParts(add=>{
  add(ellipsoidGeo([0,2.32,0],[.305,.16,.275],12));
 }),
 // Tall centre fin mohawk — solid slab so it never collapses in the weld.
 mohawk:hairParts(add=>{
  const fin=new T.BoxGeometry(.10,.70,.55);
  fin.translate(0,2.65,-.02);
  add(fin);
  // Jagged top nubs.
  for(let i=0;i<5;i++){
   const z=-.18+i*.09;
   const nub=new T.ConeGeometry(.06,.18,6);
   nub.translate(0,3.05,z);
   add(nub);
  }
 }),
};

const hairNames=[];
for(const [id,parts] of Object.entries(hairs)){
 const m=bindMesh(parts,`Hair_${id}`,{textured:true});
 m.visible=false;
 m.frustumCulled=false;
 hairNames.push(m.name);
}

// Thick handlebar — sits clearly in front of the face (strand-textured).
{
 const parts=kitParts(add=>{
  add(ellipsoidGeo([0,2.06,.30],[.06,.035,.04],8));
  for(const side of [-1,1]){
   // Horizontal bar then curled tip.
   add(ellipsoidGeo([side*.12,2.07,.30],[.10,.04,.04],8));
   add(ellipsoidGeo([side*.22,2.10,.28],[.07,.055,.05],8));
   add(ellipsoidGeo([side*.26,2.16,.24],[.05,.06,.045],8)); // curl up
  }
 },0xffffff,{keepUv:true});
 const m=bindMesh(parts,'Facial_handlebar',{textured:true});
 m.visible=false;m.frustumCulled=false;
}

// Chunky baseball cap — tall crown + long forward brim (navy, not hair-tinted).
{
 const CAP=0x1a237e;
 const parts=kitParts(add=>{
  add(ellipsoidGeo([0,2.50,0],[.40,.22,.38],14)); // tall crown
  const brim=new T.BoxGeometry(.50,.05,.32);
  brim.translate(0,2.32,.36);
  add(brim);
  // Bill curve hint
  add(ellipsoidGeo([0,2.30,.48],[.22,.04,.10],8));
  add(ellipsoidGeo([0,2.58,.02],[.08,.04,.08],8)); // button
 },CAP,{keepUv:false});
 const m=bindMesh(parts,'Cap_baseball');
 m.visible=false;m.frustumCulled=false;
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
