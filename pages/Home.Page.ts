import { Locator, Page } from "playwright";
// import { page } from "../steps/hooks";
import Register from "./Register.Page";
import Login from "./Login.Page";
import ProductDetails from "./PoductDetails";

class Home{
    readonly page: Page
    //locators
    readonly registerLink: Locator;
    readonly loginLink: Locator;

    readonly currencySelect: Locator;
    readonly prices: Locator;

    readonly searchInput: Locator;
    // readonly searchBtn: Locator;
    readonly searchResults: Locator
    constructor(page:Page){
        this.page = page;
        this.registerLink = page.locator("a.ico-register");
        this.loginLink = page.locator("a.ico-login");

        this.currencySelect = page.locator("#customerCurrency");
        this.prices = page.locator("span.price");
        
        this.searchInput = page.locator("#small-searchterms");
        // this.searchBtn = page.locator("input:has-text('Search')");
        this.searchResults = page.locator(".item-box");

    }
    async goToHome(){
        await this.page.goto("https://demo.nopcommerce.com");
    }
    //actions

    async gotoRegisterPage(){
        await this.registerLink.click();
        return new Register(this.page);
    }
    async goToLoginPage(){
        await this.loginLink.click();
        return new Login(this.page);
    }

    async selectEuro(){
        await this.currencySelect.selectOption({
            label: "Euro"
        })
    }
    async getTextFromPrices(){
        let arr = new Array<string>();
        let count = await this.prices.count();
        for (let i = 0; i < count; i++) {
            arr.push(await this.prices.nth(i).innerText());
        }
        return arr;

    }

    async search(productName: string){
        await this.searchInput.fill(productName);
        await this.searchInput.press("Enter");
    }
    async getResultsTitles(){
        let arr = new Array<string>()
        //show all items
        this.page.selectOption("#products-pagesize",{index:3});
        let count =  await this.searchResults.count();
        for (let i = 0; i < count; i++) {
            arr.push(await this.searchResults.nth(i).innerText());
        }
        return arr;
    }
    async clickProduct(){
        await this.searchResults.click();
        return new ProductDetails(this.page);
    }
}

export default Home;