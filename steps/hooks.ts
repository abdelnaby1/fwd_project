// import { setWorldConstructor } from "@cucumber/cucumber";
import {After,Before,setDefaultTimeout} from "@cucumber/cucumber"
import {Browser,chromium,Page} from 'playwright';
import HomePage from "../pages/Home.Page";
setDefaultTimeout(60000);
let page: Page;
let browoser: Browser
let homePage: HomePage;
Before(async () => {
    try {
        browoser = await chromium.launch({headless: false});
        const context = await browoser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        homePage.goToHome();
        // await page.goto("https://demo.nopcommerce.com");
        // console.log(`site title: ${await page.title()}`);
        
    } catch (error) {
        console.log(`error for navigation ${error}`);
        throw new Error(`chrome navigation ${error}`);
    }
})
After(async () => {
    await browoser.close();
})
// export {page,browoser};
export {page,homePage};