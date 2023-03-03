import { When, Then, Given } from "@wdio/cucumber-framework";
import HomePage from "../../page-objects/automation-exercise/HomePage.page.js";
import LoginSignupPage from "../../page-objects/automation-exercise/LoginSignup.page.js";
import SignupPage from "../../page-objects/automation-exercise/SignupPage.page.js";
import ConfirmationPage from "../../page-objects/automation-exercise/ConfirmationPage.page.js";
Given(/^The Browser Launched and navigated to the Automation Exercise Page$/, async function () {
    await HomePage.navigateToURL(browser.options.baseUrl);
});

Then(/^User Verifies that home page is visible$/, async function () {
    await HomePage.verifyHomePageIsVisible(this.testid);
});

When(/^User Clicks on Signup Login button$/, async function () {
    await HomePage.clickOnSignupLoginButton(this.testid);
});

Then(/^User Verifies "New User Signup!" is visible$/, async function () {
    await LoginSignupPage.verifyNewUserSignupMessage(this.testid);
});

When(/^User Enters (.*) and (.*) address$/, async function (firstName: string, email: string) {
    await LoginSignupPage.enterSignupName(this.testid, firstName);
    await LoginSignupPage.enterSignUpEmail(this.testid, email);
});
When(/^User Clicks on Signup button$/, async function () {
    await LoginSignupPage.clickOnSignupSubmitButton(this.testid);

});
Then(/^Verify that "ENTER ACCOUNT INFORMATION" is visible$/, async function () {
    await SignupPage.verifyEnterAccountInformationMessage(this.testid);
});
When(/^User Fills the Required Details: (.*), (.*), (.*), (.*), and (.*) of birth$/, async function (title: string, firstName: string, email: string, password: string, dateBirth: string) {
    await SignupPage.selectAccountTitle(this.testid, title);
    await SignupPage.enterSingupName(this.testid, firstName);
    await SignupPage.verifySingupEmail(this.testid, email);
    await SignupPage.enterSingupPassword(this.testid, password);
    await SignupPage.setSignUpDateOfBirth(this.testid, dateBirth);
});
When(/^Select checkbox Sign up for our newsletter!$/, async function () {
    await SignupPage.clickOnSignupNewsletterCheckbox(this.testid);
});
When(/^Select checkbox Receive special offers from our partners!$/, async function () {
    await SignupPage.clickOnSignupSpecialOffersCheckbox(this.testid);
});
When(/^User Fills Address details: (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)$/, async function (firstName: string, lastName: string, company: string, address: string, secondAddress: string, country: string, state: string, city: string, zipCode: string, mobileNumber: string) {
    await SignupPage.enterSingupAddressFirstName(this.testid, firstName);
    await SignupPage.enterSignupAddressLastName(this.testid, lastName);
    await SignupPage.enterSignupAddressCompany(this.testid, company);
    await SignupPage.enterSignupAddress(this.testid, address);
    await SignupPage.enterSignupSecondAddress(this.testid, secondAddress);
    await SignupPage.selectSignupCountry(this.testid, country);
    await SignupPage.enterSignupAddressState(this.testid, state);
    await SignupPage.enterSignupAddressCity(this.testid, city);
    await SignupPage.enterSignupAddressZipCode(this.testid, zipCode);
    await SignupPage.enterSignupAddressMobileNumber(this.testid, mobileNumber);
});
When(/^User Clicks Create Account button$/, async function () {
    await SignupPage.clickOnCreateAccountButton(this.testid);
});
Then(/^Verify that "ACCOUNT CREATED!" is visible$/, async function () {
    await ConfirmationPage.verifyAccountCreatedMessage(this.testid);
});

When(/^Click on Continue button$/, async function () {
    await ConfirmationPage.clickOnContinueButton(this.testid);
    await ConfirmationPage.verifyHeadlessMode(this.testid);
});

Then(/^Verify that Logged in as (.*) is visible$/, async function (firstName: string) {
    await HomePage.verifyLoginAsUsernameMessage(this.testid, firstName)
});

When(/^Click on Logout button$/, async function () {
    await HomePage.clickOnLogoutButton(this.testid);
});
Then(/^Verify "Login to your account" is visible$/, async function () {
    await LoginSignupPage.verifyLoginToAccountMessage(this.testid);
});
When(/^User Enters (.*) address and (.*)$/, async function (email: string, password: string) {
    await LoginSignupPage.enterLoginEmail(this.testid, email);
    await LoginSignupPage.enterLoginPassword(this.testid, password);
});
When(/^User Clicks on login button$/, async function () {
    await LoginSignupPage.clickOnLoginSubmitButton(this.testid);
});
When(/^Click Delete Account button$/, async function () {
    await HomePage.clickOnDeleteAccountButton(this.testid);
});
Then(/^Verify that "ACCOUNT DELETED!" message is visible$/, async function () {
    await ConfirmationPage.verifyAccountDeletedMessage(this.testid);
});