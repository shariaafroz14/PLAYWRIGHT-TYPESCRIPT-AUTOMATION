import { test, expect } from '@playwright/test';

//test.skip('Locators Practice', async ({page})=>


// await page.goto("https://www.amazon.in/");
//await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill("laptop");
//await page.getByRole('button',{name:'Go', exact: true}).click();
//  await page.waitForTimeout(5000);

//wait page.getByAltText("Customer Service").click();
//await page.waitForTimeout(5000);

//test.skip('Locators Practice 2', async ({ page }) => {
//  await page.goto("https://www.tutorialspoint.com/selenium/practice/register.php");
//  const labelName = page.getByLabel("firstname");
// await expect(labelName).toBeVisible();
//})

//test('locators Practice 2', async ({ page }) => {

//  await page.goto("https://www.flipkart.com/search?q=grocery+all+item&sid=eat%2C18p&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&as-pos=1&as-type=RECENT&suggestionId=grocery+all+item%7CEdible+Oil&requestId=19cd53ba-57e9-446b-a5a5-2eb848f6a819&as-searchtext=grocery%20all%20item");
// page.getByAltText("Search for products, brands and more").click();
// await page.waitForTimeout(5000);}})
//

//test('locators Practice 3', async ({ page }) => {
// await page.goto("https://www.amazon.in/");
//  await page.getByTestId("Customer Service").click();
//  await page.waitForTimeout(5000);
//})

//test('Locators Practice 3', async ({ page }) => {
//  await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
//  const labelName = page.getByLabel("name");
//  await expect(labelName).toBeVisible();
//  await page.getByPlaceholder("First Name").fill("Test User");
//  await page.waitForTimeout(5000);
//})

test('Locators Practice 3', async ({ page }) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    const labelName = page.getByLabel("name");
    await expect(labelName).toBeVisible();
    await page.getByPlaceholder("First Name").fill("Test USer");
    await page.waitForTimeout(5000);


})