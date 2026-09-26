// Offline tool: npm install --prefix /tmp/abyss-lod-tools @gltf-transform/core@4.2.1 @gltf-transform/functions@4.2.1 meshoptimizer@0.22.0 sharp@0.34.3
// LOD_TOOLS can point to another directory with these packages installed.
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {readFile} from 'node:fs/promises';
import * as THREE from '../node_modules/three/build/three.module.js';
import {GLTFLoader} from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
const require=createRequire(`${process.env.LOD_TOOLS||'/tmp/abyss-lod-tools'}/package.json`);
const {NodeIO}=require('@gltf-transform/core');
const {weld,simplify,prune,dedup}=require('@gltf-transform/functions');
const {MeshoptSimplifier}=require('meshoptimizer');
const sharp=require('sharp');
const root=new URL('../public/assets/copper-pipe/',import.meta.url);
await MeshoptSimplifier.ready;
const io=new NodeIO();const doc=await io.read(fileURLToPath(new URL('copper_pipe.glb',root)));
// Match the runtime's transformed mesh bounding boxes exactly. Geometry-only parse
// avoids loading images in Node and leaves the source file untouched.
const source=await readFile(new URL('copper_pipe.glb',root));
const jsonLength=source.readUInt32LE(12);
const json=JSON.parse(source.subarray(20,20+jsonLength));
delete json.images;delete json.textures;delete json.materials;
for(const mesh of json.meshes)for(const primitive of mesh.primitives)delete primitive.material;
let text=JSON.stringify(json);text+=' '.repeat((4-text.length%4)%4);
const jsonBytes=Buffer.from(text);const bin=source.subarray(20+jsonLength);
const header=Buffer.alloc(20);header.write('glTF');header.writeUInt32LE(2,4);header.writeUInt32LE(20+jsonBytes.length+bin.length,8);header.writeUInt32LE(jsonBytes.length,12);header.writeUInt32LE(0x4e4f534a,16);
const geometryGlb=Buffer.concat([header,jsonBytes,bin]);
const parsed=await new GLTFLoader().parseAsync(geometryGlb.buffer.slice(geometryGlb.byteOffset,geometryGlb.byteOffset+geometryGlb.length),'');
const box=new THREE.Box3().setFromObject(parsed.scene);
for(const scene of doc.getRoot().listScenes())scene.setExtras({...scene.getExtras(),lodSourceBounds:{min:box.min.toArray(),max:box.max.toArray()}});
await doc.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:.12,error:.005}),prune(),dedup());
for(const texture of doc.getRoot().listTextures()){
 const image=texture.getImage();if(!image)continue;
 texture.setImage(new Uint8Array(await sharp(image).resize({width:256,height:256,fit:'inside',withoutEnlargement:true}).png().toBuffer()));
 texture.setMimeType('image/png');
}
await io.write(fileURLToPath(new URL('copper_pipe_far.glb',root)),doc);
let triangles=0;doc.getRoot().listScenes()[0].traverse(node=>{for(const p of node.getMesh()?.listPrimitives()||[])triangles+=p.getIndices().getCount()/3;});
console.log({triangles,runTriangles:triangles*8});
