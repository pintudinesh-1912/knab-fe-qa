import {Page} from "@playwright/test";
import {LoginPage} from "./LoginPage";
import {pageFixture} from "../utils/PageFixture";
import {HomePage} from "./HomePage";


export class PageRepository {

    readonly page: Page
    readonly loginPage
    readonly homePage

    constructor(page : Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.homePage = new HomePage(page)

    }
    getLoginPage() {
        return this.loginPage
    }

    getHomePage() {
        return this.homePage
    }

}