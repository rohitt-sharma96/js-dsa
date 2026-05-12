const prompt = require('prompt-sync')()
//Take a numbers as input and print its table
// Factor of N number (divisible by n)
// 10 -> 1,2,5,10

// Check whether a number is prime or not.
// prime number - Jo khud se divisible ho and 1 se ho usse prime bolte hai.
// 1 - way of find prime number
// let counter = 0
// for (let i = 1; i <= n; i++) {

//     if (n % i == 0) {
//         counter++
//     }
// }
// if (counter == 2) {
//     console.log("prime")
// }
// else {
//     console.log("not prime")
// }
let n = +prompt("Enter a digit :")

// 2 - way of find prime number
// if (n <= 1) {
//     console.log("not prime")
// }
// else {
//     let count = 0;
//     for (let i = 2; i <= n / 2; i++) {
//         if (n % i == 0) {
//             count++;
//         }
//     }
//     if (count == 0) console.log("prime");
//     else console.log("not prime");
// }

// 3 - way (efficient) of find prime number
if (n <= 1) {
    console.log("not prime")
}
else if (n == 2) {
    console.log("prime")
}
else if (n % 2 == 0) {
    console.log("not prime")
}
else {
    let isPrime = true
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) {
            isPrime = false
        }
    }
    console.log(isPrime ? "prime" : "not prime")
}

