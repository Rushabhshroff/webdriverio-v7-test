/*
 * This file is important. It is configurations that can be placed against Local and Remote running.
 */


exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 5000000,
        compilers: ["js:@babel/register"]
    },

    services: [
        // ====================
        // Appium Configuration
        // ====================
        [
            "appium",
            {
                // For options see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                    // For arguments see
                    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: "appium",
                logPath: "./logs",
                "relaxed-security": true
            }
        ]
    ],
    path: "/",
    port: 4723,
    // Set specific log levels per logger
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevels: {
        browser: "trace",
        webdriver: "warn",
        webdriverio: "warn",
        "mocha-framework": "warn",
        "@wdio/local-runner": "warn",
        "@wdio/cli": "warn",
        "browserstack-service": "warn"
    },
    
    outputDir: "./logs",
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    commandTimeouts: 20000,
    suites: {
        test: ["./specs/single.test.js"],
    },
    exclude: [],
    //----------------------------------------------
    //Test reporter that produce test results file
    //----------------------------------------------
    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: "./allure_test_results",
                disableWebdriverStepsReporting: true,
                disableWebdriverscreenshotsReporting: true,
                disableMochaHooks: true
            }
        ]
    ],
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 0,

    // Delay in seconds between the spec file retry attempts
    specFileRetriesDelay: 5,

    // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
    specFileRetriesDeferred: false,
};
