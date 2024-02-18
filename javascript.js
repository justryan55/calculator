

const numbers = document.querySelectorAll(".calc_key")
const operators = document.querySelectorAll(".calc_operator_key")
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const memory = document.getElementById("memory");
const output = document.getElementById("output");


let firstOperand = "";
let operator = "";
let secondOperand = "";
let result = ""

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});



function displayValue(){
    numbers.forEach(button => {
        button.addEventListener("click", () => {
            if (firstOperand === "" && secondOperand === ""){
                firstOperand += button.value;
                memory.innerText += button.value;
            } else if (firstOperand !== "" && secondOperand === ""){
                secondOperand += button.value;
                memory.innerText += button.value;
            } else if (firstOperand !== "" && secondOperand !== ""){
                firstOperand = result;
                secondOperand = button.value;
                memory.innerText += button.value;
            } else {
                firstOperand += result;
                secondOperand += button.value;
                memory.innerText += button.value;
            } 
            operate();   
        }) 
    })
    operators.forEach(button => {
        button.addEventListener("click", () => {
            memory.innerText += button.textContent;
            operator = button.textContent;
        })
    })
}


function operate(){
    if (operator === "+" && firstOperand !== ""){
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (operator === "-"){
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (operator === "×" || operator === "&times"){
        result = parseFloat(firstOperand)*parseFloat(secondOperand);
    } else if (operator === "÷"){
        result = parseFloat(firstOperand)/parseFloat(secondOperand);
    } 
    output.innerText = result;

}

clear.addEventListener("click", () => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    result = "";
    output.innerText = "";
    memory.innerText = "";
})



displayValue()

