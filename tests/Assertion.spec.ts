import { test, expect } from '@playwright/test';
import { execPath } from 'process';

test('Assertion', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    const logo = page.locator(".login_logo");
    await expect(logo).toBeVisible();
})