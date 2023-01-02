import { Locator, Page } from "playwright";

class Category{
    readonly page: Page;
    readonly title: Locator;

    returnedText: any;
    constructor(page: Page,categoryName: any){
        this.page = page;
        this.title = this.page.locator('div[class="page-title"] h1');
        this.returnedText = categoryName;
    }

    getReturnedText(){
        return this.returnedText;
    } 
    async getTitleText(){
        return await this.title.textContent();
    }
}

export default Category;