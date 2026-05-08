// //let, var , const

// let name = "Mg Mg" //globalScope

// function Greating() {
//     console.log("Hello" + " " + name);
// }

// // Greating()

// function Hello() {
//     if (true) {
//         let myName = "Aung Aung" //
//         var age = 25
//         const email = "aungaung@gmail.com"
//         console.log(email);
//     }
//     // console.log(name);
//     // console.log(age);
// }

// // console.log(age);


// Hello()

// // console.log(myName);


// const arry = ["Aung Aung", "Maung Muang", "Unknow", "Ma Ma"]
// // console.log(typeof arry.length);
// // console.log(arry[1])

// for (let i = 0; i < arry.length; i++) {
//     console.log(i + "." + arry[i]);
// }

// let x = 6

// while(x <= 5) {
//     console.log(x);
//     x++
// }

// let n = 0

// do {
//     console.log(n);
//     n++
// }while (n <= 5)


// const names = ["Aung Aung", "Maung Muang", "Unknow", "Ma Ma"]

// // for (let name of names) {
// //     console.log(name);
// // }

// names.forEach((name, i) => {
//     console.log(name);
// })

const name = {
    name: "Mg Mg",
    age: 25,
    family: {
        father_name: "U Ba",
        mother_name: "Daw Mya",
    }
}

// console.log(name["name"]);
// console.log(name.family.father_name);

const users = [
    {
        name: "Mg Mg",
        email: "mgmg@gmail.com"
    }, 
    {
        name: "Aung Aung",
        email: "aungaung@gmail.com"
    },
    {
        name: "Moe Moe",
        email: "moemoe@gmail.com"
    }
]

// console.log(users[0].email);
// console.log(users[1].email);
// console.log(users[1].email);
// console.log(users[1000].email);

// console.log(users);

for (let user of users) {
    console.log(user.name+ "," + user.email);
}

// [
//   { name: 'Mg Mg', email: 'mgmg@gmail.com' },
//   { name: 'Aung Aung', email: 'aungaung@gmail.com' },
//   { name: 'Moe Moe', email: 'moemoe@gmail.com' }
// ]

// { name: 'Mg Mg', email: 'mgmg@gmail.com' }
// { name: 'Aung Aung', email: 'aungaung@gmail.com' }
// { name: 'Moe Moe', email: 'moemoe@gmail.com' }