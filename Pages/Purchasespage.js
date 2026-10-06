import Utils from '../Utils/Utils.js';

class PurchasesPage {

    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);       
        this.purchases =page.getByText('Purchases', { exact: true });
        this.newPurchaseOrder = page.locator("a[href='/webERP/PO_Header.php?NewOrder=Yes']");
        this.purchaseOrders = page.locator("a[href='/webERP/PO_SelectOSPurchOrder.php']");
        this.purchaseOrderGridEntry =page.locator("a[href='/webERP/PurchaseByPrefSupplier.php']");
        this.createNewTender = page.locator("a[href='/webERP/SupplierTenderCreate.php?New=Yes']");
        this.editExistingTenders =page.locator("a[href='/webERP/SupplierTenderCreate.php?Edit=Yes']");
        this.processTendersAndOffers =page.locator( "a[href='/webERP/OffersReceived.php']");
        this.ordersToAuthorise = page.locator("a[href='/webERP/PO_AuthoriseMyOrders.php']" );
        this.shipmentEntry = page.locator("a[href='/webERP/SelectSupplier.php']");
        this.selectAShipment =page.locator("a[href='/webERP/Shipt_Select.php']");
    }

    async clickPurchases() {
    await this.utils.click(this.purchases);
    }
   
    async verifyNewPurchaseOrder() {
    await this.utils.verifyVisible(this.newPurchaseOrder);
    }
   
    async verifyPurchaseOrders() {
    await this.utils.verifyVisible(this.purchaseOrders);
    }

    async verifyPurchaseOrderGridEntry() {
    await this.utils.verifyVisible(this.purchaseOrderGridEntry);
    }

    async verifyCreateNewTender() {
    await this.utils.verifyVisible(this.createNewTender);
    }

    async verifyEditExistingTenders() {
    await this.utils.verifyVisible(this.editExistingTenders);
    }

    async verifyProcessTendersAndOffers() {
    await this.utils.verifyVisible(this.processTendersAndOffers);
    }
   
    async verifyOrdersToAuthorise() {
    await this.utils.verifyVisible(this.ordersToAuthorise);
    }

   
    async verifyShipmentEntry() {
    await this.utils.verifyVisible(this.shipmentEntry);
    }
    
    async verifySelectAShipment() {
    await this.utils.verifyVisible(this.selectAShipment);
    }
}

export default PurchasesPage;