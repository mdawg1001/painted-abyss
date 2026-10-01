/**
 * Combat Feedback Manager — punchy screen shake + brief hitstop.
 *
 * `triggerScreenShake` drives a decaying noise offset on the camera (heavy fire /
 * taking damage). `triggerHitstop` freezes sim updates for a readable beat while
 * rendering continues, so critical hits and kills feel weighty without a full pause.
 *
 * Pure module (no Three.js) so feel tuning stays unit-testable; CaveWorld samples
 * the offset into camera space each frame. Phase 4: calm combat (`prefers-reduced-motion`)
 * softens shake / hitstop at the trigger edge so every call site stays allocation-light.
 */

import { CALM_COMBAT, calmHitstopMs, combatCalmActive } from './combatCalm';

export type FeedbackOffset={x:number;y:number;z:number};

export type FeedbackTick={
 /** Sim dt: 0 while hitstopping, else the real frame dt. */
 simDt:number;
 /** Camera-local shake offset (metres) for this frame. */
 offset:FeedbackOffset;
 /** Current shake envelope (0..intensity). */
 amplitude:number;
 /** True while hitstop still has time left. */
 hitstopping:boolean;
};

const ZERO:FeedbackOffset={x:0,y:0,z:0};

/** Presets — punchy but not nauseating; sits between the first quiet pass and the loud crank. */
export const COMBAT_FEEDBACK={
 /** Player gunshot — short sharp punch. */
 gunFire:{intensity:.55,duration:.14},
 /** Heavier carbine / close blast. */
 gunFireHeavy:{intensity:.9,duration:.2},
 /** Guard round that lands on you. */
 takeDamage:{intensity:1.15,duration:.28},
 /** Guard melee that lands. */
 meleeHit:{intensity:1.55,duration:.32},
 /** Guardian / predator connected hit. */
 predatorHit:{intensity:1.3,duration:.28},
 /**
  * Headshot / kill hitstop (ms). Kept to a few frames: a punch you feel, never a pause you see.
  * At 150 ms the kill freeze read as the game locking up.
  */
 hitstopHead:35,
 hitstopKill:55,
 /** Magnetism scrape — brief readable tick, not a freeze. */
 scrapeTick:{intensity:.35,duration:.08},
 hitstopScrape:45,
 /** Enemy graze / skin-of-teeth miss — light camera kiss. */
 grazeTick:{intensity:.28,duration:.07},
 /** Ego Savior lethal save — micro freeze, then hero clear (see EGO_SAVIOR.hitstopMs). */
 hitstopEgoSave:48,
 egoSaveShake:{intensity:1.05,duration:.18},
} as const;

export class CombatFeedbackManager{
 private shakeIntensity=0;
 private shakeDuration=0;
 private shakeElapsed=0;
 private hitstopRemainingMs=0;

 /**
  * Shake the camera with a random/noise offset for `duration` seconds.
  * Overlapping calls keep the stronger remaining envelope.
  */
 triggerScreenShake(intensity:number,duration:number):void{
  // Inline calm scale — no object alloc on the fire / hurt path.
  let i=intensity,d=duration;
  if(combatCalmActive()){i*=CALM_COMBAT.shakeScale;d*=CALM_COMBAT.shakeDurationScale;}
  i=Math.max(0,i);d=Math.max(0,d);
  if(d<=0||i<=0)return;
  const remain=Math.max(0,this.shakeDuration-this.shakeElapsed);
  const current=remain>0?this.shakeIntensity*(remain/Math.max(this.shakeDuration,1e-6)):0;
  if(i>=current){
   this.shakeIntensity=i;
   this.shakeDuration=d;
   this.shakeElapsed=0;
  }else{
   this.shakeDuration=this.shakeElapsed+Math.max(remain,d);
  }
 }

 /**
  * Momentarily pause sim updates (not rendering) for `durationMillis`.
  * Stacks by taking the longer remaining freeze.
  */
 triggerHitstop(durationMillis:number):void{
  const ms=Math.max(0,calmHitstopMs(durationMillis));
  if(ms<=0)return;
  this.hitstopRemainingMs=Math.max(this.hitstopRemainingMs,ms);
 }

 get isHitstopping():boolean{return this.hitstopRemainingMs>0;}

 /**
  * Advance real-time timers. Call every rendered frame with wall-clock `realDt`.
  * `phaseTime` feeds the noise function (keep advancing during hitstop).
  */
 tick(realDt:number,phaseTime=0):FeedbackTick{
  const dt=Math.max(0,realDt);
  // Any frame that begins while hitstopping freezes the whole frame (even if the
  // remaining millis expire mid-tick) so a 50 ms stop isn't eaten by a 40 ms dt.
  const beganHitstopping=this.hitstopRemainingMs>0;
  if(beganHitstopping){
   this.hitstopRemainingMs=Math.max(0,this.hitstopRemainingMs-dt*1000);
  }
  const hitstopping=this.hitstopRemainingMs>0;
  const simDt=beganHitstopping?0:dt;

  let amplitude=0;
  if(this.shakeDuration>0&&this.shakeElapsed<this.shakeDuration){
   // Shake keeps moving during hitstop so the freeze still feels alive.
   this.shakeElapsed+=dt;
   const t=Math.min(1,this.shakeElapsed/this.shakeDuration);
   const ease=(1-t)*(1-t);
   amplitude=this.shakeIntensity*ease;
  }else{
   this.shakeIntensity=0;
   this.shakeDuration=0;
   this.shakeElapsed=0;
  }

  const offset=amplitude>1e-6?noiseOffset(phaseTime,amplitude):ZERO;
  return{simDt,offset,amplitude,hitstopping};
 }

 reset():void{
  this.shakeIntensity=0;
  this.shakeDuration=0;
  this.shakeElapsed=0;
  this.hitstopRemainingMs=0;
 }
}

/**
 * Deterministic multi-sine “noise” scaled by amplitude.
 * At intensity 1 the peak offset is ~8–10 cm — readable over bob, not a whip.
 */
export function noiseOffset(phaseTime:number,amplitude:number):FeedbackOffset{
 const a=amplitude;
 return{
  x:Math.sin(phaseTime*53.1)*a*.08+Math.sin(phaseTime*97.3)*a*.036,
  y:Math.cos(phaseTime*41.7)*a*.07+Math.sin(phaseTime*67.9)*a*.03,
  z:Math.sin(phaseTime*29.5+1.7)*a*.04,
 };
}
