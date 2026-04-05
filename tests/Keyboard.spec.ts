import { test, expect } from '@playwright/test';

test('keyboard Action', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page.getByPlaceholder("Search for Products, Brands and More").focus();
    await page.keyboard.type("laptop");  //type the text 
    await page.keyboard.press('Enter');// press enter 

})
