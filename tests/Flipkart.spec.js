import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('wireless headphones');
  await page.getByRole('button', { name: 'Search for Products, Brands' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'OnePlus Bullets Wireless Z2 Bluetooth (Acoustic Red, In...' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page1.getByRole('button', { name: 'Place Order' }).click();
});