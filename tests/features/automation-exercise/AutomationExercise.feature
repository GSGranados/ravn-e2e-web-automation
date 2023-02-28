Feature: E2E Web Test Automation - RAVN Code Challenge

    As a User a I want to be able to log in to the Automation Exercise platform, go to the Login/Signup page, register a user, being able to log in with that
    User and have the ability to delete the account created

    Scenario Outline: <TestID>: E2E Web Test Automation - Account Creation, Login and Deletion
        Given The Browser Launched and navigated to the Automation Exercise Page
        And Verified that home page is visible
        When User Clicks on Signup / Login button
        Then Verify "New User Signup!" is visible
        When Enter <FirstName> and <Email> address
        And Click Signup button
        Then Verify that "ENTER ACCOUNT INFORMATION" is visible
        When Fill details: <Title>, <FirstName>, <Email>, <Password>, <Date> of birth
        And Select checkbox Sign up for our newsletter!
        And Select checkbox Receive special offers from our partners!
        When Fill details: <FirstName>, Last <LastName>, <Company>, <Address>, <SecondAddress>, <Country>, <State>, <City>, <ZipCode>, <MobileNumber>
        And Click Create Account button
        Then Verify that "ACCOUNT CREATED!" is visible
        When Click Continue button
        Then Verify that Logged in as <FirstName> is visible
        When Click Logout button
        Then Verify <LoginToYourAccountText> is visible
        When Enter correct <Email> address and <Password>
        And Click login button
        Then Verify that Logged in as <FirstName> is visible
        When Click Delete Account button
        Then Verify that "ACCOUNT DELETED!" message is visible

        Examples:
            | TestID  | FirstName | LastName | Email          | Title | Password | Date       | Company       | Address     | SecondAddress | Country   | State | City         | ZipCode  | MobileNumber |
            | E2E_001 | Steven    | Granados | email@mail.com | 1     | 123456   | 11-02-1996 | RAVN Software | Test Addr 1 | Test Addr 2   | Singapore | S.S   | San Salvador | CP 11001 | 77777777     |