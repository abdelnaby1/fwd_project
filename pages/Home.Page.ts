import { Locator, Page } from 'playwright';
// import { page } from "../steps/hooks";
import Register from './Register.Page';
import Login from './Login.Page';
import ProductDetails from './PoductDetails';
import Category from './CategoryDetails.Page';
import Wishlist from './Wishlist.page';

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

  readonly sliders: Locator;

  readonly soicalLinks: Locator;

  readonly notfication: Locator;

  private addToWishlistbtn: Locator;

  readonly wishlist: Locator;
private category: Locator;
  constructor(page: Page) {
    this.page = page;
    this.registerLink = this.page.locator('a.ico-register');
    this.loginLink = this.page.locator('a.ico-login');

    this.currencySelect = this.page.locator('#customerCurrency');
    this.prices = this.page.locator('span.price');

    this.searchInput = this.page.locator('#small-searchterms');
    // this.searchBtn = this.page.locator("input:has-text('Search')");
    this.searchResults = this.page.locator('.item-box');

    this.categories = this.page.locator("//html/body/div[6]/div[2]/ul[1]/li/a");
    this.category = this.page.locator("");

    this.sliders = this.page.locator("div#nivo-slider>a");

    this.soicalLinks = this.page.locator(".social");
    
    this.notfication = this.page.locator("#bar-notification .success");
    this.addToWishlistbtn = this.page.locator("")
    // this.addToWishlistbtn = this.page.locator("");
    
    this.wishlist = this.page.locator("span:has-text('Wishlist')")
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

  async clickOnSoicalLink(linkName:string){
    linkName = linkName.replace(/^./, linkName[0].toUpperCase());

    await this.soicalLinks.locator(`a:has-text('${linkName}')`).click();
  }

  async addToWishlist(name: string){
    // this.addToWishlistbtn = this.page.locator(`button[title="Add to wishlist"]:below(a:has-text('${name}'))`)
    // let info = this.page.locator(`div.info:near(a:has-text("${name}"))`);
    let linkSelector = `a:has-text("${name}")`;
    // let parent = this.page.locator(`${linkSelector} >> xpath=....`)
    let parent = this.page.locator("div.details",{has: this.page.locator(`text=${name}`)});
    
    this.addToWishlistbtn = parent.locator("button:has-text('Add to wishlist')")
    await this.addToWishlistbtn.click();
  }
  async getNotificationText(){
    return await this.notfication.locator("p.content").textContent();
  }
  async getNotificationBackground(){
    const color = await this.notfication.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    return color;
  }
  async goToWishlistPage(){
    await this.wishlist.click();
    return new Wishlist(this.page);

  }
}

export default Home;
