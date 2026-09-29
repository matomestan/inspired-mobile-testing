const FormsPage = require('../pageobjects/FormsPage');

describe('Form Interaction', () => {
    it('should fill and submit the form', async () => {
        await FormsPage.open();
        await FormsPage.fillForm('Hello WebdriverIO');
        await expect(FormsPage.inputTextResult).toHaveText('Hello WebdriverIO');
    });
});