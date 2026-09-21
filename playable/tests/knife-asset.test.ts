import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
 KNIFE_HOLD_SCALE,KNIFE_HOLD_POS,KNIFE_STAB_Z,KNIFE_THUMB_URL,KNIFE_ASSET_URL,
 createKnifeStub,poseKnife,alignKnifeBladeForward,prepareKnifeMaterials,
} from '../src/knifeAsset.ts';
import {readFileSync,statSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const knifeDir=path.join(path.dirname(fileURLToPath(import.meta.url)),'../public/assets/knife');

test('knife hold pose thrusts farther than rest along −Z',()=>{
 assert.ok(KNIFE_STAB_Z<KNIFE_HOLD_POS.z);
 assert.ok(KNIFE_HOLD_SCALE>=2.5);
});

test('knife public assets exist (glTF + square HUD thumb)',()=>{
 assert.equal(KNIFE_ASSET_URL,'/assets/knife/fish_knife_1k.gltf');
 assert.equal(KNIFE_THUMB_URL,'/assets/knife/thumb.png');
 for(const f of ['fish_knife_1k.gltf','fish_knife.bin','thumb.png','textures/fish_knife_diff_1k.jpg','textures/fish_knife_arm_1k.jpg','textures/fish_knife_nor_gl_1k.jpg']){
  assert.ok(statSync(path.join(knifeDir,f)).isFile(),f);
 }
 // HUD thumb must be square (old Poly Haven strip was 36×253).
 const png=readFileSync(path.join(knifeDir,'thumb.png'));
 assert.equal(png[0],0x89);
 const w=png.readUInt32BE(16),h=png.readUInt32BE(20);
 assert.equal(w,h);
 assert.ok(w>=64);
});

test('stub knife mounts with fill lights and hold pose',()=>{
 const g=createKnifeStub();
 assert.equal(g.name,'knifeVisual');
 assert.ok(g.getObjectByName('knifeFill'));
 assert.ok(g.getObjectByName('knifeRim'));
 poseKnife(g);
 assert.equal(g.scale.x,KNIFE_HOLD_SCALE);
 assert.equal(g.position.x,KNIFE_HOLD_POS.x);
});

test('alignKnifeBladeForward puts longest axis on Z and recenters',()=>{
 const scene=new THREE.Group();
 // Long thin box along +X (mimics unrotated handle extent).
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(.22,.03,.02));
 scene.add(mesh);
 alignKnifeBladeForward(scene);
 scene.updateMatrixWorld(true);
 const size=new THREE.Box3().setFromObject(scene).getSize(new THREE.Vector3());
 assert.ok(size.z>size.x&&size.z>size.y,'longest axis should be Z after align');
 const center=new THREE.Box3().setFromObject(scene).getCenter(new THREE.Vector3());
 assert.ok(Math.abs(center.x)<1e-5&&Math.abs(center.y)<1e-5&&Math.abs(center.z)<1e-5);
});

test('prepareKnifeMaterials attaches envMap without washing PBR',()=>{
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial({metalness:.9,roughness:.25,color:0xffffff}));
 const g=new THREE.Group();g.add(mesh);
 const env=new THREE.Texture();
 prepareKnifeMaterials(g,env);
 const m=mesh.material as THREE.MeshStandardMaterial;
 assert.equal(m.envMap,env);
 assert.ok((m.envMapIntensity??0)>=1);
 assert.equal(m.metalness,.9);
 assert.equal(m.roughness,.25);
 assert.equal(m.emissive.getHex(),0);
});
