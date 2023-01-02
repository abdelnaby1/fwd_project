import { Given, When, Then } from "@cucumber/cucumber";
import { homePage, page } from "../hooks";
import { expect } from "@playwright/test";
import Wishlist from "../../pages/Wishlist.page";

let wishlistPage: Wishlist;

Given('user on home page to add product to wishlist', async function () {
    // i am already on home page
});


When(/user add "(.*)" to wishlist/,async function(name) {
    await homePage.addToWishlist(name);
})


Then('user could see a success message with a green background', async function() {
    const successMsg = await homePage.getNotificationText();
    expect(successMsg).toContain("has been added");
    expect(await homePage.getNotificationBackground()).toBe("rgb(75, 176, 122)") 
});

When('user waits for a success message to be gone',async function() {
   await homePage.notfication.waitFor({state: "detached"});
});

When('user goes to wishlist',async function() {
   wishlistPage =  await homePage.goToWishlistPage();
});

Then('user could see the quantity of that product greater than zero', async function() {
    let qty = await wishlistPage.getTheQtyOfTheRecentlyAdded();
    expect(+qty).toBeGreaterThan(0);
});
