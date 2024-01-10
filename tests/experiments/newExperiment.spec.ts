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
} from '../../utils/components/experiments';

test.beforeEach(async ({ page }) => {
  await login(page);
});

test('hasTitle', async ({ page }) => {
  await expect(page).toHaveTitle(/Home | Phrasee/);
});