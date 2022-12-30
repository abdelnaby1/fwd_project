import { Locator, Page } from "playwright";

class Login{
    readonly page: Page;
    //locators
    readonly emailInput: Locator;
    readonly passwrodInput: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.locator("#Email");
        this.passwrodInput = page.locator("#Password");
        this.loginBtn = page.locator("button:has-text('Log in')");
    }

    //actions
    async enterCredentials(email: string, passwrod: string){
        await this.emailInput.fill(email);
        await this.passwrodInput.fill(passwrod);
    }
    async clickLoginBtn(){
        await this.loginBtn.click();
    }
}
export default Login;