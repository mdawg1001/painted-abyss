import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
 KNIFE_HOLD_SCALE,KNIFE_HOLD_POS,KNIFE_STAB_Z,KNIFE_THUMB_URL,KNIFE_ASSET_URL,KNIFE_MESH_SCALE,KNIFE_STAB_REACH,KNIFE_STAB_TIME,
 createKnifeStub,poseKnife,alignKnifeBladeForward,prepareKnifeMaterials,knifeMeshReady,forearmInFist,stabOffset,equipOffset,
} from '../src/knifeAsset.ts';
import {WRIST_POS,FOREARM_LEN,WRIST_MAX_BEND,clampForearm} from '../src/diverHand.ts';
import {readFileSync,statSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const knifeDir=path.join(path.dirname(fileURLToPath(import.meta.url)),'../public/assets/knife');

test('knife hold pose thrusts farther than rest along −Z, at real scale',()=>{
 assert.ok(KNIFE_STAB_Z<KNIFE_HOLD_POS.z);
 assert.deepEqual(KNIFE_HOLD_SCALE,{x:1,y:1,z:1},'viewmodel is real-world size, never stretched');
 assert.ok(KNIFE_MESH_SCALE>=1&&KNIFE_MESH_SCALE<=1.4,'dive-knife size, not a cleaver');
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

test('stub viewmodel is a gloved hand gripping the knife',()=>{
 const g=createKnifeStub();
 assert.equal(g.name,'knifeVisual');
 assert.equal(knifeMeshReady(g),true);
 const grip=g.getObjectByName('knifeGrip')!;
 assert.ok(grip);
 assert.ok(grip.getObjectByName('knifeHand'),'a hand holds the knife');
 assert.ok(grip.getObjectByName('knifeMount'));
 assert.ok(g.getObjectByName('knifeMesh'));
 for(const n of ['handIndex','handMiddle','handRing','handPinky','handThumb','handForearm'])assert.ok(g.getObjectByName(n),n);
 poseKnife(g);
 assert.equal(g.scale.x,1);
 assert.equal(g.position.x,KNIFE_HOLD_POS.x);
 assert.equal(g.position.y,KNIFE_HOLD_POS.y);
 assert.equal(g.position.z,KNIFE_HOLD_POS.z);
 // Blade leaves the fist on the thumb side; the fingers close round the handle.
 g.position.set(0,0,0);g.rotation.set(0,0,0);g.updateMatrixWorld(true);
 const blade=new THREE.Box3().setFromObject(g.getObjectByName('fish_knife_blade')!);
 const index=new THREE.Box3().setFromObject(g.getObjectByName('handIndex')!);
 assert.ok(blade.max.y>index.max.y+.08,'blade projects ≥8 cm past the index finger');
 const handle=new THREE.Box3().setFromObject(g.getObjectByName('fish_knife_handle')!);
 const hc=handle.getCenter(new THREE.Vector3());
 assert.ok(Math.hypot(hc.x,hc.z)<.02,'handle sits inside the fist');
});

test('viewmodel sits like a shooter knife: fist low-right, tip toward crosshair, arm off-frame',()=>{
 const cam=new THREE.PerspectiveCamera(64,16/9,.12,130);
 cam.updateMatrixWorld(true);
 const g=createKnifeStub();
 poseKnife(g);
 cam.add(g);g.updateMatrixWorld(true);
 const gripObj=g.getObjectByName('knifeGrip')!;
 const P=(local:THREE.Vector3)=>gripObj.localToWorld(local.clone()).project(cam);
 const grip=P(new THREE.Vector3());
 const tip=P(new THREE.Vector3(0,.16,0));
 assert.ok(grip.x>.2&&grip.x<.85,'fist in the right half, inside the frame');
 assert.ok(grip.y<-.15&&grip.y>-.8,'fist in the lower half, not hanging off the bottom');
 assert.ok(tip.y>grip.y+.2,'blade rises from the fist');
 assert.ok(tip.x<grip.x,'blade leans in toward the crosshair');
 assert.ok(tip.x>-.2&&tip.y<.35,'blade does not cover the crosshair');
 // The forearm connects the hand to the player: it runs out of the frame at the bottom-right.
 const dir=clampForearm(forearmInFist());
 const wrist=new THREE.Vector3(WRIST_POS.x,WRIST_POS.y,WRIST_POS.z);
 const elbowCam=gripObj.localToWorld(wrist.clone().addScaledVector(dir,FOREARM_LEN));
 const e=elbowCam.clone().project(cam);
 assert.ok(e.x>1||e.y<-1||elbowCam.z>-.12,'forearm leaves the frame instead of ending on screen');
 const mid=P(wrist.clone().addScaledVector(dir,.12));
 assert.ok(mid.x>grip.x&&mid.y<grip.y,'forearm heads down-right from the wrist');
});

test('wrist stays inside a human range of motion',()=>{
 const bend=clampForearm(forearmInFist()).angleTo(new THREE.Vector3(0,0,-1));
 assert.ok(bend<=WRIST_MAX_BEND+1e-6,`wrist bend ${THREE.MathUtils.radToDeg(bend).toFixed(1)}°`);
});

test('stab: thrusts forward on the click, peaks early, recovers to rest',()=>{
 const zero={x:0,y:0,z:0,pitch:0,yaw:0,roll:0};
 assert.deepEqual(stabOffset(0),zero);
 assert.deepEqual(stabOffset(1),zero);
 assert.ok(stabOffset(.05).z<0,'fist drives forward immediately — no wind-up');
 const peak=stabOffset(.2);
 assert.ok(Math.abs(peak.z+KNIFE_STAB_REACH)<1e-6,'full reach early in the animation');
 assert.ok(peak.x<0,'thrust converges on the crosshair');
 assert.ok(Math.abs(stabOffset(.97).z)<.01,'back near rest by the end');
 assert.ok(KNIFE_STAB_TIME>.2&&KNIFE_STAB_TIME<.5);
});

test('equip: fist rises into frame and settles',()=>{
 assert.ok(equipOffset(0).y<-.15,'starts below the frame');
 assert.deepEqual(equipOffset(1),{x:0,y:0,z:0,pitch:0,yaw:0,roll:0});
 assert.ok(Math.abs(equipOffset(.9).y)<.01);
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
