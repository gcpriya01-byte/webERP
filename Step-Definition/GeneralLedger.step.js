import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import GeneralLedgerPage from '../Pages/GeneralLedgerPage.js';
setDefaultTimeout(30000);


When('I click on General Ledger', async function () {
this.generalLedgerPage = new GeneralLedgerPage(this.page);
await this.generalLedgerPage.clickGeneralLedger();
});

Then('I should see Bank Account Payments Entry', async function () {
await this.generalLedgerPage.verifyBankAccountPaymentsEntry();
});

Then('I should see Bank Account Receipts Entry', async function () {
 await this.generalLedgerPage.verifyBankAccountReceiptsEntry();

});

Then('I should see Import Bank Transactions', async function () {
await this.generalLedgerPage.verifyImportBankTransactions();
});


Then('I should see Bank Account Payments Matching', async function () {
await this.generalLedgerPage.verifyBankAccountPaymentsMatching();
});


Then('I should see Bank Account Receipts Matching', async function () {
await this.generalLedgerPage.verifyBankAccountReceiptsMatching();
});


Then('I should see Journal Entry', async function () {
await this.generalLedgerPage.verifyJournalEntry();

});