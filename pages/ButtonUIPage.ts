import { Locator, Page, expect } from '@playwright/test';
import { BASE_URL } from '../utils/testData.json';

export class buttonUIPage { page: Page;
    HomeBtnloc:Locator
    Logoutbtnloc:Locator
    Deletebtnloc:Locator
    SignupLoginbtn:Locator
   
    
    constructor(page: Page) {
	this.page = page;
    this.HomeBtnloc=page.getByRole('link', { name: 'Home' });
    this.SignupLoginbtn=page.getByText(' Signup / Login')
    // this.Logoutbtnloc=page.locator('a[href="/logout"]')
    this.Logoutbtnloc = this.page.getByRole('link', { name: 'Logout' });

    this.Deletebtnloc=page.locator('a[href="/delete_account"]')
    }
    
async goto() {
    await this.page.goto(BASE_URL);
 } 
 async isLogoutbtnVisible(){
        await expect(this.Logoutbtnloc).toBeVisible();
    }
    async isDeletebtnVisible(){
        await expect(this.Deletebtnloc).toBeVisible();
    }
}