// // // console.log(typeof document); object type
// // // console.log(document.URL);

// // const headerOne = document.querySelector("h1")
// // const Header = document.getElementById("headerOne")
// //     // console.log(headerOne.innerText);
// //     // console.log(Header.innerHTML);

// //     // headerOne.innerText = "မင်္ဂလာပါ ကမ္ဘာလောက";
// //     // headerOne.innerHTML = "<u>Hello</u> World"
    
// //     headerOne.style.background = "blue"
// //     headerOne.style.color = "red"
// //     headerOne.style.padding = "20px"
// //     // headerOne.style.border = "20px"
// //     // headerOne.style.borderStyle = "solid"
// //     // headerOne.style.borderColor = "yellow"
// //     headerOne.style.border = "5px solid yellow"

// // const newDiv = document.createElement("div")

// // newDiv.innerText = "ကျွန်တော်က အသစ်ရောက်လာတဲ့ Div ပါ။"

// // document.body.appendChild(newDiv)
    
// // // headerOne.innerHTML = "Hello";

// // const btn = document.querySelector("button")

// // btn.addEventListener("click", function() {
// //     if(document.body.style.backgroundColor === "black") {
// //         document.body.style.backgroundColor = "white"
// //         document.body.style.color = "black"
// //     } else {
// //         document.body.style.backgroundColor = "black"
// //         document.body.style.color = "gray";
// //     }
// // })

// // btn.addEventListener("mouseover", () => {
// //     btn.innerText =  "Mouse ထင်ထားသည်"
// // })

// // btn.addEventListener("mouseout", () => {
// //     btn.innerText = "Change Background"
// // })

// // const list = document.getElementById("list")

// // const listNode = list.querySelectorAll("li a")
// // listNode[0].innerText = "HOME"
// // listNode[1].innerText = "SERVICE"
// // listNode[2].innerText = "ABOUT"
// // listNode[3].innerText = "CONTACT"
// // list.forEach((list) => {
// //     // list.style.color = "red"
// //     list.style.listStyle = "none"
// // })
// // console.log(listNode);
// // console.log(change);


// // const list = document.getElementById("list")

// // const listNode = list.querySelectorAll("li a")
// //     listNode[0].innerText = "HEllo"
// // console.log(listNode);

// let listNode = document.querySelectorAll("li a")
// // console.log("အဟောင်းအရေအတွက်:", listNode.length);

// const addList = document.createElement("li")
// const addLink = document.createElement('a')
// addLink.textContent = "New Link"
// addLink.href = "#"
// addList.appendChild(addLink)

// const ul = document.querySelector("#list")
// ul.appendChild(addList)

// listNode = document.querySelectorAll("li a");
// // console.log(listNode);

// const addClass = document.querySelector("p")

// addClass.className = "color"    
// addClass.id = "hello"

// console.log(addClass);


const contentDiv = document.querySelector(".content")

const userName = "Tony"
const role = "FullStack Developer"

const myHtml = `
    <div class="card">
        <h2>မင်္ဂလာပါ ${userName}</h2>
        <p>သင်၏ ရာထူးမှာ <strong>${role}</strong> ဖြစ်ပါတယ်</p>
        <button onclick="alert('Hello')">Click Me</button>
    </div>
`;

contentDiv.innerHTML = myHtml
// console.log(contentDiv);
