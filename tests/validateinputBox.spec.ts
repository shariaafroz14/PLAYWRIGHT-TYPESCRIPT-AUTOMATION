import { test, expect } from '@playwright/test';

test("input Box ", async ({ page }) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#headingOne .accordion-button collapsed").click();
    await page.getByText(" Text Box").click();
    await expect(page).toHaveTitle("Selenium - Automation Practice Form");
    await expect(page.locator("TextForm h1")).toHaveText(" Text Box");
    await page.getByPlaceholder("Full Name").fill("Test User");
    await page.getByPlaceholder("name@example.com").fill("Testuser@test.com")
    await page.getByPlaceholder("Currend Address").fill("#01 ,Test area,Test city,");
    await page.locator("btn btn-primary").click();

})