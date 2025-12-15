const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PluginPage } = require('../pages/PluginPage');
const { DashboardPage } = require('../pages/DashboardPage');


test.describe('Verify Plugin Page', () => {
  test('WordPress Plugin Page Navigation Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    await expect(page).toHaveURL(/wp-admin/);
    
    // Navigate to Plugin Page
    const pluginPage = new PluginPage(page);
    await pluginPage.goto();
    await pluginPage.verifyPgae();
  });
});