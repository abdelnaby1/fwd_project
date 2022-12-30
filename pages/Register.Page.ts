import { Locator } from "playwright";
import { page } from "../steps/hooks";

class Register{
    //locators
    readonly regiterBtn: Locator;

    constructor(){
        this.regiterBtn = page.locator("a.ico-register");
    }

    //actions
    async gotoRegisterPage(){
        await this.regiterBtn.click();
    }

    
}