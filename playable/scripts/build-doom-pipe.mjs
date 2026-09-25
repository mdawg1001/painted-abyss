/**
 * Rebuild public/assets/doom-pipe/doom_pipe.glb from the official Sketchfab glTF
 * ("04_DOOM_pipe (detail)" by gleb_tihon, CC BY 4.0).
 *
 * The valve hand-wheel is split off into its own node, `valveWheel`, whose origin
 * sits on the wheel's spin axis (model +Z) at the rim's mid-plane, so the game can
 * turn it with a single rotation.z. Everything else stays in `pipeBody`.
 *
 * Usage (needs @gltf-transform/core, functions, extensions + meshoptimizer on the
 * resolve path, e.g. `npm i @gltf-transform/cli` in a scratch folder and run there):
 *   node build-doom-pipe.mjs <path/to/scene.gltf> <out.glb>
 */
import {NodeIO} from '@gltf-transform/core';
import {EXTMeshoptCompression,KHRMeshQuantization} from '@gltf-transform/extensions';
import {weld,prune,dedup,simplifyPrimitive,compactPrimitive,transformMesh,meshopt} from '@gltf-transform/functions';
import {MeshoptSimplifier,MeshoptEncoder,MeshoptDecoder} from 'meshoptimizer';

const [src,out]=process.argv.slice(2);
if(!src||!out)throw new Error('usage: node build-doom-pipe.mjs scene.gltf out.glb');

/** Model-space hub of the hand-wheel (measured from the source: rim x ±1.37, y 10.06–12.80, z 7.64–7.94). */
const HUB=[0,11.43,7.79];
/** Triangles of the red wheel material (mat_t9) and its dark rim face (mat_t10) in front of this plane are the wheel. The red stem housing behind it stays fixed. */
const WHEEL_Z=7.15;
const WHEEL_MATS=new Set(['mat_t9','mat_t10']);

await MeshoptSimplifier.ready;await MeshoptEncoder.ready;await MeshoptDecoder.ready;
const io=new NodeIO().registerExtensions([EXTMeshoptCompression,KHRMeshQuantization]).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const doc=await io.read(src);
const root=doc.getRoot();
const buffer=root.listBuffers()[0];
const scene=root.listScenes()[0];

// 1. Bake every node's world transform into its mesh so the parts share one model space.
const meshNodes=[];
scene.traverse(n=>{if(n.getMesh())meshNodes.push(n);});
const bodyMesh=doc.createMesh('pipeBody');
const wheelMesh=doc.createMesh('valveWheel');
for(const node of meshNodes){
 const mesh=node.getMesh();
 transformMesh(mesh,node.getWorldMatrix());
 for(const prim of mesh.listPrimitives()){
  const mat=prim.getMaterial()?.getName()??'';
  if(!WHEEL_MATS.has(mat)){bodyMesh.addPrimitive(prim);continue;}
  // 2. Split the wheel material by triangle centroid depth.
  const pos=prim.getAttribute('POSITION'),idx=prim.getIndices().getArray();
  const wheel=[],body=[];
  const a=[0,0,0],b=[0,0,0],c=[0,0,0];
  for(let i=0;i<idx.length;i+=3){
   pos.getElement(idx[i],a);pos.getElement(idx[i+1],b);pos.getElement(idx[i+2],c);
   ((a[2]+b[2]+c[2])/3>=WHEEL_Z?wheel:body).push(idx[i],idx[i+1],idx[i+2]);
  }
  const make=(list)=>{
   const p=prim.clone();
   p.setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(list)).setBuffer(buffer));
   return compactPrimitive(p);
  };
  if(body.length)bodyMesh.addPrimitive(make(body));
  if(wheel.length){
   const w=make(wheel);
   // Recentre on the spin axis.
   const wp=w.getAttribute('POSITION').clone();
   const v=[0,0,0];
   for(let i=0;i<wp.getCount();i++){wp.getElement(i,v);wp.setElement(i,[v[0]-HUB[0],v[1]-HUB[1],v[2]-HUB[2]]);}
   w.setAttribute('POSITION',wp);
   wheelMesh.addPrimitive(w);
  }
 }
}
// 3. Replace the Sketchfab hierarchy with two flat nodes under one root.
for(const n of [...scene.listChildren()])scene.removeChild(n);
const top=doc.createNode('doomPipe');
top.addChild(doc.createNode('pipeBody').setMesh(bodyMesh));
top.addChild(doc.createNode('valveWheel').setMesh(wheelMesh).setTranslation(HUB));
scene.addChild(top);
await doc.transform(prune(),dedup(),weld());
// 4. Decimate: the body is seen from a stride away; the wheel fills the view while it is turned.
for(const p of bodyMesh.listPrimitives())simplifyPrimitive(p,{simplifier:MeshoptSimplifier,ratio:.06,error:.002});
for(const p of wheelMesh.listPrimitives())simplifyPrimitive(p,{simplifier:MeshoptSimplifier,ratio:.3,error:.0008});
await doc.transform(prune(),meshopt({encoder:MeshoptEncoder,level:'medium'}));
await io.write(out,doc);
let tris=0;for(const m of doc.getRoot().listMeshes())for(const p of m.listPrimitives()){const n=p.getIndices()?.getCount()??0;tris+=n/3;console.log(m.getName(),p.getMaterial()?.getName(),n/3);}
console.log('total triangles',tris);
