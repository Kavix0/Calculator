let currentInput = '';
let lOperand = 0;
let operator = '';
let rOperand = 0;

const numberButtons = [...document.querySelectorAll("[data-type = 'number']")];
const operatorButtons = [...document.querySelectorAll("[data-type = 'operator']")];
const equalsButton = document.querySelector("[data-type = 'equals']");
const decimalButton = document.querySelector("[data-type = 'decimal'");
const clearButton = document.querySelector("[data-type = 'clear'");
const backButton = document.querySelector("[data-type = 'backspace'");

numberButtons.forEach((e) => {
e.addEventListener('click', appendNumber(e));
});

/*
operatorButtons.forEach((e) => {
    e.addEventListener('click', changeOperator);
});

equalsButton.addEventListener('click', calculateResult);
decimalButton.addEventListener('click', appendDecimal);
clearButton.addEventListener('click', clearScreen);
backButton.addEventListener('click', backspace);
*/

function appendNumber(e){
}

function operate(num1, sign, num2)
{
    switch(sign){
        case '+' : 
            return add(num1,num2);
        case '-' :
            return subtract(num1,num2);
        case '*' :
            return multiply(num1,num2);
        case '/' :
            return divide(num1,num2);
        case '%' :
            return modulus(num1, num2);
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return (Number(num2) === 0) ? 'Division by 0' : (num1 / num2);
}

function modulus(num1, num2){
    return num1 % num2;
}