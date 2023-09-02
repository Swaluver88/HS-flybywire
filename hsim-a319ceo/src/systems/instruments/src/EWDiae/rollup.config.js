// Copyright (c) 2022 FlyByWire Simulations
// SPDX-License-Identifier: GPL-3.0

'use strict';

import ts from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';

const { join } = require('path');

const root = join(__dirname, '..', '..', '..', '..', '..', '..');
console.log('Root: ', root);

export default {
    input: join(__dirname, 'instrument.tsx'),
    output: {
        file: join(root, 'build-a319ceo/out/lvfr-horizonsim-airbus-a319-ceo/html_ui/Pages/VCockpit/Instruments/A319HS/EWD/instrument.js'),
        format: 'es',
    },
    plugins: [
        scss({ output: join(root, 'build-a319ceo/out/lvfr-horizonsim-airbus-a319-ceo/html_ui/Pages/VCockpit/Instruments/A319HS/EWD/ewd.css') }),
        resolve(),
        ts(),
    ],
};
