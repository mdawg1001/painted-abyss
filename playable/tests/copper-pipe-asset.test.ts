import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {
 COPPER_PIPE_URL,COPPER_SOURCE,COPPER_AUTHOR,COPPER_LICENSE,
 COPPER_SECTION_COUNT,COPPER_JOINT_OVERLAP,COPPER_WALL_CLEARANCE,COPPER_AXIS_Y,
 copperWallSpan,copperSectionLength,copperMounts,fitCopperRun,
} from '../src/copperPipeAsset';
import { PIPE_MOUNT, PIPE_WALL_CLEARANCE, fitPipeToWall } from '../src/pipeAsset';
import { breathZone, tile } from '../src/simulation';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const GLB_SHA='bc2cb52aed8220b5aded1df516303e4f8b60d3226be5c5303cfc2cf688bfff30';

function glbJson(file:string){
 const buf=fs.readFileSync(file);
 assert.equal(buf.subarray(0,4).toString('utf8'),'glTF');
 const jsonLen=buf.readUInt32LE(12);
 return JSON.parse(buf.subarray(20,20+jsonLen).toString('utf8'));
}

/** Box whose local AABB matches the official copper-pipe world size. Rear face at max X, position left at the origin. */
function authoredSection(size:{x:number;y:number;z:number}){
 const geo=new THREE.BoxGeometry(size.x,size.y,size.z);
 geo.translate(-size.x/2,size.y/2,0);
 const mesh=new THREE.Mesh(geo);
 mesh.name='section';
 return mesh;
}

test('copper pipe glb is the Sketchfab download and NOTICE credits it',()=>{
 const dir=path.join(root,'public/assets/copper-pipe');
 const glbPath=path.join(dir,'copper_pipe.glb');
 assert.ok(fs.existsSync(glbPath));
 const buf=fs.readFileSync(glbPath);
 assert.equal(buf.length,12449960);
 assert.equal(createHash('sha256').update(buf).digest('hex'),GLB_SHA);
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/pixol3d/);
 assert.match(readme,/CC BY 4\.0/);
 assert.match(readme,/91807ce330af449bbd3c59b5ede8ce67/);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Copper Pipe Section/);
 assert.match(notice,/pixol3d/);
 assert.match(notice,/CC BY 4\.0/);
 assert.match(notice,/91807ce330af449bbd3c59b5ede8ce67/);
 assert.equal(COPPER_PIPE_URL,'/assets/copper-pipe/copper_pipe.glb');
 assert.equal(COPPER_AUTHOR,'pixol3d');
 assert.equal(COPPER_LICENSE,'CC BY 4.0');
 assert.match(COPPER_SOURCE,/91807ce330af449bbd3c59b5ede8ce67/);
 const json=glbJson(glbPath);
 let tris=0;
 for(const mesh of json.meshes||[]){
  for(const prim of mesh.primitives||[]){
   tris+=Math.floor(json.accessors[prim.indices].count/3);
  }
 }
 assert.equal(tris,48634);
 const extras=JSON.stringify(json.asset?.extras??{});
 assert.match(extras,/91807ce330af449bbd3c59b5ede8ce67/);
 assert.match(extras,/CC-BY-4\.0/);
 assert.match(extras,/pixol3d/);
});

