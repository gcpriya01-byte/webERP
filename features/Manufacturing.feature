Feature: webERP Manufacturing Transactions

  Scenario: Verify Manufacturing Transactions on the Manufacturing page

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on Manufacturing
    And I should see Work Order Entry
    And I should see Select A Work Order
    And I should see QA Samples and Test Results
    And I should see Timesheet Entry