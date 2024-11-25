class Calculator {
  constructor() {
    this.value = 0;
  }

  setValue(value) {
    this.value = value;
  }

  add(number) {
    this.value += number;
    return this.value;
  }
}

module.exports = Calculator;
