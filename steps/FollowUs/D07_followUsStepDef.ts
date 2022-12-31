import {Given,When,Then} from "@cucumber/cucumber"
import { context, homePage, page } from "../hooks";
import { Page } from "playwright";
import { expect } from "@playwright/test";

// Given('user on home page', async function () {
//     // i am already on home page
// });

let pagePromise: Promise<Page>;
When(/user opens (.*) link/,async function(website) {
    pagePromise = context.waitForEvent('page');
    await homePage.clickOnSoicalLink(website);
})

Then(/"(.*)" is opened in new tab/,async function(url) {
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe(url);
    await newPage.close();
})