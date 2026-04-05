import { test, expect } from '@playwright/test';

test(' Xpath Practice', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("input[type='password']").fill("secret_sacuce");
    await page.locator(".btn_action").click();
})
