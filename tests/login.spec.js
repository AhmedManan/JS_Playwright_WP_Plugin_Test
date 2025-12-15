const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');


test.describe('WordPress Login', () => {
  test('WordPress Login Functionality Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    await loginPage.verifyLogin();
    await expect(page).toHaveURL(/wp-admin/);
  });
});