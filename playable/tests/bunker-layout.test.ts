import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {BUNKER,FINISH,STENCILS,SWIM_CEILING,buildBunkerLayout,wallEdges,type Placement} from '../src/bunkerLayout';
import {parseBunkerKit,sheetOf} from '../src/bunkerKit';
import {cells,world,CELL,FLOOR_Y,SURFACE_Y,fits} from '../src/simulation';

const buf=readFileSync(new URL('../public/assets/soviet-bunker-kit/kit.bin',import.meta.url));
const kit=parseBunkerKit(buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength));
const layout=buildBunkerLayout();
const open=(c:number,r:number)=>cells.has(`${c},${r}`);

test('kit binary: every placed piece exists and every slot maps to a sheet',()=>{
 for(const p of layout.placements){
  if(p.kind!=='kit')continue;
  const piece=kit.get(p.piece);
  assert.ok(piece,`missing kit piece ${p.piece}`);
  for(const prim of piece!.prims){
   assert.ok(['T1','T2','T3','none'].includes(sheetOf(prim.slot)));
   assert.equal(prim.pos.length/3,prim.nor.length/3);
   for(const i of prim.idx)assert.ok(i<prim.pos.length/3,`${p.piece} index out of range`);
  }
 }
 assert.ok(!kit.has('Alien_Cyclop'),'no aliens ship');
 for(const piece of kit.values())for(const prim of piece.prims)assert.ok(!/Decal|M_Light|M_Glass/.test(prim.slot),'sci-fi decals, lights and glass are dropped');
});

test('one wall stack on every open-to-solid edge, none between open cells',()=>{
 const edges=wallEdges(cells);
 let expected=0;
 for(const k of cells){const [c,r]=k.split(',').map(Number);for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]])if(!open(c+dc,r+dr))expected++;}
 assert.equal(edges.length,expected);
 const walls=layout.placements.filter(p=>p.kind==='kit'&&p.piece==='WallAstra_Straight_Flat') as Extract<Placement,{kind:'kit'}>[];
 assert.equal(walls.length,expected);
 for(const w of walls){
  // The kit wall sits on the tile's −x edge: rotate local (−2,0) into world and it must land on a solid neighbour's boundary.
  const wx=w.x-Math.cos(w.yaw)*CELL/2,wz=w.z+Math.sin(w.yaw)*CELL/2;
  const inside={c:Math.round((wx+Math.cos(w.yaw)*.1)/CELL)+11,r:Math.round(-(wz-Math.sin(w.yaw)*.1)/CELL)};
  const beyond={c:Math.round((wx-Math.cos(w.yaw)*.1)/CELL)+11,r:Math.round(-(wz+Math.sin(w.yaw)*.1)/CELL)};
  assert.ok(open(inside.c,inside.r),'wall faces into an open cell');
  assert.ok(!open(beyond.c,beyond.r),'wall backs onto solid rock');
 }
});

test('every cell has a floor; every cell but the exit shaft has a ceiling plate',()=>{
 const floors=layout.placements.filter(p=>p.kind==='kit'&&!p.flip&&p.piece.startsWith('Platform_')&&p.y===FLOOR_Y);
 const roofs=layout.placements.filter(p=>p.kind==='kit'&&p.flip);
 assert.equal(floors.length,cells.size);
 assert.equal(roofs.length,cells.size-1);
});

test('anything spanning a room keeps its underside above the highest swimming eye',()=>{
 assert.ok(SWIM_CEILING>SURFACE_Y);
 for(const p of layout.placements){
  if(p.kind!=='box'||p.sx<CELL&&p.sz<CELL)continue;
  assert.ok(p.y-p.sy/2>=SWIM_CEILING,`beam underside ${(p.y-p.sy/2).toFixed(2)} below ${SWIM_CEILING}`);
 }
});

