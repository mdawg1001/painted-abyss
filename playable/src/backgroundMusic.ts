import musicUrl from './assets/underwater-ambience.mp3?url';

/** Shares the existing audio clock and master gain: pause and mute stay in sync. */
export class BackgroundMusic {
  private buffer: AudioBuffer | null = null;
  private loading: Promise<AudioBuffer> | null = null;
  private source: AudioBufferSourceNode | null = null;
  private gain: GainNode;
  private generation = 0;
  private disposed = false;
  private abort = new AbortController();
  /** Dry corridor: keep a quiet bed so mute/pause wiring stays shared. */
  private dry = true;

  constructor(private ctx: AudioContext, master: GainNode) {
    this.gain = ctx.createGain();
    this.gain.gain.value = 0;
    this.gain.connect(master);
  }

  async start() {
    if (this.disposed || this.source) return;
    const generation = this.generation;
    if (!this.buffer) {
      this.loading ??= fetch(musicUrl, {signal: this.abort.signal})
        .then(response => {
          if (!response.ok) throw new Error(`Music download failed: ${response.status}`);
          return response.arrayBuffer();
        })
        .then(data => this.ctx.decodeAudioData(data))
        .catch(error => { this.loading = null; throw error; });
      this.buffer = await this.loading;
    }
    if (this.disposed || generation !== this.generation || this.source || this.ctx.state === 'closed') return;
    const source = this.ctx.createBufferSource();
    source.buffer = this.buffer;
    source.loop = true;
    source.connect(this.gain);
    this.gain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.gain.gain.setValueAtTime(0, this.ctx.currentTime);
    const target = this.dry ? .12 : .65;
    this.gain.gain.linearRampToValueAtTime(target, this.ctx.currentTime + 1.5);
    source.start();
    this.source = source;
  }

  /** Duck the underwater bed while walking the dry corridor. */
  setDry(dry: boolean) {
    this.dry = dry;
    if (!this.source || this.disposed || this.ctx.state === 'closed') return;
    const target = dry ? .12 : .65;
    const now = this.ctx.currentTime;
    this.gain.gain.cancelScheduledValues(now);
    this.gain.gain.setValueAtTime(this.gain.gain.value, now);
    this.gain.gain.linearRampToValueAtTime(target, now + .45);
  }

  reset() {
    this.generation++;
    this.dry = true;
    this.source?.stop();
    this.source?.disconnect();
    this.source = null;
  }

  dispose() {
    this.disposed = true;
    this.abort.abort();
    this.reset();
    this.gain.disconnect();
  }
}
