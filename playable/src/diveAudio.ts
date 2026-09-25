/** Dive audio probe wiring. Background ambience comes from the supplied music. */
export function buildDiveAudio(ctx: AudioContext, master: GainNode) {
  // Probe after the master gain so mute can be verified as silence.
  // Breathing/regulator loop removed — dive bed is music only.
  const probe = ctx.createAnalyser();
  probe.fftSize = 2048;
  master.connect(probe).connect(ctx.destination);
  return probe;
}

export function playDiveChime(ctx: AudioContext, master: GainNode) {
  for (const [delay, frequency] of [[0, 660], [.2, 880]]) {
    const tone = ctx.createOscillator();
    const envelope = ctx.createGain();
    const start = ctx.currentTime + delay;
    tone.frequency.value = frequency;
    envelope.gain.setValueAtTime(0, start);
    envelope.gain.linearRampToValueAtTime(.18, start + .015);
    envelope.gain.exponentialRampToValueAtTime(.001, start + .18);
    tone.connect(envelope).connect(master);
    tone.start(start);
    tone.stop(start + .2);
    tone.onended = () => { tone.disconnect(); envelope.disconnect(); };
  }
}

/** Underwater stab whoosh + steel nick (hit) or dry swing (miss). */
export function playStabSound(ctx: AudioContext, master: GainNode, hit: boolean) {
  const start = ctx.currentTime;
  // Short noise burst — reads as a knife cut through water.
  const duration = hit ? .07 : .05;
  const noiseBuf = ctx.createBuffer(1, Math.max(1, Math.round(ctx.sampleRate * duration)), ctx.sampleRate);
  const samples = noiseBuf.getChannelData(0);
  for (let i = 0; i < samples.length; i++) samples[i] = (Math.random() * 2 - 1) * (1 - i / samples.length);
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuf;
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.value = hit ? 1400 : 900;
  band.Q.value = hit ? .8 : 1.4;
  const noiseEnv = ctx.createGain();
  noiseEnv.gain.setValueAtTime(hit ? .55 : .28, start);
  noiseEnv.gain.exponentialRampToValueAtTime(.001, start + duration);
  noise.connect(band).connect(noiseEnv).connect(master);
  noise.start(start);
  noise.stop(start + duration);
  noise.onended = () => { noise.disconnect(); band.disconnect(); noiseEnv.disconnect(); };

  if (hit) {
    const ring = ctx.createOscillator();
    const ringEnv = ctx.createGain();
    ring.type = 'triangle';
    ring.frequency.setValueAtTime(420, start);
    ring.frequency.exponentialRampToValueAtTime(180, start + .12);
    ringEnv.gain.setValueAtTime(0, start);
    ringEnv.gain.linearRampToValueAtTime(.22, start + .008);
    ringEnv.gain.exponentialRampToValueAtTime(.001, start + .16);
    ring.connect(ringEnv).connect(master);
    ring.start(start);
    ring.stop(start + .18);
    ring.onended = () => { ring.disconnect(); ringEnv.disconnect(); };
  } else {
    const air = ctx.createOscillator();
    const airEnv = ctx.createGain();
    air.type = 'sine';
    air.frequency.value = 220;
    airEnv.gain.setValueAtTime(0, start);
    airEnv.gain.linearRampToValueAtTime(.08, start + .01);
    airEnv.gain.exponentialRampToValueAtTime(.001, start + .08);
    air.connect(airEnv).connect(master);
    air.start(start);
    air.stop(start + .1);
    air.onended = () => { air.disconnect(); airEnv.disconnect(); };
  }
}

/** Low death thrash — short down-sweep + rumble. */
export function playGuardianDeath(ctx: AudioContext, master: GainNode) {
  const start = ctx.currentTime;
  const tone = ctx.createOscillator();
  const env = ctx.createGain();
  tone.type = 'sawtooth';
  tone.frequency.setValueAtTime(110, start);
  tone.frequency.exponentialRampToValueAtTime(38, start + .45);
  env.gain.setValueAtTime(0, start);
  env.gain.linearRampToValueAtTime(.2, start + .02);
  env.gain.exponentialRampToValueAtTime(.001, start + .5);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 320;
  tone.connect(filter).connect(env).connect(master);
  tone.start(start);
  tone.stop(start + .55);
  tone.onended = () => { tone.disconnect(); filter.disconnect(); env.disconnect(); };
}

