import {Page, test, Browser, expect, Locator} from "@playwright/test"

export class homePage{

    private readonly page:Page;
    private readonly myaccountdrp: Locator;
    private readonly lnklogin: Locator;
    private readonly lnkregister: Locator;


    constructor(page:Page){
        this.page = page;
        this.myaccountdrp = page.locator("#top-links ul li.dropdown");
        this.lnklogin = page.locator("#top-links ul li.dropdown a~ul li:last-child a")
        this.lnkregister = page.locator("#top-links ul li.dropdown a~ul li:first-child a")
    }

    async clickregister(){
        await this.myaccountdrp.click();
        await this.lnklogin.click();
    }
}