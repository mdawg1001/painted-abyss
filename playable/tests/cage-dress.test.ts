import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
 cageBarPanels,cageFloorGrates,cageMeshAprons,cageObsLamps,
 inCageWatchedZone,cageDressStats,CAGE_WATCHED_TIP,
} from '../src/cageDressLayout';
import {createCageDress,stepCageDress} from '../src/cageDressAsset';
import {CATWALK_LADDERS,catwalkCoverageStats} from '../src/catwalkLayout';

test('cage dress stays sparse and anchored to the three galleries',()=>{
 const s=cageDressStats();
 assert.ok(s.barPanels>=6&&s.barPanels<=12,`bar panels ${s.barPanels}`);
 assert.ok(s.meshAprons>=3&&s.meshAprons<=8,`mesh aprons ${s.meshAprons}`);
 assert.ok(s.floorGrates>=3&&s.floorGrates<=6,`floor grates ${s.floorGrates}`);
 assert.equal(s.obsLamps,3,'one harsh lamp per gallery approach');
 assert.equal(s.watchedZones,3);
 // Do not invent a fourth catwalk gallery.
 assert.equal(catwalkCoverageStats().galleries,3);
 assert.equal(CATWALK_LADDERS.length,3);
});

test('watched zones cover ladder approaches; open floor stays free',()=>{
 const wh=CATWALK_LADDERS.find(L=>L.label==='west-hall')!;
 assert.ok(inCageWatchedZone(wh.x,wh.z),'west-hall ladder watched');
 assert.ok(inCageWatchedZone(wh.x,wh.z+1.8),'west-hall south runway watched');
 const nk=CATWALK_LADDERS.find(L=>L.label==='neck-west')!;
 assert.ok(inCageWatchedZone(nk.x,nk.z),'neck ladder watched');
 assert.ok(inCageWatchedZone(-3.35,-34.5),'neck choke floor watched');
 const pit=CATWALK_LADDERS.find(L=>L.label==='pit-lip')!;
 assert.ok(inCageWatchedZone(pit.x,pit.z),'pit-lip climb watched');
 // Hatch / breath corridor and mid-cavern are not cage chokes.
 assert.equal(inCageWatchedZone(0,12),null);
 assert.equal(inCageWatchedZone(0,-20),null);
 assert.equal(inCageWatchedZone(20,-40),null);
});

test('mesh aprons sit under the grated decks (cage ceiling read)',()=>{
 for(const a of cageMeshAprons()){
  assert.ok(a.y>0.65+2.5&&a.y<0.65+3.3,`${a.label} under deck`);
 }
 assert.ok(cageBarPanels().some(p=>p.label.startsWith('wh-funnel')));
 assert.ok(cageFloorGrates().some(g=>g.label.startsWith('wh-runway')));
 assert.ok(cageObsLamps().every(L=>L.y>3));
 assert.match(CAGE_WATCHED_TIP,/Observed/i);
 assert.match(CAGE_WATCHED_TIP,/Grate/i);
});

test('createCageDress builds meshes + three observation spots',()=>{
 const d=createCageDress();
 assert.ok(d.group.children.length>=10);
 assert.equal(d.lights.length,3);
 assert.equal(d.watchLevel,0);
 const far=stepCageDress(d,0.5,{x:0,z:0});
 assert.equal(far.entered,false);
 assert.ok(d.watchLevel<0.2);
 const near=stepCageDress(d,1,{x:-27.2,z:-45});
 assert.equal(near.entered,true);
 assert.equal(near.zoneLabel,'west-hall-approach');
 d.group.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.geometry?.dispose();
  for(const mat of Array.isArray(o.material)?o.material:[o.material])mat?.dispose?.();
 });
});
