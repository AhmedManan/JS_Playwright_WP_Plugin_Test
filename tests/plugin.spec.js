const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PluginPage } = require('../pages/PluginPage');
const { PluginDashboardPage } = require('../pages/PluginDashboardPage');


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

test.describe('Verify Plugin Activation', () => {
  test('WordPress Plugin Installation Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    await expect(page).toHaveURL(/wp-admin/);
    
    // Navigate to Plugin installed or not
    const pluginPage = new PluginPage(page);
    await pluginPage.goto();
    await pluginPage.verifyPgae();
    await pluginPage.verifyPluginCheckboxVisible();
  });

  test('Plugin Dashboard Page Navigation Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    await expect(page).toHaveURL(/wp-admin/);
    
    // Navigate to plugin Dashboard Page
    const pluginDashboardPage = new PluginDashboardPage(page);
    await pluginDashboardPage.goto();
    await pluginDashboardPage.verifyPgae();
  });
});