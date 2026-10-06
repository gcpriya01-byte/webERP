Feature: webERP General Ledger Transactions

  Scenario: Verify General Ledger Transactions

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on General Ledger
    And I should see Bank Account Payments Entry
    And I should see Bank Account Receipts Entry
    And I should see Import Bank Transactions
    And I should see Bank Account Payments Matching
    And I should see Bank Account Receipts Matching
    And I should see Journal Entry