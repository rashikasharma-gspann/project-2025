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
  productbtn: Locator;
  AddProductA: Locator;
  AddProductB: Locator;
  CartBtn: Locator;
  StylishDressLink: Locator;
  SummerWhiteTopLink: Locator;
  ContinueBtn: Locator;
  AddFirstProduct: Locator;
  AddSecondProduct: Locator;
  DeleteProductA: Locator;
  DeleteProductB: Locator;
  EmptyCart: Locator;
  AddFirstProductAgain: Locator;
  CartQuantity: Locator;
  CheckoutBtn: Locator;
  TotalAmount: Locator;
  WomanCategory: Locator;
  WomenSubCategory: Locator;
  AddDressA: Locator;
  MenCategory: Locator;
  AddJeansA: Locator;
  MenSubCategory: Locator;
  ProductOne: Locator;
  ProductTwo: Locator;
  PlaceOrder: Locator;
  CardName: Locator;
  CardNumber: Locator;
  CVC: Locator;
  Expiration: Locator;
  Year: Locator;
  ConfirmorderBtn: Locator;
  OrderPlaced: Locator;
  Continue: Locator;
  ProductImg: Locator;
  BrandPolo: Locator;
  viewProduct: Locator;
  BrandName: Locator;
  Madame: Locator;
  AddPoloProduct: Locator;
  MadameProduct: Locator;
  LogoutBtn: Locator;
  NameInput: Locator;
  EmailInput: Locator;
  ReviewTextarea: Locator;

  SubmitBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productbtn = page.getByRole("link", { name: "Products" });
    this.AddtoCart = page.getByText("Add to cart").nth(0);
    //this.AddSecondProduct = page.getByText("Add to cart").nth(3);
    this.Productadded = page.getByText("Your product has been added to cart.");
    this.productRow = page.locator("#product-1");
    this.productPrice = page.getByText("Rs. 500").nth(0);
    this.productQuantity = page.getByRole("button", { name: "1" });
    this.productTotal = page.getByText("Rs. 500").nth(1);
    this.checkoutBtn = page.getByText("Proceed To Checkout");
    this.registerLoginLink = page.getByRole("link", {
      name: "Register / Login",
    });
    this.deleteBtn = page.locator("a.cart_quantity_delete");
    this.viewCartLink = page.getByRole("link", { name: "View Cart" });
    this.AddProductA = page.getByText("Add to cart").nth(4);
    this.AddProductB = page.getByText("Add to cart").nth(6);
    this.ContinueBtn = page.getByRole("button", { name: "Continue Shopping" });
    // this.CartBtn = page.locator('a[href="/view_cart"]')
    this.CartBtn = page.locator("//a[text()=' Cart']");
    this.StylishDressLink = page.getByRole("link", { name: "Stylish Dress" });
    this.SummerWhiteTopLink = page.getByRole("link", {
      name: "Summer White Top",
    });
    this.AddFirstProduct = page.getByText("Add to cart").nth(0);
    this.AddSecondProduct = page.getByText("Add to cart").nth(2);
    this.DeleteProductA = page.locator(
      'a.cart_quantity_delete[data-product-id="1"]'
    );
    this.DeleteProductB = page.locator(
      "a.cart_quantity_delete[data-product-id]"
    );
    this.EmptyCart = page.getByText("Cart is empty!");
    this.AddFirstProductAgain = page.getByText("Add to cart").nth(0);
    this.CartQuantity = page.getByRole("button", { name: "2" });
    this.CheckoutBtn = page.getByText("Proceed To Checkout");
    this.TotalAmount = page.locator("p.cart_total_price").nth(3);
    this.WomanCategory = page.getByRole("link", { name: "Women" });
    this.WomenSubCategory = page.getByRole("link", { name: "Dress" });
    this.AddDressA = page.getByRole("link", { name: "Add to cart" }).nth(0);
    this.MenCategory = page.locator('a[href="#Men"]');
    this.MenSubCategory = page.getByRole("link", { name: "Jeans" });
    this.AddJeansA = page.getByRole("link", { name: "Add to cart" }).nth(0);
    this.ProductOne = page.getByRole("link", { name: "Sleeveless Dress" });
    this.ProductTwo = page.getByRole("link", { name: "Soft Stretch Jeans" });
    this.PlaceOrder = page.getByRole("link", { name: "Place Order" });
    this.CardName = page.locator('input[name="name_on_card"]');

    this.CardNumber = page.locator('input[name="card_number"]');

    this.CVC = page.locator('input[name="cvc"]');
    this.Expiration = page.locator('input[name="expiry_month"]');
    this.Year = page.locator('input[name="expiry_year"]');
    this.ConfirmorderBtn = page.getByRole("button", {
      name: "Pay and Confirm Order",
    });
    this.OrderPlaced = page.getByText(
      "Congratulations! Your order has been confirmed!"
    );
    this.Continue = page.getByRole("link", { name: "Continue" });
    this.ProductImg = page.getByAltText("Product Image").nth(0);
    this.BrandPolo = page.getByRole("link", { name: "Polo" });
    this.viewProduct = page.getByRole("link", { name: "View Product" }).nth(1);
    this.BrandName = page.getByText("Brand: Polo");
    this.Madame = this.page.getByRole("link", { name: "Madame" });
    this.AddPoloProduct = page
      .getByRole("link", { name: "Add to cart" })
      .nth(8);
    this.MadameProduct = page.getByRole("link", { name: "Add to cart" }).nth(0);
    this.LogoutBtn = page.getByRole("link", { name: " Logout" });

    this.NameInput = page.getByPlaceholder("Your Name");
    this.EmailInput = page.getByPlaceholder("Email Address").nth(0);
    this.ReviewTextarea = page.getByPlaceholder("Add Review Here!");

    this.SubmitBtn = page.getByRole("button", { name: "Submit" });
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }
  async isvisible() {
    return await expect(this.AddProductB).toBeVisible();
  }
}
