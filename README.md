# Painted Abyss — First Dive · 0.22.45

## West-hall catwalk gallery (0.22.45)

Walkable **broken service gallery** over the west hall: grated modular decks (L-run + spur), one collapsed span, and a south-end ladder climb. Solid spans support at `FLOOR_Y+3.2`; the gap drops to the floor. Guards stay on the ground for v1.

## Critical heal clutch (0.22.43)

Critical self-regen is stronger: **5 HP/s** toward a soft cap of **40** (was 2/s → 30), with a **0.75 s** post-hit delay. Fresh-blood leech still pays on kills; while health is ≤ ~15%, kill leech uses a **9 m** radius and **45%** share, and non-lethal hits return **15%** of damage dealt so shooting a guard at glass HP still feeds the bar. Passive soft cap never clamps combat heals.

## Faster guards (0.22.42)

Corridor guards walk and chase about **25%** faster. Role `speed` / `combatSpeed`, `GUARD_SPEED` patrol/alert/chase/chaseTired/search, and the walk→run gait blend move with them. Authored foot-slide clip speeds are unchanged so the planted foot still locks to the floor. Aim / accuracy / HP / cadence unchanged.

## Sharper guard aim again (0.22.41)

Armed survival roles land shots ~**1.25×** more often on top of 0.22.37: role `accuracy` raised toward cap **0.995**, lighter burst climb / moving-fire / first-shot penalties, and horde spray accuracy ×1.25. Skin-of-teeth graze bias **0.30→0.32** so standing stays lethal while strafing still earns GRAZE room. Damage, HP, cadence, director, magnetism, and Ego Savior unchanged.

## Health label (was Suit) (0.22.40)

Player-facing HUD and copy rename the vital from **SUIT** to **HEALTH** (prompts, sealant description, say-strings). Internal ids (`health`, `CRITICAL_SUIT_REGEN`, CSS `.meter.suit`) unchanged.

## Critical suit self-regen (0.22.39)

When health drops to **≤5** (including after an Ego Savior clamp to 1–3), it slowly recovers toward a soft cap while undamaged. Tuned further in **0.22.43** (see above). Medkits and kill-leech still matter for getting back toward full. No new UI — the Health bar rising is the read.

## Smooth frames + kill hatch spam (0.22.37)

Restores the playability render floor after #191's Retina 2× + 4× MSAA governor left Safari/laptops stuttering frame-by-frame (governor started at the top and took seconds of cooldown steps to drop). Caps DPR at **1×**, MSAA **off**, fewer motes / slower light scans, inventory swaps no longer full-scene shader-walk. Removes the persistent gold center/side “HARDER HITS READY — BUY AT THE HATCH” overlays (hatch shop UI stays).

## Sharper guard aim (0.22.36)

Armed survival roles land shots ~**1.5×** more often via role `accuracy` ×1.5 (cap **0.95** so they are not aimbots). Skin-of-teeth graze bias nudged **0.24→0.28** so standing/slow is deadly while strafing still earns GRAZE room. Cadence, HP, corpse persistence, director, magnetism, and Ego Savior unchanged.

## More aggressive corridor guards (0.22.35)

Guards pressure harder without extra HP: faster reaction / shorter draw-to-chase, tighter burst gaps and shorter rests, slightly better accuracy and engagement range, snappier chase speeds, rushers more eager to melee. Squad call-outs stay sharp. Corpse persistence, director reinforces, player magnetism, and Ego Savior are unchanged.

## Tougher corridor guards (0.22.34)

Every survival role is **+50% HP** (assault 150→225, flanker 130→195, rusher 110→165, officer 240→360, heavy 280→420). Assault takes a full magazine of body shots or three close headshots; headshots stay clearly better than body dumps. Knife backstab multiplier raised so silent kills still drop infantry.

## Near-death Ego Savior Phase 3 — mercy per engagement (0.22.17)

Lethal overflow still clamps to **1–3** with i-frames and critical theater, but mercy is no longer a free save every life: it recharges after a **player kill** or after **leaving combat for 8 s** (no chasing/firing guard, no fresh core damage). While spent and after the i-frame window you are glass. **Air-empty / flood drown never use Ego Savior** — those deaths stay honest. Still no INVULNERABLE / CLUTCH text.

## Near-death Ego Savior Phase 2 — critical theater (0.22.16)

When health is ≤ ~15% or Ego Savior i-frames are live, the screen goes hard red with a heartbeat pulse, audio muffles (low-pass) with panic breath, and the lethal save itself gets a micro hitstop plus a brief snappier knife/gun clear — still no INVULNERABLE / CLUTCH text. Reduced-motion softens the pulse but keeps the critical read. P1 save math unchanged.

## Near-death Ego Savior Phase 1 (0.22.15)

The hit that would kill you can silently clamp health to **1–3** once per life, with **0.4–0.7 s** true i-frames and a short enemy shoot-cadence desync (longer burst gaps / delayed next shot). No INVULNERABLE banner — GRAZE tracers keep whipping past. After the window you are glass; the save recharges on hatch respawn.

## Sharp image: full Retina resolution and edge smoothing (0.22.14)

The game now renders at your display's full pixel density (2× on a Retina Mac) with 4× MSAA on every geometry edge. Before this, the playability profile rendered one pixel per screen point with no anti-aliasing, so Safari stretched a half-resolution image across a Retina screen: soft textures, stair-stepped edges on every wall, pipe and cable tray, and thin things shimmering as you moved. That is most of what read as "low poly".

A frame-time watchdog keeps it fast (`playable/src/resolutionGovernor.ts`):

- **Steps down under load**: when more than about a fifth of recent frames run slower than 60 fps, it drops one rung (2× → 1.75× → 1.5× → 1.25× → 1× with MSAA → 1× without). The bottom rung is exactly the old profile, so no machine is slower than before.
- **Probes back up**: the browser paces frames to the display, so spare headroom is invisible. After a stretch of clean frames it tries the rung above; if that rung starts missing frames it steps back and waits twice as long before trying again.
- **Hitches never cost resolution**: single long frames (a garbage-collection pause, a texture upload, a tab switch) are ignored, and nothing is judged in menus or while paused. Changes are at least 1.2 s apart, since each one reallocates the render targets.
- Each change is logged in the browser console (for example `Render 1.75× MSAA 4× (frames over budget)`).

## Baked lighting (0.22.13)

The bunker's lighting is now precomputed offline in Blender's Cycles path tracer, the way AAA interiors are lit. Every lamp in the bunker (26 wall sconces, 7 hanging tubes, the corridor lamps, the shaft light and the fluorescent fills) is traced through the real geometry, and three results are stored in lightmaps:

