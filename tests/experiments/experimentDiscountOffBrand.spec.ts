import { test, expect } from '@playwright/test';
import { login } from '../../utils/constants/login';
import { 
    newExperiment, 
    experimentName,
    emailExperiment,
    subjectLine,
    campaignNumber,
    percentageTarget,
    nextButton,
    sendDate,
    campaignTypeDropdown,
    testSubjectLine,
} from '../../utils/components/experiments';

test.beforeEach(async ({ page }) => {
// call the login function in login.ts
  await login(page);
  await expect(page).toHaveTitle(/Home | Jacquard/);
});

test('createExperimentWithDiscoutOffProduct', async ({ page }) => {
    // Click create nav item to go to new experiment form
    await page.click(newExperiment);
    await page.getByRole('menuitem', { name: 'experiment' }).click();
    await expect(page).toHaveTitle(/Create Experiment | Jacquard/);

    // Give the experiment a name
    await page.click(experimentName);
    await page.fill(experimentName, 'TE Test 3');
    await page.keyboard.press('Enter');

    // Select email experiment
    await page.click(emailExperiment);

    // Fill in subject line
    await page.click(subjectLine);
    await page.fill(subjectLine, 'Test with open rate and Discount off Product');

    // Fill in campaign number
    await page.click(campaignNumber);
    await page.fill(campaignNumber, '100');

    // Fill in percentage target
    await page.click(percentageTarget);
    await page.fill(percentageTarget, '10');

    // Click next
    await page.click(nextButton);

    // Fill in send date
    await page.click(sendDate);
    await page.getByLabel('Wednesday, January 31,').click();

    // Select first name personalisation
    await page.locator('label').filter({ hasText: 'Yes' }).locator('circle').click();

    // Select Campaign Type
    await page.click(campaignTypeDropdown);
    await page.getByRole('option', { name: 'Discount off Product', exact: true }).click();
    await page.getByPlaceholder('E.g. jackets').click();
    await page.getByPlaceholder('E.g. jackets').fill('Jackets');
    await page.getByPlaceholder('E.g. jackets').press('Enter');
    await page.getByPlaceholder('E.g. \'10\'').click();
    await page.getByPlaceholder('E.g. \'10\'').fill('15');
    await page.getByRole('button', { name: 'Yes' }).click();

    // TBD following 3 selectors used need to be refactored to be more specific
    // Select a specific catagory
    await page.locator('.mb-4 > .ant-row > div:nth-child(2) > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').first().click();
    await page.getByRole('option', { name: 'Outerwear' }).click();

    // Select an upcoming calander event
    await page.locator('div:nth-child(5) > .ant-row > div:nth-child(2) > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click();
    await page.getByRole('option', { name: 'Flash Sale' }).click();

    // Select an offer end
    await page.locator('div:nth-child(6) > .ant-row > div:nth-child(2) > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click();
    await page.getByRole('option', { name: 'Ends Soon' }).click();

    // Click next
    await page.click(nextButton);

    // Check that the experiment has been created
    await expect(page.locator('h2')).toContainText("Phrasee's optimal set for testing:")
    await expect(page.locator(testSubjectLine)).toContainText("Test with open rate and Discount off Product")
});
