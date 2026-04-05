import { test, expect } from '@playwright/test';

test.skip('locators practice', async ({ page }) => {
     await page.goto("https://www.amazon.in/");
     await page.getByRole("searchbox", { name: 'search Amazon.in' }).fill("laptop");
     await page.getByRole("button", { name: 'Go exact:true' }).click();
     await page.getByText("laptop").click();
     await page.getByText("customer service").click();
     await page.waitForTimeout(5000);


}
)



