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
    //again, this is bad practice and should not be used
    await page.getByLabel('password').fill('O64ro%OaDFAMnkBZ');
    await page.getByLabel('Log In').click();

    expect('Wrong email or password.').toEqual(expect.stringContaining('Wrong email or password.'));
});

// Test using incorrect password
test('incorrectPassword', async ({ page }) => {
    //again, this is bad practice and should not be used
    await page.getByLabel('email').fill('phrasee03@gmail.com');
    await page.getByLabel('password').fill('foobar');
    await page.getByLabel('Log In').click();
    
    expect('Wrong email or password.').toEqual(expect.stringContaining('Wrong email or password.'));

});