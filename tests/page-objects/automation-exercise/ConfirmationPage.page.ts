import Page from "../Page.js";
import reporter from "../../helper/reporter.js";
import { assert } from "chai";
class ConfirmationPage extends Page {
    constructor() {
        super();
    }

    //Locator Strategies
    get accountCreatedMessage() { return $('h2[data-qa="account-created"] b') }
    get continueButton() { return $('a[data-qa="continue-button"]') }
    get accountDeletedMessage() { return $('h2[data-qa="account-deleted"] b') }


    /**
     * @function verifyAccountCreatedMessage It makes a Chai assertion to validate the existence of the Account Created Message
     * @param testId For Allure reporting purposes
     */
    async verifyAccountCreatedMessage(testId: string): Promise<void> {
        const reportingMessage = "Account Created Message Verified";
        try {
            assert.exists(await this.accountCreatedMessage, this.assertionErrorMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function clickOnContinueButton It clicks on the Continue Button in the Confirmation Page
     * @param testId For Allure reporting purposes
     */
    async clickOnContinueButton(testId: string): Promise<void> {
        const reportingMessage = "Continue Button Clicked";
        try {
            await this.clickElement(await this.continueButton);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function verifyAccountDeletedMessage It makes a Chai assertion to validate the existence of the Account Deleted Message
     * @param testId For Allure reporting purposes
     */
    async verifyAccountDeletedMessage(testId: string): Promise<void> {
        const reportingMessage = "Account Deleted Message Verified";
        try {
            assert.exists(await this.accountDeletedMessage, this.assertionErrorMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

}

export default new ConfirmationPage();