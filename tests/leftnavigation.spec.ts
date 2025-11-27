import { expect } from "@playwright/test";
import { test } from "./myfixture";
import { homePage } from "../pages/HomePage";
import { loginUser } from "./auth.setup";
import {
  ProductPage_URL,
  CartPage_URL,
  LoginPage_URL,
} from "../utils/testData.json";

test("Verify the total number of brands displayed in the left navigation panel. ", async ({
  HomePage,
}) => {
  const count = await HomePage.TotalBrandsnumber();
  console.log(`Total brands displayed: ${count}`);
  expect(count).toBe(8);
});

test("Verify Polo brand product count", async ({ HomePage }) => {
  const count = await HomePage.validatePoloNumber();
  expect(count).toBe(6);
});

test("Verify the total product of H&MBrand ", async ({ HomePage }) => {
  const countProduct = await HomePage.validateHMNumber();
  console.log(countProduct);
  console.log(`Total Number of H and M brand product: ${countProduct}`);
  expect(countProduct).toBe(5);
});
test("Verify Madame brand product count", async ({ HomePage }) => {
  const count = await HomePage.validateMadameNumber();
  expect(count).toBe(5);
});

test("Verify Mast & Harbour brand product count", async ({ HomePage }) => {
  const count = await HomePage.validateMastandHarbourNumber();
  expect(count).toBe(3);
});

test("Verify BabyHug brand product count", async ({ HomePage }) => {
  const count = await HomePage.validateBabyHugNumber();
  expect(count).toBe(4);
});

test("Verify Allen Solly Junior brand product count", async ({ HomePage }) => {
  const count = await HomePage.validateAllenSollyJuniorNumber();
  expect(count).toBe(3);
});

test("Verify KookieKids brand product count", async ({ HomePage }) => {
  const count = await HomePage.validateKookieKidsNumber();
  expect(count).toBe(3);
});

test("Verify Biba brand product count", async ({ HomePage }) => {
  const count = await HomePage.validateBibaNumber();
  expect(count).toBe(5);
});

test("verify for the adidas brand", async ({ HomePage }) => {
  const isAdidasPresent = await HomePage.validateBrand();
  expect(isAdidasPresent).toBe(false);
});

test("Verify the color of HomepageButton. ", async ({ HomePage }) => {
  await HomePage.goto();
  await expect(HomePage.HomeBtnloc).toHaveCSS("color", "rgb(255, 165, 0)");
});

test("Login account ", async ({ LoginPage }) => {
  await LoginPage.goto();
  await LoginPage.Loginbtnclick();
  await LoginPage.fillDetails();
  await LoginPage.loginClick();
});
test("Verify the color of Logout button", async ({ page, HomePage }) => {
  await loginUser(page);
  // await HomePage.goto();
  await expect(HomePage.Logoutbtnloc).toHaveCSS("color", "rgb(165, 42, 42)");
});
test("Verify the color of Delete button", async ({ page, HomePage }) => {
  await loginUser(page);
  // await HomePage.goto();
  await expect(HomePage.Deletebtnloc).toHaveCSS("color", "rgb(165, 42, 42)");
});

test("Add the product to the cart ", async ({ HomePage }) => {
  await HomePage.goto();
  await HomePage.AddtoCartloc.click();
  await HomePage.productadded.isVisible();
});
