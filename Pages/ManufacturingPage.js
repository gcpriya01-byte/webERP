
import Utils from '../Utils/Utils.js';

class ManufacturingPage {

    constructor(page) {

        this.page = page;
         this.utils = new Utils(page);

    
        this.utils = new Utils(page);
        this.manufacturing =page.getByText('Manufacturing', { exact: true });
        this.workOrderEntry =page.locator('a[href="/webERP/WorkOrderEntry.php"]');
        this.selectWorkOrder =page.locator('a[href="/webERP/SelectWorkOrder.php"]').first();
        this.qaSamples = page.locator('a[href="/webERP/SelectQASamples.php"]');     
        this.timesheetEntry = page.locator('a[href="/webERP/Timesheets.php"]');

    }
   
    
    async clickManufacturing() {
    await this.utils.click(this.manufacturing);
    }
   
    async verifyTransactions() {
    await this.utils.verifyVisible(this.transactions);
    }
  
    async verifyWorkOrderEntry() {
    await this.utils.verifyVisible(this.workOrderEntry);
    }
    
    async verifyWorkOrderInquiry() {
    await this.utils.verifyVisible(this.workOrderInquiry);
    }
   
    async verifyWorkOrderIssue() {
    await this.utils.verifyVisible(this.workOrderIssue);
    }
    
    async verifyWorkOrderReceipt() {
    await this.utils.verifyVisible(this.workOrderReceipt);
    }
    
    async verifyWorkOrderCosting() {
    await this.utils.verifyVisible(this.workOrderCosting);
    }
}

export default ManufacturingPage;