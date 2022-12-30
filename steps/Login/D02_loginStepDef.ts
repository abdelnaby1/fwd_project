import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../hooks";
import { expect } from "@playwright/test";

Given('user go to login page', async function () {
    await page.goto("https://demo.nopcommerce.com/login");
});

When('user login with {string} {string} and {string}',async function (string, string2, string3) { 
    await page.locator("#Email").fill(string2);
    await page.locator("#Password").fill(string3);
});
When('user press on login button',async function () {
    await page.locator("button:has-text('Log in')").click();
});
Then('user login to the system successfully',async function () {
    expect.soft(page.url()).toBe("https://demo.nopcommerce.com/");
    // await page.waitForSelector("a:has-text('My account'):right-of(a:has-text('Log out'))");
    const myAcc = page.locator("a:has-text('My account'):near(a:has-text('Log out'))");
    await expect.soft(myAcc).toBeVisible();
});