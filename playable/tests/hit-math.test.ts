/**
 * Asymmetric hit math: player→enemy angular + radius magnetism, enemy→player skin-of-teeth.
 * Pure helpers — no Three.js, no DOM.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 HITBOX_ASSIST,playerVelocityMultiplier,HitboxScale,dynamicTargetRadius,
 playerAssistAngle,magnetizeAim,movingScatterScale,rotateToward,
 hitscan,soldierHitVolumes,
} from '../src/playerPistol';
import {
 WALK_SPRINT,WALK_SPEED,
 guardHitChance,skinOfTeethHitChance,SKIN_OF_TEETH,
 PLAYER_CORE,projectileCoreRadius,
} from '../src/simulation';
import {classifyPlayerHit} from '../src/combatOutcomes';

const DEG=Math.PI/180;

test('playerVelocityMultiplier: rest→sprint bonuses, linear in between',()=>{
 assert.equal(HITBOX_ASSIST.sprintSpeed,WALK_SPRINT);
 assert.ok(Math.abs(playerVelocityMultiplier(0)-(1+HITBOX_ASSIST.restBonus))<1e-12);
 assert.ok(Math.abs(playerVelocityMultiplier(WALK_SPRINT)-(1+HITBOX_ASSIST.sprintBonus))<1e-12);
 const mid=1+HITBOX_ASSIST.restBonus+(HITBOX_ASSIST.sprintBonus-HITBOX_ASSIST.restBonus)/2;
 assert.ok(Math.abs(HitboxScale(WALK_SPRINT/2)-mid)<1e-12,'mid-sprint is halfway');
 assert.equal(playerVelocityMultiplier(-1),1+HITBOX_ASSIST.restBonus,'negative clamps to rest');
 assert.equal(playerVelocityMultiplier(99),1+HITBOX_ASSIST.sprintBonus,'over-sprint clamps');
});

test('playerAssistAngle / movingScatterScale track speed and hard-cap',()=>{
 assert.ok(Math.abs(playerAssistAngle(0)-HITBOX_ASSIST.restAngleDeg*DEG)<1e-12);
 assert.ok(Math.abs(playerAssistAngle(WALK_SPRINT)-HITBOX_ASSIST.sprintAngleDeg*DEG)<1e-12);
 assert.ok(playerAssistAngle(99)<=HITBOX_ASSIST.angleHardCapDeg*DEG+1e-12);
 assert.ok(HITBOX_ASSIST.sprintAngleDeg<=HITBOX_ASSIST.angleHardCapDeg);
 assert.equal(movingScatterScale(0),1);
 assert.ok(Math.abs(movingScatterScale(WALK_SPRINT)-(1-HITBOX_ASSIST.movingScatterDamp))<1e-12);
 assert.ok(movingScatterScale(WALK_SPRINT/2)>movingScatterScale(WALK_SPRINT));
 assert.ok(movingScatterScale(WALK_SPRINT/2)<1);
});

test('dynamicTargetRadius scales head/body for hitscan only',()=>{
 const v=soldierHitVolumes({x:0,y:0,z:0});
 assert.ok(Math.abs(dynamicTargetRadius(v.head.radius,1.08)-v.head.radius*1.08)<1e-12);
 assert.ok(Math.abs(dynamicTargetRadius(v.body.radius,1.12)-v.body.radius*1.12)<1e-12);
 assert.equal(dynamicTargetRadius(.3,1),.3);
});

test('rotateToward slerps by the requested angle and clamps to the gap',()=>{
 const a={x:0,y:0,z:1};
 const b={x:1,y:0,z:0};
 const mid=rotateToward(a,b,Math.PI/4);
 const ang=Math.acos(Math.min(1,Math.max(-1,mid.x*a.x+mid.y*a.y+mid.z*a.z)));
 assert.ok(Math.abs(ang-Math.PI/4)<1e-9);
 const full=rotateToward(a,b,Math.PI);
 assert.ok(Math.abs(full.x-1)<1e-9&&Math.abs(full.z)<1e-9);
});

test('magnetizeAim: sprint cone pulls a hairline miss onto the body; rest stays tight',()=>{
 const FLOOR=.65;
 const eye={x:0,y:FLOOR+1.0,z:0};
 const foot={x:0,y:FLOOR,z:8};
 const targets=[{id:0,foot}];
 const bodyR=.3;
 // Aim past the left shoulder: missBy ≈ atan((0.3+δ)/8) − atan(0.3/8).
 // δ = 0.20 m → missBy ≈ 1.35° — inside sprint 2.0°, outside rest 0.4°.
 const missPast=.20;
 const aimX=bodyR+missPast;
 const dir={x:aimX,y:0,z:8};
 assert.equal(hitscan(eye,dir,targets,45,()=>true,1),null,'honest volume misses');

 const sprintAng=playerAssistAngle(WALK_SPRINT);
 const pulled=magnetizeAim(eye,dir,targets,sprintAng,45);
 const sticky=hitscan(eye,pulled,targets,45,()=>true,1);
 assert.ok(sticky,'sprint cone lands the scrape on honest radius');
 assert.equal(sticky!.id,0);
 assert.equal(sticky!.headshot,false);

 const restAng=playerAssistAngle(0);
 const restPull=magnetizeAim(eye,dir,targets,restAng,45);
 assert.equal(hitscan(eye,restPull,targets,45,()=>true,1),null,'rest cone leaves this miss alone');

 // Far off-cone (half-screen) never snaps.
 const wide={x:3,y:0,z:8};
 const noSnap=magnetizeAim(eye,wide,targets,sprintAng,45);
 assert.equal(hitscan(eye,noSnap,targets,45,()=>true,playerVelocityMultiplier(WALK_SPRINT)),null);
});

test('hitscan radius rim still catches a shoulder scrape; walls still block',()=>{
 const FLOOR=.65;
 const eye={x:0,y:FLOOR+1.0,z:0};
 const foot={x:0,y:FLOOR,z:8};
 const targets=[{id:0,foot}];
 const restScale=1+HITBOX_ASSIST.restBonus;
 // Just outside honest .3, inside rest rim (.3 * 1.08 = .324).
 const missX=.31;
 assert.ok(missX>0.3&&missX<0.3*restScale,'fixture inside rest radius rim');
 const dir={x:missX,y:0,z:8};
 assert.equal(hitscan(eye,dir,targets,45,()=>true,1),null,'honest volume misses');
 const sticky=hitscan(eye,dir,targets,45,()=>true,playerVelocityMultiplier(0));
 assert.ok(sticky,'rest radius rim lands the scrape');
 assert.equal(sticky!.id,0);
 assert.equal(hitscan(eye,dir,targets,45,()=>false,1+HITBOX_ASSIST.sprintBonus),null,'wall blocks assisted ray');
});

test('dual-ray SCRAPE: magnetized sprint hit + honest miss tags SCRAPE',()=>{
 const FLOOR=.65;
 const eye={x:0,y:FLOOR+1.0,z:0};
 const targets=[{id:0,foot:{x:0,y:FLOOR,z:8}}];
 const dir={x:0.5,y:0,z:8}; // ~1.35° past body edge at 8 m
 const honest=hitscan(eye,dir,targets,45,()=>true,1);
 const assistedDir=magnetizeAim(eye,dir,targets,playerAssistAngle(WALK_SPRINT),45);
 const assisted=hitscan(eye,assistedDir,targets,45,()=>true,playerVelocityMultiplier(WALK_SPRINT));
 assert.equal(honest,null);
 assert.ok(assisted);
 assert.equal(classifyPlayerHit(assisted,honest),'SCRAPE');
});

test('skinOfTeethHitChance: standing stays hot; moving bleeds land chance',()=>{
 const still=skinOfTeethHitChance(8,0,false);
 const walk=skinOfTeethHitChance(8,WALK_SPEED,false);
 const sprint=skinOfTeethHitChance(8,WALK_SPRINT,false);
 assert.equal(still,guardHitChance(8,0,false),'still = base guard chance');
 assert.ok(walk<still-SKIN_OF_TEETH.maxGrazeBias*.5,'walk applies graze bias');
 assert.ok(Math.abs(walk-(guardHitChance(8,WALK_SPEED,false)-SKIN_OF_TEETH.maxGrazeBias))<1e-12);
 assert.ok(sprint<=walk,'sprint is at least as hard as a brisk walk');
 assert.ok(sprint>=SKIN_OF_TEETH.minChance,'never unhittable');
 const creep=skinOfTeethHitChance(8,SKIN_OF_TEETH.stillSpeed,false);
 assert.equal(creep,guardHitChance(8,SKIN_OF_TEETH.stillSpeed,false));
});

test('PLAYER_CORE / projectileCoreRadius ready for future tracers',()=>{
 assert.equal(projectileCoreRadius(),PLAYER_CORE.radius);
 assert.ok(PLAYER_CORE.radius>0&&PLAYER_CORE.grazeShell>0);
 assert.ok(PLAYER_CORE.radius+PLAYER_CORE.grazeShell<.6,'core+shell stays human-scale');
});
