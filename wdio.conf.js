exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'firefox', // Use Firefox
        'moz:firefoxOptions': {  // Firefox-specific options
            args: [
                '--headless', // Headless mode
                '--window-size=1280,800' // Window size
                // Add other Firefox-specific arguments as needed
            ],
            // ... other options ...
            binary: '/usr/bin/firefox-esr' // Path to Firefox executable

        },
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
