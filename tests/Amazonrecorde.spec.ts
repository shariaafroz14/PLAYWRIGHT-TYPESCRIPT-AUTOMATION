import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobile');
    await page.getByRole('button', { name: 'mobile phone under 20000' }).click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
});