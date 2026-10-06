Feature: webERP Utilities

  Scenario: Verify Utilities

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on Utilities
    Then I should see Change A Customer Code
    And I should see Change A Customer Branch Code
    And I should see Change A GL Account Code
    And I should see Change An Inventory Item Code
    And I should see Change A Location Code
    And I should see Change A Salesman Code
    And I should see Change A Stock Category Code
    And I should see Change A Supplier Code
    And I should see Translate Item Descriptions
    And I should see Update costs for all BOM items, from the bottom up
    And I should see Re-apply costs to Sales Analysis
    And I should see Delete sales transactions
    And I should see Reverse all supplier payments on a specified date
    And I should see Update sales analysis with latest customer data
    And I should see Copy Authority of GL Accounts from one user to another