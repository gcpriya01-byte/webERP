import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';


setDefaultTimeout(30000);


When('I click on Inventory', async function ()
{await this.page.getByText('Inventory', { exact: true }).click();
});

Then('I should see Receive Purchase Orders', async function () {
await expect(this.page.locator('a[href="/webERP/PO_SelectOSPurchOrder.php"]')).toBeVisible();
});

Then('I should see Inventory Transfer - Item Dispatch', async function () {
await expect(this.page.locator('a[href="/webERP/StockTransfers.php?New=Yes"]')).toBeVisible();
});

Then('I should see Bulk Inventory Transfer - Dispatch', async function () {
await expect( this.page.locator('a[href="/webERP/StockLocTransfer.php"]')).toBeVisible();
});

Then('I should see Bulk Inventory Transfer - Receive', async function () {
await expect(this.page.locator('a[href="/webERP/StockLocTransferReceive.php"]')).toBeVisible();
});

Then('I should see Inventory Adjustments', async function () {
await expect(this.page.locator('a[href="/webERP/StockAdjustments.php?NewAdjustment=Yes"]')).toBeVisible();
});


Then('I should see Reverse Goods Received', async function () {
await expect(this.page.locator('a[href="/webERP/ReverseGRN.php"]')).toBeVisible();
});

Then('I should see Enter Stock Counts', async function () {
await expect(this.page.locator('a[href="/webERP/StockCounts.php"]')).toBeVisible();
});

Then('I should see Create a New Internal Stock Request', async function () {
await expect(this.page.locator('a[href="/webERP/InternalStockRequest.php?New=Yes"]')).toBeVisible();
});


Then('I should see Authorise Internal Stock Requests', async function () {
await expect(this.page.locator('a[href="/webERP/InternalStockRequestAuthorisation.php"]')).toBeVisible();
});


Then('I should see Fulfill Internal Stock Requests', async function () {
await expect( this.page.locator('a[href="/webERP/InternalStockRequestFulfill.php"]')).toBeVisible();
});