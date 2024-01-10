import { test, expect } from '@playwright/test';
import { baseUrl } from '../../utils/constants/url.ts';

test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl + '/login');
});

  // Testing we have landed on the correct page
test('onLoginPage', async ({ page }) => {
    await expect(page).toHaveTitle(/Login | Phrasee/)
})

// test using incorrect email address
test('incorrectEmail', async ({ page }) => {
    await page.getByLabel('email').fill('foo@bar.com');
    await page.getByLabel('password').fill(`${process.env.PASSWORD}`);
    await page.getByLabel('Log In').click();

    expect('Wrong email or password.').toEqual(expect.stringContaining('Wrong email or password.'));
});

// Test using incorrect password
test('incorrectPassword', async ({ page }) => {
    await page.getByLabel('email').fill(`${process.env.USERNAME}`);
    await page.getByLabel('password').fill('foobar');
    await page.getByLabel('Log In').click();
    
    expect('Wrong email or password.').toEqual(expect.stringContaining('Wrong email or password.'));

});