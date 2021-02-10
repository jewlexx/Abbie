# Abbie
A simple, clean, javascript logger

[![Build Status](https://travis-ci.com/jamesinaxx/Abbie.svg?branch=public)](https://travis-ci.com/jamesinaxx/Abbie)
[![DeepScan grade](https://deepscan.io/api/teams/11350/projects/15794/branches/322083/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11350&pid=15794&bid=322083) 
[![codecov](https://codecov.io/gh/jamesinaxx/Abbie/branch/public/graph/badge.svg?token=VZFHWZ6RER)](https://codecov.io/gh/jamesinaxx/Abbie) 
[![npm version](https://badge.fury.io/js/abbie.svg)](https://badge.fury.io/js/abbie)

[![Sreenshot](./assets/Screenshot.png)](https://www.npmjs.com/package/abbie)

# Usage
It's literally as easy as 1, 2... Not even a 3!

**Please Note: This is my first npm package, ever! If something doesn't work, be patient, it will be fixed soon!**

```
// Basic Javascript version
const logger = require('abbie');

logger.log("Hey y'all wassup!");
logger.log('Oopsie I made a booboo and this is an error', 1);
logger.log("Finished Successfully!", 2);

// Typescript version
import log from 'abbie';

log("Hey y'all wassup!");
log('Oopsie I made a booboo and this is an error', 1);
log("Finished Successfully!", 2);
```

## Reference:
log(
    message: "Whatever... Literally",
    level?: 0 = info, 1 = error or 2 = good
)
