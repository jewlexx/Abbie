const fs = require('fs/promises');
const { existsSync } = require('fs');
const path = require('path');
const ncc = require('@vercel/ncc');

ncc(path.resolve(__dirname, '..', 'src', 'index.ts'), {
  cache: false,
  filterAssetBase: path.resolve(__dirname, '..', 'src'),
  minify: true,
  sourceMap: false,
  sourceMapBasePrefix: '../',
  sourceMapRegister: true,
  watch: false,
  license: 'LICENSE.txt',
  v8cache: false,
  quiet: false,
  debugLog: false,
}).then(async ({ code, assets }) => {
  const distDir = path.resolve(__dirname, '..', 'dist');

  if (existsSync(distDir)) {
    await fs.rm(distDir, { recursive: true, force: true });
  }
  await fs.mkdir(distDir);

  await fs.writeFile(path.resolve(distDir, 'index.js'), code);

  // Writes the Typescript delcarations and License file to the dist folder
  Object.entries(assets).forEach(async ([key, value]) => await fs.writeFile(path.resolve(distDir, key), value.source));

  console.log('Finished build');
});
