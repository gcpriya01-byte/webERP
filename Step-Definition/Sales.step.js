
import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import SalesPage from '../Pages/SalesPage.js';
setDefaultTimeout(30000);


When('I click on Sales', async function () {
    this.salesPage = new SalesPage(this.page);
    await this.salesPage.clickSales();
});

Then('I should see the Transactions section', async function () {
await this.salesPage.verifyTransactions();
});

Then('I should see New Sales Order or Quotation', async function () {
await this.salesPage.verifyNewSalesOrder();
});

Then('I should see Enter Counter Sales', async function () {
await this.salesPage.verifyCounterSales();
});

Then('I should see Enter Counter Returns', async function () {
await this.salesPage.verifyCounterReturns();
});

Then('I should see Generate Print Picking Lists', async function () {
await this.salesPage.verifyGeneratePrintPickingLists();
});

Then('I should see Outstanding Sales Orders Quotations', async function () {
await this.salesPage.verifyOutstandingSalesOrders();
});

Then('I should see Special Order', async function () {
await this.salesPage.verifySpecialOrder();
});

Then('I should see Recurring Order Template', async function () {
await this.salesPage.verifyRecurringOrderTemplate();
});


Then('I should see Process Recurring Orders', async function () {
await this.salesPage.verifyProcessRecurringOrders();
});

Then('I should see Maintain Picking Lists', async function () {
await this.salesPage.verifyMaintainPickingLists();

});

