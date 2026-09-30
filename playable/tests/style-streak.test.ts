/**
 * Phase 3 streak economy: reward gates (B+), director/loot bias, core-hit break.
 * Free ammo drip is disabled — rounds come from kill strips / stash.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {StyleMeter} from '../src/styleMeter';
import {
 STREAK, StyleStreak, applyAmmoDrip, streakRewardsActive, streakRewardRank,
 streakAmmoDrip, streakDirectorDelay, streakDirectorTargetSoft, streakLootRoundsBonus,
 streakPickupRadiusBonus, isCoreStreakBreak,
} from '../src/styleStreak';
import {Mission} from '../src/simulation';
import {PISTOL} from '../src/playerPistol';

test('reward gates: D/C off; B/A/S+ on with director / loot tables; ammo drip zeroed',()=>{
 assert.equal(streakRewardsActive(0),false); // D
 assert.equal(streakRewardsActive(1),false); // C
 assert.equal(streakRewardRank(2),'B');
 assert.equal(streakRewardRank(3),'A');
 assert.equal(streakRewardRank(4),'S');
 assert.equal(streakAmmoDrip(2),0,'no free streak ammo');
 assert.equal(streakAmmoDrip(5),0);
 assert.ok(Object.values(STREAK.ammoRounds).every(n=>n===0));
 assert.ok(streakDirectorDelay(4)>streakDirectorDelay(2));
 assert.equal(streakDirectorTargetSoft(2),0);
 assert.equal(streakDirectorTargetSoft(4),1);
 assert.equal(streakLootRoundsBonus(2),0,'no free corpse rounds on streak');
 assert.equal(streakLootRoundsBonus(5),0);
 assert.ok(Object.values(STREAK.lootRoundsBonus).every(n=>n===0));
 assert.equal(streakPickupRadiusBonus(1),0);
 assert.equal(streakPickupRadiusBonus(2),STREAK.pickupRadiusBonus);
});

test('ammo drip prefers mag top-up when mag is low; caps at max / reserveMax',()=>{
 const lowMag=applyAmmoDrip({mag:1,maxMag:8,reserve:10},2,PISTOL.reserveMax);
 assert.equal(lowMag.mag,3);
 assert.equal(lowMag.reserve,10);
 assert.equal(lowMag.applied,2);

 const fullMag=applyAmmoDrip({mag:8,maxMag:8,reserve:10},2,PISTOL.reserveMax);
 assert.equal(fullMag.mag,8);
 assert.equal(fullMag.reserve,12);
 assert.equal(fullMag.applied,2);

 const capped=applyAmmoDrip({mag:8,maxMag:8,reserve:PISTOL.reserveMax},5,PISTOL.reserveMax);
 assert.equal(capped.applied,0);
});

test('StyleStreak: B+ rewards active but ammo drip stays zero; core hit breaks rewards',()=>{
 const s=new StyleStreak();
 s.syncTier(0);
 assert.equal(s.tickAmmo(10),0,'D rank drips nothing');
 s.syncTier(2);
 assert.equal(s.rewarding,true);
 assert.equal(s.tickAmmo(10),0,'free ammo drip disabled');
 assert.equal(s.tickAmmo(10+STREAK.ammoInterval),0);

 assert.equal(isCoreStreakBreak(STREAK.coreBreakMinDamage),true);
 assert.equal(s.noteCoreHit(12,20),true);
 assert.equal(s.brokenAt,20);
 assert.equal(s.rewarding,false);
 assert.equal(s.tickAmmo(30),0,'rewards stop after break');
 s.syncTier(2);
 assert.equal(s.rewarding,false);
 s.syncTier(1); // C after breakStreak
 assert.equal(s.rewarding,false);
 s.syncTier(2);
 assert.equal(s.rewarding,true);
 assert.equal(s.tickAmmo(40),0);
});

test('StyleMeter.breakStreak demotes B+ to C; hurt still slices below B',()=>{
 const m=new StyleMeter();
 for(let i=0;i<20;i++)m.record({action:'scrape',mods:['slide']});
 assert.ok(m.tier>=2,`expected B+, got tier ${m.tier}`);
 m.breakStreak();
 assert.equal(m.rank,'C');
 assert.ok(Math.abs(m.view().fill-.5)<1e-6);
 m.breakStreak(); // below B → ordinary hurt
 assert.ok(m.tier<=1);
});

test('death while streaking queues corpse urge; stash/knife path unchanged',()=>{
 const s=new StyleStreak();
 s.syncTier(4);
 s.noteDeath(5);
 assert.equal(s.consumeDeathUrge(),STREAK.deathUrge);
 assert.equal(s.consumeDeathUrge(),null);
 assert.equal(s.rewarding,false);

 // Killing blow that just broke the streak still urges.
 const s2=new StyleStreak();
 s2.syncTier(3);
 assert.equal(s2.noteCoreHit(20,8),true);
 s2.noteDeath(8.02);
 assert.equal(s2.consumeDeathUrge(),STREAK.deathUrge);

 // Broke earlier, died cold — no urge.
 const s3=new StyleStreak();
 s3.syncTier(3);
 s3.noteCoreHit(10,1);
 s3.syncTier(1);
 s3.noteDeath(20);
 assert.equal(s3.consumeDeathUrge(),null);
});

test('Mission wires streak: sync + core-hit break gate; no free ammo drip',()=>{
 const m=new Mission(true);
 m.director.enabled=false;
 m.inventory[0]='gun';
 m.pistol.mag=1;m.pistol.maxMag=PISTOL.magazine;m.pistol.reserve=0;
 m.syncStyleTier(2);
 m.elapsed=STREAK.ammoInterval;
 m.update(0);
 assert.equal(m.lastStreakAmmo,null,'no free streak ammo');
 assert.equal(m.pistol.mag,1);
 assert.equal(m.pistol.reserve,0);

 const pocket=m.pistol.mag+m.pistol.reserve;
 m.hurtPlayer(15,{x:0,y:0,z:0},'test',null);
 assert.ok(m.streak.brokenAt>=0);
 m.syncStyleTier(2);
 m.elapsed+=STREAK.ammoInterval;
 assert.equal(m.streak.tickAmmo(m.elapsed),0);
 assert.equal(m.pistol.mag+m.pistol.reserve,pocket);
});
