import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";
import ProductDetails from "../../pages/PoductDetails";
let prodcutDetailsPage: ProductDetails;
Given('user on home page so he can search', async function () {
    // i am already on home page
});

When(/user searches for a (.*)/,async function (keyword) { 
    await homePage.search(keyword);
});
Then(/user could see the results of that (.*)/,async function(productName) {
    expect.soft(page.url()).toContain("https://demo.nopcommerce.com/search?q=");
    let titles = await homePage.getResultsTitles();
    titles.forEach(title => {
        expect.soft(title.toLowerCase()).toContain(productName)
    })
})


Then(/user could see the product whose own this (.*)/, async function(sky) {
    prodcutDetailsPage = await homePage.clickProduct();
    let productSku = await prodcutDetailsPage.getProudctSku();
    expect(productSku).toContain(sky);
})