import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://app-qa.phrasee.co');
  });

  // Testing we have landed on the correct page
test('hasTitle', async ({ page }) => {
    await expect(page).toHaveTitle(/Login | Phrasee/)
})

// test using incorrect email address
test('incorrect email', async ({ page }) => {
    await page.getByLabel('email').fill('phrasee03@gmail.corn');
    await page.getByLabel('password').fill('O64ro%OaDFAMnkBZ');
    await page.getByText('Log In').click();

    expect('Wrong email or password.').toEqual(expect.stringContaining('Wrong email or password.'));
});

// Test using incorrect password
test('incorrect password', async ({ page }) => {
    await page.getByLabel('email').fill('phrasee03@gmail.com');
    await page.getByLabel('password').fill('O64ro%OaDFAMnk');
    await page.getByText('Log In').click();
    
    expect('Wrong email or password.').toEqual(expect.stringContaining('Wrong email or password.'));
});