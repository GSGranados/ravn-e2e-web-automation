# RAVN E2E Web Automation
E2E Web Test Automation for RAVN QA Automation Code Challenge

#### Before Starting
The WebDriverIO version being used is V8 which uses `ESNext` for Typescript `tsconfig.json` in the `module` compilerOptions, hence, it requires the LTS version of [**Node.js**](https://nodejs.org/es/download/) 

#### Technologies used
- WebDriver IO V8 (Selenium /Node.js)
- Typescript
- Cucumber / Gherkin
- Chai
- Allure Reports

#### How to install the project.

First, clone the code repository `$ git clone https://github.com/GSGranados/ravn-e2e-web-automation.git` and
`cd <project_cloned>`

After that, open an integrated terminal and execute the *NPM Install* command: 

```
$ npm i

-It will install all dependencies needed to run the project. Then, run the "test:all" script

$ npm run test:all -- it will run all feature files (including negative feature scenarios)

```

#### Running Test Scripts
* `$ npm run test:negative - it will run the negative test feature`
* `$ npm run test:e2e - it will run the E2E test feature`
* `$ npm run test:all - it will run All feature files`

##### Generate and Open Allure reports

For visualizing the Automation execution you need to have installed previously [Java JDK](https://www.oracle.com/java/technologies/downloads/#java17) and being added to the PATH Environment variable to allow the Allure report to be launched.
Once that is installed, you can run the `npm run reports` script on the integrated terminal of the project to launch a local server with the Allure report results, after the Test Execution.

### Headless and not Headless WDIO.conf execution

`--headless` mode runs all specs in the background minimizing resources and it is intended for CI/CD platforms. On this repository, there is a template .env file (`.env.template`) with the **HEADLESS_MODE** variable that can be set to __TRUE__ or __FALSE__.
Create an `.env` file on the root folder and copy the HEADLESS_MODE variable to that file

- TRUE: It will run all test in the background.
- FALSE: It will launch a Browser capability and run the E2E normally
 