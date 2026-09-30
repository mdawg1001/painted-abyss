import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Gait,gaitPose,stepFrequency,stepLength,runWeight,toeOffPhase,wadingDrag,
 GAIT_SPEED,GAIT_ACCEL,BODY,WALK_CAMERA_MOTION,
} from '../src/gait';
import {Mission,canWalk,EXIT,FLOOR_Y,BREATH_WALK_WATER,WALK_SPEED,WALK_SPRINT} from '../src/simulation';

const DEG=180/Math.PI;
const sample=(v:number,f:(p:ReturnType<typeof gaitPose>)=>number,n=400)=>Array.from({length:n},(_,i)=>f(gaitPose(i/n,v)));
const p2p=(xs:number[])=>Math.max(...xs)-Math.min(...xs);
const argmin=(xs:number[])=>xs.indexOf(Math.min(...xs))/xs.length;

test('cadence and step length follow human speed relations',()=>{
 // Normal adults: ~100–120 steps/min around 1.2–1.6 m/s; running ~155–180 steps/min.
 const cad=(v:number)=>stepFrequency(v)*60;
 assert.ok(cad(1.4)>105&&cad(1.4)<120,`1.4 m/s → ${cad(1.4).toFixed(0)} steps/min`);
 assert.ok(cad(.8)<cad(1.4)&&cad(1.4)<cad(2),'cadence rises with speed');
 assert.ok(stepLength(1.4)>.65&&stepLength(1.4)<.85,`step ${stepLength(1.4).toFixed(2)} m`);
 assert.ok(cad(GAIT_SPEED.run)>155&&cad(GAIT_SPEED.run)<185,`run ${cad(GAIT_SPEED.run).toFixed(0)} steps/min`);
 assert.ok(stepLength(GAIT_SPEED.run)>1&&stepLength(GAIT_SPEED.run)<1.5,'running steps are longer');
 // Walk→run switch near 2 m/s (Froude ≈ 0.5).
 assert.equal(runWeight(1.6),0);assert.equal(runWeight(3),1);
 assert.equal(WALK_SPEED,GAIT_SPEED.walk);assert.equal(WALK_SPRINT,GAIT_SPEED.run);
});

test('walking pelvis: inverted pendulum rise/fall, lateral sway, 60/40 stance/swing',()=>{
 const v=1.4;
 const y=sample(v,p=>p.pelvis.y);
 // Vertical excursion ~3–5 cm peak-to-peak at normal speed, twice per stride, lowest at heel strike.
 assert.ok(p2p(y)>.03&&p2p(y)<.055,`vertical ${(p2p(y)*100).toFixed(1)} cm`);
 const lowAt=argmin(y);
 assert.ok(Math.min(Math.abs(lowAt),Math.abs(lowAt-.5),Math.abs(lowAt-1))<.03,`lowest at double support (φ=${lowAt})`);
 const hi=y.indexOf(Math.max(...y))/y.length;
 assert.ok(Math.min(Math.abs(hi-.25),Math.abs(hi-.75))<.03,'highest at midstance');
 // Lateral sway once per stride, ~3–5 cm total at brisk speed, toward the stance leg.
 const x=sample(v,p=>p.pelvis.x);
 assert.ok(p2p(x)>.025&&p2p(x)<.06,`lateral ${(p2p(x)*100).toFixed(1)} cm`);
 assert.ok(gaitPose(.2,v).pelvis.x<0&&gaitPose(.7,v).pelvis.x>0,'shifts over the left foot in left stance, right in right');
 // Stance 60 % of the cycle.
 assert.equal(toeOffPhase(0),.6);
 let stance=0;for(let i=0;i<400;i++)if(gaitPose(i/400,v).left.stance)stance++;
 assert.ok(Math.abs(stance/400-.6)<.01);
 // Double support: both feet down ~20 % of the cycle.
 let both=0;for(let i=0;i<400;i++){const p=gaitPose(i/400,v);if(p.left.stance&&p.right.stance)both++;}
 assert.ok(Math.abs(both/400-.2)<.02,`double support ${(both/4).toFixed(0)} %`);
});

