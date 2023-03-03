Feature: E2E Web Test Automation - RAVN Code Challenge - Negative Scenarios

    As a User a I want to be able to stop a user from logging in with inexistent credentials to the platform and being able to determine whether an
    Email has already been used to create an Account

    @automation-exercise-negative
    Scenario Outline: <TestID>: E2E Web Test Automation - Signup with existent email
        Given The Browser Launched and navigated to the Automation Exercise Page
        Then User Verifies that home page is visible
        When User Clicks on Signup Login button
        Then User Verifies "New User Signup!" is visible
        When User Enters <FirstName> and <Email> address
        When User Clicks on Signup button
        Then Verify that "Email Address already exist!" is visible

        Examples:
            | TestID      | FirstName | Email         |
            | E2E_NEG_001 | Steven    | test@mail.com |

    @automation-exercise-negative
    Scenario Outline: <TestID>: E2E Web Test Automation - Login with invalid credentials
        Given The Browser Launched and navigated to the Automation Exercise Page
        Then User Verifies that home page is visible
        When User Clicks on Signup Login button
        Then Verify "Login to your account" is visible
        When User Enters <Email> address and <Password>
        * User Clicks on login button
        Then Verify that "Your email or password is incorrect!" is visible

        Examples:
            | TestID      | Password           | Email                         |
            | E2E_NEG_002 | inexistentPassword | inexistent@mailinexistent.com |