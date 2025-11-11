import { Locator, Page, expect } from '@playwright/test';
import { BASE_URL } from '../utils/testData.json';

export class homePage { page: Page;
    private TotalBrands:Locator
    private pololoc:Locator
    private HMloc:Locator
    private Madameloc:Locator
    private MastandHarbourloc:Locator
    private Babyhugloc:Locator
    private AllenSollyJuniorloc:Locator
    private KookieKidsloc:Locator
    private Bibaloc:Locator

    
    constructor(page: Page) {
	this.page = page;
    this.TotalBrands=page.locator("ul.nav.nav-pills.nav-stacked > li");
    this.pololoc=page.locator("//ul[contains(@class, 'nav-pills')]/li[1]/a/span")
    this.HMloc=page.locator("//ul[contains(@class, 'nav-pills')]/li[2]/a/span")
    this.Madameloc=page.locator("//ul[contains(@class, 'nav-pills')]/li[3]/a/span")
    this.MastandHarbourloc=page.locator("//ul[contains(@class, 'nav-pills')]/li[4]/a/span")
    this.Babyhugloc=page.locator("//ul[contains(@class, 'nav-pills')]/li[5]/a/span")
    this.AllenSollyJuniorloc=page.locator("//ul[contains(@class, 'nav-pills')]/li[6]/a/span")
    this.KookieKidsloc=page.locator("//ul[contains(@class, 'nav-pills')]/li[7]/a/span")
    this.Bibaloc=page.locator("//ul[contains(@class, 'nav-pills')]/li[8]/a/span")
}
async goto() {
    await this.page.goto(BASE_URL);
 } 
 async TotalBrandsnumber(){
    const count=this.TotalBrands.count()
    return await this.TotalBrands.count()
}
async validatePoloNumber(){
    
    const BrandValue=await this.pololoc.innerText() 
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10); 

    return Brandcount
}
async validateHMNumber(){
    
    const BrandValue=await this.HMloc.innerText() 
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10); 

    return Brandcount
}
async validateMadameNumber(){
    
    const BrandValue=await this.Madameloc.innerText() 
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10); 

    return Brandcount
}
async validateMastandHarbourNumber(){
    
    const BrandValue=await this.MastandHarbourloc.innerText() 
    console.log("Mast",BrandValue)
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10); 

    return Brandcount

}
async validateBabyHugNumber(){
    
    const BrandValue=await this.Babyhugloc.innerText() 
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10); 

    return Brandcount

}
async validateAllenSollyJuniorNumber(){
    
    const BrandValue=await this.AllenSollyJuniorloc.innerText() 
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10); 

    return Brandcount

}
async validateKookieKidsNumber(){
    
    const BrandValue=await this.KookieKidsloc.innerText() 
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10); 

    return Brandcount

}
async validateBibaNumber(){
    
    const BrandValue=await this.Bibaloc.innerText() 
    const Brandcount=await parseInt(BrandValue.replace(/[()]/g, '').trim(), 10);
    return Brandcount
}

async TotalNumberofProduct(){
    const counts = [
        await this.validatePoloNumber(),
        await this.validateHMNumber(),
        await this.validateMadameNumber(),
        await this.validateMastandHarbourNumber(),
        await this.validateBabyHugNumber(),
        await this.validateAllenSollyJuniorNumber(),
        await this.validateKookieKidsNumber(),
        await this.validateBibaNumber()
    ];
    const total = counts.reduce((sum, count) => sum + count, 0);
    return total;
}
async validateBrand() {
    const count = await this.TotalBrands.count();
    for (let i = 0; i < count; i++) {
        const brandName = await this.TotalBrands.nth(i).textContent();
        if (brandName === 'Adidas') {
            return true;
        }
    }
    return false;
}


}
