import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";

Given('user go to login page', async function () {
    // await page.goto("https://demo.nopcommerce.com/login");
    this.loginPage = await homePage.goToLoginPage();
});

When(/user login with "(.*)" "(.*)" and "(.*)"/,async function (valid,email, password) { 
    await this.loginPage.enterCredentials(email,password);
});
When('user press on login button',async function () {
    await this.loginPage.clickLoginBtn();
});
Then('user login to the system successfully',async function () {
    expect.soft(page.url()).toBe("https://demo.nopcommerce.com/");
    const myAcc = page.locator("a:has-text('My account'):near(a:has-text('Log out'))");
    await expect.soft(myAcc).toBeVisible();
});


//login with invalid 

Then('user could not login to the system',async function () {
    const msg = await this.loginPage.getErrorLoginMsg();
    expect.soft(msg).toContain("Login was unsuccessful");
    await expect.soft(this.loginPage.errorLoginMsg).toHaveCSS("color","rgb(228, 67, 75)");
});