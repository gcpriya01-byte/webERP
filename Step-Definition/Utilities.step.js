import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

setDefaultTimeout(30000);

When('I click on Utilities', async function () {
await this.page.locator('a[href="index.php?Application=Utilities"]').click();
});

Then('I should see Change A Customer Code', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ChangeCustomerCode.php"]')).toBeVisible();
});

Then('I should see Change A Customer Branch Code', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ChangeBranchCode.php"]') ).toBeVisible();
});

Then('I should see Change A GL Account Code', async function () {
await expect( this.page.locator('a[href="/webERP/Z_ChangeGLAccountCode.php"]')).toBeVisible();
});

Then('I should see Change An Inventory Item Code', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ChangeStockCode.php"]')).toBeVisible();
});

Then('I should see Change A Location Code', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ChangeLocationCode.php"]')).toBeVisible();
});

Then('I should see Change A Salesman Code', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ChangeSalesmanCode.php"]')).toBeVisible();
});

Then('I should see Change A Stock Category Code', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ChangeStockCategory.php"]')).toBeVisible();
});

Then('I should see Change A Supplier Code', async function () {
 await expect(this.page.locator('a[href="/webERP/Z_ChangeSupplierCode.php"]')).toBeVisible();
});

Then('I should see Translate Item Descriptions', async function () {
await expect(this.page.locator('a[href="/webERP/AutomaticTranslationDescriptions.php"]')).toBeVisible();
});

Then('I should see Update costs for all BOM items, from the bottom up', async function () {
 await expect(this.page.locator('a[href="/webERP/Z_BottomUpCosts.php"]')).toBeVisible();
});

Then('I should see Re-apply costs to Sales Analysis', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ReApplyCostToSA.php"]')).toBeVisible();
});

Then('I should see Delete sales transactions', async function () {
await expect(this.page.locator('a[href="/webERP/Z_DeleteSalesTransActions.php"]')).toBeVisible();
});

Then('I should see Reverse all supplier payments on a specified date', async function () {
await expect(this.page.locator('a[href="/webERP/Z_ReverseSuppPaymentRun.php"]')).toBeVisible();
});

Then('I should see Update sales analysis with latest customer data', async function () {
await expect(this.page.locator('a[href="/webERP/Z_UpdateSalesAnalysisWithLatestCustomerData.php"]')).toBeVisible();
});

Then('I should see Copy Authority of GL Accounts from one user to another', async function () {
await expect(this.page.locator('a[href="/webERP/Z_GLAccountUsersCopyAuthority.php"]')).toBeVisible();
});

