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
