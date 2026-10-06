
import Utils from '../Utils/Utils.js';
class PayablesPage {

    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);

        this.payables =page.getByText('Payables', { exact: true });
        this.selectVendor =page.locator("a[href='/webERP/SelectSupplier.php']").first();
        this.vendorAllocations =page.locator("a[href='/webERP/SupplierAllocations.php']");
    }
   
    async clickPayables() {
    await this.utils.click(this.payables);
    }
    
    async verifySelectVendor() {
    await this.utils.verifyVisible(this.selectVendor);
    }
    
    async verifyVendorAllocations() {
    await this.utils.verifyVisible(this.vendorAllocations);
    }
}

export default PayablesPage;
   