import { expect } from '@playwright/test';
import { test } from './myfixture';
import { Accountinfo_URL, ACTUAL_URL, AccountCreated_URL } from '../utils/testData.json';

test('Signup Accout Test', async ({ RegistrationPage, page }) => {


  await RegistrationPage.goto();
  await RegistrationPage.SignupLoginbtnclick()
  await expect(RegistrationPage.page).toHaveURL(ACTUAL_URL);
  await RegistrationPage.fillSignupDetails()
  await RegistrationPage.ClickSignupBtn()
  await expect(RegistrationPage.page).toHaveURL(Accountinfo_URL);
  await RegistrationPage.isSignupHeaderVisible()
  await RegistrationPage.page.waitForLoadState('domcontentloaded');
  await RegistrationPage.radiobtnClick();
  await expect(RegistrationPage.validateRadiobtn()).toBeTruthy()
  await RegistrationPage.fillPassword()
  await RegistrationPage.selectDay('2');
  await RegistrationPage.SelectMonth('January')
  await RegistrationPage.SelectYear('2020')
  await RegistrationPage.AddressinfoHeaderVisible()
  await RegistrationPage.FillFirstName()
  await RegistrationPage.FillLastname()
  await RegistrationPage.FillCompanyName()
  await RegistrationPage.FillAddress()
  await RegistrationPage.FillSecondAddress()
  await RegistrationPage.SelectCountryName('Canada')
  await RegistrationPage.FillStateName()
  await RegistrationPage.FillCityName()
  await RegistrationPage.FillZipCode();
  await RegistrationPage.FillMobileNumber()
  await RegistrationPage.ClickonSubmitbtn()
  await expect(RegistrationPage.page).toHaveURL(AccountCreated_URL)
  await RegistrationPage.AccountCreatedHeadinVisible()
  await RegistrationPage.ContinueBtnClick()
  
});

  
