let firstNumber = 4;
let secondNumber = 6;
let operator = "subtract";
const operatorsSymbol = {
  "+": "add",
  "-": "subtract",
  X: "multiply",
  "/": "divide",
  "%": "remainder",
  "^": "power",
};

const expression = document.querySelector(".expression");
const answer = document.querySelector(".answer");
const operators = Array.from(document.querySelectorAll(".operator"));
operators.forEach((item) => {
  item.addEventListener("click", () => {
    firstNumber = expression.textContent;
    operator = item.textContent;
  });
});

const euqals = document.querySelector(".equals");
euqals.addEventListener("click", () => {
  [firstNumber, secondNumber] = expression.textContent.split(operator);
  answer.textContent = operate(
    firstNumber,
    operatorsSymbol[operator],
    secondNumber
  );
});

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    expression.textContent += button.textContent;
  });
});

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  let newExpresstion = expression.textContent.substring(
    0,
    expression.textContent.length - 3
  );
  expression.textContent = newExpresstion;
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
