

    import Utils from '../Utils/Utils.js';

    class ReceivablesPage {

    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);
    
        this.receivables =page.getByText('Receivables', { exact: true });
        this.transactions =page.getByText('Transactions', { exact: true });
        this.selectOrderToInvoice =page.locator("a[href='/webERP/SelectSalesOrder.php']");
        this.createCreditNote =page.locator('a[href="/webERP/SelectCreditItems.php?NewCredit=Yes"]');
        this.enterCustomerPayments =page.locator("a[href='/webERP/CustomerReceipt.php?NewReceipt=Yes&Type=Customer']");
        this.allocateCustomerPayments =page.locator("a[href='/webERP/CustomerAllocations.php']");
    }

     async clickReceivables() {
    await this.utils.click(this.receivables);
    }

    async verifyTransactions() {
    await this.utils.verifyVisible(this.transactions);
    }

    async verifySelectOrderToInvoice() {
    await this.utils.verifyVisible(this.selectOrderToInvoice);
    }

    async verifyCreateCreditNote() {
    await this.utils.verifyVisible(this.createCreditNote);
    }

    async verifyEnterCustomerPayments() {
    await this.utils.verifyVisible(this.enterCustomerPayments);
    }

    async verifyAllocateCustomerPayments() {
    await this.utils.verifyVisible(this.allocateCustomerPayments);
    }
}

export default ReceivablesPage;