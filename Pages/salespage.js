import Utils from '../Utils/Utils.js';

class SalesPage {

    constructor(page) {

        this.page = page;
        this.utils = new Utils(page);

        this.salesMenu = page.locator('a[href="index.php?Application=Sales"]');
        this.transactions = page.getByText('Transactions', { exact: true });
        this.newSalesOrder = page.locator('a[href="/webERP/SelectOrderItems.php?NewOrder=Yes"]');
        this.enterCounterSales = page.locator('a[href="/webERP/CounterSales.php"]');
        this.enterCounterReturns = page.locator('a[href="/webERP/CounterReturns.php"]');
        this.generatePrintPickingLists = page.locator('a[href="/webERP/GeneratePickingList.php"]');
        this.outstandingSalesOrders = page.locator('a[href="/webERP/SelectSalesOrder.php"]');
        this.specialOrder = page.locator('a[href="/webERP/SpecialOrder.php"]');
        this.recurringOrderTemplate = page.locator('a[href="/webERP/SelectRecurringSalesOrder.php"]');
        this.processRecurringOrders = page.locator('a[href="/webERP/RecurringSalesOrdersProcess.php"]');
        this.maintainPickingLists = page.locator('a[href="/webERP/SelectPickingLists.php"]');
    }
   
     async clickSales() {
    await this.utils.click(this.salesMenu);
    }

    async verifyTransactions() {
    await this.utils.verifyVisible(this.transactions);
    }

    async verifyNewSalesOrder() {
    await this.utils.verifyVisible(this.newSalesOrder);
    }

    async verifyCounterSales() {
    await this.utils.verifyVisible(this.enterCounterSales);
    }

    async verifyCounterReturns() {
    await this.utils.verifyVisible(this.enterCounterReturns);
    }

    async verifyGeneratePrintPickingLists() {
    await this.utils.verifyVisible(this.generatePrintPickingLists);
    }

    async verifyOutstandingSalesOrders() {
    await this.utils.verifyVisible(this.outstandingSalesOrders);
    }

    async verifySpecialOrder() {
    await this.utils.verifyVisible(this.specialOrder);
    }

    async verifyRecurringOrderTemplate() {
    await this.utils.verifyVisible(this.recurringOrderTemplate);
    }

    async verifyProcessRecurringOrders() {
    await this.utils.verifyVisible(this.processRecurringOrders);
    }

    async verifyMaintainPickingLists() {
    await this.utils.verifyVisible(this.maintainPickingLists);
    }
}

export default SalesPage;