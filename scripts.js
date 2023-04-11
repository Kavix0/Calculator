let lOperand = '';
let operator = '';
let rOperand = '';

const numberButtons = [...document.querySelectorAll("[data-type = 'number']")];
const operatorButtons = [...document.querySelectorAll("[data-type = 'operator']")];
const equalsButton = document.querySelector("[data-type = 'equals']");
const decimalButton = document.querySelector("[data-type = 'decimal'");
const clearButton = document.querySelector("[data-type = 'clear'");
const backButton = document.querySelector("[data-type = 'backspace'");

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

    console.log(lOperand + ` ${operator} ` + rOperand);
}

function changeOperator(){
    if(lOperand != '') {
        operator = this.id;
    }
    console.log(lOperand + ` ${operator} ` + rOperand);
}

function calculateResult(){
    if(lOperand !== '' && operator !== '' && rOperand !== ''){
        lOperand = operate(lOperand, operator, rOperand).toString();
        operator = '';
        rOperand = '';
    }
    console.log(lOperand);
}

function backspace(){
    if(rOperand !== ''){
        rOperand = rOperand.substring(0, rOperand.length-1);
    }else if(operator !==''){
        operator = '';
    }else if(lOperand !== ''){
        lOperand = lOperand.substring(0, lOperand.length-1);
    }
    console.log(lOperand + ` ${operator} ` + rOperand);
}

function clearScreen(){
    lOperand = '';
    operator = '';
    rOperand = '';
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
    console.log(lOperand + ` ${operator} ` + rOperand);
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

function add(num1, num2){
    return Number(num1) + Number(num2);
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