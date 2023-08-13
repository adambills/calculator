const display = document.querySelector('div.display');

function activateButtons() {
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', (event) => {
            //console.log(e);
            processButton(event);
        })
    }
}

function processButton(event) {
    console.log(event.target.id);
    switch (event.target.id) {
        case "number": updateDisplay(event);
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
function updateDisplay(event) {
    display.textContent += event.target.textContent;
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