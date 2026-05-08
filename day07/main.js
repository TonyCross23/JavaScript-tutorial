// let row = 5

// for (let i = 1; i <= row; i++) {
//     let line = ""
//     for(let j = 1; j <= i; j++) {
//         line += "*"
//     }
//     console.log(line);
// }

// *
// **
// ***
// ****
// *****

let n = 5

for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 1; j <= n - i; j++) {
        line += " "
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        line += "*"
    }

    console.log(line);
}

//     *
//    ***
//   *****
//  *******
// *********
