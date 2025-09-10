// File: Page/UnifiedPage.js
// UnifiedPage class handles both Login and Dashboard actions for the e-commerce site
class UnifiedPage {
    constructor(page) {
        this.page = page;

        // ---------- Login Page Locators ----------
        // Email input field
        this.usernameInput = page.locator('#userEmail');
        // Password input field
        this.passwordInput = page.locator('#userPassword');
        // Login button
        this.loginButton = page.locator('#login');

        // ---------- Dashboard Page Locators ----------
        // All product cards on the dashboard page
        this.productCards = page.locator('.card-body'); // Adjust if your selector changes
        // You can add a locator for the Cart popup button here when needed
        // this.cartPopupButton = page.locator('#cart-button'); 
    }

    // ---------- Login Actions ----------
    /**
     * Logs in to the application using provided username and password
     * @param {string} username - user email
     * @param {string} password - user password
     */
    async login(username, password) {
        await this.usernameInput.fill(username); // Enter username/email
        await this.passwordInput.fill(password); // Enter password
        await this.loginButton.click();          // Click login button
        console.log("Login functionality executed successfully");
    }

    // ---------- Dashboard Actions ----------
    /**
     * Scrolls to the bottom of the dashboard page
     * Useful for loading all products when there is lazy loading
     */
    async scrollToBottom() {
        await this.page.keyboard.press('End'); // Scrolls to the bottom using keyboard
        // Alternative: await this.page.mouse.wheel(0, 1000);
        console.log("Scrolled to the bottom of the product list");
    }

    /**
     * Hovers over the first product's "Add To Cart" button,
     * verifies color change on hover, and clicks the button
     */
    async addFirstProductToCart() {
        // Locate the "Add To Cart" button of the first product using XPath
        const addToCartBtn = this.page.locator('xpath=//*[@id="products"]/div[1]/div[2]/div[1]/div/div/button[2]');

        // Get the button's background color before hover
        const beforeHover = await addToCartBtn.evaluate(el => getComputedStyle(el).backgroundColor);
        console.log('Background color before hover:', beforeHover);

        // Hover over the button to trigger UI hover effect
        await addToCartBtn.hover();

        // Get the button's background color after hover
        const afterHover = await addToCartBtn.evaluate(el => getComputedStyle(el).backgroundColor);
        console.log('Background color after hover:', afterHover);

        // Log whether hover color change was successful
        if (beforeHover !== afterHover) {
            console.log('Hover color changed successfully!');
        } else {
            console.log('Hover color did NOT change.');
        }

        // Click the button to add product to the cart
        await addToCartBtn.click();
        console.log('"Add To Cart" button clicked');
    }

    /**
     * Handles the "Product Added To Cart" popup
     * Waits for the popup to appear before interacting with it
     */
    async handleCartPopup() {
        // Wait for the popup text to appear
        const popup = this.page.locator('text=Product Added To Cart');
        await popup.waitFor({ state: 'visible', timeout: 5000 });

        console.log('Popup is visible. Ready for further actions, e.g., click "Cart" button');
        // You can add code to click "Cart" or close popup here if needed
        // const cartButton = this.page.locator('#cart-button');
        // await cartButton.click();
    }
}

module.exports = { UnifiedPage };
