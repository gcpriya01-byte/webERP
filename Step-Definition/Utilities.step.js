import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import UtilitiesPage from '../Pages/UtilitiesPage.js';
setDefaultTimeout(30000);


When('I click on Utilities', async function () {
this.utilitiesPage = new UtilitiesPage(this.page);
await this.utilitiesPage.clickUtilities();
});


Then('I should see Change A Customer Code', async function () {
await this.utilitiesPage.verifyChangeCustomerCode();
});


Then('I should see Change A Customer Branch Code', async function () {
await this.utilitiesPage.verifyChangeCustomerBranchCode();
});

Then('I should see Change A GL Account Code', async function () {
await this.utilitiesPage.verifyChangeGLAccountCode();
});


Then('I should see Change An Inventory Item Code', async function () {
await this.utilitiesPage.verifyChangeInventoryItemCode();
});


Then('I should see Change A Location Code', async function () {
await this.utilitiesPage.verifyChangeLocationCode();
});

Then('I should see Change A Salesman Code', async function () {
await this.utilitiesPage.verifyChangeSalesmanCode();
});


Then('I should see Change A Stock Category Code', async function () {
await this.utilitiesPage.verifyChangeStockCategoryCode();
});

Then('I should see Change A Supplier Code', async function () {
await this.utilitiesPage.verifyChangeSupplierCode();
});


Then('I should see Translate Item Descriptions', async function () {
await this.utilitiesPage.verifyTranslateItemDescriptions();
});

Then('I should see Update costs for all BOM items, from the bottom up', async function () {
    await this.utilitiesPage.verifyUpdateCostsForAllBOMItems();
});


Then('I should see Re-apply costs to Sales Analysis', async function () {
    await this.utilitiesPage.verifyReApplyCostsToSalesAnalysis();
});


Then('I should see Delete sales transactions', async function () {
await this.utilitiesPage.verifyDeleteSalesTransactions();
});

Then('I should see Reverse all supplier payments on a specified date', async function () {
await this.utilitiesPage.verifyReverseSupplierPayments();
});


Then('I should see Update sales analysis with latest customer data', async function () {
    await this.utilitiesPage.verifyUpdateSalesAnalysisWithLatestCustomerData();
});

Then('I should see Copy Authority of GL Accounts from one user to another', async function () {
    await this.utilitiesPage.verifyCopyAuthorityOfGLAccounts();
});