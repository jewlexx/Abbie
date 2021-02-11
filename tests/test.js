require('dotenv').config();
const abbie = require('../dist/index');

abbie.log("Hey y'all wassup!");

abbie.log('Oopsie I made a booboo and this is an error', 1);

abbie.log("Finished Successfully!", 2);