let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    } else if (value === '=') {
      if (currentInput && previousInput && operator) {
        let result = eval(previousInput + operator + currentInput);
        display.textContent = result;
        currentInput = result;
        previousInput = '';
        operator = '';
      }
    } else {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    }
  });
});