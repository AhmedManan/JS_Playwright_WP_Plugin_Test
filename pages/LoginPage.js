const { expect } = require('@playwright/test');

/**
 * Page Object for the WordPress Admin Login.
 * This class contains locators and methods for interacting with the login page.
 */
class LoginPage {
  constructor(page) {
    this.page= page;

    // --- Locators ---
    this.userField = page.locator('#user_login');
    this.passField = page.locator('#user_pass');
    this.submitBtn = page.locator('#wp-submit');
    this.howdy= page.locator('#wp-admin-bar-my-account');
  }

  async goto() {
    await this.page.goto('/wp-login.php');
  }

  async login(username, password) {
    await this.userField.fill(username);
    await this.passField.fill(password);
    await this.submitBtn.click();
    // wait until dashboard is shown
    await expect(this.howdy).toBeVisible({ timeout: 10000 });
  }
}
module.exports = { LoginPage };