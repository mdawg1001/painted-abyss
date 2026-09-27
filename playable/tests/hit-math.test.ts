/**
 * Phase 1 asymmetric hit math: player→enemy magnetism + enemy→player skin-of-teeth.
 * Pure helpers — no Three.js, no DOM.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 HITBOX_ASSIST,playerVelocityMultiplier,HitboxScale,dynamicTargetRadius,
 hitscan,soldierHitVolumes,
} from '../src/playerPistol';
import {
 WALK_SPRINT,WALK_SPEED,
 guardHitChance,skinOfTeethHitChance,SKIN_OF_TEETH,
 PLAYER_CORE,projectileCoreRadius,
} from '../src/simulation';

test('playerVelocityMultiplier: +15% at rest, +35% at sprint, linear in between',()=>{
 assert.equal(HITBOX_ASSIST.sprintSpeed,WALK_SPRINT);
 assert.ok(Math.abs(playerVelocityMultiplier(0)-(1+HITBOX_ASSIST.restBonus))<1e-12);
 assert.ok(Math.abs(playerVelocityMultiplier(WALK_SPRINT)-(1+HITBOX_ASSIST.sprintBonus))<1e-12);
 assert.ok(Math.abs(HitboxScale(WALK_SPRINT/2)-(1+.15+.1))<1e-12,'mid-sprint is halfway');
 assert.equal(playerVelocityMultiplier(-1),1+HITBOX_ASSIST.restBonus,'negative clamps to rest');
 assert.equal(playerVelocityMultiplier(99),1+HITBOX_ASSIST.sprintBonus,'over-sprint clamps');
});

test('dynamicTargetRadius scales head/body for hitscan only',()=>{
 const v=soldierHitVolumes({x:0,y:0,z:0});
 assert.ok(Math.abs(dynamicTargetRadius(v.head.radius,1.15)-v.head.radius*1.15)<1e-12);
 assert.ok(Math.abs(dynamicTargetRadius(v.body.radius,1.35)-v.body.radius*1.35)<1e-12);
 assert.equal(dynamicTargetRadius(.3,1),.3);
});

test('hitscan magnetism: expanded radius catches a near-miss; walls still block',()=>{
 const FLOOR=.65;
 const eye={x:0,y:FLOOR+1.0,z:0};
 // Body radius .3 — aim just past the left shoulder so an honest ray misses.
 const foot={x:0,y:FLOOR,z:8};
 const targets=[{id:0,foot}];
 const missX=0.32; // > .3 honest body radius, < .3*1.15 assisted
 const dir={x:missX,y:0,z:8};
 assert.equal(hitscan(eye,dir,targets,45,()=>true,1),null,'honest volume misses');
 const sticky=hitscan(eye,dir,targets,45,()=>true,playerVelocityMultiplier(0));
 assert.ok(sticky,'rest magnetism (+15%) lands the scrape');
 assert.equal(sticky!.id,0);
 assert.equal(sticky!.headshot,false);
 // LOS stays honest: a wall between eye and impact rejects the assisted hit.
 assert.equal(hitscan(eye,dir,targets,45,()=>false,1.35),null,'wall blocks assisted ray');
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
 // Creep below stillSpeed: no extra bias beyond guardHitChance's own moving band.
 const creep=skinOfTeethHitChance(8,SKIN_OF_TEETH.stillSpeed,false);
 assert.equal(creep,guardHitChance(8,SKIN_OF_TEETH.stillSpeed,false));
});

test('PLAYER_CORE / projectileCoreRadius ready for future tracers',()=>{
 assert.equal(projectileCoreRadius(),PLAYER_CORE.radius);
 assert.ok(PLAYER_CORE.radius>0&&PLAYER_CORE.grazeShell>0);
 assert.ok(PLAYER_CORE.radius+PLAYER_CORE.grazeShell<.6,'core+shell stays human-scale');
});