test('tiled run spans the hand-wheel wall and tees into that pipe',()=>{
 // World AABB of copper_pipe.glb after the Sketchfab node transforms (before our scale).
 const authored={x:11.338,y:11.924,z:48.792};
 const span=copperWallSpan();
 assert.equal(span.z,PIPE_MOUNT.z);
 assert.ok(span.x0<PIPE_MOUNT.x&&span.x1>PIPE_MOUNT.x,'span contains the hand-wheel riser');
 assert.ok(span.length>20,'the wheel wall is the long blind face, not one cell');
 assert.equal(COPPER_WALL_CLEARANCE,PIPE_WALL_CLEARANCE);
 assert.ok(COPPER_SECTION_COUNT>=2,'the section is repeated, not stretched');

 const mounts=copperMounts(span);
 assert.equal(mounts.length,COPPER_SECTION_COUNT);
 const len=copperSectionLength(span);
 assert.ok(len>4,'each copy is much longer than the old 1.6 m section');
 // Outer ends sit on the wall corners; inner joints overlap instead of gaping.
 assert.ok(Math.abs((mounts[0].x-len/2)-span.x0)<1e-6);
 assert.ok(Math.abs((mounts[mounts.length-1].x+len/2)-span.x1)<1e-6);
 for(let i=1;i<mounts.length;i++){
  const gap=(mounts[i].x-len/2)-(mounts[i-1].x+len/2);
  assert.ok(Math.abs(gap+COPPER_JOINT_OVERLAP)<1e-6,`joint gap ${gap}`);
 }

 const run=fitCopperRun(authoredSection(authored),span);
 run.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(run);
 const size=box.getSize(new THREE.Vector3());
 assert.ok(Math.abs(box.min.x-span.x0)<.02&&Math.abs(box.max.x-span.x1)<.02,`run x ${box.min.x}..${box.max.x}`);
 assert.ok(Math.abs(size.x-span.length)<.02,`run length ${size.x} should be the whole wall`);
 // Uniform scale keeps the authored proportions, just much bigger than the 0.39 m corridor pipe.
 const sectionHeight=len*(authored.y/authored.z);
 assert.ok(sectionHeight>1.2&&sectionHeight<3,`height ${sectionHeight} is a big pipe, not a toy or a room`);
 assert.ok(Math.abs(size.y-sectionHeight)<.02);
 assert.ok(size.z>1&&size.z<sectionHeight+0.2,`depth ${size.z} stays a pipe against the wall`);
 // Rear face is the same plane as the doom pipe's back. Axis crosses the wheel.
 assert.ok(Math.abs(box.min.z-(span.z+COPPER_WALL_CLEARANCE))<.02,`rear ${box.min.z}`);
 assert.ok(Math.abs((box.min.y+box.max.y)*.5-COPPER_AXIS_Y)<.02);
 assert.ok(box.min.x<=PIPE_MOUNT.x&&box.max.x>=PIPE_MOUNT.x,'run crosses the riser, so the joint is not a gap');
 assert.ok(box.min.y<COPPER_AXIS_Y&&box.max.y>COPPER_AXIS_Y);

 // Not the old east breath-corridor cell. Step into the room off the wall plane.
 for(const mount of mounts){
  const at=tile({x:mount.x,y:0,z:mount.z+0.6});
  assert.equal(breathZone(at.col,at.row),'');
 }

 // Each copy is the same mesh proportions (uniform scale), lined up on one axis.
 const parts=run.children.map(child=>{
  child.updateMatrixWorld(true);
  const b=new THREE.Box3().setFromObject(child);
  const s=b.getSize(new THREE.Vector3());
  return {b,s};
 });
 assert.equal(parts.length,COPPER_SECTION_COUNT);
 for(const {s} of parts){
  assert.ok(Math.abs(s.x/s.y-authored.z/authored.y)<.02,'section is not squashed');
 }
 for(let i=1;i<parts.length;i++){
  const overlap=parts[i-1].b.max.x-parts[i].b.min.x;
  assert.ok(overlap>COPPER_JOINT_OVERLAP-.02&&overlap<COPPER_JOINT_OVERLAP+.02,`overlap ${overlap}`);
  assert.ok(Math.abs(parts[i].b.min.y-parts[0].b.min.y)<.02);
  assert.ok(Math.abs(parts[i].b.min.z-parts[0].b.min.z)<.02);
 }
});

test('fitted copper volume meets the loaded hand-wheel pipe',async()=>{
 const {GLTFLoader}=await import('three/examples/jsm/loaders/GLTFLoader.js');
 const {MeshoptDecoder}=await import('three/examples/jsm/libs/meshopt_decoder.module.js');
 const buf=fs.readFileSync(path.join(root,'public/assets/doom-pipe/doom_pipe.glb'));
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 const loader=new GLTFLoader();
 loader.setMeshoptDecoder(MeshoptDecoder);
 const gltf=await new Promise<import('three/examples/jsm/loaders/GLTFLoader.js').GLTF>((res,rej)=>loader.parse(ab,'',res,rej));
 const wheelPipe=fitPipeToWall(gltf.scene,PIPE_MOUNT);
 wheelPipe.updateMatrixWorld(true);
 const wheelBox=new THREE.Box3().setFromObject(wheelPipe);
 const authored={x:11.338,y:11.924,z:48.792};
 const run=fitCopperRun(authoredSection(authored));
 run.updateMatrixWorld(true);
 const copper=new THREE.Box3().setFromObject(run);
 assert.ok(copper.intersectsBox(wheelBox),'copper intersects the hand-wheel pipe');
 // Shared rear plane: the joint is not floating off the wall ahead of the riser.
 assert.ok(Math.abs(copper.min.z-wheelBox.min.z)<.02,`rear ${copper.min.z} vs pipe ${wheelBox.min.z}`);
 // The wheel disc (furthest mesh into the room) sits inside the copper's height.
 let wheel:THREE.Mesh|null=null;
 let wheelZ=-Infinity;
 wheelPipe.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const b=new THREE.Box3().setFromObject(o);
  if(b.max.z>wheelZ){wheelZ=b.max.z;wheel=o;}
 });
 assert.ok(wheel);
 const disc=new THREE.Box3().setFromObject(wheel);
 assert.ok(copper.min.y<disc.min.y&&copper.max.y>disc.max.y,'copper surrounds the wheel height');
 assert.ok(copper.min.x<disc.min.x&&copper.max.x>disc.max.x,'copper crosses the wheel along the wall');
});
