exports.config = {
    runner: 'local',
    specs: ['../test/specs/**/*.js'],
    maxInstances: 1,
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    port: 4723,
    path: '/',
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.saveScreenshot(
                `../evidence/${test.title.replace(/\s+/g, '_')}.png`
            );
        }
    }
};