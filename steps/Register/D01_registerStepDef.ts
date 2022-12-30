import { Given, When, Then } from "@cucumber/cucumber";
import { page,homePage } from "../hooks";
import { expect } from "@playwright/test";
import RegisterPage from "../../pages/Register.Page";

let registerPage: RegisterPage;

Given('user go to register page', async function () {
    // await page.goto("https://demo.nopcommerce.com/register");
    registerPage = await homePage.gotoRegisterPage();
});


When('user select gender type', async function () {
    // await page.check("#gender-male");
    await registerPage.chooseGenderMale();
});

When('user enter first name {string} and last name {string}', async function (string, string2) {
  // await page.locator("#FirstName").fill(string)
  // await page.locator("#LastName").fill(string2);
  await registerPage.enterFullName(string,string2);

});


When('user enter date of birth', async function () {
  // const day = page.locator("select[name='DateOfBirthDay']");
  // await day.selectOption("26");

  // const month = page.locator("select[name='DateOfBirthMonth']");
  // await month.selectOption("8");

  // const year = page.locator("select[name='DateOfBirthYear']");
  // await year.selectOption("1998");
  await registerPage.chooseDOB();
  
});

When('user enter email {string} field', async function (string) {
  // await page.fill("#Email",string)
  await registerPage.enterEmail(string);
});

When('user fills Password fields {string} {string}', async function (string, string2) {
  // await page.fill("#Password",string);
  // await page.fill("#ConfirmPassword",string2);
  await registerPage.enterPassword(string,string2);

});


When('user clicks on register button', async function () {
  // await page.click("#register-button");
  await registerPage.clickRegisterBtn();
});

Then('success message is displayed', async function () {
  expect(page.url()).toContain("registerresult");
  expect(await page.locator("div.result").textContent()).toContain("registration completed");
});