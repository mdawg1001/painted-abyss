/**
 * Author compact modular industrial catwalk GLBs (Soviet steel, no warehouse orange).
 * Kit language: straight / cross / T / ladder / rail — Unity FBX can replace later.
 *
 * Writes raw GLB (no browser FileReader) from box meshes.
 * Usage: node scripts/build-industrial-catwalk.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const outDir=path.join(root,'public/assets/industrial-catwalk');
fs.mkdirSync(outDir,{recursive:true});

/** @typedef {{min:number[],max:number[],color:number[]}} Box */

function box(cx,cy,cz,sx,sy,sz,color=[.29,.31,.32]){
 return{
  min:[cx-sx*.5,cy-sy*.5,cz-sz*.5],
  max:[cx+sx*.5,cy+sy*.5,cz+sz*.5],
  color,
 };
}

function grateDeck(length=2,width=1.2,thick=.06){
 const dark=[.18,.2,.21],steel=[.29,.31,.32];
 const boxes=[box(0,thick*.5,0,width,thick,length,dark)];
 const n=Math.max(4,Math.round(length/.28));
 for(let i=0;i<n;i++){
  const z=-length*.5+(i+.5)*(length/n);
  boxes.push(box(0,thick+.02,z,width*.92,.03,.04,steel));
 }
 const m=Math.max(3,Math.round(width/.28));
 for(let i=0;i<m;i++){
  const x=-width*.5+(i+.5)*(width/m);
  boxes.push(box(x,thick+.025,0,.04,.03,length*.92,steel));
 }
 return boxes;
}

function sideRail(length=2,side=1,width=1.2){
 const steel=[.29,.31,.32];
 const x=side*(width*.5-.03);
 const boxes=[];
 for(const z of [-length*.4,0,length*.4])boxes.push(box(x,.525,z,.05,1.05,.05,steel));
 boxes.push(box(x,1.02,0,.04,.04,length*.92,steel));
 boxes.push(box(x,.55,0,.035,.03,length*.92,steel));
 return boxes;
}

function buildStraight(){
 return[...grateDeck(2,1.2),...sideRail(2,1),...sideRail(2,-1)];
}

function buildCross(){
 const a=grateDeck(2,1.2);
 // Spur: swap X/Z extents of a copy
 const spur=grateDeck(2,1.2).map(b=>{
  const[minx,miny,minz]=b.min,[maxx,maxy,maxz]=b.max;
  return{min:[minz,miny,minx],max:[maxz,maxy,maxx],color:b.color};
 });
 return[...a,...spur,...sideRail(2,1),...sideRail(2,-1)];
}

function buildT(){
 const a=grateDeck(2,1.2);
 const spur=grateDeck(2,1.2).map(b=>{
  const[minx,miny,minz]=b.min,[maxx,maxy,maxz]=b.max;
  // rotate 90° about Y and shift +X
  return{min:[minz+.9,miny,minx],max:[maxz+.9,maxy,maxx],color:b.color};
 });
 return[...a,...spur,...sideRail(2,-1)];
}

function buildLadder(){
 const steel=[.29,.31,.32];
 const h=3.35,w=.55;
 const boxes=[
  box(-w*.5,h*.5,0,.06,h,.06,steel),
  box(w*.5,h*.5,0,.06,h,.06,steel),
 ];
 const rungs=12;
 for(let i=0;i<rungs;i++){
  const y=.25+i*((h-.4)/(rungs-1));
  boxes.push(box(0,y,0,w,.04,.05,steel));
 }
 // Simple cage bar at top
 boxes.push(box(0,h-.1,.28,.5,.05,.05,steel));
 return boxes;
}

function buildRailBroken(){
 const rust=[.23,.21,.19];
 return[
  box(0,.225,0,.05,.45,.05,rust),
  // dangling rail — approximate tilted bar as stepped boxes
  box(0,.4,.25,.04,.04,.55,rust),
  box(.04,.15,.7,.05,.05,.45,rust),
  box(.06,-.05,.95,.05,.05,.35,rust),
 ];
}

