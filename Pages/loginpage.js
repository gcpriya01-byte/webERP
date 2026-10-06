import Utils from '../Utils/Utils.js';

class LoginPage {

    constructor(page) {
     this.page = page;
     this.utils = new Utils(page);

        this.username = page.locator('input[name="UserNameEntryField"]');
        this.password = page.locator('input[name="Password"]');
        this.loginButton = page.locator('input[name="SubmitUser"]');
    }

    async openApplication() {
    await this.page.goto('http://etestingplatform.com/webERP/');
    }
    async login(username, password) {

    await this.utils.fill(this.username, username);

    await this.utils.fill(this.password, password);

    await this.utils.click(this.loginButton);
}
}

export default LoginPage;

