
let btn = document.getElementById("btn")
let validation = document.getElementById("error")
let answer = document.getElementById("result")
let scoreEl = document.getElementById("score")

let score = 10
scoreEl.innerText = score

// ran * 50 = 0 - 49 + 1 => 1 + 50
let randomNumber = Math.floor(Math.random() * 50 + 1)
console.log(randomNumber);

btn.addEventListener("click", (event) => {
    event.preventDefault();
    // html -> input -> value
    let inputNumbre = document.getElementById("input").value

    // validation <span class="error" id="error">{နံပတ်ထည့်ပြီးမှ guess ကိုနှိပ်ပေးပါ}</span>
    if(inputNumbre === "") {
        validation.innerText = "နံပတ်ထည့်ပြီးမှ guess ကိုနှိပ်ပေးပါ"
        // console.log(validation);        
        return
    }
    
    validation.innerText = ""
    // change string to number
    const value = Number(inputNumbre)

    if(value === randomNumber) {
        answer.innerText = "လူကြီးမင်း ခက်မှန်းသော နံပတ်မှာ မှန်ကန်ပါသည်"
    }else {
        score--
        scoreEl.innerText = score
    }

})

