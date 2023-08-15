import {Then, When} from "@cucumber/cucumber";
import {PageRepository} from "../pages/PageRepository";
import {pageFixture} from "../utils/PageFixture";

let pageRepository : PageRepository
When("User clicks on create board button", async function() {
    pageRepository = new PageRepository(pageFixture.page)
    await pageRepository.getHomePage().initializeBoardCreation()
})

When("User selects visibility as {string}", async function(visibility) {
    await pageRepository.getHomePage().finalizeBoardCreation(visibility)
})

Then("Verify that board is created successfully for the user", async function () {
    await pageRepository.getHomePage().verifySuccessfulBoardCreation()
})