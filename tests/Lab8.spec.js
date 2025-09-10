
import { test, expect } from "@playwright/test";
test("Lab 8: Practice with GitHub", async ({ page }) => {
  await page.goto("https://github.com/",{ waitUntil: "domcontentloaded"});

  console.log("Title:", await page.title());
  console.log("URL:", page.url());

  await expect(page).toHaveTitle("GitHub: Let’s build from here · GitHub");
});
