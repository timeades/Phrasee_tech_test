import { test, expect } from '@playwright/test';
import { login } from '../../utils/constants/login';
import { 
    newExperiment, 
    experimentName,
    emailExperiment,
    subjectLine,
    campaignNumber,
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

test('experimentWithClickAndBrand', async ({ page }) => {
    // Click create nav item to go to new experiment form
    await page.click(newExperiment);
    await page.getByRole('menuitem', { name: 'experiment' }).click();
    await expect(page).toHaveTitle(/Create Experiment | Jacquard/);

    // Give the experiment a name
    await page.click(experimentName);
    await page.fill(experimentName, 'TE Test 2');
    await page.keyboard.press('Enter');

    // Select email experiment
    await page.click(emailExperiment);

    // Fill in subject line
    await page.click(subjectLine);
    await page.fill(subjectLine, 'Test with click rate and Brand');

    // Fill in campaign number
    await page.click(campaignNumber);
    await page.fill(campaignNumber, '100000');

    // Fill in percentage target
    await page.getByPlaceholder('E.g.').click();
    await page.getByPlaceholder('E.g.').fill('1%0');

    // Click next
    await page.click(nextButton);

    // Fill in send date
    await page.click(sendDate);
    await page.getByLabel('Wednesday, January 31,').click();

    // Select first name personalisation
    await page.locator('label').filter({ hasText: 'Yes' }).locator('circle').click();

    // Select Campaign Type
    await page.click(campaignTypeDropdown);
    await page.getByRole('option', { name: 'Brand', exact: true }).click();
    await page.getByPlaceholder('E.g. Besty').click();
    await page.getByPlaceholder('E.g. Besty').fill('Besty');

    // Click next
    await page.click(nextButton);

    // Check that the experiment has been created
    await expect(page.locator('h2')).toContainText("Phrasee's optimal set for testing:")
    await expect(page.locator(testSubjectLine)).toContainText("Test with click rate and Brand")
});
