Feature: webERP Sales Transactions

Scenario: Verify Sales Transactions on the Sales page
    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on Sales
    Then I should see the Transactions section
    And I should see New Sales Order or Quotation
    And I should see Enter Counter Sales
    And I should see Enter Counter Returns
    And I should see Generate Print Picking Lists
    And I should see Outstanding Sales Orders Quotations
    And I should see Special Order
    And I should see Recurring Order Template
    And I should see Process Recurring Orders
    And I should see Maintain Picking Lists