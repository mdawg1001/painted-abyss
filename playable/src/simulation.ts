// Shared, deterministic gameplay rules. Rendering and input live in CaveWorld.
export type Point={x:number;y:number;z:number};
export type Item='stone'|'wood'|'flare'|'air'|'bandage'|'relic';
export type Pickup={id:number;item:Item;position:Point};
export type PredatorState='patrol'|'alert'|'chase'|'search';
export const CELL=4;
export const START:Point={x:0,y:3,z:-12};
export const RELIC:Point={x:0,y:2,z:-112};
export const EXIT:Point={x:32,y:3,z:-12};
export const ITEMS:Record<Item,{name:string;short:string;description:string}>={
 stone:{name:'Limestone',short:'Stone',description:'Salvage. Safe to swap for the relic.'},
 wood:{name:'Driftwood',short:'Wood',description:'Salvage. Safe to swap for the relic.'},
 flare:{name:'Signal flare',short:'Flare',description:'R · Deploy a 12-second distraction.'},
 air:{name:'Air reserve',short:'Air',description:'R · Restore up to 60 seconds of air.'},
 bandage:{name:'Sealant kit',short:'Sealant',description:'R · Repair 45 suit integrity.'},
 relic:{name:'Ammonite relic',short:'Relic',description:'Carry this to the extraction pool.'},
};
export const cells=new Set<string>();
const rect=(a:number,b:number,c:number,d:number)=>{for(let col=a;col<=b;col++)for(let row=c;row<=d;row++)cells.add(`${col},${row}`);};
rect(8,14,1,5);rect(10,12,5,11);rect(4,18,11,24);rect(10,12,24,26);rect(8,14,26,30);
for(let c=9;c<=12;c++)for(let r=15;r<=20;r++)cells.delete(`${c},${r}`);
// A single-cell fissure separates the predator's cavern from the extraction pool.
rect(19,19,4,20);rect(18,19,20,21);rect(17,21,1,4);
export const world=(col:number,row:number):Point=>({x:(col-11)*CELL,y:3,z:-row*CELL});
export const tile=(p:Point)=>({col:Math.round(p.x/CELL)+11,row:Math.round(-p.z/CELL)});
export const distance=(a:Point,b:Point)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
export function isOpen(x:number,z:number){return cells.has(`${Math.round(x/CELL)+11},${Math.round(-z/CELL)}`);}
export function fits(p:Point,r=.48){
 if(p.y<.65||p.y>7.1)return false;
 for(let a=0;a<8;a++)if(!isOpen(p.x+Math.cos(a*Math.PI/4)*r,p.z+Math.sin(a*Math.PI/4)*r))return false;
 return isOpen(p.x,p.z);
}
export function moveBody(p:Point,dx:number,dy:number,dz:number,r=.48){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dy,dz)/.25));
 for(let n=0;n<steps;n++)for(const [axis,delta] of [['x',dx],['y',dy],['z',dz]] as const){const next={...p,[axis]:p[axis]+delta/steps};if(fits(next,r))p[axis]=next[axis];}
}
export function visible(a:Point,b:Point){const n=Math.ceil(distance(a,b)/.4);for(let i=0;i<=n;i++){const t=n?i/n:0;if(!isOpen(a.x+(b.x-a.x)*t,a.z+(b.z-a.z)*t))return false;}return true;}
function predatorCell(col:number,row:number){return col>=4&&col<=18&&row>=12&&row<=28&&cells.has(`${col},${row}`);}
export function pathBetween(a:Point,b:Point){
 const from=tile(a),to=tile(b),start=`${from.col},${from.row}`,end=`${to.col},${to.row}`;
 if(!predatorCell(to.col,to.row))return [];
 const queue=[start],parents=new Map<string,string|null>([[start,null]]);
 for(let i=0;i<queue.length;i++){const key=queue[i];if(key===end)break;const [c,r]=key.split(',').map(Number);for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(predatorCell(c+dc,r+dr)&&!parents.has(k)){parents.set(k,key);queue.push(k);}}}
 if(!parents.has(end))return [];const path:Point[]=[];let key:string|null=end;
 while(key&&key!==start){const [c,r]=key.split(',').map(Number);path.unshift(world(c,r));key=parents.get(key)!;}return path;
}
export const lookDelta=(yaw:number,pitch:number,dx:number,dy:number)=>({yaw:yaw-dx*.0021,pitch:Math.max(-1.4,Math.min(1.4,pitch-dy*.0021))});
/**
 * Browsers that deny pointer lock cannot move the pointer beyond the window.
 * Holding the pointer in either outer edge therefore supplies continuous yaw,
 * allowing unlimited horizontal rotation without requiring click-drag.
 */
