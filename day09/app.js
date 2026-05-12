
// let title = document.querySelector(".headerOne")
// let titleTwo = document.getElementById("headerTwo")

// // console.log(title);
// // console.log(titleTwo);

// title.innerText = "ဒါကပြောင်းလိုက်တာပါ"
// titleTwo.innerHTML = "<b>ဒါက DOM ပါ</b>"

// // console.log(title);

// function ChangeColor() {
//     if (title.style.color === "red" && titleTwo.style.color === "blue") {
//         title.style.color = "black"
//         titleTwo.style.color = "black"
//     } else {
//         title.style.color = "red"
//         titleTwo.style.color = "blue"
//     }
// }

let body = document.querySelector("body")
let title = document.querySelector(".headerOne")
let titleTwo = document.getElementById("headerTwo")

function ChangeColor() {
    if(body.style.backgroundColor === "black") {
       body.style.backgroundColor = "white"
       title.style.color = "black"
       titleTwo.style.color = "black"
       title.innerText = "ဒါကပြောင်းလိုက်တာပါ"
       titleTwo.innerHTML = "<b>ဒါက DOM ပါ</b>"
    } else {
        body.style.backgroundColor = "black"
         title.style.color = "white"
       titleTwo.style.color = "white"
       title.innerText = "DOM"
       titleTwo.innerHTML = "<b>Document Object Model</b>"
    }
}