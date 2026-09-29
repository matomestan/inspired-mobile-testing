const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000,
    use: {
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    },
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]]
});