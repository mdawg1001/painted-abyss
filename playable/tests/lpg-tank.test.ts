import test from 'node:test';
import assert from 'node:assert/strict';
import {statSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 LPG_TANK_URL,LPG_TANK_POS,LPG_TANK_HEIGHT,createLpgTankStub,normalizeLpgToFloor,
} from '../src/lpgTankAsset.ts';
import {FLOOR_Y,isOpen} from '../src/simulation.ts';
import * as THREE from 'three';

const dir=path.join(path.dirname(fileURLToPath(import.meta.url)),'../public/assets/lpg_tank');

test('LPG tank public assets exist (1k glTF + maps)',()=>{
 assert.equal(LPG_TANK_URL,'/assets/lpg_tank/small_lpg_tank_1k.gltf');
 for(const f of [
  'small_lpg_tank_1k.gltf','small_lpg_tank.bin',
  'textures/small_lpg_tank_diff_1k.jpg','textures/small_lpg_tank_arm_1k.jpg','textures/small_lpg_tank_nor_gl_1k.jpg',
 ])assert.ok(statSync(path.join(dir,f)).isFile(),f);
});

test('LPG tank sits on an open cave floor cell west of the central approach',()=>{
 assert.equal(LPG_TANK_POS.y,FLOOR_Y);
 assert.ok(LPG_TANK_POS.x<=-8);
 assert.ok(LPG_TANK_POS.z<=-40&&LPG_TANK_POS.z>=-56);
 assert.equal(isOpen(LPG_TANK_POS.x,LPG_TANK_POS.z),true);
});

test('stub tank has height near the authored target',()=>{
 const g=createLpgTankStub();
 const box=new THREE.Box3().setFromObject(g);
 assert.ok(box.min.y>=-0.01);
 assert.ok(box.max.y>LPG_TANK_HEIGHT*.5);
});

test('normalizeLpgToFloor puts mesh bottom at y=0',()=>{
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(1,2,1));
 mesh.position.y=5;
 const root=new THREE.Group();root.add(mesh);
 normalizeLpgToFloor(root,1);
 const box=new THREE.Box3().setFromObject(root);
 assert.ok(Math.abs(box.min.y)<1e-4);
 assert.ok(Math.abs(box.max.y-1)<1e-3);
});
