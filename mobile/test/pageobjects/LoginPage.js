class LoginPage {
    get loginTab() { return $('~Login'); }
    get signUpTab() { return $('~button-sign-up-container'); }
    get emailInput() { return $('~input-email'); }
    get passwordInput() { return $('~input-password'); }
    get repeatPassword() { return $('~input-repeat-password'); }
    get loginButton() { return $('~button-LOGIN'); }
    get signUpButton() { return $('~button-SIGN UP'); }
    get alertTitle() { return $('~alert-title'); }
    get alertMessage() { return $('~alert-message'); }
    get okButton() { return $('~button-OK'); }

    async open() {
        await this.loginTab.click();
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async signUp(email, password) {
        await this.signUpTab.click();
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.repeatPassword.setValue(password);
        await this.signUpButton.click();
    }
}

module.exports = new LoginPage();