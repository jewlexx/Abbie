# Abbie

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/com/jamesinaxx/abbie?style=for-the-badge)](https://app.travis-ci.com/jamesinaxx/Abbie)
[![npm version](https://img.shields.io/npm/v/abbie?color=pink&style=for-the-badge)](http://npmjs.com/abbie)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/jamesinaxx/Abbie.svg?logo=lgtm&logoWidth=18&style=for-the-badge)](https://lgtm.com/projects/g/jamesinaxx/Abbie/context:javascript)

A simple, clean, javascript logger

![Usage](https://raw.githubusercontent.com/jamesinaxx/Abbie/public/assets/gifs/render.gif)

## Usage

It's super simple. Just like `console.log`

Use with Javascript

```javascript
const { log, warn, error, good, debug } = require('abbie');

log("Hey y'all wassup");
warn('Something nearly failed...');
error('Oopsie i made a booboo and this is an error');
good('This is some good news!');
debug("This won't be in production");
```

Use with Typescript

```typescript
import { log, warn, error, good, debug } from 'abbie';

log("Hey y'all wassup");
warn('Something nearly failed...');
error('Oopsie i made a booboo and this is an error');
good('This is some good news!');
debug("This won't be in production");
```

**Test it out on [npm RunKit](https://npm.runkit.com/abbie)**

**Developed with ❤️ by jamesinaxx**
