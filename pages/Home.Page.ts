import { Locator, Page } from "playwright";
// import { page } from "../steps/hooks";
import Register from "./Register.Page";
import Login from "./Login.Page";

class Home{
    readonly page: Page
    //locators
    readonly registerLink: Locator;
    readonly loginLink: Locator;

    readonly currencySelect: Locator;
    readonly prices: Locator
    constructor(page:Page){
        this.page = page;
        this.registerLink = page.locator("a.ico-register");
        this.loginLink = page.locator("a.ico-login");

        this.currencySelect = page.locator("#customerCurrency");
        this.prices = page.locator("span.price");
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
}

export default Home;