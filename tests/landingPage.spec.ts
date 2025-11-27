import { expect } from "@playwright/test";
import { test } from "./myfixture";
import { homePage } from "../pages/HomePage";
import { loginUser ,} from "./auth.setup";
import {
  ProductPage_URL,
  CartPage_URL,
  LoginPage_URL,
  DressPage_URL,
  TopPage_URL,
  SareePage_URL,
  TshirtPage_URL,
  JeansPage_URL,
  ValidProduct_URL
} from "../utils/testData.json";
import { landingPage } from "../pages/landingPage";

test("Verify site logo is visible", async ({ LandingPage }) => {
  await LandingPage.goto();
  await expect(LandingPage.sitelogo).toBeVisible();
});

test("Verify top navigation bar and items", async ({ LandingPage }) => {
  await LandingPage.goto();
  await expect(LandingPage.navBar).toBeVisible();
});

test("Ensure the “products” button redirects to the correct page.", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.navBar).toBeVisible();
  await expect(LandingPage.productbtn).toBeVisible();
  await LandingPage.productbtn.click();
  await expect(LandingPage.page).toHaveURL(ProductPage_URL);
  await expect(LandingPage.searchbtn).toBeVisible();
  await expect(LandingPage.SaleImg).toBeVisible();
});

test("Ensure the “cart” button redirects to the correct page.", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.CartBtn).toBeVisible();
  await LandingPage.CartBtn.click();
  await expect(LandingPage.page).toHaveURL(CartPage_URL);
  await expect(LandingPage.HomeBtn).toBeVisible();
  await expect(LandingPage.ShoppingcartBtn).toBeVisible();
});

test("Ensure the “Signup/Login” button redirects to the correct page.", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.SignupLoginBtn).toBeVisible();
  await LandingPage.SignupLoginBtn.click();
  await expect(LandingPage.page).toHaveURL(LoginPage_URL);
  await expect(LandingPage.EmailAddressLoc).toBeVisible();
  await expect(LandingPage.PasswordLoc).toBeVisible();
  await expect(LandingPage.LoginbtnLoc).toBeVisible();
});

test("Ensure the TestCase button redirects to the correct page.", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.testCasebtn).toBeVisible();
  await LandingPage.testCasebtn.click();
});

test("Ensure the APITesting button redirects to the correct page.", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.apiTestingbtn).toBeVisible();
  await LandingPage.apiTestingbtn.click();
});

test("Ensure the videoTutorial button redirects to the correct page.", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.videotutorialsbtn).toBeVisible();
  await LandingPage.videotutorialsbtn.click();
});

test("Ensure the ContactUs button redirects to the correct page.", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.Contactusbtn).toBeVisible();
  await LandingPage.Contactusbtn.click();
});

test("verify women category heading is visible on Homepage", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.CategoryHeading).toBeVisible();
  await expect(LandingPage.WomenCategoryloc).toBeVisible();
  await expect(LandingPage.MenCategoryloc).toBeVisible()
  await expect(LandingPage.KidsCategoryloc).toBeVisible()

});


test("Click dress and verify URL'", async ({
  LandingPage,
}) => {
   await LandingPage.goto();
    await LandingPage.WomenCategoryloc.click()
    await LandingPage.DressLoc.click()
    await expect(LandingPage.page).toHaveURL(DressPage_URL)
})
test('Go back and click Tops, verify URL', async ({ LandingPage, page }) => {
  await LandingPage.goto();
  await page.waitForLoadState('domcontentloaded');
  await expect(LandingPage.WomenCategoryloc).toBeVisible();
  await LandingPage.WomenCategoryloc.click();
  await expect(LandingPage.TopsLoc).toBeVisible(); 
  await LandingPage.TopsLoc.click(); 
  await expect(page).toHaveURL(TopPage_URL);
});



  test('Click Saree and verify URL', async ({ LandingPage, page }) => {
    await LandingPage.goto();
    await expect(LandingPage.WomenCategoryloc).toBeVisible();
    await LandingPage.WomenCategoryloc.click();
    await expect(LandingPage.SareeLoc).toBeVisible(); 
    await LandingPage.SareeLoc.click()
    await expect(page).toHaveURL(SareePage_URL);
  });

 
test("verify Man Category is visible and have subcategory Tshirt/jeans", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.MenCategoryloc).toBeVisible();
    await LandingPage.MenCategoryloc.click()
    await expect(LandingPage.TshirtLoc).toBeVisible(); 
    await LandingPage.TshirtLoc.click()
    await expect(LandingPage.page).toHaveURL(TshirtPage_URL);
    await LandingPage.page.goBack()
    await expect(LandingPage.validateJeansLink).toBeTruthy()

}); 
    test("verify Kids Category is visible and have subcategory ", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.KidsCategoryloc).toBeVisible();
    await LandingPage.KidsCategoryloc.click()
    await expect(LandingPage.DressLoc).toBeVisible(); 
    await LandingPage.DressLoc.click()
    await LandingPage.page.goBack()
    await LandingPage.KidsCategoryloc.click()
    await LandingPage.TopsTshirt.click()
})

test("verify Search Button is visible and search with Valid and invlaid inputs ", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.productbtn).toBeVisible();
  await LandingPage.productbtn.click()
  await expect(LandingPage.Searchinputbox).toBeVisible()
  await LandingPage.SearchButton.click()
  //withValidDetails
  await LandingPage.Searchinputbox.fill('Blue Top');              
  await expect(LandingPage.SearchButton).toBeVisible();
  await LandingPage.SearchButton.click();  
  await expect(LandingPage.page).toHaveURL(ValidProduct_URL);
  await expect(LandingPage.SearchResult).toContainText('Blue Top');
  //WithInvalidDetails
  await LandingPage.Searchinputbox.fill('InvalidProductName'); 
  await LandingPage.SearchButton.click();


  
 
})
test("Validate the footer is visible ", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.footer).toBeVisible();
  await expect(LandingPage.subscriptionHeading).toBeVisible();
  await expect(LandingPage.EmailAddress).toBeVisible();
  await LandingPage.EmailAddress.fill("shruti@gmail.com");
  await LandingPage.arrowIcon.click()

})

test("Add to Cart flow ", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.productbtn).toBeVisible();
  await LandingPage.AddtoCart.click();
  await LandingPage.Productadded.isVisible();
  await LandingPage.viewCartLink.click()
  await expect(LandingPage.productRow).toBeVisible();
  await expect(LandingPage.productPrice).toHaveText('Rs. 500');
  await expect(LandingPage.productQuantity).toHaveText('1');
  await expect(LandingPage.productTotal).toHaveText('Rs. 500');
  await expect(LandingPage.checkoutBtn).toBeVisible();
  await LandingPage.checkoutBtn.click();
  await expect(LandingPage.registerLoginLink).toBeVisible()
   await LandingPage.registerLoginLink.click()

});
test("Remove product to the Cart ", async ({
  LandingPage,
}) => {
  await LandingPage.goto();
  await expect(LandingPage.productbtn).toBeVisible();
  await LandingPage.AddtoCart.click();
  await LandingPage.Productadded.isVisible();
  await LandingPage.viewCartLink.click()
  await expect(LandingPage.productRow).toBeVisible();
  await expect(LandingPage.productPrice).toHaveText('Rs. 500');
  await expect(LandingPage.productQuantity).toHaveText('1');
  await expect(LandingPage.productTotal).toHaveText('Rs. 500');
  await expect(LandingPage.deleteBtn).toBeVisible();
  await LandingPage.deleteBtn.click()
});





  
