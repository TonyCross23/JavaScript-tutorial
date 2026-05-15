
let btn = document.getElementById("btn")
let error = document.getElementById("error")
let scoreEl = document.getElementById("score")
let result = document.getElementById("result")
let arrList = document.getElementById("arr")
let reset = document.getElementById("reset")
let div = document.getElementById("container")

let score = 10
let arr = []
scoreEl.innerText = score

let randomNumber = Math.floor(Math.random() * 50) + 1
console.log(randomNumber);

btn.addEventListener("click", (event) => {
    event.preventDefault()
    const inputNumbre = document.getElementById("input").value

    if(inputNumbre === "") {
        error.innerText = "နံပတ်တခုကိုရွေးချယ်ဖို့လိုပါသည်"
        return
    }
    
    const value = Number(inputNumbre)

    if(!value || value <=0 || value >= 51) {
        error.innerText = "ကျေးဇူးပြုပြီး 1 - 50 ထိပဲ ရွေးပေးပါ"
        return
    } else {
        error.innerText = ""
    }
    // console.log(value);
    arr.push(value)
    arrList.innerText = "လူကြီးမင်း ခက်မှန်းလိုက်သော ဂဏန်းများမှာ : " + arr

    if(score <= 1) {
        btn.disabled = true
    }

    if(value === randomNumber) {
        result.innerText = "လူကြီးမင်း ခက်မှန်းလိုက်တာမှန်ပါတယ်"
        document.getElementById("input").value = ""
        div.classList.remove("border-red")
        randomNumber = Math.floor(Math.random() * 50) + 1
        console.log(randomNumber);
    } else {
        score--
        scoreEl.innerText = score 
        result.innerText = value > randomNumber ? "လူကြီးမင်း ခက်မှန်းလိုက်တဲ့ နံပတ်က အဖြေထက်ကြီးနေတယ်" : "လူကြီးမင်း ခက်မှန်းလိုက်တဲ့ နံပတ်က အဖြေထက်ငယ်နေတယ်"
        div.classList.add("border-red")
        document.getElementById("input").value = ""
    }
 
})

reset.addEventListener("click", () => {
    score = 10
    scoreEl.innerText = score
    arr = []
    arrList.innerText = arr
    // console.log("Clicked");
    error.innerText = ""

    result.innerText = ""
    document.getElementById("input").value = ""

    randomNumber = Math.floor(Math.random() * 50) + 1
    console.log(randomNumber);
})