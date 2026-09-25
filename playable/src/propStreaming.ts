type Position={x:number;z:number};
type Job={id:string;position:Position;radius:number;load:()=>Promise<boolean|void>;state:'waiting'|'loading'|'ready'|'failed';attempts:number;retryAt:number};

/** Prioritise nearby props without competing with the first burst of essential assets. */
export class PropStreaming {
 readonly jobs:Job[]=[];
 private active=0;
 private stopped=false;
 private lastTime=0;
 constructor(private startedAt:number,private concurrency=2,private warmup=1.5){}
 add(id:string,position:Position,load:Job['load'],radius=36){
  if(this.stopped||this.jobs.some(j=>j.id===id))return;
  this.jobs.push({id,position:{...position},radius,load,state:'waiting',attempts:0,retryAt:0});
 }
 update(position:Position,now:number){
  this.lastTime=now;
  if(this.stopped||now-this.startedAt<this.warmup)return;
  const distance=(j:Job)=>Math.hypot(j.position.x-position.x,j.position.z-position.z);
  const nearby=this.jobs.filter(j=>j.state==='waiting'&&j.retryAt<=now&&distance(j)<=j.radius)
   .sort((a,b)=>distance(a)-distance(b));
  for(const job of nearby){
   if(this.active>=this.concurrency)break;
   job.state='loading';job.attempts++;this.active++;
   Promise.resolve().then(()=>this.stopped?false:job.load()).then(ok=>{
    if(ok===false)throw new Error('Prop upgrade did not complete');
    job.state='ready';
   }).catch(()=>{
    job.state=job.attempts<3?'waiting':'failed';job.retryAt=this.lastTime+10;
   }).finally(()=>{this.active--;});
  }
 }
 dispose(){this.stopped=true;this.jobs.length=0;}
}
