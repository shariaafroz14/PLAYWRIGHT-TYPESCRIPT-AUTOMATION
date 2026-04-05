import { test, expect } from '@playwright/test';

test('Assertion', async ({ page }) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/register.php");
    await page.locator("#name").fill("Test User");
    await page.locator("#email").fill("Test Email")



})