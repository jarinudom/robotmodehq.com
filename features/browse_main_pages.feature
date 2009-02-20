Feature: Browsing the main pages
  In order to find out more about Robot Mode LLC
  As a surfer
  I want to see the primary pages on the site
  
Scenario: Look at the homepage
  Given I am on the homepage
  Then I should see "Robot Mode LLC"

Scenario: Look at the Robot Mailer page
  Given I am on the homepage
  When I follow "But wait, there's more..."
  Then I should see "Robot Mailer"
  
Scenario: Go to Basecamp
  Given I am on the homepage
  When I follow "client login"
  Then I should see "Robot Mode LLC"
  
Scenario: Go to the Robot Mailer login page
  Given I am on the homepage
  When I follow "robot mailer login"
  Then I should see "Robot Mailer"