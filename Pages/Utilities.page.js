import Utils from '../Utils/Utils.js';

class UtilitiesPage {

    constructor(page) {

    this.page = page;
    this.utils = new Utils(page);
     
        this.utilities = page.locator('a[href="index.php?Application=Utilities"]');
        this.changeCustomerCode = page.locator('a[href="/webERP/Z_ChangeCustomerCode.php"]');
        this.changeCustomerBranchCode = page.locator('a[href="/webERP/Z_ChangeBranchCode.php"]');
        this.changeGLAccountCode = page.locator('a[href="/webERP/Z_ChangeGLAccountCode.php"]');
        this.changeInventoryItemCode = page.locator('a[href="/webERP/Z_ChangeStockCode.php"]');
        this.changeLocationCode = page.locator('a[href="/webERP/Z_ChangeLocationCode.php"]');
        this.changeSalesmanCode = page.locator('a[href="/webERP/Z_ChangeSalesmanCode.php"]');
        this.changeStockCategoryCode = page.locator('a[href="/webERP/Z_ChangeStockCategory.php"]');
        this.changeSupplierCode = page.locator('a[href="/webERP/Z_ChangeSupplierCode.php"]');
        this.translateItemDescriptions = page.locator('a[href="/webERP/AutomaticTranslationDescriptions.php"]');
        this.updateCostsForAllBOMItems = page.locator('a[href="/webERP/Z_BottomUpCosts.php"]');
        this.reApplyCostsToSalesAnalysis = page.locator('a[href="/webERP/Z_ReApplyCostToSA.php"]');
        this.deleteSalesTransactions = page.locator('a[href="/webERP/Z_DeleteSalesTransActions.php"]');
        this.reverseSupplierPayments = page.locator('a[href="/webERP/Z_ReverseSuppPaymentRun.php"]');
        this.updateSalesAnalysisWithLatestCustomerData = page.locator('a[href="/webERP/Z_UpdateSalesAnalysisWithLatestCustomerData.php"]');
        this.copyAuthorityOfGLAccounts = page.locator('a[href="/webERP/Z_GLAccountUsersCopyAuthority.php"]');
    }

    async clickUtilities() {
    await this.utils.click(this.utilities);
    }

    async verifyChangeCustomerCode() {
    await this.utils.verifyVisible(this.changeCustomerCode);
    }

    async verifyChangeCustomerBranchCode() {
    await this.utils.verifyVisible(this.changeCustomerBranchCode);
    }

    async verifyChangeGLAccountCode() {
    await this.utils.verifyVisible(this.changeGLAccountCode);
    }

    async verifyChangeInventoryItemCode() {
    await this.utils.verifyVisible(this.changeInventoryItemCode);
    }

    async verifyChangeLocationCode() {
    await this.utils.verifyVisible(this.changeLocationCode);
    }

 
    async verifyChangeSalesmanCode() {
    await this.utils.verifyVisible(this.changeSalesmanCode);
    }

    async verifyChangeStockCategoryCode() {
    await this.utils.verifyVisible(this.changeStockCategoryCode);
    }
    
    async verifyChangeSupplierCode() {
    await this.utils.verifyVisible(this.changeSupplierCode);
    }
    
    async verifyTranslateItemDescriptions() {
    await this.utils.verifyVisible(this.translateItemDescriptions);
    }

    async verifyUpdateCostsForAllBOMItems() {
    await this.utils.verifyVisible(this.updateCostsForAllBOMItems);
    }
   
    async verifyReApplyCostsToSalesAnalysis() {
    await this.utils.verifyVisible(this.reApplyCostsToSalesAnalysis);
    }
   
    async verifyDeleteSalesTransactions() {
    await this.utils.verifyVisible(this.deleteSalesTransactions);
    }
   
    async verifyReverseSupplierPayments() {
    await this.utils.verifyVisible(this.reverseSupplierPayments);
    }
 
    async verifyUpdateSalesAnalysisWithLatestCustomerData() {
    await this.utils.verifyVisible(this.updateSalesAnalysisWithLatestCustomerData);
    }
    
    async verifyCopyAuthorityOfGLAccounts() {
    await this.utils.verifyVisible(this.copyAuthorityOfGLAccounts);
    }
}

export default UtilitiesPage;