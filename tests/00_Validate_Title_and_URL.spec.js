import {test, expect} from "@playwright/test"
test("Validate_Title_and_URL", async ({ page }) => {
    await page.goto('https://www.hollandandbarrett.com/',{timeout:6000});
 
    const actualTitle = await page.title();
 
    const actualURL = await page.url();
 
    const expectedTitle = "Holland & Barrett - UK's Leading Health & Wellbeing Store";
    const expectedURL = "https://www.hollandandbarrett.com/";
 
    expect(actualTitle).toBe(expectedTitle);
    expect(actualURL).toBe(expectedURL);
});