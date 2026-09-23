import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
 KNIFE_HOLD_SCALE,KNIFE_HOLD_POS,KNIFE_HOLD_ROT,HELD_VIEW_POS,HELD_VIEW_ROT,KNIFE_STAB_Z,KNIFE_THUMB_URL,KNIFE_ASSET_URL,
 createKnifeStub,poseKnife,alignKnifeBladeForward,prepareKnifeMaterials,knifeMeshReady,
} from '../src/knifeAsset.ts';
import {readFileSync,statSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const knifeDir=path.join(path.dirname(fileURLToPath(import.meta.url)),'../public/assets/knife');

test('knife hold pose thrusts farther than rest along −Z',()=>{
 assert.ok(KNIFE_STAB_Z<KNIFE_HOLD_POS.z);
 assert.ok(KNIFE_HOLD_SCALE>=1.4);
});

test('knife public assets exist (glTF + square HUD thumb)',()=>{
 assert.equal(KNIFE_ASSET_URL,'/assets/knife/fish_knife_1k.gltf');
 assert.equal(KNIFE_THUMB_URL,'/assets/knife/thumb.png');
 for(const f of ['fish_knife_1k.gltf','fish_knife.bin','thumb.png','textures/fish_knife_diff_1k.jpg','textures/fish_knife_arm_1k.jpg','textures/fish_knife_nor_gl_1k.jpg']){
  assert.ok(statSync(path.join(knifeDir,f)).isFile(),f);
 }
 const png=readFileSync(path.join(knifeDir,'thumb.png'));
 assert.equal(png[0],0x89);
 const w=png.readUInt32BE(16),h=png.readUInt32BE(20);
 assert.equal(w,h);
 assert.ok(w>=64);
});

test('stub knife is the blade only, parked in the lower-right',()=>{
 const g=createKnifeStub();
 assert.equal(g.name,'knifeVisual');
 assert.equal(knifeMeshReady(g),true);
 assert.equal(g.getObjectByName('knifeFill'),undefined);
 assert.equal(g.getObjectByName('knifeHand'),undefined);
 assert.ok(g.getObjectByName('knifeGrip'));
 assert.ok(g.getObjectByName('knifeMesh'));
 poseKnife(g);
 assert.equal(g.scale.x,KNIFE_HOLD_SCALE);
 assert.equal(g.position.x,KNIFE_HOLD_POS.x);
 assert.deepEqual(KNIFE_HOLD_POS,HELD_VIEW_POS);
 assert.deepEqual(KNIFE_HOLD_ROT,HELD_VIEW_ROT);
 assert.equal(KNIFE_HOLD_POS.x,.44);
 assert.equal(KNIFE_HOLD_POS.y,-.4);
 assert.equal(KNIFE_HOLD_POS.z,-.62);
});

test('knife rest pose matches the torch slot on screen',()=>{
 const cam=new THREE.PerspectiveCamera(64,16/9,.12,130);
 const project=(pos:{x:number;y:number;z:number},rot:{x:number;y:number;z:number},scale:number,local:THREE.Vector3)=>{
  const g=new THREE.Group();
  g.position.set(pos.x,pos.y,pos.z);
  g.rotation.set(rot.x,rot.y,rot.z);
  g.scale.setScalar(scale);
  g.updateMatrixWorld(true);
  return local.clone().applyMatrix4(g.matrixWorld).project(cam);
 };
 const torchCenter=project(HELD_VIEW_POS,HELD_VIEW_ROT,1.15,new THREE.Vector3(0,0,-.11));
 const knifeMid=project(KNIFE_HOLD_POS,KNIFE_HOLD_ROT,KNIFE_HOLD_SCALE,new THREE.Vector3(0,0,-.048));
 assert.ok(Math.abs(knifeMid.x-torchCenter.x)<.08,'knife shares the torch x');
 assert.ok(Math.abs(knifeMid.y-torchCenter.y)<.15,'knife shares the torch y');
 assert.ok(knifeMid.x>.4&&knifeMid.y<-.7,'both sit in the lower-right');
});

test('alignKnifeBladeForward puts tip on −Z and pivots on butt',()=>{
 const scene=new THREE.Group();
 const handle=new THREE.Mesh(new THREE.BoxGeometry(.04,.03,.08));
 handle.name='fish_knife_handle';
 handle.position.set(0,0,.05);
 const blade=new THREE.Mesh(new THREE.BoxGeometry(.03,.01,.14));
 blade.name='fish_knife_blade';
 blade.position.set(0,0,-.1);
 scene.add(handle,blade);
 // Start pointing the wrong way (+Z tip).
 scene.rotation.y=Math.PI;
 scene.updateMatrixWorld(true);
 alignKnifeBladeForward(scene);
 scene.updateMatrixWorld(true);
 const bladeC=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
 const handleC=new THREE.Box3().setFromObject(handle).getCenter(new THREE.Vector3());
 assert.ok(bladeC.z<handleC.z,'blade tip must be forward (−Z) of the grip');
 assert.ok(Math.abs(handleC.x)<.03&&Math.abs(handleC.y)<.03&&Math.abs(handleC.z)<.03,'grip near origin');
 assert.ok(bladeC.z<-.02,'tip extends along −Z');
});

test('prepareKnifeMaterials attaches soft envMap without washing PBR',()=>{
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial({metalness:.9,roughness:.25,color:0xffffff}));
 const g=new THREE.Group();g.add(mesh);
 const env=new THREE.Texture();
 prepareKnifeMaterials(g,env);
 const m=mesh.material as THREE.MeshStandardMaterial;
 assert.equal(m.envMap,env);
 assert.ok((m.envMapIntensity??0)>0&&(m.envMapIntensity??0)<1);
 assert.equal(m.metalness,.9);
 assert.equal(m.roughness,.25);
 assert.equal(m.emissive.getHex(),0);
});
