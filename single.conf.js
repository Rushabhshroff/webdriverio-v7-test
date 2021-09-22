var config = require('config')
config.user = process.env.BROWSERSTACK_USERNAME
config.key = process.env.BROWSERSTACK_ACCESS_KEY
config.screenshotPath = "./screenshots/";
config.waitforTimeout = 100000;
config.connectionRetryTimeout = 100000;
config.connectionRetryCount = 6;
config.maxInstances = 5;
config = {
    ...config,
    capabilities: [{
        "platformName": "android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Samsung Galaxy S20 Plus",
        "appium:app": "DemoApp",
        'bstack:options': {
            "projectName": "Wdio Test",
            "buildName": "Build 1",
            "sessionName": "Wikipedia Test",
            'appiumVersion': "1.20.2",
            "idleTimeout": "360",
            'debug': "true",
            'networkLogs': "true",
        },
    }],
    specs: [
        'specs/single.test.js'
    ],
};
module.exports.config = config;