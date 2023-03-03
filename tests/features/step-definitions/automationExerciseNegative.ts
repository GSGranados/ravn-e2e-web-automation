import { Then } from "@wdio/cucumber-framework";
import LoginSignupPage from "../../page-objects/automation-exercise/LoginSignup.page.js";

Then(/^Verify that "Email Address already exist!" is visible$/, async function () {
    await LoginSignupPage.verifyEmailAlreadyExistMessage(this.testid);
});
Then(/^Verify that "Your email or password is incorrect!" is visible$/, async function () {
    await LoginSignupPage.verifyLoginEmailPasswordIncorrectMessage(this.testid);
});