import { Locator, Page, expect } from "@playwright/test";
import { BASE_URL } from "../utils/testData.json";

export class landingPage {
  page: Page;
  sitelogo: Locator;
  navBar: Locator;
  productbtn: Locator;
  searchbtn: Locator;
  SaleImg: Locator;
  CartBtn: Locator;
  HomeBtn: Locator;
  ShoppingcartBtn: Locator;
  SignupLoginBtn: Locator;
  EmailAddressLoc: Locator;
  PasswordLoc: Locator;
  LoginbtnLoc: Locator;
  testCasebtn: Locator;
  apiTestingbtn: Locator;
  videotutorialsbtn: Locator;
  Contactusbtn: Locator;
  CategoryHeading: Locator;
  WomenCategoryloc: Locator;
  MenCategoryloc: Locator;
  KidsCategoryloc: Locator;
  DressLoc: Locator;
  TopsLoc: Locator;
  SareeLoc: Locator;
  TshirtLoc: Locator;
  JeansLoc: Locator;
  KidsDressLoc: Locator;
  TopsTshirt: Locator;
  Searchinputbox: Locator;
  SearchButton: Locator;
  SearchResult: Locator;
  footer: Locator;
  subscriptionHeading: Locator;
  EmailAddress: Locator;
  arrowIcon: Locator;
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
    this.sitelogo = page.getByRole("img", {
      name: "Website for automation practice",
    });
    this.navBar = page.locator("ul.navbar-nav");
    this.productbtn = page.getByRole("link", { name: "Products" });
    this.searchbtn = page.locator("#search_product");
    this.SaleImg = page.locator("#sale_image");
    this.CartBtn = page.getByRole("link", { name: "Cart" });
    this.HomeBtn = page.getByRole("link", { name: "Home" }).nth(0);
    this.ShoppingcartBtn = page.getByText("Shopping Cart");
    this.SignupLoginBtn = page.getByText(" Signup / Login");
    this.EmailAddressLoc = page.locator('[data-qa="login-email"]');
    this.PasswordLoc = page.locator('[data-qa="login-password"]');
    this.LoginbtnLoc = page.locator('button[data-qa="login-button"]');
    this.testCasebtn = page.locator('a:has-text("Test Cases")').nth(0);
    this.apiTestingbtn = page.getByRole("link", { name: "API Testing" });
    this.videotutorialsbtn = page.getByText(" Video Tutorials");
    this.Contactusbtn = page.getByText(" Contact us");
    this.CategoryHeading = page.getByRole("heading", { name: "Category" });
    this.WomenCategoryloc = page.getByRole("link", { name: "Women" });
    this.DressLoc = page.getByRole("link", { name: "Dress " }).nth(0);
    this.TopsLoc = page.getByRole("link", { name: "Tops" });
    this.SareeLoc = page.getByRole("link", { name: "Saree " });
    this.MenCategoryloc = page.locator('a[href="#Men"]');
    this.KidsCategoryloc = page.locator('a[href="#Kids"]');
    this.TshirtLoc = page.getByText("Tshirts ");
    this.JeansLoc = page.getByRole("link", { name: "Jeans" });
    this.KidsDressLoc = page.getByRole("link", { name: "Dress " }).nth(1);
    this.TopsTshirt = page.getByRole("link", { name: "Tops & Shirts" });
    this.Searchinputbox = page.getByPlaceholder("Search Product");
    this.SearchButton = page.locator("#submit_search");
    this.SearchResult = page.getByText("Blue Top").nth(0);
    this.footer = page.locator("#footer");
    this.subscriptionHeading = page.getByRole("heading", {
      name: "Subscription",
    });
    this.EmailAddress = page.getByPlaceholder("Your email address");
    this.arrowIcon = page.locator(".fa-arrow-circle-o-right");
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
  async validateJeansLink() {
    return expect(this.JeansLoc).toContainText("Jeans ");
  }
}
