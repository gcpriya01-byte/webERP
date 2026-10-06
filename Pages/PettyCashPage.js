import Utils from '../Utils/Utils.js';

class PettyCashPage {
    constructor(page) {

        this.page = page;
        this.utils = new Utils(page);

        this.pettyCash = page.getByText('Petty Cash',{ exact: true });
        this.assignCashToPCTab = page.locator('a[href="/webERP/PcAssignCashToTab.php"]');
        this.transferAssignedCashBetweenPCTabs = page.locator('a[href="/webERP/PcAssignCashTabToTab.php"]');
        this.claimExpensesFromPCTab = page.locator('a[href="/webERP/PcClaimExpensesFromTab.php"]');
        this.authoriseExpenses = page.locator('a[href="/webERP/PcAuthorizeExpenses.php"]');
        this.authoriseAssignedCash = page.locator('a[href="/webERP/PcAuthorizeCash.php"]');
    }

    async clickPettyCash() {
    await this.utils.click(this.pettyCash);
    }

    async verifyAssignCashToPCTab() {
    await this.utils.verifyVisible(this.assignCashToPCTab);
    }
   
    async verifyTransferAssignedCashBetweenPCTabs() {
    await this.utils.verifyVisible(this.transferAssignedCashBetweenPCTabs);
    }
    
    async verifyClaimExpensesFromPCTab() {
    await this.utils.verifyVisible(this.claimExpensesFromPCTab);
    }
   
    async verifyAuthoriseExpenses() {
    await this.utils.verifyVisible(this.authoriseExpenses);
    }
    
    async verifyAuthoriseAssignedCash() {
    await this.utils.verifyVisible(this.authoriseAssignedCash);
    }
}

export default PettyCashPage;