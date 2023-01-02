import { Locator, Page } from "playwright";

class ProductDetails{
    readonly page: Page;
    readonly sku: Locator;

    constructor(page: Page){
        this.page = page;

        this.sku = this.page.locator("span.value:near(span:has-text('SKU:'))");
    }

    async getProudctSku(){
        return await this.sku.textContent();
    }
}
export default ProductDetails