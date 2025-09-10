import { test, expect } from "@playwright/test";

test("Lab 6: Handle Navigation with a Redirect", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/",{timeout:6000});

  await expect(page).toHaveTitle("The Internet");
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/");
});
