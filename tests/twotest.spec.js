// tests/profile.spec.js
const { test, expect } = require("@playwright/test");
const fs = require("fs");

const TwoPage = require("../pages/TwoPage");

test("User can log in and edit profile", async ({ page }) => {
  const twoPage = new TwoPage(page);

  // Giriş sayfasına git ve giriş yap
  await twoPage.navigate();
});
