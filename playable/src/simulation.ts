// Shared, deterministic gameplay rules. Rendering and input live in CaveWorld.
import { GOLD, UPGRADE, SHOP_RIFLE_PRICE, fmtGold, goldStaminaFactor, goldWalkFactor, noMods, modLevel, modTag, modValue, magBonus, damageMult, spreadMult, jamMult, cycleMult, upgradeCost, readBankedGold, writeBankedGold, nextUpgradeTarget, almostUpgradeLine, type RifleMods, type ModTrack } from './gold';
import { RIFLE, lootStream, jamChance, spreadSigma, scatter, rollDropRounds, rifleIsPrize, rifleName } from './rifleCondition';
import { rollKillLoot, killLootCueFor, isEmptyKillLoot, killLootFeedback, type KillLootCue } from './killLoot';
export type { KillLootCue } from './killLoot';
export { KILL_LOOT, killLootHudLabel, killLootFeedback } from './killLoot';
import { ITEM_BODY, stepBody, submergedFraction, type BodyState } from './propPhysics';
import { steerToward, faceStanding, yawToward, wrapAngle, turnToward, forwardOf, GUARD_STEER_WALK, GUARD_STEER_RUN } from './guardSteering';
import { SURVIVAL, SURVIVAL_COVER, type GuardRole } from './survivalConfig';
import { Director, patrolPosts, nearestFree, pistolDamage, rayWallPoint, smokeBlocks, smokeAlive, smokeLanding, survivalDoors, makeCaches, type SmokeCloud, type SmokeGrenade, type SupplyCache, type SupplyKind } from './survival';
import {
 PISTOL, makePistol, tickPistol, startReload, canFire, spendRound, takeDamage, hitscan,
 playerVelocityMultiplier, playerAssistAngle, magnetizeAim, movingScatterScale,
 type PistolState,
} from './playerPistol';
import {
 classifyPlayerHit, classifyEnemyMiss, isMultiKill, COMBAT_OUTCOME,
 type CombatTag,
} from './combatOutcomes';
import {
 StyleStreak, applyAmmoDrip, streakDirectorDelay, streakDirectorTargetSoft,
 streakLootRoundsBonus, streakPickupRadiusBonus,
} from './styleStreak';
export {
 HITBOX_ASSIST, playerVelocityMultiplier, HitboxScale, dynamicTargetRadius,
 playerAssistAngle, magnetizeAim, movingScatterScale, rotateToward,
} from './playerPistol';
export {
 classifyPlayerHit, classifyEnemyMiss, isMultiKill, COMBAT_OUTCOME, styleActionsForTag,
 type CombatTag,
} from './combatOutcomes';
export {
 STREAK, StyleStreak, applyAmmoDrip, streakRewardsActive, streakDirectorDelay,
 streakDirectorTargetSoft, streakLootRoundsBonus, streakPickupRadiusBonus,
 streakAmmoDrip, streakRewardRank, isCoreStreakBreak,
} from './styleStreak';
import { VALVE_CLOSE_RAD, VALVE_REACH, VALVE_STAND, WHEEL_CENTRE, leakFlowFraction } from './valve';
import {
 STASH_AMMO_PACK, STASH_CAPACITY, STASH_POSITION, STASH_REACH,
 firstEmptyStashSlot, isStashItem, readStash, writeStash,
 type StashCue, type StashItem, type StashSlot,
} from './stash';
export {
 STASH_AMMO_PACK, STASH_CAPACITY, STASH_POSITION, STASH_REACH, STASH_STORAGE_KEY, STASH_YAW,
 emptyStash, isStashItem, readStash, stashSlotLabel, writeStash,
 type StashCue, type StashItem, type StashSlot,
} from './stash';
export type Point={x:number;y:number;z:number};
export type Item='stone'|'wood'|'flare'|'air'|'bandage'|'relic'|'knife'|'gun'|'bottle'|'coat'|'sovietKey'|'gold';
export type Pickup={id:number;item:Item;position:Point;
 /** Rounds still in a dropped pistol (a downed guard's). Undefined for the corridor gun. */
 rounds?:number;
 /** Rifle condition 0..1 (rifleCondition.ts). Undefined = a maintained service rifle. */
 cond?:number;
 /** Upgrades fitted to this rifle (gold.ts). They stay with the rifle wherever it goes. */
 mods?:RifleMods;
 /** Grams, for a gold pickup. */
 amount?:number;
 /** Kill-loot near-miss frame: warm glow, still below prize keep. */
 nearMiss?:boolean;
 /** Just dropped by a swap: ignored by E until you step away, so a double tap cannot swap it straight back. */
 settling?:boolean;
 /** Falling / floating / resting state (propPhysics). Absent until the item first moves. */
 body?:BodyState};
export type PredatorState='patrol'|'alert'|'chase'|'search'|'damaged'|'dead';
/** Corridor Soviet guard FSM (Phase 3). Separate from the cave ichthyosaur. */
export type GuardState='patrol'|'alert'|'chase'|'search';
export type StabResult='hit'|'miss'|'cooldown'|'blocked';
export type ChestKind='military'|'plastic'|'suitcase';
/** Which torn map region a chest yields. */
export type MapFragmentId='west'|'east'|'deep';
export type Chest={id:number;kind:ChestKind;position:Point;yaw:number;open:boolean;fragment:MapFragmentId};
export const CELL=4;
/** Guardian bite reach (m). Knife must stay shorter so stabbing means mutual danger. */
export const BITE_RANGE=3.2;
/** Forward melee stab reach (m) — inside bite range. */
export const KNIFE_RANGE=2.2;
/** Half-angle of the stab cone (radians) ≈ 50°. */
export const KNIFE_CONE=.87;
export const PREDATOR_HP_MAX=100;
/** Chunk damage per connected stab. Three hits leave ≤15% HP (break-off); fourth kills. */
export const KNIFE_DAMAGE=30;
/** Remaining HP at which a living guardian breaks off the chase (85% damage taken). */
export const PREDATOR_BREAK_HP=PREDATOR_HP_MAX*.15;
/** Seconds between stabs. Short enough that rapid clicks land as rapid stabs. */
export const KNIFE_COOLDOWN=.26;
/** Brief AI interrupt after a wound. */
export const PREDATOR_FLINCH=.42;
/** Playable water column: floor → surface (ceiling of `fits`). World Y is metres. */
export const FLOOR_Y=.65;
export const SURFACE_Y=7.1;
export const START:Point={x:0,y:3,z:-12};
export const RELIC:Point={x:0,y:2,z:-112};
/** Stone plinth the relic lies on. Its top is the support height for anything resting there. */
export const RELIC_PLINTH={x:0,z:-112,radius:1.05,height:1.0} as const;
/**
 * Support height under (x, z): the bunker floor, or the plinth top. Loose items
 * rest here; `Pickup.position.y` is always the item's underside.
 */
export function supportHeight(x:number,z:number){
 return Math.hypot(x-RELIC_PLINTH.x,z-RELIC_PLINTH.z)<=RELIC_PLINTH.radius?FLOOR_Y+RELIC_PLINTH.height:FLOOR_Y;
}
export const EXIT:Point={x:32,y:3,z:-12};
/**
 * Breath corridor — one addition south of the entrance chamber.
 * Hatch (spawn) at the south end, marked far end where it meets the cave.
 * Water rises in these cells only and is not part of the cave column.
 */
export const BREATH_COLS:[number,number]=[10,11];
export const BREATH_ROW_HATCH=-8;
export const BREATH_ROW_FAR=0;
/** One-cell buffer so the hatch and the far end never host the tank. */
export const BREATH_HATCH_ROWS=1;
export const BREATH_FAR_ROWS=1;
/** Metres the bunker leak raises the waterline each second with the leak valve fully open (corridor and cave share it). Head-height in about two minutes. */
export const BREATH_RISE_MPS=0.016;
/** Standing eye height on the dry corridor floor. */
export const WALK_EYE_Y=FLOOR_Y+1.6;
/** Brisk human walk and steady run (m/s). The gait model in gait.ts owns the details. */
export const WALK_SPEED=1.55;
export const WALK_SPRINT=3.4;
/** Litres on the cylinder after a death — enough to search, not to skip the tank. */
export const BREATH_RESPAWN_LITRES=28;
/** Spare bottle in the corridor. Used with R; death can take it before that. */
export const SPARE_BOTTLE_LITRES=40;
/**
 * Walk while corridor water is still below the eyes.
 * Above this the player leaves the floor and uses the swim stack.
 */
export const BREATH_WALK_WATER=WALK_EYE_Y-.05;
/**
 * First spawn only (menu restart resets). Five percent of the walk→swim flood height
 * so the corridor starts nearly dry and you walk / run for a long stretch.
 */
export const BREATH_WATER_FILL_START=.05;
export const BREATH_WATER_START=BREATH_WALK_WATER*BREATH_WATER_FILL_START;
/** Head clears the corridor waterline — free air, no tank drain. */
export const BREATH_AIR_MARGIN=.12;
/** "Empty" bunker: the waterline a dry floor starts at. Draining never goes below it. */
export const BREATH_EMPTY_Y=BREATH_WATER_START;
/**
 * Seconds a completely full bunker (empty line → SURFACE_Y) takes to drain once the
 * leak valve is shut. Tune this to make the drain faster or slower.
 */
export const BREATH_DRAIN_FULL_SECONDS=420;
/**
 * Gravity drain through the floor sump follows Torricelli: outflow ∝ √head, so
 * dh/dt = −k·√h. A full column h₀ empties in T = 2√h₀ / k, which fixes k from the
 * configured time. Deep water falls fastest; the last few centimetres trickle.
 */
export const BREATH_DRAIN_K=2*Math.sqrt(SURFACE_Y-BREATH_EMPTY_Y)/BREATH_DRAIN_FULL_SECONDS;
/** Phase 3 Soviet guard — melee reach on dry corridor floor. */
export const GUARD_MELEE_RANGE=1.85;
export const GUARD_MELEE_DAMAGE=22;
/** When the guard wears the stolen coat, his strike damage is multiplied by this. */
export const GUARD_COAT_DAMAGE_MULT=.55;
/** TT-33 engagement range in the bunker murk (m). */
export const GUARD_GUN_RANGE=22;
export const GUARD_GUN_DAMAGE=30;
/** Aimed semi-automatic cadence (s between shots, before jitter). */
export const GUARD_GUN_COOLDOWN=.75;
/** TT-33 box magazine and a practised reload. */
export const GUARD_MAGAZINE=8;
export const GUARD_RELOAD_SECONDS=2.2;
/** Time from spotting you to the first shot: turn, raise, aim (s). Human visual reaction ≈ 0.25–0.35 s. */
export const GUARD_DRAW_SECONDS=.35;
/** He only fires once the muzzle is within this of you (radians, ~10°). */
export const GUARD_AIM_TOLERANCE=10*Math.PI/180;
/**
 * Chance a shot hits: steady close shots almost always land, long ones in the dark
 * often miss, a running target is much harder, and the first snap shot is rushed.
 * Prefer `skinOfTeethHitChance` at live fire sites — it layers the graze bias on top.
 * Damage still gates through `enemyRayHitsPlayerCore` / `PLAYER_CORE` (roll picks aim class).
 */
export function guardHitChance(distance:number,targetSpeed:number,firstShot:boolean,shooterSpeed=0){
 const base=Math.max(.3,Math.min(.95,.98-.03*Math.max(0,distance-2)));
 const moving=targetSpeed>2.4?.28:targetSpeed>.6?.12:0;
 // Firing on the move costs him accuracy too (a steady shuffle, not a sprint).
 const shuffle=GUARD_MOVING_FIRE_PENALTY*Math.min(1.5,Math.max(0,shooterSpeed));
 return Math.max(.08,Math.min(.95,base-moving-shuffle-(firstShot?.15:0)));
}
/** Hit-chance lost per m/s of his own footwork while firing. */
export const GUARD_MOVING_FIRE_PENALTY=.09;
/**
 * Enemy→player skin-of-teeth. Standing still stays lethal; moving bleeds land chance into
 * readable GRAZE misses with whip-by tracers. Hardened curve (not god mode — minChance floor).
 *
 * Authority: the probabilistic roll picks a core-aim vs graze-aim class; geometric helpers
 * (`enemyRayHitsPlayerCore` / `projectileDamagesPlayer`) are the only gate that deals damage.
 * Visual tracer thickness may skim the camera; only the microscopic core can hurt.
 */
export const SKIN_OF_TEETH={
 /** Speeds at or below this (m/s) count as standing — no extra graze bias. Aligned with style/graze still. */
 stillSpeed:.40,
 /** Horizontal speed (m/s) at which the full graze bias applies (brisk walk). */
 fullBiasSpeed:WALK_SPEED,
 /**
  * Extra land-chance cut at full bias, on top of `guardHitChance`'s moving penalty.
  * 0.24 ≈ obvious strafe GRAZEs (was Phase 4's subtle 0.08); standing still unchanged.
  */
 maxGrazeBias:.24,
 /** Floor so a moving player is never unhittable. */
 minChance:.05,
} as const;
/**
 * Near-death Ego Savior: silent lethal-overflow save (P1) + critical theater (P2)
 * + engagement mercy gate (P3). Trigger is the hit that *would* kill in `hurtPlayer`.
 * One save per engagement (recharge on player kill or leaving combat); hatch respawn
 * still resets cleanly. Air-empty / flood drown never use this path. No INVULNERABLE UI.
 */
export const EGO_SAVIOR={
 /** Surviving suit HP after a lethal save (inclusive integer band). */
 clampHpMin:1,
 clampHpMax:3,
 /** True i-frame duration band (seconds) — hurtPlayer ignores damage while active. */
 iframeMin:.4,
 iframeMax:.7,
 /** Extra shootCool applied to chasing / firing guards on save (seconds). */
 shootCoolPadMin:.45,
 shootCoolPadMax:.70,
 /** Additive mid-burst / rest gap stretch while i-frames are live (seconds). */
 burstGapPad:.10,
 /** Suit HP at or below this (and/or ego i-frames) drives hard critical theater. */
 criticalHp:15,
 /** Micro hitstop on the saving hit only (ms) — a punch, never a freeze. */
 hitstopMs:48,
 /** Brief heroic attack window after save (seconds). */
 heroBoostSeconds:.55,
 /** Knife / gun cooldown scale during hero boost (<1 = snappier). */
 heroCooldownScale:.72,
 /**
  * Seconds with no chasing/firing guard and no fresh core damage before mercy recharges.
  * Kill recharge is immediate and independent of this timer.
  */
 combatLeaveSeconds:8,
} as const;
/**
 * Player hurt-volume: thick visual shell vs microscopic damage core.
 * `projectileCoreRadius = visualRadius * coreShrink` with shrink ∈ [0.30, 0.50].
 */
export const PLAYER_CORE={
 /** Outer visual / graze shell radius (m) — tracers may skim this. */
 visualRadius:.55,
 /** Core = visual × shrink; keep in [0.30, 0.50] so camera overlap ≠ damage. */
 coreShrink:.40,
 /** Tight torso core radius (m) — equals `projectileCoreRadius()`. */
 radius:.22,
 /** Extra offset past the core for near-miss graze aims (m). */
 grazeShell:.28,
 /** Capsule half-extents along Y from eye: foot below, crown above (m). */
 capsuleDown:1.55,
 capsuleUp:.18,
 /** Torso aim height below eye (m). */
 torsoBelowEye:.28,
} as const;
/**
 * Microscopic projectile core radius. Visual radius may be thick; damage uses this shrink.
 * Optional override keeps tests / future physical tracers allocation-light.
 */
export function projectileCoreRadius(visualRadius=PLAYER_CORE.visualRadius){
 const r=visualRadius*PLAYER_CORE.coreShrink;
 return Math.max(1e-4,r);
}
/** Torso centre of the player core capsule (eye position → chest). */
export function playerCoreCenter(playerEye:Point):Point{
 return{x:playerEye.x,y:playerEye.y-PLAYER_CORE.torsoBelowEye,z:playerEye.z};
}
/**
 * True when a projectile centre intersects the player core capsule.
 * Visual / cam overlap with a thick tracer does NOT imply damage — only this volume.
 */
export function projectileDamagesPlayer(
 projectileCenter:Point,
 playerEye:Point,
 coreRadius=projectileCoreRadius(),
):boolean{
 const r=Math.max(0,coreRadius);
 const y0=playerEye.y-PLAYER_CORE.capsuleDown;
 const y1=playerEye.y+PLAYER_CORE.capsuleUp;
 const cy=Math.max(y0,Math.min(y1,projectileCenter.y));
 const dx=projectileCenter.x-playerEye.x;
 const dy=projectileCenter.y-cy;
 const dz=projectileCenter.z-playerEye.z;
 return dx*dx+dy*dy+dz*dz<=r*r;
}
/**
 * True when a unit (or non-unit) ray from `origin` along `dir` clips the player core capsule.
 * Closest approach on t≥0; used as the live damage authority for guard hitscan.
 */
export function enemyRayHitsPlayerCore(
 origin:Point,
 dir:Point,
 playerEye:Point,
 coreRadius=projectileCoreRadius(),
):boolean{
 const len=Math.hypot(dir.x,dir.y,dir.z);
 if(!(len>1e-9)||!(coreRadius>0))return false;
 const dx=dir.x/len,dy=dir.y/len,dz=dir.z/len;
 const y0=playerEye.y-PLAYER_CORE.capsuleDown;
 const y1=playerEye.y+PLAYER_CORE.capsuleUp;
 const ox=origin.x-playerEye.x,oy=origin.y,oz=origin.z-playerEye.z;
 // Closest approach of ray to vertical axis segment (cx=0,cz=0 in eye-xz frame).
 // Horizontal: minimise |(Oxz + t Dxz)| for t≥0; then clamp Y onto [y0,y1].
 const a=dx*dx+dz*dz;
 let t:number;
 if(a<1e-12){
  // Ray nearly vertical — sample at eye xz.
  t=dy>0?(y0-oy)/Math.max(dy,1e-9):dy<0?(y1-oy)/Math.min(dy,-1e-9):0;
 }else{
  t=-(ox*dx+oz*dz)/a;
 }
 t=Math.max(0,t);
 const px=ox+dx*t,py=oy+dy*t,pz=oz+dz*t;
 const cy=Math.max(y0,Math.min(y1,py));
 const ddx=px,ddy=py-cy,ddz=pz;
 return ddx*ddx+ddy*ddy+ddz*ddz<=coreRadius*coreRadius;
}
/**
 * Near-miss aim point past the player so a tracer whips the lens rim without clipping core.
 * `side` ±1 picks left/right; `jitter` ∈ [0,1) varies height / offset slightly.
 * Standing misses (`nearMiss=false`) push wider so they do not read as heroic GRAZEs.
 *
 * Lateral offset is applied **at the player plane** (not only at the far tip), so the
 * ray's closest approach clears `projectileCoreRadius` even when the tracer continues past.
 */
export function grazeAimPoint(
 muzzle:Point,
 playerEye:Point,
 side:1|-1=1,
 jitter=0.5,
 nearMiss=true,
):Point{
 const core=playerCoreCenter(playerEye);
 const fx=core.x-muzzle.x,fz=core.z-muzzle.z;
 const dist=Math.hypot(fx,core.y-muzzle.y,fz)||1;
 // Prefer a horizontal right vector so grazes skim across the view.
 let rx=fz,rz=-fx;
 const rl=Math.hypot(rx,rz);
 if(rl<1e-6){rx=1;rz=0;}else{rx/=rl;rz/=rl;}
 rx*=side;rz*=side;
 const coreR=projectileCoreRadius();
 // Clear the microscopic core with headroom; near-miss hugs the shell, standing misses go wide.
 const clear=coreR+(nearMiss?PLAYER_CORE.grazeShell*(.55+.35*jitter):PLAYER_CORE.grazeShell*(1.6+.7*jitter));
 const lift=(jitter-.5)*.32;
 const besideX=core.x+rx*clear;
 const besideY=core.y+lift;
 const besideZ=core.z+rz*clear;
 const bx=besideX-muzzle.x,by=besideY-muzzle.y,bz=besideZ-muzzle.z;
 const bl=Math.hypot(bx,by,bz)||1;
 const past=dist+2.4+.5*jitter;
 return{
  x:muzzle.x+(bx/bl)*past,
  y:muzzle.y+(by/bl)*past,
  z:muzzle.z+(bz/bl)*past,
 };
}
/**
 * Land chance for guard gunfire after skin-of-teeth graze bias.
 * Standing still → same as `guardHitChance`. Moving → further reduction up to maxGrazeBias.
 */
export function skinOfTeethHitChance(distance:number,targetSpeed:number,firstShot:boolean,shooterSpeed=0){
 const base=guardHitChance(distance,targetSpeed,firstShot,shooterSpeed);
 if(targetSpeed<=SKIN_OF_TEETH.stillSpeed)return base;
 const span=SKIN_OF_TEETH.fullBiasSpeed-SKIN_OF_TEETH.stillSpeed;
 const t=span>0?Math.min(1,(targetSpeed-SKIN_OF_TEETH.stillSpeed)/span):1;
 return Math.max(SKIN_OF_TEETH.minChance,base-SKIN_OF_TEETH.maxGrazeBias*t);
}
/** Guard health: three pistol body hits, or one to the head. */
export const GUARD_MAX_HP=100;
/** Guards on patrol within this range hear your shot and come looking (m). */
export const GUNSHOT_HEARING=20;
/**
 * Squad alert. When you shoot a guard or hold your sights on him, every other guard within
 * this radius of him (shout / radio range down concrete corridors) joins the fight (m).
 */
export const GUARD_SQUAD_RADIUS=25;
/** How long the sights must rest on a guard before he (and his squad) react (s). */
export const GUARD_TARGETED_DWELL=.4;
/** A squad keeps hunting this long after the last time any of them saw you (s). */
export const GUARD_TEAM_MEMORY=14;
/** Squad members who already have a line on you fire within this long of the call, staggered (s). */
export const GUARD_SQUAD_FIRST_SHOT=.15;
export const GUARD_SQUAD_STAGGER=.2;
/** How far round you a flanker aims to come in from (m, and angle off his straight approach). */
export const GUARD_FLANK_DISTANCE=4;
export const GUARD_FLANK_ANGLE=65*Math.PI/180;
export const GUARD_MELEE_COOLDOWN=1.55;
/** Bottle fuel the guard drinks as “his air” while chasing. */
export const GUARD_BOTTLE_AIR=SPARE_BOTTLE_LITRES;
export const GUARD_SPEED={patrol:1.38,alert:.75,chase:2.47,chaseTired:1.44,search:1.67} as const;
/**
 * Horde mode: once a guard has you he is a zombie with a pistol. No cover, no strafing,
 * no retreat, no giving up. He comes straight at you at full pace and empties his
 * magazine on the way in; the only thing that stops him is a bullet.
 *
 * - Pace: every other guard is a sprinter (just under your own sprint, so you can open a
 *   gap but never lose him); the rest are marchers, a relentless fast walk.
 * - Fire: run-and-gun spray at twice the aimed cadence, with a wide muzzle tolerance and
 *   poor accuracy. It is pressure, not marksmanship: rounds crack past and ricochet
 *   constantly, and enough of them land.
 * - He always knows where you are once engaged (the horde never loses the scent) and
 *   closes to arm's length, where he clubs you.
 * - Hits barely stagger him.
 */
export const GUARD_HORDE={
 sprint:3.0,march:2.1,
 fireInterval:.36,
 aimTolerance:24*Math.PI/180,
 /** Multiplier on hit chance for spray fire on the run. */
 accuracy:.5,
 /** Stagger from your hit (s): a flinch, not a stop. */
 flinch:.15,
 /** Draw from spotting you to first shot (s). */
 draw:.2,
} as const;
/** Sprinters (true) and marchers (false) alternate through the squad. */
export const guardIsSprinter=(outfit:number)=>outfit%2===0;
/** How close a corpse drop must be for him to claim gun / bottle / coat. */
export const GUARD_LOOT_RANGE=1.6;
/** Guard shoulder radius for wall clearance (m). */
export const GUARD_BODY_RADIUS=.42;
/** Seconds the guard stands at each patrol post before turning about. */
export const GUARD_PATROL_PAUSE=2.4;
/** Chase stops this far from the target: inside melee reach, outside body contact (m). */
export const GUARD_CHASE_STANDOFF=1.15;
/** Half arc of the look-around at the end of a search (radians, ~52°). */
export const GUARD_SCAN_ARC=.9;
/** How many Soviet guards walk the bunker at once. */
/** Guard pool size (active + waiting behind the doors). */
export const GUARD_COUNT=SURVIVAL.maxGuards;
/** In a burst he fires once the muzzle is within this of you (hip-fire, ~20°). */
export const GUARD_BURST_TOLERANCE=20*Math.PI/180;
/** What you carry into the first dive: the diving knife and the TT-33. */
export const SURVIVAL_KIT:Item[]=['knife','gun'];
/** Always-on tool — every wake (and first spawn if somehow missing) keeps this. */
export const RESPAWN_KNIFE:Item='knife';
/** A guard that is in play and on his feet. */
export const liveGuard=(g:Guard)=>g.active&&g.hp>0;
/** Adjacent beats share this fraction of their waypoints (~one room of overlap). */
export const GUARD_PATROL_OVERLAP=.25;
/**
 * Cloth dyes — same cut, five colours so they read as a squad, not clones.
 * Olive, khaki, steel-blue, brown, field-teal.
 */
export const GUARD_OUTFIT_COLORS=[0x505b43,0x71694e,0x535e5c,0x645748,0x455c50] as const;
const TAU_GUARD=Math.PI*2;
/** Floor-sitting interactables — each chest hides one map fragment. */
export const CHEST_LABEL:Record<ChestKind,string>={
 military:'military crate',
 plastic:'plastic crate',
 suitcase:'vintage suitcase',
};
export const MAP_FRAGMENT_LABEL:Record<MapFragmentId,string>={
 west:'west cavern',
 east:'east shelf',
 deep:'bone alcove',
};
export const MAP_FRAGMENT_ORDER:MapFragmentId[]=['west','east','deep'];
/** Lidless crates show the scrap immediately; E grabs it instead of opening a lid. */
export function chestHasLid(kind:ChestKind){return kind!=='plastic';}

