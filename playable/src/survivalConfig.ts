/**
 * SURVIVAL FIREFIGHT — every balancing number for the escalating guard assault in one place.
 *
 * Tune here; nothing else in the game hard-codes these. Distances are metres, times
 * seconds, damage in health points (player and guards both use 0–max hp).
 */

export type GuardRole='assault'|'rusher'|'flanker'|'heavy'|'officer';

export const SURVIVAL={
 /** Hard cap on guards alive at once (also the size of the visual pool). */
 maxGuards:10,

 // ── Player weapon: TT-33 (baseline) ─────────────────────────────────────────────
 pistol:{
  /** Damage to a standard guard's head at close range, and the multiplier beyond falloff. */
  headDamage:78,
  bodyDamage:30,
  /** Full damage out to `falloffStart`, easing to `falloffMin`× at `falloffEnd`. */
  falloffStart:9,falloffEnd:24,falloffMin:.72,
  magazine:8,
  startReserve:40,
  reserveMax:64,
 },
 /**
  * Fresh blood: finish an enemy within `radius` metres while hurt and you instantly
  * heal `fraction` of the damage you dealt him this life. Pushes you into the fight
  * when low instead of behind cover. Knife kills are always inside the radius.
  * While critically hurt (≤ Ego Savior criticalHp ~15), kill leech uses the wider
  * `criticalRadius` / `criticalFraction`, and non-lethal hits also return a small
  * `criticalHitFraction` of damage dealt — so clutch shooting still feeds the bar.
  */
 leech:{
  radius:5,
  fraction:.35,
  flashSeconds:.45,
  /** Kill-leech reach while critically hurt (kiting at glass HP). */
  criticalRadius:9,
  /** Kill-leech share while critically hurt. */
  criticalFraction:.45,
  /** On-hit share while critically hurt (non-lethal hits only). */
  criticalHitFraction:.15,
 },
 /**
  * Knife on guards: a panic tool at arm's length. Stabbing an unaware back is lethal on
  * infantry (assault / flanker / rusher) — multiplier kept high enough after the durability bump.
  */
 knife:{guardDamage:55,backstabMultiplier:5,backstabArc:100*Math.PI/180},

 // ── Guard durability by role (standard guard = assault) ────────────────────────
 // Speed (0.22.42): role speed / combatSpeed ×1.25 so they close distance faster.
 // Aim (0.22.41): another ×1.25 on role accuracy (cap 0.995) + lighter burst climb /
 // moving-fire / first-shot penalties. Damage / HP / cadence unchanged from 0.22.37+.
 // Aim (0.22.37) ×1.25 / Aim (0.22.36) ×1.5 / Aggression (0.22.35) otherwise intact.
 roles:{
  assault:{hp:225,headMult:1,speed:2.9,combatSpeed:1.98,range:10.5,burst:[3,3] as [number,number],burstGap:.11,restMin:.65,restMax:1.15,accuracy:.995,damage:14,reaction:[.28,.48] as [number,number],armed:true},
  flanker:{hp:195,headMult:1,speed:3.81,combatSpeed:2.5,range:8.5,burst:[2,3] as [number,number],burstGap:.10,restMin:.55,restMax:1.05,accuracy:.995,damage:14,reaction:[.24,.42] as [number,number],armed:true},
  rusher:{hp:165,headMult:1,speed:4.88,combatSpeed:4.88,range:0,burst:[0,0] as [number,number],burstGap:1,restMin:1,restMax:1,accuracy:0,damage:0,reaction:[.10,.22] as [number,number],armed:false},
  /** Heavy: helmet and flak — headshots do 60 %; long suppressive bursts, slow walk. */
  heavy:{hp:420,headMult:.6,speed:2.0,combatSpeed:1.69,range:12.5,burst:[5,7] as [number,number],burstGap:.09,restMin:.95,restMax:1.55,accuracy:.995,damage:21,reaction:[.38,.62] as [number,number],armed:true},
  /**
   * Main officer: the only guard who carries the Soviet relic key.
   * Same combat AI as the rest; tougher kit, peaking-cap silhouette. Never reinforced.
   */
  officer:{hp:360,headMult:.7,speed:2.48,combatSpeed:1.85,range:11.5,burst:[4,6] as [number,number],burstGap:.10,restMin:.75,restMax:1.25,accuracy:.995,damage:18,reaction:[.30,.52] as [number,number],armed:true},
 },

 // ── Guard fire discipline (why a crowd stays survivable) ───────────────────────
 /** At most this many guards may be shooting at you at the same moment. */
 maxShooters:3,
 maxShootersFinal:4,
 /** Accuracy lost per round later in a burst (muzzle climb). −25% vs 0.22.37. */
 burstClimb:.0675,
 /** Guard pistol magazine and reload; a downed guard's pistol always has at least `dropRounds`. */
 guardMagazine:8,dropRounds:5,
 guardReload:2.2,

 // ── Close-range attacks (every guard can strike; rushers stab) ─────────────────
 melee:{
  /** Simultaneous close-range attackers allowed. Others circle and wait. */
  maxAttackers:3,
  /** Wind-up (readable), reach at the moment of the strike, frontal arc, damage, cooldown. */
  rusher:{windup:.40,reach:1.7,arc:70*Math.PI/180,damage:30,cooldown:1.1,lunge:1.7},
  other:{windup:.48,reach:1.6,arc:60*Math.PI/180,damage:21,cooldown:1.4,lunge:0},
  /** Start the wind-up from this far (rushers lunge the last bit). */
  startRange:2.65,
  /** Rushers without an attack slot circle at this distance. */
  waitRadius:3.6,
 },
 /** A hit staggers a guard: cancels a melee wind-up and delays his trigger. */
 hitFlinch:.28,

 // ── Director: pacing ───────────────────────────────────────────────────────────
 director:{
  /** Guards placed at mission start (rooms along the way). */
  initial:6,
  /** Phase lengths (s) and how many guards the director keeps hunting you in each. */
  buildSeconds:32,peakSeconds:28,lullSeconds:13,
  buildTarget:4,peakTarget:7,finalTarget:10,
  /** Each cycle after the first adds this many to the build and peak targets. */
  escalation:1,
  /** Seconds between reinforcement arrivals (random in range) per phase. */
  buildInterval:[6,9] as [number,number],
  peakInterval:[3.5,6] as [number,number],
  finalInterval:[2.6,4.2] as [number,number],
  /** Telegraph: door/shout this long before the guard steps through. */
  warnSeconds:2.4,
  /** A reinforcement door must be at least this far from you… */
  spawnMinDistance:16,
  /** …and out of your line of sight unless farther than this. */
  spawnVisibleOk:34,
  /** No arrivals within this arc behind you (radians) closer than `behindSafeDistance`. */
  behindArc:110*Math.PI/180,behindSafeDistance:26,
  /** Took this much damage in the last `mercyWindow` s: next arrival waits `mercyDelay` longer. */
  mercyDamage:55,mercyWindow:8,mercyDelay:4,
  /** Role mix for reinforcements (weights), and heavy limits. Officer is never reinforced (exactly one main). */
  roleWeights:{assault:45,rusher:25,flanker:20,heavy:10,officer:0} as Record<GuardRole,number>,
  maxHeavy:1,maxHeavyFinal:2,
  /**
   * When the pool is full, a corpse may be recycled into a reinforcement only
   * after this long and only if off-screen. Empty `!active` slots are always
   * preferred first. Hatch wake never wipes bodies.
   */
  corpseSeconds:18,
 },

 // ── Perception ─────────────────────────────────────────────────────────────────
 /** Your pistol is heard this far (through walls: sound carries). Hearing gives position, not sight. */
 gunshotHearing:30,
 /**
  * Crouch (hold C), Hitman-style sneaking. A crouched body is a smaller, lower silhouette:
  * every distance at which a guard can pick you up is cut to `sightFactor` (0.65 = 35 % harder
  * to see), including a searching guard re-acquiring you. A guard already hunting you in a chase
  * keeps you. Crouched you move at `speedFactor` of a walk, cannot run, and make no running noise.
  */
 stealth:{sightFactor:.65,speedFactor:.5,eyeDrop:.62,blendSeconds:.22},
 /** Sight lost this long → he goes to where he last saw you and searches. */
 loseSightSeconds:2.8,
 searchSeconds:5.5,
 /** While the bunker is on alert, searchers sweep toward your area with this much error (m). */
 huntError:7,

 // ── Movement ───────────────────────────────────────────────────────────────────
 /** Patrol posts keep at least this far off walls and cover. */
 postClearance:1.4,
 /** Guards push apart inside this separation (m). */
 separation:1.15,
 /** No progress for this long while trying to move → unstick manoeuvre. */
 stuckSeconds:1.2,
 /** Nav targets are recomputed at most this often per guard (s). */
 navRefresh:.22,

 // ── Smoke ──────────────────────────────────────────────────────────────────────
 smoke:{
  radius:4.6,grow:1.2,hold:9,fade:3,
  /** Clouds alive at once (oldest is removed). */
  maxClouds:4,
  /** Throw range and time in the air. */
  throwRange:12,flight:.8,
  /** Grenades you carry at start / at most. */
  start:2,max:3,
  /** Guards throw smoke to cover an advance: shared cooldown across the squad. */
  guardCooldown:22,
  /** Sight through a cloud of density above this is blocked (except point blank). */
  blockDensity:.35,pointBlank:1.8,
 },

 // ── Supplies (walk over to collect) ────────────────────────────────────────────
 supplies:{
  /** Scarce walk-over pack — not a free mag dump. Kill strips stay the main ammo lever. */
  ammo:12,medkit:40,smoke:1,
  pickupRadius:1.3,
  /** Rat cage: lulls never restock floor caches — strip the dead. */
  restockPerLull:0,restockMinDistance:12,
 },

 // ── Player ─────────────────────────────────────────────────────────────────────
 /** Damage direction indicator lifetime (s). */
 damageIndicator:1.4,
} as const;

