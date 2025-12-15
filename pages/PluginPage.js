const { expect } = require('@playwright/test');

/**
 * Page Object for the WordPress Admin Login.
 * This class contains locators and methods for interacting with the login page.
 */
class PluginPage {
  constructor(page) {
    this.page = page;

    // --- Locators ---
    this.pageHeading = page.getByRole('heading', { name: 'Plugins', exact: true });
    this.pluginName = page.getByRole('checkbox', { name: 'Select FlexTable' })
  }

  async goto() {
    await this.page.goto('/wp-admin/plugins.php');
  }

  async verifyPgae() {
    // wait until pageHeading is shown
    await expect(this.pageHeading).toBeVisible({ timeout: 10000 });
  }
}
module.exports = { PluginPage };