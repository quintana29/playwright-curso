import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('tets 3', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');

  await page.locator('input[id=\'cb1-edit\']').fill('Iphone');
  await page.keyboard.press('Enter');

  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
  //await page.pause();

  const tittles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h2').allInnerTexts()

  console.log('The total number of result is', tittles.length)
  tittles.forEach( tittle => 
    console.log('The tittle is', tittle));

});

test('test locator', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.pause();

  await page.locator('#name').fill('algo');
  //Buscar elemento por xpath
  await page.locator('xpath=//input[@class="form"]').fill('algo');
  await page.locator('//input[@class="form"]').fill('algo');
  //Buscar elemento por selector
  await page.locator('input[class="form"]').fill('algo');
  await page.pause();


});

test('test locator 2', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');

  //await page.getByPlaceholder('foo').fill('algo');
  //await page.getByAltText('foo').click();

  //await page.getByRole('link', {name: 'Mis compras'}).click();
  await page.getByRole('link', {name: 'Ingresa', exact: true}).click();
  await page.pause();

  
});
