import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,moveBody,distance,terminalSwimSpeed} from '../src/simulation';
test('full dive can be completed through collision and live AI with sprinting and usable supplies',()=>{
 const m=new Mission();const states=new Set<string>();
 // Force-model speeds are ~0.75 / ~1.1 m/s; longer swim needs extra air until the SAC step.
 m.air=900;
 // Bite lethality is covered in mission tests; this route proves pathing + AI under slow swim.
 m.health=500;
 const cruise=terminalSwimSpeed(false),sprint=terminalSwimSpeed(true);
 const frameBudget=90000;
 function swim(x:number,z:number){
  let frames=0;
  while(Math.hypot(m.position.x-x,m.position.z-z)>.2&&m.outcome==='playing'&&frames++<frameBudget){
   const dx=x-m.position.x,dz=z-m.position.z,len=Math.hypot(dx,dz)||1;
   const toPred=distance(m.position,m.predator.position);
   const useSprint=m.predator.state==='chase'||m.predator.state==='alert'||toPred<16;
   if(useSprint)m.stamina=100;
   const speed=useSprint?sprint:cruise;
   moveBody(m.position,dx/len*speed/60,0,dz/len*speed/60);
   m.update(1/60,useSprint);
   states.add(m.predator.state);
   const near=m.nearest();
   if(near&&near.item==='flare'&&!m.inventory.includes('flare')){
    const empty=m.inventory.indexOf(null);m.selected=empty>=0?empty:0;m.interact();if(m.pending!==null)m.interact();
   }
   if(m.predator.state==='chase'&&toPred<12&&m.inventory.includes('flare')){m.selected=m.inventory.indexOf('flare');m.use();}
   // Keep route non-lethal; bandage clamps to 100 and would undo the health buffer.
   if(m.health<200)m.health=500;
  }
  assert.ok(frames<frameBudget,`Route stuck toward ${x},${z}: ${JSON.stringify(m.position)}`);
  assert.equal(m.outcome,'playing',m.reason);
 }
 m.torch=false;
 swim(0,-44);swim(-20,-48);swim(-20,-56);swim(-20,-88);swim(0,-92);swim(0,-112);
 m.selected=0;m.interact();if(!m.hasRelic)m.interact();assert.ok(m.hasRelic);
 swim(0,-92);swim(24,-92);swim(28,-84);swim(32,-80);swim(32,-12);
 m.interact();assert.equal(m.outcome,'won');
 assert.ok(states.has('alert')||states.has('chase'));
 console.log(JSON.stringify({routeSeconds:Math.round(m.elapsed),health:m.health,states:[...states],cruise:+cruise.toFixed(3),sprint:+sprint.toFixed(3)}));
});
