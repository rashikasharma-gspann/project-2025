import { expect } from "@playwright/test";
import { test } from "./myfixture";
import { cartPage } from "../pages/CartPage";

test("Add to Cart flow ", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.productbtn).toBeVisible();
  await LandingPage.AddtoCart.click();
  await LandingPage.Productadded.isVisible();
  await LandingPage.viewCartLink.click()
  await expect(LandingPage.productRow).toBeVisible();
  await expect(LandingPage.productPrice).toHaveText('Rs. 500');
  await expect(LandingPage.productQuantity).toHaveText('1');
  await expect(LandingPage.productTotal).toHaveText('Rs. 500');
  await expect(LandingPage.checkoutBtn).toBeVisible();
  await LandingPage.checkoutBtn.click();
  await expect(LandingPage.registerLoginLink).toBeVisible()
   await LandingPage.registerLoginLink.click()

});
test("Remove product to the Cart ", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.productbtn).toBeVisible();
  await LandingPage.AddtoCart.click();
  await LandingPage.Productadded.isVisible();
  await LandingPage.viewCartLink.click()
  await expect(LandingPage.productRow).toBeVisible();
  await expect(LandingPage.productPrice).toHaveText('Rs. 500');
  await expect(LandingPage.productQuantity).toHaveText('1');
  await expect(LandingPage.productTotal).toHaveText('Rs. 500');
  await expect(LandingPage.deleteBtn).toBeVisible();
  await LandingPage.deleteBtn.click()
});





  
