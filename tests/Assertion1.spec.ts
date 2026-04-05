import { test, expect } from '@playwright/test';
import { execPath } from 'process';

test('Assertion', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    const logo = page.locator(".login_logo");
    await expect(logo).toBeVisible();
    const userName = page.locator("#user-name");
    await expect(userName).toBeEnabled();
    const userNmaes = page.locator("#login_credentials h4")
    await expect(userName).toHaveText("Accepted usernames are:")
    const someText = page.locator(".login_password h4");
    await expect(someText).toContainText("all");
    const attributeValue = page.locator("#user-name");
    await expect(attributeValue).toHaveAttribute('username');
    await expect(attributeValue).toHaveClass("from_input")

    await expect(page.locator("user-name")).toHaveAttribute('placeholder', 'username');


})