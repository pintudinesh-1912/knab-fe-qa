import {Given, Then, When} from "@cucumber/cucumber";
import {PageRepository} from "../pages/PageRepository";
import {pageFixture} from "../utils/PageFixture";
import {expect} from "@playwright/test";

let pageRepository :PageRepository

Given("User navigates to the login page", async function () {
    pageRepository = new PageRepository(pageFixture.page)
    await pageFixture.page.goto("https://trello.com/login")
})

When("User performs the login operation successfully", async function() {
    await pageRepository.getLoginPage().performLogin("cagosen990@touchend.com", "KnabTestAccount")
})

Then("Verify that the user has logged in successfully", async function() {
    await expect(pageRepository.getHomePage().userPersonalWorkspaceTab).toBeVisible()
})