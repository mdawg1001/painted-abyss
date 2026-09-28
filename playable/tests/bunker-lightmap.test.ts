import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import * as THREE from 'three';
import {buildBunkerLayout} from '../src/bunkerLayout';
import {bunkerKeepouts} from '../src/bunkerKeepouts';
import {parseBunkerKit,KIT_VERTICES} from '../src/bunkerKit';
import {bakeBunker,bunkerBucketOf,bunkerSignature,mergeBucket} from '../src/bunkerGeometry';
import {stencilRects} from '../src/bunkerDecals';
import {parseLitBunker,injectLightmap,BUNKER_LIGHT} from '../src/bunkerLightmap';

const read=(p:string)=>{const b=readFileSync(new URL(p,import.meta.url));return b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength) as ArrayBuffer;};
const kitBuf=read('../public/assets/soviet-bunker-kit/kit.bin');
const kit=parseBunkerKit(kitBuf);
const layout=buildBunkerLayout({keepouts:bunkerKeepouts()});
const packed=readFileSync(new URL('../public/assets/soviet-bunker-kit/baked/bunker-lit.pack',import.meta.url));
const unz=gunzipSync(packed);
const lit=parseLitBunker(unz.buffer.slice(unz.byteOffset,unz.byteOffset+unz.byteLength) as ArrayBuffer);

test('KIT_VERTICES matches kit.bin',()=>{
 const n=[...kit.values()].reduce((a,p)=>a+p.prims.reduce((b,q)=>b+q.pos.length/3,0),0);
 assert.equal(n,KIT_VERTICES);
});

test('the shipped bake was made for this exact bunker (rebake after any layout change)',()=>{
 assert.equal(lit.signature,bunkerSignature(layout,KIT_VERTICES),'run scripts/bunker-bake (see its README) to rebake');
});

test('baked geometry covers every draw group the game would build, triangle for triangle',()=>{
 const rects=stencilRects(layout.labels);
 const baked=bakeBunker(layout.placements,{kit,bucketOf:bunkerBucketOf,decalRect:id=>rects.get(id)??null});
 const want=new Map<string,{tris:number;box:THREE.Box3}>();
 for(const [bucket,groups] of baked)for(const [key,list] of groups){
  const g=mergeBucket(list);if(!g)continue;
  want.set(`${bucket}|${key}`,{tris:(g.index?g.index.count:g.attributes.position.count)/3,box:g.boundingBox!.clone()});
  g.dispose();
 }
 const got=new Map(lit.meshes.map(m=>[`${m.bucket}|${m.key}`,m]));
 assert.deepEqual([...got.keys()].sort(),[...want.keys()].sort());
 for(const [k,w] of want){
  const m=got.get(k)!;
  assert.equal(m.geometry.index!.count/3,w.tris,`${k} triangles`);
  const b=m.geometry.boundingBox!;
  assert.ok(b.min.distanceTo(w.box.min)<.002&&b.max.distanceTo(w.box.max)<.002,`${k} bounds moved`);
 }
});

test('lightmap UVs stay in the atlas and cables are the only unbaked groups',()=>{
 for(const m of lit.meshes){
  assert.equal(m.lm,m.key!=='cable',`${m.key} lightmap flag`);
  const a=m.geometry.attributes.aLm as THREE.BufferAttribute;
  for(let i=0;i<a.count;i++){const u=a.getX(i),v=a.getY(i);assert.ok(u>=0&&u<=1&&v>=0&&v<=1);}
 }
 // Most visible faces own real lightmap area.
 let faces=0,withArea=0;
 for(const m of lit.meshes){
  if(!m.lm)continue;
  const a=m.geometry.attributes.aLm as THREE.BufferAttribute,ix=m.geometry.index!;
  for(let t=0;t<ix.count;t+=3){
   const i=ix.getX(t),j=ix.getX(t+1),k=ix.getX(t+2);
   const ar=Math.abs((a.getX(j)-a.getX(i))*(a.getY(k)-a.getY(i))-(a.getX(k)-a.getX(i))*(a.getY(j)-a.getY(i)));
   faces++;if(ar>1e-12)withArea++;
  }
 }
 assert.ok(withArea/faces>.6,`${(withArea/faces*100).toFixed(0)}% of baked faces have lightmap area`);
});

test('shader hook lands in the chunks three builds MeshStandardMaterial from',()=>{
 const m=injectLightmap(new THREE.MeshStandardMaterial(),{value:1});
 const shader={uniforms:{} as Record<string,THREE.IUniform>,vertexShader:THREE.ShaderLib.physical.vertexShader,fragmentShader:THREE.ShaderLib.physical.fragmentShader} as unknown as THREE.WebGLProgramParametersWithUniforms;
 m.onBeforeCompile(shader,{} as THREE.WebGLRenderer);
 assert.ok(shader.vertexShader.includes('vBkLm=aLm;'));
 assert.ok(shader.fragmentShader.includes('lmE*=lmE*uBkLmScale;'));
 assert.ok(shader.fragmentShader.includes('float bkShadow=1.;')&&shader.fragmentShader.includes('#include <lights_fragment_begin>'),'shadow mask sampled before the light loops, include kept for the point cull');
 assert.ok(shader.fragmentShader.includes('reflectedLight.directDiffuse*=mix(1.,bkLmAo'));
 for(const k of Object.keys(BUNKER_LIGHT))assert.ok(k in shader.uniforms,`uniform ${k}`);
 assert.ok('uBkLmOn' in shader.uniforms);
});
