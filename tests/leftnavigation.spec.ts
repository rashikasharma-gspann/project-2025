import { expect } from "@playwright/test";
import { test } from "./myfixture";
import { homePage } from "../pages/HomePage";
import { loginUser } from "./auth.setup";

test("Verify the total number of brands displayed in the left navigation panel. ", async ({
  HomePage,
}) => {
  const count = await HomePage.TotalBrandsnumber();
  console.log(`Total brands displayed: ${count}`);
  expect(count).toBe(8);
});

test("Verify the total product of PoloBrand ", async ({ HomePage }) => {
  const countProduct = await HomePage.validatePoloNumber();
  console.log(countProduct);
  console.log(`Total Number of POLO brand product: ${countProduct}`);
  expect(countProduct).toBe(6);
});

test("Verify the total product of H&MBrand ", async ({ HomePage }) => {
  const countProduct = await HomePage.validateHMNumber();
  console.log(countProduct);
  console.log(`Total Number of H and M brand product: ${countProduct}`);
  expect(countProduct).toBe(5);
});

test("Verify the total product of MadameBrand ", async ({ HomePage }) => {
  const countProduct = await HomePage.validateMadameNumber();
  console.log(countProduct);
  console.log(`Total Number of Madame brand product: ${countProduct}`);
  expect(countProduct).toBe(5);
});
test("Verify the total product of Mast and Harbour", async ({ HomePage }) => {
  const countProduct = await HomePage.validateMastandHarbourNumber();
  console.log(countProduct);
  console.log(`Total Number of Mast & Harbour brand product: ${countProduct}`);
  expect(countProduct).toBe(3);
});
test("Verify the total product of BabyHug ", async ({ HomePage }) => {
  const countProduct = await HomePage.validateBabyHugNumber();
  console.log(countProduct);
  console.log(`Total Number of BabyHug brand product: ${countProduct}`);
  expect(countProduct).toBe(4);
});
test("Verify the total product of AllenSolyJunior", async ({ HomePage }) => {
  const countProduct = await HomePage.validateAllenSollyJuniorNumber();
  console.log(countProduct);
  console.log(`Total Number of AllenSolly brand product: ${countProduct}`);
  expect(countProduct).toBe(3);
});

test("Verify the total product of KookieKids ", async ({ HomePage }) => {
  const countProduct = await HomePage.validateKookieKidsNumber();
  console.log(countProduct);
  console.log(`Total Number of KookieKids brand product: ${countProduct}`);
  expect(countProduct).toBe(3);
});
test("Verify the total product of Biba ", async ({ HomePage }) => {
  const countProduct = await HomePage.validateBibaNumber();
  console.log(countProduct);
  console.log(`Total Number of Biba brand product: ${countProduct}`);
  expect(countProduct).toBe(5);
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
  await HomePage.goto();
  await expect(HomePage.Logoutbtnloc).toHaveCSS("color", "rgb(165, 42, 42)");
});
test("Verify the color of Delete button", async ({ page, HomePage }) => {
  await loginUser(page);
  await HomePage.goto();
  await expect(HomePage.Deletebtnloc).toHaveCSS("color", "rgb(165, 42, 42)");
});

// test('Verify the color of Delete button', async ({ page, ButtonUIPage }) => {
//   await loginUser(page);
//   await ButtonUIPage.goto();
//   await ButtonUIPage.isDeletebtnVisible();
//   const deleteButtonColor = await ButtonUIPage.Deletebtnloc.evaluate((el) =>
//     window.getComputedStyle(el).color
//   );

//   expect(deleteButtonColor).toBe('rgb(165, 42, 42)');
// });
