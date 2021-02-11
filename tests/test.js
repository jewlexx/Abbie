require('dotenv').config();
const logger = require('../dist/index').default;

logger("Hey y'all wassup!");

logger('Oopsie I made a booboo and this is an error', 1);

logger("Finished Successfully!", 2);