/** Short mechanical click/snap when the inventory selection moves to a different slot. */
export function playInventoryClick(ctx: AudioContext, master: GainNode) {
  const start = ctx.currentTime;
  // Broadband transient — reads as a click, not a pitched swoop.
  const duration = .028;
  const noiseBuf = ctx.createBuffer(1, Math.max(1, Math.round(ctx.sampleRate * duration)), ctx.sampleRate);
  const samples = noiseBuf.getChannelData(0);
  for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuf;
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.value = 2800;
  band.Q.value = 1.1;
  const noiseEnv = ctx.createGain();
  noiseEnv.gain.setValueAtTime(.72, start);
  noiseEnv.gain.exponentialRampToValueAtTime(.001, start + duration);
  noise.connect(band).connect(noiseEnv).connect(master);
  noise.start(start);
  noise.stop(start + duration);
  noise.onended = () => { noise.disconnect(); band.disconnect(); noiseEnv.disconnect(); };

  // Fixed-pitch body tick (no frequency ramp — avoids laser/pew character).
  const snap = ctx.createOscillator();
  const snapEnv = ctx.createGain();
  snap.type = 'square';
  snap.frequency.value = 1650;
  snapEnv.gain.setValueAtTime(0, start);
  snapEnv.gain.linearRampToValueAtTime(.28, start + .001);
  snapEnv.gain.exponentialRampToValueAtTime(.001, start + .018);
  snap.connect(snapEnv).connect(master);
  snap.start(start);
  snap.stop(start + .022);
  snap.onended = () => { snap.disconnect(); snapEnv.disconnect(); };
}

/**
 * One footfall: booted heel strike, then the forefoot rolling down (walking),
 * or a single forefoot strike (running). Wading swaps grit for a splash.
 * Every step is slightly different so the cadence never sounds machine-made.
 */
export function playFootstep(
  ctx: AudioContext,
  master: GainNode,
  opts: { speed: number; run: number; waterDepth: number; foot: 'left' | 'right' },
) {
  const start = ctx.currentTime + .005;
  const jitter = (k: number) => 1 + (Math.random() * 2 - 1) * k;
  const intensity = Math.min(1.25, .45 + .22 * opts.speed) * jitter(.14) * (opts.foot === 'left' ? 1 : .94);
  const wet = Math.min(1, Math.max(0, opts.waterDepth / .45));
  const dry = 1 - Math.min(1, opts.waterDepth / .12);
  const nodes: AudioNode[] = [];
  const done = () => nodes.forEach(n => n.disconnect());

  const noiseBurst = (at: number, dur: number, freq: number, q: number, gain: number) => {
    const buf = ctx.createBuffer(1, Math.max(1, Math.round(ctx.sampleRate * dur)), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq * jitter(.1); bp.Q.value = q;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, at);
    env.gain.linearRampToValueAtTime(gain, at + .003);
    env.gain.exponentialRampToValueAtTime(.0008, at + dur);
    src.connect(bp).connect(env).connect(master);
    nodes.push(src, bp, env);
    src.start(at); src.stop(at + dur + .01);
    return src;
  };
  const thump = (at: number, freq: number, dur: number, gain: number) => {
    const osc = ctx.createOscillator(); osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * jitter(.08), at);
    osc.frequency.exponentialRampToValueAtTime(freq * .55, at + dur);
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, at);
    env.gain.linearRampToValueAtTime(gain, at + .004);
    env.gain.exponentialRampToValueAtTime(.0008, at + dur);
    osc.connect(env).connect(master);
    nodes.push(osc, env);
    osc.start(at); osc.stop(at + dur + .01);
    return osc;
  };

  let last: AudioScheduledSourceNode;
  if (opts.run < .5) {
    // Walking: heel contact, then the forefoot slaps down ~10 % of the cycle later.
    const flat = .06 / Math.max(.6, opts.speed / 1.4);
    thump(start, 120, .07, .22 * intensity * (dry * .9 + .1));
    noiseBurst(start, .045, 2600, 1.4, .12 * intensity * dry);
    last = noiseBurst(start + flat, .05, 1500, 1.1, .08 * intensity * dry);
  } else {
    // Running: single, heavier forefoot/midfoot strike plus a scuff at push-off.
    thump(start, 105, .09, .32 * intensity * (dry * .9 + .1));
    noiseBurst(start, .06, 2200, 1.2, .16 * intensity * dry);
    last = noiseBurst(start + .09, .04, 3400, 1.6, .05 * intensity * dry);
  }
  if (wet > 0.01) {
    // Water: broad splash that gets bigger and longer as the water deepens.
    last = noiseBurst(start + .01, .16 + .22 * wet, 1100, .7, (.1 + .22 * wet) * intensity);
    noiseBurst(start + .05, .12 + .1 * wet, 3200, .9, .06 * wet * intensity);
  }
  last.onended = done;
}

