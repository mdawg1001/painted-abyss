/**
 * Author bunker-fitted service-gallery GLBs (Soviet enamel / dull steel / concrete).
 * Narrow walkways with heavy stringers, kick plates, and wall brackets — not toy pad tiles.
 *
 * Kit language: straight / cross / T / ladder / rail / bracket.
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

/** Bunker kit–aligned colours (linear-ish 0–1 from enamel dark / tray grey / steel). */
const STEEL=[.255,.275,.255];      // ~ENAMEL_DARK 0x353a33
const STEEL_LIGHT=[.49,.502,.475]; // ~TRAY_GREY 0x7d8079
const DECK_DARK=[.16,.17,.16];
const CONCRETE=[.36,.35,.32];
const RUST=[.22,.19,.16];

function box(cx,cy,cz,sx,sy,sz,color=STEEL){
 return{
  min:[cx-sx*.5,cy-sy*.5,cz-sz*.5],
  max:[cx+sx*.5,cy+sy*.5,cz+sz*.5],
  color,
 };
}

/** Heavy plate deck + open grate bars (thicker than the old toy modules). */
function grateDeck(length=2,width=1.35,thick=.09){
 const boxes=[
  // Underside plate (reads as built steel, not floating grate)
  box(0,thick*.35,0,width,thick*.7,length,DECK_DARK),
  // Top wearing surface
  box(0,thick*.85,0,width*.98,thick*.3,length*.98,STEEL),
 ];
 // Cross bars
 const n=Math.max(5,Math.round(length/.26));
 for(let i=0;i<n;i++){
  const z=-length*.5+(i+.5)*(length/n);
  boxes.push(box(0,thick+.015,z,width*.9,.035,.05,STEEL_LIGHT));
 }
 // Longitudinal bars
 const m=Math.max(3,Math.round(width/.28));
 for(let i=0;i<m;i++){
  const x=-width*.5+(i+.5)*(width/m);
  boxes.push(box(x,thick+.02,0,.045,.03,length*.9,STEEL_LIGHT));
 }
 // Side stringers (I-beam-ish)
 for(const side of[-1,1]){
  const x=side*(width*.5+.02);
  boxes.push(box(x,thick*.5,0,.07,thick+.04,length*.98,STEEL));
  boxes.push(box(x,-.08,0,.1,.1,length*.96,STEEL)); // bottom flange
 }
 return boxes;
}

function sideRail(length=2,side=1,width=1.35){
 const x=side*(width*.5-.04);
 const boxes=[];
 const posts=Math.max(3,Math.round(length/.85));
 for(let i=0;i<posts;i++){
  const z=-length*.5+(i+.5)*(length/posts);
  boxes.push(box(x,.55,z,.06,1.1,.06,STEEL));
 }
 // Top rail + mid rail
 boxes.push(box(x,1.08,0,.05,.05,length*.94,STEEL_LIGHT));
 boxes.push(box(x,.62,0,.045,.04,length*.94,STEEL));
 // Kick plate (toe board) — reads industrial / bunker code
 boxes.push(box(x,.12,0,.04,.2,length*.94,STEEL));
 return boxes;
}

/** Short under-deck braces (not full floor columns — walls carry the load via brackets). */
function hangers(length=2,width=1.35){
 const boxes=[];
 for(const z of[-length*.32,length*.32]){
  for(const side of[-1,1]){
   const x=side*(width*.5-.08);
   boxes.push(box(x,-.28,z,.07,.5,.07,STEEL));
   boxes.push(box(x,-.52,z,.14,.06,.14,STEEL));
  }
 }
 return boxes;
}

function buildStraight(){
 const w=1.35,l=2;
 return[...grateDeck(l,w),...sideRail(l,1,w),...sideRail(l,-1,w),...hangers(l,w)];
}

function buildCross(){
 const w=1.35,l=2;
 const a=grateDeck(l,w);
 const spur=grateDeck(l,w).map(b=>{
  const[minx,miny,minz]=b.min,[maxx,maxy,maxz]=b.max;
  return{min:[minz,miny,minx],max:[maxz,maxy,maxx],color:b.color};
 });
 return[...a,...spur,...sideRail(l,1,w),...sideRail(l,-1,w)];
}

function buildT(){
 const w=1.35,l=2;
 const spur=grateDeck(l,w).map(b=>{
  const[minx,miny,minz]=b.min,[maxx,maxy,maxz]=b.max;
  return{min:[minz+.85,miny,minx],max:[maxz+.85,maxy,maxx],color:b.color};
 });
 return[
  ...grateDeck(l,w),
  ...spur,
  ...sideRail(l,-1,w),
  ...hangers(l,w),
 ];
}

