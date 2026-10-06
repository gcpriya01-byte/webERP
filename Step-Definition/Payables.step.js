import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

setDefaultTimeout(30000);

When('I click on Payables', async function () {
    await this.page.getByText('Payables', { exact: true }).click();
});

Then('I should see Select Vendor', async function () {
    await expect(this.page.locator("a[href='/webERP/SelectSupplier.php']").first()).toBeVisible();
});

Then('I should see Vendor Allocations', async function () {
    await expect(this.page.locator("a[href='/webERP/SupplierAllocations.php']")).toBeVisible();
});
