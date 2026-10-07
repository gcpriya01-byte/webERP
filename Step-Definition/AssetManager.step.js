import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import AssetManagerPage from '../Pages/AssetManagerPage.js';

setDefaultTimeout(30000);

When('I click on Asset Manager', async function () {
    this.assetManagerPage = new AssetManagerPage(this.page);
    await this.assetManagerPage.clickAssetManager();
});

Then('I should see Add a new Asset', async function () {
    await this.assetManagerPage.verifyAddNewAsset();
});

Then('I should see Select an Asset', async function () {
    await this.assetManagerPage.verifySelectAnAsset();
});

Then('I should see Change Asset Location', async function () {
    await this.assetManagerPage.verifyChangeAssetLocation();
});

Then('I should see Depreciation Journal', async function () {
    await this.assetManagerPage.verifyDepreciationJournal();
});