const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

let calculatorValue; // Variable to store the value in the calculator
let result; // Variable to store the result of the operation

// Step definitions
Given("I enter the number {int} into the calculator", function (number) {
  calculatorValue = number; // Set the initial calculator value
});

When("I add the number {int}", function (number) {
  result = calculatorValue + number; // Perform addition
});

Then("the result should be {int}", function (expectedResult) {
  assert.strictEqual(result, expectedResult); // Assert the result matches expectation
});
