// import { setWorldConstructor } from "@cucumber/cucumber";
import {After,Before,setDefaultTimeout} from "@cucumber/cucumber"
import {Browser,chromium,Page} from 'playwright';
setDefaultTimeout(60000);
let page: Page;
let browoser: Browser
Before(async () => {
    try {
        browoser = await chromium.launch({headless: false});
        const context = await browoser.newContext();
        page = await context.newPage();
        await page.goto("https://demo.nopcommerce.com");
        console.log(`site title: ${await page.title()}`);
        
    } catch (error) {
        console.log(`error for navigation ${error}`);
        throw new Error(`chrome navigation ${error}`);
    }
})
After(async () => {
    await page.close();
    await browoser.close();
})
export {page,browoser};