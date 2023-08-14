const display = document.querySelector('div.display');
let operator = null;
let firstOperand = null;
let secondOperand = null;

let previousOperator = null;
let previousResult = null;
let prevSecondOperand = null;

function activateButtons() {
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', (event) => processButton(event));
        if (!button.classList.contains('operator')) {
            button.addEventListener('transitionend', (event) => removeTransition(event));
        }
    }
}

function processButton(event) {
    switch (event.target.id) {
        case "number": appendNumber(event); animateButton(event); break;
        case "clear": clear(); animateButton(event); break;
        case "backspace": backspace(); animateButton(event); break;
        case "sign":
        case "negative": changeSign(); animateButton(event); break;
        case "decimal": addDecimal(); animateButton(event); break;
        case "divide": divide(event); animateButton(event); break;
        case "multiply": multiply(event); animateButton(event); break;
        case "subtract": subtract(event); animateButton(event); break;
        case "add": add(event); animateButton(event); break;
        case "equal": operate(); animateButton(event); break;
    }
}

function appendNumber(event) {
    let endDisplay = false;
    if (display.clientWidth > 330 && display.classList.contains('reduceFont')) {
        endDisplay = true;
    }
    if (operator !== null && firstOperand === null &&
        display.textContent !== '-') {
        firstOperand = parseFloat(display.textContent.replaceAll(',', ''));
        display.textContent = '';
        display.classList.remove('reduceFont');
    }
    if (!endDisplay) {
        display.textContent += event.target.textContent;
        if (!display.textContent.includes('.')) {
            let str = parseFloat(display.textContent.replaceAll(',', ''))
                .toLocaleString('en-US');
            display.textContent = str;
        }
        console.dir(display);
    }
    if (display.clientWidth > 370) display.classList.add('reduceFont');
}

function clear() {
    display.textContent = '';
    display.classList.remove('reduceFont');
    operator = null;
    firstOperand = null;
    secondOperand = null;
    previousOperator = null;
    previousResult = null;
    prevSecondOperand = null;
    deactivateOperator();
}

function backspace() {
    let str = display.textContent.replaceAll(',', '');
    let substr = str.substring(0, str.length - 1);
    if (substr.length > 0) {
        display.textContent = parseFloat(substr).toLocaleString('en-US');
    } else display.textContent = '';
}

function changeSign() {
    if (firstOperand === null && operator !== null) {
        firstOperand = parseFloat(display.textContent.replaceAll(',', ''));
        display.textContent = '';
        display.classList.remove('reduceFont');
    }
    if (display.textContent.includes('-')) {
        display.textContent = display.textContent.replace('-', '');
    } else {
        display.textContent = `-${display.textContent}`;
    }

}

function addDecimal() {
    if (display.textContent === '') display.textContent += '0.';
    if (!display.textContent.includes('.')) display.textContent += '.';
}

function divide(event) {
    if (operator === null) {
        operator = 'divide';
        event.target.classList.add('activeOperator');
    }
}

function multiply(event) {
    if (operator === null) {
        operator = 'multiply';
        event.target.classList.add('activeOperator');
    }
}

function subtract(event) {
    if (operator === null) {
        operator = 'subtract';
        event.target.classList.add('activeOperator');
    }
}

function add(event) {
    if (operator === null) {
        operator = 'add';
        event.target.classList.add('activeOperator');
    }
}

function operate() {
    let result = null;
    secondOperand = parseFloat(display.textContent.replaceAll(',', ''));
    display.textContent = '';
    display.classList.remove('reduceFont');
    if (firstOperand === null && previousOperator === null) {
        result = secondOperand; //result = first input
        //first operand is assigned when operator selected
    } else if (operator === null) {
        operator = previousOperator;
        firstOperand = previousResult;
        secondOperand = prevSecondOperand;
    } 
    if (firstOperand !== null) {
        switch (operator) {
            case 'divide': result = firstOperand / secondOperand; break;
            case 'multiply': result = firstOperand * secondOperand; break;
            case 'subtract': result = firstOperand - secondOperand; break;
            case 'add': result = firstOperand + secondOperand; break;
        }
    }
    if (result.toString().length > 11) {
        display.textContent = toExponential(result, 3);
    } else {
        display.textContent = parseFloat(result).toLocaleString('en-US');
    }
    if (display.clientWidth > 350) {
        display.classList.add('reduceFont');
    }
    previousOperator = operator;
    previousResult = result;
    prevSecondOperand = secondOperand;
    operator = null;
    firstOperand = null;
    secondOperand = null;
    deactivateOperator();
}

function toExponential(number, rounding) {
    return Number.parseFloat(number).toExponential(rounding);
}

function deactivateOperator() {
    const buttons = document.querySelectorAll('button.btn-four');
    for (const button of buttons) {
        button.classList.remove('activeOperator');
        button.classList.remove('animate-operator');
    }
}

function animateButton(event) {
    if (event.target.classList.contains('operator')) {
        event.target.classList.add('animate-operator');
    } else {
        event.target.classList.add('animate-button');
    }
}
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('animate-button');
}

activateButtons();