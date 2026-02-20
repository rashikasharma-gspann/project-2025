import { Page, Locator } from '@playwright/test';

export class LoginPageTest {
  readonly page: Page;
  readonly emailAddressLoc: Locator;
  readonly passwordLoc: Locator;
  readonly loginButtonLoc: Locator;
  readonly loginForm: Locator;
  readonly errorMessageLoc: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailAddressLoc = page.locator('input[data-qa="login-email"]');
    this.passwordLoc = page.locator('input[data-qa="login-password"]');
    this.loginButtonLoc = page.locator('button[data-qa="login-button"]');
    this.loginForm = page.locator('.login-form');
    this.errorMessageLoc = page.locator('p', { hasText: 'Your email or password is incorrect!' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async fillDetails() {
    await this.emailAddressLoc.fill('stuti12345@gmail.com');
    await this.passwordLoc.fill('stuti123');
  }

  async clickLogin() {
    await this.loginButtonLoc.click();
  }
}
