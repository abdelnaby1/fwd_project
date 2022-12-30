import { Given, When, Then } from "@cucumber/cucumber";
import { page,homePage } from "../hooks";
import { expect } from "@playwright/test";
import RegisterPage from "../../pages/Register.Page";

let registerPage: RegisterPage;

Given('user go to register page', async function () {
    registerPage = await homePage.gotoRegisterPage();
});


When('user select gender type', async function () {
    await registerPage.chooseGenderMale();
});

When('user enter first name {string} and last name {string}', async function (string, string2) {
  await registerPage.enterFullName(string,string2);

});


When('user enter date of birth', async function () {
  await registerPage.chooseDOB();
  
});

When('user enter email {string} field', async function (string) {
  await registerPage.enterEmail(string);
});

When('user fills Password fields {string} {string}', async function (string, string2) {
  await registerPage.enterPassword(string,string2);

});


When('user clicks on register button', async function () {
  await registerPage.clickRegisterBtn();
});

Then('success message is displayed', async function () {
  expect(page.url()).toContain("registerresult");
  expect(await page.locator("div.result").textContent()).toContain("registration completed");
});