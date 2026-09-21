/** Dive audio probe wiring. Background ambience comes from the supplied music. */
export function buildDiveAudio(ctx: AudioContext, master: GainNode) {
  // Probe after the master gain so mute can be verified as silence.
  // Breathing/regulator loop removed — dive bed is music only.
  // Movement-linked cave water lives in SwimWaterAudio (not always-on).
  const probe = ctx.createAnalyser();
  probe.fftSize = 2048;
  master.connect(probe).connect(ctx.destination);
  return probe;
}

/**
 * Deep-cave water that moves with the diver: brown noise through a tight lowpass,
 * plus a soft pressure rumble. Gain and brightness scale with swim speed so still
 * water is nearly silent and sprinting opens a muffled whoosh — never surface splash.
 */
export class SwimWaterAudio {
  private noise: AudioBufferSourceNode;
  private filter: BiquadFilterNode;
  private highpass: BiquadFilterNode;
  private gain: GainNode;
  private rumble: OscillatorNode;
  private rumbleGain: GainNode;
  private disposed = false;

  constructor(private ctx: AudioContext, master: GainNode) {
    // ~4s of brown noise; looping reads as continuous water pressure, not a loop point.
    const seconds = 4;
    const buffer = ctx.createBuffer(1, Math.round(ctx.sampleRate * seconds), ctx.sampleRate);
    const samples = buffer.getChannelData(0);
    let brown = 0;
    for (let i = 0; i < samples.length; i++) {
      const white = Math.random() * 2 - 1;
      brown = (brown + .02 * white) / 1.02;
      samples[i] = brown * 5.2;
    }
    this.noise = ctx.createBufferSource();
    this.noise.buffer = buffer;
    this.noise.loop = true;

    // Cave muffling: keep the bed dark, but leave enough mid for laptop speakers.
    this.filter = ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.value = 380;
    this.filter.Q.value = .55;

    this.highpass = ctx.createBiquadFilter();
    this.highpass.type = 'highpass';
    this.highpass.frequency.value = 35;

    this.gain = ctx.createGain();
    this.gain.gain.value = 0;

    this.noise.connect(this.filter).connect(this.highpass).connect(this.gain).connect(master);

    // Sub pressure — felt more than heard on laptop speakers, fills headphones.
    this.rumble = ctx.createOscillator();
    this.rumble.type = 'sine';
    this.rumble.frequency.value = 36;
    this.rumbleGain = ctx.createGain();
    this.rumbleGain.gain.value = 0;
    this.rumble.connect(this.rumbleGain).connect(master);

    this.noise.start();
    this.rumble.start();
  }

  /** `speed` is world-units/sec (cruise ≈2.8, sprint ≈4.8). */
  update(speed: number, active: boolean) {
    if (this.disposed) return;
    const t = this.ctx.currentTime;
    // Dead-zone so tiny post-stop drift does not hiss.
    const intensity = active ? Math.min(1, Math.max(0, (speed - .12) / 4.2)) : 0;
    // Mild curve: cruise stays clearly audible; sprint peaks harder.
    const whoosh = intensity * Math.sqrt(intensity);
    // Loud enough to cut through the .65 music bed on laptop speakers.
    this.gain.gain.setTargetAtTime(whoosh * 1.55, t, .07);
    // Still cave-muffled, but open enough to hear on small speakers.
    this.filter.frequency.setTargetAtTime(380 + intensity * 720, t, .12);
    this.rumbleGain.gain.setTargetAtTime(intensity * .18, t, .1);
    this.rumble.frequency.setTargetAtTime(28 + intensity * 26, t, .16);
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    try { this.noise.stop(); } catch { /* already stopped */ }
    try { this.rumble.stop(); } catch { /* already stopped */ }
    this.noise.disconnect();
    this.filter.disconnect();
    this.highpass.disconnect();
    this.gain.disconnect();
    this.rumble.disconnect();
    this.rumbleGain.disconnect();
  }
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
