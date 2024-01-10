/* 
Parts of this file are bad practice and shouldn't exists. User data should not be hardcoded and ideally unique username and passwords should be created for each test.
Where a user is going to be used in multiple tests then the user data should be stored in and called from a vault so no data is exposed.
Playwright has a vault feature that can be used for this purpose, dotenv https://github.com/motdotla/dotenv, which you can see mentioned in the playwright.config.ts but I did not have the time to impliment it.
The login function should be called in the beforeEach function of each test file that requires it.
*/

import { expect } from '@playwright/test';
import { baseUrl } from '../../utils/constants/url.ts';


// A function that will log the user in
export const login = async (page: any) => {
  await page.goto(`${baseUrl}/login`);

  expect(page).toHaveTitle(/Login | Phrasee/);

  await page.fill('input[name="email"]', 'phrasee03@gmail.com');
  await page.fill('input[name="password"]', 'O64ro%OaDFAMnkBZ');
  await page.click('button[type="submit"]');

  await expect(page).toHaveTitle(/Home | Phrasee/);
};