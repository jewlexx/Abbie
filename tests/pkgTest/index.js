const logger = require('abbie');

logger.log("Hey y'all wassup!", __dirname, __filename);

logger.log(
    'Oopsie i made a booboo and this is an error',
    __dirname,
    __filename,
    'error',
);
