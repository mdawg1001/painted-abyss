/** Single source of truth for the on-screen build label. Import this — do not hardcode. */
import pkg from '../package.json';

/** Prefer Vite-injected build constants so dist always matches the bake; fall back for tests. */
export const APP_VERSION:string=typeof __APP_VERSION__!=='undefined'?__APP_VERSION__:pkg.version;
export const APP_BUILD_SHA:string=typeof __APP_BUILD_SHA__!=='undefined'?__APP_BUILD_SHA__:'dev';
export const APP_BUILT_AT:string=typeof __APP_BUILT_AT__!=='undefined'?__APP_BUILT_AT__:'';
export const APP_VERSION_LABEL=`v${APP_VERSION}`;
export const APP_BUILD_LABEL=`v${APP_VERSION} · ${APP_BUILD_SHA}`;
