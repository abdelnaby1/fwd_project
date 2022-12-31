import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";
import Category from "../../pages/CategoryDetails.Page";

let categoryPage: Category;
let idx = Math.floor(Math.random() * 7);

Given('user on a home page so he can hover on category', async function () {
    // i am already on home page
});

When('user hover on a category',async function () { 
   await  homePage.hoverOnCategory(idx);
    
});
When('user click on a sub-category if exist or just a category', async function() {
    categoryPage = await homePage.clickCategoryOrSub(idx);
    // await page.waitForTimeout(6000);
});

Then('user could see category page details',async function() {
    expect((await categoryPage.getTitleText())?.trim()).toContain(categoryPage.getReturnedText().trim())
})
