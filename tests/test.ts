import { log, error, warn, good, debug } from '../dist/index';

console.log('Beginning Typescript testing!');

log('Everything is fine');

good('Everything is great!');

warn('Maybe check this out');

error("Uh, that wasn't meant to happen");

debug("This won't shown be in production");
