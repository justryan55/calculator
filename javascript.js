

const numbers = document.querySelectorAll(".calc_key");
const operators = document.querySelectorAll(".calc_operator_key");
const clear = document.getElementById("clear");
const undo = document.getElementById("undo");
const equal = document.getElementById("equal");
const output = document.getElementById("output");

let firstOperand = "";
let secondOperand = "";
let operatorValue = "";
let operatorFlag = false;
let result = "";
let memory = []; 

function userInput(){
    const value = this.value;
    if (!operatorFlag){
        firstOperand += value;
        output.innerText += value;
    } else {
        secondOperand += value;   
        output.innerText += value;    
    }
}

function clickOperator(){
    if (!operatorValue){
    operatorValue = this.textContent;
    output.innerText += this.textContent;
    operatorFlag = true;
    } else {
        operate();
        firstOperand = result;
        secondOperand = "";
        operatorValue = this.textContent;
        output.innerText = result + this.textContent;
    }
}

function operate(){
    let a = parseFloat(firstOperand);
    let b = parseFloat(secondOperand);
    if (operatorValue === "+"){
        result = a + b;
    } else if (operatorValue === "-"){
        result = a - b;
    } else if (operatorValue === "×" || operatorValue === "&tumes"){
        result = a * b;
    } else if (operatorValue === "%"){
        result = a % b;
    } else if (operatorValue === "÷"){
        if (secondOperand === "0"){
            output.innerText = "Invalid";
        } else {
            result = a / b;
        }
    } output.innerText = result;
}

function lastOperation(){
    if (operatorValue && secondOperand !== ""){
        operate();
        firstOperand = result;
        output.textContent = result;
    } else {
        output.textContent = "Invalid";
    }
}

function undoInput(){
    if ()
}

numbers.forEach(button => {
    button.addEventListener("click", userInput);
}); 
    
    
operators.forEach(button => {
    button.addEventListener("click", clickOperator);
}); 

clear.addEventListener("click", () => {
    firstOperand = "";
    secondOperand = "";
    operatorValue = "";
    operatorFlag = false;
    output.textContent = "";
});

equal.addEventListener("click", () => {
    if (result !== null){
        lastOperation();
    } else {
        operate();
    }
})