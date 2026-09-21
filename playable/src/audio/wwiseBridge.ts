import { WwiseEvents, WwiseRtpcs, type WwiseEventName, type WwiseRtpcName } from './wwiseEvents';

/**
 * Thin facade the game will call. Full Wwise Web Sound Engine (Emscripten WASM)
 * is not bundled yet — methods no-op until banks + runtime are supplied.
 */
export class WwiseBridge {
  private ready = false;
  private swimPlaying = false;

  get isReady() {
    return this.ready;
  }

  /** Call after a user gesture. Will load WASM + Init.bnk when those assets exist. */
  async init(): Promise<boolean> {
    // Placeholder: detect GeneratedSoundBanks + AkSoundEngine when dropped in.
    this.ready = false;
    return this.ready;
  }

  postEvent(_name: WwiseEventName) {
    if (!this.ready) return;
  }

  setRtpc(_name: WwiseRtpcName, _value: number) {
    if (!this.ready) return;
  }

  setMuted(muted: boolean) {
    this.setRtpc(WwiseRtpcs.masterVolume, muted ? 0 : 1);
  }

  /** Velocity-linked water: start/stop the loop and push Swim_Speed. */
  updateSwim(speed: number, active: boolean) {
    if (!this.ready) return;
    if (active && speed > .1) {
      if (!this.swimPlaying) {
        this.postEvent(WwiseEvents.swimWaterStart);
        this.swimPlaying = true;
      }
      this.setRtpc(WwiseRtpcs.swimSpeed, speed);
    } else if (this.swimPlaying) {
      this.postEvent(WwiseEvents.swimWaterStop);
      this.swimPlaying = false;
      this.setRtpc(WwiseRtpcs.swimSpeed, 0);
    }
  }

  dispose() {
    if (this.swimPlaying) this.postEvent(WwiseEvents.swimWaterStop);
    this.swimPlaying = false;
    this.ready = false;
  }
}
