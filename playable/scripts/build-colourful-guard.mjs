/** Original faceless civilian mesh. Reuses the shipped CC0 Quaternius skeleton and gait clips.
 * Run: node scripts/build-colourful-guard.mjs. No Blender/Unity dependency.
 *
 * Smooth shading depends on welding shared verts *before* computeVertexNormals.
 * Calling toNonIndexed() first makes every corner unique → face normals → faceted look.
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
const parts=[];
const C={skin:0xecd5ad,jacket:0xe95b49,trim:0x3bbbc5,trousers:0x268d9a,hair:0x493a58,shoe:0xf0e6cf,sole:0xe2b43c,zip:0xa1a6a2};
function add(geo,color,weights){
 geo=geo.clone();
 geo.deleteAttribute('uv');
 // Weld coincident corners so computeVertexNormals averages across faces (smooth).
 geo=mergeVertices(geo,1e-4);
 geo.computeVertexNormals();
 // Keep indexed: smaller GLB, shared verts retain smooth normals under skinning.
 const p=geo.attributes.position,n=p.count,c=new T.Color(color),cols=[],ids=[],ws=[];
 for(let i=0;i<n;i++){cols.push(c.r,c.g,c.b);const w=weights(new T.Vector3().fromBufferAttribute(p,i));ids.push(...w.map(x=>bones.get(x[0]).i),...Array(4-w.length).fill(0));ws.push(...w.map(x=>x[1]),...Array(4-w.length).fill(0));}
 geo.setAttribute('color',new T.Float32BufferAttribute(cols,3));geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(ids,4));geo.setAttribute('skinWeight',new T.Float32BufferAttribute(ws,4));parts.push(geo);
}
const rigid=n=>()=>[[n,1]];
function ellipsoid(at,scale,color,bone,segments=16){const g=new T.SphereGeometry(1,segments,12);g.scale(...scale);g.translate(...at);add(g,color,rigid(bone));}
function capsule(at,size,color,bone,angle=0){
 // Rounded trim/collar instead of hard boxes (reads smoother under light).
 const [sx,sy,sz]=size;const g=new T.CapsuleGeometry(Math.min(sx,sz)*.5,Math.max(sy-.01,.02),6,10);
 g.scale(sx/Math.min(sx,sz),1,sz/Math.min(sx,sz));g.rotateZ(angle);g.translate(...at);add(g,color,rigid(bone));
}
function segment(a,b,r1,r2,color,first,second=first){
 const delta=b.clone().sub(a),length=delta.length();const g=new T.CylinderGeometry(r2,r1,length,14,6);
 g.applyQuaternion(new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),delta.clone().normalize()));g.translate(...a.clone().add(b).multiplyScalar(.5).toArray());
 add(g,color,p=>{const t=T.MathUtils.clamp(p.clone().sub(a).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1);return first===second?[[first,1]]:[[first,1-w],[second,w]];});
}
// Jacket rings: denser circumferential + vertical samples for a rounder torso silhouette.
const rings=[[1.02,.30,.19],[1.08,.33,.20],[1.18,.34,.21],[1.32,.335,.215],[1.48,.33,.22],[1.62,.36,.23],[1.75,.40,.24],[1.86,.35,.22],[1.94,.24,.16],[1.99,.12,.12]];
const RING_SEGS=20;
const vertices=[];for(let r=0;r<rings.length-1;r++)for(let i=0;i<RING_SEGS;i++){
 const vertex=(rr,j)=>{const [y,x,z]=rings[rr],a=j/RING_SEGS*Math.PI*2;return [Math.sin(a)*x,y,Math.cos(a)*z-.02];};
 vertices.push(...vertex(r,i),...vertex(r,i+1),...vertex(r+1,i),...vertex(r+1,i),...vertex(r,i+1),...vertex(r+1,i+1));
}
const torso=new T.BufferGeometry();torso.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
add(torso,C.jacket,p=>{const w=T.MathUtils.smoothstep(p.y,1.25,1.75);return [['Abdomen',1-w],['Torso',w]];});
ellipsoid([0,1.05,-.03],[.34,.19,.22],C.trousers,'Hips');
// Blank oval face, ears and angular purple hair. No facial decal or expression morphs.
ellipsoid([0,2.24,.025],[.30,.35,.26],C.skin,'Head',18);
for(const s of [-1,1])ellipsoid([s*.292,2.23,.015],[.055,.087,.045],C.skin,'Head',10);
const hp=[];
const HAIR_SEGS=18;
const hairV=(ring,i)=>{const a=i/HAIR_SEGS*Math.PI*2,edge=1.4-.45*Math.cos(a),t=ring/6*edge;return [Math.sin(a)*Math.sin(t)*.318,2.27+Math.cos(t)*.375,Math.cos(a)*Math.sin(t)*.28+.01];};
for(let r=0;r<6;r++)for(let i=0;i<HAIR_SEGS;i++)hp.push(...hairV(r,i),...hairV(r+1,i),...hairV(r,i+1),...hairV(r,i+1),...hairV(r+1,i),...hairV(r+1,i+1));
const hair=new T.BufferGeometry();hair.setAttribute('position',new T.Float32BufferAttribute(hp,3));add(hair,C.hair,rigid('Head'));
// Soft fringe volume instead of a two-triangle wedge.
ellipsoid([-.05,2.48,.18],[.18,.08,.08],C.hair,'Head',10);
ellipsoid([.08,2.52,.19],[.12,.07,.07],C.hair,'Head',10);
capsule([-.125,1.93,.158],[.19,.17,.05],C.trim,'Torso',-.28);
capsule([.125,1.93,.158],[.19,.17,.05],C.trim,'Torso',.28);
// Zipper as small rounded capsules so it doesn't read as stair-stepped boxes.
for(let y=1.12;y<1.88;y+=.07)capsule([0,y,.215],[.014,.08,.014],C.zip,y<1.48?'Abdomen':'Torso');
ellipsoid([0,1.80,.235],[.028,.038,.018],C.zip,'Torso',8);
for(const side of ['L','R']){
 const a=bones.get('UpperArm'+side).p,b=bones.get('LowerArm'+side).p,h=bones.get('Fist'+side).p;
 ellipsoid(a.toArray(),[.16,.15,.15],C.jacket,'UpperArm'+side);
 segment(a,b,.145,.115,C.jacket,'UpperArm'+side,'LowerArm'+side);
 segment(b,h,.12,.095,C.jacket,'LowerArm'+side,'Fist'+side);
 ellipsoid(b.toArray(),[.119,.12,.12],C.jacket,'LowerArm'+side);
 const cuff=h.clone().lerp(b,.13);segment(cuff,h,.108,.103,C.trim,'LowerArm'+side,'Fist'+side);
 ellipsoid(h.clone().add(new T.Vector3(side==='L'?.09:-.09,0,0)).toArray(),[.14,.10,.105],C.skin,'Fist'+side);
 const u=bones.get('UpperLeg'+side).p,k=bones.get('LowerLeg'+side).p,f=bones.get('Foot'+side).p;
 segment(u,k,.177,.145,C.trousers,'UpperLeg'+side,'LowerLeg'+side);
 segment(k,f,.145,.12,C.trousers,'LowerLeg'+side,'Foot'+side);
 ellipsoid(k.toArray(),[.15,.15,.15],C.trousers,'LowerLeg'+side);
 const x=f.x;ellipsoid([x,.045,.055],[.16,.115,.255],C.shoe,'Foot'+side);
 ellipsoid([x,-.027,.055],[.164,.05,.26],C.sole,'Foot'+side);
 ellipsoid([x,.111,.125],[.12,.03,.08],C.shoe,'Foot'+side,10);
}
const geometry=mergeGeometries(parts);geometry.computeBoundingBox();geometry.computeBoundingSphere();
// Soft cloth response: lower roughness + light sheen so form reads under bunker lights.
const material=new T.MeshPhysicalMaterial({
 name:'OriginalCivilian',vertexColors:true,roughness:.68,metalness:0,flatShading:false,
 sheen:0.4,sheenRoughness:0.6,sheenColor:new T.Color(0xffffff),
});
const mesh=new T.SkinnedMesh(geometry,material);mesh.name='ColourfulCivilian';scene.add(mesh);scene.updateMatrixWorld(true);mesh.bind(skeleton);mesh.frustumCulled=false;
scene.name='ColourfulGuard';scene.userData.originalMesh=true;
const clips=gltf.animations.filter(a=>['idle','walk','run'].includes(a.name.toLowerCase()));
const output=await new GLTFExporter().parseAsync(scene,{binary:true,animations:clips,onlyVisible:false});
const out=new URL('../public/assets/colourful-guard/',import.meta.url);fs.mkdirSync(out,{recursive:true});fs.writeFileSync(new URL('civilian.glb',out),Buffer.from(output));
const tris=geometry.index?geometry.index.count/3:geometry.attributes.position.count/3;
console.log({bytes:output.byteLength,triangles:tris,verts:geometry.attributes.position.count,bones:skeleton.bones.length,clips:clips.map(c=>c.name)});
