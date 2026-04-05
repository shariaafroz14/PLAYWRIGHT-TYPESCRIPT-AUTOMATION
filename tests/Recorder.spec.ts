import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - Dell 15, 13th' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Dell-Generation-i5-1334U-Processor-Keyboard/dp/B0DSFQZTVW/ref=sr_1_1_sspa?crid=1WJDBUQNA6XL9&dib=eyJ2IjoiMSJ9.751WLbxFt7PnhFGcSvz5mlk_6cvk06I6uWaNfjAqnbVmXeK6aBRnbQPv55jS3Udy50F3bDFQkiby1DJTaEV1CuBMb9n9EBBWG-IU9QP3MdcfYsSq-MoXd3Rcfhg3_WUZjHDDYvznhN7Dbef9IiXANATON35LCulr2voikPujABHA1D-JkrweIuk-x0jX6wdOa0JB7ftvxTNEod6WAGi0PrvIXjTuCB4Ed2NnHAZnNNE.HZGd3t7iOIeUVTsKw-ktuPgXxP29xwNLl2OSkqFYj1s&dib_tag=se&keywords=laptop&qid=1773637577&sprefix=laptop%2Caps%2C962&sr=8-1-spons&aref=hblGNX1gro&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
});