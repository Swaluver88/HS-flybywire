const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './qbt-a321ec-liveries/out/headwindsim-a339x-livery-package',
            outDir: './qbt-a321ec-liveries/out/build-modules',
            modules: [{
                name: 'AirBelgium',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_AirBelgium'
            }, {
                name: 'CondorBeach',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_Condor_Beach'
            }, {
                name: 'CondorIsland',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_Condor_Island'
            }, {
                name: 'CondorSea',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_Condor_Sea'
            }, {
                name: 'Corsair',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_Corsair'
            }, {
                name: 'Delta',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_Delta'
            }, {
                name: 'HiFly',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_HiFly'
            }, {
                name: 'TAP',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_TAP'
            }, {
                name: 'TAPStar',
                sourceDir: './SimObjects/Airplanes/Headwind_A330neo_TAP_STAR'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./qbt-a321ec-liveries/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();