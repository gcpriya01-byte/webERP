import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

setDefaultTimeout(30000);


When('I click on Asset Manager', async function () 
{await this.page.getByText('Asset Manager', { exact: true }).click();
});

Then('I should see Add a new Asset', async function () {
await expect(this.page.locator('a[href="/webERP/FixedAssetItems.php"]')).toBeVisible();
});

Then('I should see Select an Asset', async function () {
await expect(this.page.locator('a[href="/webERP/SelectAsset.php"]')).toBeVisible();
});

Then('I should see Change Asset Location', async function () {
await expect(this.page.locator('a[href="/webERP/FixedAssetTransfer.php"]')).toBeVisible();
});

Then('I should see Depreciation Journal', async function () {
await expect(this.page.locator('a[href="/webERP/FixedAssetDepreciation.php"]')).toBeVisible();
});
