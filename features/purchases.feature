Feature: webERP Purchases Transactions

  Scenario: Verify Purchases Transactions on the Purchases page

    Given I open the webERP application
    When I login to webERP with valid credentials
    Then I should see the Main Menu
    When I click on Purchases
    And I should see New Purchase Order
    And I should see Purchase Orders
    And I should see Purchase Order Grid Entry
    And I should see Create a New Tender
    And I should see Edit Existing Tenders
    And I should see Process Tenders and Offers
    And I should see Orders to Authorise
    And I should see Shipment Entry
    And I should see Select A Shipment