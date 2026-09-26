import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {
 RETRO_GUN_GLB,RETRO_GUN_SOURCE,RETRO_GUN_AUTHOR,RETRO_GUN_LICENSE,RETRO_GUN_TRIANGLES,
 TT33_HELD_LENGTH,TT33_PICKUP_LENGTH,
 fitRetroGun,
} from '../src/gunAsset';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

function glbJson(file:string){
 const buf=fs.readFileSync(file);
 assert.equal(buf.subarray(0,4).toString('utf8'),'glTF');
 const jsonLen=buf.readUInt32LE(12);
 return JSON.parse(buf.subarray(20,20+jsonLen).toString('utf8'));
}

/** Stand-in: muzzle at min X, grip toward −Y, thin along Z. */
function authoredPistol(){
 const model=new THREE.Group();
 const body=new THREE.Mesh(new THREE.BoxGeometry(1,.5,.1));
 body.position.set(.5,-.25,0);
 const muzzle=new THREE.Mesh(new THREE.BoxGeometry(.02,.02,.02));
 muzzle.name='muzzle';
 muzzle.position.set(0,-.25,0);
 const rear=new THREE.Mesh(new THREE.BoxGeometry(.02,.02,.02));
 rear.name='rear';
 rear.position.set(1,-.25,0);
 model.add(body,muzzle,rear);
 return model;
}

function worldOf(rootObj:THREE.Object3D,name:string){
 rootObj.updateMatrixWorld(true);
 return rootObj.getObjectByName(name)!.getWorldPosition(new THREE.Vector3());
}

test('retro gun glb is the official Sketchfab mesh and NOTICE credits PolyCube',()=>{
 const dir=path.join(root,'public/assets/retro-gun');
 const glbPath=path.join(dir,'retro_gun.glb');
 assert.ok(fs.existsSync(glbPath));
 assert.ok(fs.statSync(glbPath).size>100_000);
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/ItsPolyCube/i);
 assert.match(readme,/Free Standard/);
 assert.match(readme,/ff244414e90c43fa9bd1bc4c4ca7c0bb/);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/PolyCube/);
 assert.match(notice,/Free Standard/);
 assert.match(notice,/ff244414e90c43fa9bd1bc4c4ca7c0bb/);
 assert.equal(RETRO_GUN_GLB,'/assets/retro-gun/retro_gun.glb');
 assert.equal(RETRO_GUN_AUTHOR,'PolyCube');
 assert.equal(RETRO_GUN_LICENSE,'Free Standard');
 assert.match(RETRO_GUN_SOURCE,/ff244414e90c43fa9bd1bc4c4ca7c0bb/);
 const json=glbJson(glbPath);
 let tris=0;
 for(const mesh of json.meshes||[]){
  for(const prim of mesh.primitives||[]){
   tris+=Math.floor(json.accessors[prim.indices].count/3);
  }
 }
 assert.equal(tris,RETRO_GUN_TRIANGLES);
 const extras=JSON.stringify(json.asset?.extras??{});
 assert.match(extras,/ff244414e90c43fa9bd1bc4c4ca7c0bb/);
 assert.match(extras,/Free Standard/);
 assert.ok((json.images||[]).length>=1,'albedo texture is packed');
 assert.ok((json.materials||[]).some((m:any)=>m?.pbrMetallicRoughness?.baseColorTexture));
});

test('held fit points the barrel toward −Z at the placeholder length',()=>{
 const fitted=fitRetroGun(authoredPistol(),'held');
 const muzzle=worldOf(fitted,'muzzle');
 const rear=worldOf(fitted,'rear');
 assert.ok(muzzle.z<rear.z-TT33_HELD_LENGTH*.5,'muzzle is in front of the grip');
 assert.ok(muzzle.y<rear.y+.2);
 const box=new THREE.Box3().setFromObject(fitted);
 const size=box.getSize(new THREE.Vector3());
 assert.ok(Math.abs(size.z-TT33_HELD_LENGTH)<.05);
 assert.equal(fitted.name,'retroGunMesh');
});

test('pickup fit lies along +X',()=>{
 const floor=fitRetroGun(authoredPistol(),'pickup');
 const muzzle=worldOf(floor,'muzzle');
 const rear=worldOf(floor,'rear');
 assert.ok(muzzle.x>rear.x,'barrel points along +X like the old floor bar');
 const floorBox=new THREE.Box3().setFromObject(floor);
 const floorSize=floorBox.getSize(new THREE.Vector3());
 assert.ok(Math.abs(floorSize.x-TT33_PICKUP_LENGTH)<.05);
 assert.ok(floorSize.y<floorSize.x*.25,'thin axis is vertical');
 assert.ok(floorBox.min.y>=0&&floorBox.min.y<.08);
});
