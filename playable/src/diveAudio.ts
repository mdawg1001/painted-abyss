/** Audible midrange water and regulator breaths, including on laptop speakers. */
export function buildDiveAudio(ctx: AudioContext, master: GainNode) {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
  const water = ctx.createBufferSource();
  water.buffer = buffer;
  water.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1800;
  const lowCut = ctx.createBiquadFilter();
  lowCut.type = 'highpass';
  lowCut.frequency.value = 180;
  const breath = ctx.createGain();
  breath.gain.value = .24;
  const cycle = ctx.createOscillator();
  cycle.frequency.value = .22;
  const depth = ctx.createGain();
  depth.gain.value = .17;
  cycle.connect(depth).connect(breath.gain);
  water.connect(filter).connect(lowCut).connect(breath).connect(master);
  // This probe is after the master gain, so mute can be verified as silence.
  const probe = ctx.createAnalyser();
  probe.fftSize = 2048;
  master.connect(probe).connect(ctx.destination);
  water.start();
  cycle.start();
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
