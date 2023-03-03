import Page from "../Page.js";
import reporter from "../../helper/reporter.js";
import { assert, expect } from "chai";
import constants from '../../../data/constants.json' assert {type: "json"};
class SignupPage extends Page {
    constructor() {
        super();
    }

    //Locator Strategies
    get signupEnterAccountInformationMessage() { return $('.login-form .title:nth-child(1) b') }
    get signupMrTitleRadio() { return $('.radio-inline label[for="id_gender1"]') }
    get signupMrsTitleRadio() { return $('.radio-inline label[for="id_gender2"]') }
    get signupNameInput() { return $('input#name') }
    get signupEmailInput() { return $('input#email') }
    get signupPasswordInput() { return $('input#password') }
    get signupDaysSelect() { return $('select#days') }
    get signupMonthSelect() { return $('select#months') }
    get signupYearSelect() { return $('select#years') }
    get signupNewsletterCheckbox() { return $('input#newsletter') }
    get signupSpecialOffersCheckbox() { return $('input#optin') }
    get signupAddressFirstNameInput() { return $('input#first_name') }
    get signupAddressLastNameInput() { return $('input#last_name') }
    get signupAddressCompanyInput() { return $('input#company') }
    get signupAddressInput() { return $('input#address1') }
    get signupSecondAddressInput() { return $('input#address2') }
    get signupAddressCountrySelect() { return $('select#country') }
    get signupAddressStateInput() { return $('input#state') }
    get signupAddressCityInput() { return $('input#city') }
    get signupAddressZipCodeInput() { return $('input#zipcode') }
    get signupAddressMobielNumberInput() { return $('input#mobile_number') }
    get signupCreateAccountButton() { return $('button[data-qa="create-account"]') }


    /**
     * @function verifyEnterAccountInformationMessage It makes a Chai assertion to verify the Existence of the Enter Account information Message
     * @param testId For Allure Reporting purposes
     */
    async verifyEnterAccountInformationMessage(testId: string): Promise<void> {
        const reportingMessage = "Enter Account Information";
        try {
            const enterAccountInformationMessage = await (await this.signupEnterAccountInformationMessage).getText();
            assert.exists(await this.signupEnterAccountInformationMessage, this.assertionErrorMessage);
            expect(enterAccountInformationMessage).to.be.eq(constants.assertionTexts.enterAccountInformationMessage);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error;
        }
    }

    /**
     * @function selectAccountTitle It clicks on one of the two radio buttons to select an Account title
     * @param testId For Allure reporting purposes
     * @param accountTitle The account title to be set
     */
    async selectAccountTitle(testId: string, accountTitle: string): Promise<void> {
        if (!accountTitle) throw Error(`Given ${accountTitle} is not valid`);
        const reportingMessage = `The accountTitle: ${accountTitle} was selected`;
        try {
            await this.clickElement(await this[`signup${accountTitle}TitleRadio`]);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error;
        }
    }

