
const { test, expect } = require('@playwright/test');
const { UnifiedPage } = require('../Page/DashboardPage');

const BASE_URL = 'https://rahulshettyacademy.com/client';
const USERNAME = 'akhildadhich9@gmail.com';
const PASSWORD = 'Akhil123@';

test.describe('Module 4.1: Advanced UI Interactions', () => {
    let pageObj;

    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
        pageObj = new UnifiedPage(page);
      //  await pageObj.login(USERNAME, PASSWORD);
     //   await expect(page).toHaveURL(/.*dashboard/);
    });

    test('Add a product to the cart using advanced interactions', async ({ page }) => {
        await pageObj.login(USERNAME,PASSWORD);
        // Scroll to bottom
        await pageObj.scrollToBottom();

        // Hover and click Add to Cart
        await pageObj.addFirstProductToCart();

        // Handle popup
        await pageObj.handleCartPopup();

       
    });
});
