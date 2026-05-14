
// document.addEventListener("", callback_function)
// document.addEventListener("", function() {})

// // arrow function es6
// document.addEventListener("", () => {})

const header = document.querySelector("h1")
const btn = document.getElementById("btn")
const body = document.querySelector("body")

// console.log(btn);

// alert("Hello World")

function Greeting() {
    if(header.style.color == "blue") {
        header.style.color = "red"
        body.style.backgroundColor = "blue"
    } else {
        header.style.color = "blue"
        body.style.backgroundColor = "red"
    }
}

btn.addEventListener("click", Greeting)

btn.addEventListener("mouseover", () => {
    btn.innerText = "ကြွက်တင်ထားသည်"
})

btn.addEventListener("mouseout", () => {
    btn.innerText = "ကြွက်ထွက်သွားပြီ"
})

btn.addEventListener("keyup", () => {
    header.innerText = "အပေါ်တင်နေသည်"
})

function btnAlert() {
    alert("Click to alert")
}

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	    Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

// 1.4 = 1, 1.5 1.9 = 2
// let rundedMath = Math.round(1.9)

// console.log(rundedMath);

// 1.1 = 2
// let ceilMath = Math.ceil(1.1)
// console.log(ceilMath);

// 4.5 = 4 , -4.5 = -5
// let floorMath = Math.floor(-4.6)

// console.log(floorMath);

// pi = 3.1415
// let pi = Math.floor(Math.PI)

// console.log(pi);

// 5 + 1 = 6 9 + 1 = 10
let ra = Math.floor(Math.random() * 10 + 1) //9

console.log(ra);
