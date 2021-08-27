# Abbie

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/abbie?color=pink&style=flat-square)](http://npmjs.com/abbie)
[![Build Status](https://jamesinaxx.me/ci/buildStatus/icon?job=Abbie&style=flat-square)](https://jamesinaxx.me/ci/job/Abbie/)

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
