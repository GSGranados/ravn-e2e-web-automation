
/**
 * @class Main Web Page implementation to abstract all web actions any HTML Document can perform, such as clicking, navigating and typing. 
 * Used to encapsulate all low level browser actions 
 */
class Page {
    constructor() {
    }

    assertionErrorMessage: string = "Could not locate element within the Web Page";

    async navigateToURL(urlPath: string): Promise<void> {
        await browser.url(urlPath);
        await browser.maximizeWindow();
    }

    async clickElement(webElement: WebdriverIO.Element): Promise<void> {
        if (!webElement) throw Error('No WebDriver Element provided to be interacted with');
        await webElement.waitUntil(async () => {
            return (await webElement.isClickable())
        }, { timeout: 10000, timeoutMsg: "Could not locate element within the DOM", interval: 1000 });
        await webElement.click();
    }

    async typeIntoElement(webElement: WebdriverIO.Element, inputText: string): Promise<void> {
        if (!webElement) throw Error('No WebDriver Element provided to be interacted with');
        await webElement.waitUntil(async () => {
            return (await webElement.isClickable());
        }, { timeout: 10000, timeoutMsg: "Could not locate element within the DOM", interval: 1000 })
        await webElement.setValue(inputText);
    }

    async selectDropdownOption(webElement: WebdriverIO.Element, optionText: string): Promise<void> {
        if (!webElement) throw Error('No WebDriver Element provided to be interacted with');
        await webElement.waitUntil(async () => {
            return (await webElement.isClickable());
        }, { timeout: 10000, timeoutMsg: "Could not locate element within the DOM", interval: 1000 });
        await webElement.selectByVisibleText(optionText);
    }

}

export default Page;