import { expect } from '@playwright/test';
class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('input[name="UserNameEntryField"]');
        this.password = page.locator('input[name="Password"]');
        this.loginButton = page.locator('input[name="SubmitUser"]');
        this.mainMenu = page.getByText('Main Menu', { exact: true });
    }

    async openApplication() {
    await this.page.goto('http://etestingplatform.com/webERP/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async verifyMainMenu() {
    await expect(this.mainMenu).toBeVisible();
    }

}

export default LoginPage;