/** HUD line for the chest currently in reach. */
export function chestInteractPrompt(chest:Chest,taken:boolean){
 const label=CHEST_LABEL[chest.kind];
 if(!chestHasLid(chest.kind))return taken?`The ${label} is empty`:'E · Grab chart scrap';
 if(!chest.open)return `E · Open ${label}`;
 return taken?`The ${label} is empty`:'E · Take chart scrap';
}

/** HUD line for the hatch stash while in reach. */
export function stashInteractPrompt(m:{stashOpen:boolean}){
 return m.stashOpen?'E · Close chest':'E · Open chest';
}

/** True when this guard is the unique main officer who carries the Soviet relic key. */
export const isMainGuard=(g:{role:GuardRole})=>g.role==='officer';

/**
 * Compass / HUD goal for the Skinner loop: kill → loot → bank at hatch → dive again.
 * Relic extract is a jackpot on top, not the default home needle.
 */
export type SkinnerGoal={p:Point;label:string};
export function skinnerGoal(m:{
 hasRelic:boolean;
 gold:number;
 bankedGold:number;
 gunMods:RifleMods;
 inventory:(Item|null)[];
 pickups:Pickup[];
 guards:Guard[];
}):SkinnerGoal{
 if(m.hasRelic)return{p:EXIT,label:'EXTRACT'};
 if(m.gold>0)return{p:STASH_POSITION,label:'BANK'};
 // Unfinished buy beats the relic chase — vault is one kill from a spend.
 const buy=nextUpgradeTarget(m.gunMods,m.bankedGold,m.inventory.includes('gun'));
 if(buy&&(buy.ready||buy.almost))return{p:STASH_POSITION,label:'BUY'};
 if(m.inventory.includes('sovietKey'))return{p:RELIC,label:'RELIC'};
 const keyDrop=m.pickups.find(p=>p.item==='sovietKey');
 if(keyDrop)return{p:keyDrop.position,label:'KEY'};
 const officer=m.guards.find(g=>liveGuard(g)&&isMainGuard(g));
 if(officer)return{p:officer.position,label:'OFFICER'};
 return{p:STASH_POSITION,label:'STASH'};
}

/** First-dive tip — vault loop first, relic as the extract jackpot. */
export const SKINNER_FIRST_TIP=
 'Kill for loot. Bank gold at the hatch stash (E). Upgrade there. Dive again. Relic extract pays a kilobar jackpot. WASD · Shift run · 1–5 select.';

/** World / HUD prompt for a floor pickup (relic gate + key wording). */
export function pickupInteractPrompt(m:{
 inventory:(Item|null)[];
 selected:number;
 gunCond?:number;
},item:Item,pickup?:{cond?:number;rounds?:number;mods?:RifleMods;amount?:number}):string{
 if(item==='gold')return `E · Take ${fmtGold(pickup?.amount??GOLD.barGrams)} of gold`;
 if(item==='relic'){
  if(m.inventory.includes('sovietKey'))return 'E · Unlock relic';
  return 'E · Locked · needs key';
 }
 if(item==='sovietKey')return 'E · Take Soviet key';
 if(item==='gun'){
  const cond=pickup?.cond??RIFLE.kitCond,rounds=pickup?.rounds?` · ${pickup.rounds} rds`:'';
  const tag=modTag(pickup?.mods);
  if(m.inventory.includes('gun')){
   if(cond>(m.gunCond??RIFLE.kitCond)+.01||modLevel(pickup?.mods)>0)return `E · Trade up to ${rifleName(cond)}${tag}${rounds}`;
   return `E · Strip rounds from ${rifleName(cond)}`;
  }
  return `E · Take ${rifleName(cond)}${tag}${rounds}`;
 }
 const held=m.inventory[m.selected];
 if(!m.inventory.includes(null)&&held)return `E · Swap ${ITEMS[held].name} for ${ITEMS[item].name}`;
 return `E · Pick up ${ITEMS[item].name}`;
}

export function createDiveChests():Chest[]{
 return [
  // West shelf — west cavern fragment.
  {id:1,kind:'military',position:{x:-22,y:FLOOR_Y,z:-52},yaw:.35,open:false,fragment:'west'},
  // East shelf — east approach / exit arm fragment.
  {id:2,kind:'plastic',position:{x:20,y:FLOOR_Y,z:-60},yaw:-.9,open:false,fragment:'east'},
  // Near bone alcove — deep north fragment.
  {id:3,kind:'suitcase',position:{x:12,y:FLOOR_Y,z:-104},yaw:2.4,open:false,fragment:'deep'},
 ];
}
/** Metres below the surface plane. Shared by HUD, gas, buoyancy, and torch. */
export function hydrostaticDepth(y:number){return Math.max(0,SURFACE_Y-y);}
/** Ambient pressure in atmospheres (≈ 1 + depth_m/10). */
export function ata(y:number){return 1+hydrostaticDepth(y)/10;}

/** Surface air consumption at cruise (L/min). Sprint/panic multiply via effort. */
export const SAC_CRUISE_LPM=18;
/**
 * Free-gas main tank in litres.
 * 100 L ≈ 5.6 min of surface cruise at 18 L/min SAC (drain still scales with ATA × effort).
 */
export const AIR_MAIN_LITRES=100;
/** Separate pony / bailout pool in litres. */
export const AIR_BAILOUT_LITRES=9;
/** @deprecated Prefer AIR_MAIN_LITRES — kept as an alias for older call sites. */
export const AIR_MAIN_MAX=AIR_MAIN_LITRES;
/** @deprecated Prefer AIR_BAILOUT_LITRES. */
export const AIR_BAILOUT_MAX=AIR_BAILOUT_LITRES;
export const AIR_EFFORT_CRUISE=1;
/** Sprint RMV — hard kick burns gas fast so Shift is a real choice. */
export const AIR_EFFORT_SPRINT=2.2;
/** Bite / panic RMV spike. */
export const AIR_EFFORT_PANIC=2.9;
/** Seconds of elevated RMV after a guardian bite. */
export const AIR_PANIC_SECONDS=3;
export function gasEffort(sprinting=false,panic=false){
 if(panic)return AIR_EFFORT_PANIC;
 if(sprinting)return AIR_EFFORT_SPRINT;
 return AIR_EFFORT_CRUISE;
}
/** Litres consumed per wall-clock second (SAC/60 × ATA × effort). */
export function gasDrainRate(depthY:number,sprinting=false,panic=false){
 return (SAC_CRUISE_LPM/60)*ata(depthY)*gasEffort(sprinting,panic);
}
/** Tank burn for the current pose. Zero while the head is above the bunker waterline. */
export function gasDrainRateAt(p:Point,waterY:number,sprinting=false,panic=false){
 if(breathingFreeAir(p,waterY))return 0;
 // Depth is measured from the rising bunker waterline everywhere (corridor and cave).
 const depth=effectiveDepth(p,waterY);
 return (SAC_CRUISE_LPM/60)*(1+depth/10)*gasEffort(sprinting,panic);
}

/** Kick thrust (m/s²) — terminal speed ≈ sqrt(thrust / SWIM_DRAG_K). */
export const SWIM_THRUST_CRUISE=8.7;
export const SWIM_THRUST_SPRINT=22.05;
/** Quadratic drag coefficient; cruise ≈2.2 m/s, sprint ≈3.5 m/s with thrusts above. */
export const SWIM_DRAG_K=1.8;
/**
 * Vertical accel at full BCD (|buoyancy| = 1).
 * Tuned so holding Space reaches a gentle float (~1.5 m/s) — not arcade ±2.8 vy.
 */
export const SWIM_BUOYANCY_ACCEL=4.1;
/** How fast Space/Q fills buoyancy toward ±1 (1/s exponential approach). Slow on purpose. */
export const BCD_FILL_RATE=.95;
/** Hands-off return of buoyancy toward the trim target (1/s). Snappy so release actually stops you. */
export const BCD_TRIM_RATE=2.4;
/** Snap to trim when this close — exponential asymptote otherwise leaves eternal micro-thrust. */
export const BCD_NEUTRAL_EPS=.04;
/** Extra vertical linear damp (1/s) when BCD is neutral and you are not finning up/down. */
export const BCD_SETTLE_DAMP=3.2;
/** Max player-set idle bias (|buoyancyTrim|). Full ±1 remains momentary Space/Q only. */
export const BCD_TRIM_BIAS_MAX=.45;
/** How fast [ ] nudge the locked trim bias (1/s). */
export const BCD_TRIM_ADJUST_RATE=.9;
/**
 * Look-pitch finning only contributes this fraction of kick thrust on Y.
 * Horizontal kick stays full; vertical climb is mostly a BCD skill.
 */
export const SWIM_KICK_VERTICAL_SCALE=.25;
/** Predator band sits between player cruise and sprint; rage exceeds chase, damaged limps. */
export const PREDATOR_SPEED={chase:2.7,rage:3.35,patrol:1.3,alert:.5,damaged:.85} as const;
/**
 * The ichthyosaur is a marine reptile: it needs this much water over the bunker floor to
 * swim (m). Below that it lies stranded where it is and can only snap at anyone who comes
 * within `PREDATOR_STRANDED_BITE` of its jaws. The leak brings it back to life.
 */
export const PREDATOR_SWIM_DEPTH=1.1;
export const PREDATOR_STRANDED_BITE=1.6;
export type Vec3={x:number;y:number;z:number};
/**
 * Space/Q BCD input (−1..+1). Idle drifts toward `trimTarget` (default neutral 0).
 * Never sets velocity directly — CaveWorld applies buoyancy as vertical accel.
 * Idle snaps onto the trim target so residual BCD does not cause eternal rise/sink.
 */
export function updateBuoyancy(buoyancy:number,bcdInput:number,dt:number,trimTarget=0){
 const b=Math.max(-1,Math.min(1,bcdInput));
 const trim=Math.max(-1,Math.min(1,trimTarget));
 if(Math.abs(b)>.01){
  const target=Math.sign(b);
  return buoyancy+(target-buoyancy)*(1-Math.exp(-BCD_FILL_RATE*dt));
 }
 const next=buoyancy+(trim-buoyancy)*(1-Math.exp(-BCD_TRIM_RATE*dt));
 return Math.abs(next-trim)<BCD_NEUTRAL_EPS?trim:next;
}
/**
 * Player-set idle bias: hold ] / [ toward ±BCD_TRIM_BIAS_MAX.
 * Release Space/Q and buoyancy settles onto this bias (non-zero = slow rise/sink).
 */
export function updateBuoyancyTrim(trim:number,adjustInput:number,dt:number){
 const a=Math.max(-1,Math.min(1,adjustInput));
 if(Math.abs(a)<.01)return Math.max(-BCD_TRIM_BIAS_MAX,Math.min(BCD_TRIM_BIAS_MAX,trim));
 const target=Math.sign(a)*BCD_TRIM_BIAS_MAX;
 const next=trim+(target-trim)*(1-Math.exp(-BCD_TRIM_ADJUST_RATE*dt));
 return Math.max(-BCD_TRIM_BIAS_MAX,Math.min(BCD_TRIM_BIAS_MAX,next));
}
/**
 * Force-based swim step: look/strafe kick + BCD buoyancy − k|v|v.
 * `kick` is WASD (look-forward may include a small Y); Space/Q must not be baked into kick.
 */
export function stepSwimVelocity(velocity:Vec3,kick:Vec3,buoyancy:number,sprint:boolean,dt:number){
 const thrust=sprint?SWIM_THRUST_SPRINT:SWIM_THRUST_CRUISE;
 const kLen=Math.hypot(kick.x,kick.y,kick.z);
 // Ignore deadzone residual so LEVEL trim truly stops vertical BCD thrust.
 const buoy=Math.abs(buoyancy)<BCD_NEUTRAL_EPS?0:buoyancy;
 let ax=0,ay=buoy*SWIM_BUOYANCY_ACCEL,az=0;
 if(kLen>1e-6){
  const s=thrust/kLen;
  ax=kick.x*s;
  // Scale Y after normalize so pure look-up is a weak fin climb, not full thrust.
  ay+=kick.y*s*SWIM_KICK_VERTICAL_SCALE;
  az=kick.z*s;
 }
 // Neutral trim + no vertical fin: bleed leftover rise/sink so release actually stops you.
 // Non-zero player bias keeps a gentle float/sink — that is intentional.
 if(Math.abs(buoyancy)<BCD_NEUTRAL_EPS&&Math.abs(kick.y)<1e-3)ay+=-velocity.y*BCD_SETTLE_DAMP;
 const speed=Math.hypot(velocity.x,velocity.y,velocity.z);
 const drag=-SWIM_DRAG_K*speed;
 ax+=velocity.x*drag;ay+=velocity.y*drag;az+=velocity.z*drag;
 velocity.x+=ax*dt;velocity.y+=ay*dt;velocity.z+=az*dt;
}
/** Steady vertical speed under constant full BCD with no kick (analytic). */
export function terminalBuoyancySpeed(){
 return Math.sqrt(SWIM_BUOYANCY_ACCEL/SWIM_DRAG_K);
}
/** Steady horizontal speed under constant thrust with zero buoyancy (analytic). */
export function terminalSwimSpeed(sprint=false){
 return Math.sqrt((sprint?SWIM_THRUST_SPRINT:SWIM_THRUST_CRUISE)/SWIM_DRAG_K);
}

export const ITEMS:Record<Item,{name:string;short:string;description:string;hint:string}>={
 knife:{name:'Diving knife',short:'Knife',description:'Click · Close-range stab. Durable — not consumed.',hint:'Click to stab · durable'},
 stone:{name:'Limestone',short:'Stone',description:'Salvage only — cannot use. Safe to swap for the relic.',hint:'Salvage · G drop · swap for relic'},
 wood:{name:'Driftwood',short:'Wood',description:'Salvage only — cannot use. Safe to swap for the relic.',hint:'Salvage · G drop · swap for relic'},
 flare:{name:'Signal flare',short:'Flare',description:'R · Deploy a 12-second distraction at your position.',hint:'R use · consumed'},
 air:{name:'Pony bottle',short:'Pony',description:`R · Arm a separate bailout cylinder (~${AIR_BAILOUT_LITRES} L). Drains after the main tank.`,hint:'R arm bailout · consumed'},
 bandage:{name:'Sealant kit',short:'Sealant',description:'R · Repair 45 suit integrity (consumed).',hint:'R use · consumed'},
 relic:{name:'Ammonite relic',short:'Relic',description:'Cannot use here — carry to the extraction pool.',hint:'Carry to extract · do not drop'},
 gold:{name:'Gold',short:'Gold',description:'Real gold: 19 times denser than water. It slows you on foot and drags you down in the flood. Bank it at the stash to buy rifle upgrades.',hint:'E take · B ditch · bank at stash'},
 gun:{name:'AK-74U',short:'AK-74U',description:'Compact 5.45 mm carbine with FPS arms viewmodel. Click fires one round at the centre of the screen; R changes the magazine. Three body hits or one to the head drop a guard, and every shot brings nearby guards running. Take spare rounds off the guards you drop. If a corridor guard kills you, he takes it.',hint:'Click fire · R reload'},
 bottle:{name:'Spare air bottle',short:'Bottle',description:`R · Add ${SPARE_BOTTLE_LITRES} L to the main cylinder (consumed). A corridor guard will drink it as his air if he takes it from your corpse.`,hint:'R use · consumed'},
 coat:{name:'Coat',short:'Coat',description:'Carry it. It does not soften guardian bites. If a corridor guard takes it from your corpse, his strikes hurt less.',hint:'Carry · death drops it'},
 sovietKey:{name:'Soviet key',short:'Key',description:'Weathered iron skeleton key with a gold-and-red Soviet emblem. Unlocks the ammonite relic in the bone alcove (consumed on unlock).',hint:'Unlock the relic · consumed'},
};
/**
 * Inventory items that occupy the FPS hand instead of the dive torch.
 * The torch is not a slot item — it is the default held prop whenever the
 * selected slot is not one of these (knife today; other hand-props later).
 */
export function occupiesFpsHand(item:Item|null):boolean{
 return item==='knife'||item==='gun'||item==='sovietKey';
}
/** Corridor floor gear. Not on the hatch. */
export function corridorGearPickups():Pickup[]{
 const spots:{item:Item;x:number;z:number}[]=[
  {item:'gun',x:-3.2,z:22},
  {item:'bottle',x:-.5,z:14},
  {item:'coat',x:-2.6,z:8},
 ];
 return spots.map((s,i)=>({id:3+i,item:s.item,position:{x:s.x,y:FLOOR_Y,z:s.z}}));
}
/** True when the selected slot should show the dive torch (and may shine). */
export function holdingTorchItem(item:Item|null):boolean{
 return !occupiesFpsHand(item);
}
/** SpotLight, volume beam, and lens emissive only while holding the torch and F is on. */
export function torchShouldShine(torchFlag:boolean, selectedItem:Item|null):boolean{
 return !!torchFlag&&holdingTorchItem(selectedItem);
}
export const cells=new Set<string>();
const rect=(a:number,b:number,c:number,d:number)=>{for(let col=a;col<=b;col++)for(let row=c;row<=d;row++)cells.add(`${col},${row}`);};
rect(8,14,1,5);rect(10,12,5,11);rect(4,18,11,24);rect(10,12,24,26);rect(8,14,26,30);
for(let c=9;c<=12;c++)for(let r=15;r<=20;r++)cells.delete(`${c},${r}`);
// A single-cell fissure separates the predator's cavern from the extraction pool.
rect(19,19,4,20);rect(18,19,20,21);rect(17,21,1,4);
// South corridor joined to the entrance (row 1). Does not replace any cave cell.
for(const col of BREATH_COLS)for(let row=BREATH_ROW_HATCH;row<=BREATH_ROW_FAR;row++)cells.add(`${col},${row}`);
export const world=(col:number,row:number):Point=>({x:(col-11)*CELL,y:3,z:-row*CELL});
export const tile=(p:Point)=>({col:Math.round(p.x/CELL)+11,row:Math.round(-p.z/CELL)});
export const distance=(a:Point,b:Point)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
/**
 * Open floor at (x, z): inside an open grid cell and not inside a cover block.
 * The grid is packed into a typed array on first use (this is the hottest function in
 * the simulation: movement, sight lines and navigation all sample it).
 */
let openGrid:{minC:number;minR:number;w:number;h:number;bits:Uint8Array;size:number}|null=null;
function packOpenGrid(){
 let minC=Infinity,maxC=-Infinity,minR=Infinity,maxR=-Infinity;
 for(const c of cells){const [a,b]=c.split(',').map(Number);minC=Math.min(minC,a);maxC=Math.max(maxC,a);minR=Math.min(minR,b);maxR=Math.max(maxR,b);}
 const w=maxC-minC+1,h=maxR-minR+1,bits=new Uint8Array(w*h);
 for(const c of cells){const [a,b]=c.split(',').map(Number);bits[(b-minR)*w+(a-minC)]=1;}
 openGrid={minC,minR,w,h,bits,size:cells.size};
}
export function cellOpen(col:number,row:number){
 if(!openGrid||openGrid.size!==cells.size)packOpenGrid();
 const g=openGrid!;const c=col-g.minC,r=row-g.minR;
 return c>=0&&r>=0&&c<g.w&&r<g.h&&g.bits[r*g.w+c]===1;
}
/** Inside a cover block (stacked crates / blast wall). */
export function inCover(x:number,z:number){
 for(const b of SURVIVAL_COVER)if(Math.abs(x-b.x)<=b.hx&&Math.abs(z-b.z)<=b.hz)return true;
 return false;
}
export function isOpen(x:number,z:number){return cellOpen(Math.round(x/CELL)+11,Math.round(-z/CELL))&&!inCover(x,z);}
export function fits(p:Point,r=.48){
 if(p.y<FLOOR_Y||p.y>SURFACE_Y)return false;
 for(let a=0;a<8;a++)if(!isOpen(p.x+Math.cos(a*Math.PI/4)*r,p.z+Math.sin(a*Math.PI/4)*r))return false;
 return isOpen(p.x,p.z);
}
export function moveBody(p:Point,dx:number,dy:number,dz:number,r=.48){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dy,dz)/.25));
 for(let n=0;n<steps;n++)for(const [axis,delta] of [['x',dx],['y',dy],['z',dz]] as const){const next={...p,[axis]:p[axis]+delta/steps};if(fits(next,r))p[axis]=next[axis];}
}
/**
 * Unit ground normal under a point on foot. The bunker floor is one level slab at FLOOR_Y, so
 * this is straight up everywhere today; ramps would return their plane's normal here and the
 * slide (movementTech) would pick up the slope with no other change.
 */
export function groundNormal(_p:{x:number;z:number}){return {x:0,y:1,z:0};}
/** Multiplier on every guard pick-up distance: `SURVIVAL.stealth.sightFactor` while crouched, 1 standing. */
export function stealthSightFactor(crouching:boolean){return crouching?SURVIVAL.stealth.sightFactor:1;}
export function visible(a:Point,b:Point){const n=Math.ceil(distance(a,b)/.4);for(let i=0;i<=n;i++){const t=n?i/n:0;if(!isOpen(a.x+(b.x-a.x)*t,a.z+(b.z-a.z)*t))return false;}return true;}
function predatorCell(col:number,row:number){return col>=4&&col<=18&&row>=12&&row<=28&&cells.has(`${col},${row}`);}
/** Minimum diver↔guardian spawn separation each dive (metres). */
export const SPAWN_SEPARATION=32;
/**
 * Curated open-floor corners across distinct map regions (not a tight entrance cluster).
 * Each dive picks one at random so starts feel far apart: entrance, corridor, shelves,
 * exit arm, mid cavern, deep south, far north / bone alcove.
 */
export const PLAYER_SPAWN_CELLS:[number,number][]=[
 // Entrance chamber
 [11,3],[8,2],[14,5],
 // Approach corridor
 [11,8],
 // West + east hunting shelves
 [4,13],[4,22],[18,13],[18,22],
 // Mid-cavern mouth (around the central pillar void)
 [7,12],[15,12],
 // Extraction / exit arm
 [19,4],[20,2],
 // Deep south corners + cavern mouth
 [4,24],[18,24],[11,24],
 // Far north / bone alcove
 [8,28],[14,28],[11,30],
];
/**
 * Curated hunting-cavern corners / chambers (inside `predatorCell` bounds).
 * Each dive picks one at random so the guardian is not always at the same tile.
 */
export const PREDATOR_SPAWN_CELLS:[number,number][]=[
 [16,19],[6,19],[16,22],[6,22],[6,13],[16,13],
 [4,16],[18,16],[4,22],[18,22],[11,24],[8,28],[14,28],
];
function spawnCellOpen(col:number,row:number){return cells.has(`${col},${row}`);}
/** Valid open-water diver starts from `PLAYER_SPAWN_CELLS` (falls back to classic START). */
export function playerSpawnCandidates():Point[]{
 const out:Point[]=[];
 for(const [col,row] of PLAYER_SPAWN_CELLS){
  if(!spawnCellOpen(col,row))continue;
  const p=world(col,row);
  if(fits(p,.48))out.push(p);
 }
 return out.length?out:[{...START}];
}
/** Pick a navigable diver spawn for a new dive. */
export function randomPlayerSpawn(rand:()=>number=Math.random):Point{
 const picks=playerSpawnCandidates();
 return {...picks[Math.floor(rand()*picks.length)!]};
}
/** Valid open-water spawn points derived from `PREDATOR_SPAWN_CELLS` (falls back to classic east mid). */
export function predatorSpawnCandidates(awayFrom:Point=START):Point[]{
 const out:Point[]=[];
 for(const [col,row] of PREDATOR_SPAWN_CELLS){
  if(!predatorCell(col,row))continue;
  const p=world(col,row);
  if(fits(p,1.3)&&distance(p,awayFrom)>SPAWN_SEPARATION)out.push(p);
 }
 return out.length?out:[world(16,19)];
}
/** Pick a navigable predator spawn for a new dive, kept clear of the diver start. */
export function randomPredatorSpawn(rand:()=>number=Math.random,awayFrom:Point=START):Point{
 const picks=predatorSpawnCandidates(awayFrom);
 return {...picks[Math.floor(rand()*picks.length)!]};
}
export type BreathZone='hatch'|'middle'|'far'|'';
/** Hatch, open middle, or marked far end. Empty string means this cell is not the corridor. */
export function breathZone(col:number,row:number):BreathZone{
 if((col!==BREATH_COLS[0]&&col!==BREATH_COLS[1])||row<BREATH_ROW_HATCH||row>BREATH_ROW_FAR)return '';
 if(row<=BREATH_ROW_HATCH+BREATH_HATCH_ROWS)return 'hatch';
 if(row>=BREATH_ROW_FAR-BREATH_FAR_ROWS)return 'far';
 return 'middle';
}
export function inBreathCorridor(p:Point){const t=tile(p);return breathZone(t.col,t.row)!=='';}
/**
 * Dry or wading on the corridor floor. False in the cave (always swim)
 * and false once corridor water reaches eye height.
 */
export function canWalkBreath(p:Point,waterY:number){return inBreathCorridor(p)&&waterY<BREATH_WALK_WATER;}
/**
 * The player walks on any open bunker floor (corridor or cave) while the flood is
 * below the walk line; deeper than that he has to swim.
 */
export function canWalk(p:Point,waterY:number){return waterY<BREATH_WALK_WATER&&isOpen(p.x,p.z);}
/**
 * Head above the bunker flood — free air, no tank drain, air-side fog.
 * The whole bunker (corridor and cave) shares one leak-driven waterline.
 */
