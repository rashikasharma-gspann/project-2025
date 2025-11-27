import { expect } from "@playwright/test";
import { test } from "./myfixture";
import {
  Accountinfo_URL,
  ACTUAL_URL,
  AccountCreated_URL,
} from "../utils/testData.json";

const generateDynamicNameAndEmail = ()=>{
    const timestamp =  new Date().getTime();
    const firstName = "Rashika"
    const lastName = "Sharma"
    const dynamicUserName = `${firstName} ${lastName}${timestamp}`
    const dynamicUserEmail = `${firstName.toLowerCase()}${lastName.toLowerCase()}${timestamp}@gmail.com`
    return{
        dynamicUserName,
        dynamicUserEmail,
    }
}

test("Signup Accout Test", async ({ RegistrationPage, page }) => {
  const { dynamicUserName, dynamicUserEmail } = generateDynamicNameAndEmail();
  await RegistrationPage.goto();
  await RegistrationPage.SignupLoginbtnclick();
  await expect(RegistrationPage.page).toHaveURL(ACTUAL_URL);
  await RegistrationPage.fillSignupDetails(dynamicUserName, dynamicUserEmail);
  await RegistrationPage.ClickSignupBtn();
  await expect(RegistrationPage.page).toHaveURL(Accountinfo_URL);
});

test("Fill Details on registration Page", async ({
  RegistrationPage,
  page,
}) => {
  const { dynamicUserName, dynamicUserEmail } = generateDynamicNameAndEmail();
  await RegistrationPage.goto();
  await RegistrationPage.SignupLoginbtnclick();
  await expect(RegistrationPage.page).toHaveURL(ACTUAL_URL);
  await RegistrationPage.fillSignupDetails(dynamicUserName, dynamicUserEmail);
  await RegistrationPage.ClickSignupBtn();
  await expect(RegistrationPage.page).toHaveURL(Accountinfo_URL);
});
test("Fill other details on registration Page", async ({
  RegistrationPage,
  page,
}) => {
  const { dynamicUserName, dynamicUserEmail } = generateDynamicNameAndEmail();
  await RegistrationPage.goto();
  await RegistrationPage.SignupLoginbtnclick();
  await expect(RegistrationPage.page).toHaveURL(ACTUAL_URL);
  await RegistrationPage.fillSignupDetails(dynamicUserName, dynamicUserEmail);
  await RegistrationPage.ClickSignupBtn();
  await expect(RegistrationPage.page).toHaveURL(Accountinfo_URL);
  await RegistrationPage.fillPassword();
  await RegistrationPage.selectDay("2");
  await RegistrationPage.SelectMonth("January");
  await RegistrationPage.SelectYear("2020");
  await RegistrationPage.AddressinfoHeaderVisible();
  await RegistrationPage.FillFirstName();
  await RegistrationPage.FillLastname();
  await RegistrationPage.FillCompanyName();
  await RegistrationPage.FillAddress();
  await RegistrationPage.FillSecondAddress();
  await RegistrationPage.SelectCountryName("Canada");
  await RegistrationPage.FillStateName();
  await RegistrationPage.FillCityName();
  await RegistrationPage.FillZipCode();
  await RegistrationPage.FillMobileNumber();
  await RegistrationPage.ClickonSubmitbtn();
  await expect(RegistrationPage.page).toHaveURL(AccountCreated_URL);
  await RegistrationPage.AccountCreatedHeadinVisible();
  await RegistrationPage.ContinueBtnClick();
});
