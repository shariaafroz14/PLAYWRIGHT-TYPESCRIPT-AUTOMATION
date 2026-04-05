import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator("twotabsearchtextbox").click();
    await page.waitForSelector("[id*='sac-suggestion-row']");
    await page.locator("[id*='sac-suggestion-row']"), { state: 'visible' }
    const elements = await page.locator("[id*='sac-suggestion-row']").all();
    console.log("number of mathing elements" + elements.length);
    const elementText = await page.locator("[id*='sac-suggestion-row']").allTextContents();
    console.log(elementText);

    for (const ele of elements) {
        await expect(ele).toContainText("book");
    }
    await page.locator("[id*='sac-suggestion-row']").first().click();
    await page.waitForTimeout(5000);



});