// Copyright (c) 2021-2023 FlyByWire Simulations
//
// SPDX-License-Identifier: GPL-3.0

'use strict';

const esbuild = require('esbuild');
const path = require('path');
const { esbuildModuleBuild } = require('#build-utils');

const outFile = 'build-a319ceo/out/lvfr-horizonsim-airbus-a319-ceo/html_ui/Pages/VCockpit/Instruments/A319HS/SystemsHost/index.js';

esbuild.build(esbuildModuleBuild('build-a319ceo', undefined, path.join(__dirname, './index.ts'), outFile));
