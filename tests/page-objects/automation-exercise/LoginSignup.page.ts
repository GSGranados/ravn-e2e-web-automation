import Page from "../Page.js";
import reporter from "../../helper/reporter.js";
import { assert, expect } from "chai";
import constants from '../../../data/constants.json' assert {type: "json"};
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
    get loginEmailInputField() { return $('.login-form input[data-qa="login-email"]') }
    get loginPasswordInputField() { return $('.login-form input[data-qa="login-password"]') }
    get loginSubmitButton() { return $('.login-form button[data-qa="login-button"]') }
    get signupEmailAlreadyExistMessage() { return $('.signup-form p') }
    get loginEmailPasswordIncorrectMessage() { return $('.login-form p') }
    /**
     * @function verifyNewUserSignupMessage It makes a Chai assertion to validate the existence of the New User Signup Message
     * @param testId For Allure reporting purposes
     */
    async verifyNewUserSignupMessage(testId: string): Promise<void> {
        const reportingMessage = "New User signup message verified";
        try {
            const newUserSignUpMessage = await (await this.newUserSignupMessage).getText();
            assert.exists(await this.newUserSignupMessage, this.assertionErrorMessage);
            expect(newUserSignUpMessage).to.be.eq(constants.assertionTexts.newUserSignupMessage);
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
     * @function clickOnSignupSubmitButton It Clicks on the Sign up submit button
     * @param testId For Allure reporting purposes
     */
    async clickOnSignupSubmitButton(testId: string): Promise<void> {
        const reportingMessage = `Signup Submit Button Clicked`;
        try {
            await this.clickElement(await this.signupSubmitButton);
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
            const loginToYourAccountMessage = await (await this.loginToAccountMessage).getText();
            assert.exists(await this.loginToAccountMessage, this.assertionErrorMessage);
            expect(loginToYourAccountMessage).to.be.eq(constants.assertionTexts.loginToYourAccountMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterLoginEmail Sets the Value in the Login Email input field
     * @param testId For Allure reporting purposes
     * @param signupName Login Email to set into the Input
     */
    async enterLoginEmail(testId: string, loginEmail: string): Promise<void> {
        if (!loginEmail) throw Error(`Given Login Email: ${loginEmail} is not valid`);
        const reportingMessage = `${loginEmail} Set in the input field`;
        try {
            await this.typeIntoElement(await this.loginEmailInputField, loginEmail);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }
    /**
     * @function enterLoginPassword Sets the Value in the Login Password input field
     * @param testId For Allure reporting purposes
     * @param signupName Login Password to set into the Input
     */
    async enterLoginPassword(testId: string, loginPassword: string): Promise<void> {
        if (!loginPassword) throw Error(`Given Login Password: ${loginPassword} is not valid`);
        const reportingMessage = `${loginPassword} Set in the input field`;
        try {
            await this.typeIntoElement(await this.loginPasswordInputField, loginPassword);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }
    /**
     * @function clickOnLoginSubmitButton It Clicks on the Login submit button
     * @param testId For Allure reporting purposes
     */
    async clickOnLoginSubmitButton(testId: string): Promise<void> {
        const reportingMessage = `Login Submit Button Clicked`;
        try {
            await this.clickElement(await this.loginSubmitButton);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function verifyEmailAlreadyExistMessage It makes a Chai assertion to verify the existence and content of the error message
     * for an existing email
     * @param testId For Allure Reporting purposes
     */
    async verifyEmailAlreadyExistMessage(testId: string): Promise<void> {
        const reportingMessage = "Email Already Exist Message Verified";
        try {
            const signupEmailAlreadyExistMessage = await (await this.signupEmailAlreadyExistMessage).getText();
            assert.exists(await this.signupEmailAlreadyExistMessage, this.assertionErrorMessage);
            expect(signupEmailAlreadyExistMessage).to.be.eq(constants.assertionTexts.signupEmailAlreadyExistMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function verifyLoginEmailPasswordIncorrectMessage It makes a Chai assertion to verify the existence and content of the error message
     * for invalid credentials
     * @param testId For Allure Reporting purposes
     */
    async verifyLoginEmailPasswordIncorrectMessage(testId: string): Promise<void> {
        const reportingMessage = "Login Incorrect Email / Password Message Verified";
        try {
            const loginEmailPasswordIncorrectMessage = await (await this.loginEmailPasswordIncorrectMessage).getText();
            assert.exists(await this.loginEmailPasswordIncorrectMessage, this.assertionErrorMessage);
            expect(loginEmailPasswordIncorrectMessage).to.be.eq(constants.assertionTexts.loginEmailPasswordIncorrectMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

}

export default new LoginSingupPage();