test('walking joints match clinical ranges: knee, hip, ankle',()=>{
 const v=1.4;
 const knee=sample(v,p=>p.left.knee*DEG),hip=sample(v,p=>p.left.hip*DEG),ankle=sample(v,p=>p.left.ankle*DEG);
 assert.ok(knee[0]<5,'knee nearly straight at heel strike');
 const loading=Math.max(...knee.slice(20,70));
 assert.ok(loading>12&&loading<22,`loading-response knee flexion ${loading.toFixed(0)}°`);
 const swingKnee=Math.max(...knee);
 assert.ok(swingKnee>55&&swingKnee<68,`peak swing knee ${swingKnee.toFixed(0)}°`);
 assert.ok(knee.indexOf(swingKnee)/400>.65&&knee.indexOf(swingKnee)/400<.8,'peak knee flexion in initial swing');
 assert.ok(Math.max(...hip)>25&&Math.max(...hip)<35,'hip flexes ~30° in late swing');
 assert.ok(Math.min(...hip)<-8&&Math.min(...hip)>-22,'hip extends past neutral in terminal stance');
 assert.ok(Math.min(...ankle)<-14,'ankle plantarflexes at push-off');
 assert.ok(Math.max(...ankle)>6,'ankle dorsiflexes as the shin rolls over the foot');
 // Swing foot clears the floor.
 const lift=sample(v,p=>p.left.footLift);
 assert.ok(Math.max(...lift)>.03&&Math.max(...lift)<.2);
});

test('pelvis, trunk, arms and head coordinate like a walker',()=>{
 const v=1.4;
 const rot=sample(v,p=>p.pelvis.rotation*DEG),obl=sample(v,p=>p.pelvis.obliquity*DEG);
 assert.ok(Math.abs(p2p(rot)/2-4)<.6,`pelvic rotation ±${(p2p(rot)/2).toFixed(1)}°`);
 assert.ok(Math.abs(p2p(obl)/2-5)<.6,`pelvic obliquity ±${(p2p(obl)/2).toFixed(1)}°`);
 // Thorax counter-rotates, arms swing opposite to the same-side leg.
 const p0=gaitPose(0,v);
 assert.ok(Math.sign(p0.thoraxYaw)===-Math.sign(p0.pelvis.rotation));
 assert.ok(p0.left.hip>0&&p0.shoulderLeft<0,'left leg forward at left heel strike, left arm back');
 const arm=sample(v,p=>p.shoulderRight*DEG);
 assert.ok(p2p(arm)/2>5&&p2p(arm)/2<12,`arm swing ±${(p2p(arm)/2).toFixed(1)}° (≈8° at 1.5 m/s)`);
 // Gaze stabilisation: residual head pitch/roll stay within a couple of degrees.
 const pitch=sample(v,p=>p.head.pitch*DEG),roll=sample(v,p=>p.head.roll*DEG);
 assert.ok(p2p(pitch)<2&&p2p(roll)<2,'head rotation is mostly cancelled');
 assert.ok(p2p(sample(v,p=>p.head.y))>.025,'but the eye still rises and falls with the body');
});

test('running: spring-mass bounce, flight phase, bigger knee and arm motion',()=>{
 const v=GAIT_SPEED.run;
 const y=sample(v,p=>p.pelvis.y);
 assert.ok(p2p(y)>.055&&p2p(y)<.1,`run bounce ${(p2p(y)*100).toFixed(1)} cm`);
 const lowAt=argmin(y);
 assert.ok(Math.min(Math.abs(lowAt-.15),Math.abs(lowAt-.65))<.04,'lowest at midstance, not at contact');
 let flight=0;for(let i=0;i<400;i++){const p=gaitPose(i/400,v);if(!p.left.stance&&!p.right.stance)flight++;}
 assert.ok(flight/400>.2,'both feet off the ground between steps');
 assert.ok(Math.max(...sample(v,p=>p.left.knee*DEG))>90,'swing knee folds past 90°');
 assert.ok(p2p(sample(v,p=>p.shoulderRight*DEG))/2>18,'arms pump when running');
});