/**
 * TT-33 report in a concrete-and-rock bunker: a hard supersonic crack, a short
 * chest thump, then a long dark tail as the sound rolls round the chambers.
 * `distance` (m) softens and darkens it; the tail stays so far shots still carry.
 */
export function playGunshot(ctx: AudioContext, master: GainNode, distance: number) {
  const start = ctx.currentTime + .004;
  const near = 1 / (1 + Math.max(0, distance) / 7);
  const nodes: AudioNode[] = [];
  const noise = (dur: number) => {
    const buf = ctx.createBuffer(1, Math.max(1, Math.round(ctx.sampleRate * dur)), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf; nodes.push(src); return src;
  };
  // Crack: broadband, very fast, brighter up close.
  const crack = noise(.09);
  const crackHp = ctx.createBiquadFilter(); crackHp.type = 'highpass'; crackHp.frequency.value = 900 + 2200 * near;
  const crackEnv = ctx.createGain();
  crackEnv.gain.setValueAtTime(0, start);
  crackEnv.gain.linearRampToValueAtTime(.9 * near + .08, start + .002);
  crackEnv.gain.exponentialRampToValueAtTime(.001, start + .09);
  crack.connect(crackHp).connect(crackEnv).connect(master); nodes.push(crackHp, crackEnv);
  crack.start(start); crack.stop(start + .1);
  // Thump: the muzzle blast body.
  const thump = ctx.createOscillator(); thump.type = 'sine';
  thump.frequency.setValueAtTime(95, start); thump.frequency.exponentialRampToValueAtTime(42, start + .16);
  const thumpEnv = ctx.createGain();
  thumpEnv.gain.setValueAtTime(0, start);
  thumpEnv.gain.linearRampToValueAtTime(.6 * near + .05, start + .004);
  thumpEnv.gain.exponentialRampToValueAtTime(.001, start + .18);
  thump.connect(thumpEnv).connect(master); nodes.push(thump, thumpEnv);
  thump.start(start); thump.stop(start + .2);
  // Tail: low-passed noise decaying over ~1.4 s (the bunker ringing).
  const tail = noise(1.5);
  const tailLp = ctx.createBiquadFilter(); tailLp.type = 'lowpass'; tailLp.frequency.value = 700 + 500 * near; tailLp.Q.value = .4;
  const tailEnv = ctx.createGain();
  tailEnv.gain.setValueAtTime(0, start + .02);
  tailEnv.gain.linearRampToValueAtTime(.18 + .12 * near, start + .05);
  tailEnv.gain.exponentialRampToValueAtTime(.001, start + 1.45);
  tail.connect(tailLp).connect(tailEnv).connect(master); nodes.push(tailLp, tailEnv);
  tail.start(start + .02); tail.stop(start + 1.5);
  tail.onended = () => nodes.forEach(n => n.disconnect());
}

/** A round passing close and striking rock: a whine that drops in pitch, then a chip. */
export function playRicochet(ctx: AudioContext, master: GainNode) {
  const start = ctx.currentTime + .03;
  const whine = ctx.createOscillator(); whine.type = 'sine';
  const f0 = 2600 + Math.random() * 900;
  whine.frequency.setValueAtTime(f0, start); whine.frequency.exponentialRampToValueAtTime(f0 * .45, start + .28);
  const wEnv = ctx.createGain();
  wEnv.gain.setValueAtTime(0, start);
  wEnv.gain.linearRampToValueAtTime(.09, start + .01);
  wEnv.gain.exponentialRampToValueAtTime(.001, start + .3);
  whine.connect(wEnv).connect(master);
  whine.start(start); whine.stop(start + .32);
  const buf = ctx.createBuffer(1, Math.round(ctx.sampleRate * .05), ctx.sampleRate);
  const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const chip = ctx.createBufferSource(); chip.buffer = buf;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3800; bp.Q.value = 1.3;
  const cEnv = ctx.createGain();
  cEnv.gain.setValueAtTime(0, start - .02);
  cEnv.gain.linearRampToValueAtTime(.22, start - .018);
  cEnv.gain.exponentialRampToValueAtTime(.001, start + .03);
  chip.connect(bp).connect(cEnv).connect(master);
  chip.start(start - .02); chip.stop(start + .04);
  whine.onended = () => { whine.disconnect(); wEnv.disconnect(); chip.disconnect(); bp.disconnect(); cEnv.disconnect(); };
}

/**
 * One drive stroke on the leak valve: the stem grinding through its packing
 * (band-passed noise swept with the wheel's speed) over a low metal groan.
 * `strain` 0..1 raises the groan and grit for the stuck first turn and the seat.
 */
export function playValveStroke(ctx: AudioContext, master: GainNode, duration: number, strain: number) {
  const start = ctx.currentTime;
  const len = Math.max(.1, duration);
  const buf = ctx.createBuffer(1, Math.max(1, Math.round(ctx.sampleRate * len)), ctx.sampleRate);
  const data = buf.getChannelData(0);
  // Stick-slip grit: noise gated by a jittery ~40 Hz chatter.
  let phase = 0;
  for (let i = 0; i < data.length; i++) {
    phase += (38 + Math.random() * 18) / ctx.sampleRate;
    const chatter = .45 + .55 * Math.max(0, Math.sin(phase * Math.PI * 2));
    data[i] = (Math.random() * 2 - 1) * chatter;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buf;
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.Q.value = 2.2;
  // Speed of the wheel follows the smootherstep drive: pitch rises then falls.
  band.frequency.setValueAtTime(260, start);
  band.frequency.linearRampToValueAtTime(520 + 260 * strain, start + len * .5);
  band.frequency.linearRampToValueAtTime(300, start + len);
  const grit = ctx.createGain();
  grit.gain.setValueAtTime(0, start);
  grit.gain.linearRampToValueAtTime(.08 + .06 * strain, start + len * .2);
  grit.gain.linearRampToValueAtTime(.05 + .05 * strain, start + len * .8);
  grit.gain.linearRampToValueAtTime(0, start + len);
  noise.connect(band).connect(grit).connect(master);
  const groan = ctx.createOscillator();
  groan.type = 'sawtooth';
  groan.frequency.setValueAtTime(58 + 30 * strain, start);
  groan.frequency.linearRampToValueAtTime(72 + 40 * strain, start + len * .5);
  groan.frequency.linearRampToValueAtTime(55 + 25 * strain, start + len);
  const low = ctx.createBiquadFilter();
  low.type = 'lowpass';
  low.frequency.value = 420;
  const groanGain = ctx.createGain();
  groanGain.gain.setValueAtTime(0, start);
  groanGain.gain.linearRampToValueAtTime(.035 + .05 * strain, start + len * .3);
  groanGain.gain.linearRampToValueAtTime(0, start + len);
  groan.connect(low).connect(groanGain).connect(master);
  noise.start(start); noise.stop(start + len);
  groan.start(start); groan.stop(start + len);
  groan.onended = () => { noise.disconnect(); band.disconnect(); grit.disconnect(); groan.disconnect(); low.disconnect(); groanGain.disconnect(); };
}

/** The gate hitting its seat: a dull, heavy metal clunk that rings briefly through the riser. */
export function playValveSeat(ctx: AudioContext, master: GainNode) {
  const start = ctx.currentTime;
  for (const [f, g, d] of [[92, .22, .5], [233, .08, .35], [611, .03, .22]] as const) {
    const o = ctx.createOscillator();
    const e = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(f * 1.08, start);
    o.frequency.exponentialRampToValueAtTime(f, start + .06);
    e.gain.setValueAtTime(0, start);
    e.gain.linearRampToValueAtTime(g, start + .006);
    e.gain.exponentialRampToValueAtTime(.0008, start + d);
    o.connect(e).connect(master);
    o.start(start); o.stop(start + d + .02);
    o.onended = () => { o.disconnect(); e.disconnect(); };
  }
}

/**
 * Hit confirmation, AAA style: a short bright tick on a hit, a lower double tick on a
 * head shot or kill. Plays on top of the gunshot, so it is quiet and very short.
 */
export function playHitMarker(ctx: AudioContext, master: GainNode, kind: 'hit' | 'head' | 'kill') {
  const start = ctx.currentTime + .03;
  const ticks = kind === 'hit' ? [{ f: 2300, t: 0 }] : [{ f: 1900, t: 0 }, { f: 1400, t: .055 }];
  for (const { f, t } of ticks) {
    const osc = ctx.createOscillator(); osc.type = 'triangle';
    osc.frequency.setValueAtTime(f, start + t);
    osc.frequency.exponentialRampToValueAtTime(f * .7, start + t + .05);
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, start + t);
    env.gain.linearRampToValueAtTime(.16, start + t + .002);
    env.gain.exponentialRampToValueAtTime(.001, start + t + .06);
    osc.connect(env).connect(master);
    osc.start(start + t); osc.stop(start + t + .07);
    osc.onended = () => { osc.disconnect(); env.disconnect(); };
  }
}

/** Dry trigger / magazine click: a tiny metallic tick. `seat` is the heavier mag-home snap. */
export function playPistolClick(ctx: AudioContext, master: GainNode, seat = false) {
  const start = ctx.currentTime + .002;
  const len = seat ? .05 : .025;
  const buf = ctx.createBuffer(1, Math.max(1, Math.round(ctx.sampleRate * len)), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
  const src = ctx.createBufferSource(); src.buffer = buf;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = seat ? 1800 : 3600; bp.Q.value = 2.5;
  const g = ctx.createGain(); g.gain.value = seat ? .5 : .35;
  src.connect(bp).connect(g).connect(master);
  src.start(start);
  src.onended = () => { src.disconnect(); bp.disconnect(); g.disconnect(); };
}

/**
 * Squad call-out: a guard shouting to the others. A short burst of band-limited noise
 * (the radio / echo in concrete) under two rough voiced barks, pitched down with distance.
 */
export function playSquadCall(ctx: AudioContext, master: GainNode, distance: number) {
  const start = ctx.currentTime + .02;
  const near = 1 / (1 + Math.max(0, distance) / 9);
  const out = ctx.createGain(); out.gain.value = .22 + .38 * near; out.connect(master);
  const nodes: AudioNode[] = [out];
  // Squelch.
  const len = .12;
  const buf = ctx.createBuffer(1, Math.round(ctx.sampleRate * len), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
  const sq = ctx.createBufferSource(); sq.buffer = buf;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1500; bp.Q.value = 1.4;
  const sqg = ctx.createGain(); sqg.gain.value = .35;
  sq.connect(bp).connect(sqg).connect(out); sq.start(start); nodes.push(sq, bp, sqg);
  // Two barks: a sawtooth voice through a vowel-ish formant, falling in pitch.
  for (const [t, f0] of [[.1, 190], [.34, 165]] as const) {
    const v = ctx.createOscillator(); v.type = 'sawtooth';
    v.frequency.setValueAtTime(f0, start + t); v.frequency.exponentialRampToValueAtTime(f0 * .72, start + t + .2);
    const formant = ctx.createBiquadFilter(); formant.type = 'bandpass'; formant.frequency.value = 750; formant.Q.value = 3;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0, start + t);
    env.gain.linearRampToValueAtTime(.9, start + t + .025);
    env.gain.exponentialRampToValueAtTime(.001, start + t + .22);
    v.connect(formant).connect(env).connect(out); v.start(start + t); v.stop(start + t + .24);
    nodes.push(v, formant, env);
    if (f0 === 165) v.onended = () => nodes.forEach(n => n.disconnect());
  }
}

// ── Survival firefight cues ─────────────────────────────────────────────────────
/** One white-noise buffer per context, reused by the short cues below. */
const noiseCache = new WeakMap<BaseAudioContext, AudioBuffer>();
function noiseBuffer(ctx: AudioContext) {
  let b = noiseCache.get(ctx);
  if (!b) {
    b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    noiseCache.set(ctx, b);
  }
  return b;
}
function noiseSrc(ctx: AudioContext) { const s = ctx.createBufferSource(); s.buffer = noiseBuffer(ctx); return s; }
/**
 * A short-lived stereo bus: sounds routed through it come from `pan` (−1 left … +1 right)
 * at `gain`. It disconnects itself after `life` seconds.
 */
export function pannedBus(ctx: AudioContext, master: AudioNode, pan: number, gain = 1, life = 3): GainNode {
  const g = ctx.createGain(); g.gain.value = gain;
  const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan));
  g.connect(p).connect(master);
  setTimeout(() => { try { g.disconnect(); p.disconnect(); } catch { /* already gone */ } }, life * 1000);
  return g;
}
/** Steel bulkhead door slammed open: a clank with ringing partials. */
export function playDoorBang(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime + .01;
  const n = noiseSrc(ctx);
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 520; bp.Q.value = 1.2;
  const ne = ctx.createGain(); ne.gain.setValueAtTime(.9, t); ne.gain.exponentialRampToValueAtTime(.001, t + .18);
  n.connect(bp).connect(ne).connect(out); n.start(t, Math.random()); n.stop(t + .2);
  for (const [f, a, d] of [[176, .35, .9], [311, .25, .7], [527, .18, .5], [843, .1, .35]] as const) {
    const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f * (.97 + Math.random() * .06);
    const e = ctx.createGain(); e.gain.setValueAtTime(a, t); e.gain.exponentialRampToValueAtTime(.001, t + d);
    o.connect(e).connect(out); o.start(t); o.stop(t + d + .05);
  }
}
/** Smoke grenade: a pop, then a hiss that thins out. */
export function playSmokePop(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime + .005;
  const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(160, t); o.frequency.exponentialRampToValueAtTime(60, t + .12);
  const oe = ctx.createGain(); oe.gain.setValueAtTime(.5, t); oe.gain.exponentialRampToValueAtTime(.001, t + .15);
  o.connect(oe).connect(out); o.start(t); o.stop(t + .2);
  const n = noiseSrc(ctx);
  const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2400;
  const ne = ctx.createGain(); ne.gain.setValueAtTime(0, t); ne.gain.linearRampToValueAtTime(.22, t + .1); ne.gain.exponentialRampToValueAtTime(.001, t + 1.9);
  n.connect(hp).connect(ne).connect(out); n.start(t); n.stop(t + 2);
}
/** A guard's effort grunt as he winds up a blow. */
export function playGrunt(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime + .005;
  const v = ctx.createOscillator(); v.type = 'sawtooth';
  v.frequency.setValueAtTime(150, t); v.frequency.exponentialRampToValueAtTime(105, t + .22);
  const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 620; f.Q.value = 2.5;
  const e = ctx.createGain(); e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(.6, t + .03); e.gain.exponentialRampToValueAtTime(.001, t + .25);
  v.connect(f).connect(e).connect(out); v.start(t); v.stop(t + .3);
}
/** The blow itself: a body thud when it lands, a swish of air when it misses. */
export function playMeleeHit(ctx: AudioContext, out: AudioNode, landed: boolean) {
  const t = ctx.currentTime + .005;
  const n = noiseSrc(ctx);
  const f = ctx.createBiquadFilter();
  const e = ctx.createGain();
  if (landed) {
    f.type = 'lowpass'; f.frequency.value = 900;
    e.gain.setValueAtTime(.9, t); e.gain.exponentialRampToValueAtTime(.001, t + .16);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(45, t + .15);
    const oe = ctx.createGain(); oe.gain.setValueAtTime(.8, t); oe.gain.exponentialRampToValueAtTime(.001, t + .18);
    o.connect(oe).connect(out); o.start(t); o.stop(t + .2);
  } else {
    f.type = 'bandpass'; f.Q.value = 1.4; f.frequency.setValueAtTime(700, t); f.frequency.exponentialRampToValueAtTime(2600, t + .18);
    e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(.35, t + .06); e.gain.exponentialRampToValueAtTime(.001, t + .22);
  }
  n.connect(f).connect(e).connect(out); n.start(t, Math.random()); n.stop(t + .25);
}
/** Your round striking a guard: a wet thwack; on a helmet, a sharp ping. */
export function playFleshHit(ctx: AudioContext, out: AudioNode, helmet: boolean) {
  const t = ctx.currentTime + .02;
  const n = noiseSrc(ctx);
  const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1400;
  const e = ctx.createGain(); e.gain.setValueAtTime(.55, t); e.gain.exponentialRampToValueAtTime(.001, t + .09);
  n.connect(f).connect(e).connect(out); n.start(t, Math.random()); n.stop(t + .1);
  if (helmet) {
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 2900;
    const oe = ctx.createGain(); oe.gain.setValueAtTime(.2, t); oe.gain.exponentialRampToValueAtTime(.001, t + .25);
    o.connect(oe).connect(out); o.start(t); o.stop(t + .3);
  }
}
/** Taking a supply: ammo clacks, dressings rustle, smoke tins clink. */
export function playSupply(ctx: AudioContext, out: AudioNode, kind: 'ammo' | 'medkit' | 'smoke') {
  const t = ctx.currentTime + .005;
  const hits = kind === 'ammo' ? [0, .07, .13] : kind === 'smoke' ? [0, .1] : [0];
  for (const dt of hits) {
    const o = ctx.createOscillator(); o.type = kind === 'medkit' ? 'sine' : 'square';
    o.frequency.value = kind === 'medkit' ? 520 : kind === 'smoke' ? 1500 : 900 + dt * 900;
    const e = ctx.createGain(); e.gain.setValueAtTime(kind === 'medkit' ? .18 : .07, t + dt); e.gain.exponentialRampToValueAtTime(.001, t + dt + (kind === 'medkit' ? .35 : .06));
    o.connect(e).connect(out); o.start(t + dt); o.stop(t + dt + .4);
  }
}

