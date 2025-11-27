import { Locator, Page, expect } from "@playwright/test";
import { BASE_URL } from "../utils/testData.json";

export class RegistrationPage {
  page: Page;
  private SignupLoginbuttonclick: Locator;
  private inputName: Locator;
  private fillemailAddress: Locator;
  private signupClick: Locator;
  private radiobtnMrs: Locator;
  private passwordInput: Locator;
  private DayDropdown: Locator;
  private monthDropdown: Locator;
  private yearDropdown: Locator;
  private Addressinfo: Locator;
  private FirstName: Locator;
  private LastName: Locator;
  private CompanyName: Locator;
  private AddressName: Locator;
  private Address2: Locator;
  private StateName: Locator;
  private CityName: Locator;
  private ZipCode: Locator;
  private MobilNumber: Locator;
  private CountryDropdown: Locator;
  private Submitbtn: Locator;
  private Accountcreated: Locator;
  private Continuebtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SignupLoginbuttonclick = page.getByText(" Signup / Login");
    this.inputName = page.getByPlaceholder("Name");
    this.fillemailAddress = page.locator('[data-qa="signup-email"]');
    this.signupClick = page.locator('[data-qa="signup-button"]');
    this.radiobtnMrs = page.locator("#id_gender2");
    this.passwordInput = page.locator("#password");
    this.DayDropdown = page.locator("#days");
    this.monthDropdown = page.locator("#months");
    this.yearDropdown = page.locator("#years");
    this.Addressinfo = page.getByText("Address Information");
    this.FirstName = page.locator("#first_name");
    this.LastName = page.locator("#last_name");
    this.CompanyName = page.locator("#company");
    this.AddressName = page.locator("#address1");
    this.Address2 = page.locator("#address2");
    this.CountryDropdown = page.locator("#country");
    this.StateName = page.locator("#state");
    this.CityName = page.locator("#city");
    this.ZipCode = page.locator("#zipcode");
    this.MobilNumber = page.locator("#mobile_number");
    this.Submitbtn = page.locator('[data-qa="create-account"]');
    this.Accountcreated = page.getByText("Account Created!");
    this.Continuebtn = page.locator('[data-qa="continue-button"]');
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }

  async SignupLoginbtnclick() {
    await this.SignupLoginbuttonclick.click();
  }
  async fillSignupDetails(name: string, email: string) {
    await this.inputName.fill(name);
    await this.fillemailAddress.fill(email);
  }
  async ClickSignupBtn() {
    await this.signupClick.click();
  }

  async radiobtnClick() {
    await this.radiobtnMrs.click();
  }

  async validateRadiobtn() {
    return await expect(this.radiobtnMrs).toBeChecked();
  }
  async fillPassword() {
    await this.passwordInput.fill("Rashmika123");
  }
  async selectDay(dayValue: string) {
    await this.DayDropdown.selectOption(dayValue);
  }
  async SelectMonth(monthName: string) {
    await this.monthDropdown.selectOption(monthName);
  }
  async SelectYear(year: string) {
    await this.yearDropdown.selectOption(year);
  }
  async AddressinfoHeaderVisible() {
    await expect(this.Addressinfo).toBeVisible();
  }
  async FillFirstName() {
    await this.FirstName.fill("Neha");
  }
  async FillLastname() {
    await this.LastName.fill("Singh");
  }
  async FillCompanyName() {
    await this.CompanyName.fill("Softech");
  }
  async FillAddress() {
    await this.AddressName.fill("Gurgaon");
  }
  async FillSecondAddress() {
    await this.Address2.fill("Delhi");
  }
  async SelectCountryName(countryName: string) {
    await this.CountryDropdown.selectOption(countryName);
  }
  async FillStateName() {
    await this.StateName.fill("Haryana");
  }
  async FillCityName() {
    await this.CityName.fill("Noida");
  }
  async FillZipCode() {
    await this.ZipCode.fill("12023");
  }
  async FillMobileNumber() {
    await this.MobilNumber.fill("123456789");
  }
  async ClickonSubmitbtn() {
    await this.Submitbtn.click();
  }
  async AccountCreatedHeadinVisible() {
    await expect(this.Accountcreated).toBeVisible();
  }
  async ContinueBtnClick() {
    await this.Continuebtn.click();
  }
}