/** World-space footprint (xz AABB) and height span of a placement, or null for decals and slabs. */
function volume(p:Placement):{x0:number;x1:number;z0:number;z1:number;y0:number;y1:number;round?:{x:number;z:number;r:number}}|null{
 if(p.kind==='decal')return null;
 if(p.kind==='box'){const c=Math.abs(Math.cos(p.yaw)),s=Math.abs(Math.sin(p.yaw));const hx=(p.sx*c+p.sz*s)/2,hz=(p.sx*s+p.sz*c)/2;return {x0:p.x-hx,x1:p.x+hx,z0:p.z-hz,z1:p.z+hz,y0:p.y-p.sy/2,y1:p.y+p.sy/2};}
 if(p.kind==='cyl')return {x0:Math.min(p.a[0],p.b[0])-p.radius,x1:Math.max(p.a[0],p.b[0])+p.radius,z0:Math.min(p.a[2],p.b[2])-p.radius,z1:Math.max(p.a[2],p.b[2])+p.radius,y0:Math.min(p.a[1],p.b[1])-p.radius,y1:Math.max(p.a[1],p.b[1])+p.radius};
 if(p.kind==='ball')return {x0:p.x-p.radius,x1:p.x+p.radius,z0:p.z-p.radius,z1:p.z+p.radius,y0:p.y-p.radius,y1:p.y+p.radius};
 if(p.kind==='torus'){const hx=Math.abs(p.nz)*p.radius+p.tube,hz=Math.abs(p.nx)*p.radius+p.tube;return {x0:p.x-hx,x1:p.x+hx,z0:p.z-hz,z1:p.z+hz,y0:p.y-p.radius-p.tube,y1:p.y+p.radius+p.tube};}
 const k=kit.get(p.piece)!;
 if(p.flip||(k.max[1]-k.min[1])<.05)return null; // floor and ceiling plates
 const quarter=Math.abs(Math.sin(2*p.yaw))<1e-6;
 let hx:number,hz:number,cx=0,cz=0;
 if(quarter){
  const c=Math.round(Math.cos(p.yaw)),s=Math.round(Math.sin(p.yaw));
  const xs=[k.min[0],k.max[0]],zs=[k.min[2],k.max[2]];
  const px:number[]=[],pz:number[]=[];
  for(const x of xs)for(const z of zs){px.push(x*c+z*s);pz.push(-x*s+z*c);}
  return {x0:p.x+Math.min(...px),x1:p.x+Math.max(...px),z0:p.z+Math.min(...pz),z1:p.z+Math.max(...pz),y0:p.y+k.min[1],y1:p.y+k.max[1]};
 }
 // Turned to any angle: a round prop, tested as its bounding circle.
 hx=hz=Math.max(Math.abs(k.min[0]),Math.abs(k.max[0]),Math.abs(k.min[2]),Math.abs(k.max[2]));
 return {x0:p.x+cx-hx,x1:p.x+cx+hx,z0:p.z+cz-hz,z1:p.z+cz+hz,y0:p.y+k.min[1],y1:p.y+k.max[1],round:{x:p.x,z:p.z,r:hx}};
}

test('the diver\'s eye can never end up inside the dressing',()=>{
 // Every centre the collision model accepts, on a 10 cm grid, at every eye height from a slide to the surface.
 const eyeLow=FLOOR_Y+.5,eyeHigh=SURFACE_Y+.05;
 const vols=layout.placements.map(volume).filter(v=>v&&v.y1>eyeLow&&v.y0<eyeHigh) as NonNullable<ReturnType<typeof volume>>[];
 // Bucket volumes by the 1 m squares they touch so each sample only meets its neighbours.
 const grid=new Map<string,typeof vols>();
 for(const v of vols)for(let gx=Math.floor(v.x0);gx<=Math.floor(v.x1);gx++)for(let gz=Math.floor(v.z0);gz<=Math.floor(v.z1);gz++){const key=gx+','+gz;const l=grid.get(key);if(l)l.push(v);else grid.set(key,[v]);}
 let checked=0;
 for(const k of cells){
  const [c,r]=k.split(',').map(Number),p=world(c,r);
  for(let x=p.x-CELL/2;x<=p.x+CELL/2;x+=.1)for(let z=p.z-CELL/2;z<=p.z+CELL/2;z+=.1){
   if(!fits({x,y:3,z}))continue;
   checked++;
   for(const v of grid.get(Math.floor(x)+','+Math.floor(z))??[])assert.ok(v.round?Math.hypot(x-v.round.x,z-v.round.z)>v.round.r+.01:!(x>v.x0+.02&&x<v.x1-.02&&z>v.z0+.02&&z<v.z1-.02),`eye at (${x.toFixed(2)}, ${z.toFixed(2)}) inside dressing [${v.x0.toFixed(2)}..${v.x1.toFixed(2)}]x[${v.z0.toFixed(2)}..${v.z1.toFixed(2)}] y ${v.y0.toFixed(2)}..${v.y1.toFixed(2)}`);
  }
 }
 assert.ok(checked>10000);
});

