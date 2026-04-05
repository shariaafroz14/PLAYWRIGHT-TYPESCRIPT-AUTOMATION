import {test ,expect} from '@playwright/test';

test('Locators Practice',async ({page})=>
{
  //  await page.goto("https://www.amazon.in/");
//await page.getByRole('searchbox',{name:'search Amazon.in'}).fill("laptop");
 //   await page.getByRole('button',{name:'Go exact:true'}).click();
 //   await page.waitForTimeout(5000););
    await page.waitForTimeout(5000);
})

test.skip('locators practice 2', async ({page})=>
{
  await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("input[type='password']").fill("secret_sacuce");
  await page.locator(".btn_action").click();
})



