/** Regulator breathing only. All background ambience comes from the supplied music. */
export function buildDiveAudio(ctx: AudioContext, master: GainNode) {
  const cycleSeconds = 1 / .22;
  const buffer = ctx.createBuffer(1, Math.round(ctx.sampleRate * cycleSeconds), ctx.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < samples.length; i++) {
    const seconds = i / ctx.sampleRate;
    // Separate inhale and exhale with quiet gaps; no continuous water-noise bed.
    const inhale = seconds < 1.4 ? Math.sin(Math.PI * seconds / 1.4) ** 2 * .41 : 0;
    const exhale = seconds >= 1.9 && seconds < 3.8
      ? Math.sin(Math.PI * (seconds - 1.9) / 1.9) ** 2 * .30 : 0;
    samples[i] = (Math.random() * 2 - 1) * (inhale + exhale);
  }
  const breathing = ctx.createBufferSource();
  breathing.buffer = buffer;
  breathing.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1800;
  const lowCut = ctx.createBiquadFilter();
  lowCut.type = 'highpass';
  lowCut.frequency.value = 180;
  breathing.connect(filter).connect(lowCut).connect(master);
  // This probe is after the master gain, so mute can be verified as silence.
  const probe = ctx.createAnalyser();
  probe.fftSize = 2048;
  master.connect(probe).connect(ctx.destination);
  breathing.start();
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

/** Clear UI tick when the inventory selection moves to a different slot. */
export function playInventoryClick(ctx: AudioContext, master: GainNode) {
  const start = ctx.currentTime;
  // Bright tip so the select reads over dive music and regulator breathing.
  const tip = ctx.createOscillator();
  const tipEnv = ctx.createGain();
  tip.type = 'sine';
  tip.frequency.value = 2200;
  tipEnv.gain.setValueAtTime(0, start);
  tipEnv.gain.linearRampToValueAtTime(.3, start + .002);
  tipEnv.gain.exponentialRampToValueAtTime(.001, start + .045);
  tip.connect(tipEnv).connect(master);
  tip.start(start);
  tip.stop(start + .05);
  tip.onended = () => { tip.disconnect(); tipEnv.disconnect(); };

  const body = ctx.createOscillator();
  const bodyEnv = ctx.createGain();
  body.type = 'triangle';
  body.frequency.setValueAtTime(1400, start);
  body.frequency.exponentialRampToValueAtTime(720, start + .07);
  bodyEnv.gain.setValueAtTime(0, start);
  bodyEnv.gain.linearRampToValueAtTime(.38, start + .004);
  bodyEnv.gain.exponentialRampToValueAtTime(.001, start + .1);
  body.connect(bodyEnv).connect(master);
  body.start(start);
  body.stop(start + .11);
  body.onended = () => { body.disconnect(); bodyEnv.disconnect(); };
}
