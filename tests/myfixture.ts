import { test as base,expect} from "@playwright/test";
import { loginPage } from "../pages/loginPage.ts";
import { RegistrationPage } from "../pages/RegistrationPage";
import { productsPage } from "../pages/productsPage";
import { homePage } from "../pages/HomePage";
import { landingPage } from "../pages/landingPage";
import { cartPage } from "../pages/CartPage";



type MyFixtures = {
  LoginPage: loginPage;
  RegistrationPage: RegistrationPage;
  ProductsPage: productsPage;
  HomePage: homePage;
  LandingPage: landingPage;
  CartPage:cartPage;
};

export const test = base.extend<MyFixtures>({
      LoginPage: async ({ page }, use) => {
    const loginPageInstance = new loginPage(page);
    await use(loginPageInstance);
  },
  RegistrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  ProductsPage: async ({ page }, use) => {
    const Productpage = new productsPage(page);
    await Productpage.goto();
    await use(Productpage);
  },
  HomePage: async ({ page }, use) => {
    const HomePage = new homePage(page);
    await HomePage.goto();
    await use(HomePage);
  },
  LandingPage: async ({ page }, use)=>{
    const  LandingPage= new landingPage(page)
    await LandingPage.goto()
    await use(LandingPage)
  },
  CartPage: async ({ page }, use)=>{
    const  CartPage= new cartPage(page)
    await CartPage.goto()
    await use(CartPage)
  },
});

export { expect };


