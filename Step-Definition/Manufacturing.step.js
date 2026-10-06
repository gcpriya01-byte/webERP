import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

setDefaultTimeout(30000);


When('I click on Manufacturing', async function () {
    await this.page.getByText('Manufacturing', { exact: true }).click();
});

Then('I should see Work Order Entry', async function () {
    await expect(this.page.locator('a[href="/webERP/WorkOrderEntry.php"]')).toBeVisible();
});

Then('I should see Select A Work Order', async function () {
    await expect(this.page.locator('a[href="/webERP/SelectWorkOrder.php"]').first()).toBeVisible();
});

Then('I should see QA Samples and Test Results', async function () {
await expect(this.page.locator('a[href="/webERP/SelectQASamples.php"]')).toBeVisible();
});

Then('I should see Timesheet Entry', async function () {
await expect(this.page.locator( 'a[href="/webERP/Timesheets.php"]')).toBeVisible();
});