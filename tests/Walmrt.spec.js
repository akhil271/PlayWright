import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.walmart.com/');
  await page.locator('iframe[src="about:blank"]').contentFrame().getByRole('button', { name: 'Press & Hold Human Challenge' }).click();
  await page.locator('iframe[src="about:blank"]').contentFrame().getByRole('button', { name: 'Press & Hold Human Challenge' }).click();
  await page.locator('iframe[src="about:blank"]').contentFrame().getByRole('button', { name: 'Press & Hold Human Challenge' }).click();
  await page.locator('iframe[src="about:blank"]').contentFrame().getByRole('button', { name: 'Press & Hold Human Challenge' }).click({
    button: 'right'
  });
  await page.locator('iframe[src="about:blank"]').contentFrame().getByRole('button', { name: 'Press & Hold Human Challenge' }).click({
    button: 'right'
  });
  await page.locator('iframe[src="about:blank"]').contentFrame().getByRole('button', { name: 'Press & Hold Human Challenge' }).click({
    button: 'right'
  });
});