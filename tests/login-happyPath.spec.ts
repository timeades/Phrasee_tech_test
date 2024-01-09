import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://app-qa.phrasee.co');
  });

  // Testing we have landed on the correct page
test('hasTitle', async ({ page }) => {
    await expect(page).toHaveTitle(/Login | Phrasee/)
})

// Test writing to the correct fields for username & password
test('login', async ({ page }) => {
    await page.getByLabel('email').fill('phrasee03@gmail.com');
    await page.getByLabel('password').fill('O64ro%OaDFAMnkBZ');
    await page.getByText('Log In').click();
    await expect(page).toHaveTitle(/Home | Phrasee/);
});