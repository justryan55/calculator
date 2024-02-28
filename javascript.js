const numbers = document.querySelectorAll(".calc-key");
const operators = document.querySelectorAll(".calc-operator-key");
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
        memory.push(firstOperand += value);
        output.innerText += value;
    } else {
        memory.push(secondOperand += value);   
        output.innerText += value;    
    }
}

function clickOperator(){
    if (!operatorValue){
    memory.push(operatorValue = this.textContent);
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
    if (secondOperand !== "") {
        secondOperand = secondOperand.slice(0, -1);
        output.textContent = firstOperand + operatorValue + secondOperand;
    } else if (operatorValue !== "") {
        operatorValue = "";
        output.textContent = firstOperand;
    } else {
        firstOperand = firstOperand.slice(0, -1);
        output.textContent = firstOperand;
    }
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

undo.addEventListener("click", undoInput);