import { Locator, Page, expect } from "@playwright/test";
import { BASE_URL } from "../utils/testData.json";

export class homePage {
  page: Page;
  TotalBrands: Locator;
  private pololoc: Locator;
  private HMloc: Locator;
  private Madameloc: Locator;
  private MastandHarbourloc: Locator;
  private Babyhugloc: Locator;
  private AllenSollyJuniorloc: Locator;
  private KookieKidsloc: Locator;
  private Bibaloc: Locator;
  HomeBtnloc: Locator;
  Logoutbtnloc: Locator;
  Deletebtnloc: Locator;
  SignupLoginbtn: Locator;
  AddtoCartloc: Locator;
  productadded: Locator;

  constructor(page: Page) {
    this.page = page;
    this.TotalBrands = page.locator("ul.nav.nav-pills.nav-stacked > li");
    this.pololoc = page.getByRole("link", { name: /Polo/i });
    this.HMloc = page.getByRole("link", { name: /H&M/i });
    this.Madameloc = page.getByRole("link", { name: /Madame/i });
    this.MastandHarbourloc = page.getByRole("link", { name: /Mast.*Harbour/i });
    this.Babyhugloc = page.getByRole("link", { name: /Babyhug/i });
    this.AllenSollyJuniorloc = page.getByRole("link", {
      name: /Allen.*Solly.*Junior/i,
    });
    this.KookieKidsloc = page.getByRole("link", { name: /Kookie.*Kids/i });
    this.Bibaloc = page.getByRole("link", { name: /Biba/i });
    this.HomeBtnloc = page.getByRole("link", { name: "Home" });
    this.SignupLoginbtn = page.locator('a[href="/login"]');
    this.Logoutbtnloc = this.page.getByRole("link", { name: "Logout" });
    this.Deletebtnloc = page.locator('a[href="/delete_account"]');
    this.AddtoCartloc = page.getByText("Add to cart").nth(0);
    this.productadded = page.getByText("Your product has been added to cart.");
  }
  async goto() {
    await this.page.goto(BASE_URL);
  }
  async TotalBrandsnumber() {
    const count = this.TotalBrands.count();
    return await this.TotalBrands.count();
  }
  async validatePoloNumber() {
    const BrandValue = await this.pololoc.innerText();
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );

    return Brandcount;
  }
  async validateHMNumber() {
    const BrandValue = await this.HMloc.innerText();
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );

    return Brandcount;
  }
  async validateMadameNumber() {
    const BrandValue = await this.Madameloc.innerText();
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );

    return Brandcount;
  }
  async validateMastandHarbourNumber() {
    const BrandValue = await this.MastandHarbourloc.innerText();
    console.log("Mast", BrandValue);
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );

    return Brandcount;
  }
  async validateBabyHugNumber() {
    const BrandValue = await this.Babyhugloc.innerText();
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );

    return Brandcount;
  }
  async validateAllenSollyJuniorNumber() {
    const BrandValue = await this.AllenSollyJuniorloc.innerText();
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );

    return Brandcount;
  }
  async validateKookieKidsNumber() {
    const BrandValue = await this.KookieKidsloc.innerText();
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );

    return Brandcount;
  }
  async validateBibaNumber() {
    const BrandValue = await this.Bibaloc.innerText();
    const Brandcount = await parseInt(
      BrandValue.replace(/[()]/g, "").trim(),
      10
    );
    return Brandcount;
  }

  async TotalNumberofProduct() {
    const counts = [
      await this.validatePoloNumber(),
      await this.validateHMNumber(),
      await this.validateMadameNumber(),
      await this.validateMastandHarbourNumber(),
      await this.validateBabyHugNumber(),
      await this.validateAllenSollyJuniorNumber(),
      await this.validateKookieKidsNumber(),
      await this.validateBibaNumber(),
    ];
    const total = counts.reduce((sum, count) => sum + count, 0);
    return total;
    console.log(total)
  }

  async validateBrand() {
    const count = await this.TotalBrands.count();
    for (let i = 0; i < count; i++) {
      const brandName = await this.TotalBrands.nth(i).textContent();
      if (brandName === "Adidas") {
        return true;
      }
    }
    return false;
  }

  async isLogoutbtnVisible() {
    await expect(this.Logoutbtnloc).toBeVisible();
  }
  async isDeletebtnVisible() {
    await expect(this.Deletebtnloc).toBeVisible();
  }
}
