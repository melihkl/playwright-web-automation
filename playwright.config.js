// playwright.config.js
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  projects: [
    {
      name: "chromium",
      timeout: 30000,
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        headless: false,
        screenshot: "only-on-failure",
        actionTimeout: 5000,
        baseURL: "",
        screenshot: "only-on-failure",
        video: "on",
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
});
