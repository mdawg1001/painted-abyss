import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {
 LIFEBUOY_ASSET_URL,LIFEBUOY_AUTHOR,LIFEBUOY_POS,LIFEBUOY_SOURCE,LIFEBUOY_TARGET_DIAMETER,LIFEBUOY_YAW,
 createLifebuoyStub,createLifebuoyVisual,poseLifebuoyOnFloor,
} from '../src/lifebuoyAsset';
import {FLOOR_Y,isOpen,START} from '../src/simulation';

const root=join(dirname(fileURLToPath(import.meta.url)),'..','public','assets','lifebuoy');

test('Poly Haven lifebuoy glTF pack exists under public/assets/lifebuoy',async()=>{
 assert.equal(LIFEBUOY_ASSET_URL,'/assets/lifebuoy/lifebuoy_1k.gltf');
 const gltfPath=join(root,'lifebuoy_1k.gltf');
 await access(gltfPath);
 const gltf=JSON.parse(await readFile(gltfPath,'utf8'));
 assert.ok(Array.isArray(gltf.buffers)&&gltf.buffers[0]?.uri,'has buffer uri');
 await access(join(root,gltf.buffers[0].uri));
 assert.ok(Array.isArray(gltf.images)&&gltf.images.length>=1,'has textures');
 for(const img of gltf.images){
  assert.ok(img.uri,'image uri');
  await access(join(root,img.uri));
 }
});

test('NOTICE documents the lifebuoy attribution',async()=>{
 const notice=await readFile(join(dirname(fileURLToPath(import.meta.url)),'..','NOTICE.md'),'utf8');
 assert.match(notice,/lifebuoy/i);
 assert.match(notice,/Hank Kaamura/);
 assert.match(notice,/CC0/);
 assert.equal(LIFEBUOY_AUTHOR,'Hank Kaamura');
 assert.equal(LIFEBUOY_SOURCE,'https://polyhaven.com/a/lifebuoy');
});

test('lifebuoy sits on the floor in an open corner near start',()=>{
 assert.equal(LIFEBUOY_POS.y,FLOOR_Y);
 assert.ok(isOpen(LIFEBUOY_POS.x,LIFEBUOY_POS.z),'placement tile is walkable');
 const dx=LIFEBUOY_POS.x-START.x,dz=LIFEBUOY_POS.z-START.z;
 const dist=Math.hypot(dx,dz);
 assert.ok(dist>3&&dist<18,'near start chamber, not on the dive path center');
 assert.ok(Math.abs(LIFEBUOY_POS.x)>6,'offset toward a chamber edge');
 assert.ok(Number.isFinite(LIFEBUOY_YAW));
});

test('poseLifebuoyOnFloor lays the ring flat at life-size diameter',()=>{
 // Stand-in: ring in XY (wall hang), thin in Z — matches Poly Haven orientation.
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(.78,.84,.15));
 const g=new THREE.Group();g.add(mesh);
 poseLifebuoyOnFloor(g,LIFEBUOY_TARGET_DIAMETER);
 g.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(g);
 const size=box.getSize(new THREE.Vector3());
 assert.ok(Math.abs(size.x-LIFEBUOY_TARGET_DIAMETER)<.05||Math.abs(size.z-LIFEBUOY_TARGET_DIAMETER)<.05);
 assert.ok(size.y<.25,'thickness is short axis after laying flat');
 assert.ok(Math.abs(box.min.y)<.02,'sits on local y=0');
});

test('stub lifebuoy visual mounts a floor torus',()=>{
 const stub=createLifebuoyStub();
 assert.equal(stub.name,'lifebuoyStub');
 assert.ok(stub.children.length>=1);
 const visual=createLifebuoyVisual();
 assert.equal(visual.root.name,'lifebuoy');
 assert.equal(visual.ready,false);
 assert.ok(visual.pivot.getObjectByName('lifebuoyStub'));
});
