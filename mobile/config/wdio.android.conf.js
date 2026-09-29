const path = require('path');
const { config } = require('./wdio.shared.conf');

config.capabilities = [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(
        process.cwd(),
        'apps',
        'android.wdio.native.app.v2.2.0.apk'
    ),
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240,
    'maxInstances': 1
}];

exports.config = config;