import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {
 RADIATOR_URL,RADIATOR_SOURCE,RADIATOR_AUTHOR,RADIATOR_AUTHOR_URL,RADIATOR_LICENSE,
 RADIATOR_TARGET_HEIGHT,RADIATOR_COUNT,RADIATOR_WALL_CLEARANCE,RADIATOR_STASH_CLEAR,RADIATOR_HATCH_CLEAR,
 radiatorMounts,createWallRadiators,fitRadiator,buildRadiatorStub,
} from '../src/radiatorAsset';
import {FLOOR_Y,STASH_POSITION,breathHatchSpawn,GUARD_WALL_CLEARANCE} from '../src/simulation';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const GLB_SHA='c5c6e1f2ead8a724069254cfb20c984fe277f7d2bcb9ffefe7491d210a4ce2cd';

function glbJson(file:string){
 const buf=fs.readFileSync(file);
 assert.equal(buf.subarray(0,4).toString('utf8'),'glTF');
 const jsonLen=buf.readUInt32LE(12);
 return JSON.parse(buf.subarray(20,20+jsonLen).toString('utf8'));
}

test('vintage radiator glb is the Sketchfab download and NOTICE credits it',()=>{
 const dir=path.join(root,'public/assets/vintage-radiator');
 const glbPath=path.join(dir,'vintage_radiator.glb');
 assert.ok(fs.existsSync(glbPath));
 const sha=createHash('sha256').update(fs.readFileSync(glbPath)).digest('hex');
 assert.equal(sha,GLB_SHA,'official Sketchfab glb unchanged');
 const extras=glbJson(glbPath).asset?.extras??{};
 assert.match(String(extras.license||''),/CC-BY-4\.0/i);
 assert.match(String(extras.author||''),/azripxd|Ati/i);
 assert.match(String(extras.source||''),/7d4d8077bc524dbeb11a28ca09badf57/);
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/Ati|azripxd/i);
 assert.match(readme,/CC BY/i);
 assert.match(readme,/7d4d8077bc524dbeb11a28ca09badf57/);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Vintage Cast Iron Radiator/);
 assert.match(notice,/azripxd/);
 assert.match(notice,/CC BY 4\.0/);
 assert.match(notice,/7d4d8077bc524dbeb11a28ca09badf57/);
 assert.equal(RADIATOR_URL,'/assets/vintage-radiator/vintage_radiator.glb');
 assert.equal(RADIATOR_AUTHOR,'Ati');
 assert.equal(RADIATOR_AUTHOR_URL,'https://sketchfab.com/azripxd');
 assert.match(RADIATOR_LICENSE,/CC BY/);
 assert.match(RADIATOR_SOURCE,/7d4d8077bc524dbeb11a28ca09badf57/);
});

test('exactly four radiators on corridor and lab walls, clear of stash and hatch',()=>{
 const mounts=radiatorMounts();
 assert.equal(mounts.length,RADIATOR_COUNT);
 assert.equal(RADIATOR_COUNT,4);
 const labels=new Set(mounts.map(m=>m.label));
 assert.deepEqual([...labels].sort(),['breath-east','breath-west','lab-east','lab-west']);
 const spawn=breathHatchSpawn();
 for(const m of mounts){
  assert.ok(Math.hypot(m.x-STASH_POSITION.x,m.z-STASH_POSITION.z)>=RADIATOR_STASH_CLEAR,
   `${m.label} too close to stash`);
  assert.ok(Math.hypot(m.x-spawn.x,m.z-spawn.z)>=RADIATOR_HATCH_CLEAR,
   `${m.label} too close to hatch`);
  assert.ok(m.yawJitter!==0||(m.along??0)!==0,`${m.label} needs offset or yaw jitter`);
 }
 const yaws=new Set(mounts.map(m=>Math.round(m.yaw*1000)));
 assert.ok(yaws.size>=2,'multiple wall orientations');
});

test('fitted radiator is room-scale, flush, and inside guard clearance',()=>{
 // Authored AABB matches the official glb (~2×2×0.63).
 const geo=new THREE.BoxGeometry(2.003,2.002,.631);
 const mesh=new THREE.Mesh(geo);
 mesh.position.set(0,0,0);
 const mount=radiatorMounts()[0];
 const pivot=fitRadiator(mesh,mount);
 const box=new THREE.Box3().setFromObject(pivot);
 const size=box.getSize(new THREE.Vector3());
 assert.ok(Math.abs(size.y-RADIATOR_TARGET_HEIGHT)<.02,`height ${size.y}`);
 assert.ok(size.y>=1.2&&size.y<=1.5,'waist-to-chest / window-sill cast-iron height');
 assert.equal(RADIATOR_TARGET_HEIGHT,1.35);
 assert.ok(Math.abs(box.min.y-FLOOR_Y)<.02,`feet on floor ${box.min.y}`);
 const inward=new THREE.Vector3(Math.sin(mount.yaw+(mount.yawJitter??0)),0,Math.cos(mount.yaw+(mount.yawJitter??0)));
 const rear=new THREE.Vector3(mount.x,FLOOR_Y,mount.z).addScaledVector(inward,RADIATOR_WALL_CLEARANCE);
 const corners=[
  new THREE.Vector3(box.min.x,box.min.y,box.min.z),
  new THREE.Vector3(box.max.x,box.min.y,box.min.z),
  new THREE.Vector3(box.min.x,box.min.y,box.max.z),
  new THREE.Vector3(box.max.x,box.min.y,box.max.z),
 ];
 const wallPoint=new THREE.Vector3(mount.x,FLOOR_Y,mount.z);
 const depths=corners.map(c=>c.clone().sub(wallPoint).dot(inward));
 const minDepth=Math.min(...depths);
 const maxDepth=Math.max(...depths);
 assert.ok(Math.abs(minDepth-RADIATOR_WALL_CLEARANCE)<.05,`rear depth ${minDepth}`);
 assert.ok(maxDepth<GUARD_WALL_CLEARANCE-.4,`front ${maxDepth} leaves guard path`);
 assert.ok(rear.distanceTo(wallPoint)<.3);
});

test('stub cluster mounts until glTF upgrades',()=>{
 const visual=createWallRadiators();
 assert.equal(visual.ready,false);
 assert.equal(visual.group.children.length,visual.mounts.length);
 for(const child of visual.group.children){
  assert.equal(child.name,'radiatorStub');
  assert.ok(child.children.length>=3);
 }
 const stub=buildRadiatorStub(visual.mounts[0]);
 assert.equal(stub.name,'radiatorStub');
});
