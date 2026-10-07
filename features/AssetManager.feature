Feature: webERP Asset Manager

  Scenario: Verify Asset Manager Transactions

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    
    When I click on Asset Manager   
    And I should see Add a new Asset
    And I should see Select an Asset
    And I should see Change Asset Location
    And I should see Depreciation Journal