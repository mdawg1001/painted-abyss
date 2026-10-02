import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_SOURCE,SOVIET_GUARD_LICENSE,GUARD_LOCO_PROCEDURAL,
 createSovietGuardVisual,GUARD_UNIFORM,
} from '../src/sovietGuardAsset';
import {GUARD_ARCHETYPES,guardArchetype} from '../src/guardArchetypes';
import {GUARD_COUNT} from '../src/simulation';
import * as THREE from 'three';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('original civilian mesh and retained CC0 skeleton/animation credits are present',()=>{
 const dir=path.join(root,'public/assets/soviet-uniform');
 assert.ok(fs.existsSync(path.join(dir,'quaternius_soldier_male.glb')));
 assert.ok(fs.existsSync(path.join(dir,'README.md')));
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/quaternius\.com/i);
 assert.match(readme,/CC0/);
 assert.match(SOVIET_GUARD_SOURCE,/quaternius\.com/);
 assert.equal(SOVIET_GUARD_LICENSE,'CC0 1.0');
 assert.equal(SOVIET_GUARD_GLB,'/assets/colourful-guard/civilian.glb');
 assert.ok(fs.existsSync(path.join(root,'public',SOVIET_GUARD_GLB)));
 assert.match(fs.readFileSync(path.join(root,'public/assets/colourful-guard/NOTICE.md'),'utf8'),/original procedural mesh/);
 assert.equal(GUARD_LOCO_PROCEDURAL,false);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Quaternius/);
 assert.match(notice,/CC0/);
 assert.match(notice,/idle|Idle/);
});

test('stubs share the stark red/blue cartoon kit and cycle six archetypes',()=>{
 assert.ok(GUARD_COUNT>=GUARD_ARCHETYPES.length);
 const skins=new Set<number>();
 for(let i=0;i<GUARD_ARCHETYPES.length;i++){
  const visual=createSovietGuardVisual(i);
  assert.equal(visual.outfit,i);
  assert.match(visual.root.name,new RegExp(`:${i}$`));
  assert.equal(visual.pose.postureSwagger,guardArchetype(i).posture.swagger);
  assert.ok(Math.abs(visual.root.scale.y-guardArchetype(i).height)<1e-6,'outer-root height');
  let jacket=-1,skin=-1;
  visual.body.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   const hex=(o.material as THREE.MeshStandardMaterial).color.getHex();
   if((o.geometry as THREE.BufferGeometry).type==='CapsuleGeometry'&&jacket<0)jacket=hex;
   if((o.geometry as THREE.SphereGeometry)?.type==='SphereGeometry'||o.geometry.type==='SphereGeometry')skin=hex;
  });
  assert.equal(jacket,GUARD_UNIFORM.jacket,'shared pure-red jacket on stub');
  assert.equal(skin,guardArchetype(i).skin);
  skins.add(skin);
 }
 assert.ok(skins.size>=4,'archetype skin tones differ on stubs');
});
