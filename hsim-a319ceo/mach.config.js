const imagePlugin = require('esbuild-plugin-inline-image');
const postCssPlugin = require('esbuild-style-plugin');
const tailwind = require('tailwindcss');
const postCssColorFunctionalNotation = require('postcss-color-functional-notation');
const postCssInset = require('postcss-inset');

/** @type { import('@synaptic-simulations/mach').MachConfig } */
module.exports = {
    packageName: 'A319HS',
    packageDir: 'out/lvfr-horizonsim-airbus-a319-ceo',
    plugins: [
        imagePlugin({ limit: -1 }),
        postCssPlugin({
            extract: true,
            postcss: {
                plugins: [
                    tailwind('src/systems/instruments/src/EFBcfm/tailwind.config.js'),

                    // transform: hsl(x y z / alpha) -> hsl(x, y, z, alpha)
                    postCssColorFunctionalNotation(),

                    // transform: inset: 0; -> top/right/left/bottom: 0;
                    postCssInset(),
                ],
            }
        }),
    ],
    instruments: [
        msfsAvionicsInstrument('PFD'),
        msfsAvionicsInstrument('ND', 'NDv2'),
        msfsAvionicsInstrument('EWDcfm'),
        msfsAvionicsInstrument('EWDiae'),
        msfsAvionicsInstrument('Clock'),

        reactInstrument('SD'),
        reactInstrument('DCDU'),
        reactInstrument('RTPI'),
        reactInstrument('RMP'),
        reactInstrument('ISIS'),
        reactInstrument('BAT'),
        reactInstrument('ATC'),
        reactInstrument('EFBcfm', ['/Pages/VCockpit/Instruments/Shared/Map/MapInstrument.html']),
        reactInstrument('EFBiae', ['/Pages/VCockpit/Instruments/Shared/Map/MapInstrument.html']),
        reactInstrument('EFBcfmacj', ['/Pages/VCockpit/Instruments/Shared/Map/MapInstrument.html']),
        reactInstrument('EFBiaeacj', ['/Pages/VCockpit/Instruments/Shared/Map/MapInstrument.html']),
    ],
};

function msfsAvionicsInstrument(name, folder = name) {
    return {
        name,
        index: `src/systems/instruments/src/${folder}/instrument.tsx`,
        simulatorPackage: {
            type: 'baseInstrument',
            templateId: `A319HS_${name}`,
            mountElementId: `${name}_CONTENT`,
            fileName: name.toLowerCase(),
            imports: ['/JS/dataStorage.js'],
        },
    };
}

function reactInstrument(name, additionalImports) {
    return {
        name,
        index: `src/systems/instruments/src/${name}/index.tsx`,
        simulatorPackage: {
            type: 'react',
            isInteractive: false,
            fileName: name.toLowerCase(),
            imports: ['/JS/dataStorage.js','/JS/A319HS/A32NX_Simvars.js', ...(additionalImports ?? [])],
        },
    };
}
