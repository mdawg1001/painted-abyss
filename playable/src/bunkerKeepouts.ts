/**
 * Wall props, loot and cover the bunker dressing leaves room for. Pure (no DOM), so the
 * runtime and the offline light baker lay out exactly the same bunker.
 */
import type { Keepout } from './bunkerLayout';
import { wallSconceMounts } from './sconceAsset';
import { wallPosterMount } from './posterAsset';
import { radiatorMounts } from './radiatorAsset';
import { catwalkKeepouts } from './catwalkLayout';
import { copperWallSpan } from './copperPipeAsset';
import { PIPE_MOUNT } from './pipeAsset';
import { LIFEBUOY_POS } from './lifebuoyAsset';
import { SURVIVAL_COVER } from './survivalConfig';
import { breathHatchSpawn, breathTankMounts, createDiveChests, STASH_POSITION } from './simulation';

export function bunkerKeepouts(): Keepout[] {
 const k: Keepout[] = [];
 for (const m of wallSconceMounts()) k.push({ x: m.x, z: m.z, r: .9 });
 const poster = wallPosterMount(); k.push({ x: poster.x, z: poster.z, r: 1.9 });
 for (const m of radiatorMounts()) k.push({ x: m.x, z: m.z, r: 1.3 });
 for (const c of catwalkKeepouts()) k.push(c);
 const span = copperWallSpan();
 for (let x = Math.min(span.x0, span.x1); x <= Math.max(span.x0, span.x1) + .01; x += 1) k.push({ x, z: span.z, r: 1 });
 k.push({ x: PIPE_MOUNT.x, z: PIPE_MOUNT.z, r: 2.2 });
 for (const m of breathTankMounts()) k.push({ x: m.x, z: m.z, r: 1.2 });
 for (const c of createDiveChests()) k.push({ x: c.position.x, z: c.position.z, r: 1.3 });
 for (const c of SURVIVAL_COVER) k.push({ x: c.x, z: c.z, r: Math.hypot(c.hx, c.hz) + .4 });
 k.push({ x: STASH_POSITION.x, z: STASH_POSITION.z, r: 1.6 }, { x: LIFEBUOY_POS.x, z: LIFEBUOY_POS.z, r: 1.2 });
 const spawn = breathHatchSpawn(); k.push({ x: spawn.x, z: spawn.z + 2.2, r: 2.6 });
 return k;
}