export function breathingFreeAir(p:Point,waterY:number){
 return p.y>waterY+BREATH_AIR_MARGIN;
}
/** Metres of water above the eye, measured from the bunker flood plane. 0 in free air. */
export function effectiveDepth(p:Point,waterY:number){
 if(breathingFreeAir(p,waterY))return 0;
 return Math.max(0,waterY-p.y);
}
/** Flood fill 0..1 from the bunker floor to the ceiling plane (HUD gauge). */
export function floodFraction(waterY:number){
 return Math.max(0,Math.min(1,(waterY-FLOOR_Y)/(SURFACE_Y-FLOOR_Y)));
}
/** Equivalent SURFACE_Y-based height for systems tuned to the old full column (torch murk). */
export function floodColumnY(p:Point,waterY:number){
 return breathingFreeAir(p,waterY)?SURFACE_Y:SURFACE_Y-effectiveDepth(p,waterY);
}
/** `flow` is the fraction of full leak flow still getting past the valve (1 = open, 0 = sealed). */
export function riseBreathWater(waterY:number,dt:number,flow=1){return Math.min(SURFACE_Y,waterY+BREATH_RISE_MPS*Math.max(0,flow)*Math.max(0,dt));}
/**
 * Sump drain for `dt` seconds. Solves dh/dt = −k·√h exactly (√h falls linearly,
 * by k·dt/2), so one 1 s step lands where sixty 1/60 s steps do: the drain speed
 * does not depend on frame rate. Never drops below the empty line.
 */
export function drainBreathWater(waterY:number,dt:number,k=BREATH_DRAIN_K){
 const head=waterY-BREATH_EMPTY_Y;
 if(head<=0)return waterY;
 const root=Math.sqrt(head)-k*Math.max(0,dt)/2;
 return root>0?BREATH_EMPTY_Y+root*root:BREATH_EMPTY_Y;
}
/**
 * One tick of the bunker flood. While any water gets past the valve the leak fills
 * the bunker (at the flow fraction the gate still lets through); the instant the
 * gate is seated the rise stops and the sump drains it. Re-opening the valve mid-drain
 * stops the drain and resumes filling from the current level — the level is state,
 * the valve only picks the direction.
 */
export function stepFloodLevel(waterY:number,dt:number,flow:number){
 return flow>0?riseBreathWater(waterY,dt,flow):drainBreathWater(waterY,dt);
}
/** Open corridor cells only — the Soviet guard never enters the cave grid. */
export function breathCell(col:number,row:number){return breathZone(col,row)!=='';}
export type GuardWaypoint={x:number;z:number;
 /** corner = a turn in the wall; inspect = a stop partway along a long wall. */
 kind:'corner'|'inspect';
 /** Seconds he stands here looking around. */
 pause:number};
/** How far the guard's patrol line keeps off the walls (m). Leaves room for rock and fittings. */
export const GUARD_WALL_CLEARANCE=1.3;
/** Longest stretch he walks before stopping to look around (m). */
export const GUARD_INSPECT_SPACING=16;
export const GUARD_CORNER_PAUSE=3.4;
export const GUARD_INSPECT_PAUSE=2.4;
/** How far the look-out survey reaches (m). */
const LOOKOUT_RANGE=28;
/** Clear floor distance along one bearing from `p` (m), stopping at the first wall. */
export function clearDistance(p:{x:number;z:number},yaw:number,max=LOOKOUT_RANGE){
 const sx=Math.sin(yaw),sz=Math.cos(yaw);
 for(let d=.25;d<=max;d+=.25)if(!isOpen(p.x+sx*d,p.z+sz*d))return d-.25;
 return max;
}
/**
 * Where a sentry standing at `p` should look: out into the room, not at the wall.
 * Surveys 72 bearings, smooths them over ±15°, and takes the bearing with the
 * longest open view. The sweep arc is the span around it that still looks into
 * open floor (at least 45 % of the best view, never under 3 m), capped at ±75°.
 */
/**
 * Next heading to aim for when turning from `from` to `to` on the spot: go round
 * whichever way keeps his eyes on open floor, so a sentry turning at a corner
 * swings his view across the room rather than across the wall beside him.
 */
export function turnThroughRoom(p:{x:number;z:number},from:number,to:number){
 const d=wrapAngle(to-from);
 if(Math.abs(d)<.05)return to;
 const ways=[d,d>0?d-Math.PI*2:d+Math.PI*2];
 let best=ways[0],bestScore=-1;
 for(const w of ways){
  let worst=Infinity;const steps=Math.max(2,Math.ceil(Math.abs(w)/.17));
  for(let k=1;k<steps;k++)worst=Math.min(worst,clearDistance(p,from+w*k/steps,8));
  if(worst>bestScore+.25||(Math.abs(worst-bestScore)<=.25&&Math.abs(w)<Math.abs(best))){bestScore=worst;best=w;}
 }
 // Lead the turn by at most ~50° so the rate-limited pivot keeps to the chosen side.
 const lead=Math.sign(best)*Math.min(Math.abs(best),.9);
 return wrapAngle(from+lead);
}
export function guardLookout(p:{x:number;z:number}){
 const n=72,dist:number[]=[];
 for(let i=0;i<n;i++)dist.push(clearDistance(p,i/n*Math.PI*2));
 const smooth=dist.map((_,i)=>{let s=0;for(let k=-3;k<=3;k++)s+=dist[(i+k+n)%n];return s/7;});
 let best=0;for(let i=1;i<n;i++)if(smooth[i]>smooth[best])best=i;
 const keep=(i:number)=>dist[(i+n)%n]>=Math.max(3,.45*dist[best]);
 let lo=0,hi=0;const cap=Math.round(75/360*n);
 while(lo<cap&&keep(best-lo-1))lo++;
 while(hi<cap&&keep(best+hi+1))hi++;
 // Centre the sweep on the open span so both ends look into the room.
 const centre=best+(hi-lo)/2;
 // A second open view well away from the first (the other way down a corridor, or
 // across to another doorway) gets a look too.
 let alt=-1;for(let i=0;i<n;i++){const sep=Math.min(Math.abs(i-best),n-Math.abs(i-best));if(sep>=n/4&&smooth[i]>=Math.max(6,.5*smooth[best])&&(alt<0||smooth[i]>smooth[alt]))alt=i;}
 return{yaw:wrapAngle(centre/n*Math.PI*2),arc:(lo+hi)/2/n*Math.PI*2,view:dist[best],alt:alt<0?null:wrapAngle(alt/n*Math.PI*2)};
}
/** Half-angle of the guard's field of view (radians, ~65°). */
export const GUARD_FOV_HALF=65*Math.PI/180;
let guardRouteCache:GuardWaypoint[]|null=null;
/**
 * Perimeter patrol for the whole bunker: the outer boundary of every open cell
 * (corridor, cave chambers, fissure and exit pool), pulled in off the walls,
 * walked as one closed loop. The central rock pillar is a hole, so the loop goes
 * round the outside of the building, not the pillar.
 */
export function guardPerimeterRoute():GuardWaypoint[]{
 if(guardRouteCache)return guardRouteCache;
 // 1. Directed boundary edges in grid space (u = col, v = row), interior on the left.
 type V={u:number;v:number};
 const key=(p:V)=>`${p.u},${p.v}`;
 const out=new Map<string,V[]>();
 const add=(a:V,b:V)=>{const k=key(a);if(!out.has(k))out.set(k,[]);out.get(k)!.push(b);};
 for(const c of cells){
  const [u,v]=c.split(',').map(Number);
  const has=(du:number,dv:number)=>cells.has(`${u+du},${v+dv}`);
  if(!has(0,-1))add({u:u-.5,v:v-.5},{u:u+.5,v:v-.5});
  if(!has(1,0))add({u:u+.5,v:v-.5},{u:u+.5,v:v+.5});
  if(!has(0,1))add({u:u+.5,v:v+.5},{u:u-.5,v:v+.5});
  if(!has(-1,0))add({u:u-.5,v:v+.5},{u:u-.5,v:v-.5});
 }
 // 2. Chain edges into loops (a pinch vertex takes the sharpest left turn so rooms stay separate).
 const used=new Set<string>();
 const loops:V[][]=[];
 for(const [k,list] of out)for(const first of list){
  const ek=k+'>'+key(first);if(used.has(ek))continue;
  const start=(()=>{const [u,v]=k.split(',').map(Number);return{u,v};})();
  const loop:V[]=[start];let prev=start,cur=first;used.add(ek);
  while(key(cur)!==key(start)){
   loop.push(cur);
   const nexts=(out.get(key(cur))||[]).filter(n=>!used.has(key(cur)+'>'+key(n)));
   const din={u:cur.u-prev.u,v:cur.v-prev.v};
   nexts.sort((a,b)=>{
    const turn=(n:V)=>{const d={u:n.u-cur.u,v:n.v-cur.v};return Math.atan2(din.u*d.v-din.v*d.u,din.u*d.u+din.v*d.v);};
    return turn(b)-turn(a);
   });
   const nx=nexts[0];if(!nx)break;
   used.add(key(cur)+'>'+key(nx));prev=cur;cur=nx;
  }
  loops.push(loop);
 }
 // 3. The outer wall is the loop enclosing the most area (holes wind the other way).
 const area=(l:V[])=>l.reduce((a,p,i)=>{const q=l[(i+1)%l.length];return a+p.u*q.v-q.u*p.v;},0)/2;
 const outer=loops.reduce((best,l)=>area(l)>area(best)?l:best,loops[0]);
 // 4. Drop collinear points, then offset every corner inward along both wall normals.
 const corners=outer.filter((p,i)=>{const a=outer[(i-1+outer.length)%outer.length],b=outer[(i+1)%outer.length];return (p.u-a.u)*(b.v-p.v)-(p.v-a.v)*(b.u-p.u)!==0;});
 const m=GUARD_WALL_CLEARANCE/CELL;
 const pts=corners.map((p,i)=>{
  const a=corners[(i-1+corners.length)%corners.length],b=corners[(i+1)%corners.length];
  const d1={u:Math.sign(p.u-a.u),v:Math.sign(p.v-a.v)},d2={u:Math.sign(b.u-p.u),v:Math.sign(b.v-p.v)};
  // Left normal of a direction (u,v) is (−v,u): interior side.
  const g={u:p.u+m*(-d1.v-d2.v),v:p.v+m*(d1.u+d2.u)};
  const w=world(g.u,g.v);return{x:w.x,z:w.z};
 });
 // 5. Stops: every corner, plus inspection stops along long walls.
 const route:GuardWaypoint[]=[];
 for(let i=0;i<pts.length;i++){
  const a=pts[i],b=pts[(i+1)%pts.length];
  route.push({x:a.x,z:a.z,kind:'corner',pause:GUARD_CORNER_PAUSE});
  const len=Math.hypot(b.x-a.x,b.z-a.z),n=Math.floor(len/GUARD_INSPECT_SPACING);
  for(let k=1;k<=n;k++){
   const t=k/(n+1);
   route.push({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t,kind:'inspect',pause:GUARD_INSPECT_PAUSE});
  }
 }
 // 6. Step round floor props (crates, suitcase) that sit near a wall.
 const props=createDiveChests().map(c=>({x:c.position.x,z:c.position.z,r:1.25}));
 for(const o of props){
  const segDist=(a:{x:number;z:number},b:{x:number;z:number})=>{
   const abx=b.x-a.x,abz=b.z-a.z,l2=abx*abx+abz*abz||1;
   const t=Math.max(0,Math.min(1,((o.x-a.x)*abx+(o.z-a.z)*abz)/l2));
   return Math.hypot(o.x-a.x-abx*t,o.z-a.z-abz*t);
  };
  // A prop tucked into a corner: cut the corner on the room side, far enough back
  // that both new legs and the diagonal keep clear of it.
  for(let i=0;i<route.length;i++){
   const w=route[i];if(w.kind!=='corner'||Math.hypot(w.x-o.x,w.z-o.z)>o.r+2)continue;
   const pv=route[(i-1+route.length)%route.length],nx=route[(i+1)%route.length];
   const lp=Math.hypot(pv.x-w.x,pv.z-w.z),ln=Math.hypot(nx.x-w.x,nx.z-w.z);
   for(let k=1;k<Math.min(lp,ln)-.3;k+=.25){
    const p1={x:w.x+(pv.x-w.x)/lp*k,z:w.z+(pv.z-w.z)/lp*k},p2={x:w.x+(nx.x-w.x)/ln*k,z:w.z+(nx.z-w.z)/ln*k};
    if(segDist(pv,p1)>=o.r&&segDist(p1,p2)>=o.r&&segDist(p2,nx)>=o.r&&guardClearLine(p1,p2,GUARD_BODY_RADIUS)){
     route.splice(i,1,{...p1,kind:'corner',pause:w.pause},{...p2,kind:'inspect',pause:0});
     i++;break;
    }
   }
  }
  for(let i=0;i<route.length;i++){
   const a=route[i],b=route[(i+1)%route.length];
   const abx=b.x-a.x,abz=b.z-a.z,l2=abx*abx+abz*abz||1;
   const t=Math.max(0,Math.min(1,((o.x-a.x)*abx+(o.z-a.z)*abz)/l2));
   const cx=a.x+abx*t,cz=a.z+abz*t,dd=Math.hypot(o.x-cx,o.z-cz);
   if(dd>=o.r)continue;
   const len=Math.sqrt(l2),nx=-abz/len,nz=abx/len,ux=abx/len,uz=abz/len;
   const sd=(cx-o.x)*nx+(cz-o.z)*nz;
   // Pass on whichever side leaves the most room to the wall.
   let pick:{x:number;z:number}[]|null=null,room=0;
   for(const side of [1,-1]){
    const shift=side*(o.r+.05)-sd;
    for(const along of [o.r*1.6,o.r]){
     const pts=[{x:cx-ux*along+nx*shift,z:cz-uz*along+nz*shift},{x:cx+ux*along+nx*shift,z:cz+uz*along+nz*shift}];
     const r=[1.3,1.1,.9,.7,.5].find(rr=>pts.every(q=>fits({x:q.x,y:3,z:q.z},rr)))??0;
     if(r>room){room=r;pick=pts;}
    }
   }
   if(!pick)continue;
   const [before,after]=pick;
   route.splice(i+1,0,{...before,kind:'inspect',pause:0},{...after,kind:'inspect',pause:0});
   i+=2;
  }
 }
 guardRouteCache=route;
 return route;
}
/** Every point along a→b leaves room for a body of radius r inside open cells. */
export function guardClearLine(a:{x:number;z:number},b:{x:number;z:number},r=GUARD_BODY_RADIUS){
 const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.25));
 for(let i=0;i<=n;i++){const t=i/n;if(!fits({x:a.x+(b.x-a.x)*t,y:3,z:a.z+(b.z-a.z)*t},r))return false;}
 return true;
}
/**
 * Where the guard should head next to reach `to` anywhere in the bunker:
 * a breadth-first route over open cells, pulled tight so he walks the longest
 * straight line he can actually fit along (no zigzag between cell centres).
 */
export function guardNavTarget(from:{x:number;z:number},to:{x:number;z:number}):{x:number;z:number;final:boolean}{
 if(guardClearLine(from,to))return{x:to.x,z:to.z,final:true};
 const a=tile({x:from.x,y:0,z:from.z}),b=tile({x:to.x,y:0,z:to.z});
 const start=`${a.col},${a.row}`,end=`${b.col},${b.row}`;
 const parents=new Map<string,string|null>([[start,null]]),queue=[start];
 for(let i=0;i<queue.length&&!parents.has(end);i++){
  const [c,r]=queue[i].split(',').map(Number);
  for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(cells.has(k)&&!parents.has(k)){parents.set(k,queue[i]);queue.push(k);}}
 }
 if(!parents.has(end))return{x:from.x,z:from.z,final:true};
 const path:{x:number;z:number}[]=[];
 for(let k:string|null=end;k&&k!==start;k=parents.get(k)??null){const [c,r]=k.split(',').map(Number);const w=world(c,r);path.unshift({x:w.x,z:w.z});}
 path.push({x:to.x,z:to.z});
 for(let i=path.length-1;i>=0;i--)if(guardClearLine(from,path[i]))return{...path[i],final:i===path.length-1};
 return{...path[0],final:path.length===1};
}
/**
 * Pick where a guard starts a life: a random stop on the perimeter (or `allowed`
 * beat), well away from the player and never the same stop as last time.
 */
export function pickGuardSpawn(rand:()=>number,avoid:Point,previous=-1,minDistance=30,allowed?:number[]){
 const route=guardPerimeterRoute();
 const idxs=allowed&&allowed.length?allowed:route.map((_,i)=>i);
 const farEnough=idxs.filter(i=>i!==previous&&route[i].pause>0&&Math.hypot(route[i].x-avoid.x,route[i].z-avoid.z)>=minDistance);
 const pool=farEnough.length?farEnough:idxs.filter(i=>i!==previous&&route[i].pause>0);
 const pickFrom=pool.length?pool:idxs.filter(i=>i!==previous);
 const list=pickFrom.length?pickFrom:idxs;
 return list[Math.min(list.length-1,Math.floor(rand()*list.length))];
}
/** One overlapping arc of the perimeter that a single guard walks. */
export function guardBeat(index:number,n=guardPerimeterRoute().length){
 const stride=n/GUARD_COUNT;
 const len=Math.max(4,Math.round(stride/(1-GUARD_PATROL_OVERLAP)));
 const start=((Math.round(index*stride)%n)+n)%n;
 return{start,len};
}
export function beatIndices(start:number,len:number,n:number){
 return Array.from({length:len},(_,k)=>(start+k)%n);
}
export function beatNext(wp:number,start:number,len:number,n:number){
 const rel=((wp-start)%n+n)%n;
 return(start+(rel+1)%len)%n;
}
/** Step along a beat and reverse at the ends so he does not cut across the bunker. */
export function beatStep(wp:number,start:number,len:number,n:number,dir:1|-1){
 if(len<=1)return{wp:start,dir};
 const rel=((wp-start)%n+n)%n;
 let r=rel+dir,d=dir;
 if(r>=len){d=-1;r=Math.max(0,len-2);}
 if(r<0){d=1;r=Math.min(len-1,1);}
 return{wp:(start+r)%n,dir:d as 1|-1};
}
export function nearestBeatStop(from:{x:number;z:number},start:number,len:number){
 const route=guardPerimeterRoute(),n=route.length;
 let best=start,bd=Infinity;
 for(const i of beatIndices(start,len,n)){
  const d=Math.hypot(route[i].x-from.x,route[i].z-from.z);
  if(d<bd){bd=d;best=i;}
 }
 return best;
}
export type BreathTankMount={x:number;y:number;z:number;yaw:number;row:number;col:number};
/**
 * Wall mounts along the middle of the corridor only.
 * Alternating walls so a respawn is a different place, never the hatch or the far end.
 */
export function breathTankMounts():BreathTankMount[]{
 const rows:number[]=[];
 for(let row=BREATH_ROW_HATCH+BREATH_HATCH_ROWS+1;row<=BREATH_ROW_FAR-BREATH_FAR_ROWS-1;row++)rows.push(row);
 return rows.map((row,i)=>{
  const west=i%2===0;
  const col=west?BREATH_COLS[0]:BREATH_COLS[1];
  const p=world(col,row);
  return {x:west?p.x-1.7:p.x+1.7,y:1.55,z:p.z,yaw:west?Math.PI/2:-Math.PI/2,row,col};
 });
}
export function nextBreathTankIndex(current:number,count=breathTankMounts().length){
 if(count<=1)return 0;
 return (current+1)%count;
}
/** Always the hatch. Replaces random diver spawn for this phase. */
export function breathHatchSpawn():Point{
 const a=world(BREATH_COLS[0],BREATH_ROW_HATCH);
 const b=world(BREATH_COLS[1],BREATH_ROW_HATCH);
 return {x:(a.x+b.x)/2,y:WALK_EYE_Y,z:(a.z+b.z)/2};
}
export type BreathFootprint={minX:number;maxX:number;minZ:number;maxZ:number;width:number;depth:number;cx:number;cz:number};
/** Axis-aligned footprint of the corridor water (not the cave). Constant for the life of the map. */
let breathFootprintCache:BreathFootprint|null=null;
export function breathFootprint():BreathFootprint{
 if(breathFootprintCache)return breathFootprintCache;
 const minX=world(BREATH_COLS[0],0).x-CELL/2;
 const maxX=world(BREATH_COLS[1],0).x+CELL/2;
 const maxZ=world(BREATH_COLS[0],BREATH_ROW_HATCH).z+CELL/2;
 const minZ=world(BREATH_COLS[0],BREATH_ROW_FAR).z-CELL/2;
 breathFootprintCache={minX,maxX,minZ,maxZ,width:maxX-minX,depth:maxZ-minZ,cx:(minX+maxX)/2,cz:(minZ+maxZ)/2};
 return breathFootprintCache;
}
export function pathBetween(a:Point,b:Point){
 const from=tile(a),to=tile(b),start=`${from.col},${from.row}`,end=`${to.col},${to.row}`;
 if(!predatorCell(to.col,to.row))return [];
 const queue=[start],parents=new Map<string,string|null>([[start,null]]);
 for(let i=0;i<queue.length;i++){const key=queue[i];if(key===end)break;const [c,r]=key.split(',').map(Number);for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(predatorCell(c+dc,r+dr)&&!parents.has(k)){parents.set(k,key);queue.push(k);}}}
 if(!parents.has(end))return [];const path:Point[]=[];let key:string|null=end;
 while(key&&key!==start){const [c,r]=key.split(',').map(Number);path.unshift(world(c,r));key=parents.get(key)!;}return path;
}
/** Radians per pointer/wheel unit; also scales arrow-key and unlocked look-stick via the same path. */
export const LOOK_SENSITIVITY=.003;
export const lookDelta=(yaw:number,pitch:number,dx:number,dy:number)=>({yaw:yaw-dx*LOOK_SENSITIVITY,pitch:Math.max(-1.4,Math.min(1.4,pitch-dy*LOOK_SENSITIVITY))});
/** Frame-rate-independent multiplier for unlocked continuous yaw (paired with lookDelta). */
export const FREE_LOOK_RATE=1.45;
export type Rgb={r:number;g:number;b:number};
export type TorchModulation={
 intensity:number;distance:number;decay:number;beamOpacity:number;particle:number;
 /** Direct-path lamp tint (SpotLight / wall wash). */
 r:number;g:number;b:number;
 /** Backscatter haze tint (volumetric beam). Teal-biased vs direct. */
 beamR:number;beamG:number;beamB:number;
 /** Beer–Lambert coefficients (1/m). Direct ≠ backscatter (Sea-thru). */
 betaDirect:Rgb;betaBackscatter:Rgb;
};
/** Mid-swim, level-look render baseline (soft SpotLight · 0.1.17). */
export const TORCH_BASELINE={intensity:85,distance:34,decay:1.15,beamOpacity:.09} as const;
/**
 * Coastal-cave water betas (1/m), clear → murky. Red dies first on the direct path;
 * backscatter leans cyan-teal (Sea-thru β^D ≠ β^B; Jerlov coastal murk order of magnitude).
 */
const BETA_CLEAR_D:Rgb={r:.18,g:.11,b:.08};
const BETA_MURK_D:Rgb={r:.62,g:.38,b:.28};
const BETA_CLEAR_B:Rgb={r:.06,g:.08,b:.1};
const BETA_MURK_B:Rgb={r:.2,g:.3,b:.4};
const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
const lerpRgb=(a:Rgb,b:Rgb,t:number):Rgb=>({r:lerp(a.r,b.r,t),g:lerp(a.g,b.g,t),b:lerp(a.b,b.b,t)});
const meanRgb=(c:Rgb)=>(c.r+c.g+c.b)/3;
/** Effective murk 0..1 from swim height and look pitch (Three.js YXZ: +pitch looks down). */
export function torchMurk(depthY:number,pitch:number){
 const column=SURFACE_Y-FLOOR_Y;
 const clarity=Math.max(0,Math.min(1,1-hydrostaticDepth(depthY)/column));
 const aimUp=Math.max(-1,Math.min(1,-pitch/1.4));
 const floorBias=Math.max(0,-aimUp);
 const ceilingBias=Math.max(0,aimUp);
 const murkEff=Math.max(0,Math.min(1,(1-clarity)+floorBias*.22-ceilingBias*.12));
 return{clarity,aimUp,floorBias,ceilingBias,murkEff};
}
/** Direct + backscatter betas for the current murk (shared by SpotLight and volume beam). */
export function torchBetas(murkEff:number){
 return{
  direct:lerpRgb(BETA_CLEAR_D,BETA_MURK_D,murkEff),
  backscatter:lerpRgb(BETA_CLEAR_B,BETA_MURK_B,murkEff),
 };
}
/** Range (m) where direct transmission drops to ~5%. */
export function beerLambertRange(beta:Rgb,transmission=.05){
 return -Math.log(transmission)/Math.max(1e-4,meanRgb(beta));
}
/** Channel transmission through path length z (Beer–Lambert). */
export function beerLambertTransmit(beta:Rgb,z:number):Rgb{
 return{r:Math.exp(-beta.r*z),g:Math.exp(-beta.g*z),b:Math.exp(-beta.b*z)};
}
/**
 * Shared underwater torch response: one murk model drives SpotLight (direct) and
 * volumetric beam (backscatter). Outputs are absolute render params calibrated to
 * TORCH_BASELINE at mid swim / level look (y=3, pitch=0).
 */
