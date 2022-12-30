import { Locator, Page } from "playwright";
// import { page } from "../steps/hooks";
import Register from "./Register.Page";
import Login from "./Login.Page";

class Home{
    readonly page: Page
    //locators
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    constructor(page:Page){
        this.page = page;
        this.registerLink = page.locator("a.ico-register");
        this.loginLink = page.locator("a.ico-login");
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
}

export default Home;