// @ts-check
const { test, expect } = require('@playwright/test');
 
test("InstagramACC", async ({page}) => {
  await page.goto("https://www.instagram.com/vaishalibhongade6/");
 
  await expect(page).toHaveTitle(/vaishali bhongade/);
})
 
/* test("btnclick", async ({page}) => {
  await page.goto("https://www.google.co.in/");
 
  await expect(page.getByLabel("Search")).toBeTruthy()
}) */
 
test('get started link', async ({page}) => {
  await page.goto("https://playwright.dev/");
 
await page.getByRole('link', {name: 'Get started'}).click()
 
  await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible();
})
