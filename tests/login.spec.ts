import { expect } from '@playwright/test';
import { test } from './myfixture' 
import { BASE_URL } from '../utils/testData.json';
import { ACTUAL_URL } from '../utils/testData.json';

test('Login account Test', async ({ LoginPage}) => {


  await LoginPage.goto();
  await LoginPage.Loginbtnclick();
  //await page.waitForLoadState('domcontentloaded')
  await expect(LoginPage.page).toHaveURL(ACTUAL_URL);
  await LoginPage.fillDetails();
  await LoginPage.loginClick();
  //await expect(page).toHaveURL(LoginPage_URL)

});

test('Login with incorrect email and password', async ({ LoginPage }) => {


  await LoginPage.goto();
  await LoginPage.Loginbtnclick();
  await LoginPage.fillinvalidDetails();
  await LoginPage.loginClick();
  await expect(LoginPage.page).toHaveURL(ACTUAL_URL);
  // await expect(LoginPage.getErrorMsg()).toBe('Your email or password is incorrect!');
});

test('Login with valid details and logout ',async({ LoginPage})=>{

  await LoginPage.goto()
  await expect(LoginPage.page).toHaveURL(BASE_URL);
  await LoginPage.Loginbtnclick();
  //await expect(LoginPage.page).toBe('Login to your account')
  await LoginPage.isLoginHeaderVisible();
  await LoginPage.fillDetails()
  await LoginPage.loginClick()
  await LoginPage.logoutBtnClick()
  await expect(LoginPage.page).toHaveURL(ACTUAL_URL)


  
});
