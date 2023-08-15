Feature: Creation of board
  As a user, I should be able to create a board

  Background:
    Given User navigates to the login page
    When  User performs the login operation successfully
    Then  Verify that the user has logged in successfully

  Scenario: Verify that user can create a board
    When User creates a board with random data
    Then Verify that board is created successfully for the user

  Scenario: Verify that user is not allowed to create a board if no name is provided
    When User creates a board with empty name
    Then Verify that the create button remains disabled