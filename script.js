const display = document.getElementById("display");
let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";

function clear() {
  operand1 = "";
  operand2 = "";
  operator = "";
  result = "";
  display.textContent = "0";
}

function backspace() {
  if (result !== "") {
    clear();
  } else if (operator !== "") {
    operator = "";
    display.textContent = operand1;
  } else if (operand2 !== "") {
    operand2 = operand2.slice(0, -1);
    display.textContent = operand2;
  } else if (operand1 !== "") {
    operand1 = operand1.slice(0, -1);
    display.textContent = operand1;
  }
}

function handleNumberClick(event) {
  const number = event.target.textContent;
  if (result !== "") {
    operand1 = result;
    operand2 = "";
    operator = "";
    result = "";
  }
  if (operator === "") {
    operand1 += number;
    display.textContent = operand1;
  } else {
    operand2 += number;
    display.textContent = operand2;
  }
}

function handleOperatorClick(event) {
  const clickedOperator = event.target.textContent;
  if (result !== "") {
    operand1 = result;
    operand2 = "";
    result = "";
  }
  if (operator !== "") {
    calculate();
  }
  operator = clickedOperator;
}

function handleEqualsClick() {
  if (operator !== "" && operand2 !== "") {
    calculate();
  }
}

function calculate() {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "×":
      result = num1 * num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      return;
  }
  operand1 = result.toString();
  operand2 = "";
  operator = "";
  display.textContent = result;
}

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("backspace").addEventListener("click", backspace);

document.getElementById("percent").addEventListener("click", handleOperatorClick);

document.getElementById("add").addEventListener("click", handleOperatorClick);

document.getElementById("subtract").addEventListener("click", handleOperatorClick);

document.getElementById("multiply").addEventListener("click", handleOperatorClick);

document.getElementById("divide").addEventListener("click", handleOperatorClick);

document.getElementById("equals").addEventListener("click", handleEqualsClick);

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});

document.getElementById("decimal").addEventListener("click", () => {
  if (operator === "" && !operand1.includes(".")) {
    operand1 += ".";
    display.textContent = operand1;
  } else if (operator !== "" && !operand2.includes(".")) {
    operand2 += ".";
    display.textContent = operand2;
  }
});

//**script Dark Mode**/

let buttonToggle = document.querySelector(".button-toggle")
let body = document.body
let classStyle = "dark-mode"

buttonToggle.addEventListener("click", function(e) {
    body.classList.toggle(classStyle)
    
});

//**script button Md **/
function modeColors(){
  let buttonCal = document.querySelector(".button-toggle-m");
  
  buttonCal.addEventListener("click", function() {
    let red = Math.floor(Math.random() * 156) + 100
    let green = Math.floor(Math.random() * 156) + 100
    let blue = Math.floor(Math.random() * 156) + 100
    let alpha = Math.random() * 0.5 + 0.25;
    display.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  });
  
}
modeColors()