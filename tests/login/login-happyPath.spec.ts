import { test, expect } from '@playwright/test';
import { baseUrl } from '../../utils/constants/url.ts';

test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl + '/login');
});

// Testing we have landed on the correct page
test('onLoginPage', async ({ page }) => {
    await expect(page).toHaveTitle(/Login | Jacquard/)
})

// Test writing to the correct fields for username & password
test('happyPathLogin', async ({ page }) => {
    await page.getByLabel('email').fill(`${process.env.USERNAME}`);
    await page.getByLabel('password').fill(`${process.env.PASSWORD}`);
    await page.getByLabel('Log In').click();

    await expect(page).toHaveTitle(/Home | Jacquard/);
});