export function torchModulation(depthY:number,pitch:number):TorchModulation{
 const {clarity,aimUp,floorBias,ceilingBias,murkEff}=torchMurk(depthY,pitch);
 const {direct:betaDirect,backscatter:betaBackscatter}=torchBetas(murkEff);
 const mid=torchMurk(3,0);
 const midBetas=torchBetas(mid.murkEff);
 const rangeM=beerLambertRange(betaDirect)*(1+aimUp*.1-floorBias*.06);
 const midRange=beerLambertRange(midBetas.direct);
 // Cap clear-water stretch so cave chambers stay dive-torch scale (~tens of metres).
 const distance=Math.min(52,TORCH_BASELINE.distance*(rangeM/midRange));
 const near=beerLambertTransmit(betaDirect,.8);
 const midNear=beerLambertTransmit(midBetas.direct,.8);
 const nearEnergy=(near.r+near.g+near.b)/3;
 const midEnergy=(midNear.r+midNear.g+midNear.b)/3;
 // Floor-aim / murk also pulls peak intensity down (shared with β^D); mid-normalized.
 const murkDim=(1-murkEff*.18)/(1-mid.murkEff*.18);
 const intensity=TORCH_BASELINE.intensity*(nearEnergy/midEnergy)*(1+aimUp*.16)*murkDim;
 const decay=TORCH_BASELINE.decay+.55*(meanRgb(betaDirect)-meanRgb(midBetas.direct));
 const tintPath=Math.min(distance*.35,8);
 const tint=beerLambertTransmit(betaDirect,tintPath);
 const tintMax=Math.max(tint.r,tint.g,tint.b,1e-4);
 // Relative spectral transmit, then murk pulls toward muddy amber (keeps deep.b < shallow.b).
 let r=tint.r/tintMax,g=tint.g/tintMax,b=tint.b/tintMax;
 r=lerp(r,.62,murkEff*.5);g=lerp(g,.55,murkEff*.35);b=lerp(b,.4,murkEff*.55);
 r=Math.max(0,Math.min(1,r));g=Math.max(0,Math.min(1,g));b=Math.max(0,Math.min(1,b));
 const beamLen=Math.min(12,distance*.55);
 const midBeamLen=Math.min(12,TORCH_BASELINE.distance*.55);
 const scatter=1-Math.exp(-meanRgb(betaBackscatter)*beamLen);
 const midScatter=1-Math.exp(-meanRgb(midBetas.backscatter)*midBeamLen);
 const clarityFactor=.72+clarity*.45;
 const midClarityFactor=.72+mid.clarity*.45;
 const beamOpacity=Math.max(.004,TORCH_BASELINE.beamOpacity*(scatter/Math.max(1e-4,midScatter))*(clarityFactor/midClarityFactor)*(1+aimUp*.22));
 const haze=beerLambertTransmit(betaBackscatter,beamLen*.4);
 const hazeMax=Math.max(haze.r,haze.g,haze.b,1e-4);
 const beamR=Math.max(0,Math.min(1,.42+.35*(1-haze.r/hazeMax)+ceilingBias*.04));
 const beamG=Math.max(0,Math.min(1,.55+.3*(1-haze.g/hazeMax)));
 const beamB=Math.max(0,Math.min(1,.48+.42*(haze.b/hazeMax)+ceilingBias*.08-floorBias*.12));
 const particle=Math.max(0,Math.min(1,.35+clarity*.55+aimUp*.12));
 return{intensity,distance,decay,beamOpacity,particle,r,g,b,beamR,beamG,beamB,betaDirect,betaBackscatter};
}

/**
 * Soft look-stick yaw when pointer lock is unavailable.
 * A center dead zone keeps fine aiming calm; offset past that ramps continuous
 * 360° turn while the pointer stays inside the canvas (no need to press the OS edge).
 */
export function edgeTurn(clientX:number,left:number,width:number){
 if(width<=0)return 0;
 const x=Math.max(0,Math.min(1,(clientX-left)/width));
 const fromCenter=(x-.5)*2;
 const dead=.2;
 const abs=Math.abs(fromCenter);
 if(abs<=dead)return 0;
 const t=(abs-dead)/(1-dead);
 return Math.sign(fromCenter)*t*t;
}
export type FeedbackKind='select'|'ok'|'blocked'|'';
export const INVENTORY_TIPS_KEY='painted-abyss.inventoryTipsSeen';
export function readInventoryTipsSeen(){
 try{return globalThis.localStorage?.getItem(INVENTORY_TIPS_KEY)==='1';}catch{return false;}
}
export function writeInventoryTipsSeen(){
 try{globalThis.localStorage?.setItem(INVENTORY_TIPS_KEY,'1');}catch{/* private mode */}
}
export type Guard={
 position:Point;
 state:GuardState;
 timer:number;lost:number;lastKnown:Point;waypoint:number;spawnIndex:number;
 heading:number;speed:number;turnRate:number;pause:number;
 arrived:boolean;scanBase:number;scanTime:number;scanArc:number;scanTurn:number;
 scanAlt:number|null;lastState:GuardState;
 meleeCool:number;shootCool:number;
 ammo:number;reload:number;firstShot:boolean;
 shots:number;lastShotHit:boolean;aim:number;
 /** World aim point of the latest round (core centre or graze offset) for whip-by tracers. */
 lastShotAim:Point;
 gun:boolean;bottle:boolean;coat:boolean;air:number;
 beatStart:number;beatLen:number;beatDir:1|-1;outfit:number;
 /** Ground velocity (m/s, world). Equals speed along heading except in the firing stance, where he strafes. */
 vx:number;vz:number;
 /** Health (0 = down). `takeDamage` from playerPistol is the only way it drops. */
 hp:number;maxHp:number;
 /** Seconds left staggering from a hit (no trigger pull while it runs). */
 flinch:number;
 /** Squad hunt: mission time until which he works with the others to kill you (−1 = off). */
 team:number;
 /** Mission time his detection notice ("!") went up (−1 = none). */
 noticeAt:number;
 /** Which side of you he swings round to when he cannot see you (+1 / −1). */
 flankSide:1|-1;
 /** Clear line of sight to you on his last tick. */
 sees:boolean;
 // ── Survival firefight ──
 /** In play (false = an empty slot in the reinforcement pool). */
 active:boolean;
 role:GuardRole;
 /** Melee wind-up left (s, 0 = none) and its full length (for the pose). */
 windup:number;windupTotal:number;
 /** Holds one of the limited shooting / close-attack slots. */
 fireToken:boolean;meleeToken:boolean;
 /** Rounds left in the current burst; wait before asking for the trigger again. */
 burstLeft:number;burstIndex:number;tokenCool:number;
 /** Reaction delay after he first gets a line on you (s). */
 reactT:number;prevSees:boolean;
 /** Engagement slot: angular offset round you (rad) and its slow drift. */
 slot:number;slotDrift:number;
 /** Patrol post index (into `patrolPosts()`), and the room box he patrols before contact. */
 post:number;home:{x0:number;x1:number;z0:number;z1:number}|null;
 /** Stuck detection and unstick detour. */
 progressAt:number;progressPos:{x:number;z:number};stuckT:number;detour:{x:number;z:number}|null;detourUntil:number;
 /** Cached navigation step toward `navGoal`. */
 navGoal:{x:number;z:number};navStep:{x:number;z:number;final:boolean};navAt:number;
 /** Time since he went down (corpses are recycled). */
 downFor:number;
 /** Mission time of your last hit on him (hit flash) and his last melee strike. */
 hitAt:number;strikeAt:number;
 /** Damage the player has dealt him this life (fresh-blood heal is a share of it). */
 dealtByPlayer?:number;
 /** A rifle he took off your corpse (drops back, upgrades intact, when he dies). */
 loot?:{cond:number;mods?:RifleMods};
 /** Gold he took off your corpse (grams). */
 gold?:number;
 /** Pickup id of the pistol he dropped, if any. */
 dropId:number;
 /** Lookout length, strafing flag (velocity not along facing), slot drift flip, unstick count, life counter. */
 pauseTotal:number;strafing:boolean;slotFlipAt:number;stuckCount:number;life:number;
 /** His engagement slot has been placed for this chase. */
 slotSet:boolean;
};
export function makeGuard(outfit=0):Guard{
 const beat=guardBeat(outfit);
 return{
  position:{x:0,y:WALK_EYE_Y,z:0},
  state:'patrol',
  timer:0,lost:0,lastKnown:{x:0,y:WALK_EYE_Y,z:0},waypoint:0,spawnIndex:-1,
  heading:0,speed:0,turnRate:0,pause:0,
  arrived:false,scanBase:0,scanTime:0,scanArc:GUARD_SCAN_ARC,scanTurn:0,
  scanAlt:null,lastState:'patrol',
  meleeCool:0,shootCool:0,
  ammo:GUARD_MAGAZINE,reload:0,firstShot:true,
  shots:0,lastShotHit:false,aim:0,lastShotAim:{x:0,y:WALK_EYE_Y,z:0},
  gun:true,bottle:false,coat:false,air:0,
  beatStart:beat.start,beatLen:beat.len,beatDir:1,outfit,
  vx:0,vz:0,
  hp:GUARD_MAX_HP,maxHp:GUARD_MAX_HP,flinch:0,team:-1,noticeAt:-1,flankSide:outfit%2?1:-1,sees:false,
  active:true,role:'assault',windup:0,windupTotal:0,fireToken:false,meleeToken:false,
  burstLeft:0,burstIndex:0,tokenCool:0,reactT:0,prevSees:false,slot:0,slotDrift:0,
  post:-1,home:null,progressAt:0,progressPos:{x:0,z:0},stuckT:0,detour:null,detourUntil:0,
  navGoal:{x:1e9,z:1e9},navStep:{x:0,z:0,final:true},navAt:-1,downFor:0,hitAt:-1,strikeAt:-1,dropId:-1,
  pauseTotal:0,strafing:false,slotFlipAt:4,stuckCount:0,life:0,slotSet:false,
 };
}
/**
 * Park sentries off the map so tests that are not about them stay quiet.
 * `keep` is the squad index to leave in play, or −1 to park them all.
 */