- **Bounced light**: light hitting the red-brown floor and the whitewash and spilling onto everything else. Ceilings glow warm above the lamps, colour bleeds off the painted walls, and rooms fall off into darkness away from their lamps instead of being evenly filled.
- **Ambient occlusion**: corners, the wall-floor junction, under pipes, behind pilasters, around crates, desks and the relic plinth all darken as they would in real light.
- **Shadows of the fixed lamps**: pipes, brackets, pilasters, beams, door frames and cover now cast proper shadows from the wall sconces and corridor lamps, and their light no longer leaks through walls.

The lamps' light itself stays real time, so everything that moves still works: the hanging tubes swing when you shoot, sconces flicker, the flood turns the bounce teal and the relic slam turns it red. Nothing is added per frame beyond two texture reads per pixel, no lights are added, and all bunker surfaces still share one shader program, so this cannot bring back the freezes.

Assets: `bunker-lit.pack` (the bunker geometry with lightmap UVs, 3.7 MB gzip), `lm_indirect.ktx2` (1024²) and `lm_ao.ktx2` (2048², occlusion plus shadow mask) in `playable/public/assets/soviet-bunker-kit/baked/`. The bake is signed with the layout, so if the bunker changes without a rebake the game falls back to the unbaked kit and a test fails. Rebake with `playable/scripts/bunker-bake/run.sh` (about 30 minutes on two cores; see its README).

## Soviet bunker art pass (0.22.12)

The prototype rock boxes are gone. The whole map is now a flooded Soviet civil defence shelter built from Quaternius's free Modular Sci-Fi MegaKit (CC0), repainted so nothing in it reads as science fiction. The simulation grid is untouched: the same 4 m cells drive collision, sight lines, AI and the flood, and the kit's 4 m grid lines up with them exactly.

- **Walls**: riveted steel wainscot to 3 m, plaster plates above, a cable tray under the slab. Everything is painted by height in the shader: an oil paint dado to 1.55 m in each compartment's colour (green corridor, teal lab, bottle green hall, ochre service tunnel, oxide red back room), a thin dark stripe, then whitewash. Paint chips in patches and flakes down to plaster, whitewash peels near the damp ceiling, enamel chips to rust.
- **Water has left its mark**: tide lines from earlier floods at about 1.2 m and 2.7 m with a damp film below, rust streaks running down from the tray and pipes, grime rising off the floor, glossy standing puddles, a little old blood low on the walls.
- **Structure**: flat pilasters every 8 m on straight walls, hazard striped corner guards on every convex corner, ceiling beams every second row seam, deep lintels over each passage mouth, two colour coded service pipes on brackets that follow the walls round every corner without a break, whitewashed ceiling plates with water stains and ceiling vents.
- **Hermetic doors**: the spawn hatch is now a proper sealed door (ГД-1) with a kit frame, a steel leaf, six lever clamps and a handwheel, and four more sealed doors dress the other compartments.
- **Stencils**: sprayed Cyrillic signage painted into one canvas atlas at load, with stencil bridges, overspray and wear. Compartment names (ОТСЕК 1 to 7), the shelter plate (УБЕЖИЩЕ № 7), ВЫХОД arrows that point along the real route from the hall up the tunnel to the exit pool, ОСТОРОЖНО, НЕ КУРИТЬ, voltage warnings, red stars, a painted water depth gauge in every compartment (read the flood against it), and a structural grid mark on every pilaster.
- **Props**: fuel drums in quiet corners, floor cable coils. The existing lamps, sconces, radiators, posters and pipes stay; posters are now pasted flat on the plaster and radiators sit closer to the wall, since there are no more boulders to clear.
- **Physically honest**: a test samples every position the collision model lets the diver's eye reach, from a slide to the flood surface, and fails if any dressing contains it. Beams and lintels stay above the highest swimming eye.
- **No new freezes**: all bunker surfaces share one shader program and add no lights. The kit streams in as a 650 KB binary plus six 1024 KTX2 trim maps (3 MB); until it lands the rooms are closed by plain painted planes using the same material, so the swap compiles nothing.

Code: `playable/src/bunkerLayout.ts` (placement, pure and tested), `playable/src/sovietBunker.ts` (kit loading, the paint shader, baking), `playable/src/bunkerDecals.ts` (stencil atlas). Assets and the rebuild script: `playable/public/assets/soviet-bunker-kit/`, `playable/scripts/build_bunker_kit.py`.

## No freeze when switching items (0.22.11)

Switching away from the rifle froze the game for seconds. This was the same cause as the old kill freeze: the rifle's muzzle-flash light was a child of the rifle viewmodel. Putting the rifle away hid the viewmodel, which took its light out of the scene. The light count changed, and every lit shader in the bunker recompiled (27 programs in the headless test). Taking the rifle back out did it again.

- **Muzzle light moved**: it now hangs off the camera and is placed at the barrel's muzzle each shot, so it never leaves the scene. The flash sprites stay on the rifle.
- **Switching is checked in the same frame**: an item you've never held before (the knife, the rifle on first draw) has its shaders prepared in the background before it appears, instead of stalling the frame it is first shown.
- **Measured headless**: gun, flare, knife, gun, bandage and air switches now compile nothing new beyond each viewmodel's own first appearance, and the light count stays at 34 point lights throughout.

## No more freezes on kills and smoke (0.22.10)

The freeze on every kill was the renderer recompiling every shader in the bunker. three.js builds the number of lights into each lit material's shader. Each dead guard dropped a rifle and coins that brought their own point lights, so the light count changed and every lit material recompiled at once. In a headless test on 0.22.8, one kill recompiled 27 shaders and took a 6.7 s frame. After this fix, the same kill recompiles none and the light count stays fixed for the whole dive.

- **Loot glows** borrow from a fixed pool of 6 point lights made at start. The nearest glowing pickups (relic, Soviet key, rifles, gold) light up and the rest go dark. Picked-up items also release their light-cull hooks, which used to pile up with every drop.
- **Torch (F) and flare**: their lights are dimmed to zero instead of hidden, because hiding a light changes the count as well.
- **Shader prewarm on Begin dive**: everything that starts hidden (smoke puffs, blood, muzzle and impact cards, held items, gold and loot materials) is compiled and has its textures uploaded before play, so the first smoke grenade or first kill doesn't stall.
- **Smoke**: 9 puff cards per cloud (was 14), and puffs the camera is inside fade out and aren't drawn. Those screen-filling layers were the fill-rate cost; the HUD smoke veil already shows being inside a cloud.
- **Hitstop** shortened to a few frames: kill 55 ms (was 150), headshot 35 ms (was 90). It is still a punch you feel, not a pause you see.

