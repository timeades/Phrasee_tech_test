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
If you don't have npm already install you will need to run the terminal command:
    ```
    npm install -g npm
    ```
You will then need to install the project dependencies:
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

The current configuration of the run file runs the tests against desktop browser: Chrome and a mobile device iPhone 12. These are set in playwright.config.ts and use the devTools configurations in Chrome for devices so if you want to run the tests in other browsers go to the config file and uncomment the required ones.

![Image of the browser settings in config file](/utils/assets/Screenshot%202024-01-10%20at%2013.23.11.png)

# Viewing the test results
Once the tests are run you can view the results running the command: 

```
npx playwright show-report
```

The current configuration for the test reporter is the default Playwright one. This could be updated depending on who needs access to results and the information required. Alternatives include [Allure](https://github.com/allure-framework/), [Monocart](https://cenfun.github.io/monocart-reporter/) etc.

Current test results view:
# TBD