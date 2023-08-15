import {After, AfterAll, AfterStep, Before, BeforeAll, setDefaultTimeout, Status} from "@cucumber/cucumber";
import {Browser, Page} from "@playwright/test";
import {BrowserContext, chromium, firefox, webkit} from "playwright";
import {pageFixture} from "./PageFixture";

let page : Page
let browser : Browser
let context : BrowserContext

const options  = {
    headless : false,
    slowMo : 700
};

setDefaultTimeout(60 * 1000);

BeforeAll(async function() {
    switch (process.env.BROWSER) {
        case "firefox":
            browser = await firefox.launch(options)
            break
        case "webkit":
            browser = await webkit.launch(options)
            break
        default:
            browser = await chromium.launch(options)
    }
})

Before(async function() {
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = page
})

After( async function({pickle, result}) {
    if (result?.status == Status.FAILED) {
        const screenshot = await pageFixture.page.screenshot({path: `./test-reports/failure-screenshots/${pickle.name}.png`, type :"png"})
        await this.attach(screenshot, "image/png")
    }
    await page.close()
    await context.close()
})

AfterAll( async function() {
    await browser.close()
})


