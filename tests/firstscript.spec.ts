import { test, expect } from '@playwright/test'

test('launch the Brwoser', async ({ page }) => {
    await page.goto("https://www.google.com/");
    const titleName = await page.title();
    console.log(titleName);
    expect(titleName).toBe('Google');

})
//test.only('locators practice 3', async ({ page }) => {
//  await page.goto("https://www.saucedemo.com/");
// await page.locator("user-name").fill("standard_user");
// await page.locator("input[type='password').fill("secret_sauce");
//await page.locator(".btn_action").click();
// await page.waitForTimeout(5000);
//})

