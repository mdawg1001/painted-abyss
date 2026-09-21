# Painted Abyss — creative and gameplay handover

Prepared from the project conversation for the export. These are design decisions and proposals, not claims that the prototype already implements them.

## Creative target — agreed
A first-person prehistoric underwater survival horror game. Adrenaline, vulnerability and tactical escape replace the initial relaxing exploration theme. User reference games: GTA, Call of Duty, Rust and Hitman.

Chosen art direction: Painted Abyss. Stylised 3D, hand-painted surfaces, sculpted rock formations, deep indigo and green water, weathered bone and restrained orange accents. Animated does not mean cute, low-poly or retro. Predators should look threatening.

Flashlight-led visibility: aiming at one body part reveals that fragment while other parts recede into darkness. Retain faint background forms for orientation. The creature continues moving when unseen. Sweeping the beam along its body can lose track of its head. Light helps the player see, but can also expose them to predators.

## Predators — agreed behaviour direction
Patrol → Alert → Threaten → Pursue → Search.
- Patrol: natural swimming while undetected.
- Alert: light, movement or proximity prompts investigation.
- Threaten: warning distance prompts a brief aggressive display.
- Pursue: crossing the close attack threshold or striking triggers pursuit and potentially lethal attacks.
- Search: after contact breaks, investigate the last known position before withdrawing.

Distances vary by species. Solid rock blocks detection. Merely stepping outside the trigger distance does not end pursuit. Exact radii, damage, speeds and timers remain to be tuned. Creature responses to light should be learnable, not uniformly instant attacks.

## World and first environment
A selectable region map with multiple environments per region. The first environment is an underwater cave. One playable region initially is a scope recommendation. The Drowned Shelf is only a working region name.

Caves alternate between large blue flooded chambers, tight green passages and near-black inner chambers. Clearly visible torch beams and occasional light shafts are central visual features. Light shafts should connect to plausible openings. They guide the route toward escape; major illuminated routes are frequently patrolled, with some genuinely safe openings to retain uncertainty.

Include wide exposed spaces and extremely narrow squeezes. Players align, roll and pull through under pressure. Scraping rock can stir silt. Avoid random sticking or button-mashing. A predator can threaten the entrance to a fissure without fitting through it.

Proposed opening route:
1. Arrival chamber: learn swimming and torch; discover material.
2. Green constriction: learn squeezing before pursuit.
3. Main blue cavern: predator patrol around central cover; two viable routes.
4. Optional discovery alcove: exposed valuable pickup beside remains.
5. Pursuit and escape fissure.
6. Exit pool: reach light and secure recovered loot.

## Objectives and progression
Proposed loop: find route → investigate valuables → choose collection risk → escape → upgrade equipment.
Find crafting materials, treasure/relics, occasional complete equipment and route information. Recovered treasure value can serve as score. Gear examples discussed: spear, spear gun, flippers and torch upgrades. Resource examples: stone and driftwood in believable deposits. Exact recipes, economy, death penalties, oxygen system and progression remain undecided.
Rideable creatures for speed and protection remain a later possibility, especially for open regions. They are not part of the agreed first playable cave scope.

## Inventory — agreed
Exactly five carried item slots, visible at bottom centre. No hidden extra backpack. Number keys 1–5 or scroll select a slot. Highlight selection and show relevant ammunition/condition. Taking a sixth item requires selecting a replacement; the displaced item drops into the world.
Dark translucent slot backgrounds and readable silhouettes should suit the art direction.
Camera-mounted torch and worn flippers being separate from carried items is a recommendation, not a final user-confirmed rule. Small capped material stacks were proposed; stacking rules remain undecided.

## Controls — latest explicit user requirement, pending implementation
The camera should respond to trackpad movement without clicking or holding a button to look. Swipe right looks right; swipe left looks left. Do not invert this direction. The interaction needs testing on an actual trackpad. Clarify one-finger cursor movement versus two-finger scrolling during implementation if required, while preserving this explicit direction preference.

Existing prototype controls: WASD swim; Q/E down/up; Shift faster; Esc pause; drift mode. Existing code requests pointer lock and supports dragging; it has not been updated to the latest requirement.

## Next playable milestone
One cave environment, one frightening predator encounter, readable light and cover, a recoverable object and an escape route. Validate swimming, looking, detection, pursuit and escape before expanding crafting, mounts or a multi-region campaign.
