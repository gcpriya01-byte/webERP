import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import ManufacturingPage from '../Pages/ManufacturingPage.js';

setDefaultTimeout(30000);



When('I click on Manufacturing', async function () {
    this.manufacturingPage = new ManufacturingPage(this.page);
    await this.manufacturingPage.clickManufacturing();
});


Then('I should see Work Order Entry', async function () {
    await this.manufacturingPage.verifyWorkOrderEntry();
});



Then('I should see Select A Work Order', async function () {
    await this.manufacturingPage.verifySelectWorkOrder();
});


Then('I should see QA Samples and Test Results', async function () {
    await this.manufacturingPage.verifyQASamples();
});


Then('I should see Timesheet Entry', async function () {
    await this.manufacturingPage.verifyTimesheetEntry();
});