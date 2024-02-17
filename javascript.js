

const numbers = document.querySelectorAll(".calc_key")
const operators = document.querySelectorAll(".calc_operator_key")
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const stored_output = document.getElementById("stored");
const result_output = document.getElementById("result");


let firstOperand = "";
let operator = "";
let secondOperand = "";

function operatorClick(){
    operators.forEach(button => {
        button.addEventListener("click", () => {
            operator = button.textContent;
            stored_output.innerText += operator;
            operate();
        })
    })
}

function operate(){
    equal.addEventListener("click", () => {
        let result; 
        if (operator === "+"){
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            result_output.innerText = result;
        } else if (operator === "-"){
            result = firstOperand - secondOperand;
            result_output.innerText = result;
        } else if (operator === "×"){
            result = firstOperand*secondOperand;
            result_output.innerText = result;
        } else if (operator === "÷"){
            result = firstOperand/secondOperand;
            result_output.innerText = result;
        }
    })
}
            
function populateDisplay(){
    numbers.forEach(button => {
        button.addEventListener("click", () => {
            if (operator !== ""){
                secondOperand += button.textContent;
                stored_output.textContent += button.textContent;
            } else {
            firstOperand += button.textContent;
            stored_output.textContent = firstOperand;
            }
        })
    })
}

function reset(){
    clear.addEventListener("click", () => {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        stored_output.innerText = "";
        result_output.innerText = ""; 
    })
}


operatorClick()
populateDisplay()
reset()