/** Hatch stash lid / hinge: wooden scrape + soft latch. */
export function playStashOpen(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime;
  const nBuf = ctx.createBuffer(1, Math.max(1, Math.round(ctx.sampleRate * .12)), ctx.sampleRate);
  const samples = nBuf.getChannelData(0);
  for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = nBuf;
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.value = 420;
  band.Q.value = .8;
  const nEnv = ctx.createGain();
  nEnv.gain.setValueAtTime(.35, t);
  nEnv.gain.exponentialRampToValueAtTime(.001, t + .14);
  noise.connect(band).connect(nEnv).connect(out);
  noise.start(t);
  noise.stop(t + .15);
  const o = ctx.createOscillator();
  o.type = 'triangle';
  o.frequency.setValueAtTime(180, t);
  o.frequency.exponentialRampToValueAtTime(90, t + .18);
  const e = ctx.createGain();
  e.gain.setValueAtTime(.22, t);
  e.gain.exponentialRampToValueAtTime(.001, t + .2);
  o.connect(e).connect(out);
  o.start(t);
  o.stop(t + .22);
}

/** Hatch stash lid settling shut. */
export function playStashClose(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  o.type = 'sine';
  o.frequency.setValueAtTime(140, t);
  o.frequency.exponentialRampToValueAtTime(70, t + .1);
  const e = ctx.createGain();
  e.gain.setValueAtTime(.28, t);
  e.gain.exponentialRampToValueAtTime(.001, t + .12);
  o.connect(e).connect(out);
  o.start(t);
  o.stop(t + .14);
  const tick = ctx.createOscillator();
  tick.type = 'square';
  tick.frequency.value = 1100;
  const te = ctx.createGain();
  te.gain.setValueAtTime(.12, t + .04);
  te.gain.exponentialRampToValueAtTime(.001, t + .07);
  tick.connect(te).connect(out);
  tick.start(t + .04);
  tick.stop(t + .08);
}

/** Item settling into a stash slot. */
export function playStashDeposit(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime;
  for (const [dt, freq, gain] of [[0, 520, .16], [.045, 380, .12]] as const) {
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = freq;
    const e = ctx.createGain();
    e.gain.setValueAtTime(gain, t + dt);
    e.gain.exponentialRampToValueAtTime(.001, t + dt + .08);
    o.connect(e).connect(out);
    o.start(t + dt);
    o.stop(t + dt + .1);
  }
}

/** Item pulled from a stash slot. */
export function playStashWithdraw(ctx: AudioContext, out: AudioNode) {
  const t = ctx.currentTime;
  for (const [dt, freq, gain] of [[0, 640, .14], [.05, 880, .1]] as const) {
    const o = ctx.createOscillator();
    o.type = 'square';
    o.frequency.value = freq;
    const e = ctx.createGain();
    e.gain.setValueAtTime(gain, t + dt);
    e.gain.exponentialRampToValueAtTime(.001, t + dt + .06);
    o.connect(e).connect(out);
    o.start(t + dt);
    o.stop(t + dt + .08);
  }
}
