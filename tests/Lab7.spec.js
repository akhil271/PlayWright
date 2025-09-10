import { test, expect } from "@playwright/test";

test("Lab 7: Navigate and Check Page Content", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/",{timeout:6000});

  await expect(page.locator("h1")).toContainText("Welcome to the-internet");
});
