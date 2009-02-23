Feature: Create Mailer account
  In order to try out Robot Mailer
  As a potential customer
  I want to create a free account
  
Scenario: Sign up for a free account
  Given I am on the Robot Mailer product page
    And no MailerSignup with email "test@example.com" exists
  When I fill in "create_email" with "test@example.com"
    And I fill in "create_password" with "test123"
    And I press "Create Account"
  Then a MailerSignup with email "test@example.com" should exist