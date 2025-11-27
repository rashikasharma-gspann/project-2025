import { expect } from "@playwright/test";
import { test } from "./myfixture";
import { BASE_URL } from "../utils/testData.json";
import { ACTUAL_URL, LoginPage_URL } from "../utils/testData.json";
import { loginPage } from "../pages/LoginPage";

test("Login account Test", async ({ LoginPage }) => {
  await LoginPage.goto();
  await LoginPage.Loginbtnclick();
  await expect(LoginPage.page).toHaveURL(ACTUAL_URL);
  await LoginPage.fillDetails();
  await LoginPage.loginClick();
  await LoginPage.loginValidate();
});

test("Login with incorrect email and password", async ({ LoginPage }) => {
  await LoginPage.goto();
  await LoginPage.Loginbtnclick();
  await LoginPage.fillinvalidDetails();
  await LoginPage.loginClick();
  await expect(LoginPage.page).toHaveURL(LoginPage_URL);
});

test("Login with valid details and logout ", async ({ LoginPage }) => {
  await LoginPage.goto();
  await expect(LoginPage.page).toHaveURL(BASE_URL);
  await LoginPage.Loginbtnclick();
  await LoginPage.isLoginHeaderVisible();
  await LoginPage.fillDetails();
  await LoginPage.loginClick();
  await LoginPage.logoutBtnClick();
  await expect(LoginPage.page).toHaveURL(LoginPage_URL);
});
