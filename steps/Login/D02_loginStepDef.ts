import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";
import Login from "../../pages/Login.Page";

let loginPage: Login;
Given('user go to login page', async function () {
    // await page.goto("https://demo.nopcommerce.com/login");
    loginPage = await homePage.goToLoginPage();
});

When('user login with valid {string} and {string}',async function (string, string2) { 
    // await page.locator("#Email").fill(string2);
    // await page.locator("#Password").fill(string3);
    await loginPage.enterCredentials(string,string2);
});
When('user press on login button',async function () {
    // await page.locator("button:has-text('Log in')").click();
    await loginPage.clickLoginBtn();
});
Then('user login to the system successfully',async function () {
    expect.soft(page.url()).toBe("https://demo.nopcommerce.com/");
    // await page.waitForSelector("a:has-text('My account'):right-of(a:has-text('Log out'))");
    const myAcc = page.locator("a:has-text('My account'):near(a:has-text('Log out'))");
    await expect.soft(myAcc).toBeVisible();
});