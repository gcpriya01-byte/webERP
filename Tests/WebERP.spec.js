
import { test } from '@playwright/test';
import LoginPage from '../Pages/LoginPage.js';
import testData from '../test-data/testData.js';

test('webERP End to End', async ({ page }) => {

    // Open application
    await page.goto('http://etestingplatform.com/webERP/');

    // Login
    const loginPage = new LoginPage(page);

    await loginPage.login(
        testData.login.username,
        testData.login.password
    );
});

