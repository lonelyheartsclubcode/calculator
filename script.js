function add(a,b) {
  return parseFloat(a) + parseFloat(b);
};

function subtract(a,b) {
  return parseFloat(a) + parseFloat(-b);
};

function multiply(a,b) {
  return parseFloat(a) * parseFloat(b);
};

function divide(a,b) {
  if (b == 0) {
    alert("That's not allowed!");
  } else {
    return parseFloat(a) / parseFloat(b);
  }
};

function operate(operator, firstNumber, secondNumber) {
  if (operator == '+') {
    return add(firstNumber, secondNumber);
  } else if (operator == '-') {
    return subtract(firstNumber, secondNumber);
  } else if (operator == '×') {
    return multiply(firstNumber, secondNumber);
  } else if (operator == '÷') {
    return divide(firstNumber, secondNumber);
  } else {
    console.log('ERROR');
  }
};

const display = document.querySelector('.display');
const inputs = document.querySelector('.inputs');
const results = document.querySelector('.result');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

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
      let continueCalculation = roundFiveDigits(operate(operator.textContent, firstOperand.textContent, secondOperand.textContent));
      firstOperand.textContent = continueCalculation;
      results.textContent = '';
      operator.textContent = value;
      secondOperand.textContent = '';
  } else if (firstOperand.textContent == '' && results.textContent != '') {
      firstOperand.textContent = results.textContent;
      operator.textContent = value;
  }
};

equals.addEventListener('click', () => {
  if (operator.textContent != ''  && firstOperand.textContent != '' && secondOperand.textContent != '') {
    let answer = roundFiveDigits(operate(operator.textContent, firstOperand.textContent, secondOperand.textContent));
    results.textContent = answer;
    firstOperand.textContent = '';
    secondOperand.textContent = '';
    operator.textContent = '';
  } else {
    console.log('How about you try with some actual numbers, mate?');
  }
});

clear.addEventListener('click', () => {
    results.textContent = '';
    firstOperand.textContent = '';
    secondOperand.textContent = '';
    operator.textContent = '';
});

function roundFiveDigits(input) {
  let scaledInput = Math.round(input*100000);
  return scaledInput/100000;
}