test('starting, stopping and footfalls behave like a person',()=>{
 const g=new Gait();const dt=1/120;
 const strikes:number[]=[];let t=0;
 // Gait initiation: can't jump to full speed; takes ~1–1.5 s.
 for(let i=0;i<Math.round(.5/dt);i++){for(const e of g.step(0,1,false,dt))if(e.kind==='heel-strike')strikes.push(t);t+=dt;}
 assert.ok(g.speed<GAIT_SPEED.walk*.5,'half a second in, still accelerating');
 for(let i=0;i<Math.round(4/dt);i++){for(const e of g.step(0,1,false,dt))if(e.kind==='heel-strike')strikes.push(t);t+=dt;}
 assert.ok(Math.abs(g.speed-GAIT_SPEED.walk)<1e-6);
 // Steady cadence: heel strikes spaced by 1/stepFrequency.
 const gaps=strikes.slice(-4).map((s,i,a)=>i?s-a[i-1]:0).slice(1);
 for(const gap of gaps)assert.ok(Math.abs(gap-1/stepFrequency(GAIT_SPEED.walk))<.02,`step interval ${gap.toFixed(3)}`);
 // Alternating feet.
 const feet:string[]=[];for(let i=0;i<Math.round(2/dt);i++)for(const e of g.step(0,1,false,dt))if(e.kind==='heel-strike')feet.push(e.foot);
 for(let i=1;i<feet.length;i++)assert.notEqual(feet[i],feet[i-1]);
 // Stopping: decelerate within a step or two and settle on both feet (φ at 0 or 0.5).
 let stopT=0;while(g.speed>0&&stopT<3){g.step(0,0,false,dt);stopT+=dt;}
 assert.ok(stopT<GAIT_SPEED.walk/GAIT_ACCEL.walkDown+.05,`stopped in ${stopT.toFixed(2)} s`);
 for(let i=0;i<Math.round(1.5/dt);i++)g.step(0,0,false,dt);
 assert.ok(Math.abs(g.phase)<1e-6||Math.abs(g.phase-.5)<1e-6,'settles in double support');
 // Speed dips at midstance, peaks through double support.
 const r=new Gait();r.speed=1.4;r.moving=1;r.phase=.25;const mid=r.instantaneousSpeed();r.phase=0;const ds=r.instantaneousSpeed();
 assert.ok(ds>mid&&Math.abs(ds/mid-1)<.15);
});

test('direction limits: no running backwards, sidesteps and backsteps are slower',()=>{
 assert.equal(Gait.maxSpeed(0,1,false),GAIT_SPEED.walk);
 assert.equal(Gait.maxSpeed(0,1,true),GAIT_SPEED.run);
 assert.equal(Gait.maxSpeed(0,-1,true),GAIT_SPEED.walkBack);
 assert.equal(Gait.maxSpeed(1,0,false),GAIT_SPEED.walkSide);
 assert.ok(GAIT_SPEED.walkBack<GAIT_SPEED.walk&&GAIT_SPEED.walkSide<GAIT_SPEED.walk);
});

test('wading slows the stride; deep water forces a swim; dry cave floor is walkable',()=>{
 assert.equal(wadingDrag(0),1);
 assert.ok(wadingDrag(.5)>.6&&wadingDrag(.5)<.8,'knee-deep');
 assert.ok(wadingDrag(1.1)<.4,'waist-deep');
 const m=new Mission(true);
 assert.equal(canWalk({...EXIT},m.breathWaterY),true);
 assert.equal(canWalk({...EXIT},BREATH_WALK_WATER+.01),false);
 assert.ok(BODY.hipHeight<BODY.eyeAboveFloor&&FLOOR_Y>0);
});

test('first-person camera carries 30 % of the head path (70 % less shake)',()=>{
 assert.equal(WALK_CAMERA_MOTION,.3);
 const cam=sample(1.4,p=>p.head.y*WALK_CAMERA_MOTION);
 const body=sample(1.4,p=>p.head.y);
 assert.ok(Math.abs(p2p(cam)/p2p(body)-.3)<1e-9);
 assert.ok(p2p(cam)<.015,`camera rise/fall ${(p2p(cam)*100).toFixed(1)} cm`);
});
