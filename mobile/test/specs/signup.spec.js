const LoginPage = require('../pageobjects/LoginPage');

describe('Signup', () => {
    it('should create a new account', async () => {
        await LoginPage.open();
        const uniqueEmail = `user${Date.now()}@test.com`;
        await LoginPage.signUp(uniqueEmail, 'Password123!');

        await expect(LoginPage.alertTitle).toHaveText('Signed Up!');
        await LoginPage.okButton.click();
    });
});