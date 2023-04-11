let lOperand = '';
let operator = '';
let rOperand = '';

const numberButtons = [...document.querySelectorAll("[data-type = 'number']")];
const operatorButtons = [...document.querySelectorAll("[data-type = 'operator']")];
const equalsButton = document.querySelector("[data-type = 'equals']");
const decimalButton = document.querySelector("[data-type = 'decimal'");
const clearButton = document.querySelector("[data-type = 'clear'");
const backButton = document.querySelector("[data-type = 'backspace'");
const display = document.getElementById("display");

numberButtons.forEach((e) => {
    e.addEventListener('click', appendNumber);
});

operatorButtons.forEach((e) => {
    e.addEventListener('click', changeOperator);
});

equalsButton.addEventListener('click', calculateResult);
clearButton.addEventListener('click', clearScreen);
backButton.addEventListener('click', backspace);
decimalButton.addEventListener('click', appendDecimal);

function appendNumber(){
    if(operator == ''){
        lOperand += this.id;
    }else{
        rOperand += this.id;
    }

    display.innerHTML = lOperand + ` ${operator} ` + rOperand;
}

function changeOperator(){
    if(lOperand != '') {
        operator = this.id;
    }
    display.innerHTML = lOperand + ` ${operator} ` + rOperand;
}

function calculateResult(){
    if(lOperand !== '' && operator !== '' && rOperand !== ''){
        lOperand = operate(lOperand, operator, rOperand).toString();
        operator = '';
        rOperand = '';
    }
    display.innerHTML = lOperand;
}

function backspace(){
    if(rOperand !== ''){
        rOperand = rOperand.substring(0, rOperand.length-1);
    }else if(operator !==''){
        operator = '';
    }else if(lOperand !== '' && lOperand.length !== 1){
        lOperand = lOperand.substring(0, lOperand.length-1);
    }else if(lOperand.length == 1){
        lOperand = '0';
    }
    display.innerHTML = lOperand + ` ${operator} ` + rOperand;
}

function clearScreen(){
    lOperand = '0';
    operator = '';
    rOperand = '';

    display.innerHTML = lOperand + ` ${operator} ` + rOperand;
}

function appendDecimal(){
    if(rOperand !== '' && !rOperand.includes('.')){
        rOperand += '.';
    }else if(rOperand == '' && operator !== ''){
        rOperand = '0.';
    }else if(lOperand !== '' && !lOperand.includes('.')){
        lOperand += '.';
    }else if(lOperand == ''){
        lOperand = '0.';
    }
    display.innerHTML = lOperand + ` ${operator} ` + rOperand;
}

function operate(num1, sign, num2)
{
    switch(sign){
        case '+' : 
            return add(num1,num2);
        case '-' :
            return subtract(num1,num2);
        case 'x' :
            return multiply(num1,num2);
        case '÷' :
            return divide(num1,num2);
        case '%' :
            return modulus(num1, num2);
    }
}

Number.prototype.round = function(decimals) {
    return Number((Math.round(this + "e" + decimals)  + "e-" + decimals));
}

function add(num1, num2){
    return (Number(num1) + Number(num2)).round(3);
}

function subtract(num1, num2){
    return +(num1 - num2).round(3);
}

function multiply(num1, num2){
    return +(num1 * num2).round(3);
}

function divide(num1, num2){
    return (Number(num2) === 0) ? 'Division by 0' : +(num1 / num2).round(3);
}

function modulus(num1, num2){
    return +(num1 % num2).round(3);
}