import { test, expect } from '@playwright/test';

test('test', async ({ page } => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Feed the dog');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('Check emails');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page
    .getByRole('listitem')
    .filter({ hasText, 'Feed the dog' })
    .getByRole('checkbox', { name, 'Toggle Todo' });
    .check();
    .getByRole('link', { name, 'Active' }).click();
