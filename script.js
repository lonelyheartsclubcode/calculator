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
  if (b === 0) {
    console.log("That's not allowed!");
  } else {
    console.log(a / b);
  }
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

const display = document.querySelector('.display');
const inputs = document.querySelector('.inputs');
const results = document.querySelector('.results');

const firstOperand = document.querySelector('.firstOperand');
const operator = document.querySelector('.operator');
const secondOperand = document.querySelector('.secondOperand');

document.querySelectorAll('.numbers').forEach(num => {
  num.addEventListener('click', () => {
    updateOperands(num.textContent)
  });
});

document.querySelectorAll('.operate').forEach(operator => {
  operator.addEventListener('click', () => {
    updateOperator(operator.textContent)
  });
});

function updateOperands(digit) {
  if (operator.textContent == '') {
    firstOperand.textContent += digit;
  } else {
      secondOperand.textContent += digit;
  }
};

function updateOperator(value) {
  if (firstOperand.textContent != '' && secondOperand.textContent == '') {
    operator.textContent = value;
  } else if (firstOperand.textContent != '' && secondOperand.textContent != '') {
      let continueCalculation = operate(operator.textContent, firstOperand.textContent, secondOperand.textContent);
      firstOperand.textContent = continueCalculation;
      results.textContent = continueCalculation;
      operator.textContent = value;
      secondOperand.textContent = '';
  } else if (firstOperand.textContent == '' && results.textContent != '') {
      firstOperand.textContent = results.textContent;
      operator.textContent = value;
  }
};

