import Page from "../Page.js";
import reporter from "../../helper/reporter.js";
import { assert, expect } from 'chai'
class HomePage extends Page {

    constructor() {
        super();
    }

    /**Locator Strategies */
    get homepageLogo() { return $('.logo img'); }
    get homepageNavMenu() { return $('.nav.navbar-nav'); }
    get homepageSignupLoginButton() { return $('.nav.navbar-nav li:nth-child(4) a'); }
    get homepageLoginAsUsernameMessage() { return $('.nav.navbar-nav li:nth-child(10) a'); }
    get homepageLogoutButton() { return $('.nav.navbar-nav li:nth-child(4) a'); }
    get homepageDeleteAccountButton() { return $('.nav.navbar-nav li:nth-child(5) a'); }


    /**
     * @function verifyHomePageIsVisible It makes a Chai assertion to verify whether the Home Page Logo is 
     * visible when navigating to the URL
     * @param testId For Allure reporting purposes
     */
    async verifyHomePageIsVisible(testId: string): Promise<void> {
        const reportingMessage = "Home Page Verified and Is Visible"
        try {
            assert.exists(await this.homepageLogo, this.assertionErrorMessage);
            assert.exists(await this.homepageNavMenu, this.assertionErrorMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function clickOnSignupLoginButton It clicks on the Signup Login button within the Navbar options
     * @param testId For Allure reporting purposes
     */
    async clickOnSignupLoginButton(testId: string): Promise<void> {
        const reportingMessage = "Signup Login button clicked";
        try {
            await this.clickElement(await this.homepageSignupLoginButton);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error;
        }
    }

    /**
     * @function verifyLoginAsUsernameMessage It makes an assertion to Verify the Username Passed through the 
     * Test data is equal to the one displayed on the Web Page
     * @param testId For Allure reporting purposes 
     * @param username The username to make the assertion against.
     */
    async verifyLoginAsUsernameMessage(testId: string, username: string): Promise<void> {
        if (!username) throw Error(`Given username: ${username} is not valid to make an assertion`);
        const reportingMessage = "Logged in as Username text verified";
        try {
            const loggedInUsername = (await (await this.homepageLoginAsUsernameMessage).$('b')).getText();
            expect(await loggedInUsername).to.be.eq(username);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error;
        }
    }

    /**
     * @function clickOnDeleteAccountButton It clicks on the Delete Account Button within the Narbar
     * @param testId For Allure reporting purposes
     */
    async clickOnDeleteAccountButton(testId: string): Promise<void> {
        const reportingMessage = "Delete Account button clicked";
        try {
            await this.clickElement(await this.homepageDeleteAccountButton);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error;
        }
    }

    /**
     * @function clickOnLogoutButton It clicks on the Logout Button within the Navbar
     * @param testId for Allure reporting purposes
     */
    async clickOnLogoutButton(testId: string): Promise<void> {
        const reportingMessage = "Logout Button clicked";
        try {
            await this.clickElement(await this.homepageLogoutButton);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error;
        }
    }
}

export default new HomePage();