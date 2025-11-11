import { Locator, Page, expect } from '@playwright/test';
 import { BASE_URL, ProductPage_URL } from '../utils/testData.json';

export class productsPage{
   page: Page; 
private TestCasebtn:Locator
private productbtn:Locator
private viewProductBtn:Locator
private productName:Locator
private productcategory:Locator
private productPrice:Locator
private productAvailability:Locator
private productCondition:Locator
//private productpageno:Locator

constructor(page: Page) {
     this.page = page; 
     this.TestCasebtn = page.locator('a[href="/test_cases"] > i');
     this.productbtn = page.getByText('Products');
     this.viewProductBtn = page.locator('a[href="/product_details/1"]');
     this.productName = page.getByText('Blue Top');
     this.productcategory = page.getByText('Category: Women > Tops');
     this.productPrice=page.getByText('Rs. 500')
     this.productAvailability = page.getByText('Availability: In Stock');
     this.productCondition=page.getByText('Condition:  New')

     


}
async goto() {
await this.page.goto(BASE_URL);
 } 
 async isHomepageVisible(){ 
await expect(this.page).toHaveURL(BASE_URL) 
//await expect(this.page).toHaveTitle('')
 } 
async TestcasebtnClick(){ 
await this.TestCasebtn.click() 
}
async ProductbtnClick(){
    await this.productbtn.click()
    
}
async ProductPageVisible(){
    await expect(this.page).toHaveURL(ProductPage_URL)
}
async viewProductbtnClick(){
    await this.viewProductBtn.click()
}
async productDetails(){
    await expect(this.productName).toBeVisible()
    await expect(this.productcategory).toBeVisible()
    await expect(this.productPrice).toBeVisible()
    await expect(this.productAvailability).toBeVisible()
    await expect(this.productCondition).toBeVisible()

}


 }
