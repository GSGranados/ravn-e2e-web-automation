import Page from "../Page.js";
import reporter from "../../helper/reporter.js";
import { assert, expect } from "chai";
import constants from '../../../data/constants.json' assert {type: "json"};
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
            const accountCreatedMessage = await (await this.accountCreatedMessage).getText();
            assert.exists(await this.accountCreatedMessage, this.assertionErrorMessage);
            expect(accountCreatedMessage).to.be.eq(constants.assertionTexts.accountCreatedMessage);
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
            const accountDeletedMessage = await (await this.accountDeletedMessage).getText();
            assert.exists(await this.accountDeletedMessage, this.assertionErrorMessage);
            expect(accountDeletedMessage).to.be.eq(constants.assertionTexts.accountDeletedMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function verifyHeadlessMode It checks the ENV variables to determine if the Runner is on headless mode, when it's false, the browser capability loads
     * different ads that stops the User E2E process. For that, a refresh is executed to continue with the normal flow.
     * @param testid For allure reporting purposes
     */
    async verifyHeadlessMode(testid: string) {
        if (process.env.HEADLESS_MODE !== "TRUE") {
            await this.refreshBrowserPage();
            await this.clickOnContinueButton(testid);
        }
    }

}

export default new ConfirmationPage();