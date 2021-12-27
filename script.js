function add(a,b) {
  console.log(a + b);
};

function subtract(a,b) {
  console.log(a + -b);
};

function multiply(a,b) {
  console.log(a * b);
};

function divide(a,b) {
  console.log(a / b);
};

function operate(operator, firstNumber, secondNumber) {
  if (operator === '+') {
    add(firstNumber, secondNumber);
  } else if (operator === '-') {
    subtract(firstNumber, secondNumber);
  } else if (operator === '*') {
    multiply(firstNumber, secondNumber);
  } else if (operator === '/') {
    divide(firstNumber, secondNumber);
  } else {
    console.log('ERROR');
  }
};