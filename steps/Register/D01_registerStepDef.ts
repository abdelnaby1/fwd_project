import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../hooks";
import { expect } from "@playwright/test";
Given('user go to register page', async function () {
    await page.goto("https://demo.nopcommerce.com/register");
});


When('user select gender type', async function () {
    await page.check("#gender-male");
});

When('user enter first name {string} and last name {string}', async function (string, string2) {
  await page.locator("#FirstName").fill(string)
  await page.locator("#LastName").fill(string2);

});


When('user enter date of birth', async function () {
  const day = page.locator("select[name='DateOfBirthDay']");
  await day.selectOption("26");

  const month = page.locator("select[name='DateOfBirthMonth']");
  await month.selectOption("8");

  const year = page.locator("select[name='DateOfBirthYear']");
  await year.selectOption("1998");
  
});

When('user enter email {string} field', async function (string) {
  await page.fill("#Email",string)
});

When('user fills Password fields {string} {string}', async function (string, string2) {
  await page.fill("#Password",string);
  await page.fill("#ConfirmPassword",string2);

});


When('user clicks on register button', async function () {
  await page.click("#register-button");
});

Then('success message is displayed', async function () {
  expect(await page.url()).toContain("registerresult");
  expect(await page.locator("div.result").textContent()).toContain("registration completed");
});