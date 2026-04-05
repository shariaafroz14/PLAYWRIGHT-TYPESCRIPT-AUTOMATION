import { test, expect } from '@playwright/test';

test('locators Practice', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByRole('searchbox', { name: 'search Amazon.in' }).fill("laptop");
    await page.getByRole('searchbox', { name: 'Go', exact: true }).click();
})


