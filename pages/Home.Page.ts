import { Locator, Page } from 'playwright';
// import { page } from "../steps/hooks";
import Register from './Register.Page';
import Login from './Login.Page';
import ProductDetails from './PoductDetails';
import Category from './CategoryDetails.Page';

class Home {
  readonly page: Page;
  //locators
  readonly registerLink: Locator;
  readonly loginLink: Locator;

  readonly currencySelect: Locator;
  readonly prices: Locator;

  readonly searchInput: Locator;
  // readonly searchBtn: Locator;
  readonly searchResults: Locator;

  readonly categories: Locator;

  readonly sliders: Locator
private category: Locator;
  constructor(page: Page) {
    this.page = page;
    this.registerLink = page.locator('a.ico-register');
    this.loginLink = page.locator('a.ico-login');

    this.currencySelect = page.locator('#customerCurrency');
    this.prices = page.locator('span.price');

    this.searchInput = page.locator('#small-searchterms');
    // this.searchBtn = page.locator("input:has-text('Search')");
    this.searchResults = page.locator('.item-box');

    this.categories = page.locator("//html/body/div[6]/div[2]/ul[1]/li/a");
    this.category = page.locator("");

    this.sliders = page.locator("div#nivo-slider>a");
  }
  async goToHome() {
    await this.page.goto('https://demo.nopcommerce.com');
  }
  //actions

  async gotoRegisterPage() {
    await this.registerLink.click();
    return new Register(this.page);
  }
  async goToLoginPage() {
    await this.loginLink.click();
    return new Login(this.page);
  }

  async selectEuro() {
    await this.currencySelect.selectOption({
      label: 'Euro',
    });
  }
  async getTextFromPrices() {
    let arr = new Array<string>();
    let count = await this.prices.count();
    for (let i = 0; i < count; i++) {
      arr.push(await this.prices.nth(i).innerText());
    }
    return arr;
  }

  async search(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchInput.press('Enter');
  }
  async getResultsTitles() {
    let arr = new Array<string>();
    //show all items
    this.page.selectOption('#products-pagesize', { index: 3 });
    let count = await this.searchResults.count();
    for (let i = 0; i < count; i++) {
      arr.push(await this.searchResults.nth(i).innerText());
    }
    return arr;
  }
  async clickProduct() {
    await this.searchResults.click();
    return new ProductDetails(this.page);
  }

  async  hoverOnCategory(idx: number){
    this.category =  this.categories.nth(idx);
    await this.category.hover();
  }
  async clickCategoryOrSub(idx: number){
   
    let categoryName = await this.category.textContent();
    // let subcategories = this.page.locator(`ul.sublist first-level:below("//ul[@class='top-menu notmobile']//ul//li[${idx+1}])")`);
    // let subcategories = this.page.locator(`//ul[@class='top-menu notmobile']//ul//li[${idx+1}]:below("//div[6]/div[2]/ul[1]/li[${idx+1}]/a")`)
    let subcategories = this.page.locator(`//ul[@class='top-menu notmobile']//li[${idx+1}]//ul[@class='sublist first-level']//li`)
    
    if(idx > 2){
        await this.category.click();
        return new Category(this.page,categoryName);
    }else{
        let idxx = Math.floor(Math.random() * 3);
        let subcategory = subcategories.nth(idxx);
        let subCategoryName = await subcategory.textContent();
        await subcategory.click();        
        return new Category(this.page,subCategoryName);
    }
  }
  async clickOnSlider(idx:number){
    await this.sliders.nth(idx).click();
  }
}

export default Home;
