/** Original faceless civilian mesh. Reuses the shipped CC0 Quaternius skeleton and gait clips.
 * Run: node scripts/build-colourful-guard.mjs. No Blender/Unity dependency.
 */
import fs from 'node:fs';
import * as T from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {GLTFExporter} from 'three/examples/jsm/exporters/GLTFExporter.js';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
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
 if(geo.index)geo=geo.toNonIndexed();geo.deleteAttribute('uv');geo.computeVertexNormals();
 const p=geo.attributes.position,n=p.count,c=new T.Color(color),cols=[],ids=[],ws=[];
 for(let i=0;i<n;i++){cols.push(c.r,c.g,c.b);const w=weights(new T.Vector3().fromBufferAttribute(p,i));ids.push(...w.map(x=>bones.get(x[0]).i),...Array(4-w.length).fill(0));ws.push(...w.map(x=>x[1]),...Array(4-w.length).fill(0));}
 geo.setAttribute('color',new T.Float32BufferAttribute(cols,3));geo.setAttribute('skinIndex',new T.Uint16BufferAttribute(ids,4));geo.setAttribute('skinWeight',new T.Float32BufferAttribute(ws,4));parts.push(geo);
}
const rigid=n=>()=>[[n,1]];
function ellipsoid(at,scale,color,bone,segments=10){const g=new T.SphereGeometry(1,segments,8);g.scale(...scale);g.translate(...at);add(g,color,rigid(bone));}
function box(at,size,color,bone,angle=0){const g=new T.BoxGeometry(...size);g.rotateZ(angle);g.translate(...at);add(g,color,rigid(bone));}
function segment(a,b,r1,r2,color,first,second=first){
 const delta=b.clone().sub(a),length=delta.length();const g=new T.CylinderGeometry(r2,r1,length,8,4);
 g.applyQuaternion(new T.Quaternion().setFromUnitVectors(new T.Vector3(0,1,0),delta.clone().normalize()));g.translate(...a.clone().add(b).multiplyScalar(.5).toArray());
 add(g,color,p=>{const t=T.MathUtils.clamp(p.clone().sub(a).dot(delta)/(length*length),0,1);const w=T.MathUtils.smoothstep(t,.65,1)*.5;return first===second?[[first,1]]:[[first,1-w],[second,w]];});
}
// Jacket rings: broad shoulders, shaped waist and hem; weighted continuously up the spine.
const rings=[[1.02,.30,.19],[1.12,.34,.21],[1.42,.33,.22],[1.72,.40,.24],[1.88,.32,.20],[1.99,.12,.12]];
const vertices=[];for(let r=0;r<rings.length-1;r++)for(let i=0;i<12;i++){
 const vertex=(rr,j)=>{const [y,x,z]=rings[rr],a=j/12*Math.PI*2;return [Math.sin(a)*x,y,Math.cos(a)*z-.02];};
 vertices.push(...vertex(r,i),...vertex(r,i+1),...vertex(r+1,i),...vertex(r+1,i),...vertex(r,i+1),...vertex(r+1,i+1));
}
const torso=new T.BufferGeometry();torso.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
add(torso,C.jacket,p=>{const w=T.MathUtils.smoothstep(p.y,1.25,1.75);return [['Abdomen',1-w],['Torso',w]];});
ellipsoid([0,1.05,-.03],[.34,.19,.22],C.trousers,'Hips');
// Blank oval face, ears and angular purple hair. No facial decal or expression morphs.
ellipsoid([0,2.24,.025],[.30,.35,.26],C.skin,'Head',12);
for(const s of [-1,1])ellipsoid([s*.292,2.23,.015],[.055,.087,.045],C.skin,'Head',8);
const hair=new T.SphereGeometry(1,12,5,0,Math.PI*2,0,Math.PI*.54);hair.scale(.315,.37,.275);hair.translate(0,2.27,.01);add(hair,C.hair,rigid('Head'));
// Asymmetric swept fringe, faceted rather than painted on the face.
ellipsoid([-.125,2.46,.196],[.19,.12,.11],C.hair,'Head',7);
box([-.125,1.93,.158],[.19,.17,.04],C.trim,'Torso',-.28);
box([.125,1.93,.158],[.19,.17,.04],C.trim,'Torso',.28);
// Zipper sections follow their own spine region.
for(let y=1.12;y<1.88;y+=.085)box([0,y,.215],[.016,.09,.012],C.zip,y<1.48?'Abdomen':'Torso');
box([0,1.80,.235],[.048,.069,.026],C.zip,'Torso');
for(const side of ['L','R']){
 const a=bones.get('UpperArm'+side).p,b=bones.get('LowerArm'+side).p,h=bones.get('Fist'+side).p;
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
 box([x,-.037,.055],[.31,.075,.44],C.sole,'Foot'+side);
 box([x,.111,.125],[.21,.045,.13],C.shoe,'Foot'+side);
}
const geometry=mergeGeometries(parts);geometry.computeBoundingBox();geometry.computeBoundingSphere();
const material=new T.MeshStandardMaterial({name:'OriginalCivilian',vertexColors:true,roughness:.86,metalness:0,flatShading:true});
const mesh=new T.SkinnedMesh(geometry,material);mesh.name='ColourfulCivilian';scene.add(mesh);scene.updateMatrixWorld(true);mesh.bind(skeleton);mesh.frustumCulled=false;
scene.name='ColourfulGuard';scene.userData.originalMesh=true;
const clips=gltf.animations.filter(a=>['idle','walk','run'].includes(a.name.toLowerCase()));
const output=await new GLTFExporter().parseAsync(scene,{binary:true,animations:clips,onlyVisible:false});
const out=new URL('../public/assets/colourful-guard/',import.meta.url);fs.mkdirSync(out,{recursive:true});fs.writeFileSync(new URL('civilian.glb',out),Buffer.from(output));
console.log({bytes:output.byteLength,triangles:geometry.attributes.position.count/3,bones:skeleton.bones.length,clips:clips.map(c=>c.name)});
