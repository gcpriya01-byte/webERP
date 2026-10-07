import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import LoginPage from '../Pages/LoginPage.js';
import testData from '../test-data/testData.js';
setDefaultTimeout(30000);

Given('I open the webERP application', async function () {
this.loginPage = new LoginPage(this.page);
await this.loginPage.openApplication();
});

When('I login to webERP with valid credentials', async function () {
await this.loginPage.login(
      testData.login.username,
      testData.login.password
    );

});

Then('I should see the Main Menu', async function () {
    await this.loginPage.verifyMainMenu();
});
