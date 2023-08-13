const display = document.querySelector('div.display');

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
        case "number": appendNumber(event);
        case "clear": clear(event);
        case "sign": changeSign(event);
        case "decimal": addDecimal(event);
        case "modulo": modulo(event);
        case "divide": divide(event);
        case "multiply": multiply(event);
        case "subtract": subtract(event);
        case "add": add(event);
        case "equal": equal(event);
    }
}

function appendNumber(event) {
    let endDisplay = false;
    if (display.clientWidth > 330 && display.classList.contains('reduceFont')) {
        endDisplay = true;
    } 
    if (!endDisplay) {
        display.textContent += event.target.textContent;
        let num = parseFloat(display.textContent.replaceAll(',', ''))
            .toLocaleString('en-US');
        display.textContent = num;
        console.dir(display);
    }
    if (display.clientWidth > 370) display.classList.add('reduceFont');
}

function clear(event) {

};

function changeSign(event) {

};

function addDecimal(event) {

};

function modulo(event) {

};

function divide(event) {

};

function multiply(event) {

};

function subtract(event) {

};

function add(event) {

};

function equal(event) {

};

activateButtons();