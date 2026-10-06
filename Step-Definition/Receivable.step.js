import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import ReceivablesPage from '../Pages/ReceivablesPage.js';

setDefaultTimeout(30000);

When('I click on Receivables', async function () {
this.receivablesPage = new ReceivablesPage(this.page);
await this.receivablesPage.clickReceivables();
});

Then('I should see the Receivables Transactions section', async function () {
await this.receivablesPage.verifyTransactions();
});

Then('I should see Select Order to Invoice', async function () {
await this.receivablesPage.verifySelectOrderToInvoice();
});

Then('I should see Create a Credit Note', async function () {
await this.receivablesPage.verifyCreateCreditNote();
});

Then('I should see Enter Customer Payments', async function () {
await this.receivablesPage.verifyEnterCustomerPayments();
});

Then('I should see Allocate Customer Payments or Credit Memos', async function () {
await this.receivablesPage.verifyAllocateCustomerPayments();

});