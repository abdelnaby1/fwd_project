import { Locator, Page } from "playwright";

class Login{
    readonly page: Page;
    //locators
    readonly emailInput: Locator;
    readonly passwrodInput: Locator;
    readonly loginBtn: Locator;

    readonly errorLoginMsg: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.locator("#Email");
        this.passwrodInput = page.locator("#Password");
        this.loginBtn = page.locator("button:has-text('Log in')");
        this.errorLoginMsg = page.locator("div.message-error.validation-summary-errors");
    }

    //actions
    async enterCredentials(email: string, passwrod: string){
        await this.emailInput.fill(email);
        await this.passwrodInput.fill(passwrod);
    }
    async clickLoginBtn(){
        await this.loginBtn.click();
    }
    async getErrorLoginMsg(){
        return await this.errorLoginMsg.textContent();
    }
    
}
export default Login;