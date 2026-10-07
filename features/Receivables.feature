Feature: webERP Receivables Transactions

Scenario: Verify Receivable Transactions on Receivables page
Given I open the webERP application
When I login to webERP with valid credentials
Then I should see the Main Menu

When I click on Receivables
Then I should see the Receivables Transactions section
And I should see Select Order to Invoice
And I should see Create a Credit Note
And I should see Enter Customer Payments
And I should see Allocate Customer Payments or Credit Memos
