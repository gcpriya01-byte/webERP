
import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

Before(async function () {

    // Launch browser
    this.browser = await chromium.launch({
        headless: false
    });

    // Create browser context
    this.context = await this.browser.newContext();

    // Create page
    this.page = await this.context.newPage();
});


After(async function () {

    // Close browser after each scenario
    await this.page.close();

    await this.context.close();

    await this.browser.close();
});

