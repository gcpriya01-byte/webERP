import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import PayablesPage from '../Pages/PayablesPage.js';
setDefaultTimeout(30000);


When('I click on Payables', async function () {
this.payablesPage = new PayablesPage(this.page);
await this.payablesPage.clickPayables();
});

Then('I should see Select Vendor', async function () {
await this.payablesPage.verifySelectVendor();
});

Then('I should see Vendor Allocations', async function () {
await this.payablesPage.verifyVendorAllocations();
});