import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";


Given('user on a home page so he can hover on category', async function () {
    // i am already on home page
});

When('user hover on a category',async function () { 
    this.idx = Math.floor(Math.random() * 7);
   await  homePage.hoverOnCategory(this.idx);
    
});
When('user click on a sub-category if exist or just a category', async function() {
    this.categoryPage = await homePage.clickCategoryOrSub(this.idx);
    // await page.waitForTimeout(6000);
});

Then('user could see category page details',async function() {
    expect((await this.categoryPage.getTitleText())?.trim()).toContain(this.categoryPage.getReturnedText().trim())
})
