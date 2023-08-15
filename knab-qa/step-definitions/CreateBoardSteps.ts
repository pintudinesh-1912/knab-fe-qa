import {Then, When} from "@cucumber/cucumber";
import {PageRepository} from "../pages/PageRepository";
import {pageFixture} from "../utils/PageFixture";
import {expect} from "@playwright/test";

let pageRepository : PageRepository
When("User creates a board with random data", async function() {
    pageRepository = new PageRepository(pageFixture.page)
    await pageRepository.getHomePage().createBoardWithRandomData()
})

Then("Verify that board is created successfully for the user", async function () {
    await pageRepository.getHomePage().verifySuccessfulBoardCreation()
})

When("User creates a board with empty name", async function() {
    pageRepository = new PageRepository(pageFixture.page)
    await pageRepository.getHomePage().createBoardWithEmptyName()
})

Then("Verify that the create button remains disabled", async function() {
    await expect(await pageRepository.getHomePage().createBoardSubmitButton).toBeDisabled()
})