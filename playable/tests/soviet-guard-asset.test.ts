import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_SOURCE,SOVIET_GUARD_LICENSE,GUARD_LOCO_PROCEDURAL,
 createSovietGuardVisual,
} from '../src/sovietGuardAsset';
import {GUARD_COUNT,GUARD_OUTFIT_COLORS} from '../src/simulation';
import * as THREE from 'three';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('Quaternius soldier GLB with authored loco clips is credited and present',()=>{
 const dir=path.join(root,'public/assets/soviet-uniform');
 assert.ok(fs.existsSync(path.join(dir,'quaternius_soldier_male.glb')));
 assert.ok(fs.existsSync(path.join(dir,'README.md')));
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/quaternius\.com/i);
 assert.match(readme,/CC0/);
 assert.match(SOVIET_GUARD_SOURCE,/quaternius\.com/);
 assert.equal(SOVIET_GUARD_LICENSE,'CC0 1.0');
 assert.equal(SOVIET_GUARD_GLB,'/assets/soviet-uniform/quaternius_soldier_male.glb');
 assert.equal(GUARD_LOCO_PROCEDURAL,false);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Quaternius/);
 assert.match(notice,/CC0/);
 assert.match(notice,/idle|Idle/);
});

test('five stub kits wear distinct cloth dyes',()=>{
 assert.ok(GUARD_COUNT>=GUARD_OUTFIT_COLORS.length,'the pool reuses the five kits');
 assert.equal(GUARD_OUTFIT_COLORS.length,5);
 const hexes=new Set<number>();
 for(let i=0;i<GUARD_OUTFIT_COLORS.length;i++){
  const visual=createSovietGuardVisual(i);
  assert.equal(visual.outfit,i);
  assert.match(visual.root.name,new RegExp(`:${i}$`));
  let cloth=-1;
  visual.body.traverse(o=>{
   if(o instanceof THREE.Mesh&&(o.geometry as THREE.BufferGeometry).type==='CapsuleGeometry'){
    cloth=(o.material as THREE.MeshStandardMaterial).color.getHex();
   }
  });
  assert.equal(cloth,GUARD_OUTFIT_COLORS[i]);
  hexes.add(cloth);
 }
 assert.equal(hexes.size,GUARD_OUTFIT_COLORS.length);
});
