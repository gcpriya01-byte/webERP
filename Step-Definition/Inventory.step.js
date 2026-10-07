import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import InventoryPage from '../Pages/InventoryPage.js';
setDefaultTimeout(30000);


When('I click on Inventory', async function () {
this.inventoryPage = new InventoryPage(this.page);
await this.inventoryPage.clickInventory();
});

Then('I should see Receive Purchase Orders', async function () {
await this.inventoryPage.verifyReceivePurchaseOrders();
});


Then('I should see Inventory Transfer - Item Dispatch', async function () {
await this.inventoryPage.verifyInventoryTransferItemDispatch();
});

Then('I should see Bulk Inventory Transfer - Dispatch', async function () {
await this.inventoryPage.verifyBulkInventoryTransferDispatch();
});


Then('I should see Bulk Inventory Transfer - Receive', async function () {
await this.inventoryPage.verifyBulkInventoryTransferReceive();
});

Then('I should see Inventory Adjustments', async function () {
await this.inventoryPage.verifyInventoryAdjustments();
});

Then('I should see Reverse Goods Received', async function () {
await this.inventoryPage.verifyReverseGoodsReceived();
});

Then('I should see Enter Stock Counts', async function () {
await this.inventoryPage.verifyEnterStockCounts();
});

Then('I should see Create a New Internal Stock Request', async function () {
await this.inventoryPage.verifyCreateNewInternalStockRequest();
});

Then('I should see Authorise Internal Stock Requests', async function () {
await this.inventoryPage.verifyAuthoriseInternalStockRequests();
});

Then('I should see Fulfill Internal Stock Requests', async function () {
await this.inventoryPage.verifyFulfillInternalStockRequests();
});