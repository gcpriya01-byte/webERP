import Utils from '../Utils/Utils.js';

class AssetManagerPage {
    constructor(page) {

        this.page = page;
        this.utils = new Utils(page);

        this.assetManager = page.getByText('Asset Manager',{ exact: true });
        this.addNewAsset = page.locator('a[href="/webERP/FixedAssetItems.php"]');
        this.selectAnAsset = page.locator('a[href="/webERP/SelectAsset.php"]');
        this.changeAssetLocation = page.locator('a[href="/webERP/FixedAssetTransfer.php"]');
        this.depreciationJournal = page.locator('a[href="/webERP/FixedAssetDepreciation.php"]');
    }
   
    async clickAssetManager() {
    await this.utils.click(this.assetManager);
    }

    async verifyAddNewAsset() {
    await this.utils.verifyVisible(this.addNewAsset);
    }
   
    async verifySelectAnAsset() {
    await this.utils.verifyVisible(this.selectAnAsset);
    }
 
    async verifyChangeAssetLocation() {
    await this.utils.verifyVisible(this.changeAssetLocation);
    }

    async verifyDepreciationJournal() {
    await this.utils.verifyVisible(this.depreciationJournal);
    }
}

export default AssetManagerPage;