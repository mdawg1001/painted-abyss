/**
 * Near-death Ego Savior Phase 1: lethal overflow → silent clamp + i-frames + cadence desync.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,EGO_SAVIOR,FLOOR_Y,WALK_EYE_Y,breathFootprint} from '../src/simulation';
import {classifyEnemyMiss} from '../src/combatOutcomes';

const CX=breathFootprint().cx;
const FROM={x:CX,y:WALK_EYE_Y,z:20};

function mission(health:number,rand=()=>0){
 const m=new Mission(true);
 isolateGuards(m,-1);
 m.breathWaterY=FLOOR_Y-.1;
 m.director.enabled=false;
 m.rand=rand;
 m.health=health;
 m.position={x:CX,y:WALK_EYE_Y,z:24};
 m.elapsed=10;
 return m;
}

test('EGO_SAVIOR tunables sit in the Phase 1 bands',()=>{
 assert.equal(EGO_SAVIOR.clampHpMin,1);
 assert.equal(EGO_SAVIOR.clampHpMax,3);
 assert.ok(EGO_SAVIOR.iframeMin>=.4&&EGO_SAVIOR.iframeMax<=.7);
 assert.ok(EGO_SAVIOR.iframeMin<EGO_SAVIOR.iframeMax);
 assert.ok(EGO_SAVIOR.shootCoolPadMin>=.4&&EGO_SAVIOR.shootCoolPadMax<=.8);
 assert.ok(EGO_SAVIOR.burstGapPad>0&&EGO_SAVIOR.burstGapPad<=.2);
});

test('lethal overflow clamps HP into 1–3 and grants i-frames; non-lethal does not save',()=>{
 // rand=0 → clampHpMin, iframeMin
 const m=mission(5,()=>0);
 m.hurtPlayer(12,FROM,'test',null);
 assert.equal(m.outcome,'playing');
 assert.equal(m.health,EGO_SAVIOR.clampHpMin);
 assert.equal(m.egoSaviorUsed,true);
 assert.ok(Math.abs(m.egoIframesUntil-(m.elapsed+EGO_SAVIOR.iframeMin))<1e-12);
 assert.equal(m.egoIframesActive(),true);

 // Standing at 8 HP taking 3 is not lethal overflow — no save.
 const n=mission(8,()=>0);
 n.hurtPlayer(3,FROM,'test',null);
 assert.equal(n.health,5);
 assert.equal(n.egoSaviorUsed,false);
 assert.equal(n.egoIframesActive(),false);
 assert.equal(n.outcome,'playing');
});

test('second lethal during i-frames is ignored; after window death works',()=>{
 const m=mission(2,()=>0);
 m.hurtPlayer(30,FROM,'first',null);
 assert.equal(m.egoSaviorUsed,true);
 assert.equal(m.outcome,'playing');
 const hp=m.health;

 m.hurtPlayer(99,FROM,'during-iframes',null);
 assert.equal(m.health,hp,'i-frames ignore damage');
 assert.equal(m.outcome,'playing');

 // Expire i-frames without advancing sim clock tricks.
 m.elapsed=m.egoIframesUntil;
 assert.equal(m.egoIframesActive(),false);
 m.hurtPlayer(hp,FROM,'after-window',null);
 assert.equal(m.outcome,'lost');
 assert.equal(m.health,0);
 assert.equal(m.reason,'after-window');
});

test('one save per life; hatch respawn recharges',()=>{
 const m=mission(1,()=>0);
 m.hurtPlayer(50,FROM,'save',null);
 assert.equal(m.egoSaviorUsed,true);
 m.elapsed=m.egoIframesUntil;
 m.hurtPlayer(m.health,FROM,'die',null);
 assert.equal(m.outcome,'lost');

 m.respawnAtHatch();
 assert.equal(m.outcome,'playing');
 assert.equal(m.egoSaviorUsed,false);
 assert.equal(m.egoIframesUntil,0);
 assert.equal(m.health,100);

 m.health=4;
 m.hurtPlayer(20,FROM,'second-life',null);
 assert.equal(m.egoSaviorUsed,true);
 assert.equal(m.outcome,'playing');
 assert.ok(m.health>=EGO_SAVIOR.clampHpMin&&m.health<=EGO_SAVIOR.clampHpMax);
});

test('save desyncs chase/fire shootCool without freezing the mission clock',()=>{
 const m=mission(3,()=>0);
 isolateGuards(m,0);
 const g=m.guards[0];
 m.activateGuard(g,{x:CX,z:m.position.z-6},0,'assault');
 g.state='chase';
 g.gun=true;
 g.fireToken=true;
 g.burstLeft=2;
 g.shootCool=0.05;
 const elapsedBefore=m.elapsed;

 m.hurtPlayer(40,FROM,'desync',g);
 assert.equal(m.outcome,'playing');
 assert.equal(m.elapsed,elapsedBefore,'no sim freeze / time scale');
 assert.ok(g.shootCool>=EGO_SAVIOR.shootCoolPadMin,'chase shootCool delayed');
 assert.ok(g.shootCool>=EGO_SAVIOR.burstGapPad,'mid-burst gap stretched');
});

test('GRAZE classification stays available during the save window (tracers not gated)',()=>{
 // Miss classification is independent of Ego Savior — grazes keep scoring while moving.
 assert.equal(classifyEnemyMiss(2.0),'GRAZE');
 assert.equal(classifyEnemyMiss(0),null);
 const m=mission(1,()=>0);
 m.hurtPlayer(20,FROM,'save',null);
 assert.equal(m.egoIframesActive(),true);
 assert.equal(classifyEnemyMiss(3),'GRAZE');
});