- **Streamed props no longer stall on arrival**: lamps, sconces, radiators and the floor AK used to compile their shaders during the frame they appeared. Now anything arriving with an uncompiled material is held off-screen while the driver compiles it in the background (KHR_parallel_shader_compile, which Chrome and Safari on Mac have), then pops in a moment later.
- **Shaders match what's drawn**: warm-up compiles now target the post-processing buffer the frame really renders into. Before, they built variants for the screen that were never used, so the real ones still compiled mid-play; the headless build now makes 56 programs instead of 76.

## Undo 5× simulation scale (0.22.1)

Reverts PR #151 (`GAME_TIME_SCALE = 5`). Mission time, movement, AI, and gas run at wall clock again. Hitstop / combat feedback / hitch clamps are unchanged from the pre-0.22.0 path.

## Runtime polish meets the speed lens (0.21.3)

Merges the Cursor runtime pass (0.21.1 post/CPU polish) with the speed lens (0.21.2). The runtime pass fused the impact crunch into the clip-grade shader, which left the lens's peripheral stretch writing to a pass that no longer exists. The stretch now lives in the fused clip-grade pass, so you get the cheaper post stack and the lens together.

## Speed lens toned down (0.21.2)

The 0.21.1 lens swung from 60° to 110° and breathed with every step. It is now a rush rather than a trip:

