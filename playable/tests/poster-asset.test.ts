import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 POSTER_AUTHOR,POSTER_LICENSE,POSTER_MOUNT_Y,POSTER_SOURCE,POSTER_STAND_OFF,
 POSTER_TARGET_HEIGHT,POSTER_TEX_LITERACY,POSTER_TEX_SILENCE,
 buildPosterStub,createWallPosters,wallPosterMount,
} from '../src/posterAsset';
import * as THREE from 'three';
import {wallSconceMounts} from '../src/sconceAsset';
import {cells,world} from '../src/simulation';

const root=join(dirname(fileURLToPath(import.meta.url)),'..','public','assets','soviet-poster');

test('PotatoWit poster albedo PNGs ship under public/assets/soviet-poster',async()=>{
 assert.equal(POSTER_TEX_LITERACY,'/assets/soviet-poster/textures/poster_literacy_albedo.png');
 assert.equal(POSTER_TEX_SILENCE,'/assets/soviet-poster/textures/poster_silence_albedo.png');
 await access(join(root,'textures','poster_literacy_albedo.png'));
 await access(join(root,'textures','poster_silence_albedo.png'));
 await access(join(root,'README.md'));
});

test('NOTICE documents PotatoWit CC BY attribution',async()=>{
 const notice=await readFile(join(dirname(fileURLToPath(import.meta.url)),'..','NOTICE.md'),'utf8');
 assert.match(notice,/Poster from Soviet Union/i);
 assert.match(notice,/PotatoWit/);
 assert.match(notice,/CC BY 4\.0/);
 assert.match(notice,/49a80251d7e543289b1deb656b15017a/);
 assert.equal(POSTER_AUTHOR,'PotatoWit');
 assert.equal(POSTER_LICENSE,'CC BY 4.0');
 assert.equal(POSTER_SOURCE,'https://sketchfab.com/3d-models/poster-from-soviet-union-49a80251d7e543289b1deb656b15017a');
});

test('wallPosterMount sits on a solid wall face away from sconces',()=>{
 const mount=wallPosterMount();
 assert.ok(Number.isFinite(mount.x)&&Number.isFinite(mount.z)&&Number.isFinite(mount.yaw));
 // Must lie near some solid exterior face of an open cell.
 let nearWall=false;
 for(const key of cells){
  const [c,r]=key.split(',').map(Number),p=world(c,r);
  for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){
   if(cells.has(`${c+dc},${r+dr}`))continue;
   const nx=-dc,nz=dr,x=p.x+dc*2.5+nx*.5,z=p.z-dr*2.5+nz*.5;
   if(Math.hypot(x-mount.x,z-mount.z)<.05){nearWall=true;break;}
  }
  if(nearWall)break;
 }
 assert.ok(nearWall,'mount matches a cave wall face');
 const sconces=wallSconceMounts();
 assert.ok(sconces.every(s=>Math.hypot(s.x-mount.x,s.z-mount.z)>3.5)||sconces.length===0,
  'clear of sconce centres when sconces exist');
 assert.ok(POSTER_MOUNT_Y>2&&POSTER_MOUNT_Y<5);
 assert.ok(POSTER_TARGET_HEIGHT>1&&POSTER_TARGET_HEIGHT<2.5);
 // Wall-detail icosahedrons bulge ~0.35 m into the room — stand-off must clear them.
 assert.ok(POSTER_STAND_OFF>=.5,'stand-off clears cave rock blobs');
});

test('stub and createWallPosters expose two sheets',()=>{
 const mount=wallPosterMount();
 const stub=buildPosterStub(mount);
 assert.equal(stub.name,'sovietPostersStub');
 assert.equal(stub.children.length,2);
 const visual=createWallPosters(mount);
 assert.equal(visual.group.name,'sovietPosters');
 assert.equal(visual.ready,false);
 assert.equal(visual.group.children.length,1);
 assert.ok(visual.group.getObjectByName('sovietPostersStub'));
});

test('poster sheets sit POSTER_STAND_OFF into the room from the wall face',()=>{
 const mount=wallPosterMount();
 const stub=buildPosterStub(mount);
 const inward=new THREE.Vector3(Math.sin(mount.yaw),0,Math.cos(mount.yaw));
 for(const child of stub.children){
  assert.ok(child instanceof THREE.Mesh);
  const delta=new THREE.Vector3(child.position.x-mount.x,0,child.position.z-mount.z);
  const along=delta.dot(inward);
  assert.ok(Math.abs(along-POSTER_STAND_OFF)<.001,`sheet stand-off ${along}`);
 }
});
