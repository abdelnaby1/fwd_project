import {Given,When,Then} from "@cucumber/cucumber"
import { context, homePage, page } from "../hooks";
import { expect } from "@playwright/test";

Given('user on home page to follow', async function () {
    // i am already on home page
});

// let pagePromise: Promise<Page>;
When(/user opens (.*) link/,async function(website) {
    this.pagePromise = context.waitForEvent('page');
    await homePage.clickOnSoicalLink(website);
})

Then(/"(.*)" is opened in new tab/,async function(url) {
    const newPage = await this.pagePromise;
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe(url);
    await newPage.close();
})