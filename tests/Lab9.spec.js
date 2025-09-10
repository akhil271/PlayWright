import { test, expect } from "@playwright/test";

test("Lab 9: Navigate to BBC News", async ({ page }) => {

  await page.goto("https://www.bbc.com/news",{ waitUntil: "domcontentloaded",timeout: 60000});

  await expect(page).toHaveURL("https://www.bbc.com/news");

  const title = await page.title();
  console.log("BBC News Title:", title);
});
