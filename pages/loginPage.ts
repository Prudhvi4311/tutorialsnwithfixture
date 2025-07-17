import {Page, test, Browser, expect, Locator} from "@playwright/test"


export class loginPage{

    private readonly pages: Page;
    private readonly txtemail: Locator;
    private readonly txtpassword: Locator;
    private readonly btnlogin: Locator;
    private readonly btncontinue: Locator;
    private readonly forgettenpassword: Locator;
    private readonly warming: Locator;



    constructor(pages: Page) {
        this.pages = pages;
        this.txtemail= pages.locator('form div label.control-label~input[name="email"]')
        this.txtpassword = pages.locator("form div label.control-label~input[name='password']")
        this.btncontinue = pages.locator("input[type='submit'][value='Login'][class='btn btn-primary']")
        this.warming = pages.locator("i[class='fa fa-exclamation-circle']")
    }

    async loginfun(username:string, password:string){
        await this.txtemail.fill(username);
        await this.txtpassword.fill(password);
        await this.btnlogin.click();
    }

    async loginerror(username: string, password:string):Promise<string>{
        await this.txtemail.fill(username);
        await this.txtpassword.fill(password);
        await this.btnlogin.click();
        const warmingtext = await this.warming.textContent();
        return warmingtext?.trim() || "";

    }


}

export const lp = loginPage;