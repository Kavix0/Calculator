let currentInput = [];
const buttons = [...document.getElementsByClassName('gridItem')];
let lOperand = 0;
let operator = '';
let rOperand = 0;


buttons.forEach((e) => {
e.addEventListener('mousedown', parseInput(e))
});

function parseInput(e){
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