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
 assert.ok(KNIFE_HOLD_SCALE.z>=5,'blade must be lantern-length or longer');
 assert.ok(KNIFE_HOLD_SCALE.x>=KNIFE_HOLD_SCALE.z,'blade must be widened so it is not a sliver');
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
 assert.equal(g.scale.x,KNIFE_HOLD_SCALE.x);
 assert.equal(g.scale.y,KNIFE_HOLD_SCALE.y);
 assert.equal(g.scale.z,KNIFE_HOLD_SCALE.z);
 assert.equal(g.position.x,KNIFE_HOLD_POS.x);
 assert.deepEqual(KNIFE_HOLD_POS,HELD_VIEW_POS);
 assert.deepEqual(KNIFE_HOLD_ROT,HELD_VIEW_ROT);
 assert.equal(KNIFE_HOLD_POS.x,.44);
 assert.equal(KNIFE_HOLD_POS.y,-.4);
 assert.equal(KNIFE_HOLD_POS.z,-.62);
});

test('knife rest pose matches the torch slot and is at least lantern-sized',()=>{
 const cam=new THREE.PerspectiveCamera(64,16/9,.12,130);
 const project=(scale:{x:number;y:number;z:number},local:THREE.Vector3)=>{
  const g=new THREE.Group();
  g.position.set(HELD_VIEW_POS.x,HELD_VIEW_POS.y,HELD_VIEW_POS.z);
  g.rotation.set(HELD_VIEW_ROT.x,HELD_VIEW_ROT.y,HELD_VIEW_ROT.z);
  g.scale.set(scale.x,scale.y,scale.z);
  g.updateMatrixWorld(true);
  return local.clone().applyMatrix4(g.matrixWorld).project(cam);
 };
 const span=(a:THREE.Vector3,b:THREE.Vector3)=>Math.hypot(a.x-b.x,a.y-b.y);
 const torchScale={x:1.15,y:1.15,z:1.15};
 const torchLen=span(project(torchScale,new THREE.Vector3(0,0,-.432)),project(torchScale,new THREE.Vector3(0,0,.225)));
 const torchWide=span(project(torchScale,new THREE.Vector3(-.122,0,-.38)),project(torchScale,new THREE.Vector3(.122,0,-.38)));
 const knifeLen=span(project(KNIFE_HOLD_SCALE,new THREE.Vector3(0,0,-.1556)),project(KNIFE_HOLD_SCALE,new THREE.Vector3(0,0,.0604)));
 const knifeWide=span(project(KNIFE_HOLD_SCALE,new THREE.Vector3(-.0157,0,-.08)),project(KNIFE_HOLD_SCALE,new THREE.Vector3(.0157,0,-.08)));
 const grip=project(KNIFE_HOLD_SCALE,new THREE.Vector3(0,0,0));
 assert.ok(knifeLen>=torchLen,'knife must read at least as long as the torch');
 assert.ok(knifeWide>=torchWide*.9,'knife must read about as wide as the lantern head');
 assert.ok(grip.x>.45&&grip.y<-.6,'grip stays in the torch corner');
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
