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
