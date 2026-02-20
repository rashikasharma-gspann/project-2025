import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/Dashboardvisualtesting';
import fs from 'fs';



  test('Dashboard Page Visual Test Ignore First Product', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.goto();

  await expect(dashboardPage.productSection).toBeVisible();
  await expect(dashboardPage.firstProduct).toBeVisible();

  await expect(dashboardPage.productSection)
  .toHaveScreenshot('dashboard/dashboard-ignore-first-product.png', {
    mask: [dashboardPage.firstProduct],
    maxDiffPixelRatio: 0.02,
  });
  })

test('Dashboard Page Visual Test Ignore Third Product', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.goto();

  await expect(dashboardPage.productSection).toBeVisible();
  await expect(dashboardPage.thirdProduct).toBeVisible();

  await expect(dashboardPage.productSection).toHaveScreenshot('dashboard/dashboard-ignore-third-product.png', {
    mask: [dashboardPage.thirdProduct],
    maxDiffPixelRatio: 0.02,
  });
});



  test(' Add product from Dashboard and validate cart visual', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goto();
    await expect(dashboardPage.productSection).toBeVisible();
     await dashboardPage.addFirstProduct.click();
      await Promise.all([
      page.waitForURL('**/view_cart'),
      dashboardPage.viewCart.click(),
    ]);
    const cartRow = page.locator('.cart_info tbody tr').first();
    await expect(cartRow).toBeVisible();
    await expect(cartRow).toHaveScreenshot('dashboard/cart-row-visual.png', {
      mask: [
        cartRow.locator('.cart_price'),
        cartRow.locator('.cart_total'),
        cartRow.locator('.cart_quantity'),
      ],
      maxDiffPixelRatio: 0.02,
    });
  });

//Here we are doing cross-page consistency and we are checking and comparing product image from dashboard and cartpage
 
test('Dashboard → Cart product visual comparison', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.goto();
  await expect(dashboardPage.productSection).toBeVisible();
  const dashboardProductImage = dashboardPage.firstProduct.locator('img');
  await dashboardProductImage.waitFor({ state: 'visible' });
  const dashboardBuffer = await dashboardProductImage.screenshot();

  await dashboardPage.addFirstProduct.click();
  await Promise.all([
    page.waitForURL('**/view_cart'),
    dashboardPage.viewCart.click(),
  ]);

  const cartProductImage = page
    .locator('.cart_info tbody tr')
    .first()
    .locator('img');

  await cartProductImage.waitFor({ state: 'visible' });
  const cartBuffer = await cartProductImage.screenshot();
  expect(cartBuffer).toMatchSnapshot('dashboard/dashboard-vs-cart-product.png', {
    maxDiffPixelRatio: 0.05,
  });
});










// test('Dashboard Cart Cross-Page Visual Test', async ({ page }) => {
//   const dashboardPage = new DashboardPage(page);

//   // Go to Dashboard
//   await dashboardPage.goto();
//   await expect(dashboardPage.productSection).toBeVisible();

//   // Wait for first product image
//   const dashboardImage = dashboardPage.firstProduct.locator('img');
//   await expect(dashboardImage).toBeVisible();

//   // Take dashboard screenshot
//   await expect(dashboardImage).toHaveScreenshot('dashboard-first-product.png', {
//     maxDiffPixelRatio: 0.02,
//   });

//   // Get dashboard image src
//   const dashboardImgSrc = await dashboardImage.getAttribute('src');

//   // Add first product to cart
//   await dashboardPage.addFirstProduct.click();

//   // Navigate to cart
//   await Promise.all([
//     page.waitForURL('**/view_cart'),
//     dashboardPage.viewCart.click(),
//   ]);

//   // Wait for first cart row image
//   const cartImage = page
//     .locator('.cart_info tbody tr')
//     .first()
//     .locator('img');
//   await expect(cartImage).toBeVisible();

//   // Take cart screenshot
//   await expect(cartImage).toHaveScreenshot('cart-first-product.png', {
//     maxDiffPixelRatio: 0.02,
//   });

//   // Get cart image src
//   const cartImgSrc = await cartImage.getAttribute('src');

//   // Normalize URLs to avoid leading slash mismatch
//   const normalize = (src: string | null) => src?.replace(/^\//, '');

//   expect(normalize(cartImgSrc)).toBe(normalize(dashboardImgSrc));
// });
