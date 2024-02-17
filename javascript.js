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
let numbers = [];

// show input

seven.addEventListener("click", () => {
    output.innerHTML = "7"
})

eight.addEventListener("click", () => {
    output.innerHTML = "8"
})

nine.addEventListener("click", () => {
    output.innerHTML = "9"
})

four.addEventListener("click", () => {
    output.innerHTML = "4"
})

five.addEventListener("click", () => {
    output.innerHTML = "5"
})

six.addEventListener("click", () => {
    output.innerHTML = "6"
})

one.addEventListener("click", () => {
    output.innerHTML = "1"
})

two.addEventListener("click", () => {
    output.innerHTML = "2"
})

three.addEventListener("click", () => {
    output.innerHTML = "3"
})

zero.addEventListener("click", () => {
    output.innerHTML = "0"
})

dot.addEventListener("click", () => {
    output.innerHTML = "."
})

// store input in an array

function storeNumber(){
this.addEventListener("click", () => {
    let number = parseInt(this.textContent);
    numbers.push(number);
    console.log(numbers);
})}

storeNumber()