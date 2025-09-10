import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');

  // 🔹 Fix 1: Use correct placeholder (your role locator may not match)
  await page.getByPlaceholder('Search for products, brands and more').click();
  await page.getByPlaceholder('Search for products, brands and more').fill('Shirt');
  await page.getByPlaceholder('Search for products, brands and more').press('Enter');

  // 🔹 Fix 2: Don't depend on dynamic numbers like (5863)
  await page.getByRole('listitem').filter({ hasText: 'Allen Solly' }).locator('div').click();

  // 🔹 Fix 3: Myntra opens product in same tab (not popup)
  await page.getByRole('link', { name: /Powerlook Men Spread Collar/i }).click();

  // 🔹 Fix 4: Stay on the same `page` (not page1)
  await page.getByRole('button', { name: /^42$/ }).click();
  await page.getByRole('button', { name: /add to bag/i }).click();

  // 🔹 Fix 5: Bag is a link, not plain text
  await page.getByRole('link', { name: 'Bag' }).click();

  await page.getByRole('button', { name: /place order/i }).click();
});
