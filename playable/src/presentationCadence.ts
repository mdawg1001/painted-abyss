/** Presentation only: AI, collision, shots and sound continue at the normal tick rate. */
export class PresentationCadence {
 private elapsed:number[]=[];
 step(slot:number,dt:number,distance:number,urgent=false):number|null{
  const elapsed=(this.elapsed[slot]??0)+dt;
  const interval=distance>40?.2:distance>20?.1:0;
  if(urgent||dt===0||elapsed+1e-6>=interval){this.elapsed[slot]=0;return elapsed;}
  this.elapsed[slot]=elapsed;return null;
 }
 reset(slot:number){this.elapsed[slot]=0;}
}
