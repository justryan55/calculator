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
    })
})

equal.addEventListener("click", () => {
    total.innerText += "=";
}
)

equal.addEventListener("click", () => {
    performOperation();
})

// clear button

clear.addEventListener("click", () => {
    total.textContent = "";
    output.textContent = "";
    digits = [];
})

// store pressed numbers in memory

function performOperation(){
    let a = parseInt(digits[0]);
    let b = parseInt(digits[1]);
    let result = a + b;
    output.innerText = result;
}


// operate function

function performAddition(a, b){
    return a + b;
}

function operate(a, b, operator){
    let result;

    if (operator === "+") {
        result = performAddition(a, b);
    } else if (operator === "-") {
        result = performSubtract(a, b);
    } else if (operator === "&times;") { 
        result = performMultiply(a, b);
    } else if (operator === "divide") {
        result = performDivide(a, b);
    } else {
        result = "Invalid operator";
    }

    return result;
}

