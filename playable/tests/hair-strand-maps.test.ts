import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {applyHairStrandMaps,getHairStrandMaps} from '../src/hairStrandMaps';

test('procedural hair strand maps are seamless DataTextures',()=>{
 const a=getHairStrandMaps(),b=getHairStrandMaps();
 assert.equal(a,b,'cached singleton');
 assert.ok(a.albedo instanceof THREE.DataTexture);
 assert.ok(a.normal instanceof THREE.DataTexture);
 assert.ok(a.roughness instanceof THREE.DataTexture);
 assert.equal(a.albedo.wrapS,THREE.RepeatWrapping);
});

test('applyHairStrandMaps wires albedo/normal/roughness and hair-card alpha',()=>{
 const mat=new THREE.MeshStandardMaterial({vertexColors:true,color:0xff0000});
 applyHairStrandMaps(mat);
 assert.equal(mat.vertexColors,false);
 assert.ok(mat.map);
 assert.ok(mat.normalMap);
 assert.ok(mat.roughnessMap);
 assert.ok(mat.alphaTest>=.2&&mat.alphaTest<.5,'alpha cutouts for hair-cards');
 assert.equal(mat.side,THREE.DoubleSide);
 assert.equal(mat.color.getHex(),0xff0000,'tint colour preserved');
});

test('shipped hair kits keep UVs for strand texturing',async()=>{
 const b=fs.readFileSync(new URL('../public/assets/colourful-guard/civilian.glb',import.meta.url));
 const g=await new GLTFLoader().parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
 let checked=0;
 g.scene.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  if(!o.name.startsWith('Hair_')&&!o.name.startsWith('Facial_'))return;
  assert.ok(o.geometry.getAttribute('uv'),`${o.name} has uv`);
  checked++;
 });
 assert.ok(checked>=6,'hair + facial kits present');
});
