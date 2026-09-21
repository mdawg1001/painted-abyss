/** Single source of truth for the on-screen build label. Import this — do not hardcode. */
import pkg from '../package.json';
export const APP_VERSION:string=pkg.version;
export const APP_VERSION_LABEL=`v${APP_VERSION}`;
