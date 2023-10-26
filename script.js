let input = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(num) {
  input += num;
  document.getElementById('output').value = input;
}

function appendOperator(op) {
  operator = op;
  operand1 = input;
  input = '';
}

function clearInput() {
  input = '';
  document.getElementById('output').value = input;
}

function calculate() {
  operand2 = input;
  input = '';
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = 'Error';
  }

  document.getElementById('output').value = result;
}
