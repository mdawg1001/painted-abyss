import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission, STASH_CAPACITY, STASH_POSITION, STASH_AMMO_PACK, WALK_EYE_Y,
 breathHatchSpawn, writeStash, readStash, emptyStash, stashInteractPrompt,
} from '../src/simulation';
import {writeBankedGold} from '../src/gold';

/** In-memory localStorage stand-in for Node tests. */
function mockStorage(){
 const map=new Map<string,string>();
 const store={
  getItem:(k:string)=>map.has(k)?map.get(k)!:null,
  setItem:(k:string,v:string)=>{map.set(k,String(v));},
  removeItem:(k:string)=>{map.delete(k);},
  clear:()=>map.clear(),
 };
 (globalThis as {localStorage?:typeof store}).localStorage=store;
 return store;
}

function atStash(m:Mission){
 m.position={x:STASH_POSITION.x,y:m.position.y,z:STASH_POSITION.z};
}

test('stash sits in the hatch alcove, clear of the relic and corridor centerline',()=>{
 const hatch=breathHatchSpawn();
 assert.ok(Math.hypot(STASH_POSITION.x-hatch.x,STASH_POSITION.z-hatch.z)<6,'within hatch alcove');
 assert.ok(Math.abs(STASH_POSITION.x-hatch.x)>2,'off the corridor gear centerline');
 assert.ok(STASH_POSITION.z>20,'south end near hatch, not deep cave');
 assert.equal(STASH_CAPACITY,5);
});

test('open auto-banks pocket gold into shop money',()=>{
 mockStorage();
 writeStash(emptyStash());
 writeBankedGold(0);
 const m=new Mission(true);
 atStash(m);
 m.gold=2600;m.bankedGold=0;
 m.interact();
 assert.equal(m.stashOpen,true);
 assert.equal(m.gold,0);
 assert.equal(m.bankedGold,2600);
 assert.equal(m.goldEvent?.kind,'bank');
});

test('shop buys a rifle and an upgrade with banked gold',()=>{
 mockStorage();
 writeStash(emptyStash());
 writeBankedGold(0);
 const m=new Mission(true);
 atStash(m);
 m.gold=0;m.bankedGold=5000;
 m.inventory=[null,null,null,null,null];
 m.interact();
 assert.ok(m.buyShopRifle());
 assert.equal(m.inventory[0],'gun');
 assert.ok(m.bankedGold<5000);
 const afterRifle=m.bankedGold;
 assert.ok(m.buyUpgrade('barrel'));
 assert.ok(m.bankedGold<afterRifle);
 assert.equal(m.gunMods.barrel,1);
});

test('drag bag item into chest and take it back out',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['coat','knife',null,null,null];m.selected=0;
 m.interact(); // open
 assert.ok(m.moveInvStash(0,0));
 assert.equal(m.inventory[0],null);
 assert.equal(m.stash[0]?.kind==='item'&&m.stash[0].item,'coat');
 assert.ok(m.moveInvStash(2,0)); // empty slot 2 ← chest 0
 assert.equal(m.inventory[2],'coat');
 assert.equal(m.stash[0],null);
 assert.equal(m.inventory[1],'knife','other bag slots untouched');
});

test('relic and knife are bankable (full freedom)',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['relic','knife',null,null,null];m.selected=0;
 m.interact();
 assert.ok(m.moveInvStash(0,0));
 assert.ok(m.moveInvStash(1,1));
 assert.equal(m.stash[0]?.kind==='item'&&m.stash[0].item,'relic');
 assert.equal(m.stash[1]?.kind==='item'&&m.stash[1].item,'knife');
 assert.equal(m.hasRelic,false,'relic in chest is not on the body');
 assert.ok(m.moveInvStash(0,0));
 assert.equal(m.hasRelic,true);
});

test('deposit gun and ammo, die empty-handed — stash still holds them after wake',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['gun',null,null,null,null];
 m.selected=0;
 m.pistol.reserve=STASH_AMMO_PACK+4;
 m.interact(); // open
 assert.ok(m.moveInvStash(0,0));
 assert.ok(m.depositAmmoPack(1));
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'));
 assert.ok(m.stash.some(s=>s?.kind==='ammo'&&s.amount===STASH_AMMO_PACK));
 const before=structuredClone(m.stash);
 m.respawnAtHatch();
 assert.deepEqual(m.inventory,['knife',null,null,null,null],'wake with knife only; gun stays in stash');
 assert.deepEqual(m.stash,before);
 assert.equal(m.stashOpen,false);
});

test('E toggles open/close; Esc path uses closeStash',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 assert.equal(stashInteractPrompt(m),'E · Open chest');
 m.interact();
 assert.equal(m.stashOpen,true);
 assert.equal(stashInteractPrompt(m),'E · Close chest');
 m.interact();
 assert.equal(m.stashOpen,false);
 m.interact();
 m.closeStash();
 assert.equal(m.stashOpen,false);
});

test('swap within bag and within chest',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['coat','bottle',null,null,null];
 m.interact();
 assert.ok(m.moveInv(0,1));
 assert.equal(m.inventory[0],'bottle');
 assert.equal(m.inventory[1],'coat');
 assert.ok(m.moveInvStash(0,0));
 assert.ok(m.moveInvStash(1,1));
 assert.ok(m.moveStash(0,1));
 assert.equal(m.stash[0]?.kind==='item'&&m.stash[0].item,'coat');
 assert.equal(m.stash[1]?.kind==='item'&&m.stash[1].item,'bottle');
});

test('corpse loot and chest loot stay separate on death',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['gun','flare',null,null,null];
 m.selected=0;
 m.interact();
 assert.ok(m.moveInvStash(0,0));
 m.closeStash();
 const corpse={x:0,y:m.position.y,z:0};
 m.position={...corpse};
 m.dropCarriedAt(corpse);
 assert.ok(m.pickups.some(p=>p.item==='flare'));
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'),'gun stayed in the chest');
});
