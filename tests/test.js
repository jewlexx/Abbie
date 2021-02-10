require('dotenv').config();
const logger = require('../dist/index');

logger.log("Hey y'all wassup!");

logger.log('Oopsie I made a booboo and this is an error', 1);

logger.log("Finished Successfully!", 2);