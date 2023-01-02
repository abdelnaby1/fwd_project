import { Locator, Page } from "playwright"

class Wishlist {
    readonly page: Page;
    readonly items: Locator;

    constructor(page: Page){
        this.page = page;
        this.items = this.page.locator("//table[@class='cart']//tbody//tr");
    }
    async getTheQtyOfTheRecentlyAdded(){
        let count= await this.items.count();
        let theRecentAdded = this.items.nth(count-1);
        let qntInput = theRecentAdded.locator("td.quantity input.qty-input");
        return qntInput.getAttribute("value");
    } 

}

export default Wishlist