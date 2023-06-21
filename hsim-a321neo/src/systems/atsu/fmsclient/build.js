'use strict';

const esbuild = require('esbuild');
const path = require('path');

const rootDir = path.join(__dirname, '..', '..', '..');
const outFile = '../out/horizonsim-lvfr-airbus-a321-neo/html_ui/JS/A21NHS/atsu/fmsclient.js';

const isProductionBuild = process.env.A32NX_PRODUCTION_BUILD === '1';

esbuild.build({
    absWorkingDir: __dirname,

    define: { DEBUG: 'false' },

    entryPoints: ['src/index.ts'],
    bundle: true,
    treeShaking: false,
    minify: isProductionBuild,

    outfile: path.join(rootDir, outFile),

    format: 'iife',
    globalName: 'AtsuFmsClient',

    sourcemap: isProductionBuild ? undefined : 'linked',

    // Target approximate CoherentGT WebKit version
    target: 'safari11',
});