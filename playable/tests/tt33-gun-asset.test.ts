import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as THREE from 'three';
import {
 TT33_GLB,TT33_SOURCE,TT33_AUTHOR,TT33_LICENSE,
 TT33_HELD_LENGTH,TT33_PICKUP_LENGTH,TT33_GUARD_LENGTH,TT33_GUARD_POS,
 fitTt33,
} from '../src/gunAsset';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

function glbJson(file:string){
 const buf=fs.readFileSync(file);
 assert.equal(buf.subarray(0,4).toString('utf8'),'glTF');
 const jsonLen=buf.readUInt32LE(12);
 return JSON.parse(buf.subarray(20,20+jsonLen).toString('utf8'));
}

/** Authored stand-in: muzzle at min X, grip toward −Y, thin along Z. */
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

function worldOf(root:THREE.Object3D,name:string){
 root.updateMatrixWorld(true);
 return root.getObjectByName(name)!.getWorldPosition(new THREE.Vector3());
}

test('TT-33 glb is the Sketchfab download and NOTICE credits it',()=>{
 const dir=path.join(root,'public/assets/tt33');
 const glbPath=path.join(dir,'tt33.glb');
 assert.ok(fs.existsSync(glbPath));
 assert.ok(fs.statSync(glbPath).size>1_000_000);
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/stupidmadpolygon/i);
 assert.match(readme,/CC BY 4\.0/);
 assert.match(readme,/0e2876969dff4d0ea86e9dbf3cb0dce9/);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Stupid Mad Polygon/);
 assert.match(notice,/CC BY 4\.0/);
 assert.match(notice,/0e2876969dff4d0ea86e9dbf3cb0dce9/);
 assert.equal(TT33_GLB,'/assets/tt33/tt33.glb');
 assert.equal(TT33_AUTHOR,'Stupid Mad Polygon');
 assert.equal(TT33_LICENSE,'CC BY 4.0');
 assert.match(TT33_SOURCE,/0e2876969dff4d0ea86e9dbf3cb0dce9/);
 const json=glbJson(glbPath);
 let tris=0;
 for(const mesh of json.meshes||[]){
  for(const prim of mesh.primitives||[]){
   tris+=Math.floor(json.accessors[prim.indices].count/3);
  }
 }
 assert.equal(tris,5306);
 const extras=JSON.stringify(json.asset?.extras??{});
 assert.match(extras,/0e2876969dff4d0ea86e9dbf3cb0dce9/);
 assert.match(extras,/CC-BY-4\.0/);
});

test('held fit points the barrel toward −Z at the placeholder length',()=>{
 const fitted=fitTt33(authoredPistol(),'held');
 const muzzle=worldOf(fitted,'muzzle');
 const rear=worldOf(fitted,'rear');
 assert.ok(muzzle.z<rear.z-TT33_HELD_LENGTH*.5,'muzzle is in front of the grip');
 assert.ok(muzzle.y<rear.y+.2);
 const box=new THREE.Box3().setFromObject(fitted);
 const size=box.getSize(new THREE.Vector3());
 assert.ok(Math.abs(size.z-TT33_HELD_LENGTH)<.05);
 assert.equal(fitted.name,'tt33Mesh');
});

test('pickup fit lies along +X and guard fit keeps the old hand anchor',()=>{
 const floor=fitTt33(authoredPistol(),'pickup');
 const muzzle=worldOf(floor,'muzzle');
 const rear=worldOf(floor,'rear');
 assert.ok(muzzle.x>rear.x,'barrel points along +X like the old floor bar');
 const floorBox=new THREE.Box3().setFromObject(floor);
 const floorSize=floorBox.getSize(new THREE.Vector3());
 assert.ok(Math.abs(floorSize.x-TT33_PICKUP_LENGTH)<.05);
 assert.ok(floorSize.y<floorSize.x*.25,'thin axis is vertical');
 assert.ok(floorBox.min.y>=0&&floorBox.min.y<.08);

 const guard=fitTt33(authoredPistol(),'guard');
 const gMuzzle=worldOf(guard,'muzzle');
 const gRear=worldOf(guard,'rear');
 assert.ok(gMuzzle.z<gRear.z,'guard barrel points forward (−Z)');
 const gBox=new THREE.Box3().setFromObject(guard);
 const gSize=gBox.getSize(new THREE.Vector3());
 const gCenter=gBox.getCenter(new THREE.Vector3());
 assert.ok(Math.abs(gSize.z-TT33_GUARD_LENGTH)<.05);
 assert.ok(Math.abs(gCenter.x-TT33_GUARD_POS.x)<.02);
 assert.ok(Math.abs(gCenter.y-TT33_GUARD_POS.y)<.02);
 assert.ok(Math.abs(gCenter.z-TT33_GUARD_POS.z)<.02);
});
