import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).dblclick();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('create a form');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('create');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('run');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^create$/ }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'run' }).getByLabel('Toggle Todo').check();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).dblclick();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('eat');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: /^eat$/ }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Completed' }).click();
});