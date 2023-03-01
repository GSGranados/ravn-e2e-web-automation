import Page from "../Page.js";
import reporter from "../../helper/reporter.js";
import { assert } from "chai";
class LoginSingupPage extends Page {
    constructor() {
        super();
    }

    /**Locator Strategies */
    get newUserSignupMessage() { return $('.signup-form h2') }
    get signupNameInputField() { return $('.signup-form input[data-qa="signup-name"]') }
    get signupEmailInputField() { return $('.signup-form input[data-qa="signup-email"]') }
    get signupSubmitButton() { return $('.signup-form button[data-qa="signup-button"]') }
    get loginToAccountMessage() { return $('.login-form h2') }

    /**
     * @function verifyNewUserSignupMessage It makes a Chai assertion to validate the existence of the New User Signup Message
     * @param testId For Allure reporting purposes
     */
    async verifyNewUserSignupMessage(testId: string): Promise<void> {
        const reportingMessage = "New User signup message verified";
        try {
            assert.exists(await this.newUserSignupMessage, this.assertionErrorMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupName Sets the Value in the Sign up Name input field
     * @param testId For Allure reporting purposes
     * @param signupName Signup name to set into the Input
     */
    async enterSignupName(testId: string, signupName: string): Promise<void> {
        if (!signupName) throw Error(`Given Signup Name: ${signupName} is not valid`);
        const reportingMessage = `${signupName} Set in the input field`;
        try {
            await this.typeIntoElement(await this.signupNameInputField, signupName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignUpEmail Sets the Value in the Sign up Email input field
     * @param testId For Allure reporting purposes
     * @param signupEmail Signup Email to set into the Input
     */
    async enterSignUpEmail(testId: string, signupEmail: string): Promise<void> {
        if (!signupEmail) throw Error(`Given Signup Email: ${signupEmail} is not valid`);
        const reportingMessage = `${signupEmail} Set in the input field`;
        try {
            await this.typeIntoElement(await this.signupEmailInputField, signupEmail);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function verifyLoginToAccountMessage It makes a Chai assertion to validate the existence of the Login To Account Message
     * @param testId For Allure reporting purposes
     */
    async verifyLoginToAccountMessage(testId: string): Promise<void> {
        const reportingMessage = "Login To Account Message verified";
        try {
            assert.exists(await this.loginToAccountMessage, this.assertionErrorMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }
}

export default new LoginSingupPage();