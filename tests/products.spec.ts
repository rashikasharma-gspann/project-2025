import { expect } from "@playwright/test";
import { test } from "./myfixture";
import { BASE_URL, TestCasePage_URL, ProductPage_URL } from '../utils/testData.json';
import { productsPage } from '../pages/productsPage';

test('Verify Verify Test Cases Page', async ({ ProductsPage }) => {
  await expect(ProductsPage.page).toHaveURL(BASE_URL);
  await ProductsPage.TestcasebtnClick();
  await expect(ProductsPage.page).toHaveURL(TestCasePage_URL);
})

test('Verify All Products and product detail page',async({ ProductsPage})=>{
 await ProductsPage.ProductbtnClick();
 await expect(ProductsPage.page).toHaveURL(ProductPage_URL)
 await ProductsPage.viewProductbtnClick()

})
