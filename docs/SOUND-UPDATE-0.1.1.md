# Version 0.1.1 — sound update only

Click **Test sound** on the opening or pause menu. You should hear two clear tones and a brief water/breathing sound. Then click **Begin dive**: water and regulator breathing continue during play. **M** mutes/unmutes; **Esc** pauses the audio as well as the mission.

The old ambience was quiet and concentrated in low frequencies. This update provides stronger midrange water/breathing for laptop speakers, a clear startup chime, explicit browser audio-error feedback, and a sound-test button.

The production build passed seven audio checks in Chrome using real Web Audio output: test tones, continuing ambience, silence after mute, restored output after unmute, suspend on pause, resume, and visible reporting of rejected audio activation. No browser errors occurred. Output was measured after the master gain; actual speaker/headphone playback still needs your listening test.

Camera controls, items, flashlight controls, compass and mission rules are unchanged in this update. Those reported issues are queued for separate iterations after your sound test.

Use the same launcher: from the extracted Painted-Abyss folder run `node playable/serve.mjs`, then open http://127.0.0.1:5173. Close the old server first if using the same port. The original export remains preserved.
