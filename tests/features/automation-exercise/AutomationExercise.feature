Feature: E2E Web Test Automation - RAVN Code Challenge

    As a User a I want to be able to log in to the Automation Exercise platform, go to the Login/Signup page, register a user, being able to log in with that
    User and have the ability to delete the account created

    @automation-exercise
    Scenario Outline: <TestID>: E2E Web Test Automation - Account Creation, Login and Deletion
        Given The Browser Launched and navigated to the Automation Exercise Page
        Then User Verifies that home page is visible
        When User Clicks on Signup Login button
        Then User Verifies "New User Signup!" is visible
        When User Enters <FirstName> and <Email> address
        When User Clicks on Signup button
        Then Verify that "ENTER ACCOUNT INFORMATION" is visible
        When User Fills the Required Details: <Title>, <FirstName>, <Email>, <Password>, and <Date> of birth
        * Select checkbox Sign up for our newsletter!
        * Select checkbox Receive special offers from our partners!
        * User Fills Address details: <FirstName>, <LastName>, <Company>, <Address>, <SecondAddress>, <Country>, <State>, <City>, <ZipCode>, <MobileNumber>
        * User Clicks Create Account button
        Then Verify that "ACCOUNT CREATED!" is visible
        When Click on Continue button
        Then Verify that Logged in as <FirstName> is visible
        When Click on Logout button
        Then Verify "Login to your account" is visible
        When User Enters <Email> address and <Password>
        * User Clicks on login button
        Then Verify that Logged in as <FirstName> is visible
        When Click Delete Account button
        Then Verify that "ACCOUNT DELETED!" message is visible

        Examples:
            | TestID  | FirstName | LastName | Email           | Title | Password | Date            | Company       | Address     | SecondAddress | Country   | State | City         | ZipCode  | MobileNumber |
            | E2E_001 | Steven    | Granados | steven@mail.com | Mr    | 123456   | 2-November-1996 | RAVN Software | Test Addr 1 | Test Addr 2   | Singapore | S.S   | San Salvador | CP 11001 | 77777777     |