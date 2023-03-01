//@ts-nocheck
import type { Options } from '@wdio/types'
import allure from "@wdio/allure-reporter";
import fs from "fs";
export const config: Options.Testrunner = {
    environment: "RAVN-E2E-Web-Automation",
    runner: 'local',
    autoCompileOpts: {
        tsNodeOpts: {
            project: './tsconfig.json'
        }
    },

    specs: [
        './tests/features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec',
        ['allure',
            {
                outputDir: 'reports/allure-results',
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true
            }]],
    cucumberOpts: {
        require: ['./tests/features/step-definitions/**/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '@automation-exercise',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    },

    /**
  * Gets executed once before all workers get launched.
  * @param {Object} config wdio configuration object
  * @param {Array.<Object>} capabilities list of capabilities details
  */
    onPrepare: function (config, capabilities) {
        if (fs.existsSync("./reports/allure-results")) {
            fs.rmdirSync("./reports/allure-results", { recursive: true });
        }
    },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {Object}                 context  Cucumber World object
     */
    beforeScenario: function (world, context) {
        let worldArr = world.pickle.name.split(/:/);
        //@ts-ignore
        if (worldArr.length > 0) browser.config.testid = worldArr[0];
        //@ts-ignore
        if (!browser.options.testid)
            throw Error(
                `Error obtaining the test ID for the current scenario: ${world.pickle.name}`
            );
    },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {Object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {Object}             context          Cucumber World object
     */
    afterStep: async function (step, scenario, result, context) {
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    },

    /**
    * Runs after a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
    afterFeature: function (uri, feature) {
        allure.addEnvironment("Environment:", browser.config.environment);

    },


}
