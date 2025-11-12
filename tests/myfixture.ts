import { test as base, expect, Page } from "@playwright/test";
import { loginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { productsPage } from "../pages/productsPage";
import { homePage } from "../pages/HomePage";


type MyFixtures = {
  LoginPage: loginPage;
  RegistrationPage: RegistrationPage;
  ProductsPage: productsPage;
  HomePage: homePage;
};

export const test = base.extend<MyFixtures>({
  LoginPage: async ({ page }, use) => {
    const login = new loginPage(page);
    await login.goto();
    await login.Loginbtnclick();
    await login.fillDetails();
    await login.loginClick();
    await use(login);
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
});

export { expect };
