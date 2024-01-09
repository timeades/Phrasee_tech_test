import { test, expect } from '@playwright/test';
import { baseUrl } from '../utils/constants/url.ts';

test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl + '/login');
  });

  // Testing we have landed on the correct page
test('hasTitle', async ({ page }) => {
    await expect(page).toHaveTitle(/Login | Phrasee/)
})

// test using incorrect email address
test('incorrect email', async ({ page }) => {
    await page.getByLabel('email').fill('phrasee03@gmail.corn');
    await page.getByLabel('password').fill('O64ro%OaDFAMnkBZ');
    await page.getByLabel('Log In').click();

    await expect(page).toHaveTitle(/Home | Phrasee/)
});