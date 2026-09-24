import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {
 COPPER_PIPE_URL,COPPER_SOURCE,COPPER_AUTHOR,COPPER_LICENSE,
 COPPER_LENGTH_M,COPPER_WALL_CLEARANCE,COPPER_BOTTOM_Y,COPPER_MOUNT,
 fitCopperPipe,
} from '../src/copperPipeAsset';
import {
 cells,world,breathZone,breathHatchSpawn,breathTankMounts,tile,
 GUARD_WALL_CLEARANCE,GUARD_BODY_RADIUS,
} from '../src/simulation';

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

test('fitted section is a human pipe on the east corridor wall, off the hatch and the guard lane',()=>{
 // World AABB of copper_pipe.glb after the Sketchfab node transforms (before our scale).
 const authored={x:11.338,y:11.924,z:48.792};
 const fitted=fitCopperPipe(authoredSection(authored),COPPER_MOUNT);
 fitted.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(fitted);
 const size=box.getSize(new THREE.Vector3());
 assert.ok(Math.abs(size.z-COPPER_LENGTH_M)<.02,`length ${size.z}`);
 assert.ok(size.y>.3&&size.y<1.2,`height ${size.y} is a pipe section, not a room`);
 assert.ok(size.x>.15&&size.x<.5,`depth ${size.x} stays on the wall`);
 // Rear face (max X) is the clearance off the east wall plane.
 assert.ok(Math.abs(box.max.x-(COPPER_MOUNT.x-COPPER_WALL_CLEARANCE))<.02,`rear ${box.max.x}`);
 assert.ok(Math.abs(box.min.y-COPPER_BOTTOM_Y)<.02);
 assert.ok(Math.abs((box.min.z+box.max.z)*.5-COPPER_MOUNT.z)<.02);
 // Into the room, but short of the guard's body on the 1.3 m patrol line.
 const intoRoom=COPPER_MOUNT.x-box.min.x;
 assert.ok(intoRoom<GUARD_WALL_CLEARANCE-GUARD_BODY_RADIUS,`reach ${intoRoom} blocks the guard`);
 // Centre of the corridor is x = -2. The pipe stays on the east side.
 assert.ok(box.min.x>-1,'pipe stays off the guard centerline');

 // Mount is the east inner face of an open breath cell, not hatch or far end.
 let onWall=false;
 for(const key of cells){
  const [c,r]=key.split(',').map(Number);
  if(breathZone(c,r)==='')continue;
  const p=world(c,r);
  for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]] as const){
   if(cells.has(`${c+dc},${r+dr}`))continue;
   const nx=-dc,nz=dr;
   const x=p.x+dc*2.5+nx*.5,z=p.z-dr*2.5+nz*.5;
   if(Math.hypot(x-COPPER_MOUNT.x,z-COPPER_MOUNT.z)<.05)onWall=true;
  }
 }
 assert.ok(onWall,'mount sits on a breath-corridor wall face');
 const at=tile({x:COPPER_MOUNT.x-.4,y:0,z:COPPER_MOUNT.z});
 assert.equal(breathZone(at.col,at.row),'middle');
 const hatch=breathHatchSpawn();
 assert.ok(Math.abs(COPPER_MOUNT.z-hatch.z)-COPPER_LENGTH_M/2>8,'clear of the hatch');
 for(const tank of breathTankMounts()){
  const along=Math.abs(tank.z-COPPER_MOUNT.z);
  const sameWall=Math.abs(tank.x-COPPER_MOUNT.x)<1.2;
  if(sameWall)assert.ok(along>COPPER_LENGTH_M/2+.6,`tank at z=${tank.z} overlaps the pipe`);
 }
});
