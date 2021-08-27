const { log, error, warn, good, debug } = require('../dist/index');

console.log('Beginning Javascript testing!');

log("Hey y'all wassup");

warn('Something nearly failed...');

error('Oopsie i made a booboo and this is an error');

good('This is some good news!');

debug("This won't be in production");
