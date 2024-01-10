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