test('pipes run continuously: every turn gets a fitting',()=>{
 const edges=wallEdges(cells);
 const turns=edges.reduce((n,e)=>n+(e.endPlus!=='straight'?1:0)+(e.endMinus!=='straight'?1:0),0);
 const balls=layout.placements.filter(p=>p.kind==='ball'&&p.radius>.07&&p.radius<.13).length;
 assert.equal(balls,turns*BUNKER.pipes.length);
 const pipes=layout.placements.filter(p=>p.kind==='cyl'&&p.radius>=.06);
 assert.equal(pipes.length,edges.length*BUNKER.pipes.length);
});

test('dressing stays clear of wall props and loot',()=>{
 const keepouts=[{x:-14,z:-12,r:1.3},{x:14,z:-16,r:1.3}];
 const l=buildBunkerLayout({keepouts});
 for(const p of l.placements){
  if(p.kind!=='box'||p.sy<BUNKER.height-1||p.sx>1&&p.sz>1)continue; // pilasters
  for(const k of keepouts)assert.ok(Math.hypot(p.x-k.x,p.z-k.z)>=k.r,'pilaster in a keepout');
 }
});

test('every stencil is painted: fixed marks or a generated label',()=>{
 const fixed=new Set<string>(STENCILS);
 for(const p of layout.placements)if(p.kind==='decal')assert.ok(fixed.has(p.id)||layout.labels.has(p.id),`unpainted decal ${p.id}`);
 const ids=new Set(layout.placements.filter(p=>p.kind==='decal').map(p=>(p as {id:string}).id));
 for(const zone of ['corridor','entrance','neck','hall','fissure','pool','back'])assert.ok(ids.has(`zone:${zone}`),`no compartment label in ${zone}`);
 assert.ok(ids.has('shelter')&&ids.has('gauge'));
});

test('the hatch is a hermetic door on the corridor\'s south wall',()=>{
 const hatch=layout.doors[0];
 assert.equal(hatch.nz,-1);
 assert.ok(layout.doors.length>=3,'sealed doors dress the other compartments');
 assert.ok(layout.placements.some(p=>p.kind==='kit'&&p.piece==='Door_Frame_Square'&&Math.abs(p.z-hatch.z)<1e-6));
});

test('finishes are the shader\'s known set',()=>{
 const known=new Set<number>(Object.values(FINISH));
 for(const p of layout.placements){
  if(p.kind==='decal')continue;
  if(p.kind==='kit'){for(const prim of kit.get(p.piece)!.prims){const s=p.slots[prim.slot];if(s)assert.ok(known.has(s.finish));}}
  else assert.ok(known.has(p.surf.finish));
 }
});

test('exit arrows point the way out along their wall',()=>{
 const way:Record<string,[number,number]>={hall:[32,-44],fissure:[32,-16],pool:[32,-12]};
 const arrows=layout.placements.filter(p=>p.kind==='decal'&&(p.id==='exitL'||p.id==='exitR')) as Extract<Placement,{kind:'decal'}>[];
 assert.ok(arrows.length>=4);
 for(const a of arrows){
  const zone=a.c===19&&a.r<=10?'fissure':a.c>=17&&a.r<=4?'pool':'hall';
  const [wx,wz]=way[zone];
  const right=a.nz*(wx-a.x)-a.nx*(wz-a.z);
  assert.equal(a.id,right>0?'exitR':'exitL',`arrow at (${a.x.toFixed(1)}, ${a.z.toFixed(1)})`);
 }
});
