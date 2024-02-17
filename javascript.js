const output = document.getElementById("output");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const numbers = document.querySelectorAll(".calc_key")
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const total = document.getElementById("total");
const operators = document.querySelectorAll(".calc_operator_key");

let digits = [];
let a = [];
let operator = [];
let b = [];


// show input

numbers.forEach(button => {
    button.addEventListener("click", () => {
        output.textContent = button.textContent;
        total.innerText += button.textContent;
        digits.push(button.textContent);
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        total.innerText += button.textContent;
        operator = button.id;
    })
})

equal.addEventListener("click", () => {
    // total.innerText += "=";
    operate();
}
)


// clear button

clear.addEventListener("click", () => {
    total.textContent = "";
    output.textContent = "";
    digits = [];
})

// operator functions 

function performAddition(){
    let a = parseInt(digits[0]);
    let b = parseInt(digits[1]);
    let result = a + b;
    output.innerText = result;
    return result;
}


function performSubtract(){
    let a = parseInt(digits[0]);
    let b = parseInt(digits[1]);
    let result = a - b;
    output.innerText = result;
    return result;
}

function performMultiply(){
    let a = parseInt(digits[0]);
    let b = parseInt(digits[1]);
    let result = a * b;
    output.innerText = result;
    return result;
}

function performDivide(){
    let a = parseInt(digits[0]);
    let b = parseInt(digits[1]);
    let result = a/b;
    output.innerText = result;
    return result;
}


function operate(){
    if (operator === "add") {
        result = performAddition();
    } else if (operator === "subtract") {
        result = performSubtract(a, b);
    } else if (operator === "multiply") { 
        result = performMultiply(a, b);
    } else if (operator === "divide") {
        result = performDivide(a, b);
    } else {
        result = "Invalid operator";
    }
}

