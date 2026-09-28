/**
 * Near-death Ego Savior: P1 lethal save + P2 critical theater (vignette drivers / hero boost).
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,EGO_SAVIOR,FLOOR_Y,WALK_EYE_Y,breathFootprint,KNIFE_COOLDOWN} from '../src/simulation';
import {COMBAT_FEEDBACK} from '../src/combatFeedback';
import {classifyEnemyMiss} from '../src/combatOutcomes';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';

const CX=breathFootprint().cx;
const FROM={x:CX,y:WALK_EYE_Y,z:20};
const here=dirname(fileURLToPath(import.meta.url));

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

test('EGO_SAVIOR tunables sit in the Phase 1 + Phase 2 bands',()=>{
 assert.equal(EGO_SAVIOR.clampHpMin,1);
 assert.equal(EGO_SAVIOR.clampHpMax,3);
 assert.ok(EGO_SAVIOR.iframeMin>=.4&&EGO_SAVIOR.iframeMax<=.7);
 assert.ok(EGO_SAVIOR.iframeMin<EGO_SAVIOR.iframeMax);
 assert.ok(EGO_SAVIOR.shootCoolPadMin>=.4&&EGO_SAVIOR.shootCoolPadMax<=.8);
 assert.ok(EGO_SAVIOR.burstGapPad>0&&EGO_SAVIOR.burstGapPad<=.2);
 assert.equal(EGO_SAVIOR.criticalHp,15);
 assert.ok(EGO_SAVIOR.hitstopMs>=30&&EGO_SAVIOR.hitstopMs<=60);
 assert.ok(EGO_SAVIOR.heroBoostSeconds>=.35&&EGO_SAVIOR.heroBoostSeconds<=.8);
 assert.ok(EGO_SAVIOR.heroCooldownScale>0.5&&EGO_SAVIOR.heroCooldownScale<1);
 assert.equal(COMBAT_FEEDBACK.hitstopEgoSave,EGO_SAVIOR.hitstopMs);
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
 assert.equal(m.egoSaveSeq,1);
 assert.ok(m.egoHeroUntil>m.elapsed);
 assert.equal(m.egoHeroActive(),true);
 assert.equal(m.criticalTheaterActive(),true);

 // Standing at 8 HP taking 3 is not lethal overflow — no save.
 const n=mission(8,()=>0);
 n.hurtPlayer(3,FROM,'test',null);
 assert.equal(n.health,5);
 assert.equal(n.egoSaviorUsed,false);
 assert.equal(n.egoIframesActive(),false);
 assert.equal(n.outcome,'playing');
 assert.equal(n.egoSaveSeq,0);
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
 assert.equal(m.egoHeroUntil,0);
 assert.equal(m.health,100);

 m.health=4;
 m.hurtPlayer(20,FROM,'second-life',null);
 assert.equal(m.egoSaviorUsed,true);
 assert.equal(m.outcome,'playing');
 assert.ok(m.health>=EGO_SAVIOR.clampHpMin&&m.health<=EGO_SAVIOR.clampHpMax);
 assert.equal(m.egoSaveSeq,2);
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

test('critical theater is active at ≤15% suit even without a save',()=>{
 const m=mission(16,()=>0);
 assert.equal(m.criticalTheaterActive(),false);
 m.health=EGO_SAVIOR.criticalHp;
 assert.equal(m.criticalTheaterActive(),true);
 m.health=EGO_SAVIOR.criticalHp+1;
 assert.equal(m.criticalTheaterActive(),false);
 m.health=40;
 m.egoIframesUntil=m.elapsed+0.5;
 assert.equal(m.criticalTheaterActive(),true,'ego i-frames alone drive theater');
});

test('hero boost shortens knife cooldown only while the window is live',()=>{
 const m=mission(2,()=>0);
 m.inventory=['knife'];m.selected=0;
 m.hurtPlayer(20,FROM,'save',null);
 assert.equal(m.egoHeroActive(),true);
 assert.equal(m.heroCoolScale(),EGO_SAVIOR.heroCooldownScale);
 const look={x:0,y:0,z:-1};
 assert.equal(m.stab(look),'miss');
 assert.ok(Math.abs(m.predator.stabCool-KNIFE_COOLDOWN*EGO_SAVIOR.heroCooldownScale)<1e-9);
 m.elapsed=m.egoHeroUntil;
 assert.equal(m.egoHeroActive(),false);
 assert.equal(m.heroCoolScale(),1);
});

test('HUD / CSS carry hard critical vignette and never reveal INVULNERABLE / CLUTCH',()=>{
 const css=readFileSync(join(here,'../src/style.css'),'utf8');
 const hud=readFileSync(join(here,'../src/main.tsx'),'utf8');
 assert.match(css,/\.injury\.critical/);
 assert.match(css,/critical-heartbeat/);
 assert.match(hud,/criticalTheaterActive\(\)/);
 assert.match(hud,/injury critical/);
 // Strip comments so doc notes do not trip the reveal ban.
 const strip=(s:string)=>s.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\/\/.*$/gm,'');
 const hudLive=strip(hud),cssLive=strip(css);
 for(const banned of['INVULNERABLE','CLUTCH']){
  assert.equal(hudLive.includes(banned),false,`HUD must not show ${banned}`);
  assert.equal(cssLive.includes(banned),false,`CSS must not show ${banned}`);
 }
 assert.match(css,/prefers-reduced-motion:reduce/);
});
