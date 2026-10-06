Feature: webERP Pyables Transactions

  Scenario: Verify Payables Transactions on the Payables page

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on Payables
    And I should see Select Vendor
    And I should see Vendor Allocations