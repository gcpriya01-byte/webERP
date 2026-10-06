import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import PurchasesPage from '../Pages/PurchasesPage.js';

setDefaultTimeout(30000);

When('I click on Purchases', async function () { 
this.purchasesPage = new PurchasesPage(this.page);
await this.purchasesPage.clickPurchases();
});

Then('I should see New Purchase Order', async function () {
await this.purchasesPage.verifyNewPurchaseOrder();
});

Then('I should see Purchase Orders', async function () {
await this.purchasesPage.verifyPurchaseOrders();
});

Then('I should see Purchase Order Grid Entry', async function () {
await this.purchasesPage.verifyPurchaseOrderGridEntry();
});

Then('I should see Create a New Tender', async function () {
await this.purchasesPage.verifyCreateNewTender();
});

Then('I should see Edit Existing Tenders', async function () {
await this.purchasesPage.verifyEditExistingTenders();
});

Then('I should see Process Tenders and Offers', async function () {
await this.purchasesPage.verifyProcessTendersAndOffers();
});

Then('I should see Orders to Authorise', async function () {
await this.purchasesPage.verifyOrdersToAuthorise();
});

Then('I should see Shipment Entry', async function () {
await this.purchasesPage.verifyShipmentEntry();
});

Then('I should see Select A Shipment', async function () {
await this.purchasesPage.verifySelectAShipment();
});