Feature: Create Mailer account
  In order to try out Robot Mailer
  As a potential customer
  I want to create a free account
  
Scenario: Sign up for a free account
  Given I am on the Robot Mailer signup page
    And no MailerSignup with email "test@example.com" exists
  When I fill in "mailer_signup[email]" with "test@example.com"
    And I fill in "mailer_signup_company_name" with "My Company"
    And I fill in "mailer_signup_contact_name" with "Testo Jones"
    And I select "United States of America" from "mailer_signup_country"
    And I select "(GMT-08:00) Pacific Time (US &amp; Canada)" from "mailer_signup_timezone"
    And I press "mailer_signup_submit"
  Then a MailerSignup with email "test@example.com" should exist