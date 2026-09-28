import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission, STASH_CAPACITY, STASH_POSITION, STASH_AMMO_PACK, WALK_EYE_Y,
 breathHatchSpawn, writeStash, readStash, emptyStash, stashInteractPrompt,
} from '../src/simulation';

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

test('deposit gun and ammo, die empty-handed — stash still holds them after wake',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['gun',null,null,null,null];
 m.selected=0;
 m.pistol.reserve=STASH_AMMO_PACK+4;
 m.interact(); // open
 assert.equal(m.stashOpen,true);
 m.interact(); // store gun
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'));
 assert.equal(m.inventory[0],null);
 m.interact(); // store ammo into next empty
 assert.ok(m.stash.some(s=>s?.kind==='ammo'&&s.amount===STASH_AMMO_PACK));
 const before=structuredClone(m.stash);
 m.respawnAtHatch();
 assert.deepEqual(m.inventory,['knife',null,null,null,null],'wake with knife only; gun stays in stash');
 assert.equal(m.pistol.mag,0);
 assert.equal(m.pistol.reserve,0);
 assert.deepEqual(m.stash,before);
 assert.equal(m.stashOpen,false);
 const persisted=readStash();
 assert.ok(persisted.some(s=>s?.kind==='item'&&s.item==='gun'));
 assert.ok(persisted.some(s=>s?.kind==='ammo'&&s.amount===STASH_AMMO_PACK));
});

test('die with gun and ammo on body — wake with knife; chest unchanged',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['coat',null,null,null,null];m.selected=0;
 m.interact();m.interact(); // open + stash coat so chest is non-empty
 const chestBefore=structuredClone(m.stash);
 m.stashOpen=false;
 const corpse={x:0,y:WALK_EYE_Y,z:8};
 m.position={...corpse};
 m.inventory=['gun',null,null,null,null];
 m.selected=0;
 m.pistol.mag=8;m.pistol.reserve=16;
 const beforePickups=m.pickups.length;
 m.respawnAtHatch();
 assert.deepEqual(m.inventory,['knife',null,null,null,null],'knife only — gun left on corpse');
 assert.equal(m.pistol.mag,0);
 assert.equal(m.pistol.reserve,0);
 assert.deepEqual(m.stash,chestBefore,'hatch chest not wiped');
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='coat'));
 const corpseGun=m.pickups.slice(beforePickups).find(p=>p.item==='gun');
 assert.ok(corpseGun,'gun dropped on corpse');
 assert.equal(corpseGun?.rounds,24);
 assert.ok(!m.inventory.includes('gun'));
 assert.ok(m.inventory.includes('knife'));
});

test('withdraw then new Mission (dive again / reload) still matches localStorage',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['bottle','coat',null,null,null];
 m.selected=0;
 m.interact();m.interact(); // open + store bottle
 m.selected=1;m.stashFocus=1;m.interact(); // store coat
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='bottle'));
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='coat'));
 m.selected=2;
 m.stashFocus=m.stash.findIndex(s=>s?.kind==='item'&&s.item==='bottle');
 m.interact();
 assert.equal(m.inventory[2],'bottle');
 assert.ok(!m.stash.some(s=>s?.kind==='item'&&s.item==='bottle'));
 const left=structuredClone(m.stash);
 const again=new Mission(true);
 assert.deepEqual(again.stash,left);
 assert.ok(again.stash.some(s=>s?.kind==='item'&&s.item==='coat'));
});

test('relic cannot be stored — extract win condition stays on the body',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['relic',null,null,null,null];
 m.selected=0;
 m.interact();
 m.interact();
 assert.equal(m.inventory[0],'relic');
 assert.ok(m.stash.every(s=>s===null));
 assert.match(m.notice,/relic/i);
});

test('corpse loot and chest loot stay separate on death',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['gun','flare',null,null,null];
 m.selected=0;
 m.interact();m.interact(); // stash the gun
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'));
 m.stashOpen=false;
 const corpse={x:0,y:m.position.y,z:0};
 m.position={...corpse};
 m.dropCarriedAt(corpse);
 assert.ok(m.pickups.some(p=>p.item==='flare'));
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'),'gun stayed in the chest');
 assert.ok(!m.pickups.some(p=>p.item==='gun'&&Math.hypot(p.position.x-corpse.x,p.position.z-corpse.z)<2),'gun did not drop on corpse');
});

test('prompts name open / store and capacity is finite',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 assert.equal(stashInteractPrompt(m),'E · Open chest');
 m.stashOpen=true;
 m.inventory=['coat',null,null,null,null];m.selected=0;
 assert.match(stashInteractPrompt(m),/Store/);
 for(let i=0;i<STASH_CAPACITY;i++){
  m.inventory=['coat',null,null,null,null];m.selected=0;
  m.interact();
 }
 assert.equal(m.stash.filter(Boolean).length,STASH_CAPACITY);
 // Full chest + empty focus path: swap into focused filled slot.
 m.stashFocus=0;
 m.inventory=['bottle',null,null,null,null];m.selected=0;
 m.interact();
 assert.equal(m.stash[0]?.kind==='item'&&m.stash[0].item,'bottle');
 assert.equal(m.inventory[0],'coat');
});

test('selectStashFocus picks a slot without transferring; E takes that slot',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['bottle','coat',null,null,null];m.selected=0;
 m.interact(); // open
 m.interact(); // store bottle → slot 0, focus advances
 m.selected=1;m.stashFocus=1;m.interact(); // store coat in slot 1
 assert.equal(m.stash[0]?.kind==='item'&&m.stash[0].item,'bottle');
 assert.equal(m.stash[1]?.kind==='item'&&m.stash[1].item,'coat');
 // Hands empty, knife not held — select slot 1 only.
 m.inventory=[null,null,null,null,null];m.selected=0;
 m.selectStashFocus(1);
 assert.equal(m.stashFocus,1);
 assert.equal(m.stash[1]?.kind==='item'&&m.stash[1].item,'coat','select does not take');
 assert.match(stashInteractPrompt(m),/Take.*[Cc]oat/);
 m.interact();
 assert.equal(m.inventory[0],'coat');
 assert.equal(m.stash[1],null);
 assert.ok(m.stash[0]?.kind==='item'&&m.stash[0].item==='bottle','other slot untouched');
});

test('taking with an empty selected slot keeps other inventory items',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['coat',null,null,null,null];m.selected=0;
 m.interact();m.interact(); // bank coat
 // Knife sits in slot 0; selected empty slot 1 receives the take (not a swap).
 m.inventory=['knife',null,null,null,null];m.selected=1;
 m.pistol.reserve=0;
 m.stashFocus=0;
 m.interact();
 assert.equal(m.inventory[0],'knife','knife kept');
 assert.equal(m.inventory[1],'coat','taken into selected empty');
 assert.equal(m.stash[0],null);
});

test('empty focus does not yank a random filled slot',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['coat',null,null,null,null];m.selected=0;
 m.interact();m.interact();
 m.inventory=[null,null,null,null,null];m.selected=0;
 m.pistol.reserve=0;
 m.stashFocus=2; // empty slot while coat sits in 0
 assert.match(stashInteractPrompt(m),/Close chest/);
 m.interact();
 assert.equal(m.stashOpen,false,'closes instead of auto-taking');
 assert.ok(m.stash[0]?.kind==='item'&&m.stash[0].item==='coat');
});
