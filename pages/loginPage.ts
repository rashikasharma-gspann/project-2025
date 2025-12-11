import { Locator, Page, expect } from "@playwright/test";
import { BASE_URL } from "../utils/testData.json";
import { writeResultToExcel } from "../utils/excelWrite";

const excelPath = "C:/Users/RashikaSharma/Desktop/Project2025/utils/dummy.xlsx";
const sheet = "Sheet1";

export class loginPage {
  page: Page;

  private SignupLoginbtnLoc: Locator;
  private emailAddressLoc: Locator;
  private passwordLoc: Locator;
  private loginbtnLoc: Locator;
  private errormessageLoc: Locator;
  private logoutbtn: Locator;
  private loginHeader: Locator;
  private loginbtnvalLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SignupLoginbtnLoc = page.getByText(" Signup / Login");
    this.emailAddressLoc = page.locator('[data-qa="login-email"]');
    this.passwordLoc = page.locator('[data-qa="login-password"]');
    this.loginbtnLoc = page.locator('button[data-qa="login-button"]');
    this.loginbtnvalLoc = page.getByText(" Logged in as ");
    this.errormessageLoc = page.getByText(
      "Your email or password is incorrect!"
    );
    this.loginHeader = page.getByText("Login to your account");
    this.logoutbtn = page.getByText("Logout");
  }

  private async logTestDetails(email: string, password: string) {
    const row = {
      Email: email,
      Password: password,
      Timestamp: new Date().toLocaleString(),
    };
    await writeResultToExcel(excelPath, sheet, row);
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }

  async Loginbtnclick() {
    await this.SignupLoginbtnLoc.click();
  }

  async fillDetails() {
    await this.emailAddressLoc.fill("stuti12345@gmail.com");
    await this.passwordLoc.fill("stuti123");
  }

  async loginClick() {
    await this.logTestDetails("stuti12345@gmail.com", "stuti123");
    await this.loginbtnLoc.click();
  }

  async fillinvalidDetails() {
    await this.emailAddressLoc.fill("sharma123@");
    await this.passwordLoc.fill("12345");
  }

  async getErrorMsg() {
    return this.errormessageLoc;
  }

  async isLoginHeaderVisible() {
    await expect(this.loginHeader).toBeVisible();
  }

  async logoutBtnClick() {
    await this.logoutbtn.click();
  }

  async loginValidate() {
    return await this.loginbtnvalLoc.textContent();
  }
}