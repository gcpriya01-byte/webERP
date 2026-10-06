import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

setDefaultTimeout(30000);


When('I click on General Ledger', async function () 
{await this.page.getByText('General Ledger', { exact: true }).click();
});

Then('I should see Bank Account Payments Entry', async function () {
await expect(this.page.locator('a[href="/webERP/Payments.php?NewPayment=Yes"]')).toBeVisible();
});

Then('I should see Bank Account Receipts Entry', async function () {
await expect(this.page.locator('a[href="/webERP/CustomerReceipt.php?NewReceipt=Yes&Type=GL"]')).toBeVisible();
});

Then('I should see Import Bank Transactions', async function () {
await expect(this.page.locator('a[href="/webERP/ImportBankTrans.php"]')).toBeVisible();
});

Then('I should see Bank Account Payments Matching', async function () {
await expect(this.page.locator('a[href="/webERP/BankMatching.php?Type=Payments"]')).toBeVisible();
});

Then('I should see Bank Account Receipts Matching', async function () {
await expect(this.page.locator('a[href="/webERP/BankMatching.php?Type=Receipts"]')).toBeVisible();
});

Then('I should see Journal Entry', async function () {
await expect( this.page.locator('a[href="/webERP/GLJournal.php?NewJournal=Yes"]')).toBeVisible();
});