/** Grid side of a wall a door is set into: W = −col, E = +col, S = −row (south, +z), N = +row. */
export type DoorSide='W'|'E'|'S'|'N';
/** Reinforcement doors: steel bulkheads set into the bunker walls (grid cell + wall side). */
export const SURVIVAL_DOORS:{name:string;col:number;row:number;side:DoorSide}[]=[
 {name:'hatch corridor',col:10,row:-6,side:'W'},
 {name:'west chamber',col:7,row:3,side:'W'},
 {name:'east chamber',col:15,row:2,side:'E'},
 {name:'approach corridor',col:9,row:8,side:'W'},
 {name:'west annex',col:0,row:14,side:'W'},
 {name:'west deep',col:0,row:24,side:'W'},
 {name:'south-east cavern',col:20,row:26,side:'E'},
 {name:'fissure',col:21,row:10,side:'E'},
 {name:'bone alcove west',col:6,row:38,side:'W'},
 {name:'bone alcove east',col:16,row:36,side:'E'},
 {name:'extraction pool',col:24,row:3,side:'E'},
];

/**
 * Cover: floor-to-head-height blockers (stacked supply crates, stocked storage racks ('wall'), cardboard barricades, the radio desk).
 * World-space axis-aligned boxes; they block movement and sight for everyone.
 * Cardboard entries are wide footprints for 3–4 carton stacks clustered into a barricade.
 * Placed off cell centres so every room keeps a way round them.
 */
