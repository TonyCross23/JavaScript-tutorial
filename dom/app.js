// // console.log(typeof document); object type
// // console.log(document.URL);

// const headerOne = document.querySelector("h1")
// const Header = document.getElementById("headerOne")
//     // console.log(headerOne.innerText);
//     // console.log(Header.innerHTML);

//     // headerOne.innerText = "မင်္ဂလာပါ ကမ္ဘာလောက";
//     // headerOne.innerHTML = "<u>Hello</u> World"
    
//     headerOne.style.background = "blue"
//     headerOne.style.color = "red"
//     headerOne.style.padding = "20px"
//     // headerOne.style.border = "20px"
//     // headerOne.style.borderStyle = "solid"
//     // headerOne.style.borderColor = "yellow"
//     headerOne.style.border = "5px solid yellow"

// const newDiv = document.createElement("div")

// newDiv.innerText = "ကျွန်တော်က အသစ်ရောက်လာတဲ့ Div ပါ။"

// document.body.appendChild(newDiv)
    
// // headerOne.innerHTML = "Hello";

// const btn = document.querySelector("button")

// btn.addEventListener("click", function() {
//     if(document.body.style.backgroundColor === "black") {
//         document.body.style.backgroundColor = "white"
//         document.body.style.color = "black"
//     } else {
//         document.body.style.backgroundColor = "black"
//         document.body.style.color = "gray";
//     }
// })

// btn.addEventListener("mouseover", () => {
//     btn.innerText =  "Mouse ထင်ထားသည်"
// })

// btn.addEventListener("mouseout", () => {
//     btn.innerText = "Change Background"
// })

const list = document.getElementById("list")

const listNode = list.querySelectorAll("li a")
listNode[0].innerText = "HOME"
listNode[1].innerText = "SERVICE"
listNode[2].innerText = "ABOUT"
listNode[3].innerText = "CONTACT"
// list.forEach((list) => {
//     // list.style.color = "red"
//     list.style.listStyle = "none"
// })
// console.log(listNode);
// console.log(change);
