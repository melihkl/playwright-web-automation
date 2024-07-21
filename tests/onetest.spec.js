// tests/example.spec.js
const { test, expect } = require("@playwright/test");
const OnePage = require("../pages/OnePage");
const Logger = require("../utils/logger");
const fs = require("fs");

const rawData = fs.readFileSync("./datas/data.json");
const data = JSON.parse(rawData);

test("One Page Test", async ({ page }) => {
  const onePage = new OnePage(page);

  Logger.log("Navigating to login page...");
  await onePage.navigate();

  Logger.log("login page...");
  await onePage.login(data.login.username, data.login.password);
});
