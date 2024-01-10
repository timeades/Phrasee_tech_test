# Phrasee Tech Challange
Test cases to test the functionality:
* Login
* Create a new experiment
* Fill all min. required fields
* Generate variants

# Tech Stack:
* E2E Test Tool - Playwrigh Test
* Reporting tool - Built in Playwright reporters
* Language - TypeScript

# Setup
If you don't have npm already run first command if you do jump to second command: 

* Install you will need to run the terminal command:
    ```
    npm install -g npm
    ```
* Then to install the project dependencies:
    ```
    npm i
    ```

# Running the tests
To run all the tests in headless mode use the commands: 

```
npx playwright test
```
for headed mode you can run the command

```
npx playwright test --headed
```

to run single tests you can add the test name to the command e.g.

```
npx playwright test experiment.spec.ts

or

npx playwright test --headed experiment.spec.ts
```

Playwright also has a handy debug mode that can be called with the command

```
npx playwright test experiment.spec.ts --debug
```

The current configuration of the run file runs the tests against desktop browser: Chrome. These are set in playwright.config.ts and use the devTools configurations in Chrome for devices so if you want to run the tests in other browsers go to the config file and uncomment the required ones or add new devices.

![Image of the browser settings in config file](/utils/assets/browserConfig.png)

# Viewing the test results
Playwright has a few different reporting options available:

For this exercise I have used the out of the box html and line reporter.

At the end of the test run, in terminal you can see the line results:

![line test results](/utils/assets/lineReport.png)

or by running the command 
```
npx playwright show-report
```
you can see the html results:

![html test results](/utils/assets/htmlReport.png)

There other formats are available for example JSON, JUnit, Blob, etc and these can be configured in the config file. You can also use custom reporters or third party ones such as [Allure](https://github.com/allure-framework/), [Monocart](https://cenfun.github.io/monocart-reporter/) 