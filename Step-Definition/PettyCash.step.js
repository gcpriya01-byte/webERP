import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import PettyCashPage from '../Pages/PettyCashPage.js';
setDefaultTimeout(30000);

When('I click on Petty Cash', async function () {
this.pettyCashPage = new PettyCashPage(this.page);
await this.pettyCashPage.clickPettyCash();
});


Then('I should see Assign Cash to PC Tab', async function () {
await this.pettyCashPage.verifyAssignCashToPCTab();
});


Then('I should see Transfer Assigned Cash Between PC Tabs', async function () {
await this.pettyCashPage.verifyTransferAssignedCashBetweenPCTabs();
});


Then('I should see Claim Expenses From PC Tab', async function () {
await this.pettyCashPage.verifyClaimExpensesFromPCTab();
});


Then('I should see Authorise Expenses', async function () {
await this.pettyCashPage.verifyAuthoriseExpenses();
});

Then('I should see Authorise Assigned Cash', async function () {
await this.pettyCashPage.verifyAuthoriseAssignedCash();
});