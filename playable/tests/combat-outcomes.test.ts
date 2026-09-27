/**
 * Phase 2 scored combat outcomes: SCRAPE / GRAZE / CLEAN / HEAD / MULTI.
 * Pure helpers — no Three.js, no DOM.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 classifyPlayerHit,classifyEnemyMiss,isMultiKill,styleActionsForTag,COMBAT_OUTCOME,
} from '../src/combatOutcomes';
import {hitscan,playerVelocityMultiplier} from '../src/playerPistol';
import {StyleMeter,STYLE_TUNING} from '../src/styleMeter';

test('classifyPlayerHit: magnetism-only contact is SCRAPE; honest body is CLEAN; head is HEAD',()=>{
 // Scrape fixture matches hit-math (eye near torso crown so shoulder rim is a volume test).
 const FLOOR=.65;
 const scrapeEye={x:0,y:FLOOR+1.0,z:0};
 const scrapeTargets=[{id:0,foot:{x:0,y:FLOOR,z:8}}];
 const scrapeDir={x:0.32,y:0,z:8};
 const assisted=hitscan(scrapeEye,scrapeDir,scrapeTargets,45,()=>true,playerVelocityMultiplier(0));
 const honest=hitscan(scrapeEye,scrapeDir,scrapeTargets,45,()=>true,1);
 assert.ok(assisted,'rest magnetism lands the scrape');
 assert.equal(honest,null,'honest volume misses');
 assert.equal(classifyPlayerHit(assisted,honest),'SCRAPE');

 // CLEAN / HEAD fixtures match player-pistol centre-ray tests.
 const eye={x:0,y:1.6,z:0};
 const targets=[{id:0,foot:{x:0,y:0,z:8}}];
 const cleanDir={x:0,y:-.1,z:1};
 const a2=hitscan(eye,cleanDir,targets,45,()=>true,1.15)!;
 const u2=hitscan(eye,cleanDir,targets,45,()=>true,1)!;
 assert.equal(a2.headshot,false);
 assert.equal(u2.headshot,false);
 assert.equal(classifyPlayerHit(a2,u2),'CLEAN');

 const headDir={x:0,y:0,z:1};
 const a3=hitscan(eye,headDir,targets,45,()=>true,1.15)!;
 const u3=hitscan(eye,headDir,targets,45,()=>true,1)!;
 assert.equal(a3.headshot,true);
 assert.equal(classifyPlayerHit(a3,u3),'HEAD');

 assert.equal(classifyPlayerHit(null,null),null);
});

test('classifyEnemyMiss: moving → GRAZE; standing still → null',()=>{
 assert.equal(classifyEnemyMiss(0),null);
 assert.equal(classifyEnemyMiss(COMBAT_OUTCOME.grazeStillSpeed),null);
 assert.equal(classifyEnemyMiss(COMBAT_OUTCOME.grazeStillSpeed+.01),'GRAZE');
 assert.equal(classifyEnemyMiss(3),'GRAZE');
});

test('isMultiKill: second kill inside window chains; outside does not',()=>{
 assert.equal(isMultiKill(5,-1),false);
 assert.equal(isMultiKill(5,5-COMBAT_OUTCOME.multiWindow),true);
 assert.equal(isMultiKill(5,5-COMBAT_OUTCOME.multiWindow-.01),false);
 assert.equal(isMultiKill(3,1),true);
});

test('styleActionsForTag maps beats onto style-meter actions',()=>{
 assert.deepEqual(styleActionsForTag('SCRAPE',false),['scrape']);
 assert.deepEqual(styleActionsForTag('SCRAPE',true),['scrape','kill']);
 assert.deepEqual(styleActionsForTag('CLEAN',false),['clean']);
 assert.deepEqual(styleActionsForTag('CLEAN',true),['clean','kill']);
 assert.deepEqual(styleActionsForTag('HEAD',false),['headshot']);
 assert.deepEqual(styleActionsForTag('HEAD',true),['headshotKill']);
 assert.deepEqual(styleActionsForTag('GRAZE',false),['graze']);
 assert.deepEqual(styleActionsForTag('MULTI',true),['multi']);
});

test('style meter: scrape / graze / clean promote; standing still drains inside grace',()=>{
 const m=new StyleMeter();
 m.record({action:'scrape'});
 m.record({action:'graze'});
 assert.equal(m.rank,'D');
 assert.ok(m.view().feed.some(l=>l.label.includes('SCRAPE')));
 assert.ok(m.view().feed.some(l=>l.label.includes('GRAZE')));

 // Standing still drains even before the idle grace ends.
 const before=m.points;
 m.update(.2,0);
 assert.ok(m.points<before,'still drain bites inside grace');

 // Moving + recent events: no idle drain.
 const moving=new StyleMeter();
 moving.record({action:'clean'});
 const p0=moving.points;
 moving.update(.2,2);
 assert.equal(moving.points,p0,'moving inside grace holds the bar');

 // Hurt still costs a slice.
 moving.hurt();
 assert.ok(moving.points<p0||moving.tier<0||moving.rank==='D');
});

test('style rank ladder still starts at D and climbs toward S on scrapes while scoring',()=>{
 const m=new StyleMeter();
 const ups:string[]=[];
 m.onRankChange(c=>{if(c.up&&c.to)ups.push(c.to);});
 for(let i=0;i<40;i++){
  m.record({action:i%3===0?'scrape':i%3===1?'graze':'clean',mods:i%2?['slide']:undefined});
  m.update(.05,2.5); // keep moving so still-drain does not erase progress
 }
 assert.ok(STYLE_TUNING.rankSize.length>=5);
 assert.ok(ups.includes('D'));
 assert.ok(ups.includes('C')||m.tier>=1,'climbs past D with sustained scrapes');
 // Stretch tiers may appear; Phase 2 primary ladder is D→S.
 assert.ok(m.tier>=0);
});
