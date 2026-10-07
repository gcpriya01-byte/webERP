import Utils from '../Utils/Utils.js';

class ManufacturingPage {

    constructor(page) {

        this.page = page;
        this.utils = new Utils(page);

        this.manufacturing = page.getByText('Manufacturing', { exact: true });
        this.workOrderEntry = page.locator('a[href="/webERP/WorkOrderEntry.php"]');
        this.selectWorkOrder = page.locator('a[href="/webERP/SelectWorkOrder.php"]').first();
        this.qaSamples = page.locator('a[href="/webERP/SelectQASamples.php"]');
        this.timesheetEntry = page.locator('a[href="/webERP/Timesheets.php"]');
    }

    async clickManufacturing() {
    await this.utils.click(this.manufacturing);
    }

    async verifyWorkOrderEntry() {
    await this.utils.verifyVisible(this.workOrderEntry);
    }

    async verifySelectWorkOrder() {
    await this.utils.verifyVisible(this.selectWorkOrder);
    }

    async verifyQASamples() {
    await this.utils.verifyVisible(this.qaSamples);
    }

    async verifyTimesheetEntry() {
    await this.utils.verifyVisible(this.timesheetEntry);
    }
}

export default ManufacturingPage;