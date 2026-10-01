import {test} from 'node:test';
import assert from 'node:assert/strict';
import {StyleMeter,STYLE_RANKS,STYLE_TUNING,type StyleRankChange} from '../src/styleMeter';

const T=STYLE_TUNING;

test('empty meter has no rank; the first event lands on D and fires a rank-up',()=>{
 const m=new StyleMeter();const seen:StyleRankChange[]=[];m.onRankChange(c=>seen.push(c));
 assert.equal(m.rank,null);
 assert.equal(m.record({action:'hit'}),T.points.hit);
 assert.equal(m.rank,'D');
 assert.deepEqual(seen,[{from:null,to:'D',tier:0,up:true}]);
});

test('ranks run D, C, B, A, S, SS, SSS and a big spike fires once per tier crossed',()=>{
 assert.deepEqual([...STYLE_RANKS],['D','C','B','A','S','SS','SSS']);
 const m=new StyleMeter();const ups:string[]=[];m.onRankChange(c=>{if(c.up)ups.push(c.to!);});
 m.record({action:'monsterKill',mods:['slide','aerial']}); // 600 × 1.6 × 1.5 = 1440
 assert.equal(m.rank,'A');
 assert.deepEqual(ups,['D','C','B','A']);
});

test('modifiers scale: a slide kill beats a kill, aerial stacks on top',()=>{
 const a=new StyleMeter(),b=new StyleMeter(),c=new StyleMeter();
 assert.equal(a.record({action:'kill'}),T.points.kill);
 assert.equal(b.record({action:'kill',mods:['slide']}),Math.round(T.points.kill*T.mods.slide));
 assert.equal(c.record({action:'kill',mods:['slide','aerial']}),Math.round(T.points.kill*T.mods.slide*T.mods.aerial));
});

test('spamming the same action pays less each time; variety and time restore it',()=>{
 const m=new StyleMeter();
 const first=m.record({action:'hit'});
 m.update(T.chainWindow+.1); // break the chain so only freshness moves
 const second=m.record({action:'hit'});
 assert.ok(second<first*.85,`repeat ${second} vs ${first}`);
 m.update(T.chainWindow+.1);
 assert.equal(m.record({action:'headshot'}),T.points.headshot,'a different action is fresh');
 // Plenty of time later the hit is fresh again.
 m.update(20);
 assert.equal(m.record({action:'hit'}),T.points.hit);
});

test('events in quick succession build a chain multiplier, capped',()=>{
 const m=new StyleMeter();
 m.record({action:'hit'});m.update(.5);
 const chained=m.record({action:'headshot'});
 assert.equal(chained,Math.round(T.points.headshot*(1+T.chainStep)));
 for(let i=0;i<40;i++){m.update(.1);m.record({action:i%2?'meleeHit':'closeCall'});}
 assert.ok(m.chain>=10);
 m.update(.1);
 assert.equal(m.record({action:'parry'}),Math.round(T.points.parry*T.chainMax));
});

test('no combat: grace period, then the bar drains down through the tiers to empty',()=>{
 const m=new StyleMeter();const downs:(string|null)[]=[];m.onRankChange(c=>{if(!c.up)downs.push(c.to);});
 m.record({action:'monsterKill'}); // 600: D (300) full, 300 into C
 assert.equal(m.rank,'C');
 const before=m.points;
 m.update(T.graceSeconds-.1);
 assert.equal(m.points,before,'nothing drains inside the grace period');
 m.update(.2);
 assert.ok(m.points<before);
 for(let i=0;i<600;i++)m.update(1/30);
 assert.equal(m.rank,null);
 assert.deepEqual(downs,['D',null]);
});

test('higher ranks drain faster',()=>{
 const low=new StyleMeter();low.record({action:'hit'});
 const high=new StyleMeter();for(let i=0;i<12;i++)high.record({action:(['monsterKill','headshotKill','meleeKill','parry'] as const)[i%4],mods:['slide']});
 assert.ok(high.tier>low.tier);
 low.update(T.graceSeconds);high.update(T.graceSeconds);
 const l0=low.points,h0=high.points;
 low.update(.1);high.update(.1);
 assert.ok(h0-high.points>l0-low.points);
});

test('taking a hit costs part of the bar and can drop a tier (no shake hook for drops)',()=>{
 const m=new StyleMeter();const changes:StyleRankChange[]=[];m.onRankChange(c=>changes.push(c));
 m.record({action:'monsterKill'}); // C, 300 of 400
 changes.length=0;
 m.hurt(); // −240: still C
 assert.equal(m.rank,'C');assert.equal(changes.length,0);
 m.hurt(); // empties the bar: down to D at half
 assert.equal(m.rank,'D');
 assert.equal(changes.length,1);assert.equal(changes[0].up,false);
});

test('SSS caps and stays full; reset clears everything but keeps listeners',()=>{
 const m=new StyleMeter();let n=0;m.onRankChange(()=>n++);
 for(let i=0;i<60;i++)m.record({action:(['monsterKill','headshotKill','meleeKill','parry','closeCall'] as const)[i%5],mods:i%2?['aerial']:['slide']});
 assert.equal(m.rank,'SSS');
 assert.equal(m.view().fill,1);
 m.reset();
 assert.equal(m.rank,null);assert.equal(m.total,0);assert.equal(m.view().feed.length,0);
 const before=n;m.record({action:'hit'});assert.equal(n,before+1);
});

test('feed shows recent actions with modifier labels and fades after a few seconds',()=>{
 const m=new StyleMeter();
 m.record({action:'kill',mods:['slide']});
 assert.equal(m.view().feed[0].label,'SLIDE KILL');
 m.update(T.feedSeconds+.1);
 assert.equal(m.view().feed.length,0);
});
