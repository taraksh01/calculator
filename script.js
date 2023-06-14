let firstNumber = 4;
let secondNumber = 6;
let operator = "subtract";
const expression = document.querySelector(".expression");

const operators = Array.from(document.querySelectorAll(".operator"));
operators.forEach((item) => {
  item.addEventListener("click", () => {
    firstNumber = expression.textContent;
    operator = item.classList[0];
  });
});

console.log(firstNumber, operator, secondNumber);

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    expression.textContent += button.textContent;
  });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  expression.textContent = "";
});

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "add":
      return add(firstNumber, secondNumber);
      break;
    case "subtract":
      return subtract(firstNumber, secondNumber);
      break;
    case "multiply":
      return multiply(firstNumber, secondNumber);
      break;
    case "divide":
      return divide(firstNumber, secondNumber);
      break;
    case "remainder":
      return remainder(firstNumber, secondNumber);
      break;
    case "power":
      return power(firstNumber, secondNumber);
      break;
  }
}

// console.log(operate(firstNumber, operator, secondNumber));

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

function power(num1, num2) {
  return num1 ** num2;
}
