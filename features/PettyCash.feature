Feature: webERP Petty Cash

  Scenario: Verify Petty Cash Transactions

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on Petty Cash
    And I should see Assign Cash to PC Tab
    And I should see Transfer Assigned Cash Between PC Tabs
    And I should see Claim Expenses From PC Tab
    And I should see Authorise Expenses
    And I should see Authorise Assigned Cash