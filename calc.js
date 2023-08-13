const display = document.querySelector('div.display');
let operator = null;
let firstOperand = null;
let secondOperand = null;

function activateButtons() {
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', (event) => {
            processButton(event);
        })
    }
}

function processButton(event) {
    switch (event.target.id) {
        case "number": appendNumber(event); break;
        case "clear": clear(event); break;
        case "backspace": backspace(event); break;
        case "sign":
        case "negative": changeSign(event); break;
        case "decimal": addDecimal(event); break;
        case "divide": divide(event); break;
        case "multiply": multiply(event); break;
        case "subtract": subtract(event); break;
        case "add": add(event); break;
        case "equal": equal(event); break;
    }
}

function appendNumber(event) {
    let endDisplay = false;
    if (display.clientWidth > 330 && display.classList.contains('reduceFont')) {
        endDisplay = true;
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
};

function changeSign() {
    if (display.textContent.includes('-')) {
        display.textContent = display.textContent.replace('-', '');
    } else {
        display.textContent = `-${display.textContent}`;
    }
};

function addDecimal() {
    if (display.textContent === '') display.textContent += '0.';
    if (!display.textContent.includes('.')) display.textContent += '.';
}

function backspace(event) {
    let str = display.textContent.replaceAll(',', '');
    let substr = str.substring(0, str.length - 1);
    if (substr.length > 0) {
        display.textContent = parseFloat(substr).toLocaleString('en-US');
    } else display.textContent = '';
}

function divide(event) {
    if (operator === null) {
        operator === 'divide';
        event.target.classList.add('activeOperator');
    }
}

function multiply(event) {
    if (operator === null) {
        operator === 'multiply';
        event.target.classList.add('activeOperator');
    }
}

function subtract(event) {
    if (operator === null) {
        operator === 'subtract';
        event.target.classList.add('activeOperator');
    }
}

function add(event) {
    if (operator === null) {
        operator === 'add';
        event.target.classList.add('activeOperator');
    }
}

function equal() {

}

activateButtons();