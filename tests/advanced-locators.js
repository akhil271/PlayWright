const { chromium } = require('playwright');
async function advancedLocators() {
console.log('�� Starting advanced locators example...');
const browser = await chromium.launch({ headless: false, slowMo: 150 });
const page = await browser.newPage();
await page.goto('https://github.com/search');
console.log('1. Navigated to GitHub Search');
// Chained selectors
const searchInput = await page.$('header >> input[type="text"]');
await searchInput.type('playwright');
console.log('2. Typed search query using chained selector');
// :has() selector
const repoWithDescription = await page.$$('.repo-list-item:has(p)');
console.log(`3. Found ${repoWithDescription.length} repos with descriptions`);
// Wait for specific state
await page.waitForSelector('.codesearch-results:visible');
console.log('4. Search results are visible');
// Filter elements by text content
const javascriptRepos = await page.$$('a:has-text("javascript")');
console.log(`5. Found ${javascriptRepos.length} JavaScript-related repos`);
// Get attribute values
const firstRepo = await page.$('.repo-list-item');
const repoUrl = await firstRepo.$eval('a', el => el.href);
console.log('6. First repo URL:', repoUrl);
await page.waitForTimeout(3000);
await browser.close();
console.log('✅ Advanced locators example completed');
}
advancedLocators().catch(console.error);
