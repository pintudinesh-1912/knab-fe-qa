import {Locator, Page} from "@playwright/test";
import {pageFixture} from "../utils/PageFixture";

export class LoginPage {
    readonly page : Page
    readonly emailAddressInput: Locator
    readonly passwordInput : Locator
    readonly continueButton : Locator
    readonly loginButton : Locator

    constructor(page : Page) {
        this.page = page
        this.emailAddressInput = pageFixture.page.locator("#user")
        this.passwordInput = pageFixture.page.locator("#password")
        this.loginButton = pageFixture.page.locator("#login-submit")
        this.continueButton = pageFixture.page.locator("#login")
    }

    async performLogin(emailAddress : string, password : string) {
        await this.emailAddressInput.fill(emailAddress)
        await this.continueButton.click()
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}