function buildLadder(){
 const h=3.35,w=.58;
 const boxes=[
  box(-w*.5,h*.5,0,.07,h,.07,STEEL),
  box(w*.5,h*.5,0,.07,h,.07,STEEL),
  // Side cage straps (reads as bunker cage ladder, not toy)
  box(-w*.5-.04,h*.55,.18,.04,h*.7,.04,STEEL),
  box(w*.5+.04,h*.55,.18,.04,h*.7,.04,STEEL),
 ];
 const rungs=12;
 for(let i=0;i<rungs;i++){
  const y=.25+i*((h-.4)/(rungs-1));
  boxes.push(box(0,y,0,w,.045,.055,STEEL_LIGHT));
 }
 boxes.push(box(0,h-.08,.3,.55,.06,.06,STEEL));
 // Floor shoe plates
 boxes.push(box(-w*.5,.03,0,.14,.06,.14,CONCRETE));
 boxes.push(box(w*.5,.03,0,.14,.06,.14,CONCRETE));
 return boxes;
}

function buildRailBroken(){
 return[
  box(0,.225,0,.06,.5,.06,RUST),
  box(0,.42,.28,.05,.05,.6,RUST),
  box(.05,.14,.75,.06,.06,.48,RUST),
  box(.08,-.06,1.0,.06,.06,.38,RUST),
 ];
}

/**
 * Angle-iron wall bracket: vertical plate into concrete + diagonal brace + deck seat.
 * Origin at deck underside; +Z faces into the room, −Z into the wall.
 */
function buildBracket(){
 const boxes=[
  // Wall plate (concrete-anchored)
  box(0,.15,-.08,.22,.9,.05,CONCRETE),
  box(0,.15,-.04,.16,.75,.04,STEEL),
  // Horizontal seat under deck
  box(0,.02,.35,.18,.07,.7,STEEL),
  // Diagonal brace
  box(0,-.35,.2,.08,.55,.08,STEEL),
  // Anchor bolts (visual nubs)
  box(-.07,.4,-.1,.04,.04,.06,STEEL_LIGHT),
  box(.07,.4,-.1,.04,.04,.06,STEEL_LIGHT),
  box(-.07,-.15,-.1,.04,.04,.06,STEEL_LIGHT),
  box(.07,-.15,-.1,.04,.04,.06,STEEL_LIGHT),
 ];
 return boxes;
}

/** Emit a single-mesh GLB from axis-aligned boxes. */
function writeGlb(boxes,file){
 const positions=[];
 const normals=[];
 const colors=[];
 const indices=[];
 const faces=[
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
  asset:{version:'2.0',generator:'painted-abyss-bunker-gallery'},
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
  materials:[{
   name:'BunkerEnamelSteel',
   pbrMetallicRoughness:{baseColorFactor:[.42,.45,.42,1],metallicFactor:.5,roughnessFactor:.78},
   doubleSided:false,
  }],
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
 header.writeUInt32LE(0x46546C67,0);
 header.writeUInt32LE(2,4);
 header.writeUInt32LE(total,8);
 const jsonHeader=Buffer.alloc(8);
 jsonHeader.writeUInt32LE(jsonChunk.byteLength,0);
 jsonHeader.writeUInt32LE(0x4E4F534A,4);
 const binHeader=Buffer.alloc(8);
 binHeader.writeUInt32LE(binChunk.byteLength,0);
 binHeader.writeUInt32LE(0x004E4942,4);
 fs.writeFileSync(file,Buffer.concat([header,jsonHeader,jsonChunk,binHeader,binChunk]));
 return total;
}

const pieces={
 'catwalk_straight.glb':buildStraight(),
 'catwalk_cross.glb':buildCross(),
 'catwalk_t.glb':buildT(),
 'catwalk_ladder.glb':buildLadder(),
 'catwalk_rail_broken.glb':buildRailBroken(),
 'catwalk_bracket.glb':buildBracket(),
};

for(const [name,boxes] of Object.entries(pieces)){
 const file=path.join(outDir,name);
 const bytes=writeGlb(boxes,file);
 console.log(`wrote ${name} (${bytes} bytes)`);
}

// Remove map-scale pad tile — no longer used.
const pad=path.join(outDir,'catwalk_pad.glb');
if(fs.existsSync(pad)){
 fs.unlinkSync(pad);
 console.log('removed catwalk_pad.glb');
}

fs.writeFileSync(path.join(outDir,'README.md'),`# Bunker service-gallery modules

Authored narrow grated walks with heavy stringers, kick plates, hangers, and wall
brackets. Colours match bunker enamel dark / tray grey / concrete — not warehouse
orange or sci-fi pad tiles.

Sparse placements only (west-hall wall L, neck west shelf, hall pit north lip).

Files:
- \`catwalk_straight.glb\` — 2 m × 1.35 m grated span + rails + hangers
- \`catwalk_cross.glb\` — cross junction
- \`catwalk_t.glb\` — T junction (spur +X)
- \`catwalk_ladder.glb\` — cage ladder (~3.35 m) with floor shoes
- \`catwalk_rail_broken.glb\` — dangling rail for collapsed bays
- \`catwalk_bracket.glb\` — angle-iron wall bracket into concrete
`);
console.log('done →',outDir);
