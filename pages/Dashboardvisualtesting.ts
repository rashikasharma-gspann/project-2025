import { Page, Locator } from '@playwright/test';

export class DashboardPage{
  readonly page: Page;
  readonly productSection:Locator;
  readonly firstProduct:Locator;
  readonly thirdProduct:Locator;
    readonly secondProduct: Locator;
    readonly addToCartButton :Locator;
    readonly continueBtn:Locator;
    //readonly cartBadge:Locator;
    readonly viewCart:Locator;

    readonly addFirstProduct:Locator;
    readonly CartBtn:Locator;
    //readonly FullProductPage:Locator;

  
  constructor(page: Page) {
    this.page = page;

    this.productSection= page.locator('.features_items');
    this.firstProduct= page.locator('.product-image-wrapper').nth(0)
    this.thirdProduct=page.locator('.product-image-wrapper').nth(2)
    this.secondProduct = page.locator('.product-image-wrapper').nth(1);

    this.addToCartButton = page.locator('a.add-to-cart[data-product-id="2"]');
    this.continueBtn = page.locator('button.close-modal[data-dismiss="modal"]');
    this.viewCart = page.locator('u', { hasText: 'View Cart' });

    this.addFirstProduct=page.getByText("Add to cart").nth(0);
    this.CartBtn=page.getByRole('link', { name: 'Cart' })

    //this.FullProductPage=

    //this.cartBadge = this.page.locator('.cart-count, .cart-badge');


    
  }
  async goto(){
    await this.page.goto('https://automationexercise.com/products')
    // await this.page.goto('/dashboard'); // dashboard URL
    // await this.page.waitForLoadState('domcontentloaded');
  }
}