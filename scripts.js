let currentInput = [];
const buttons = [...document.getElementsByClassName('gridItem')];

buttons.forEach((e) => {
e.addEventListener('mousedown', parseInput(e))
});

function parseInput(e){
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