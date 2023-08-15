import {expect, Locator, Page} from "@playwright/test";
import {faker} from "@faker-js/faker";


export class HomePage {
    readonly page: Page
    readonly userPersonalWorkspaceTab : Locator
    readonly boardsTab : Locator
    readonly createBoardTile : Locator
    readonly visibilityDropDown : Locator
    readonly boardNameTextBox : Locator
    readonly createBoardSubmitButton : Locator
    readonly boardNameDisplay : Locator

    private boardName : string

    constructor(page: Page) {
        this.page = page
        this.userPersonalWorkspaceTab = page.getByTestId("home-team-tab-name")
        this.boardsTab = page.getByTestId("home-team-boards-tab")
        this.createBoardTile = page.getByTestId("create-board-tile")
        this.boardNameTextBox = page.getByTestId("create-board-title-input")
        this.visibilityDropDown = page.locator("#react-select-8-input")
        this.createBoardSubmitButton = page.getByTestId("create-board-submit-button")
        this.boardNameDisplay = page.getByTestId("board-name-display")
        this.boardName = ""
    }

    async createBoardWithRandomData() {
        await this.boardsTab.click()
        await this.createBoardTile.click()
        this.boardName = faker.random.words(2)
        await this.boardNameTextBox.click({force:true})
        await this.boardNameTextBox.fill(this.boardName)
        await this.createBoardSubmitButton.click()
    }

    async verifySuccessfulBoardCreation() {
        await expect(await this.page.getByText(this.boardName)).toBeVisible()
    }

    async createBoardWithEmptyName() {
        await this.boardsTab.click()
        await this.createBoardTile.click()
        await this.boardNameTextBox.click({force:true})
    }
}