export function edgeTurn(clientX:number,left:number,width:number){
 if(width<=0)return 0;
 const x=Math.max(0,Math.min(1,(clientX-left)/width));
 const edge=.14;
 if(x<edge)return -(edge-x)/edge;
 if(x>1-edge)return (x-(1-edge))/edge;
 return 0;
}
export class Mission {
 position={...START};health=100;air=240;elapsed=0;stamina=100;torch=true;
 inventory:(Item|null)[]=['stone','wood','flare','air','bandage'];selected=0;
 pickups:Pickup[]=[{id:1,item:'relic',position:{...RELIC}},{id:2,item:'flare',position:{x:-20,y:2,z:-56}}];nextId=3;
 pending:number|null=null;outcome:'playing'|'won'|'lost'='playing';reason='';notice='Follow the turquoise markers into the cave.';noticeUntil=7;
 predator={position:world(16,19),state:'patrol' as PredatorState,timer:0,lost:0,lastKnown:world(16,19),waypoint:0,bite:0,heading:0};
 decoy:{position:Point;until:number}|null=null;
 patrol=[world(16,22),world(6,22),world(6,13),world(16,13)];
 get hasRelic(){return this.inventory.includes('relic');}
 say(message:string){this.notice=message;this.noticeUntil=this.elapsed+4.5;}
 nearest(){return this.pickups.filter(p=>distance(p.position,this.position)<3.2&&visible(this.position,p.position)).sort((a,b)=>distance(a.position,this.position)-distance(b.position,this.position))[0];}
 interact(){
  if(this.outcome!=='playing')return;
  if(distance(this.position,EXIT)<4){if(this.hasRelic){this.outcome='won';this.reason='Relic secured. You made it back to the light.';}else this.say('Extraction needs the ammonite relic. Follow the turquoise markers.');return;}
  const pickup=this.pending===null?this.nearest():this.pickups.find(p=>p.id===this.pending);
  if(!pickup||distance(pickup.position,this.position)>3.2||!visible(this.position,pickup.position)){this.pending=null;return;}
  let slot=this.inventory.indexOf(null);
  if(slot<0&&this.pending===null){this.pending=pickup.id;this.say('All five slots are full. Choose 1–5, then E to swap.');return;}
  if(slot<0)slot=this.selected;
  const old=this.inventory[slot];this.inventory[slot]=pickup.item;this.selected=slot;
  this.pickups=this.pickups.filter(p=>p.id!==pickup.id);if(old)this.pickups.push({id:this.nextId++,item:old,position:{...this.position,y:Math.max(1,this.position.y-.4)}});
  this.pending=null;this.say(pickup.item==='relic'?'Relic recovered! Follow the amber markers to extraction.':`${ITEMS[pickup.item].name} collected.`);
  if(pickup.item==='relic'){this.predator.state='alert';this.predator.timer=0;this.predator.lastKnown={...this.position};}
 }
 drop(){const item=this.inventory[this.selected];if(!item)return;this.pickups.push({id:this.nextId++,item,position:{...this.position,y:Math.max(1,this.position.y-.4)}});this.inventory[this.selected]=null;this.pending=null;this.say(`${ITEMS[item].name} dropped. You can pick it up again.`);}
 use(){const item=this.inventory[this.selected];if(item==='air'){if(this.air>=240){this.say('Air is already full.');return;}this.air=Math.min(240,this.air+60);this.say('Air reserve connected.');}
 else if(item==='bandage'){if(this.health>=100){this.say('Suit integrity is already full.');return;}this.health=Math.min(100,this.health+45);this.say('Suit repaired.');}
 else if(item==='flare'){this.decoy={position:{...this.position},until:this.elapsed+12};this.predator.state='search';this.predator.timer=0;this.predator.lastKnown={...this.position};this.say('Flare deployed. Move away while it investigates.');}
 else {this.say(item?ITEMS[item].description:'This slot is empty.');return;}this.inventory[this.selected]=null;this.pending=null;}
 update(dt:number,sprinting=false){
  if(this.outcome!=='playing')return;dt=Math.min(dt,.05);this.elapsed+=dt;this.air=Math.max(0,this.air-dt);this.stamina=Math.max(0,Math.min(100,this.stamina+(sprinting?-18:17)*dt));
  if(this.air<=0){this.outcome='lost';this.reason='Your air ran out. Use the reserve earlier or take a shorter route.';return;}
  if(this.pending!==null&&!this.pickups.some(p=>p.id===this.pending&&distance(p.position,this.position)<3.2))this.pending=null;
  const p=this.predator;const d=distance(p.position,this.position);const canSee=visible(p.position,this.position);
  const sense=canSee&&(d<4.5||d<(this.torch?16:sprinting?13:8));
  const safe=!predatorCell(tile(this.position).col,tile(this.position).row);
  p.timer+=dt;p.bite=Math.max(0,p.bite-dt);
  if(this.decoy&&this.elapsed>=this.decoy.until)this.decoy=null;
  if(this.decoy&&d>4.5){p.state='search';p.timer=0;p.lastKnown={...this.decoy.position};}
  else if(p.state==='patrol'&&sense&&!safe){p.state='alert';p.timer=0;p.lastKnown={...this.position};}
  else if(p.state==='alert'){
   if(sense&&!safe)p.lastKnown={...this.position};
   if(p.timer>1.6){p.state=sense&&!safe?'chase':'search';p.timer=0;p.lost=0;}
  }else if(p.state==='chase'){
   if(sense&&!safe){p.lastKnown={...this.position};p.lost=0;}else p.lost+=dt;
   if(p.lost>2.5){p.state='search';p.timer=0;}
  }else if(p.state==='search'){
   if(sense&&!safe){p.state='chase';p.timer=0;p.lost=0;}else if(p.timer>7){p.state='patrol';p.timer=0;}
  }
  const goal=p.state==='patrol'?this.patrol[p.waypoint]:p.lastKnown;
  if(p.state==='patrol'&&distance(p.position,goal)<1.1)p.waypoint=(p.waypoint+1)%this.patrol.length;
  const path=pathBetween(p.position,goal);const target=path[0]||(visible(p.position,goal)&&predatorCell(tile(goal).col,tile(goal).row)?goal:p.position);
  const dx=target.x-p.position.x,dz=target.z-p.position.z,len=Math.hypot(dx,dz),speed=p.state==='chase'?3.4:p.state==='alert'?.7:1.8;
  if(len>.05){p.heading=Math.atan2(-dz,dx);moveBody(p.position,dx/len*Math.min(len,speed*dt),0,dz/len*Math.min(len,speed*dt),1.3);}
  p.position.y+=((p.state==='chase'?Math.max(1.2,Math.min(6.2,this.position.y)):3)-p.position.y)*Math.min(1,dt*2);
  if(p.state==='chase'&&!safe&&canSee&&distance(p.position,this.position)<3.2&&p.bite<=0){this.health=Math.max(0,this.health-25);p.bite=1.7;this.say('Suit breached! Sprint to cover or deploy a flare.');if(this.health<=0){this.outcome='lost';this.reason='The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe.';}}
 }
}
