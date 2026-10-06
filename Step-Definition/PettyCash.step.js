import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

setDefaultTimeout(30000);

When('I click on Petty Cash', async function () {
await this.page.getByText('Petty Cash', { exact: true }).click();
});

Then('I should see Assign Cash to PC Tab', async function () {
await expect(this.page.locator('a[href="/webERP/PcAssignCashToTab.php"]')).toBeVisible();
});

Then('I should see Transfer Assigned Cash Between PC Tabs', async function () {
await expect(this.page.locator('a[href="/webERP/PcAssignCashTabToTab.php"]')).toBeVisible();
});

Then('I should see Claim Expenses From PC Tab', async function () {
await expect(this.page.locator('a[href="/webERP/PcClaimExpensesFromTab.php"]')).toBeVisible();
});

Then('I should see Authorise Expenses', async function () {
await expect(this.page.locator('a[href="/webERP/PcAuthorizeExpenses.php"]')).toBeVisible();
});

Then('I should see Authorise Assigned Cash', async function () {
await expect(this.page.locator('a[href="/webERP/PcAuthorizeCash.php"]')).toBeVisible();
});