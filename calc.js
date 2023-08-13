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
        case "number": appendNumber(event); break;
        case "clear": clear(event); break;
        case "sign": 
        case "negative": changeSign(event); break;
        case "decimal": addDecimal(event); break;
        case "modulo": modulo(event); break;
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
        let num = parseFloat(display.textContent.replaceAll(',', ''))
            .toLocaleString('en-US');
        display.textContent = num;
        console.dir(display);
    }
    if (display.clientWidth > 370) display.classList.add('reduceFont');
}

function clear(event) {
    display.textContent = '';
    display.classList.remove('reduceFont');
};

function changeSign(event) {
    if (display.textContent.includes('-')) {
        display.textContent = display.textContent.replace('-', '');
    } else{
        display.textContent = `-${display.textContent}`;
    } 
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