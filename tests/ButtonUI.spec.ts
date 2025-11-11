import { expect } from '@playwright/test';
import { test } from './myfixture';
import { ACTUAL_URL } from '../utils/testData.json';
import { buttonUIPage } from '../pages/ButtonUIPage';
import { loginPage } from '../pages/LoginPage';
import { loginUser } from './auth.setup';

test('Verify the color of HomepageButton. ',async({ ButtonUIPage})=>{
    await ButtonUIPage.goto()
    const homeButtonColor=await ButtonUIPage.HomeBtnloc.evaluate((el)=>
        window.getComputedStyle(el).color
    )
    expect(homeButtonColor).toBe('rgb(255, 165, 0)')

  
})
test('Login account ', async ({ LoginPage}) => {
    await LoginPage.goto();
    await LoginPage.Loginbtnclick();
    await LoginPage.fillDetails();
    await LoginPage.loginClick();
  
})


test('Verify the color of Logout button', async ({ page, ButtonUIPage }) => {
  await loginUser(page);  // reusable login
  await ButtonUIPage.goto();
  await ButtonUIPage.isLogoutbtnVisible();
  const logoutButtonColor = await ButtonUIPage.Logoutbtnloc.evaluate(el =>
    window.getComputedStyle(el).color
  );

  expect(logoutButtonColor).toBe('rgb(165, 42, 42)');
});

test('Verify the color of Delete button', async ({ page, ButtonUIPage }) => {
  await loginUser(page);  
  await ButtonUIPage.goto();
  await ButtonUIPage.isDeletebtnVisible();
  const deleteButtonColor = await ButtonUIPage.Deletebtnloc.evaluate((el) =>
    window.getComputedStyle(el).color
  );

  expect(deleteButtonColor).toBe('rgb(165, 42, 42)');
});



