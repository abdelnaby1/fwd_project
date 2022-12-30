import { Locator, Page } from "playwright";
// import { page } from "../steps/hooks";

class Register{
    page: Page
    //locators
    readonly maleInput: Locator;
    readonly femaleInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly dayInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly cPasswordInput: Locator;
    readonly registerBtn: Locator

    constructor(page: Page){
        this.page = page;
        this.maleInput = page.locator("#gender-male"); // male
        this.femaleInput = page.locator("#gender-female"); // fwmale
        this.firstNameInput = page.locator("#FirstName");
        this.lastNameInput = page.locator("#LastName");
        this.dayInput = page.locator("select[name='DateOfBirthDay']");
        this.monthInput = page.locator("select[name='DateOfBirthMonth']");
        this.yearInput = page.locator("select[name='DateOfBirthYear']");
        this.emailInput = page.locator("#Email");
        this.passwordInput = page.locator("#Password");
        this.cPasswordInput = page.locator("#ConfirmPassword");
        this.registerBtn = page.locator("#register-button");
    }

    //actions

    async chooseGenderMale(){
        await this.maleInput.check();
    }
    async chooseGenderFemale(){
        await this.femaleInput.check();
    }
    async enterFullName(fName: string,lName: string){
        await this.firstNameInput.fill(fName)
        await this.lastNameInput.fill(lName);
    }
    async chooseDOB(){
        await this.dayInput.selectOption("26");
        await this.monthInput.selectOption("8");
        await this.yearInput.selectOption("1998");
    }
    async enterEmail(email: string){
        await this.emailInput.fill(email);
    }
    async enterPassword(password:string,cPasswrod:string){
        await this.passwordInput.fill(password);
        await this.cPasswordInput.fill(cPasswrod);
    }

    async clickRegisterBtn(){
        await this.registerBtn.click();
    }
    
}

export default Register;