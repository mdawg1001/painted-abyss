/**
 * First Dive ↔ Wwise naming contract.
 * Author these Event / RTPC / Switch names in Wwise Authoring, then generate
 * Web (Emscripten) SoundBanks into `playable/wwise/GeneratedSoundBanks/`.
 *
 * Runtime wiring lands once the Web Sound Engine (WASM) + banks are in-repo.
 * Until then the playable keeps the existing Web Audio music / chime / click.
 */
export const WwiseEvents = {
  /** Dive start / unmute confirmation — two-tone feel in Wwise. */
  diveChime: 'Play_Dive_Chime',
  /** Inventory slot change. */
  inventoryClick: 'Play_Inventory_Click',
  /** Looping underwater music bed (replace the current mp3 path). */
  diveMusic: 'Play_Dive_Music',
  stopDiveMusic: 'Stop_Dive_Music',
  /** Continuous water motion; drive intensity with Swim_Speed RTPC. */
  swimWaterStart: 'Play_Swim_Water',
  swimWaterStop: 'Stop_Swim_Water',
} as const;

export const WwiseRtpcs = {
  /** World-units/sec swim speed (cruise ≈2.2, sprint ≈3.5). */
  swimSpeed: 'Swim_Speed',
  /** 0 = muted, 1 = full — mirrors the in-game Sound on/off control. */
  masterVolume: 'Master_Volume',
} as const;

export type WwiseEventName = (typeof WwiseEvents)[keyof typeof WwiseEvents];
export type WwiseRtpcName = (typeof WwiseRtpcs)[keyof typeof WwiseRtpcs];
