import { test, expect } from "@playwright/test";

test("Lab 4: Multiple Navigations in One Test", async ({ page }) => {
  await page.goto("https://playwright.dev",{ waitUntil: "domcontentloaded", timeout: 60000});
  console.log("Playwright Title:", await page.title());

  await page.goto("https://www.wikipedia.org/",{ waitUntil: "domcontentloaded", timeout: 60000});
  console.log("Wikipedia Title:", await page.title());

  await page.goto("https://www.google.com",{ waitUntil: "domcontentloaded", timeout: 60000});
  console.log("Google Title:", await page.title());
});
