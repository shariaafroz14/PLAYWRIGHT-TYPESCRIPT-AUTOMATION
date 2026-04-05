import { test, expect } from '@playwright/test';


test('Assertion', async ({ page }) => {
    await page.goto("https://www.youtube.com/");
})