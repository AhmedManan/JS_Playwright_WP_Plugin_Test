const { expect } = require('@playwright/test');
const { getPluginName } = require('../utils/pluginDataLoader');

/**
 * Page Object for the WordPress Admin Login.
 * This class contains locators and methods for interacting with the login page.
 */
class PluginPage {
  constructor(page) {
    this.page = page;

    // --- Dynamic Data ---
    // Synchronously load the plugin name when the Page Object is instantiated
    this.pluginNameText = getPluginName();

    // --- Locators ---
    this.pageHeading = page.getByRole('heading', { name: 'Plugins', exact: true });
    this.pluginCheckbox = page.getByRole('checkbox', { name: `Select ${this.pluginNameText}` })
  }

  async goto() {
    await this.page.goto('/wp-admin/plugins.php');
  }

  async verifyPgae() {
    // wait until pageHeading is shown
    await expect(this.pageHeading).toBeVisible({ timeout: 10000 });
  }

  async verifyPluginCheckboxVisible() {
      // New method to verify the dynamically named plugin checkbox is visible
      await expect(this.pluginCheckbox).toBeVisible();
  }
}
module.exports = { PluginPage };