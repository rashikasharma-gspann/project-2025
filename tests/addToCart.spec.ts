import { test, expect } from "@playwright/test";
import { cartPage } from "../pages/CartPage";

// Test: Add first product to cart and click continue

test("Add first product to cart and continue shopping", async ({ page }) => {
  const cart = new cartPage(page);
  await cart.goto();
  // Add first product to cart
  await cart.AddFirstProduct.click();
  // Wait for confirmation message
  await expect(cart.Productadded).toBeVisible();
  // Click Continue Shopping button
  await cart.ContinueBtn.click();
  // Optionally, verify that the user is back on the homepage or products are visible
  await expect(page).toHaveURL(/automationexercise/);
});
