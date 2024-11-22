/* 
The login function should be called in the beforeEach function of each test file that requires it.
*/

import { expect } from '@playwright/test';
import { baseUrl } from '../../utils/constants/url.ts';

// A function that will log the user in
export const login = async (page: any) => { 

  await page.goto(`${baseUrl}/login`);

  expect(page).toHaveTitle(/Login | Jacquard/);

  await page.fill('input[name="email"]', `${process.env.USERNAME}`);
  await page.fill('input[name="password"]',`${process.env.PASSWORD}`);
  await page.click('button[type="submit"]');

  await expect(page).toHaveTitle(/Home | Jacquard/);
};