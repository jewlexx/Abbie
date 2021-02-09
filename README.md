[![Build Status](https://travis-ci.com/jamesinaxx/CleanLogger.svg?branch=public)](https://travis-ci.com/jamesinaxx/CleanLogger) 
[![DeepScan grade](https://deepscan.io/api/teams/11350/projects/15794/branches/322083/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11350&pid=15794&bid=322083) 
[![codecov](https://codecov.io/gh/jamesinaxx/Abbie/branch/public/graph/badge.svg?token=VZFHWZ6RER)](https://codecov.io/gh/jamesinaxx/Abbie) 
[![npm version](https://badge.fury.io/js/abbie.svg)](https://badge.fury.io/js/abbie)

# Abbie
A simple, clean, javascript logger

# Usage
```
const logger = require('abbie');

logger.log('Sup folks!', __dirname, __filename) // Abbie relies on dirname and filename for the type naming scheme. A more elegant solution is coming soon!
```
