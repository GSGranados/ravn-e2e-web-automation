
/**
 * @class Main Web Page implementation to abstract all web actions any HTML Document can perform, such as clicking, navigating and typing. 
 * Used to encapsulate all low level browser actions 
 */
class Page {
    constructor() {
    }

    assertionErrorMessage: string = "Could not locate element within the Web Page";

    /**
     * @function navigateToURL It executes the Browser method to open a new tab with the specified URL path
     * @param urlPath URL path to open on the current capability
     */
    async navigateToURL(urlPath: string): Promise<void> {
        await browser.url(urlPath);
        await browser.maximizeWindow();
    }

    /**
     * @function clickElement It executes the WebDriver method of clicking an element within a Web page
     * @param webElement The WebdriverIO Element to interact with 
     */
    async clickElement(webElement: WebdriverIO.Element): Promise<void> {
        if (!webElement) throw Error('No WebDriver Element provided to be interacted with');
        await webElement.waitUntil(async () => {
            return (await webElement.isClickable())
        }, { timeout: 10000, timeoutMsg: "Could not locate element within the DOM", interval: 1000 });
        await webElement.click();
    }

    /**
     * @function typeIntoElement It executes the WebDriver method of setValue on an element within the Web Page
     * @param webElement The WebdriverIO Element to interact with
     * @param inputText Value to be set
     */
    async typeIntoElement(webElement: WebdriverIO.Element, inputText: string): Promise<void> {
        if (!webElement) throw Error('No WebDriver Element provided to be interacted with');
        await webElement.waitUntil(async () => {
            return (await webElement.isClickable());
        }, { timeout: 10000, timeoutMsg: "Could not locate element within the DOM", interval: 1000 })
        await webElement.setValue(inputText);
    }

    /**
     * @function selectDropdownOption It executes the WebDriver method of seleting by visiable text for a Dropdown element
     * @param webElement The WebdriverIO Element to interact with
     * @param optionText Option Text to be selected
     */
    async selectDropdownOption(webElement: WebdriverIO.Element, optionText: string): Promise<void> {
        if (!webElement) throw Error('No WebDriver Element provided to be interacted with');
        await webElement.waitUntil(async () => {
            return (await webElement.isClickable());
        }, { timeout: 10000, timeoutMsg: "Could not locate element within the DOM", interval: 1000 });
        await webElement.selectByVisibleText(optionText);
    }

}

export default Page;