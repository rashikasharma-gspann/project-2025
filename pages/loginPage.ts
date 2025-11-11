import { Locator, Page, expect } from '@playwright/test'
import { BASE_URL } from '../utils/testData.json';

export class loginPage{
    page: Page;
    // private loginButtonLoc:Locator;
    private SignupLoginbtnLoc:Locator;
    private emailAddressLoc:Locator;
    private passwordLoc:Locator;
    private loginbtnLoc:Locator;
    private errormessageLoc:Locator;
    private logoutbtn:Locator;
    private loginHeader:Locator;
    
    constructor(page: Page){
        this.page=page;
        this.SignupLoginbtnLoc=page.getByText(' Signup / Login')
        this.emailAddressLoc = page.locator('[data-qa="login-email"]');
        this.passwordLoc=page.locator('[data-qa="login-password"]')
        this.loginbtnLoc=page.locator('button[data-qa="login-button"]')
        //this.loginbtnLoc=page.getByText('Login')
        this.errormessageLoc =page.getByText('Your email or password is incorrect!');
        this.loginHeader = page.getByText('Login to your account');
        this.logoutbtn = page.getByText('Logout');



 
    }
    async goto(){
        await this.page.goto(BASE_URL)
    }
    async Loginbtnclick(){
        await this.SignupLoginbtnLoc.click()
    }
    async fillDetails() {
        await this.emailAddressLoc.fill('rashika@gmail.com');
        await this.passwordLoc.fill('Rashika123');
    }

    async loginClick() {
        await this.loginbtnLoc.click();
    }

async fillinvalidDetails(){
    await this.emailAddressLoc.fill('sharma123@');
    await this.passwordLoc.fill('12345');
    }
    async getErrorMsg(){
        return this.errormessageLoc;
    }

    async isLoginHeaderVisible() {
    await expect(this.loginHeader).toBeVisible();
}

    async logoutBtnClick(){
        await this.logoutbtn.click()
    }

 
}

