
// const header = document.querySelector("h1")

// header.className = "text-color"
// header.id = "header"

// // header.style.color = "blue"

// console.log(header);

// const Div = document.querySelector("div")
// const para = document.querySelectorAll("p")

// // para.style.fontSize = "200px"
// // [p,p]
// para[0].style.fontSize = "200px"
// para[1].style.fontSize = "300px"

// console.log(para);

// const addPara = document.createElement("p")
// const text = addPara.innerText = "Hello World"

// para[0].appendChild(addPara)
// // Div.appendChild(addPara)

// console.log(addPara);


const ul = document.querySelector("ul")

const list = document.querySelectorAll("li a")

list[0].style.color = "red"
list[1].style.color = "red"
list[2].style.color = "red"
list[3].style.color = "red"

list[0].style.fontSize = "20px"
list[1].style.color = "red"

list[0].innerText = "HOME"
list[1].innerHTML = "<i>ABOUT</i>"

// //li
const addList = document.createElement("li")
// // a
const addLink = document.createElement("a")

// addLink.textContent = "Portfolio"
// addLink.href = "#"
// addLink.style.color = "red"

// // console.log(addLink);

// addList.appendChild(addLink)
// ul.appendChild(addList)

// console.log(addList);


// console.log(list);

addLink.textContent = "Content"
addLink.href = "https://www.google.com"
addLink.style.color = "green"
addList.appendChild(addLink)
ul.appendChild(addList)

console.log(addList);
