const { expect } = require('@playwright/test');

/**
 * Page Object for the WordPress Admin Dashboard.
 * This class contains locators and methods for interacting with the dashboard.
 */
class DashboardPage {
    constructor(page) {
        this.page = page;

        // --- Locators ---
        this.welcomePanel = page.locator('#welcome-panel');
        this.adminBarUsername = page.locator('#wp-admin-bar-my-account');
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    }

    /**
     * Verifies that the user has successfully logged in and is on the dashboard.
     */
    async verifySuccessfulLogin(username) {
        // A robust check: look for the Dashboard header and the user's name in the admin bar.
        await expect(this.dashboardHeader).toBeVisible();
        await expect(this.adminBarUsername).toContainText(username);
        await expect(this.page).toHaveURL(/wp-admin/); // Ensures the URL path is correct
    }

    // You can add more methods here, like 'gotoPostsPage()', 'createPost()', etc.
}

module.exports = { DashboardPage };