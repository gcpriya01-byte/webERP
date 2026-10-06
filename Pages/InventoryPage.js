import Utils from '../Utils/Utils.js';
class InventoryPage {


    constructor(page) {

        this.page = page;
         this.utils = new Utils(page);

        this.inventory =page.getByText('Inventory', { exact: true })
        this.receivePurchaseOrders = page.locator( 'a[href="/webERP/PO_SelectOSPurchOrder.php"]' );
        this.inventoryTransferItemDispatch =page.locator('a[href="/webERP/StockTransfers.php?New=Yes"]' );
        this.bulkInventoryTransferDispatch =page.locator('a[href="/webERP/StockLocTransfer.php"]');
        this.bulkInventoryTransferReceive =page.locator('a[href="/webERP/StockLocTransferReceive.php"]');
        this.inventoryAdjustments = page.locator('a[href="/webERP/StockAdjustments.php?NewAdjustment=Yes"]');
        this.reverseGoodsReceived = page.locator('a[href="/webERP/ReverseGRN.php"]' );
        this.enterStockCounts =page.locator( 'a[href="/webERP/StockCounts.php"]');
        this.createNewInternalStockRequest = page.locator('a[href="/webERP/InternalStockRequest.php?New=Yes"]' );
        this.authoriseInternalStockRequests =page.locator('a[href="/webERP/InternalStockRequestAuthorisation.php"]');
        this.fulfillInternalStockRequests =page.locator('a[href="/webERP/InternalStockRequestFulfill.php"]');
    }

    async clickInventory() {
    await this.utils.click(this.inventory);
    }
   
    async verifyReceivePurchaseOrders() {
    await this.utils.verifyVisible(this.receivePurchaseOrders);
    }

    async verifyInventoryTransferItemDispatch() {
    await this.utils.verifyVisible(this.inventoryTransferItemDispatch);
    }

    async verifyBulkInventoryTransferDispatch() {
    await this.utils.verifyVisible(this.bulkInventoryTransferDispatch);
    }
    
    async verifyBulkInventoryTransferReceive() {
    await this.utils.verifyVisible(this.bulkInventoryTransferReceive);
    }

  
    async verifyInventoryAdjustments() {
    await this.utils.verifyVisible(this.inventoryAdjustments);
    }

    async verifyReverseGoodsReceived() {
    await this.utils.verifyVisible(this.reverseGoodsReceived);
    }
   
    async verifyEnterStockCounts() {
    await this.utils.verifyVisible(this.enterStockCounts);
    }

    async verifyCreateNewInternalStockRequest() {
    await this.utils.verifyVisible(this.createNewInternalStockRequest);
    }
   
    async verifyAuthoriseInternalStockRequests() {
    await this.utils.verifyVisible(this.authoriseInternalStockRequests);
    }
 
    async verifyFulfillInternalStockRequests() {
    await this.utils.verifyVisible(this.fulfillInternalStockRequests);
    }
}

export default InventoryPage;

    
    