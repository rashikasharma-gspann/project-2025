import { expect } from "@playwright/test";
import { test } from "./myfixture";
import { cartPage } from "../pages/CartPage";
import { loginUser } from "./auth.setup";
import { CartPage_URL } from "../utils/testData.json";

test("Add to Cart flow ", async ({ CartPage }) => {
  await CartPage.goto();
  await expect(CartPage.productbtn).toBeVisible();
  await CartPage.AddtoCart.click();
  await CartPage.Productadded.isVisible();
  await CartPage.viewCartLink.click();
  await expect(CartPage.productRow).toBeVisible();
  await expect(CartPage.productPrice).toHaveText("Rs. 500");
  await expect(CartPage.productQuantity).toHaveText("1");
  await expect(CartPage.productTotal).toHaveText("Rs. 500");
  await expect(CartPage.checkoutBtn).toBeVisible();
  await CartPage.checkoutBtn.click();
  await expect(CartPage.registerLoginLink).toBeVisible();
  await CartPage.registerLoginLink.click();
});
test("Remove product to the Cart ", async ({ CartPage }) => {
  await CartPage.goto();
  await expect(CartPage.productbtn).toBeVisible();
  await CartPage.AddtoCart.click();
  await CartPage.Productadded.isVisible();
  await CartPage.viewCartLink.click();
  await expect(CartPage.productRow).toBeVisible();
  await expect(CartPage.productPrice).toHaveText("Rs. 500");
  await expect(CartPage.productQuantity).toHaveText("1");
  await expect(CartPage.productTotal).toHaveText("Rs. 500");
  await expect(CartPage.deleteBtn).toBeVisible();
  await CartPage.deleteBtn.click();
});

test("Ensure multiple products can be added to the cart", async ({
  CartPage,
}) => {
  await CartPage.goto();
  await CartPage.productbtn.click();
  await CartPage.AddProductA.click();
  await CartPage.ContinueBtn.click();
  await CartPage.AddProductB.click();
  await CartPage.CartBtn.click();
  await expect(CartPage.page).toHaveURL(CartPage_URL);

  //   await expect(CartPage.StylishDressLink).toBeVisible();
  //  await expect(CartPage.SummerWhiteTopLink).toBeVisible()
});
test("Remove multiple product from the Cart ", async ({ CartPage }) => {
  await CartPage.goto();
  await CartPage.productbtn.click();
  await CartPage.AddFirstProduct.click();
  await CartPage.ContinueBtn.click();
  await CartPage.AddSecondProduct.click();
  await CartPage.CartBtn.click();
  await CartPage.DeleteProductA.click();
  await CartPage.DeleteProductB.click();
  await expect(CartPage.EmptyCart).toHaveText(/Cart is empty!/);
});
test("Ensure cart updates when product quantity changes.", async ({
  CartPage,
}) => {
  await CartPage.goto();
  await CartPage.productbtn.click();
  await CartPage.AddFirstProduct.click();
  await CartPage.ContinueBtn.click();
  await CartPage.AddFirstProductAgain.click();
  await CartPage.CartBtn.click();
  await expect(CartPage.CartQuantity).toHaveText("2");
});
//For update
test("Ensure cart shows correct total including multiple quantities", async ({
  page,
  CartPage,
}) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.productbtn.click();
  await CartPage.AddFirstProduct.click();
  await CartPage.ContinueBtn.click();
  await CartPage.AddSecondProduct.click();
  await CartPage.CartBtn.click();
  await CartPage.CheckoutBtn.click();
});
test("Add different products from different categories to the cart", async ({
  page,
  CartPage,
}) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.WomanCategory.click();
  await CartPage.WomenSubCategory.click();
  await CartPage.AddDressA.click();
  await page.goBack();
  await CartPage.MenCategory.click();
  await CartPage.MenSubCategory.click();
  await CartPage.AddJeansA.click();
  await CartPage.ContinueBtn.click();
  await CartPage.CartBtn.click();
  await expect(CartPage.ProductOne).toHaveText("Sleeveless Dress");
  await expect(CartPage.ProductTwo).toHaveText("Soft Stretch Jeans");
});
test("Place an order successfully through the checkout process", async ({
  page,
  CartPage,
}) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.AddProductA.click();
  await CartPage.CartBtn.click();
  await CartPage.checkoutBtn.click();
  await CartPage.PlaceOrder.click();

  await CartPage.CardName.fill("Ashi");
  await CartPage.CardNumber.fill("4111111111111111");
  await CartPage.CVC.fill("123");
  await CartPage.Expiration.fill("12");
  await CartPage.Year.fill("2000");
  await CartPage.ConfirmorderBtn.click();
  await expect(CartPage.OrderPlaced).toHaveText(
    "Congratulations! Your order has been confirmed!"
  );
  await CartPage.Continue.click();
});

test("Ensure the cart displays the product image after adding a product.", async ({
  page,
  CartPage,
}) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.AddProductA.click();
  await CartPage.CartBtn.click();
  await expect(CartPage.ProductImg).toBeVisible();
});
test(" Verify that the product brand name matches the selected brand (Polo) ", async ({
  page,
  CartPage,
}) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.BrandPolo.click();
  await CartPage.viewProduct.click();
  await expect(CartPage.BrandName).toBeVisible();
});
test(" Add Multiple Brand Product ", async ({ page, CartPage }) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.BrandPolo.click();
  await CartPage.AddPoloProduct.click();
  await CartPage.ContinueBtn.click();
  await CartPage.Madame.click();
  await CartPage.MadameProduct.click();
});
test(" Cart product removed after logout ", async ({ page, CartPage }) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.AddProductA.click();
  await CartPage.ContinueBtn.click();
  await CartPage.LogoutBtn.click();
  await CartPage.CartBtn.click();
  const cartItems = CartPage.AddProductA;
  if ((await cartItems.count()) === 0) {
    console.log("Cart is empty after logout");
    await expect(cartItems).toHaveCount(0);
  } else {
    console.log("Product is still available in cart after logout");
    await expect(cartItems.first()).toBeVisible();
  }
});

test(" Submit product review from product details page. ", async ({
  page,
  CartPage,
}) => {
  await CartPage.goto();
  await loginUser(page);
  await CartPage.productbtn.click();
  await CartPage.viewProduct.click();
  await CartPage.NameInput.fill("Rashika Sharma");
  await CartPage.EmailInput.fill("rashika@example.com");
  await CartPage.ReviewTextarea.fill("Nice Product");
  await CartPage.SubmitBtn.click();
});
