import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";

Given('user on home page', async function () {
    // i am already on home page
});

When('user changes curreny to euro',async function () { 
    await homePage.selectEuro();
});
Then("the price of the products shown in euro",async function() {
    let prices = await homePage.getTextFromPrices();
    prices.forEach(price => {
        expect(price).toContain("€");
    })
})
