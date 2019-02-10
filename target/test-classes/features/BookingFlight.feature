Feature: Testing Register link functionlaity in Flight page
Scenario: Checking the Register link on Home page 
    Given I Open Mercury Flight Application
    When Click on the Register link in the Home page
    And Enter details in Registeration page
    And Click on Flights link
    Then FLight booking