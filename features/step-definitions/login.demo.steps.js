const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const loginPage = require("../pageobjects/login.page");
const securePage = require("../pageobjects/secure.page");

Given(/^User is located on the main page of saucedemo website$/, async () => {
  await loginPage.open();
});

When(/^User click “Login” button$/, async () => {
  await loginPage.loginButton.click();
});

Then(
  /^User should see “Epic sadface: Username is required” error message$/,
  async () => {
    await securePage.checkErrorMessage(
      "Epic sadface: Username is required"
    );
  }
);
