

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
            result = firstOperand + secondOperand;
            console.log(result)
        } else if (operator === "-"){
            result = firstOperand - secondOperand;
            console.log(result)
        } else if (operator === "×"){
            result = firstOperand*secondOperand;
            console.log(result)
        } else if (operator === "÷"){
            result = firstOperand/secondOperand;
            console.log(result);
        }
    })
}
            
function populateDisplay(){
    numbers.forEach(button => {
        button.addEventListener("click", () => {
            stored_output.innerText += button.textContent;
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