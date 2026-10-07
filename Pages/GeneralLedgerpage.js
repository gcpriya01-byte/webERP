import Utils from '../Utils/Utils.js';

class GeneralLedgerPage {

    constructor(page) {

        this.page = page;
        this.utils = new Utils(page);

      
        this.generalLedger = page.getByText('General Ledger',{ exact: true });
        this.bankAccountPaymentsEntry = page.locator('a[href="/webERP/Payments.php?NewPayment=Yes"]');
        this.bankAccountReceiptsEntry = page.locator('a[href="/webERP/CustomerReceipt.php?NewReceipt=Yes&Type=GL"]');
        this.importBankTransactions = page.locator('a[href="/webERP/ImportBankTrans.php"]');
        this.bankAccountPaymentsMatching = page.locator('a[href="/webERP/BankMatching.php?Type=Payments"]');
        this.bankAccountReceiptsMatching = page.locator('a[href="/webERP/BankMatching.php?Type=Receipts"]');
        this.journalEntry = page.locator('a[href="/webERP/GLJournal.php?NewJournal=Yes"]');
    }
   
    async clickGeneralLedger() {
    await this.utils.click(this.generalLedger);
    }

    async verifyBankAccountPaymentsEntry() {
    await this.utils.verifyVisible(this.bankAccountPaymentsEntry);
    }
    
    async verifyBankAccountReceiptsEntry() {
    await this.utils.verifyVisible(this.bankAccountReceiptsEntry);
    }
    
    async verifyImportBankTransactions() {
    await this.utils.verifyVisible(this.importBankTransactions);
    }

       async verifyBankAccountPaymentsMatching() {
    await this.utils.verifyVisible(this.bankAccountPaymentsMatching);
    }

    async verifyBankAccountReceiptsMatching() {
    await this.utils.verifyVisible(this.bankAccountReceiptsMatching);
    }
  
    async verifyJournalEntry() {
    await this.utils.verifyVisible(this.journalEntry);
    }
}

export default GeneralLedgerPage;