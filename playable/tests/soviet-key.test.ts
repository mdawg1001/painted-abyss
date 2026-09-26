/**
 * Main officer + Soviet relic key gate.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,RELIC,WALK_EYE_Y,isMainGuard,liveGuard,pickupInteractPrompt,
 isolateGuards,ITEMS,STASH_POSITION,
} from '../src/simulation';
import {SURVIVAL} from '../src/survivalConfig';
import {createSovietKeyMesh,createSovietKeyPickup,createSovietKeyHeld,createOfficerCap} from '../src/sovietKeyAsset';

/** Put the Soviet key in inventory (tests that skip the officer fight). */
function grantKey(m:Mission){
 const i=m.inventory.indexOf(null);
 if(i>=0)m.inventory[i]='sovietKey';
 else m.inventory[2]='sovietKey';
}

test('exactly one main officer among the opening garrison, away from hatch and relic',()=>{
 const m=new Mission(true);
 const officers=m.guards.filter(g=>g.active&&isMainGuard(g));
 assert.equal(officers.length,1,'exactly one main guard');
 assert.equal(SURVIVAL.roles.officer.armed,true);
 assert.equal(SURVIVAL.director.roleWeights.officer,0,'reinforcements never spawn another officer');
 const o=officers[0];
 assert.ok(liveGuard(o));
 assert.ok(Math.hypot(o.position.x-STASH_POSITION.x,o.position.z-STASH_POSITION.z)>20,'not on the hatch stash');
 assert.ok(Math.hypot(o.position.x-RELIC.x,o.position.z-RELIC.z)>18,'not parked on the relic');
 assert.ok(o.coat,'officer wears the greatcoat silhouette');
 assert.ok(o.home&&o.home.z0>=-88&&o.home.z1<=-52,'west mid-cavern beat');
});

test('relic is locked without the key; prompts read Locked / Unlock',()=>{
 const m=new Mission(true);isolateGuards(m);
 m.position={...RELIC,y:WALK_EYE_Y};
 assert.equal(pickupInteractPrompt(m,'relic'),'E · Locked · needs key');
 m.interact();
 assert.equal(m.hasRelic,false);
 assert.match(m.notice,/Soviet key|Locked/i);
 assert.equal(m.feedbackKind,'blocked');
 grantKey(m);
 assert.equal(pickupInteractPrompt(m,'relic'),'E · Unlock relic');
 assert.equal(pickupInteractPrompt(m,'sovietKey'),'E · Take Soviet key');
});

test('killing the main officer drops the Soviet key; pickup unlocks and consumes the key',()=>{
 const m=new Mission(true);isolateGuards(m,-1);
 const slot=m.guards.find(g=>!g.active)||m.guards[0];
 const g=m.activateGuard(slot,{x:-12,z:-70},0,'officer');
 assert.ok(isMainGuard(g));
 m.position={x:-12,y:WALK_EYE_Y,z:-68};
 m.inventory=['knife',null,null,null,null];m.selected=1;
 m.guardTakeDamage(g,999);
 assert.equal(g.hp,0);
 const key=m.pickups.find(p=>p.item==='sovietKey');
 assert.ok(key,'Soviet key on the corpse');
 assert.ok(Math.hypot(key!.position.x-g.position.x,key!.position.z-g.position.z)<2);
 m.position={x:key!.position.x,y:WALK_EYE_Y,z:key!.position.z};
 // Prefer the key over the pistol drop beside him.
 m.pickups=m.pickups.filter(p=>p.item!=='gun'||!p.rounds);
 m.interact();
 assert.ok(m.inventory.includes('sovietKey'),`got ${JSON.stringify(m.inventory)} notice=${m.notice}`);
 assert.equal(ITEMS.sovietKey.short,'Key');
 m.position={...RELIC,y:WALK_EYE_Y};
 m.interact();
 assert.ok(m.hasRelic);
 assert.equal(m.inventory.includes('sovietKey'),false,'key consumed on unlock');
 assert.match(m.notice,/Relic unlocked|flood|Booby/i);
});

test('dying with the key wakes empty; key stays on the corpse',()=>{
 const m=new Mission(true);isolateGuards(m);
 const corpse={x:-4,y:WALK_EYE_Y,z:-40};
 m.position={...corpse};
 m.inventory=['sovietKey',null,null,null,null];m.selected=0;
 m.respawnAtHatch();
 assert.deepEqual(m.inventory,[null,null,null,null,null]);
 const dropped=m.pickups.filter(p=>p.item==='sovietKey');
 assert.equal(dropped.length,1);
 // Corpse loot sits in a ~0.55 m ring around the body.
 assert.ok(Math.hypot(dropped[0].position.x-corpse.x,dropped[0].position.z-corpse.z)<1.2);
});

test('key mesh builders produce named groups (held, pickup, officer cap)',()=>{
 const mesh=createSovietKeyMesh();
 assert.equal(mesh.name,'sovietKey');
 assert.ok(mesh.getObjectByName('sovietEmblem'));
 assert.ok(mesh.getObjectByName('keyBit'));
 const pickup=createSovietKeyPickup();
 assert.equal(pickup.name,'sovietKeyPickup');
 const held=createSovietKeyHeld();
 assert.equal(held.name,'sovietKeyHeld');
 const cap=createOfficerCap();
 assert.equal(cap.name,'officerCap');
 assert.equal(cap.visible,false);
});

test('soviet key can be stored in the hatch chest like other gear',()=>{
 const m=new Mission(true);isolateGuards(m);
 m.position={x:STASH_POSITION.x,y:WALK_EYE_Y,z:STASH_POSITION.z};
 m.inventory=['sovietKey',null,null,null,null];m.selected=0;
 m.interact(); // open
 m.interact(); // store
 assert.equal(m.inventory[0],null);
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='sovietKey'));
});
