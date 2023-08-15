Feature: Creation of board
  As a user, I should be able to create a board

  Background:
    Given User navigates to the login page
    When  User performs the login operation successfully
    Then  Verify that the user has logged in successfully

  Scenario Outline: Verify that user can create a board
    When User clicks on create board button
    When User selects visibility as "<Visibility>"
    Then Verify that board is created successfully for the user
    Examples:
      | Visibility |
      | Private    |
#      | Workspace  |
#      | Public     |
