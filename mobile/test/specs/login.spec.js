const LoginPage = require('../pageobjects/LoginPage');

describe('Login', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login('test@webdriver.io', 'Test1234!');
        await expect(LoginPage.alertTitle).toHaveText('Success');
        await LoginPage.okButton.click();
    });

    it('should show error with invalid credentials', async () => {
        await LoginPage.login('test@webdriver.io', 'WrongPassword');
        await expect(LoginPage.alertTitle).toHaveText('Invalid login');
        await LoginPage.okButton.click();
    });
});