    /**
     * @function enterSingupName It enters the Sign Up Name to the Sign up input field
     * @param testId For Allure reporting purposes
     * @param signupName The Sign up name to be set
     */
    async enterSingupName(testId: string, signupName: string): Promise<void> {
        if (!signupName) throw Error(`Given Signup Name: ${signupName} is not valid`);
        const reportingMessage = `${signupName} Set as Sign up name`;
        try {
            await this.typeIntoElement(await this.signupNameInput, signupName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }
    /**
     * @function verifySingupEmail Makes a Chai Assertion to validate the Email Submitted on the Login Form
     * @param testId For Allure reporting purposes
     * @param signupEmail The Sign up email to be validated
     */
    async verifySingupEmail(testId: string, signupEmail: string): Promise<void> {
        if (!signupEmail) throw Error(`Given Signup Email: ${signupEmail} is not valid`);
        const reportingMessage = `Sign up email: ${signupEmail} Verified`;
        try {
            const submittedEmail = await (await this.signupEmailInput).getAttribute("value");
            expect(submittedEmail).to.be.eq(signupEmail);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }
    /**
     * @function enterSingupPassword It enters the Sign Up Password to the Sign up input field
     * @param testId For Allure reporting purposes
     * @param signupPassword The Sign up password to be set
     */
    async enterSingupPassword(testId: string, signupPassword: string): Promise<void> {
        if (!signupPassword) throw Error(`Given Signup Password: ${signupPassword} is not valid`);
        const reportingMessage = `${signupPassword} Set as Sign up name`;
        try {
            await this.typeIntoElement(await this.signupPasswordInput, signupPassword);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function setSignUpDateOfBirth It sets the Signup Date of Birth in all three Dropdown Select
     * @param testId For Allure reporting purposes
     * @param signupDate Signup Date to be set 
     */
    async setSignUpDateOfBirth(testId: string, signupDate: string): Promise<void> {
        if (!signupDate) throw Error(`Given Signup date ${signupDate} is not valid`);
        const reportingMessage = `${signupDate} set as the Date of Birth`;
        try {
            const [signupDay, signupMonth, signupYear] = signupDate.split('-');
            await this.selectDropdownOption(await this.signupDaysSelect, signupDay);
            await this.selectDropdownOption(await this.signupMonthSelect, signupMonth);
            await this.selectDropdownOption(await this.signupYearSelect, signupYear);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function clickOnSignupNewsletterCheckbox It clicks on the Signup Newsletter Checkbox
     * @param testId For Allure reporting purposes
     */
    async clickOnSignupNewsletterCheckbox(testId: string): Promise<void> {
        const reportingMessage = "Signup Newsletter checkbox clicked";
        try {
            await this.clickElement(await this.signupNewsletterCheckbox);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }
    /**
     * @function clickOnSignupSpecialOffersCheckbox It clicks on the Signup Special Offer Checkbox
     * @param testId For Allure reporting purposes
     */
    async clickOnSignupSpecialOffersCheckbox(testId: string): Promise<void> {
        const reportingMessage = "Signup Special Offer checkbox clicked";
        try {
            await this.clickElement(await this.signupSpecialOffersCheckbox);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }


    /**
     * @function enterSingupAddressFirstName It sets the Address First Name in the input field
     * @param testId For Allure Reporting purposes
     * @param addressFirstName The Address first name to set
     */
    async enterSingupAddressFirstName(testId: string, addressFirstName: string): Promise<void> {
        if (!addressFirstName) throw Error(`Given Address First Name ${addressFirstName} is not valid`);
        const reportingMessage = `${addressFirstName} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressFirstNameInput, addressFirstName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupAddressLastName It sets the Address Last Name in the input field
     * @param testId For Allure Reporting purposes
     * @param addressFirstName The Address Last name to set
     */
    async enterSignupAddressLastName(testId: string, addressLastName: string): Promise<void> {
        if (!addressLastName) throw Error(`Given Address Last Name ${addressLastName} is not valid`);
        const reportingMessage = `${addressLastName} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressLastNameInput, addressLastName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupAddressCompany It sets the Address Company in the input field
     * @param testId For Allure Reporting purposes
     * @param addressFirstName The Company name to set
     */
    async enterSignupAddressCompany(testId: string, addressCompanyName: string): Promise<void> {
        if (!addressCompanyName) throw Error(`Given Company Name ${addressCompanyName} is not valid`);
        const reportingMessage = `${addressCompanyName} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressCompanyInput, addressCompanyName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupAddress It sets the Address Name in the input field
     * @param testId For Allure Reporting purposes
     * @param addressFirstName The Address name to set
     */
    async enterSignupAddress(testId: string, addressName: string): Promise<void> {
        if (!addressName) throw Error(`Given Address Name ${addressName} is not valid`);
        const reportingMessage = `${addressName} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressInput, addressName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupSecondAddress It sets the Second Address Name in the input field
     * @param testId For Allure Reporting purposes
     * @param addressFirstName The Second Address name to set
     */
    async enterSignupSecondAddress(testId: string, secondAddressName: string): Promise<void> {
        if (!secondAddressName) throw Error(`Given Second Address Name ${secondAddressName} is not valid`);
        const reportingMessage = `${secondAddressName} set in the input field`
        try {
            await this.typeIntoElement(await this.signupSecondAddressInput, secondAddressName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function selectSignupCountry It selects the Sign up Country from the Dropdown element
     * @param testId For Allure reporting purposes
     * @param countryName The Country name to select from the Dropdown
     */
    async selectSignupCountry(testId: string, countryName: string): Promise<void> {
        if (!countryName) throw Error(`Given Country Name ${countryName}`);
        const reportingMessage = `${countryName} selected as option`
        try {
            await this.selectDropdownOption(await this.signupAddressCountrySelect, countryName);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupAddressState It sets the Signup State in the Input field
     * @param testId For Allure reporting purposes
     * @param signupState Signup State to set 
     */
    async enterSignupAddressState(testId: string, signupState: string): Promise<void> {
        if (!signupState) throw Error(`Given Signup State Name ${signupState} is not valid`);
        const reportingMessage = `${signupState} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressStateInput, signupState);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupAddressCity It sets the Signup City in the Input field
     * @param testId For Allure reporting purposes
     * @param signupState Signup City to set 
     */
    async enterSignupAddressCity(testId: string, signupCity: string): Promise<void> {
        if (!signupCity) throw Error(`Given Signup City Name ${signupCity} is not valid`);
        const reportingMessage = `${signupCity} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressCityInput, signupCity);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupAddressZipCode It sets the Signup Zip Code in the Input field
     * @param testId For Allure reporting purposes
     * @param signupState Signup Zip Code to set 
     */
    async enterSignupAddressZipCode(testId: string, signupZipCode: string): Promise<void> {
        if (!signupZipCode) throw Error(`Given Signup Zip Code ${signupZipCode} is not valid`);
        const reportingMessage = `${signupZipCode} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressZipCodeInput, signupZipCode);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function enterSignupAddressMobileNumber It sets the Signup Mobile Number in the Input field
     * @param testId For Allure reporting purposes
     * @param mobileNumber Mobile Number to set
     */
    async enterSignupAddressMobileNumber(testId: string, mobileNumber: string): Promise<void> {
        if (!mobileNumber) throw Error(`Given Signup Mobile Number ${mobileNumber} is not valid`);
        const reportingMessage = `${mobileNumber} set in the input field`
        try {
            await this.typeIntoElement(await this.signupAddressMobielNumberInput, mobileNumber);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }

    /**
     * @function clickOnCreateAccountButton It clicks on the Create Account button on the Signup page
     * @param testId For Allure reporting purposes
     */
    async clickOnCreateAccountButton(testId: string): Promise<void> {
        const reportingMessage = "Create Account Button clicked"
        try {
            await this.clickElement(await this.signupCreateAccountButton);
            reporter.addStep(testId, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testId, 'error', reportingMessage);
            throw error
        }
    }


}

export default new SignupPage();