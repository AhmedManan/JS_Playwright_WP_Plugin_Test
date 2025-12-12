// tests/login.spec.js
import { test, expect } from "@playwright/test";

test("WordPress admin login", async ({ page }) => {
  
  // Go to WP login page
  await page.goto("https://zeushood.com/wp-login.php");

  // Fill login form
  await page.fill("#user_login", "testuser");
  await page.fill("#user_pass", "testPass#");

  // Click login
  await page.click("#wp-submit");

  // Assert Dashboard loaded
  await expect(page.locator("#wpadminbar")).toBeVisible();
});
