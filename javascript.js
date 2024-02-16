const output = document.getElementById("output");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
let equation = [];


//show text in output

function showText(event){
    const clickedElement = event.target;
    if (clickedElement.tagName === "BUTTON" && clickedElement.id !== "clear"){
        output.innerHTML += clickedElement.innerText + " "
    }
    equation.push(clickedElement);
    console.log(equation);
}

this.addEventListener("click", showText);

// clear function

clear.addEventListener("click", () => {
    output.innerHTML = " ";
})

// add function

function addition(a, b){
    a = 2;
    b = 2;
    output.innerText = a + b
}

addition();

