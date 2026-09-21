# Ancient Seas

An immersive browser-based prehistoric ocean inspired by supplied visual references. Built with Three.js, React and Vinext. The ecosystem is imagined; the creature models and procedural environment are stylised rather than scientific or photorealistic reconstructions.

## Explore

Enter the water to start. WASD or arrow keys swim; the mouse looks around after clicking the scene. Q/E descend/ascend, Shift swims faster, G toggles gentle forward drift, H hides the interface and Esc pauses. Touch devices use the left movement pad, drag-to-look and right vertical controls. Ocean sound is synthesised locally and starts only after interaction. No external audio or image services are called.

## Graphics

WebGL 2 is required. Hardware acceleration is recommended. A browser without WebGL shows a clear message rather than a blank scene. The cloud preview used for development does not expose WebGL, so the full rendered ocean could not be visually verified there. TypeScript, production build and CPU geometry checks passed.

## Implementation

`lib/ocean.ts` owns the scene, swimming physics, procedural marine creatures, seabed, vegetation, caustics, surface, light beams, particles and audio. `app/page.tsx` owns the interface and document-scoped WebMCP controls. `app/globals.css` contains the responsive theme. All runtime assets are served by this site.

Use the project package manager and the Sites build/publish scripts. The registered Site identity is in `.openai/hosting.json`.
