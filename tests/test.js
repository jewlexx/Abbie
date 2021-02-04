const logger = require('../index');

logger.log("Hey y'all wassup!", __dirname, __filename);

logger.log(
    'Oopsie I made a booboo and this is an error',
    __dirname,
    __filename,
    'error',
);

logger.log("Finished Successfully!", __dirname, __filename, 'good');

process.exit(0);