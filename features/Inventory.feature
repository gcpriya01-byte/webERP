Feature: webERP Inventory Transactions

  Scenario: Verify Inventory Transactions on the Inventory page

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on Inventory
    And I should see Receive Purchase Orders
    And I should see Inventory Transfer - Item Dispatch
    And I should see Bulk Inventory Transfer - Dispatch
    And I should see Bulk Inventory Transfer - Receive
    And I should see Inventory Adjustments
    And I should see Reverse Goods Received
    And I should see Enter Stock Counts
    And I should see Create a New Internal Stock Request
    And I should see Authorise Internal Stock Requests
    And I should see Fulfill Internal Stock Requests