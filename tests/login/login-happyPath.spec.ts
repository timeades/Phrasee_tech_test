import { test, expect } from '@playwright/test';
import { baseUrl } from '../../utils/constants/url.ts';

test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl + '/login');
});

  // Testing we have landed on the correct page
test('onLoginPage', async ({ page }) => {
    await expect(page).toHaveTitle(/Login | Phrasee/)
})

// Test writing to the correct fields for username & password
test('happyPathLogin', async ({ page }) => {
    // as stated in login.ts this is bad practice and should not be used
    await page.getByLabel('email').fill('phrasee03@gmail.com');
    await page.getByLabel('password').fill('O64ro%OaDFAMnkBZ');
    await page.getByLabel('Log In').click();

    await expect(page).toHaveTitle(/Home | Phrasee/);
});