export function isolateGuards(m:{guards:Guard[]},keep=-1){
 for(let i=0;i<m.guards.length;i++){
  if(i===keep)continue;
  const g=m.guards[i];
  g.position={x:500,y:WALK_EYE_Y,z:500};
  g.lastKnown={...g.position};
  g.state='patrol';g.pause=1e9;g.speed=0;g.turnRate=0;
  g.meleeCool=1e9;g.shootCool=1e9;g.gun=false;
  g.active=false;
 }
 if(keep>=0&&m.guards[keep]){const g=m.guards[keep];g.active=true;if(g.hp<=0)g.hp=g.maxHp;}
 // Tests that isolate guards want a quiet bunker: no reinforcements.
 const d=(m as {director?:{enabled:boolean}}).director;if(d)d.enabled=false;
}
 export class Mission {
 position={...breathHatchSpawn()};health=100;air=AIR_MAIN_MAX;bailout=0;elapsed=0;stamina=100;torch=true;
 /** Bunker waterline (metres), shared by corridor and cave. The leak raises it over time; it is kept across death. */
 breathWaterY=BREATH_WATER_START;
 /** Relic booby trap: latched across drops and deaths; a new mission rearms it. */
 floodTriggered=false;
 /** Radians the leak valve's handwheel has been wound clockwise from fully open. Kept across death, like the water. */
 valveTurned=0;
 /** Index into `breathTankMounts`. Moves on each death. */
 breathTankIndex=0;
 breathDeaths=0;
 /** BCD trim −1 (sink) .. 0 (neutral) .. +1 (float). Driven by Space/Q, not kick speed. */
 buoyancy=0;
 /** Idle drift target for buoyancy (−1..+1). Player sets with [ ] / X; Space/Q are momentary. */
 buoyancyTrim=0;
 /** Elevated gas effort until this mission elapsed time (bite / panic). */
 gasPanicUntil=0;
 inventory:(Item|null)[]=[...SURVIVAL_KIT,'flare','bandage','air'];selected=1;
 pickups:Pickup[]=[{id:1,item:'relic',position:{...RELIC,y:FLOOR_Y+RELIC_PLINTH.height}},...corridorGearPickups()];nextId=6;
 chests:Chest[]=createDiveChests();
 /**
  * Persistent hatch stash (localStorage). Survives death, extract, dive-again, and reload.
  * Not wiped by respawn — corpse loot and chest loot stay separate.
  */
 stash:StashSlot[]=readStash();
 stashOpen=false;
 /** Audio cue for CaveWorld (cleared when consumed). */
 stashCue:StashCue='';
 /** Collected cave-chart scraps (taken from the crates). */
 mapFragments:MapFragmentId[]=[];
 /** Dive HUD chart overlay (Tab). */
 mapOpen=false;
 pending:number|null=null;outcome:'playing'|'won'|'lost'='playing';reason='';
 /** First-play inventory guidance only; repeating select/use text is intentionally silent. */
 /** Holding crouch (C) on foot: guards find you 35% harder to see (see SURVIVAL.stealth). */
 crouching=false;
 /** Mid-slide on foot (HUD only; the slide is loud, so it never counts as crouched). */
 sliding=false;
 tipsSeen=false;notice='';noticeUntil=0;feedbackKind:FeedbackKind='';feedbackPulse=0;
 predator={
  position:world(16,19),state:'patrol' as PredatorState,timer:0,lost:0,lastKnown:world(16,19),waypoint:0,bite:0,heading:0,
  hp:PREDATOR_HP_MAX,raged:false,flinch:0,stabCool:0,
 };
 /**
  * Five Soviet guards. Same AI; each walks an overlapping beat of the perimeter
  * in a different cloth colour. `guard` is the first (kept for existing tests).
  */
 guards:Guard[]=Array.from({length:GUARD_COUNT},(_,i)=>makeGuard(i));
 get guard(){return this.guards[0];}
 set guard(g:Guard){this.guards[0]=g;}
 /** Set when a corridor guard deals the killing blow — triggers corpse loot claim. */
 killedByGuard=false;
 /** Which squad member claimed the kill (index into `guards`). */
 lootGuardIndex=0;
 /** Latest combat cue for audio / camera (cleared by the renderer when consumed). */
 combatCue:''|'stab-hit'|'stab-miss'|'flinch'|'break'|'kill'|'guard-shot'|'guard-miss'|'guard-melee'
  |'pistol-miss'|'pistol-hit'|'pistol-head'|'pistol-kill'|'pistol-dry'|'pistol-reload'|'pistol-jam'|'pistol-clear'
  |'stab-guard'|'stab-guard-kill'|'guard-whiff'|'smoke-throw'='';
 /** Mission time of the latest squad call-out (renderer: radio squelch + notice). */
 squadAlertAt=-1;
 /** How long your sights have rested on each guard (s). */
 aimDwell:number[]=[];
 /** Your TT-33: magazine, spare rounds, cooldown and reload. */
 pistol:PistolState=makePistol();
 /** Condition of the rifle you carry (1 slot max). Drives jams and scatter. */
 gunCond:number=RIFLE.kitCond;
 /** Upgrades on the rifle you carry. They are the rifle's, not yours: lose it, lose them. */
 gunMods:RifleMods=noMods();
 /** Gold you are carrying (grams): heavy, and lost where you die. */
 gold=0;
 /** Gold saved at the stash (grams): safe for good, spent in the shop. */
 bankedGold=readBankedGold();
 /**
  * Last auto-bank / stash payday haul (grams). Win screen and dive-again use this so
  * the vault hit is visible even after pockets are cleared.
  */
 lastHaulBanked=0;
 /** Kilobars granted by the extract jackpot on the last successful extract. */
 lastExtractBars=0;
 /** Last gold moment, for HUD count-ups and flashes (seq changes every event). */
 goldEvent:{seq:number;kind:'take'|'bank'|'upgrade'|'ditch'|'lost';grams:number;at:number;track?:ModTrack;level?:number}|null=null;
 /** A stoppage is in the chamber: the trigger does nothing until R clears it. */
 jammed=false;
 /** Loot rolls use their own stream so what drops never shifts combat randomness. */
 lootRand:()=>number=lootStream(Math.floor(Math.random()*2**31));
 /** Latest prize rifle to hit the floor (officer's grade): renderer / HUD call it out. */
 prizeDrop:{id:number;cond:number;at:number}|null=null;
 /**
  * Stage-two kill-loot theater: classical cue per kill (dry ≠ win juice).
  * CaveWorld consumes `seq` changes for audio; notices are set alongside.
  */
 killLootEvent:{seq:number;kind:KillLootCue;at:number;cond?:number;goldGrams?:number}|null=null;
 /**
  * Consecutive empty schedule kills (dry / ammo-only). Soft pity in killLoot.ts
  * shifts odds after `KILL_LOOT.pityAfter`. Reset on any paying bucket. Opaque.
  */
 killLootEmptyStreak=0;
 /** Pacing director for the firefight (reinforcements, lulls, final push). */
 director=new Director();
 /** Smoke grenades you carry, grenades in the air and clouds on the floor. */
 smokes:number=SURVIVAL.smoke.start;grenades:SmokeGrenade[]=[];clouds:SmokeCloud[]=[];nextSmokeId=1;
 /** Supply caches (walk over to take). */
 caches:SupplyCache[]=makeCaches();
 supplyTaken:{kind:SupplyKind;at:number}|null=null;
 /** Recent hits on you and where they came from (HUD direction markers). */
 damageFrom:{x:number;z:number;at:number}[]=[];
 /** Your view direction as a sim yaw (0 = +Z); the renderer keeps it current. */
 facing=Math.PI;
 /** Last round that hit rock or cover (sparks), last knife hit on a guard, and your tally. */
 lastImpact:{point:Point;at:number;shot:number}|null=null;
 lastKnifeHit:{guard:number;killed:boolean;backstab:boolean;at:number}|null=null;
 kills=0;
 /** Last guard blow: when, and whether it connected (renderer: thud or swish). */
 lastStrike:{at:number;landed:boolean}|null=null;
 /** Last bullet that connected (renderer: hit marker, flinch, impact). */
 lastPistolHit:{guard:number;point:Point;headshot:boolean;killed:boolean;shot:number;at:number;damage?:number;tag?:CombatTag;multi?:boolean}|null=null;
 /**
  * Latest scored combat beat (SCRAPE / GRAZE / CLEAN / HEAD / MULTI) for HUD callouts.
  * Renderer clears nothing — age off `at` / `COMBAT_OUTCOME.calloutSeconds`.
  */
 lastCombatOutcome:{tag:CombatTag;at:number;shot?:number}|null=null;
 /**
  * Phase 3 streak economy: ammo drip / director soften / loot bias while style ≥ B.
  * CaveWorld syncs the live style tier each frame via `syncStyleTier`.
  */
 streak=new StyleStreak();
 /** Latest ammo-drip grant (HUD / tests); age off `at`. */
 lastStreakAmmo:{rounds:number;at:number}|null=null;
 /**
  * Ego Savior: one silent lethal save per engagement (P3).
  * Recharges on player kill, leaving combat for `combatLeaveSeconds`, or hatch respawn.
  * `egoIframesUntil` is mission elapsed; while active, `hurtPlayer` ignores damage.
  * `egoHeroUntil` is the brief snappier knife/gun window after a save (P2 theater).
  * `egoSaveSeq` increments on each save so CaveWorld can juice hitstop once.
  * `egoLastThreatAt` stamps last chase/fire threat or core damage (engagement clock).
  */
 egoSaviorUsed=false;
 egoIframesUntil=0;
 egoHeroUntil=0;
 egoSaveSeq=0;
 egoLastThreatAt=0;
 /** Mission time of the previous gun/knife kill (MULTI window). */
 lastKillAt=-1;
 decoy:{position:Point;until:number}|null=null;
 patrol=[world(16,22),world(6,22),world(6,13),world(16,13)];
 /** Player position last tick, for the guard's read on how fast you are moving. */
 lastPlayerPos:Point|null=null;
 /**
  * Cached player horizontal velocity (m/s, world). CaveWorld writes each frame from the
  * real velocity vector; `update` refreshes from position delta as a headless fallback.
  * `firePistol` reads these so the magnetism path stays allocation-light.
  */
 playerVx=0;
 playerVz=0;
 /** Random source for spawns (swappable in tests). */
 rand:()=>number=Math.random;
 constructor(tipsSeen=false){
  this.tipsSeen=tipsSeen;
  this.scatterGold();
  const player=breathHatchSpawn();
  this.position={...player};
  const spawn=randomPredatorSpawn(Math.random,player);
  this.predator.position={...spawn};
  this.predator.lastKnown={...spawn};
  let best=0,bestD=Infinity;
  for(let i=0;i<this.patrol.length;i++){
   const d=distance(spawn,this.patrol[i]);
   if(d<bestD){bestD=d;best=i;}
  }
  this.predator.waypoint=best;
  this.spawnGuards();
  this.killedByGuard=false;
  this.ensureKnife();
  if(!tipsSeen){
   this.notice=SKINNER_FIRST_TIP;
   this.noticeUntil=9;this.feedbackKind='select';
  }
 }
 /**
  * Guarantee a diving knife in inventory. Does not restore gun / consumables —
  * those stay on the corpse or in the hatch stash.
  */
 ensureKnife(){
  if(this.inventory.includes(RESPAWN_KNIFE))return;
  let slot=this.inventory.indexOf(null);
  if(slot<0)slot=0;
  this.inventory[slot]=RESPAWN_KNIFE;
  this.selected=slot;
 }
 /**
  * Place each guard on his overlapping perimeter beat, away from the player
  * and different from his last start. Keeps any gear he looted.
  */
 /** Tests / older call sites still say `spawnGuard()`. */
 spawnGuard(){this.spawnGuards();}
 get hasRelic(){return this.inventory.includes('relic');}
 get mapComplete(){return MAP_FRAGMENT_ORDER.every(id=>this.mapFragments.includes(id));}
 get mapFragmentCount(){return this.mapFragments.length;}
 hasMapFragment(id:MapFragmentId){return this.mapFragments.includes(id);}
 toggleMap(){
  if(this.outcome!=='playing')return false;
  this.mapOpen=!this.mapOpen;
  return true;
 }
 collectMapFragment(id:MapFragmentId){
  if(this.mapFragments.includes(id))return false;
  this.mapFragments=[...this.mapFragments,id];
  return true;
 }
 /** Fraction of the full leak still flowing past the gate (round-port gate valve). */
 get leakFlow(){return this.floodTriggered?leakFlowFraction(this.valveTurned):0;}
 get valveSealed(){return this.valveTurned>=VALVE_CLOSE_RAD-1e-6;}
 /** Never been moved: the first turn has to break the stem free. */
 get valveStuck(){return this.valveTurned<=0;}
 /** Standing (or hovering) square to the leak valve's handwheel, within arm's reach of the stand point. */
 atValve(){
  if(this.outcome!=='playing')return false;
  const d=Math.hypot(this.position.x-VALVE_STAND.x,this.position.z-VALVE_STAND.z);
  return d<VALVE_REACH&&Math.abs(this.position.y-WHEEL_CENTRE.y)<1.4&&this.position.z>WHEEL_CENTRE.z;
 }
 /** At the wheel with somewhere to turn it: any valve can be worked, open or shut. */
 nearValve(){return this.atValve();}
 /** Which way holding E turns the wheel from here: +1 winds it shut, −1 (only once seated) opens it again. */
 get valveTurnDir():1|-1{return this.valveSealed?-1:1;}
 /** Gate seated and water still above the empty line: the sump is pulling it down. */
 get floodDraining(){return this.valveSealed&&this.breathWaterY>BREATH_EMPTY_Y+1e-4;}
 get floodDrained(){return this.valveSealed&&this.breathWaterY<=BREATH_EMPTY_Y+1e-4;}
 /** Said "the floor is clear" for the current seal (reset when the valve opens again). */
 drainDone=false;
 /**
  * Turn the wheel by `rad` (positive = clockwise toward the seat, negative = open).
  * Returns the radians actually applied (stops at the seat and at fully open).
  * Seating and unseating are the pipe's OFF / ON events: they announce the drain or the new leak.
  */
 turnValve(rad:number){
  if(rad===0)return 0;
  const wasSealed=this.valveSealed;
  const before=this.valveTurned;
  this.valveTurned=Math.max(0,Math.min(VALVE_CLOSE_RAD,before+rad));
  if(!wasSealed&&this.valveSealed){
   this.drainDone=false;
   this.say(this.breathWaterY>BREATH_EMPTY_Y+1e-4
    ?'The gate seats with a clunk. The leak has stopped, and the sump is gurgling: the water is going down.'
    :'The gate seats with a clunk. The leak has stopped.','ok');
  }else if(wasSealed&&!this.valveSealed){
   this.drainDone=false;
   this.say(this.floodTriggered?'The gate lifts off its seat. Water is forcing its way in again.':'The gate lifts off its seat. The pipe is quiet.','blocked');
  }
  return this.valveTurned-before;
 }
 say(message:string,kind:FeedbackKind=''){this.notice=message;this.noticeUntil=this.elapsed+4.5;this.feedbackKind=kind;this.feedbackPulse++;}
 /** Slot chrome without center text — used after the one-time first-play tip. */
 pulse(kind:FeedbackKind=''){this.feedbackKind=kind;this.feedbackPulse++;}
 select(slot:number){
  if(this.outcome!=='playing'||slot<0||slot>4)return false;
  if(this.selected===slot)return false;
  this.selected=slot;
  this.pulse(this.inventory[slot]?'select':'blocked');
  return true;
 }
 nearest(){return this.pickups.filter(p=>!p.settling&&distance(p.position,this.position)<3.2&&visible(this.position,p.position)).sort((a,b)=>distance(a.position,this.position)-distance(b.position,this.position))[0];}
 /** Closest stocked supply cache you can actually take right now (walk-over ammo / med / smoke). */
 nearestTakeableCache(){
  const S=SURVIVAL.supplies;
  return this.caches
   .filter(c=>{
    if(!c.stocked||Math.hypot(c.x-this.position.x,c.z-this.position.z)>S.pickupRadius+.4)return false;
    if(c.kind==='ammo')return this.pistol.reserve<PISTOL.reserveMax;
    if(c.kind==='medkit')return this.health<100;
    return this.smokes<SURVIVAL.smoke.max;
   })
   .sort((a,b)=>Math.hypot(a.x-this.position.x,a.z-this.position.z)-Math.hypot(b.x-this.position.x,b.z-this.position.z))[0];
 }
 /** True when the player can take this stocked cache right now. */
 canTakeCache(c:SupplyCache){
  if(!c.stocked)return false;
  if(c.kind==='ammo')return this.pistol.reserve<PISTOL.reserveMax;
  if(c.kind==='medkit')return this.health<100;
  return this.smokes<SURVIVAL.smoke.max;
 }
 /** Closest chest within reach with line of sight (opened or closed). */
 nearestChest(){
  return this.chests
   .filter(c=>distance(c.position,this.position)<3.4&&visible(this.position,{...c.position,y:c.position.y+.4}))
   .sort((a,b)=>distance(a.position,this.position)-distance(b.position,this.position))[0];
 }
 /** True when standing at the hatch stash with line of sight. */
 nearStash(){
  const p=STASH_POSITION;
  return distance(this.position,p)<STASH_REACH&&visible(this.position,{...p,y:p.y+.4});
 }
 /** Persist current stash slots (death / extract / reload all read this key). */
 private persistStash(){
  writeStash(this.stash);
 }
 closeStash(){
  if(!this.stashOpen)return;
  this.stashOpen=false;
  this.stashCue='close';
 }
 private stashUiReady(){
  return this.outcome==='playing'&&this.stashOpen;
 }
 moveInvStash(invI:number,stashI:number){
  if(!this.stashUiReady())return false;
  if(invI<0||invI>=this.inventory.length||stashI<0||stashI>=STASH_CAPACITY)return false;
  const held=this.inventory[invI];
  const slot=this.stash[stashI];
  if(held===null&&slot===null)return false;
  if(held===null&&slot){
   if(slot.kind==='ammo')return this.takeAmmoFromStash(stashI);
   if(slot.item==='gun'&&this.inventory.includes('gun')){
    return this.stripStashGunRounds(stashI);
   }
   this.inventory[invI]=slot.item;
   if(slot.item==='gun'){
    this.equipRifle(slot.cond??RIFLE.kitCond,slot.mods);
    if(slot.rounds)this.pistol.reserve=Math.min(PISTOL.reserveMax,this.pistol.reserve+slot.rounds);
   }
   this.stash[stashI]=null;
   this.persistStash();
   this.stashCue='withdraw';
   this.say(`Took ${ITEMS[slot.item].name}.`,'ok');
   this.selected=invI;
   return true;
  }
  if(held===null||!isStashItem(held))return false;
  if(slot===null){
   this.stash[stashI]=this.stashSlotFor(held);
   this.inventory[invI]=null;
   this.persistStash();
   this.stashCue='deposit';
   this.say(held==='gun'
    ?`Banked ${rifleName(this.gunCond)}${modTag(this.gunMods)}. Safe for good.`
    :`Stored ${ITEMS[held].name}.`,'ok');
   return true;
  }
  if(slot.kind==='ammo'){
   if(this.pistol.reserve>=PISTOL.reserveMax){this.say('Spare rounds are full.','blocked');return false;}
   const take=Math.min(slot.amount,PISTOL.reserveMax-this.pistol.reserve);
   this.pistol.reserve+=take;
   this.stash[stashI]=this.stashSlotFor(held);
   this.inventory[invI]=null;
   if(take<slot.amount){
    const empty=firstEmptyStashSlot(this.stash);
    if(empty>=0)this.stash[empty]={kind:'ammo',amount:slot.amount-take};
   }
   this.persistStash();
   this.stashCue='deposit';
   this.say(`Stored ${ITEMS[held].name}, took ${take} rounds.`,'ok');
   return true;
  }
  if(held==='gun'&&slot.item==='gun'){
   const out={...slot};
   this.stash[stashI]=this.stashSlotFor(held);
   this.inventory[invI]='gun';
   this.equipRifle(out.cond??RIFLE.kitCond,out.mods);
   if(out.rounds)this.pistol.reserve=Math.min(PISTOL.reserveMax,this.pistol.reserve+out.rounds);
   this.persistStash();
   this.stashCue='withdraw';
   this.say(`Swapped rifles.`,'ok');
   this.selected=invI;
   return true;
  }
  if(slot.item==='gun'&&held!=='gun'&&this.inventory.includes('gun')){
   return this.stripStashGunRounds(stashI);
  }
  const outItem=slot.item;
  const outRounds=slot.rounds;
  const outCond=slot.cond??RIFLE.kitCond;
  const outMods=slot.mods;
  this.stash[stashI]=this.stashSlotFor(held);
  this.inventory[invI]=outItem;
  if(outItem==='gun'){
   this.equipRifle(outCond,outMods);
   if(outRounds)this.pistol.reserve=Math.min(PISTOL.reserveMax,this.pistol.reserve+outRounds);
  }
  this.persistStash();
  this.stashCue='withdraw';
  this.say(`Swapped ${ITEMS[held].name} for ${ITEMS[outItem].name}.`,'ok');
  this.selected=invI;
  return true;
 }
 moveInv(from:number,to:number){
  if(!this.stashUiReady()||from===to)return false;
  if(from<0||to<0||from>=this.inventory.length||to>=this.inventory.length)return false;
  const a=this.inventory[from],b=this.inventory[to];
  if(a===null&&b===null)return false;
  this.inventory[from]=b;this.inventory[to]=a;
  this.selected=to;
  this.pulse('select');
  return true;
 }
 moveStash(from:number,to:number){
  if(!this.stashUiReady()||from===to)return false;
  if(from<0||to<0||from>=STASH_CAPACITY||to>=STASH_CAPACITY)return false;
  const a=this.stash[from],b=this.stash[to];
  if(a===null&&b===null)return false;
  this.stash[from]=b;this.stash[to]=a;
  this.persistStash();
  this.pulse('select');
  return true;
 }
 bankPocketGold(){
  if(!this.stashUiReady())return false;
  if(this.gold<=0){this.pulse('blocked');return false;}
  const g=this.bankCarriedGold();
  this.stashCue='deposit';
  this.say(`Banked ${fmtGold(g)} of gold. Vault: ${fmtGold(this.bankedGold)}.`,'ok');
  return true;
 }
 withdrawVaultGold(){
  if(!this.stashUiReady())return false;
  if(this.bankedGold<=0){this.pulse('blocked');return false;}
  const g=this.bankedGold;
  this.bankedGold=0;
  writeBankedGold(0);
  this.gold+=g;
  this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'take',grams:g,at:this.elapsed};
  this.stashCue='withdraw';
  this.say(`Withdrew ${fmtGold(g)} from the vault. You are carrying it again.`,'ok');
  return true;
 }
 depositAmmoPack(stashI:number){
  if(!this.stashUiReady())return false;
  if(stashI<0||stashI>=STASH_CAPACITY)return false;
  if(this.stash[stashI]!==null){this.say('That slot is full.','blocked');return false;}
  if(this.pistol.reserve<=0){this.say('No spare rounds to store.','blocked');return false;}
  const take=Math.min(STASH_AMMO_PACK,this.pistol.reserve);
  this.pistol.reserve-=take;
  this.stash[stashI]={kind:'ammo',amount:take};
  this.persistStash();
  this.stashCue='deposit';
  this.say(`Stored ${take} spare rounds.`,'ok');
  return true;
 }
 withdrawAmmoPack(stashI:number){
  if(!this.stashUiReady())return false;
  return this.takeAmmoFromStash(stashI);
 }
 private takeAmmoFromStash(stashI:number){
  const slot=this.stash[stashI];
  if(!slot||slot.kind!=='ammo')return false;
  if(this.pistol.reserve>=PISTOL.reserveMax){this.say('Spare rounds are full.','blocked');return false;}
  const room=PISTOL.reserveMax-this.pistol.reserve;
  const take=Math.min(slot.amount,room);
  this.pistol.reserve+=take;
  if(take>=slot.amount)this.stash[stashI]=null;
  else this.stash[stashI]={kind:'ammo',amount:slot.amount-take};
  this.persistStash();
  this.stashCue='withdraw';
  this.say(`Took ${take} spare rounds.`,'ok');
  return true;
 }
 private stripStashGunRounds(stashI:number){
  const slot=this.stash[stashI];
  if(!slot||slot.kind!=='item'||slot.item!=='gun')return false;
  const rounds=slot.rounds??0;
  if(rounds<=0){this.say('You already carry an AK-74U.','blocked');return false;}
  const take=Math.min(rounds,PISTOL.reserveMax-this.pistol.reserve);
  if(take<=0){this.say('Spare rounds are full.','blocked');return false;}
  this.pistol.reserve+=take;
  if(take>=rounds)this.stash[stashI]=null;
  else this.stash[stashI]={kind:'item',item:'gun',rounds:rounds-take};
  this.persistStash();
  this.stashCue='withdraw';
  this.say(`Stripped ${take} rounds from the stashed pistol.`,'ok');
  return true;
 }
 /** Put a rifle in your hands: its wear, its upgrades, its magazine size. */
 equipRifle(cond:number,mods?:RifleMods){
  this.gunCond=cond;this.jammed=false;
  this.gunMods=mods?{...mods}:noMods();
  const max=PISTOL.magazine+magBonus(this.gunMods);
  this.pistol.maxMag=max;
  if(this.pistol.mag>max){this.pistol.reserve+=this.pistol.mag-max;this.pistol.mag=max;}
 }
 /** Pocket a gold pickup. */
 takeGold(p:Pickup){
  const g=p.amount??GOLD.barGrams;
  const firstHaul=this.gold<=0;
  this.gold+=g;
  this.pickups=this.pickups.filter(q=>q.id!==p.id);
  this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'take',grams:g,at:this.elapsed};
  if(firstHaul){
   this.say(`+${fmtGold(g)} gold · bank it at the hatch stash`,'ok');
   return;
  }
  if(g>=GOLD.barGrams||this.noticeUntil<=this.elapsed)this.say(`+${fmtGold(g)} gold · carrying ${fmtGold(this.gold)}`,'ok');
 }
 /**
  * Pour every pocket gram into the persistent vault.
  * Used by manual vault drag, extract, and dive-again / restart — never incinerate a haul when the dive ends.
  * Returns grams banked (0 if pockets were empty).
  */
 bankCarriedGold(){
  if(this.gold<=0)return 0;
  const g=this.gold;
  this.gold=0;
  this.bankedGold+=g;
  writeBankedGold(this.bankedGold);
  this.lastHaulBanked=g;
  this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'bank',grams:g,at:this.elapsed};
  return g;
 }
 /** B: throw every gram you carry at your feet. It sinks. */
 ditchGold(){
  if(this.outcome!=='playing'||this.gold<=0){this.pulse('blocked');return false;}
  const g=this.gold;this.gold=0;
  this.pickups.push({id:this.nextId++,item:'gold',amount:g,settling:true,position:{...this.position,y:this.dropY()}});
  this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'ditch',grams:g,at:this.elapsed};
  this.say(`Ditched ${fmtGold(g)} of gold.`,'blocked');
  return true;
 }
 /** Walk speed share left under the gold you carry. */
 loadWalkFactor(){return goldWalkFactor(this.gold);}
 /** Shop: spend saved gold on the rifle in your bag. Needs the stash open. */
 buyUpgrade(track:ModTrack){
  if(this.outcome!=='playing'||!this.stashOpen){this.pulse('blocked');return false;}
  if(!this.inventory.includes('gun')){this.say('Put a rifle in your bag first.','blocked');return false;}
  const level=this.gunMods[track],cost=upgradeCost(level);
  const label=UPGRADE.shopNames[track];
  if(level>=UPGRADE.maxLevel){this.say(`${label} is already maxed.`,'blocked');return false;}
  if(this.bankedGold<cost){this.say(`Need $${Math.round(cost)}. You have $${Math.round(this.bankedGold)}.`,'blocked');return false;}
  this.bankedGold-=cost;writeBankedGold(this.bankedGold);
  const mods={...this.gunMods,[track]:level+1};
  this.equipRifle(this.gunCond,mods);
  this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'upgrade',grams:cost,at:this.elapsed,track,level:level+1};
  this.stashCue='deposit';
  this.say(`Bought ${label} for $${Math.round(cost)}.`,'ok');
  return true;
 }
 /** Shop: buy an AK-74U into an empty bag slot. */
 buyShopRifle(){
  if(this.outcome!=='playing'||!this.stashOpen){this.pulse('blocked');return false;}
  if(this.inventory.includes('gun')){this.say('You already have a rifle.','blocked');return false;}
  const empty=this.inventory.findIndex(x=>x===null);
  if(empty<0){this.say('Bag is full — free a slot first.','blocked');return false;}
  const cost=SHOP_RIFLE_PRICE;
  if(this.bankedGold<cost){this.say(`Need $${cost}. You have $${Math.round(this.bankedGold)}.`,'blocked');return false;}
  this.bankedGold-=cost;writeBankedGold(this.bankedGold);
  this.inventory[empty]='gun';
  this.selected=empty;
  this.equipRifle(RIFLE.kitCond,noMods());
  this.pistol.mag=Math.min(this.pistol.maxMag,30);
  this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'upgrade',grams:cost,at:this.elapsed};
  this.stashCue='deposit';
  this.say(`Bought AK-74U for $${cost}.`,'ok');
  return true;
 }
 /**
  * Free world bars — disabled (barsPerDive / hoardBars are 0). Gold is earned on
  * kill jackpots and extract payday instead. Kept as a no-op hook so callers stay stable.
  */
 scatterGold(){
  if(GOLD.barsPerDive<=0&&GOLD.hoardBars<=0)return;
  const r=this.lootRand;
  const hatch=breathHatchSpawn();
  const spots=[...cells].map(k=>{const [c,rw]=k.split(',').map(Number);return world(c,rw);})
   .filter(p=>fits({...p,y:3},1.2)&&Math.hypot(p.x-hatch.x,p.z-hatch.z)>20&&Math.hypot(p.x-RELIC.x,p.z-RELIC.z)>8);
  for(let i=0;i<GOLD.barsPerDive&&spots.length;i++){
   const k=Math.floor(r()*spots.length),p=spots.splice(k,1)[0];
   const jx=(r()-.5)*2.4,jz=(r()-.5)*2.4;
   this.pickups.push({id:this.nextId++,item:'gold',amount:GOLD.barGrams,position:{x:p.x+jx,y:FLOOR_Y,z:p.z+jz}});
  }
  for(let i=0;i<GOLD.hoardBars;i++){
   const a=(i/GOLD.hoardBars)*Math.PI*2+r()*.3,rad=RELIC_PLINTH.radius+.55+r()*.35;
   this.pickups.push({id:this.nextId++,item:'gold',amount:GOLD.barGrams,position:{x:RELIC.x+Math.cos(a)*rad,y:FLOOR_Y,z:RELIC.z+Math.sin(a)*rad}});
  }
 }
 /**
  * Extract jackpot: pour kilobars into the vault when you leave with the relic.
  * Returns grams added (0 if extractBars is empty).
  */
 bankExtractBars(){
  const [lo,hi]=GOLD.extractBars;
  if(hi<=0)return 0;
  const n=lo+Math.floor(this.lootRand()*(hi-lo+1));
  const g=n*GOLD.barGrams;
  if(g<=0)return 0;
  this.bankedGold+=g;
  writeBankedGold(this.bankedGold);
  this.lastExtractBars=n;
  this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'bank',grams:g,at:this.elapsed};
  return g;
 }
 /** Chest slot for an item from your hands; a rifle keeps its condition. */
 stashSlotFor(item:StashItem):StashSlot{
  if(item!=='gun')return {kind:'item',item};
  const slot:StashSlot={kind:'item',item,cond:this.gunCond};
  if(modLevel(this.gunMods)>0)slot.mods={...this.gunMods};
  return slot;
 }
 nearBreathTank(){
  const t=breathTankMounts()[this.breathTankIndex];
  if(!t)return false;
  return distance(this.position,t)<3.2;
 }
 /**
  * Leave every carried item in a ring at `where` (the corpse), then empty the hands.
  * Pocket pistol rounds ride on a dropped gun when you had one; otherwise they are lost.
  * World pickups that were never taken stay where they are. Hatch stash is untouched.
  */
 dropCarriedAt(where:Point){
  const carried=this.inventory.filter((item):item is Item=>item!==null);
  const pocketRounds=this.pistol.mag+this.pistol.reserve;
  const n=carried.length;
  // Keep loot on the walkable floor — mid-eye drops looked like mystery floating orbs.
  const y=canWalk(where,this.breathWaterY)?FLOOR_Y:this.dropY();
  for(let i=0;i<n;i++){
   const a=(i/n)*Math.PI*2;
   const item=carried[i];
   const drop:Pickup={
    id:this.nextId++,
    item,
    position:{x:where.x+Math.cos(a)*.55,y,z:where.z+Math.sin(a)*.55},
   };
   if(item==='gun'){if(pocketRounds>0)drop.rounds=pocketRounds;drop.cond=this.gunCond;if(modLevel(this.gunMods)>0)drop.mods={...this.gunMods};}
   this.pickups.push(drop);
  }
  this.pistol.mag=0;
  this.pistol.reserve=0;
  this.pistol.reload=0;
  this.jammed=false;
  // Every gram you carried lies on the corpse, sinking.
  if(this.gold>0){
   this.pickups.push({id:this.nextId++,item:'gold',amount:this.gold,position:{x:where.x,y,z:where.z}});
   this.goldEvent={seq:(this.goldEvent?.seq??0)+1,kind:'lost',grams:this.gold,at:this.elapsed};
   this.gold=0;
  }
  this.inventory=[null,null,null,null,null];
  this.selected=0;
  this.pending=null;
 }
 /**
  * Death in the playable returns here: hatch, diving knife only, short air, same water, tank on the next mount.
  * Whatever was carried stays on the corpse. Living guards and fallen bodies stay where they are —
  * no garrison wipe. Director pacing restarts so reinforcements can still arrive into empty slots.
  * If the Soviet guard killed you, he claims gun / bottle / coat from that corpse and will use them.
  */
 respawnAtHatch(){
  const corpse={...this.position};
  // Death clears the streak; mid-streak death queues a one-line corpse urge.
  this.streak.noteDeath(this.elapsed);
  const urge=this.streak.consumeDeathUrge();
  this.dropCarriedAt(corpse);
  if(this.killedByGuard){
   this.claimGuardLoot(corpse);
   this.killedByGuard=false;
  }
  if(this.stashOpen)this.closeStash();
  const water=this.breathWaterY;
  this.breathTankIndex=nextBreathTankIndex(this.breathTankIndex);
  this.breathWaterY=water;
  this.breathDeaths+=1;
  this.position={...breathHatchSpawn()};
  this.health=100;
  this.air=BREATH_RESPAWN_LITRES;
  this.bailout=0;
  this.buoyancy=0;
  this.buoyancyTrim=0;
  this.stamina=100;
  this.gasPanicUntil=0;
  this.outcome='playing';
  this.reason='';
  this.pending=null;
  // Ego Savior: hatch wake always clears engagement state.
  this.egoSaviorUsed=false;
  this.egoIframesUntil=0;
  this.egoHeroUntil=0;
  this.egoLastThreatAt=0;
  this.resetFirefight();
  this.ensureKnife();
  // Knife-on-respawn + hatch stash unchanged; urge is one line, not a new HUD widget.
  this.say(urge??'You wake at the hatch with your diving knife. Everything else you carried is on your corpse — recover it. The dead stay where they fell.','blocked');
 }
 /**
  * After a guard kill, pull gun / bottle / coat lying on the corpse into his kit.
  * Untaken corridor gear farther away stays on the floor.
  */
 claimGuardLoot(corpse:Point){
  const g=this.guards[this.lootGuardIndex]??this.guard;
  const keep:Pickup[]=[];
  for(const p of this.pickups){
   // Horizontal reach: the corpse point is at eye height, the loot lies on the floor.
   const near=Math.hypot(p.position.x-corpse.x,p.position.z-corpse.z)<=GUARD_LOOT_RANGE;
   if(near&&p.item==='gun'){g.gun=true;g.loot={cond:p.cond??RIFLE.kitCond,mods:p.mods};continue;}
   if(near&&p.item==='gold'){g.gold=(g.gold??0)+(p.amount??0);continue;}
   if(near&&p.item==='bottle'){
    g.bottle=true;
    g.air=Math.max(g.air,GUARD_BOTTLE_AIR);
    continue;
   }
   if(near&&p.item==='coat'){g.coat=true;continue;}
   keep.push(p);
  }
  this.pickups=keep;
  if(g.gun||g.bottle||g.coat){
   this.say('The guard took what you dropped.','blocked');
  }
 }
 private takeChestScrap(chest:Chest){
  const got=this.collectMapFragment(chest.fragment);
  if(!got)return;
  const n=this.mapFragmentCount;
  const label=MAP_FRAGMENT_LABEL[chest.fragment];
  if(this.mapComplete)this.say(`Map complete — ${label} fitted. Tab opens the chart; exits are marked.`,'ok');
  else this.say(`Map fragment (${n}/3): ${label}. Tab reviews the chart.`,'ok');
 }
 interact(){
  if(this.outcome!=='playing')return;
  if(this.nearBreathTank()){
   if(this.air>=AIR_MAIN_MAX-.01){this.say('The wall tank hisses. Your cylinder is already full.','blocked');return;}
   this.air=AIR_MAIN_MAX;
   this.say('Wall tank. Main cylinder filled.','ok');
   return;
  }
  if(distance(this.position,EXIT)<4){
   if(!this.hasRelic){this.say('Extraction needs the ammonite relic from the bone alcove.','blocked');return;}
   // Extract payday: pocket gold + kilobar jackpot into the vault (no free floor bars).
   const hauled=this.bankCarriedGold();
   const extractPay=this.bankExtractBars();
   this.outcome='won';
   const bits:string[]=['Relic secured.'];
   if(hauled>0)bits.push(`Banked ${fmtGold(hauled)}.`);
   if(extractPay>0)bits.push(`Extract jackpot: ${this.lastExtractBars} kg.`);
   bits.push(`Vault: ${fmtGold(this.bankedGold)}.`);
   const tip=almostUpgradeLine(this.gunMods,this.bankedGold,this.inventory.includes('gun'));
   if(tip)bits.push(tip);
   this.reason=bits.join(' ');
   return;
  }
  // Hatch stash — fixed bank near spawn; separate from map-scrap crates.
  // Opening banks pocket gold into shop money (no drag). Gear still drags bag↔chest.
  if(this.nearStash()){
   if(!this.stashOpen){
    this.stashOpen=true;
    this.stashCue='open';
    const g=this.bankCarriedGold();
    const tip=almostUpgradeLine(this.gunMods,this.bankedGold,this.inventory.includes('gun'));
    if(g>0){
     this.stashCue='deposit';
     this.say(tip?`Banked ${fmtGold(g)}. ${tip}`:`Stash open. Gold: $${Math.round(this.bankedGold)}. Esc closes.`,'ok');
    }else{
     this.say(tip?`Stash open. ${tip}`:'Stash open. Drag gear. Buy in the Shop. Esc closes.','ok');
    }
    return;
   }
   this.closeStash();
   this.say('Chest closed.','ok');
   return;
  }
  if(this.stashOpen)this.closeStash();
  const chest=this.pending===null?this.nearestChest():undefined;
  const pickup=this.pending===null?this.nearest():this.pickups.find(p=>p.id===this.pending);
  const chestCloser=!!chest&&(!pickup||distance(chest.position,this.position)<=distance(pickup.position,this.position)+.15);
  // Open-top plastic crate: one E grabs the scrap that is already visible.
  if(chestCloser&&chest&&!chestHasLid(chest.kind)){
   if(!this.hasMapFragment(chest.fragment)){this.takeChestScrap(chest);return;}
   if(!pickup){this.say(`The ${CHEST_LABEL[chest.kind]} is empty.`,'blocked');return;}
  }
  // Prefer a closed chest when it is at least as close as the nearest pickup.
  if(chestCloser&&chest&&!chest.open){
   // First E only opens — the chart scrap stays visible inside until taken.
   chest.open=true;
   this.say(`Opened the ${CHEST_LABEL[chest.kind]}. A chart scrap rests inside.`,'ok');
   return;
  }
  // Second E: take the physical scroll from an open crate.
  if(chestCloser&&chest?.open&&!this.hasMapFragment(chest.fragment)){
   this.takeChestScrap(chest);
   return;
  }
  if(chest?.open&&!pickup){this.say(`The ${CHEST_LABEL[chest.kind]} is empty.`,'blocked');return;}
  if(!pickup||distance(pickup.position,this.position)>3.2||!visible(this.position,pickup.position)){this.pending=null;return;}
  // Ammonite relic: locked until you hold the Soviet key from the main officer (key is consumed).
  if(pickup.item==='relic'){
   const keySlot=this.inventory.indexOf('sovietKey');
   if(keySlot<0){
    this.say('Needs the Soviet key. Locked.','blocked');
    this.pulse('blocked');
    return;
   }
   this.inventory[keySlot]=null;
  }
  // A second pistol is only worth its rounds: strip the magazine and leave the frame.
  if(pickup.item==='gun'&&this.inventory.includes('gun')&&((pickup.cond??RIFLE.kitCond)>this.gunCond+.01||modValue(pickup.mods)>modValue(this.gunMods))){
   // A better rifle than the one in your hands: trade up. Yours drops here with its wear.
   const theirs=pickup.cond??RIFLE.kitCond,rounds=this.pistolRoundsOn(pickup);
   this.pickups=this.pickups.filter(p=>p.id!==pickup.id);
   const old:Pickup={id:this.nextId++,item:'gun',cond:this.gunCond,rounds:0,settling:true,position:{...this.position,y:this.dropY()}};
   if(modLevel(this.gunMods)>0)old.mods={...this.gunMods};
   this.pickups.push(old);
   this.equipRifle(theirs,pickup.mods);
   this.pistol.reserve=Math.min(PISTOL.reserveMax,this.pistol.reserve+rounds);
   this.pending=null;this.say(`Traded up: ${rifleName(theirs)}${modTag(pickup.mods)}.`,'ok');return;
  }
  if(pickup.item==='gun'&&this.inventory.includes('gun')){
   const take=Math.min(this.pistolRoundsOn(pickup),PISTOL.reserveMax-this.pistol.reserve);
   if(take<=0){this.say('You already carry an AK-74U and your spare rounds are full.','blocked');return;}
   this.pistol.reserve+=take;this.pickups=this.pickups.filter(p=>p.id!==pickup.id);
   this.pending=null;this.say(`Stripped its magazine: +${take} rounds.`,'ok');return;
  }
  // Gold goes in your pockets, not a slot: every gram is weight.
  if(pickup.item==='gold'){this.takeGold(pickup);this.pending=null;return;}
  // One press, one pickup: a free slot if there is one, otherwise it swaps into the slot
  // in your hand and the old item drops where you stand (select 1–5 first to choose).
  let slot=this.inventory.indexOf(null);
  if(slot<0)slot=this.selected;
  const old=this.inventory[slot];this.inventory[slot]=pickup.item;this.selected=slot;
  this.pickups=this.pickups.filter(p=>p.id!==pickup.id);if(old)this.pickups.push({id:this.nextId++,item:old,settling:true,position:{...this.position,y:this.dropY()}});
  // A downed guard's pistol still has his rounds in it.
  if(pickup.item==='gun'&&pickup.rounds)this.pistol.reserve=Math.min(PISTOL.reserveMax,this.pistol.reserve+pickup.rounds);
  if(pickup.item==='gun'){this.equipRifle(pickup.cond??RIFLE.kitCond,pickup.mods);if(pickup.cond!==undefined&&pickup.cond<RIFLE.kitCond&&this.noticeUntil<=this.elapsed)this.say(`${rifleName(pickup.cond)}. It will jam and pull wide.`,'ok');}
  const sprung=pickup.item==='relic'&&!this.floodTriggered;
  if(sprung){
   this.floodTriggered=true;
   this.valveTurned=0;
   this.drainDone=false;
  }
  const got=sprung?'Booby trap! Taking the relic opened the flood valve. Water is rising — reach extraction!':pickup.item==='relic'?'Relic unlocked. Get to the extraction pool.':`${ITEMS[pickup.item].name} collected.`;
  this.pending=null;this.say(old?`${got} Dropped the ${ITEMS[old].name.toLowerCase()}.`:got,'ok');
  if(pickup.item==='relic'&&this.predator.state!=='dead'&&this.predator.state!=='damaged'){
   this.predator.state='alert';this.predator.timer=0;this.predator.lastKnown={...this.position};
  }
 }
 drop(){
  const item=this.inventory[this.selected];
  if(!item){this.pulse('blocked');return;}
  this.pickups.push({id:this.nextId++,item,position:{...this.position,y:this.dropY()}});
  this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');
 }
 use(){
  const item=this.inventory[this.selected];
  if(!item){this.pulse('blocked');return;}
  if(item==='knife'){this.pulse('blocked');return;}
  if(item==='air'){
   if(this.bailout>=AIR_BAILOUT_MAX){this.pulse('blocked');return;}
   this.bailout=AIR_BAILOUT_MAX;this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='bandage'){
   if(this.health>=100){this.pulse('blocked');return;}
   this.health=Math.min(100,this.health+45);this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='flare'){
   this.decoy={position:{...this.position},until:this.elapsed+12};
   if(this.predator.state!=='dead'&&this.predator.state!=='damaged'){
    this.predator.state='search';this.predator.timer=0;this.predator.lastKnown={...this.position};
   }
   this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='bottle'){
   if(this.air>=AIR_MAIN_MAX-.01){this.pulse('blocked');return;}
   this.air=Math.min(AIR_MAIN_MAX,this.air+SPARE_BOTTLE_LITRES);
   this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  // R with the pistol in hand changes the magazine.
  if(item==='gun'){this.reloadPistol();return;}
  // Coat does not change your damage; it is only carried, then lost.
  if(item==='coat'){this.pulse('blocked');return;}
  // Key is carry-only until spent unlocking the relic.
  if(item==='sovietKey'){this.pulse('blocked');return;}
  this.pulse('blocked');
 }
 /** Where a dropped item comes to rest: on the floor on foot, just below you when swimming. */
 /** Let go at hand height (a forearm below the eye); gravity and the water take it from there. */
 dropY(){return Math.max(supportHeight(this.position.x,this.position.z),this.position.y-.75);}
 /** Fall, sink, float and settle every loose item for this tick. */
 stepPickups(dt:number){
  for(const p of this.pickups){
   const ground=supportHeight(p.position.x,p.position.z);
   if(!p.body){
    // Already on its support and heavy enough to stay there: nothing to integrate.
    if(Math.abs(p.position.y-ground)<1e-4&&submergedFraction(p.position.y,ITEM_BODY[p.item].height,this.breathWaterY)===0)continue;
    p.body={vy:0,resting:false};
   }
   stepBody(p.item,p.position,p.body,dt,this.breathWaterY,ground);
  }
 }
 /** Rounds you get by stripping a pistol you find (the corridor gun comes loaded). */
 pistolRoundsOn(p:Pickup){return p.rounds??PISTOL.magazine;}
 /** Start a magazine change on the pistol (R, or automatically when the last round goes). */
 reloadPistol(){
  const p=this.pistol;
  if(this.jammed){
   // Tap, rack, bang: clearing a stoppage costs a moment, not a magazine.
   this.jammed=false;p.cool=Math.max(p.cool,RIFLE.clearSeconds);
   this.combatCue='pistol-clear';this.pulse('ok');
   return true;
  }
  if(p.reload>0){this.pulse('blocked');return false;}
  if(p.mag>=p.maxMag){this.say('Magazine is full.','blocked');return false;}
  if(p.reserve<=0){this.say('No spare rounds. Find an ammo box or a downed guard\'s pistol.','blocked');return false;}
  startReload(p);
  this.combatCue='pistol-reload';
  this.pulse('ok');
  return true;
 }
 /**
  * Pull the trigger with the TT-33 in hand. One hitscan ray from the centre of the screen:
  * `origin` is the camera position and `dir` its forward vector (world space). One bullet
  * is one damage event on at most one guard (the nearest the ray meets).
  */
 firePistol(origin:Point,dir:Point):'fired'|'cooldown'|'reloading'|'empty'|'blocked'|'jammed'{
  if(this.outcome!=='playing'||this.inventory[this.selected]!=='gun')return 'blocked';
  const p=this.pistol;
  const gate=canFire(p);
  if(gate==='empty'){
   // Dry trigger: start a reload if there is anything to load, otherwise it just clicks.
   if(!this.reloadPistol())this.combatCue='pistol-dry';
   return 'empty';
  }
  if(gate!=='ready')return gate;
  if(this.jammed){this.combatCue='pistol-jam';p.cool=PISTOL.fireInterval;if(this.noticeUntil<=this.elapsed)this.say('Jammed. R to clear.','blocked');return 'jammed';}
  // Worn rifles fail to feed: the round stays put, the trigger goes dead until you clear it.
  const jam=jamChance(this.gunCond)*jamMult(this.gunMods);
  if(jam>0&&this.rand()<jam){
   this.jammed=true;this.combatCue='pistol-jam';p.cool=PISTOL.fireInterval;
   this.say('Stoppage! R to clear.','blocked');
   return 'jammed';
  }
  spendRound(p);
  this.hearGunshot();
  // Horizontal speed gates scatter damp + cone/radius magnetism (read before scatter).
  const horiz=Math.sqrt(this.playerVx*this.playerVx+this.playerVz*this.playerVz);
  // Worn barrel scatter — slightly tighter while moving so assist isn't eaten by spread.
  const sigma=spreadSigma(this.gunCond)*spreadMult(this.gunMods)*movingScatterScale(horiz);
  dir=scatter(dir,sigma,this.rand);
  // Hero boost (ego save): hair of faster cyclic rate — no long freeze.
  p.cool*=cycleMult(this.gunMods)*this.heroCoolScale();
  // A pistol round is spent within a metre or two of water.
  const range=origin.y<this.breathWaterY?PISTOL.rangeUnderwater:PISTOL.range;
  const targets=this.guards
   .map((g,id)=>({g,id}))
   .filter(({g})=>liveGuard(g))
   .map(({g,id})=>({id,foot:{x:g.position.x,y:FLOOR_Y,z:g.position.z}}));
  // Player→enemy magnetism: angular cone pull (primary) + modest radius rim (secondary).
  // Applied after scatter. Walls / LOS stay honest. Dual ray: honest pre-magnetism dir
  // at scale-1 vs magnetized dir + soft scale — magnetism-only contact → SCRAPE.
  const hitboxScale=playerVelocityMultiplier(horiz);
  const assistAng=playerAssistAngle(horiz);
  const assistedDir=magnetizeAim(origin,dir,targets,assistAng,range);
  const los=(a:Point,b:Point)=>visible(a,b);
  const unassisted=hitscan(origin,dir,targets,range,los,1);
  const hit=hitscan(origin,assistedDir,targets,range,los,hitboxScale);
  if(p.mag===0&&p.reserve>0)startReload(p);
  if(!hit){
   this.combatCue='pistol-miss';
   const wall=rayWallPoint(origin,assistedDir,range);
   if(wall)this.lastImpact={point:wall,at:this.elapsed,shot:p.shots};
   return 'fired';
  }
  const tag=classifyPlayerHit(hit,unassisted)??'CLEAN';
  const g=this.guards[hit.id];
  const dmg=pistolDamage(hit.distance,hit.headshot,SURVIVAL.roles[g.role].headMult)*damageMult(this.gunMods);
  const killed=this.guardTakeDamage(g,dmg);
  const multi=killed&&isMultiKill(this.elapsed,this.lastKillAt);
  this.lastPistolHit={guard:hit.id,point:hit.point,headshot:hit.headshot,killed,shot:p.shots,at:this.elapsed,damage:dmg,tag,multi};
  this.lastCombatOutcome={tag:multi?'MULTI':tag,at:this.elapsed,shot:p.shots};
  this.combatCue=killed?'pistol-kill':hit.headshot?'pistol-head':'pistol-hit';
  if(killed){this.kills++;this.lastKillAt=this.elapsed;}
  if(killed&&(this.noticeUntil<=this.elapsed||!this.tipsSeen))this.say(hit.headshot?'Headshot. Guard down.':'Guard down.','ok');
  return 'fired';
 }
 /** Your shot is heard through the bunker: guards in earshot know where it came from (not see you). */
 hearGunshot(){
  for(const g of this.guards){
   if(!liveGuard(g)||distance(g.position,this.position)>SURVIVAL.gunshotHearing)continue;
   if(g.state==='patrol'){g.state='search';g.timer=0;g.arrived=false;g.lost=0;g.lastKnown={...this.position};}
   else if(!g.sees)g.lastKnown={...this.position};
  }
 }
 /**
  * Sights on a guard: call every frame the pistol is up with the camera ray. Resting the
  * crosshair on a guard who can see you for `GUARD_TARGETED_DWELL` sets off the squad.
  */
 aimAt(origin:Point,dir:Point,dt:number){
  if(this.outcome!=='playing'||this.inventory[this.selected]!=='gun'){this.aimDwell.fill(0);return null;}
  const targets=this.guards.map((g,id)=>({g,id})).filter(({g})=>liveGuard(g))
   .map(({g,id})=>({id,foot:{x:g.position.x,y:FLOOR_Y,z:g.position.z}}));
  const hit=hitscan(origin,dir,targets,GUARD_GUN_RANGE+8,(a,b)=>visible(a,b)&&!smokeBlocks(this.clouds,a,b,this.elapsed));
  for(let i=0;i<this.guards.length;i++){
   if(!hit||hit.id!==i){this.aimDwell[i]=0;continue;}
   this.aimDwell[i]=(this.aimDwell[i]??0)+dt;
   const g=this.guards[i];
   if(this.aimDwell[i]>=GUARD_TARGETED_DWELL&&g.team<=this.elapsed)this.squadAlert(g,'targeted');
  }
  return hit?hit.id:null;
 }
 /**
  * Guard A has been shot, spotted you, or has a gun on him. He and every living guard within
  * `GUARD_SQUAD_RADIUS` of him go on alert together: each shows his detection notice, is
  * told where you are, and engages. Each still needs his own reaction time and a free
  * shooting slot before he fires, so a squad call-out is a warning, not an instant volley.
  */
 squadAlert(source:Guard,reason:'shot'|'targeted'|'spotted'){
  if(!liveGuard(source)&&reason==='targeted')return [];
  const squad=this.guards
   .filter(g=>liveGuard(g)&&(g===source||distance(g.position,source.position)<=GUARD_SQUAD_RADIUS))
   .sort((a,b)=>distance(a.position,this.position)-distance(b.position,this.position));
  const fresh=squad.filter(g=>g.state==='patrol'||g.state==='search');
  const until=this.elapsed+GUARD_TEAM_MEMORY;
  let side:1|-1=this.rand()<.5?1:-1;
  for(const g of squad){
   g.team=until;
   g.lastKnown={...this.position};g.lost=0;
   if(g.state==='chase')continue;
   g.noticeAt=this.elapsed;
   g.state='chase';g.timer=0;g.arrived=false;g.pause=0;g.firstShot=true;
   // Alternate flank sides so a pair comes at you from two directions.
   g.flankSide=side;side=side===1?-1:1;
   const r=SURVIVAL.roles[g.role].reaction;
   g.reactT=Math.max(g.reactT,r[0]+(r[1]-r[0])*this.rand());
  }
  if(fresh.length>1||(fresh.length===1&&fresh[0]!==source)){
   this.squadAlertAt=this.elapsed;
   if(this.noticeUntil<=this.elapsed)this.say(fresh.length>2?`${fresh.length} guards are onto you — they are working together.`:'Another guard heard it — they are coming for you together.','blocked');
  }
  return squad;
 }
 /** Share one squad's picture of you: anyone who sees you calls it on the radio. */
 private shareSquadIntel(){
  const hunting=this.guards.filter(g=>liveGuard(g)&&g.team>this.elapsed);
  if(!hunting.length)return;
  if(!hunting.some(g=>g.sees&&distance(g.position,this.position)<GUARD_GUN_RANGE+8))return;
  const until=this.elapsed+GUARD_TEAM_MEMORY;
  for(const g of hunting){
   g.team=until;g.lastKnown={...this.position};g.lost=0;
   if(g.state!=='chase'){g.state='chase';g.timer=0;}
  }
 }
 /**
  * Where a squad member without a line on you heads: a point `GUARD_FLANK_DISTANCE` from
  * you, swung `GUARD_FLANK_ANGLE` off his straight approach to his side, so the team
  * closes from more than one direction. Falls back to your position if that spot is rock.
  */
 flankPoint(g:Guard,target:Point=g.lastKnown,radius=GUARD_FLANK_DISTANCE,angle=GUARD_FLANK_ANGLE):Point{
  const dx=g.position.x-target.x,dz=g.position.z-target.z;
  const len=Math.hypot(dx,dz)||1;
  if(len<radius*1.2)return {...target};
  const a=Math.atan2(dx,dz)+g.flankSide*angle;
  const p={x:target.x+Math.sin(a)*radius,y:g.position.y,z:target.z+Math.cos(a)*radius};
  return fits(p,GUARD_BODY_RADIUS)&&visible(p,target)?p:{...target};
 }
 /**
  * Damage one guard through the shared `takeDamage` rule (one call per bullet or stab).
  * A hit staggers him: cancels a melee wind-up, costs him his shooting slot, and tells him
  * where you are. The last hit drops him and his pistol.
  */
 guardTakeDamage(g:Guard,amount:number){
  const {killed,dealt}=takeDamage(g,amount);
  g.hitAt=this.elapsed;
  g.dealtByPlayer=(g.dealtByPlayer??0)+dealt;
  // Shooting one of them brings the rest of the squad in, whether or not he survives it.
  this.squadAlert(g,'shot');
  if(killed){
   this.leechOnKill(g.position,g.dealtByPlayer??amount);
   this.rechargeEgoMercy();
   g.dealtByPlayer=0;
   g.speed=0;g.vx=0;g.vz=0;g.turnRate=0;g.flinch=0;g.windup=0;g.downFor=0;
   g.fireToken=false;g.meleeToken=false;
   // Variable-ratio kill loot (killLoot.ts): category + magnitude. Dry kills pay nothing.
   // Outside the schedule: stolen corpse returns, and the officer's Soviet key.
   const stolen=g.loot;g.loot=undefined;
   const stolenGold=g.gold??0;g.gold=0;
   const loot=rollKillLoot(g.role,PISTOL.magazine,this.lootRand,this.killLootEmptyStreak);
   // Soft pity tracker: empty pockets stack; a real drop clears the drought.
   if(isEmptyKillLoot(loot.bucket))this.killLootEmptyStreak++;
   else this.killLootEmptyStreak=0;
   const dropGun=!!stolen||(loot.dropGun&&g.gun);
   if(dropGun){
    const side={x:Math.cos(g.heading)*.45,z:-Math.sin(g.heading)*.45};
    const id=this.nextId++;
    const cond=stolen?stolen.cond:loot.cond;
    // Stolen mags re-roll fill; schedule mags use the rolled share. Streak bias is a few extras.
    const rounds=(stolen?rollDropRounds(PISTOL.magazine,this.lootRand):loot.rounds)+streakLootRoundsBonus(this.streak.tier);
    const drop:Pickup={id,item:'gun',cond,rounds,position:{x:g.position.x+side.x,y:FLOOR_Y,z:g.position.z+side.z}};
    if(stolen?.mods)drop.mods=stolen.mods;
    if(!stolen&&loot.nearMiss)drop.nearMiss=true;
    this.pickups.push(drop);
    if(stolen){this.prizeDrop={id,cond,at:this.elapsed};this.say(`He had your ${rifleName(cond)}${modTag(stolen.mods)}. Take it back.`,'ok');}
    else if(rifleIsPrize(cond)){
     this.prizeDrop={id,cond,at:this.elapsed};
     this.say(`${rifleName(cond)} on the floor. Fight on with it, or bank it in the stash.`,'ok');
    }else if(loot.nearMiss&&this.noticeUntil<=this.elapsed){
     this.say('Close — almost a keeper.','blocked');
    }
    g.dropId=id;
   }
   if(g.gun)g.gun=false;
   // Schedule gold, plus anything he took off your body (always returned).
   const grams=(loot.dropGold?loot.goldGrams:0)+stolenGold;
   if(grams>0){
    const side={x:Math.sin(g.heading)*.35,z:Math.cos(g.heading)*.35};
    this.pickups.push({id:this.nextId++,item:'gold',amount:grams,position:{x:g.position.x+side.x,y:FLOOR_Y,z:g.position.z+side.z}});
   }
   // Classical cue every kill (incl. dry): HUD flash + inventory pulse. Stolen recovery skips theater.
   if(!stolen){
    const kind=killLootCueFor(loot);
    this.killLootEvent={
     seq:(this.killLootEvent?.seq??0)+1,
     kind,
     at:this.elapsed,
     cond:loot.dropGun?loot.cond:undefined,
     goldGrams:loot.dropGold?loot.goldGrams:undefined,
    };
    // Dry still flashes — empty pockets get blocked juice, never silence.
    this.pulse(killLootFeedback(kind));
    if(kind==='jackpot'&&this.noticeUntil<=this.elapsed){
     this.say(`Fat purse — ${fmtGold(loot.goldGrams)} on the floor.`,'ok');
    }
   }
   // Main officer drops the only Soviet key that unlocks the ammonite relic.
   if(isMainGuard(g)){
    const side={x:-Math.cos(g.heading)*.4,z:Math.sin(g.heading)*.4};
    this.pickups.push({id:this.nextId++,item:'sovietKey',position:{x:g.position.x+side.x,y:FLOOR_Y,z:g.position.z+side.z}});
    if(this.noticeUntil<=this.elapsed)this.say('The officer drops a Soviet key.','ok');
   }
   return true;
  }
  g.flinch=SURVIVAL.hitFlinch;
  if(g.windup>0){g.windup=0;g.meleeCool=Math.max(g.meleeCool,.9);g.meleeToken=false;}
  g.shootCool=Math.max(g.shootCool,SURVIVAL.hitFlinch+.15);
  if(g.fireToken){g.fireToken=false;g.burstLeft=0;g.burstIndex=0;g.tokenCool=Math.max(g.tokenCool,.6);}
  g.lastKnown={...this.position};
  if(g.state!=='chase'){g.state='chase';g.timer=0;g.lost=0;g.firstShot=true;}
  return false;
 }
 /**
  * Fresh blood: a kill close enough to be showered by it heals a share of the damage
  * you dealt that enemy, instantly — only if you are hurt, never past full.
  */
 leechOnKill(at:Point,dealt:number){
  const L=SURVIVAL.leech;
  if(this.outcome!=='playing'||this.health>=100||dealt<=0)return 0;
  if(Math.hypot(at.x-this.position.x,at.z-this.position.z)>L.radius)return 0;
  const heal=Math.min(100-this.health,dealt*L.fraction);
  this.health+=heal;
  this.leech={seq:(this.leech?.seq??0)+1,at:this.elapsed,amount:heal,point:{...at}};
  return heal;
 }
 /** Last fresh-blood heal, for the screen flash (seq changes on every heal). */
 leech:{seq:number;at:number;amount:number;point:Point}|null=null;
 /** Sync the CaveWorld style meter tier so streak gates match the pip. */
 syncStyleTier(tier:number){this.streak.syncTier(tier);}
 /** True while Ego Savior i-frames are live (damage ignored in `hurtPlayer`). */
 egoIframesActive(){return this.egoIframesUntil>this.elapsed;}
 /** True while the brief post-save knife/gun snap window is live. */
 egoHeroActive(){return this.egoHeroUntil>this.elapsed;}
 /** Cooldown multiplier while hero boost is live (<1 = faster); else 1. */
 heroCoolScale(){return this.egoHeroActive()?EGO_SAVIOR.heroCooldownScale:1;}
 /**
  * Hard critical theater: suit ≤ ~15% and/or ego i-frames.
  * Drives red vignette / heartbeat / audio — never INVULNERABLE text.
  */
 criticalTheaterActive(){
  return this.health<=EGO_SAVIOR.criticalHp||this.egoIframesActive();
 }
 /** Live guard chasing or holding a fire token — still in the engagement. */
 private egoThreatActive(){
  for(const g of this.guards){
   if(!liveGuard(g))continue;
   if(g.state==='chase'||g.fireToken)return true;
  }
  return false;
 }
 /** Stamp the engagement clock (core damage or active chase/fire). */
 private noteEgoThreat(){this.egoLastThreatAt=this.elapsed;}
 /**
  * Restore mercy for a new engagement. Does not clear live i-frames / hero window —
  * those age off elapsed so the current save window stays honest.
  */
 rechargeEgoMercy(){this.egoSaviorUsed=false;}
 /**
  * Engagement tick: keep threat clock fresh while chase/fire is live; after
  * `combatLeaveSeconds` without threat or core damage, mercy recharges.
  */
 private tickEgoEngagement(){
  if(this.egoThreatActive())this.noteEgoThreat();
  if(!this.egoSaviorUsed)return;
  if(this.elapsed-this.egoLastThreatAt>=EGO_SAVIOR.combatLeaveSeconds)this.rechargeEgoMercy();
 }
 /**
  * Stretch chase/fire shoot cadence without freezing the sim.
  * Called once on lethal save: bump shootCool, and keep padding burst gaps while i-frames last.
  */
 private desyncEgoCadence(){
  const pad=EGO_SAVIOR.shootCoolPadMin+(EGO_SAVIOR.shootCoolPadMax-EGO_SAVIOR.shootCoolPadMin)*this.rand();
  for(const g of this.guards){
   if(!liveGuard(g)||!g.gun)continue;
   if(g.state!=='chase'&&!g.fireToken)continue;
   const cfg=SURVIVAL.roles[g.role];
   let cool=Math.max(g.shootCool,pad);
   if(g.burstLeft>0)cool=Math.max(cool,cfg.burstGap+EGO_SAVIOR.burstGapPad);
   g.shootCool=cool;
  }
 }
 /** Extra seconds added to burst/rest gaps while Ego Savior i-frames are active. */
 private egoCadencePad(){return this.egoIframesActive()?EGO_SAVIOR.burstGapPad:0;}
 /**
  * Combat / creature core damage only. Air-empty and flood drown set `outcome='lost'`
  * in `update` and must never call this — environmental deaths stay honest (no clamp / i-frames).
  */
 hurtPlayer(amount:number,from:Point,reason:string,g:Guard|null){
  if(amount<=0||this.outcome!=='playing')return;
  // True i-frames: ignore damage entirely (no death, no streak break, no theater).
  if(this.egoIframesActive())return;
  const lethal=this.health-amount<=0;
  // Silent lethal overflow save — once per engagement (kill / leave-combat recharges).
  if(lethal&&!this.egoSaviorUsed){
   this.egoSaviorUsed=true;
   const span=EGO_SAVIOR.clampHpMax-EGO_SAVIOR.clampHpMin;
   this.health=EGO_SAVIOR.clampHpMin+Math.floor(this.rand()*(span+1));
   const iframe=EGO_SAVIOR.iframeMin+(EGO_SAVIOR.iframeMax-EGO_SAVIOR.iframeMin)*this.rand();
   this.egoIframesUntil=this.elapsed+iframe;
   this.egoHeroUntil=this.elapsed+EGO_SAVIOR.heroBoostSeconds;
   this.egoSaveSeq+=1;
   this.desyncEgoCadence();
   // Hit still registers (panic / direction / streak) — no “saved” / INVULNERABLE UI.
   this.streak.noteCoreHit(amount,this.elapsed);
   this.gasPanicUntil=this.elapsed+AIR_PANIC_SECONDS;
   this.director.hurt.push({at:this.elapsed,amount});
   this.damageFrom.push({x:from.x,z:from.z,at:this.elapsed});
   if(this.damageFrom.length>8)this.damageFrom.shift();
   this.noteEgoThreat();
   return;
  }
  // One solid core hit while B+ breaks the streak (loud juice in CaveWorld).
  this.streak.noteCoreHit(amount,this.elapsed);
  this.health=Math.max(0,this.health-amount);
  this.gasPanicUntil=this.elapsed+AIR_PANIC_SECONDS;
  this.director.hurt.push({at:this.elapsed,amount});
  this.damageFrom.push({x:from.x,z:from.z,at:this.elapsed});
  if(this.damageFrom.length>8)this.damageFrom.shift();
  this.noteEgoThreat();
  if(this.health<=0){
   this.killedByGuard=!!g;
   if(g)this.lootGuardIndex=this.guards.indexOf(g);
   this.outcome='lost';
   // Pockets auto-bank on dive-again; count them toward the unfinished buy tease.
   const tip=almostUpgradeLine(this.gunMods,this.bankedGold+this.gold,this.inventory.includes('gun'));
   this.reason=tip?`${reason} ${tip}`:reason;
  }
 }
 /**
  * Mouse-click stab while the diving knife is selected.
  * `look` is a unit-ish camera forward vector in world space (XZ matter most).
  */
 stab(look:Point):StabResult{
  if(this.outcome!=='playing')return 'blocked';
  if(this.inventory[this.selected]!=='knife')return 'blocked';
  const p=this.predator;
  if(p.stabCool>0)return 'cooldown';
  // Hero boost after ego save: snappier blade, still readable.
  p.stabCool=KNIFE_COOLDOWN*this.heroCoolScale();
  // Guards first: the nearest one inside the blade's reach and cone, with nothing between.
  {
   const lookLen=Math.hypot(look.x,look.z)||1;const lx=look.x/lookLen,lz=look.z/lookLen;
   let best:Guard|null=null,bd=Infinity;
   for(const g of this.guards){
    if(!liveGuard(g))continue;
    const dx=g.position.x-this.position.x,dz=g.position.z-this.position.z,dist=Math.hypot(dx,dz);
    if(dist>KNIFE_RANGE+GUARD_BODY_RADIUS||dist<1e-6)continue;
    if((dx*lx+dz*lz)/dist<Math.cos(KNIFE_CONE))continue;
    if(!visible(this.position,g.position))continue;
    if(dist<bd){bd=dist;best=g;}
   }
   if(best){
    const k=SURVIVAL.knife;
    // Behind him and he has not turned to you: a silent, lethal stab.
    const fromGuard=Math.atan2(this.position.x-best.position.x,this.position.z-best.position.z);
    const behind=Math.abs(wrapAngle(fromGuard-best.heading))>Math.PI-k.backstabArc/2;
    const back=behind&&best.state!=='chase';
    const killed=this.guardTakeDamage(best,k.guardDamage*(back?k.backstabMultiplier:1));
    this.lastKnifeHit={guard:this.guards.indexOf(best),killed,backstab:back,at:this.elapsed};
    this.combatCue=killed?'stab-guard-kill':'stab-guard';
    if(killed){
     const multi=isMultiKill(this.elapsed,this.lastKillAt);
     this.kills++;this.lastKillAt=this.elapsed;
     if(multi)this.lastCombatOutcome={tag:'MULTI',at:this.elapsed};
    }
    if(back&&killed)this.say('Silent kill.','ok');
    return 'hit';
   }
  }
  if(p.state==='dead'){this.combatCue='stab-miss';this.pulse('blocked');return 'miss';}
  const to={x:p.position.x-this.position.x,y:p.position.y-this.position.y,z:p.position.z-this.position.z};
  const dist=Math.hypot(to.x,to.y,to.z);
  const lookLen=Math.hypot(look.x,look.y,look.z)||1;
  const lx=look.x/lookLen,ly=look.y/lookLen,lz=look.z/lookLen;
  const toward=dist>1e-6?(to.x*lx+to.y*ly+to.z*lz)/dist:0;
  const inCone=toward>=Math.cos(KNIFE_CONE);
  const canReach=dist<=KNIFE_RANGE&&inCone&&visible(this.position,p.position);
  if(!canReach){this.combatCue='stab-miss';this.pulse('blocked');return 'miss';}
  p.hp=Math.max(0,p.hp-KNIFE_DAMAGE);
  p.flinch=PREDATOR_FLINCH;
  p.bite=Math.max(p.bite,.35);
  if(p.hp<=0){
   this.leechOnKill(p.position,PREDATOR_HP_MAX);
   this.rechargeEgoMercy();
   p.state='dead';p.timer=0;p.raged=false;p.flinch=0;p.bite=999;
   this.combatCue='kill';
   this.say('Guardian down.','ok');
   return 'hit';
  }
  if(p.hp<=PREDATOR_BREAK_HP){
   p.state='damaged';p.timer=0;p.raged=false;p.lost=0;
   this.combatCue='break';
   this.say('It breaks off — wounded and slow.','ok');
   return 'hit';
  }
  // Wound below break threshold: rage harder and commit to chase.
  p.raged=true;
  if(p.state!=='chase'){p.state='chase';p.timer=0;p.lost=0;}
  p.lastKnown={...this.position};
  this.combatCue='stab-hit';
  if(!this.tipsSeen||this.noticeUntil<=this.elapsed)this.say('It bleeds — and rages.','ok');
  return 'hit';
 }
 update(dt:number,sprinting=false){
  if(this.outcome!=='playing')return;dt=Math.min(dt,.05);this.elapsed+=dt;
  // Knife recovery is the diver's arm, not the guardian: it runs whatever state the guardian is in.
  this.predator.stabCool=Math.max(0,this.predator.stabCool-dt);
  this.tickEgoEngagement();
  if(this.floodTriggered)this.breathWaterY=stepFloodLevel(this.breathWaterY,dt,this.leakFlow);
  this.stepPickups(dt);
  if(this.floodDrained&&!this.drainDone){
   this.drainDone=true;
   this.say('The last of the water gurgles away down the sump. The floor is clear.','ok');
  }
  const panic=this.elapsed<this.gasPanicUntil;
  const onFoot=canWalk(this.position,this.breathWaterY);
  // Dry corridor: no BCD — trim stays neutral until the flood forces a swim.
  if(onFoot){this.buoyancy=0;this.buoyancyTrim=0;}
  let need=gasDrainRateAt(this.position,this.breathWaterY,sprinting,panic)*dt;
  if(this.air>=need){this.air-=need;need=0;}
  else{need-=this.air;this.air=0;this.bailout=Math.max(0,this.bailout-need);need=0;}
  // Legs last far longer than a finning sprint: ~12 s of hard running vs ~5.5 s of sprint kicking.
  this.stamina=Math.max(0,Math.min(100,this.stamina+(sprinting?(onFoot?-8:-18)*goldStaminaFactor(this.gold):17)*dt));
  // Environmental death — never Ego Savior. No hurtPlayer, no clamp, no i-frames.
  if(this.air<=0&&this.bailout<=0){
   this.outcome='lost';
   const tip=almostUpgradeLine(this.gunMods,this.bankedGold+this.gold,this.inventory.includes('gun'));
   this.reason=tip
    ?`Your air ran out. Arm the pony earlier or climb and calm your kick. ${tip}`
    :'Your air ran out. Arm the pony earlier or climb and calm your kick.';
   return;
  }
  if(this.pending!==null&&!this.pickups.some(p=>p.id===this.pending&&distance(p.position,this.position)<3.2))this.pending=null;
  // Walk away from the hatch stash → lid closes (contents stay persisted).
  if(this.stashOpen&&!this.nearStash())this.closeStash();
  // Corridor guards run even while the cave guardian is dead / flinching.
  // Refresh cached horizontal velocity from the sim delta when the renderer has not
  // already written a fresher vector (tests / headless ticks).
  if(this.lastPlayerPos&&dt>0){
   this.playerVx=(this.position.x-this.lastPlayerPos.x)/dt;
   this.playerVz=(this.position.z-this.lastPlayerPos.z)/dt;
  }
  const playerSpeed=Math.hypot(this.playerVx,this.playerVz);
  tickPistol(this.pistol,dt);
  this.stepSmoke();
  this.collectSupplies();
  this.tickStreakAmmo();
  this.assignTokens();
  this.shareSquadIntel();
  // Items dropped by a swap become collectable again once you step away from them.
  for(const p of this.pickups)if(p.settling&&Math.hypot(p.position.x-this.position.x,p.position.z-this.position.z)>1.4)p.settling=false;
  for(const g of this.guards){
   this.updateGuard(dt,sprinting,g,playerSpeed);
   if(this.outcome!=='playing')return;
  }
  this.separateGuards();
  this.stepDirector();
  this.damageFrom=this.damageFrom.filter(h=>this.elapsed-h.at<SURVIVAL.damageIndicator);
  this.lastPlayerPos={...this.position};
  this.updatePredator(dt,sprinting);
 }
 /**
  * One Soviet guard for one tick: senses, state, movement, melee and fire.
  * Sight is blocked by rock, cover and smoke; he never knows where you are through a wall
  * unless he heard your shot, a squad-mate who sees you called it, or the director sent
  * him to sweep your rough area.
  */
 private updateGuard(dt:number,sprinting:boolean,g:Guard,playerSpeed:number){
  if(!g.active)return;
  // Down: no senses, no footwork, no trigger. The arm drops.
  if(g.hp<=0){g.speed=0;g.vx=0;g.vz=0;g.turnRate=0;g.aim=Math.max(0,g.aim-dt*4);g.downFor+=dt;return;}
  const cfg=SURVIVAL.roles[g.role];
  g.flinch=Math.max(0,g.flinch-dt);
  g.timer+=dt;
  g.meleeCool=Math.max(0,g.meleeCool-dt);
  g.shootCool=Math.max(0,g.shootCool-dt);
  g.tokenCool=Math.max(0,g.tokenCool-dt);
  g.reactT=Math.max(0,g.reactT-dt);
  const d=distance(g.position,this.position);
  const lineClear=visible(g.position,this.position);
  const canSee=lineClear&&!smokeBlocks(this.clouds,g.position,this.position,this.elapsed);
  g.sees=canSee;
  // A fresh line on you costs him a human reaction time before the first shot.
  if(canSee&&!g.prevSees){const r=cfg.reaction;g.reactT=Math.max(g.reactT,r[0]+(r[1]-r[0])*this.rand());}
  g.prevSees=canSee;
  // He sees what is in front of him (a lit torch from further), hears running, and
  // notices anyone right beside him whichever way he faces.
  const toward=Math.atan2(this.position.x-g.position.x,this.position.z-g.position.z);
  const inView=Math.abs(wrapAngle(toward-g.heading))<=GUARD_FOV_HALF;
  // Crouched you are a smaller, lower shape: every pick-up distance shrinks (Hitman-style sneak).
  const k=stealthSightFactor(this.crouching);
  const sense=canSee&&(d<2.5*k||(inView&&d<(this.torch?16:9)*k)||(sprinting&&!this.crouching&&d<11));
  const tracking=canSee&&d<GUARD_GUN_RANGE+8;
  // A guard who has lost you has to find you again: crouching counts against that too.
  const reacquire=canSee&&d<(GUARD_GUN_RANGE+8)*k;
  if(g.state==='patrol'&&sense){
   g.state='alert';g.timer=0;g.lastKnown={...this.position};g.firstShot=true;
   this.squadAlert(g,'spotted');
  }else if(g.state==='alert'){
   if(sense||tracking)g.lastKnown={...this.position};
   if(g.timer>=GUARD_DRAW_SECONDS){g.state=tracking?'chase':'search';g.timer=0;g.lost=0;g.arrived=false;}
  }else if(g.state==='chase'){
   if(tracking){g.lastKnown={...this.position};g.lost=0;}else g.lost+=dt;
   // Sight lost: go to where he last saw you and search from there.
   if(g.lost>SURVIVAL.loseSightSeconds){g.state='search';g.timer=0;g.arrived=false;}
  }else if(g.state==='search'){
   if(sense||reacquire){
    g.state='chase';g.timer=0;g.lost=0;g.lastKnown={...this.position};
    if(g.team<=this.elapsed)this.squadAlert(g,'spotted');
   }else if(g.arrived&&g.timer>SURVIVAL.searchSeconds){
    if(this.director.enabled&&this.director.phase!=='intro'){
     // The bunker is on alert: sweep toward your rough area rather than stand down.
     g.lastKnown=this.huntPoint();g.arrived=false;g.timer=0;
    }else{g.state='patrol';g.timer=0;g.pause=0;g.post=-1;}
   }
  }
  this.steerGuard(dt,g);
  // Pistol comes up while engaged, down otherwise (~0.3 s either way).
  const up=(g.state==='chase'||g.state==='alert')&&g.gun;
  g.aim=Math.max(0,Math.min(1,g.aim+(up?1:-1)*dt/.3));
  if(g.reload>0){g.reload=Math.max(0,g.reload-dt);if(g.reload===0)g.ammo=SURVIVAL.guardMagazine;}
  // Close-range attack: a readable wind-up, then one strike that must still reach you.
  const mcfg=g.role==='rusher'?SURVIVAL.melee.rusher:SURVIVAL.melee.other;
  if(g.windup>0){
   g.windup=Math.max(0,g.windup-dt);
   if(g.windup===0){
    g.strikeAt=this.elapsed;g.meleeCool=mcfg.cooldown;g.meleeToken=false;
    const now=distance(g.position,this.position);
    const bearing=Math.atan2(this.position.x-g.position.x,this.position.z-g.position.z);
    const inArc=Math.abs(wrapAngle(bearing-g.heading))<=mcfg.arc;
    const landed=now<=mcfg.reach&&inArc&&visible(g.position,this.position);
    this.lastStrike={at:this.elapsed,landed};
    if(landed){
     let dmg:number=mcfg.damage;if(g.coat)dmg=Math.round(dmg*GUARD_COAT_DAMAGE_MULT);
     this.combatCue='guard-melee';
     this.hurtPlayer(dmg,g.position,g.role==='rusher'?'A guard knifed you.':'The guard clubbed you down.',g);
     if(this.noticeUntil<=this.elapsed)this.say(g.role==='rusher'?'Knifed! Keep your distance from the runners.':'The guard strikes!','blocked');
    }else this.combatCue='guard-whiff';
   }
   return;
  }
  if(g.meleeToken&&lineClear&&d<=SURVIVAL.melee.startRange&&g.meleeCool<=0&&g.flinch<=0&&(g.state==='chase'||g.state==='alert')){
   g.windup=mcfg.windup;g.windupTotal=mcfg.windup;
   return;
  }
  // Gunfire: only with a shooting slot, a line on you, after reacting, in short bursts.
  if(cfg.armed&&g.gun&&g.state==='chase'&&g.fireToken&&canSee&&g.reactT<=0&&g.flinch<=0&&g.shootCool<=0&&this.guardHasShot(g)){
   const aimErr=Math.abs(wrapAngle(toward-g.heading));
   if(aimErr<=GUARD_BURST_TOLERANCE&&g.aim>=.99){
    const climb=Math.max(.35,1-SURVIVAL.burstClimb*g.burstIndex);
    // Roll picks core-aim vs graze-aim; geometric core is the only damage authority.
    const wantCore=this.rand()<skinOfTeethHitChance(d,playerSpeed,g.firstShot,g.speed)*cfg.accuracy*climb;
    g.firstShot=false;
    const muzzle={x:g.position.x,y:g.position.y,z:g.position.z};
    const eye=this.position;
    const nearMiss=playerSpeed>SKIN_OF_TEETH.stillSpeed;
    const side:1|-1=this.rand()<.5?1:-1;
    const aim=wantCore?playerCoreCenter(eye):grazeAimPoint(muzzle,eye,side,this.rand(),nearMiss);
    const adx=aim.x-muzzle.x,ady=aim.y-muzzle.y,adz=aim.z-muzzle.z;
    const hit=wantCore&&enemyRayHitsPlayerCore(muzzle,{x:adx,y:ady,z:adz},eye);
    g.shots+=1;g.lastShotHit=hit;g.lastShotAim=aim;g.ammo-=1;g.burstIndex+=1;g.burstLeft-=1;
    // Ego Savior window: stretch burst/rest gaps (desync cadence — do not freeze sim).
    const egoPad=this.egoCadencePad();
    if(g.burstLeft>0)g.shootCool=cfg.burstGap+egoPad;
    else{g.shootCool=cfg.restMin+(cfg.restMax-cfg.restMin)*this.rand()+egoPad;g.fireToken=false;g.tokenCool=g.shootCool;g.burstIndex=0;}
    if(g.ammo<=0){g.reload=SURVIVAL.guardReload;g.fireToken=false;g.burstLeft=0;g.burstIndex=0;}
    if(!hit){
     this.combatCue='guard-miss';
     // Skin-of-teeth miss while moving → scored GRAZE (standing still is just a miss).
     const graze=classifyEnemyMiss(playerSpeed);
     if(graze)this.lastCombatOutcome={tag:graze,at:this.elapsed};
     if(this.noticeUntil<=this.elapsed)this.say('Shots! Get out of his line of fire.','blocked');
     return;
    }
    let dmg:number=cfg.damage;
    if(g.coat)dmg=Math.round(dmg*GUARD_COAT_DAMAGE_MULT);
    this.combatCue='guard-shot';
    this.hurtPlayer(dmg,g.position,'The guards shot you down.',g);
    if(this.outcome==='playing'&&this.noticeUntil<=this.elapsed)this.say(g.coat?'Hit — the coat took some of it.':'You are hit!');
   }
  }
 }
 /** Armed, clear line, in range, outside arm's reach: he holds a firing stance (and reloads there). */
 guardInFiringStance(g:Guard=this.guard){
  const d=distance(g.position,this.position);
  return g.gun&&d<=GUARD_GUN_RANGE&&d>GUARD_MELEE_RANGE*.85&&visible(g.position,this.position);
 }
 /** In a firing stance with a round ready. */
 guardHasShot(g:Guard=this.guard){
  return this.guardInFiringStance(g)&&g.reload===0&&g.ammo>0;
 }
 /** Begin a look-around here: face the most open view into the room and sweep across it. */
 private startLookout(g:Guard,pause:number){
  const l=guardLookout(g.position);
  const turn=Math.abs(wrapAngle(l.yaw-g.heading));
  g.pause=pause;g.pauseTotal=pause;g.scanTime=0;g.scanBase=l.yaw;g.scanArc=Math.max(.35,l.arc);g.scanAlt=l.alt;
  // Budget the turn the long way round too, since he turns through the room, not the wall.
  g.scanTurn=Math.max(turn,Math.PI*2-turn)/GUARD_STEER_WALK.turnRateStanding*.6;
 }
 /**
  * Next patrol post: somewhere 6–26 m off across his room's floor (not along the wall),
  * not a post another guard is standing at or walking to.
  */
 private pickPost(g:Guard){
  const posts=patrolPosts();
  const claimed=this.guards.filter(o=>o!==g&&liveGuard(o)&&o.post>=0).map(o=>posts[o.post]);
  const inHome=(p:{x:number;z:number})=>!g.home||(p.x>=g.home.x0&&p.x<=g.home.x1&&p.z>=g.home.z0&&p.z<=g.home.z1);
  const ok=posts.map((p,i)=>({p,i})).filter(({p,i})=>{
   if(i===g.post||!inHome(p))return false;
   const dd=Math.hypot(p.x-g.position.x,p.z-g.position.z);
   return dd>=6&&dd<=26&&claimed.every(c=>Math.hypot(c.x-p.x,c.z-p.z)>3);
  });
  if(ok.length)return ok[Math.floor(this.rand()*ok.length)].i;
  let best=-1,bd=Infinity;
  posts.forEach((p,i)=>{if(i===g.post||!inHome(p))return;const dd=Math.hypot(p.x-g.position.x,p.z-g.position.z);if(dd>2&&dd<bd){bd=dd;best=i;}});
  return best;
 }
 /** Rough area to sweep when the bunker is on alert: near you, never your exact spot. */
 huntPoint():Point{
  const e=SURVIVAL.huntError;
  for(let k=0;k<6;k++){
   const a=this.rand()*Math.PI*2,r=e*(.5+.5*this.rand());
   const q=nearestFree({x:this.position.x+Math.sin(a)*r,z:this.position.z+Math.cos(a)*r},.5,3);
   if(q)return{x:q.x,y:WALK_EYE_Y,z:q.z};
  }
  return{...this.position};
 }
 /** Cached route step toward `goal` (recomputed a few times a second, or when the goal moves). */
 private navFor(g:Guard,goal:{x:number;z:number}){
  if(g.detour&&this.elapsed<g.detourUntil)return{x:g.detour.x,z:g.detour.z,final:false};
  g.detour=null;
  const moved=Math.hypot(goal.x-g.navGoal.x,goal.z-g.navGoal.z);
  const reached=!g.navStep.final&&Math.hypot(g.navStep.x-g.position.x,g.navStep.z-g.position.z)<.35;
  if(moved>.8||reached||this.elapsed-g.navAt>=SURVIVAL.navRefresh||g.navAt<0){
   g.navGoal={x:goal.x,z:goal.z};g.navAt=this.elapsed;
   g.navStep=guardNavTarget(g.position,goal);
  }
  return g.navStep;
 }
 /**
  * Stuck recovery: if he has been trying to move but has not got anywhere for
  * `stuckSeconds`, he takes a short detour to open floor beside him and re-plans.
  */
 private trackProgress(g:Guard,wantMove:boolean){
  const span=this.elapsed-g.progressAt;
  if(span<.6)return;
  const moved=Math.hypot(g.position.x-g.progressPos.x,g.position.z-g.progressPos.z);
  if(wantMove&&moved<.25)g.stuckT+=span;else g.stuckT=0;
  g.progressAt=this.elapsed;g.progressPos={x:g.position.x,z:g.position.z};
  if(g.stuckT<SURVIVAL.stuckSeconds)return;
  g.stuckT=0;g.navAt=-1;
  for(let k=0;k<10;k++){
   const a=this.rand()*Math.PI*2,r=1.5+this.rand()*1.5;
   const q={x:g.position.x+Math.sin(a)*r,z:g.position.z+Math.cos(a)*r};
   if(guardClearLine(g.position,q,GUARD_BODY_RADIUS)){g.detour=q;g.detourUntil=this.elapsed+1.3;g.stuckCount++;return;}
  }
 }
 private steerGuard(dt:number,g:Guard){
  if(g.lastState!==g.state){g.lastState=g.state;g.arrived=false;g.scanTime=0;g.slotSet=false;}
  g.strafing=false;
  const water=this.breathWaterY;
  const dry=water<BREATH_WALK_WATER;
  const canMove=(x:number,z:number)=>dry&&fits({x,y:3,z},GUARD_BODY_RADIUS);
  const cfg=SURVIVAL.roles[g.role];
  if(!dry){
   // Flooded past the walk line: he holds his ground and keeps watching.
   faceStanding(g,g.heading,GUARD_STEER_WALK,dt,()=>false);
  }else if(g.windup>0){
   // Committed to the swing: square up, and a rusher lunges the last half-metre.
   faceStanding(g,yawToward(g.position,this.position),GUARD_STEER_RUN,dt,canMove);
   const d=Math.hypot(this.position.x-g.position.x,this.position.z-g.position.z);
   const lunge=g.role==='rusher'?SURVIVAL.melee.rusher.lunge:SURVIVAL.melee.other.lunge;
   if(lunge>0&&d>1.05){
    const s=Math.min(d-1.05,lunge*dt),ux=(this.position.x-g.position.x)/d,uz=(this.position.z-g.position.z)/d;
    if(canMove(g.position.x+ux*s,g.position.z+uz*s)){g.position.x+=ux*s;g.position.z+=uz*s;g.speed=s/dt;}
   }
  }else if(g.state==='patrol'){
   const posts=patrolPosts();
   if(g.post<0||g.post>=posts.length)g.post=this.pickPost(g);
   const wp=posts[Math.max(0,g.post)];
   if(g.pause>0){
    // Look out into the room, sweep it, then move on to another post.
    g.scanTime+=dt;
    const sweep=Math.max(.1,g.pauseTotal-g.scanTurn);
    const t=Math.max(0,Math.min(1,(g.scanTime-g.scanTurn)/sweep));
    const second=g.scanAlt!==null&&t>.6;
    const look=second?g.scanAlt!:wrapAngle(g.scanBase+g.scanArc*Math.sin(TAU_GUARD*Math.min(1,t/(g.scanAlt!==null?.6:1))));
    faceStanding(g,turnThroughRoom(g.position,g.heading,look),GUARD_STEER_WALK,dt,canMove);
    g.pause=Math.max(0,g.pause-dt);
    if(g.pause===0)g.post=this.pickPost(g);
   }else if(wp){
    const nav=this.navFor(g,wp);
    const left=steerToward(g,nav,{...GUARD_STEER_WALK,maxSpeed:GUARD_SPEED.patrol,stopDistance:0,pivotAngle:1e-3},dt,canMove);
    this.trackProgress(g,true);
    if(nav.final&&left<.05&&g.speed===0)this.startLookout(g,2.2+this.rand()*1.8);
   }
  }else if(g.state==='alert'){
   // Freeze, then square up to where the noise came from.
   faceStanding(g,yawToward(g.position,g.lastKnown),GUARD_STEER_WALK,dt,canMove);
  }else if(g.state==='chase'){
   this.engage(dt,g,canMove);
  }else{
   // Search: go to the last sighting (or the sweep point), then scan left and right there.
   if(!g.arrived){
    const nav=this.navFor(g,g.lastKnown);
    const left=steerToward(g,nav,{...GUARD_STEER_RUN,maxSpeed:cfg.speed*.85,stopDistance:nav.final?.3:0},dt,canMove);
    this.trackProgress(g,true);
    if(nav.final&&left<.05&&g.speed===0){g.arrived=true;g.timer=0;this.startLookout(g,0);}
   }else{
    g.scanTime+=dt;
    faceStanding(g,wrapAngle(g.scanBase+Math.sin(Math.max(0,g.scanTime-g.scanTurn)*.7)*g.scanArc),GUARD_STEER_WALK,dt,canMove);
   }
  }
  g.position.y=WALK_EYE_Y;
  if(!g.strafing){g.vx=Math.sin(g.heading)*g.speed;g.vz=Math.cos(g.heading)*g.speed;}
 }
 /**
  * Engaged movement by role. Each guard works toward his own slot round your last known
  * position (his bearing plus a personal offset that drifts), so a group spreads across the
  * room instead of queueing in one line, and nobody stands still for long.
  * - assault: slot at ~9 m, advancing and firing bursts;
  * - flanker: swings wide to your side before closing to ~7 m;
  * - heavy: slow, ~11 m, long suppressive bursts;
  * - rusher: sprints in when he has a close-attack slot, otherwise circles at ~4.6 m.
  * With a line on you an armed guard faces you and side-steps / advances (strafes);
  * without one he runs by the shortest walkable route, facing where he is going.
  */
 private engage(dt:number,g:Guard,canMove:(x:number,z:number)=>boolean){
  const cfg=SURVIVAL.roles[g.role];
  const t=g.lastKnown;
  // His slot is a bearing round you. It starts where he is and drifts slowly (reversing
  // now and then) so he works back and forth instead of standing on one spot.
  if(!g.slotSet){g.slot=Math.atan2(g.position.x-t.x,g.position.z-t.z)+(this.rand()-.5)*.5;g.slotSet=true;}
  g.slot=wrapAngle(g.slot+g.slotDrift*dt);
  // Spread out: slide away round you from any squad-mate whose slot is on the same side.
  for(const o of this.guards){
   if(o===g||!liveGuard(o)||o.state!=='chase'||!o.slotSet||distance(o.lastKnown,t)>6)continue;
   const dd=wrapAngle(o.slot-g.slot);
   if(Math.abs(dd)<.75)g.slot=wrapAngle(g.slot-Math.sign(dd||(g.outfit-o.outfit))*1.1*dt);
  }
  if(g.timer>g.slotFlipAt){g.slotDrift=-g.slotDrift;g.slotFlipAt=g.timer+3+this.rand()*3;}
  const dx=g.position.x-t.x,dz=g.position.z-t.z,dist=Math.hypot(dx,dz);
  const ring=(r:number,extra=0)=>{
   const a=g.slot+extra;
   const p={x:t.x+Math.sin(a)*r,z:t.z+Math.cos(a)*r};
   return nearestFree(p,.5,3)??{x:t.x,z:t.z};
  };
  let goal:{x:number;z:number};
  let stop=.3;
  const armed=cfg.armed&&g.gun;
  if(!armed&&g.role!=='rusher'){
   // Disarmed: he goes for you with his hands.
   goal={x:t.x,z:t.z};stop=GUARD_CHASE_STANDOFF;
  }else if(g.role==='rusher'){
   if(g.meleeToken||!g.sees){goal={x:t.x,z:t.z};stop=1.0;}
   else goal=ring(SURVIVAL.melee.waitRadius);
  }else if(g.role==='flanker'&&!g.sees&&dist>cfg.range+2){
   const f=this.flankPoint(g,t,cfg.range,100*Math.PI/180);goal={x:f.x,z:f.z};
  }else if(!g.sees){
   // Lost the line: close on the last sighting to get it back.
   goal=dist>cfg.range*.6?ring(Math.max(3,cfg.range*.55)):{x:t.x,z:t.z};
  }else goal=ring(cfg.range);
  const nav=this.navFor(g,goal);
  const want=Math.hypot(nav.x-g.position.x,nav.z-g.position.z);
  if(g.sees&&armed){
   // Shooting on the move: chest on you, feet toward the slot.
   g.strafing=true;
   const before=g.heading;
   g.heading=turnToward(g.heading,yawToward(g.position,this.position),GUARD_STEER_RUN.turnRateStanding*dt);
   g.turnRate=dt>0?wrapAngle(g.heading-before)/dt:0;
   const sp=want>.25?Math.min(cfg.combatSpeed,Math.sqrt(2*3*want)):0;
   const wx=want>1e-4?(nav.x-g.position.x)/want*sp:0,wz=want>1e-4?(nav.z-g.position.z)/want*sp:0;
   const ex=wx-g.vx,ez=wz-g.vz,e=Math.hypot(ex,ez),cap=4*dt;
   if(e>cap){g.vx+=ex/e*cap;g.vz+=ez/e*cap;}else{g.vx=wx;g.vz=wz;}
   const nx=g.position.x+g.vx*dt,nz=g.position.z+g.vz*dt;
   if(canMove(nx,nz)){g.position.x=nx;g.position.z=nz;}
   else if(canMove(nx,g.position.z)){g.position.x=nx;g.vz=0;}
   else if(canMove(g.position.x,nz)){g.position.z=nz;g.vx=0;}
   else{g.vx=0;g.vz=0;}
   g.speed=Math.hypot(g.vx,g.vz);
  }else{
   const speed=g.role==='rusher'&&!g.meleeToken&&g.sees?cfg.speed*.7:cfg.speed;
   const left=steerToward(g,nav,{...GUARD_STEER_RUN,maxSpeed:speed,turnRateMoving:4.5,stopDistance:nav.final?stop:0},dt,canMove);
   if(nav.final&&left<.02&&g.speed===0)faceStanding(g,yawToward(g.position,this.position),GUARD_STEER_RUN,dt,canMove);
  }
  this.trackProgress(g,want>1.2);
 }
 /** Push guards apart so a crowd never stacks into one body or one file. */
 private separateGuards(){
  const r=SURVIVAL.separation;
  const dry=this.breathWaterY<BREATH_WALK_WATER;
  if(!dry)return;
  const live=this.guards.filter(liveGuard);
  for(let i=0;i<live.length;i++)for(let j=i+1;j<live.length;j++){
   const a=live[i],b=live[j];
   const dx=b.position.x-a.position.x,dz=b.position.z-a.position.z,d=Math.hypot(dx,dz);
   if(d>=r)continue;
   const ux=d>1e-4?dx/d:Math.cos(i*2.4),uz=d>1e-4?dz/d:Math.sin(i*2.4);
   const push=(r-d)/2;
   const ok=(g:Guard,sx:number,sz:number)=>fits({x:g.position.x+sx,y:3,z:g.position.z+sz},GUARD_BODY_RADIUS);
   if(ok(a,-ux*push,-uz*push)){a.position.x-=ux*push;a.position.z-=uz*push;}
   if(ok(b,ux*push,uz*push)){b.position.x+=ux*push;b.position.z+=uz*push;}
  }
 }
 /**
  * Hand out the limited shooting and close-attack slots. Guards without one keep moving
  * and wait their turn, so a room full of guards is dangerous but not an instant death.
  */
 private assignTokens(){
  const maxS=this.director.phase==='final'?SURVIVAL.maxShootersFinal:SURVIVAL.maxShooters;
  const live=this.guards.filter(liveGuard);
  const d=(g:Guard)=>distance(g.position,this.position);
  for(const g of live){
   if(g.fireToken&&!(g.state==='chase'&&g.sees&&g.gun&&g.reload===0)){g.fireToken=false;g.burstLeft=0;g.burstIndex=0;}
   if(g.meleeToken&&g.windup<=0&&(g.state!=='chase'||d(g)>SURVIVAL.melee.waitRadius+3)){g.meleeToken=false;}
  }
  let holders=live.filter(g=>g.fireToken).length;
  const shooters=live.filter(g=>!g.fireToken&&g.gun&&SURVIVAL.roles[g.role].armed&&g.state==='chase'&&g.sees&&g.reload===0&&g.tokenCool<=0&&g.flinch<=0&&d(g)<=GUARD_GUN_RANGE)
   .sort((a,b)=>d(a)-d(b));
  for(const g of shooters){
   if(holders>=maxS)break;
   const b=SURVIVAL.roles[g.role].burst;
   g.fireToken=true;g.burstLeft=b[0]+Math.floor(this.rand()*(b[1]-b[0]+1));g.burstIndex=0;holders++;
  }
  let mh=live.filter(g=>g.meleeToken).length;
  const biters=live.filter(g=>!g.meleeToken&&g.state==='chase'&&g.meleeCool<=0&&g.flinch<=0&&(g.role==='rusher'?d(g)<=SURVIVAL.melee.waitRadius+1.5:d(g)<=SURVIVAL.melee.startRange+.3))
   .sort((a,b)=>(a.role==='rusher'?0:1)-(b.role==='rusher'?0:1)||d(a)-d(b));
  for(const g of biters){if(mh>=SURVIVAL.melee.maxAttackers)break;g.meleeToken=true;mh++;}
 }
 // ── Survival: guards in play, reinforcements, smoke, supplies ──────────────────
 /** Put guard slot `g` into play at `at` as a fresh `role`. */
 activateGuard(g:Guard,at:{x:number;z:number},heading:number,role:GuardRole){
  const life=g.life+1;
  Object.assign(g,makeGuard(g.outfit));
  const cfg=SURVIVAL.roles[role];
  g.life=life;g.active=true;g.role=role;g.hp=g.maxHp=cfg.hp;g.dealtByPlayer=0;g.gun=cfg.armed;g.ammo=SURVIVAL.guardMagazine;
  g.position={x:at.x,y:WALK_EYE_Y,z:at.z};g.lastKnown={...g.position};g.heading=heading;
  g.progressPos={x:at.x,z:at.z};g.progressAt=this.elapsed;
  g.slot=0;g.slotDrift=(this.rand()<.5?-1:1)*(.07+.08*this.rand());g.slotFlipAt=3+this.rand()*3;
  g.flankSide=this.rand()<.5?1:-1;
  g.coat=role==='heavy'||role==='officer';
  return g;
 }
 deactivateGuard(g:Guard){
  g.active=false;g.hp=0;g.fireToken=false;g.meleeToken=false;g.windup=0;g.post=-1;
  g.position={x:500,y:WALK_EYE_Y,z:500};g.speed=0;g.vx=0;g.vz=0;
 }
 /**
   * A slot for a new arrival: prefer an empty/`!active` slot so corpses stay on the floor.
   * Only recycle the longest-dead off-screen body when the pool is full.
   */
 private freeGuardSlot(){
  const empty=this.guards.find(g=>!g.active);
  if(empty)return empty;
  const bodies=this.guards.filter(g=>g.active&&g.hp<=0&&g.downFor>SURVIVAL.director.corpseSeconds&&!visible(this.position,g.position))
   .sort((a,b)=>b.downFor-a.downFor);
  return bodies[0]??null;
 }
 /**
  * Mission start only: the opening garrison. Two sentries hold the first chamber
  * (the first contact comes quickly), the cavern has three, and the main officer
  * (Soviet key) patrols the west cavern — away from the hatch stash and the relic alcove.
  * The rest of the pool waits behind the doors. Player respawn does not call this —
  * corpses and survivors stay in place; the director fills empty slots later.
  */
 spawnGuards(){
  for(const g of this.guards)this.deactivateGuard(g);
  const rooms:{x0:number;x1:number;z0:number;z1:number;role:GuardRole}[]=[
   {x0:-12,x1:12,z0:-20,z1:-4,role:'assault'},
   {x0:-12,x1:12,z0:-20,z1:-4,role:'assault'},
   {x0:-28,x1:28,z0:-96,z1:-44,role:'assault'},
   {x0:-28,x1:28,z0:-96,z1:-44,role:'rusher'},
   {x0:-28,x1:28,z0:-96,z1:-44,role:'flanker'},
   // Main officer beat: west mid-cavern — seek him for the key; not on the relic or hatch.
   {x0:-28,x1:-2,z0:-88,z1:-52,role:'officer'},
  ];
  const posts=patrolPosts();
  const used:number[]=[];
  const n=Math.min(SURVIVAL.director.initial,rooms.length,this.guards.length);
  for(let i=0;i<n;i++){
   const room=rooms[i];
   const inRoom=posts.map((p,k)=>({p,k})).filter(({p,k})=>p.x>=room.x0&&p.x<=room.x1&&p.z>=room.z0&&p.z<=room.z1&&!used.includes(k)
    &&Math.hypot(p.x-this.position.x,p.z-this.position.z)>=24&&used.every(u=>Math.hypot(posts[u].x-p.x,posts[u].z-p.z)>=5));
   if(!inRoom.length)continue;
   const pick=inRoom[Math.floor(this.rand()*inRoom.length)];
   used.push(pick.k);
   const g=this.activateGuard(this.guards[i],pick.p,this.rand()*Math.PI*2,room.role);
   g.home={x0:room.x0,x1:room.x1,z0:room.z0,z1:room.z1};g.post=pick.k;
   this.startLookout(g,1+this.rand()*2);
  }
 }
 /**
  * Each death restarts firefight pacing: smoke, supplies, empty pistol, director clock.
  * Does NOT wipe or respawn the garrison — living guards and corpses stay put.
  * Does NOT refill inventory — `dropCarriedAt` emptied the hands; `ensureKnife`
  * (called from respawn) restores only the diving knife, not the gun or kit.
  */
 resetFirefight(){
  const on=this.director.enabled;
  this.director=new Director();this.director.enabled=on;this.director.reset(this.elapsed);
  this.grenades=[];this.clouds=[];this.smokes=SURVIVAL.smoke.start;
  this.caches=makeCaches();this.damageFrom=[];this.supplyTaken=null;this.lastImpact=null;this.lastKnifeHit=null;
  this.lastPistolHit=null;this.lastCombatOutcome=null;this.lastKillAt=-1;this.kills=0;
  this.lastStreakAmmo=null;
  // Streak state is cleared on death via noteDeath; keep urge flags already consumed.
  this.pistol=makePistol(PISTOL.magazine,0);
  this.pistol.mag=0;
  this.jammed=false;
  this.aimDwell=[];
 }
 /** Modest ammo drip while style rank is B+ (mag top-up bias when the mag is low). */
 private tickStreakAmmo(){
  const n=this.streak.tickAmmo(this.elapsed);
  if(n<=0)return;
  const next=applyAmmoDrip(this.pistol,n,PISTOL.reserveMax);
  if(next.applied<=0)return;
  this.pistol.mag=next.mag;
  this.pistol.reserve=next.reserve;
  this.lastStreakAmmo={rounds:next.applied,at:this.elapsed};
 }
 /** Throw one of your smoke grenades along (dirX, dirZ). */
 throwSmoke(dirX:number,dirZ:number){
  if(this.outcome!=='playing')return false;
  if(this.smokes<=0){this.say('No smoke left. Ammo boxes and med kits are marked on the floor — smoke is in green tins.','blocked');return false;}
  this.smokes--;
  const from={...this.position};
  const to=smokeLanding(from,dirX,dirZ);
  this.grenades.push({id:this.nextSmokeId++,from,to,thrownAt:this.elapsed,player:true});
  this.combatCue='smoke-throw';
  return true;
 }
 private guardThrowSmoke(g:Guard){
  const f=.6;
  const to=smokeLanding(g.position,(this.position.x-g.position.x)*f,(this.position.z-g.position.z)*f,distance(g.position,this.position)*f);
  this.grenades.push({id:this.nextSmokeId++,from:{...g.position},to,thrownAt:this.elapsed,player:false});
  this.director.cues.push({kind:'smoke',x:g.position.x,z:g.position.z,at:this.elapsed,label:'Smoke!'});
  if(this.noticeUntil<=this.elapsed)this.say('Smoke! They are moving up under cover.','blocked');
 }
 private stepSmoke(){
  const s=SURVIVAL.smoke;
  for(const gr of this.grenades)if(this.elapsed-gr.thrownAt>=s.flight){
   this.clouds.push({id:gr.id,x:gr.to.x,z:gr.to.z,born:this.elapsed,player:gr.player});
  }
  this.grenades=this.grenades.filter(gr=>this.elapsed-gr.thrownAt<s.flight);
  this.clouds=this.clouds.filter(c=>smokeAlive(c,this.elapsed));
  while(this.clouds.length>s.maxClouds)this.clouds.shift();
 }
 /** Walk over a stocked cache to take it (only if you need it). */
 private collectSupplies(){
  const S=SURVIVAL.supplies;
  // Brief loot pickup bias while streaking — a little more reach, not magnet loot.
  const reach=S.pickupRadius+streakPickupRadiusBonus(this.streak.tier);
  for(const c of this.caches){
   if(!c.stocked||Math.hypot(c.x-this.position.x,c.z-this.position.z)>reach)continue;
   if(c.kind==='ammo'){
    if(this.pistol.reserve>=PISTOL.reserveMax)continue;
    this.pistol.reserve=Math.min(PISTOL.reserveMax,this.pistol.reserve+S.ammo);
    this.say(`Ammo box: +${S.ammo} rounds.`,'ok');
   }else if(c.kind==='medkit'){
    if(this.health>=100)continue;
    this.health=Math.min(100,this.health+S.medkit);
    this.say(`Field dressing: +${S.medkit} suit.`,'ok');
   }else{
    if(this.smokes>=SURVIVAL.smoke.max)continue;
    this.smokes=Math.min(SURVIVAL.smoke.max,this.smokes+S.smoke);
    this.say('Smoke grenade. T throws it.','ok');
   }
   c.stocked=false;
   this.supplyTaken={kind:c.kind,at:this.elapsed};
  }
  // A downed guard's pistol: with yours in hand you strip its rounds just by walking over it.
  if(this.inventory.includes('gun')&&this.pistol.reserve<PISTOL.reserveMax){
   for(const p of this.pickups){
    if(p.item!=='gun'||!p.rounds||Math.hypot(p.position.x-this.position.x,p.position.z-this.position.z)>reach)continue;
    const take=Math.min(p.rounds,PISTOL.reserveMax-this.pistol.reserve);
    this.pistol.reserve+=take;p.rounds-=take;
    this.supplyTaken={kind:'ammo',at:this.elapsed};
    if(this.noticeUntil<=this.elapsed)this.say(`Stripped his magazine: +${take} rounds.`,'ok');
   }
   // Stripped junk rifles are left as scrap; a prize rifle stays on the floor to be taken or banked.
   this.pickups=this.pickups.filter(p=>!(p.item==='gun'&&p.rounds===0&&!rifleIsPrize(p.cond??RIFLE.kitCond)));
  }
  // Loose coins are scooped up as you pass; bars are a deliberate E.
  for(const p of [...this.pickups]){
   if(p.item!=='gold'||(p.amount??0)>=GOLD.barGrams)continue;
   if(Math.hypot(p.position.x-this.position.x,p.position.z-this.position.z)>GOLD.scoopRadius)continue;
   if(Math.abs(p.position.y-(this.position.y-WALK_EYE_Y+FLOOR_Y))>1.6)continue;
   this.takeGold(p);
  }
 }
 /**
  * Pacing: intro (quiet until first contact) → build → peak → short lull → build again,
  * harder each cycle; picking up the relic starts the final push that only ends at the
  * extraction pool. Arrivals are announced at a door before the guard steps through.
  */
 private stepDirector(){
  const D=this.director;
  if(!D.enabled)return;
  const now=this.elapsed;
  const live=this.guards.filter(liveGuard);
  const contact=live.some(g=>g.state==='chase'||g.state==='alert');
  const changed=D.advance(now,contact,this.hasRelic);
  if(changed==='lull'){
   // Breathing room: restock med/smoke away from you — never free ammo (strip corpses).
   const empty=this.caches.filter(c=>!c.stocked&&c.kind!=='ammo'&&Math.hypot(c.x-this.position.x,c.z-this.position.z)>=SURVIVAL.supplies.restockMinDistance);
   for(let k=0;k<SURVIVAL.supplies.restockPerLull&&empty.length;k++)empty.splice(Math.floor(this.rand()*empty.length),1)[0].stocked=true;
   D.cues.push({kind:'lull',x:this.position.x,z:this.position.z,at:now,label:'Lull'});
   this.say('They are regrouping. Strip the dead for rounds — medkits may have dropped.','ok');
  }else if(changed==='final'){
   D.cues.push({kind:'final',x:EXIT.x,z:EXIT.z,at:now,label:'Final push'});
   this.say('Relic booby trap sprung! Water is rising and the garrison is coming. Reach extraction!','blocked');
  }else if(changed==='build'&&D.cycle>0){
   this.say('Boots in the corridors — they are coming back harder.','blocked');
  }
  // Arrivals whose warning has run out step through their door.
  for(const p of D.pending.filter(p=>p.at<=now)){
   const door=survivalDoors()[p.door];
   const g=this.freeGuardSlot();
   if(!g||!door)continue;
   this.activateGuard(g,door.spawn,door.yaw,p.role);
   g.state='search';g.lastKnown=this.huntPoint();g.team=now+GUARD_TEAM_MEMORY;
   D.arrivals++;
  }
  D.pending=D.pending.filter(p=>p.at>now);
  // Keep the hunting pressure at the director's target (S+ streak softens by at most 1).
  const soft=streakDirectorTargetSoft(this.streak.tier);
  const want=Math.max(1,D.target()-soft);
  const hunting=live.filter(g=>g.state!=='patrol').length+D.pending.length;
  const slots=this.guards.filter(g=>!g.active||(g.hp<=0&&g.downFor>SURVIVAL.director.corpseSeconds)).length-D.pending.length;
  if(D.phase!=='intro'&&D.phase!=='lull'&&hunting<want&&now>=D.nextArrival&&slots>0){
   const busy=(i:number)=>D.pending.some(p=>p.door===i);
   const door=D.pickDoor(this.position,this.facing,this.rand,busy);
   if(door>=0){
    const heavies=live.filter(g=>g.role==='heavy').length+D.pending.filter(p=>p.role==='heavy').length;
    const role=D.pickRole(this.rand,heavies);
    D.pending.push({door,role,at:now+SURVIVAL.director.warnSeconds});
    const dd=survivalDoors()[door];
    D.cues.push({kind:'door',x:dd.door.x,z:dd.door.z,at:now,label:dd.name});
    D.lastDoors=[door,...D.lastDoors].slice(0,2);
    const [a,b]=D.interval();
    let wait=a+(b-a)*this.rand();
    if(D.recentDamage(now)>=SURVIVAL.director.mercyDamage)wait+=SURVIVAL.director.mercyDelay;
    // Streak soften: next spawn waits a little longer while rank is high.
    wait+=streakDirectorDelay(this.streak.tier);
    D.nextArrival=now+wait;
   }else D.nextArrival=now+1;
  }
  // Guards cover their advance with smoke now and then.
  if(D.phase!=='intro'&&D.phase!=='lull'&&now>=D.guardSmokeReady){
   const thrower=live.find(g=>(g.role==='assault'||g.role==='heavy'||g.role==='officer')&&g.state==='chase'&&g.sees&&distance(g.position,this.position)>=8&&distance(g.position,this.position)<=18);
   if(thrower){this.guardThrowSmoke(thrower);D.guardSmokeReady=now+SURVIVAL.smoke.guardCooldown;}
  }
  // Very long-dead off-screen bodies free their slot (dropped loot stays). Kept
  // well above a typical hatch-wake so corpses persist across player deaths;
  // freeGuardSlot still prefers empty slots and can recycle sooner when full.
  for(const g of this.guards)if(g.active&&g.hp<=0&&g.downFor>SURVIVAL.director.corpseSeconds*5&&!visible(this.position,g.position))this.deactivateGuard(g);
  D.cues=D.cues.filter(c=>now-c.at<4);
 }
 /** Enough water over the floor for the guardian to swim. */
 predatorCanSwim(){return this.breathWaterY-FLOOR_Y>=PREDATOR_SWIM_DEPTH;}
 private updatePredator(dt:number,sprinting:boolean){
  const p=this.predator;const d=distance(p.position,this.position);const canSee=visible(p.position,this.position);
  if(p.state!=='dead'&&!this.predatorCanSwim()){
   // Stranded on the dry floor: it settles, thrashes, and only snaps at arm's length.
   p.timer+=dt;p.bite=Math.max(0,p.bite-dt);p.flinch=Math.max(0,p.flinch-dt);
   p.position.y+=(FLOOR_Y+.55-p.position.y)*Math.min(1,dt*1.5);
   const flat=Math.hypot(p.position.x-this.position.x,p.position.z-this.position.z);
   if(flat<PREDATOR_STRANDED_BITE&&p.bite<=0&&p.flinch<=0){
    p.bite=1.8;this.hurtPlayer(20,p.position,'The stranded guardian caught you in its jaws.',null);
    this.say('Its jaws snap shut on you — keep clear of the stranded beast.','blocked');
   }
   return;
  }
  const sense=canSee&&(d<4.5||d<(this.torch?16:sprinting?13:8));
  const safe=!predatorCell(tile(this.position).col,tile(this.position).row);
  p.timer+=dt;p.bite=Math.max(0,p.bite-dt);p.flinch=Math.max(0,p.flinch-dt);

  // Dead: leave the FSM, stop biting, sink toward the cave floor.
  if(p.state==='dead'){
   p.bite=999;
   p.position.y+=(FLOOR_Y+.55-p.position.y)*Math.min(1,dt*1.1);
   return;
  }

  if(this.decoy&&this.elapsed>=this.decoy.until)this.decoy=null;

  // Damaged: limp-patrol; still dangerous up close but slow and no rage chase.
  if(p.state==='damaged'){
   if(p.flinch>0)return;
   if(this.decoy&&d>4.5){p.lastKnown={...this.decoy.position};}
   else if(sense&&!safe)p.lastKnown={...this.position};
   const goal=p.lastKnown;
   const path=pathBetween(p.position,goal);const target=path[0]||(visible(p.position,goal)&&predatorCell(tile(goal).col,tile(goal).row)?goal:p.position);
   const dx=target.x-p.position.x,dz=target.z-p.position.z,len=Math.hypot(dx,dz),speed=PREDATOR_SPEED.damaged;
   if(len>.05){p.heading=Math.atan2(-dz,dx);moveBody(p.position,dx/len*Math.min(len,speed*dt),0,dz/len*Math.min(len,speed*dt),1.3);}
   p.position.y+=(Math.max(1.2,Math.min(6.2,this.position.y))-p.position.y)*Math.min(1,dt*1.2);
   if(!safe&&canSee&&distance(p.position,this.position)<BITE_RANGE&&p.bite<=0){
    p.bite=2.2;
    this.hurtPlayer(18,p.position,'The wounded guardian still finished you. Break sight or finish it with the knife.',null);
    this.say('Wounded jaws still catch you — get clear.');
   }
   return;
  }

  if(p.flinch>0){
   // Flinch interrupt: freeze locomotion / bites briefly after a wound.
   return;
  }

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
  const dx=target.x-p.position.x,dz=target.z-p.position.z,len=Math.hypot(dx,dz);
  const speed=p.state==='chase'?(p.raged?PREDATOR_SPEED.rage:PREDATOR_SPEED.chase):p.state==='alert'?PREDATOR_SPEED.alert:PREDATOR_SPEED.patrol;
  if(len>.05){p.heading=Math.atan2(-dz,dx);moveBody(p.position,dx/len*Math.min(len,speed*dt),0,dz/len*Math.min(len,speed*dt),1.3);}
  p.position.y+=((p.state==='chase'?Math.max(1.2,Math.min(6.2,this.position.y)):3)-p.position.y)*Math.min(1,dt*2);
  if(p.state==='chase'&&!safe&&canSee&&distance(p.position,this.position)<BITE_RANGE&&p.bite<=0){
   p.bite=1.7;
   this.hurtPlayer(25,p.position,'The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe.',null);
   this.say('Suit breached! Sprint to cover or deploy a flare.');
  }
 }
}
