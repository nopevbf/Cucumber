Feature: Calculator Addition

  Description:
  As a calculator user,
  I want to add two numbers together
  So that I can verify the calculator works correctly.

  Scenario: Adding two positive numbers
    Given I enter the number 5 into the calculator
    When I add the number 3
    Then the result should be 8

  Scenario: Adding a positive number and a negative number
    Given I enter the number 7 into the calculator
    When I add the number -3
    Then the result should be 4

