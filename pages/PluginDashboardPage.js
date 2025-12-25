const { expect } = require('@playwright/test');
const { getPluginDashboardURL } = require('../utils/pluginDataLoader');

/**
 * Page Object for the WordPress Admin Login.
 * This class contains locators and methods for interacting with the login page.
 */
class PluginDashboardPage {
  constructor(page) {
    this.page = page;

    // --- Dynamic Data ---
    // Synchronously load the plugin dashboard url when the Page Object is instantiated
    this.dashboardURL = getPluginDashboardURL();

    // --- Locators ---
    this.pageHeading = page.getByRole('heading', { name: 'You’ve completed store setup', exact: true });
  }

  async goto() {
    await this.page.goto(this.dashboardURL);
  }

  async verifyPgae() {
    // wait until pageHeading is shown
    await expect(this.pageHeading).toBeVisible({ timeout: 10000 });
  }
}
module.exports = { PluginDashboardPage };