- **Range**: 64° (the game's normal view) up to 82° at slide speed, so +18° instead of +50°.
- **Walking doesn't move it at all**: the lens only starts widening above 1.6 m/s. A run gives about 70°, and only slides and slide-jumps reach the top.
- **No pulsing**: the lens follows your speed up over about a quarter of a second, so the stride's own speed ripple moves it less than 0.3°. It follows your speed down almost instantly, so stops still snap. Only horizontal speed counts, so bobbing in the water doesn't breathe the view.
- **Snap kept, wobble gone**: stiffness 150, damping 13.5 (ζ ≈ 0.55). Stopping from a slide takes the view back halfway in about 0.13 s and dips about 2° under normal, then settles within about half a second. The old version dipped 10° and rang.
- **Edge stretch**: 0.025 at top speed (was 0.08), a hint of tunnel rather than a fisheye.

## Speed lens: FOV on a spring (0.21.1)

`playable/src/speedFov.ts` makes the field of view follow your speed. It reads the player's velocity and never touches movement.

- **Target**: V_norm = clamp(|v| / 7 m/s, 0, 1), and target FOV = 60° + V_norm × (110° − 60°). Walking gives about 71°, running about 84°, and a slide launch 110°. These are three.js vertical FOVs, as before (the old fixed lens was 64°).
- **Spring, not a lerp**: acceleration = −stiffness × (fov − target) − damping × fovVel, integrated with semi-implicit Euler in sub-steps of at most 1/240 s. The feel is the same at any frame rate, and a hitch frame can't blow it up. With the defaults (stiffness 180, damping 12, ζ ≈ 0.45), a dead stop from top speed swings from 110° down to about 50° after 0.26 s, then settles on 60° within about 0.6 s.
- **Peripheral stretch**: the post pass pulls samples toward the centre in proportion to r², so the walls stretch out to the frame edges while the centre stays true. It is up to 8% at the corners at top speed and follows the spring.
- **Aiming** blends the lens toward the sights' fixed 52°, and the stretch fades out, so a scope does not breathe with your speed.
- **Tuning**: `SPEED_FOV` at the top of the file has MIN_FOV, MAX_FOV, V_MAX, SPRING_STIFFNESS, SPRING_DAMPING, WARP_MAX, FLOOR_FOV and MAX_STEP. The per-frame update allocates nothing.

## Runtime post/CPU polish (0.21.1)

On top of the 0.21.0 playability profile: **UnsignedByte** composer buffers (no HalfFloat), impact crunch/chroma **fused into the clip-grade pass** (one fewer full-screen blit), PointLight registry rescanned every 12 frames, hanging-tube emissives cached (no per-frame glTF traverse), rock anisotropy 8→4, and `?test=1` exposes `__abyss` on production serves for frame probes.

## Playability · ~5× cheaper frames (0.21.0)

The dive was moving frame-by-frame on heavy machines again (Retina + MSAA + torch/hanging shadow maps + half-res bloom). `playable/src/perf.ts` now caps the canvas at **1× DPR**, turns **MSAA and shadow maps off**, runs bloom at **quarter-res**, cuts suspended motes **1800→360**, and follows only **3** hanging-tube spots (none casting shadows). Rock maps, hanging fixtures, frame grade, combat feedback, and HUD stay. After merge: `node playable/refresh.mjs` and confirm **BUILD v0.21.0**.

## Style meter (0.20.10)

`playable/src/styleMeter.ts` scores how you fight and shows a rank from D up to SSS on the left of the HUD, with a fill bar, a chain count and a short feed of recent actions (for example "+448 SLIDE HEADSHOT KILL").

- **Actions and base points**: hit 40, headshot 90, kill 180, headshot kill 280, knife cut 70, knife kill 260, guardian wound 120, guardian kill 600. A **close call** is worth 110: a guard's round or swing misses you while you slide or are airborne, within 20 m. **Parry** (220) is in the API but nothing triggers it yet, because the game has no parry.
- **Scaling**: mid-slide ×1.6 and airborne ×1.5, which stack. Each event within 2.5 s of the last adds 10% to a chain multiplier, up to ×2. Repeating the same action loses 35% of its value each time, down to a floor of 20%. That recovers at 5% a second, so variety pays and spamming doesn't.
- **Ranks**: each letter has its own bar (300 points for D, up to 1,200 for SSS). Overflow promotes you, and SSS stays full.
- **Decay**: after 2.5 s with no combat events the bar drains at 60 points a second at D, plus 35 per rank above D. It empties down through the letters to nothing. Taking damage costs 60% of the current bar and resets the chain. Dying resets the meter.
- **Rank-up hook**: `style.onRankChange(fn)` fires once for every tier crossed, up or down. CaveWorld uses it to shake the screen on each rank-up, harder for higher letters. Hitstop and pause freeze the meter.

## Jump replaces dash; faster slide (0.20.8)

- **Dash removed.** Space no longer does the 8 m/s lunge.
- **Space jumps** (on foot). You leave the ground at √(2·g·h) for a 0.5 m rise under real gravity, so about 0.64 s in the air. You keep your ground speed, with a little air control that can turn you but never speed you up. One jump per press, none in mid-air, and a press up to 0.12 s before landing jumps again on touchdown. A jump costs 6 stamina, and something overhead stops the rise. Landing is a footfall the guards can hear.
- **The slide is a way to travel.** C at a run now launches at 7.0 m/s (about twice a run) on wet-concrete friction (μk 0.18). It stays faster than running for about 2 s and gains more than 3.5 m on a runner. Release C and you stand and keep running.
- **Slide-jump**: a jump out of a slide keeps the slide's speed. Land with C held and you slide on at the speed you landed with. There's no fresh boost, so hopping can't build speed.
- **Tilt +15%**: the slide lean is now 2.875° (was 2.5°).
- **Smoother camera**: the drop into a slide eases in over about 0.15 s instead of snapping. The slide and jump no longer fire the screen pulse.

## Dash and slide (0.20.7)

On foot you now have two movement moves on top of the walking gait, both in `playable/src/movementTech.ts`.

- **Dash: Space.** Your velocity is replaced (not added to) by 8 m/s in the direction you are pressing, relative to where you look; with no keys it goes straight ahead. It lasts 0.15 s (about 1.2 m) with gravity and vertical motion suspended, then has a 0.5 s cooldown from when it ends. One press gives one dash: holding the key does nothing, and a press up to 0.1 s early is buffered. Each dash costs 10 stamina.
- **Slide: C at a run.** Pressing C at 2.6 m/s or faster drops you into a slide with 1.6 m/s added forward. Below that speed, C is the normal crouch. The body capsule halves from the bottom up, so the eye drops 0.875 m, and the view leans 2.5° toward the slide (to the left on a straight one). Kinetic friction (μk 0.34, clothing on concrete) slows you at μk·g ≈ 3.3 m/s², so a slide from a run covers about 3.6 m in 1.3 s. While you hold C it settles into a crouch-walk; release early and you stand and keep running.
- **Slopes**: slide velocity is kept along the ground plane, with gravity's slope component added. On a slope steeper than about 19° (the friction angle) you speed up downhill; uphill you slow faster. The bunker floor is level today, so this applies automatically once ramps return a slope from `groundNormal()` in `simulation.ts`.
- **Headroom check**: when you release C, five upward rays test the space above your head against the rendered geometry. If a ceiling or underside is inside standing height, you stay low (still sliding, or crouched) until you are clear.
- A dash can cancel a slide, and holding C through a dash drops you straight into a slide at no more than a boosted run. Guards hear a dash or slide the way they hear a run; you only get the crouch sight bonus once the slide has become a crouch.
- Ctrl is deliberately not used: in a browser, holding W while pressing Ctrl can close the tab (Ctrl+W), and a web page cannot block that outside fullscreen.

## AK-74U viewmodel fixed: official model, iron sights (0.20.6)

The 0.19.8 carbine was rebuilt from Sketchfab's web-viewer data, which scrambled its UVs (stripy, dotty textures) and swapped the texture slots (gold metal, shiny arms). It now uses the author's official glTF download: black matte steel, red-brown handguard, grey hoodie sleeves and skin-tone hands, exactly as on Sketchfab. Other fixes:

- **Hip view** matches the Sketchfab IDLE view: the carbine rests right of centre, pointing in at the crosshair, with the left hand on the handguard. The old fit hung the rig from the top of its bounding box, so the camera sat in the wrong place.
- **Aim down sights: hold right mouse.** The carbine comes up onto the rear notch and front post in 0.2 s and the view narrows from 64° to 52°. The crosshair hides because the iron sights are now the reticle; the hit marker still shows. A shouldered stock takes 30% off the muzzle climb and camera kick and steadies the sway.
- **Animations**: DRAW on equip and SHOOT on every shot. Reloads use RELOAD1 with rounds still in the magazine and RELOAD2 (with the charging handle racked) when it is empty. **V** plays INSPEC. IDLE loops.
- **No stray lights or glow**: the old viewmodel carried its own hemisphere and directional lights, which lit the whole bunker, plus a cyan emissive undertone that made it glow under bloom. The carbine is now lit by the bunker's own lights plus a faint room reflection, so it stays black steel with warm highlights.
- The muzzle flash sits on the real muzzle and follows the barrel through recoil and aiming. The floor pickup is the carbine alone at real size (0.73 m), resting on the floor. The camera's near plane moved to 3 cm so the receiver no longer clips.

Asset: 9.6 MB, down from 23.7 MB (WebP 2048² textures, resampled clips), so the lazy load arrives sooner. Credit in `playable/NOTICE.md`.

## Combat Feedback Manager (0.20.5)

`playable/src/combatFeedback.ts` — punchy screen shake + hitstop, dialed back from the loud pass. Fire / damage kick the camera (~6–12 cm peaks); headshots freeze sim ~90 ms, kills ~150 ms while rendering continues. Wired through CaveWorld’s animate loop via `simDt` and camera-local shake.

## AK74U FPS inventory gun (0.19.8)

Sketchfab [AK74U | FREE ANIMATION](https://sketchfab.com/3d-models/ak74u-free-animation-2ab66220c48b465e9501067667965569) (BURNER / @Alexander_Ovelar, CC BY 4.0) — official viewer mesh + `DRAW` / `IDLE` / `SHOOT` / `RELOAD*` clips under `playable/public/assets/ak74u/`. Replaces the diver’s held gun (animated FPS arms+carbine) and corridor floor pickup; Soviet guards still carry the TT-33. Credit in `playable/NOTICE.md`.

## Cast-iron radiators (0.19.6)

Sketchfab [Vintage Cast Iron Radiator](https://sketchfab.com/3d-models/vintage-cast-iron-radiator-3d-model-7d4d8077bc524dbeb11a28ca09badf57) (Ati, CC BY 4.0) — official glTF under `playable/public/assets/vintage-radiator/`. Four room-scale units (~1.35 m tall) sit flush on memorable breath-corridor and entrance-lab walls as installed heating (clear of the hatch stash and guard centerline). Credit in `playable/NOTICE.md`.

## Guard animations from the Asset Store (0.19.4)

Three Kevin Iglesias clips (Human Melee Animations FREE, Unity Asset Store) now play on the guards. **Death**: a shot-down guard drops to his knees and pitches forward onto the floor instead of toppling like a plank. **Hit**: every pistol or knife hit on a living guard makes his upper body flinch (legs keep running, so no foot sliding). **Stab**: knife rushers wind up and thrust with the one-handed attack, stretched so the thrust lands exactly when the sim lands the blow. The clips are retargeted in world space onto the Quaternius guard rig by `scripts/retarget-kevin-iglesias.mjs` (needs FBX2glTF: `npm i fbx2gltf`), with the feet kept on the shins and every joint kept above the floor. If the clip file fails to load, the old procedural fall still works.
## Asset Store FX (0.19.3)

First assets pulled from the Unity Asset Store into the web game (textures only; credits in `playable/NOTICE.md`). **War FX** (Jean Moreno): your TT-33 and every guard pistol now fire a hard star flash with a spark star over the old glow; your rounds leave concrete bullet holes on the real rock, floor and cover surface they hit (48 kept, the oldest recycles) with a spark star; smoke grenades use the War FX smoke puff; sparks, dust and blood particles are round soft glows instead of squares. **Crosshairs** (OccaSoftware): new aim reticle, and the hit marker is their X card, still white / gold on a headshot / red on a kill. `scripts/import-war-fx.py` rebuilds the textures from the downloaded `.unitypackage` files.
## Crouch and sneak (0.19.2)

Hold **C** on foot to crouch, Hitman-style. The camera drops about 0.6 m and you move at half walking speed with no running (so no running noise). Guards find you **35% harder to see**: every distance at which a guard can pick you up is cut to 0.65 (close-contact 2.5 m to 1.6 m, in-view 9 m to 5.9 m, lit torch 16 m to 10.4 m), and a searching guard needs you within 65% of his usual range to re-acquire you. Crouching is not invisibility: close in, in his view, he still sees you, and a guard already chasing you keeps you. Use it to slip past patrols when ammo is low or you would rather not start a firefight. Tuning in `SURVIVAL.stealth` (`playable/src/survivalConfig.ts`).
## Progressive prop loading (0.17.8)

The hatch, cave textures, weapons, guards and shared lighting load first. Crates, map scrolls, lifebuoy, posters and the distant valve/copper models upgrade as the player approaches (40–48 m lead distance). At most two prop upgrades run together, after a brief startup head start for essential assets. Basic crate/scroll visuals and gameplay interactions exist immediately; lid state is restored if a crate opens before its model finishes. Loaded props remain available through death and restart. Failed downloads retry up to three times with a cooldown.

Local Chrome checks measured about 65 MB transferred at the hatch versus about 96 MB before this change; this is a startup download comparison, not a frame-rate claim. All original models and texture files are retained.


The live build is shown in the game as **BUILD v… · git-sha** (menu and during the dive). After another agent merges a PR, your laptop does **not** update by itself — run:

```sh
node playable/refresh.mjs
```

That pulls `main`, stops the old server on port 5173, rebuilds, and serves. Agents must bump `playable/package.json` (and README / START-HERE) on every playable change — see `.cursor/rules/playable-version.mdc`. Do **not** commit `playable/dist/`; serve/refresh rebuild it when stale.

Includes a clearly audible inventory select click/snap, quieter first-play tip, sound, and continuous 360° horizontal camera turning. When pointer lock is unavailable, hold the pointer near either edge to keep turning; move it back towards the centre to stop.

## Surfaces (0.16.2)

The flat band shade is gone. Rock, floor, stone, and moss are the 2K photographic maps again, with the original soft lighting and pore normals. Floor and wall blood stains are 60% lighter than before. Fog, the frame grade, the io HUD, and the red enemy hit flash are unchanged.

## Faster guards (0.16.3)

Corridor guards walk and chase about 15% faster. Role combat speeds, patrol/chase/search, and the walk→run gait blend move with them. Authored foot-slide clip speeds are unchanged so the planted foot still locks to the floor.

## Cardboard cover (0.16.4)

Poly Haven [Cardboard Box 01](https://polyhaven.com/a/cardboard_box_01) piles are wired as shootout cover across the bunker (entrance, corridor, cavern, relic approach, extraction). They block movement and sight like the existing crates and blast walls.

## Metal desk cover (0.16.5)

One Poly Haven [Metal Office Desk](https://polyhaven.com/a/metal_office_desk) sits in the entrance chamber as duck-behind shootout cover. Same movement/sight blocking as crates, walls, and cardboard.

## Stylized colour (0.17.0)

Brighter, louder, Overtide-style picture without touching the 2K rock, wall, stone and moss maps. The frame grade adds luma-preserving saturation and vibrance (near-greys stay neutral), a midtone lift and a gentle multiplicative split tone. Dry air has a bright neutral key with a teal floor bounce so textures keep their own hue; the underwater field is lighter too. Cover crates are painted olive, blast walls are sand concrete with a hazard stripe, reinforcement doors are teal steel in yellow frames. The HUD moves to chunky Barlow Condensed on rounded solid panels with yellow keys, colour-coded meters, a big ammo counter and a yellow selected slot. The vignette is much lighter.

## Cardboard barricades (0.17.1)

Cardboard cover is now clustered barricades: each footprint is **3–4 carton stacks** side-by-side (chest–head high) with a wider collision box, so you can actually hide behind them in a shootout. More barricades in the entrance, corridor, cavern, relic approach, and extraction.

## Faster pistol reload (0.17.2)

Player TT-33 magazine changes take **1.2 s** (was 1.9 s). Empty mags come back online quicker in a fight.

## Pistol reload 0.9 s (0.17.3)

Player TT-33 magazine change is **0.9 s** (was 1.2 s).

## Grounded loot + ammo prompts (0.17.4)

Removed the mystery mid-air teal flare orb. Death drops land on the floor instead of floating at eye height. Floor pickups no longer bob. Stocked ammo / med / smoke boxes only appear when you can take them, and show a **Walk over · Ammo box** prompt.

## Soviet bunker grade (0.17.5)

The sepia is gone. Dry air is a dark cold teal-grey (fog and background), the key light is cold fluorescent white, the ceiling bounce is cold concrete, and the frame grade slightly desaturates with teal shadows and neutral highlights. Two of every three wall fixtures are cold tubes (every flickering one included); one in three stays a warm orange caged bulb as the accent. The cavern and entrance ceiling spots are fluorescent. The underwater field and the red relic slam are unchanged.

## Hanging tube lights (0.17.8)

7 Poly Haven [Caged Hanging Light](https://polyhaven.com/a/caged_hanging_light) fixtures (CC0) hang on their chains from the bunker ceiling over open floor, at least 22 m apart (cut from 18 to 7 in 0.18.0). Each is a real pendulum (period from g and chain length); your shots, guard fire and bullet impacts within 9 m kick them, so the light pools and the shadows under them sway. 60% of tubes burn steady, 30% are failing (buzzing blackouts), 10% are dying (dark, then bursts); in the final wave every tube stutters, and the relic slam turns them red. A fixed pool of 5 downward spotlights follows the tubes nearest you (no shader recompiles); the nearest casts shadows. Tuning in `playable/src/hangingLightAsset.ts`.

## Frame grade (0.14.3)

Original rock, wall, floor and moss maps are preserved. The picture around them is three hard fields in `playable/src/frameGrade.ts`: a flat blue-green water sheet, dirty ivory with amber practicals while you are in the air, and a hard red slam for a few seconds when the relic trap first opens. Those fields are assigned. They do not fog-blend, and depth no longer fades the cave into navy. Contrast is clipped. Guard kits and metal meshes stay as they are and read darker against the field.

## Survival firefight (0.14)

The bunker is held by a garrison that escalates as you push for the relic: a quiet start, first contact in the entrance chamber, waves through steel bulkheads (red lamp + clank + shout before anyone steps through), a short lull to reload and resupply, harder waves, then a final push from the moment you lift the relic until you reach the extraction pool.

- Guards: assault (advance + bursts), rusher (sprints in, telegraphed knife stab), flanker (comes round your side), heavy (helmet + long bursts). Standard guards take three head shots up close, four at range, about eight body hits (a full magazine).
- Controls: click fires the TT-33 (or stabs with the knife), R reloads, **T throws smoke**, E interacts, 1–5 select.
- Smoke blocks sight for guards and for you. Walk over ammo boxes, field dressings and smoke tins to take them; a downed guard's pistol gives up its rounds when you walk over it.
- Every balancing number (enemy counts, health, damage, accuracy, timings, supplies, smoke) lives in `playable/src/survivalConfig.ts`.

## Open in Cursor

Clone this private repository using Cursor's **Clone Repository** command and open the cloned folder. The current game is in `playable/`; `source/` is the preserved original prototype.

In Cursor's terminal, run:

```sh
cd playable
npm ci
npm run dev
```

Open the local address printed in the terminal. Pull the latest commits before continuing work in another checkout. Commit and push completed changes so both editors use the same version.

A small playable underwater survival mission built from the supplied Ancient Seas React / Three.js foundation. Recover an ammonite relic, survive one guardian, and extract through a narrow passage into a lit pool. Intended first-play duration: about 2–4 minutes. A rehearsed scripted route completes in about 89 seconds.

The supplied **Underwater Ambience** track loops during the dive, fades in gently, and shares the existing M mute and Esc pause controls. Resuming continues the music; restarting a dive starts it again. The original MP3 is included unchanged at `playable/src/assets/underwater-ambience.mp3`. The generated water ambience has been removed: the remaining generated sounds are regulator breathing (with quiet gaps between breaths), the two-tone chime, and a short mechanical inventory select click/snap on 1–5.

## Play locally

1. Clone the repository or unzip the entire downloaded folder.
2. With **Node.js 22.13 or newer** installed, once:

   ```sh
   cd playable && npm ci
   ```

3. From the repo root (or `playable/`), run:

   ```sh
   node playable/serve.mjs
   ```

   `serve.mjs` rebuilds `playable/dist/` when it is missing or its version does not match `package.json`.

4. Open **http://127.0.0.1:5173** in desktop Chrome, Edge, or another WebGL 2 browser.
5. Click **Begin dive** once. Move the mouse or trackpad normally to look. No button needs to be held.

Keep the terminal open while playing. Stop it with Ctrl+C. If port 5173 is already occupied, stop that other local server or set the `PORT` environment variable to a free port before running. After dependencies are installed, play needs no internet. Opening an HTML file by double-clicking does not start its local server. The root `index.html` is the preserved artwork gallery, not the new game.

## Controls

| Input | Action |
|---|---|
| Mouse / one-finger trackpad motion | Look; right turns right, left turns left |
| Two-finger scroll | Additional camera look; does not select items |
| Arrow keys | Keyboard camera look |
| W / A / S / D | Walk anywhere the bunker floor is dry or wadeable (corridor and cave); swim once the flood passes the walk line |
| Space | Add positive buoyancy (BCD up) — swim only |
| Q or Ctrl | Add negative buoyancy (BCD down) — swim only |
| [ / ] | Nudge locked idle trim bias toward sink / float — swim only |
| X | Clear trim bias back to neutral — swim only |
| Shift | Run on dry corridor floor; sprint kick while swimming |
| F | Toggle the mounted torch |
| E | Collect a nearby item / open a lidded crate / grab a scrap from the plastic crate / confirm replacement / extract. **Hold** at the leak valve to turn it shut; let go to release the wheel |
| Tab | Toggle the field chart (map scraps from crates; exits marked only when all three fit) |
| 1–5 | Select one of exactly five carried slots (plays a short click when the selection changes; muted when sound is off) |
| Click (knife selected) | Stab — short forward melee; range shorter than the guardian's bite |
| R | Use / consume selected air reserve, sealant, or distraction flare (knife and salvage refuse) |
| G | Drop selected item into the cave |
| Esc | Pause / release the pointer; cancels a pending swap (browser may also pause) |
| M | Toggle audio |

Pointer lock is requested by Begin / Resume. If the browser refuses it, moving the pointer over the canvas still looks without click-drag. Holding the pointer near either horizontal edge keeps turning continuously through 360°; moving back towards the centre stops continuous turning. Arrow keys and scroll also look. Physical two-finger scroll direction can depend on OS scroll settings; native pointer motion and synthetic scroll input were tested, not a physical trackpad. Pausing exposes the mouse cursor for menu buttons.

## Your first dive

- Head down the entrance tunnel and around the central rock pillar (there are no guide arrows; use the compass readout and the chart). The relic rests above a plinth in the bone alcove at the far end.
- **The relic is booby-trapped.** The bunker stays dry until the first successful relic pickup opens the flood valve. Dropping the relic or dying does not stop the flood; a full mission restart resets the trap. The valve can still stop and drain the flood after activation. At spawn the whole bunker, corridor and cave, is dry: the waterline starts below the floor and after the trap activates, one shared flood level rises at about 1.6 cm/s (over the floor in about 35 s, standing head height in about 2 min 15 s, the ceiling in about 7 min 20 s). The HUD **FLOOD · LEAK** gauge tracks it. Tank air only burns while your head is under the waterline; above it the HUD reads **IN AIR**. In the corridor you **WASD walk** / **Shift run** until the water passes eye height, then swim (Space/Q buoyancy). The cave is walkable too until the flood passes the walk line; then you swim.
- **Walking is a human gait** (`playable/src/gait.ts`), not a glide. Speed sets cadence and stride (≈117 steps/min at the 1.55 m/s walk, ≈165 at the 3.4 m/s run); each leg follows clinical hip/knee/ankle curves with heel strike, loading response, midstance, push-off and swing; the pelvis rises and falls twice per stride (≈4 cm walking, lowest at heel strike; ≈7 cm running, lowest at midstance), sways toward the stance foot, rotates ±4° and drops ±5° on the swing side; the thorax counter-rotates and the arms swing opposite the legs. The camera rides that body with gaze stabilisation, so you feel the rise, fall and sway but only a slight nod. Starting takes about a second, stopping finishes the step and settles on both feet, backward and sideways steps are slower, you cannot run backwards, wading slows the stride, and every heel strike plays a footstep (splashing once the water is over your boots). Legs tire more slowly than fins: about 12 s of hard running.
- **The leak valve.** Hidden on the blind south wall of the far south-west cavern corner (behind the west shelf, off every marker route) stands a green riser with a red handwheel gate valve at chest height. Stand in front of it and **hold E**: both gloved hands reach up and grip the rim like a steering wheel, then turn it shut hand over hand — both hands drive the wheel about 75° clockwise, then the right hand lets go, swings back and re-grips, then the left. Arms are solved with two-bone IK from the shoulders, fingers open and close on each re-grip, and a hand that is holding stays locked to the rim. The stem has been seized for years, so the first stroke strains before it breaks free, and each stroke gets heavier as the gate closes against the water behind it until it seats with a clunk. Closing takes 2½ turns (about half a minute of exposed work, breathing harder the whole time). Leak flow follows the open area of the round port, so the last turn cuts most of what is left. Letting go of E releases the wheel where it is; the valve and the water level both survive death. Once seated the water stops rising at once and the floor sump starts draining it: the gauge reads **FLOOD · DRAINING**, then **SEALED** when the floor is clear. The drain is a gravity sump (outflow ∝ √depth, Torricelli), so deep water falls fastest and the last centimetres trickle; a completely full bunker takes 7 minutes (`BREATH_DRAIN_FULL_SECONDS` in `simulation.ts`). Holding E at a shut valve opens it again (anticlockwise, same hand-over-hand motion; the gate is wedged in its seat at first): the drain stops immediately and the leak refills from whatever level the water had reached.
- Three floor **crates** hold torn **map scraps** (west cavern, east shelf, bone alcove). The plastic crate has no lid — the chart scroll is already visible inside, and **E** grabs it. The military crate and suitcase open with **E**, then **E** again takes the scrap. **Tab** reviews the field chart. Exit marks appear only after all three scraps fit.
- You start with a **diving knife** in slot 1, plus driftwood, flare, pony bottle, and sealant — five slots so the swap mechanic can be tried immediately. Press **E**, select the slot to replace with **1–5**, then press **E** again. The displaced item remains in the world and can be recovered. There is no extra backpack.
- Driftwood is spare salvage; replacing it keeps your useful supplies. Press **1** then **click** to stab the guardian at close range — wounds make it rage harder; at ~85% damage taken it breaks off slow and limping; killing it sinks the corpse with soft floating blood sprites in the water (optional — extract still only needs the relic). Press **1–5** to select a slot, then **R** to use consumables — air, sealant, and flares are consumed. A one-time tip appears on the first dive only; later dives rely on the selected-slot chrome. Selecting the knife draws it into a gloved diver's hand — a real-scale first-person viewmodel with the fist low in the bottom-right, forearm running out of frame and the blade angled up toward the crosshair; clicking plays a wind-up, thrust and recover stab; other slots return the mounted torch as the held FPS object.
- Carry the relic east, enter the narrow fissure, then follow it north to the extraction pool. Press **E** near the light to win. You must still be carrying the relic; dropping it removes eligibility to extract.
- **Five Soviet guards patrol the bunker.** Same behaviour, five kit colours (olive, khaki, steel-blue, brown, field-teal). Each walks an overlapping beat of the outer perimeter (~25% shared with the next man so they meet in doorways), about 1.3 m off the walls, stopping at corners and every ~16 m along long walls to look around. At each stop he surveys the open floor, turns (through the room, not across the wall) to face the longest view, sweeps it, and where the space opens two ways checks the other way too. He sees what is in front of him (≈65° either side; a lit torch from 16 m, dark from 9 m), hears you running within 11 m, and senses anyone within 2.5 m. Each respawn he starts from a different stop on his beat, at least 30 m from the hatch when that beat allows it. When he loses you he searches, then rejoins his own beat at the nearest stop. They cannot swim, so once the leak passes the walk line they hold their ground.
- **Each guard shoots on sight.** He carries the TT-33 as his own sidearm. The moment he spots you he stops, raises the pistol (about 0.35 s) and fires aimed shots roughly every 0.75 s from a standing stance, reloading for 2.2 s after each 8-round magazine. Hits cost 30 health (less with the coat); misses crack past with a ricochet. Close, steady targets are almost always hit; long shots in the dark, running targets and his rushed first shot often miss, so breaking his line of sight or sprinting for cover is how you survive. A soft key and rim light keep his face and uniform readable in the dark.
- Rock blocks the guardian's sight. Its states are patrol, alert, chase, search, damaged, and dead. Use the pillar, briefly sprint away, switch off the torch, deploy a flare, or fight with the knife. It cannot enter the narrow exit passage.
- Air is a free-gas tank shown in **litres** on the HUD (**100 L** main ≈ 5.6 min surface cruise at 18 L/min SAC, plus a **9 L** pony). Burn scales with depth (ATA) and sprint/panic effort (R arms the pony). Space/Q fill a **BCD trim** (−1..+1); **[ ]** lock an idle bias and **X** clears it; look-pitch finning only adds a little vertical thrust. Sealant repairs 45 health. A flare distracts for 12 seconds unless you remain very close to the guardian. Dying or running out of air brings up Restart.
- **Out of scope for First Dive:** cave currents / surge, a weight-belt inventory model, and real decompression stops or NDL tracking. The short mission stays shallow and theatrical; those systems are deferred.

## Edit and rebuild

The new portable entry point is **playable/**. From that folder:

```sh
npm ci
npm run dev
npm test
npm run build
```

`npm ci` downloads pinned dependencies. `npm run build` type-checks the project and writes local `playable/dist/` (gitignored). Serve/refresh use that build with relative asset paths; no Cloudflare / Sites hosting stack.

Optional browser suite: install Playwright (`npm install --no-save --package-lock=false playwright@1.62.1`), have desktop Google Chrome installed, run the development server at port 5173, then run `node tests/browser.cjs` in another terminal inside `playable/`. This suite uses an isolated headless Chrome instance and software WebGL. Results go in `test-results/`.

## What was retained

- `source/`: original editable Ancient Seas project, unchanged.
- `compiled-build/` and `deployment/`: original export, unchanged.
- `artwork/`: supplied references and all generated concepts, unchanged.
- `playable/src/legacy/ocean.ts`: reused OceanWorld foundation, including renderer setup, procedural marine creature geometry, animated materials, swimming vectors, and synthesized underwater ambience. Small constructor and caustic-light changes allow the new cave to use it.
- `docs/DESIGN-HANDOVER.md`: original creative handover.
- `MANIFEST.json`: original export inventory; its original README is now saved as `docs/ORIGINAL-EXPORT-README.md`.
- `PROTOTYPE-MANIFEST.json`: historical checksums of the 0.1.1 downloadable archive; Git records later changes, including the 0.1.2 camera update.

New mission rules live in `playable/src/simulation.ts`; cave rendering and input in `CaveWorld.ts`; React HUD/menu in `main.tsx`. Bundled runtime library licences are in `playable/licenses/`. Third-party art attribution is in `playable/NOTICE.md`.

## Third-party assets

- **Modular Sci-Fi MegaKit** by [Quaternius](https://quaternius.com), CC0 1.0. Industrial pieces repainted as the Soviet bunker (`playable/public/assets/soviet-bunker-kit/`).
- **Fish Knife** ([Poly Haven](https://polyhaven.com/a/fish_knife)) by Mateusz Sadek — CC0 1.0. Used as the diving-knife inventory icon and held FPS prop when the knife slot is selected (`playable/public/assets/knife/`). Other slots restore the dive torch as the held object.
- **Dive chests** (CC0 1.0): [Wooden Military Crate](https://polyhaven.com/a/wooden_military_crate) (Prabhjinder Singh), [Plastic Crate 02](https://polyhaven.com/a/plastic_crate_02) (Fabi_G), [Vintage Suitcase](https://polyhaven.com/a/vintage_suitcase) (Maximilian Schuster). Floor props under `playable/public/assets/chests/`. The military crate and suitcase open with **E**, then **E** takes the chart scrap. The plastic crate has no lid — the scrap is already visible and **E** grabs it.
- **Map scrap scroll** (CC BY 4.0): [Scroll (game ready asset)](https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7) (Aparicio Silva 3D). Authored mesh and PBR maps under `playable/public/assets/scroll/`. It sits in the open-top plastic crate the whole time, and inside a lidded crate after that crate is opened.
- **Copper pipe section** (CC BY 4.0): [Copper Pipe Section](https://sketchfab.com/3d-models/copper-pipe-section-91807ce330af449bbd3c59b5ede8ce67) (pixol3d). Official glTF under `playable/public/assets/copper-pipe/`. The same section is repeated along the full blind south wall of the far south-west cavern, joined to the hand-wheel pipe.
- **Vintage cast-iron radiator** (CC BY 4.0): [Vintage Cast Iron Radiator 3D Model](https://sketchfab.com/3d-models/vintage-cast-iron-radiator-3d-model-7d4d8077bc524dbeb11a28ca09badf57) (Ati). Official glTF under `playable/public/assets/vintage-radiator/`. Four room-scale wall units on the breath corridor and entrance lab.

## Validation and limits

The production build and **14 gameplay tests** passed, including a full route through live AI and collision and continuous camera rotation. Chrome rendered actual WebGL 2 successfully: camera direction, pointer-lock fallback, movement, torch switching, inventory swap, pause, extraction, loss, and restart were checked. See `docs/TEST-REPORT.md` for the initial validation and its limits. The later camera check verified turns beyond 360° in both directions with pointer lock denied, and stopping continuous turning by returning the pointer to the centre.

This is intentionally prototype-quality: one level, one procedural creature, simple grid-derived cave collision and route finding, decorative torch volume, and reusable supplies. No crafting, saving, region selection, mounts, mobile controls, or body-roll squeezing system. Cave currents / surge, weight-belt loadout, and real deco / NDL are explicitly out of scope for this short mission. The narrow route limits the creature by its navigation region; collision is approximate and not an anatomical simulation. Point lights do not cast physical shadows. Visuals and timing will need human playtesting; native GPU performance, Safari, and a physical trackpad were not manually validated.

## Local asset caching

The built-game server (`node playable/serve.mjs`) reuses downloaded assets. Vite-generated files with content hashes in their names are cached for a year; a changed file gets a new URL on the next build. Fixed-name models, textures, and audio use content-based ETags: unchanged requests receive an empty HTTP 304 response, while changed files are downloaded again. HTML and build-status responses remain uncached so new builds are discovered. Restart an already-running server once after installing this update. This improves repeat visits; the initial visit still needs to download assets.

Run the focused HTTP regression check with `node --test playable/tests/asset-cache.test.cjs`. It covers unchanged responses, same-size file edits, weak/list validators, HEAD requests, cache policy, and path containment.

## Progressive cave texture detail

Rock, floor, and moss first use 256×256 KTX2 previews (718,863 bytes combined). These are the exact lower mip levels from the nine original 2048×2048 maps, with the same color space, normal maps, and packed ARM channels; the originals are unchanged. Once previews have settled and the player has first pressed Begin/Resume, a two-second delay gives initial gameplay time to settle before the game upgrades one map at a time, with a short gap between upgrades. Failed upgrades retain the preview. Restarting a dive reuses the loaded maps; disposing the world cancels queued upgrades. Total eventual downloads include both preview and original files, but only the small previews compete for initial loading.

Regenerate previews with `node playable/scripts/build-texture-previews.mjs`. Verify their exact mip data with `node --test playable/tests/texture-previews.test.cjs`. The standalone `playable/tests/texture-streaming-browser.cjs` exercises real GPU rendering, upgrade failures, restart reuse, and disposal against a Vite dev server (`GAME_URL`, default port 5184); set `PLAYWRIGHT_MODULE` to an installed Playwright module when needed.

## Copper pipe distance detail

The eight copper sections use a 1,457,764-byte distant model with 10,258 triangles per section (82,064 for the full run, about 79% fewer than the original 389,072). The authored geometry is simplified offline and its textures reduced to 256px; original bounds keep the wall placement and joints aligned. The unchanged 12,449,960-byte original downloads once when the player comes within 12 metres of any section. Each section switches to the original within 8 metres and back to the distant model beyond 9 metres. Loaded originals are reused on return visits and mission restarts. Failed detail downloads retain the distant model and retry at most three times with a ten-second cooldown.

The offline generation script is `playable/scripts/build-copper-lod.mjs`; its header lists the optional build-tool dependencies. Normal game builds need no extra dependencies. `playable/tests/copper-lod-browser.cjs` checks actual rendering, fitting, distance switching, download reuse, and failure fallback against a Vite dev server.

## Rendering while paused and at distance

Menus retain the last rendered cave frame. There is no continuous render/animation loop while paused; resize and asset completion request a single fresh frame, and hidden tabs do not draw. Resume starts one animation loop and clears the idle time delta. Prop streaming queues advance only during gameplay.

Guard root movement, AI, combat events, audio, and FX retain their normal tick rate. Skeletal poses update every frame within 20 m, at about 10 Hz beyond 20 m, and 5 Hz beyond 40 m, accumulating elapsed animation time between updates. Shots, hits, attacks, and unfinished death clips force immediate/full-rate poses. Lighting still accounts for off-screen light sources that reach visible surfaces, but skips zero-intensity lights and packing point-light uniforms for target volumes outside the camera frustum.

Verification: `playable/tests/render-idle-browser.cjs` checks settled menu/pause inactivity, resume, resize, asset-driven redraw, hidden-tab behavior, disposal, and visible lighting against the full light set after camera turns. `playable/tests/render-profile.cjs` profiles 180 synthetic pose/light updates. Both use `GAME_URL` (Vite dev server, default port 5190) and optional `PLAYWRIGHT_MODULE`. See `playable/RENDER-PERFORMANCE.md` for measured results and limits.
