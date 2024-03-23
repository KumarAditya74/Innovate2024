let calculator = document.querySelector('.calculator');
let body = document.body;

calculator.onmouseover = function() {
  body.style.background = "linear-gradient(to bottom right, white, black)";
  calculator.style.background = "linear-gradient(to bottom right, #61c0bf, #0088a9)";
}

calculator.onmouseleave = function() {
  body.style.background = "linear-gradient(to bottom right, #61c0bf, #0088a9)";
}
let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function clearLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