/** Emit a single-mesh GLB from axis-aligned boxes. */
function writeGlb(boxes,file){
 const positions=[];
 const normals=[];
 const colors=[];
 const indices=[];
 const faces=[
  // each face: normal + 4 corners as offsets into [min,max] corners encoded below
  {n:[0,1,0],c:[[0,1,0],[1,1,0],[1,1,1],[0,1,1]]},
  {n:[0,-1,0],c:[[0,0,1],[1,0,1],[1,0,0],[0,0,0]]},
  {n:[1,0,0],c:[[1,0,0],[1,0,1],[1,1,1],[1,1,0]]},
  {n:[-1,0,0],c:[[0,0,1],[0,0,0],[0,1,0],[0,1,1]]},
  {n:[0,0,1],c:[[0,0,1],[0,1,1],[1,1,1],[1,0,1]]},
  {n:[0,0,-1],c:[[1,0,0],[1,1,0],[0,1,0],[0,0,0]]},
 ];
 let v=0;
 for(const b of boxes){
  const corners=[
   [b.min[0],b.min[1],b.min[2]],
   [b.max[0],b.min[1],b.min[2]],
   [b.min[0],b.max[1],b.min[2]],
   [b.max[0],b.max[1],b.min[2]],
   [b.min[0],b.min[1],b.max[2]],
   [b.max[0],b.min[1],b.max[2]],
   [b.min[0],b.max[1],b.max[2]],
   [b.max[0],b.max[1],b.max[2]],
  ];
  // index map: bit0=x max, bit1=y max, bit2=z max
  const corner=(cx,cy,cz)=>corners[(cx?1:0)|(cy?2:0)|(cz?4:0)];
  for(const f of faces){
   const base=v;
   for(const c of f.c){
    const p=corner(c[0],c[1],c[2]);
    positions.push(p[0],p[1],p[2]);
    normals.push(f.n[0],f.n[1],f.n[2]);
    colors.push(b.color[0],b.color[1],b.color[2]);
    v++;
   }
   indices.push(base,base+1,base+2,base,base+2,base+3);
  }
 }
 const pos=new Float32Array(positions);
 const nor=new Float32Array(normals);
 const col=new Float32Array(colors);
 const idx=new Uint32Array(indices);

 // Pack buffer: POSITION, NORMAL, COLOR_0, INDICES — all aligned to 4 bytes
 const parts=[pos.buffer,nor.buffer,col.buffer,idx.buffer];
 let binSize=0;
 const offsets=[];
 for(const p of parts){
  while(binSize%4)binSize++;
  offsets.push(binSize);
  binSize+=p.byteLength;
 }
 const bin=new Uint8Array(binSize);
 bin.set(new Uint8Array(pos.buffer),offsets[0]);
 bin.set(new Uint8Array(nor.buffer),offsets[1]);
 bin.set(new Uint8Array(col.buffer),offsets[2]);
 bin.set(new Uint8Array(idx.buffer),offsets[3]);

 const gltf={
  asset:{version:'2.0',generator:'painted-abyss-industrial-catwalk'},
  buffers:[{byteLength:bin.byteLength}],
  bufferViews:[
   {buffer:0,byteOffset:offsets[0],byteLength:pos.byteLength,target:34962},
   {buffer:0,byteOffset:offsets[1],byteLength:nor.byteLength,target:34962},
   {buffer:0,byteOffset:offsets[2],byteLength:col.byteLength,target:34962},
   {buffer:0,byteOffset:offsets[3],byteLength:idx.byteLength,target:34963},
  ],
  accessors:[
   {bufferView:0,componentType:5126,count:pos.length/3,type:'VEC3',
    min:[Math.min(...positions.filter((_,i)=>i%3===0)),Math.min(...positions.filter((_,i)=>i%3===1)),Math.min(...positions.filter((_,i)=>i%3===2))],
    max:[Math.max(...positions.filter((_,i)=>i%3===0)),Math.max(...positions.filter((_,i)=>i%3===1)),Math.max(...positions.filter((_,i)=>i%3===2))]},
   {bufferView:1,componentType:5126,count:nor.length/3,type:'VEC3'},
   {bufferView:2,componentType:5126,count:col.length/3,type:'VEC3'},
   {bufferView:3,componentType:5125,count:idx.length,type:'SCALAR'},
  ],
  materials:[{name:'SovietSteel',pbrMetallicRoughness:{baseColorFactor:[.45,.48,.5,1],metallicFactor:.55,roughnessFactor:.72},doubleSided:false}],
  meshes:[{primitives:[{attributes:{POSITION:0,NORMAL:1,COLOR_0:2},indices:3,material:0}]}],
  nodes:[{mesh:0,name:path.basename(file,'.glb')}],
  scenes:[{nodes:[0]}],
  scene:0,
 };
 const json=Buffer.from(JSON.stringify(gltf));
 const jsonPad=(4-(json.byteLength%4))%4;
 const jsonChunk=Buffer.concat([json,Buffer.alloc(jsonPad,0x20)]);
 const binPad=(4-(bin.byteLength%4))%4;
 const binChunk=Buffer.concat([Buffer.from(bin.buffer,bin.byteOffset,bin.byteLength),Buffer.alloc(binPad,0)]);

 const total=12+8+jsonChunk.byteLength+8+binChunk.byteLength;
 const header=Buffer.alloc(12);
 header.writeUInt32LE(0x46546C67,0); // glTF
 header.writeUInt32LE(2,4);
 header.writeUInt32LE(total,8);
 const jsonHeader=Buffer.alloc(8);
 jsonHeader.writeUInt32LE(jsonChunk.byteLength,0);
 jsonHeader.writeUInt32LE(0x4E4F534A,4); // JSON
 const binHeader=Buffer.alloc(8);
 binHeader.writeUInt32LE(binChunk.byteLength,0);
 binHeader.writeUInt32LE(0x004E4942,4); // BIN
 fs.writeFileSync(file,Buffer.concat([header,jsonHeader,jsonChunk,binHeader,binChunk]));
 return total;
}

const pieces={
 'catwalk_straight.glb':buildStraight(),
 'catwalk_cross.glb':buildCross(),
 'catwalk_t.glb':buildT(),
 'catwalk_ladder.glb':buildLadder(),
 'catwalk_rail_broken.glb':buildRailBroken(),
};

for(const [name,boxes] of Object.entries(pieces)){
 const file=path.join(outDir,name);
 const bytes=writeGlb(boxes,file);
 console.log(`wrote ${name} (${bytes} bytes)`);
}

fs.writeFileSync(path.join(outDir,'README.md'),`# Industrial catwalk modules

Authored compact grated decks matching Modular Industrial Catwalk Kit language
(straight / cross / T / ladder / broken rail). Dull Soviet steel — no warehouse orange.

Replace with Unity Asset Store FBX→glTF conversions later if desired; mount names stay stable.

Files:
- \`catwalk_straight.glb\` — 2 m × 1.2 m grated span + side rails
- \`catwalk_cross.glb\` — cross junction
- \`catwalk_t.glb\` — T junction (spur +X)
- \`catwalk_ladder.glb\` — cage ladder (~3.35 m)
- \`catwalk_rail_broken.glb\` — dangling rail for the collapsed span
`);
console.log('done →',outDir);