export const SURVIVAL_COVER:{x:number;z:number;hx:number;hz:number;kind:'crates'|'wall'|'cardboard'|'desk'}[]=[
 // Entrance chamber: the first contact.
 {x:-6,z:-10,hx:.7,hz:.7,kind:'crates'},
 {x:6,z:-14,hx:1.2,hz:.35,kind:'wall'},
 {x:5,z:-12,hx:1.05,hz:.55,kind:'cardboard'},
 {x:-8,z:-12,hx:1.05,hz:.55,kind:'cardboard'},
 {x:-10,z:-18,hx:1,hz:.48,kind:'desk'},
 // Approach corridor.
 {x:-4,z:-18,hx:1.05,hz:.55,kind:'cardboard'},
 {x:2,z:-28,hx:1.05,hz:.55,kind:'cardboard'},
 // Main cavern.
 {x:-2,z:-50,hx:.7,hz:.7,kind:'crates'},
 {x:-18,z:-50,hx:.7,hz:.7,kind:'crates'},
 {x:14,z:-50,hx:1.2,hz:.35,kind:'wall'},
 {x:10,z:-60,hx:1.05,hz:.55,kind:'cardboard'},
 {x:-22,z:-70,hx:.35,hz:1.2,kind:'wall'},
 {x:18,z:-70,hx:.7,hz:.7,kind:'crates'},
 {x:-12,z:-64,hx:.55,hz:1.05,kind:'cardboard'},
 {x:12,z:-70,hx:1.05,hz:.55,kind:'cardboard'},
 {x:-15,z:-82,hx:.7,hz:.7,kind:'crates'},
 {x:10,z:-90,hx:1.2,hz:.35,kind:'wall'},
 {x:-16,z:-88,hx:1.05,hz:.55,kind:'cardboard'},
 // West annex.
 {x:-40,z:-56,hx:.7,hz:.7,kind:'crates'},
 {x:-36,z:-72,hx:1.05,hz:.55,kind:'cardboard'},
 {x:-38,z:-96,hx:.35,hz:1.2,kind:'wall'},
 // Deep cavern / bone wing.
 {x:-10,z:-120,hx:.7,hz:.7,kind:'crates'},
 {x:12,z:-128,hx:1.2,hz:.35,kind:'wall'},
 {x:-6,z:-140,hx:1.05,hz:.55,kind:'cardboard'},
 {x:6,z:-152,hx:.7,hz:.7,kind:'crates'},
 {x:-10,z:-136,hx:1.05,hz:.55,kind:'cardboard'},
 // Extraction pool.
 {x:32,z:-6,hx:.7,hz:.7,kind:'crates'},
 {x:40,z:-14,hx:1.05,hz:.55,kind:'cardboard'},
 {x:28,z:-20,hx:1.2,hz:.35,kind:'wall'},
];

/** Supply caches: kind and world position. Risky spots: open floor, crossfire lanes. */
export const SURVIVAL_CACHES:{kind:'ammo'|'medkit'|'smoke';x:number;z:number}[]=[
 {kind:'ammo',x:0,z:-6},
 {kind:'smoke',x:0,z:-30},
 {kind:'medkit',x:-20,z:-60},
 {kind:'ammo',x:20,z:-58},
 {kind:'ammo',x:-36,z:-80},
 {kind:'medkit',x:16,z:-94},
 {kind:'smoke',x:-24,z:-94},
 {kind:'ammo',x:0,z:-120},
 {kind:'medkit',x:8,z:-148},
 {kind:'smoke',x:-12,z:-140},
 {kind:'ammo',x:36,z:-16},
 {kind:'medkit',x:40,z:-80},
];
