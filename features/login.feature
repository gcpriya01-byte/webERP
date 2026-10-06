

Feature: webERP Login

  Scenario: Verify webERP login with valid credentials

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu



