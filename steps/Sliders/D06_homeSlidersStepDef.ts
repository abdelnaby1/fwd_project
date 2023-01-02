import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";

Given('user on home page to click on slider',async function () { 
     // i am already on home page
    
});
When('user click on the first slider', async function() {
    await homePage.clickOnSlider(0);
});

Then(/user redirected to "(.*)"/,async function(url) {
    await expect(page).toHaveURL(url);
})


When('user click on the second slider', async function() {
    await homePage.clickOnSlider(1);
});