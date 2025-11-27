import { Locator, Page, expect } from "@playwright/test";
import { BASE_URL } from "../utils/testData.json";

export class cartPage {
  page: Page;
  AddtoCart: Locator;
  Productadded: Locator;
  viewCartLink: Locator;
  productRow: Locator;
  productPrice: Locator;
  productQuantity: Locator;
  productTotal: Locator;
  checkoutBtn: Locator;
  registerLoginLink: Locator;
  deleteBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.AddtoCart = page.getByText("Add to cart").nth(0);
    this.Productadded = page.getByText("Your product has been added to cart.");
    this.viewCartLink = page.getByRole("link", { name: "View Cart" });
    this.productRow = page.locator("#product-1");
    this.productPrice = page.getByText("Rs. 500").nth(0);
    this.productQuantity = page.getByRole("button", { name: "1" });
    this.productTotal = page.getByText("Rs. 500").nth(1);
    this.checkoutBtn = page.getByText("Proceed To Checkout");
    this.registerLoginLink = page.getByRole("link", {
      name: "Register / Login",
    });
    this.deleteBtn = page.locator("a.cart_quantity_delete");
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }
}