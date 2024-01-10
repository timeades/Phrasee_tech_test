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
} from '../../utils/components/experiments';

test.beforeEach(async ({ page }) => {
  // call the login function in login.ts
  await login(page);
  await expect(page).toHaveTitle(/Home | Phrasee/);
});

test('createNewExperiment', async ({ page }) => {
    // Click create nav item to go to new experiment form
    await page.click(newExperiment);
    await page.getByRole('menuitem', { name: 'experiment' }).click();
    await expect(page).toHaveTitle(/Create Experiment | Phrasee/);

    // Give the experiment a name
    await page.click(experimentName);
    await page.fill(experimentName, 'TE Test 1');
    await page.keyboard.press('Enter');

    // Select email experiment
    await page.click(emailExperiment);

    // Fill in subject line
    await page.click(subjectLine);
    await page.fill(subjectLine, 'Test subject line');

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

    // Select Campaign Type
    await page.click(campaignTypeDropdown);
    await page.getByRole('option', { name: 'Discount', exact: true }).click();

    // Fill in discount percentage
    await page.getByPlaceholder('E.g. \'10\'').click();
    await page.getByPlaceholder('E.g. \'10\'').fill('10');

    // Click next
    await page.click(nextButton);

});
