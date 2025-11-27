import { Page } from "@playwright/test";
import { loginPage } from "../pages/LoginPage";

export async function loginUser(page: Page) {
  const login = new loginPage(page);

  await login.goto();
  await login.Loginbtnclick();
  await login.fillDetails();
  await login.loginClick();

  await login.page.waitForSelector('a[href="/logout"]', { state: "visible" });
  await login.page.waitForSelector('a[href="/delete_account"]', {
    state: "visible",
  });
}
