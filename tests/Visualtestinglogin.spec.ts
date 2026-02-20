import { test, expect } from '@playwright/test';
import { LoginPageTest } from '../pages/VisualTesting';


test.describe('Login Page Visual Testing', () => {

  test('Login Page Empty Form Test', async ({ page }) => {
  const loginPage = new LoginPageTest(page);

  await loginPage.goto();

  await expect(loginPage.loginForm)
    .toHaveScreenshot('login/LoginFormEmpty.png', {
      maxDiffPixelRatio: 0.02,
    });
});

  test('Login Page Filled Credentials Test: ', async ({ page }) => {
  const loginPage = new LoginPageTest(page);

  await loginPage.goto();
  await loginPage.fillDetails();

  await expect(loginPage.loginForm)
    .toHaveScreenshot('login/LoginFormWithCredentials.png', {
      mask: [
        loginPage.emailAddressLoc,
        loginPage.passwordLoc,
      ],
      maxDiffPixelRatio: 0.02,  
    });
});


  test('Login Page Error message display test ', async ({ page }) => {
  const loginPage = new LoginPageTest(page);

  await loginPage.goto();
  await loginPage.clickLogin();

  await expect(loginPage.loginForm)
    .toHaveScreenshot('login/LoginForm-ValidationError.png', {
      mask: [loginPage.errorMessageLoc],  
      maxDiffPixelRatio: 0.02,  
    });
});
});
