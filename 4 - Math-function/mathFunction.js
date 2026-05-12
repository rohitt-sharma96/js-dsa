// const prompt = require('prompt-sync')()

// console.log(Math.abs(-10))           Math.abs()
// console.log(Math.ceil(10.2))         Math.ceil()
// console.log(Math.floor(10.9))        Math.floor()
// console.log(Math.round(10.5))        Math.round()
// console.log(Math.trunc(10.802342309))//   Math.trunc() remove the decimal part
// console.log(Math.pow(2,5))
// console.log(Math.max(62,64,23,54,))
// console.log(Math.mix(62,64,23,54))
// console.log(Math.random())
// console.log(toFixed())


// Q.1
// let r = prompt("Enter rate of interest: ")
// let p = prompt("Enter principle: ")
// let t = prompt("Enter time: ")

// console.log((p*Math.pow(1+(r/100),t) - p).toFixed(2))
// console.log(cp) //1576.25


// Q.2 Generate OTP
// let otp = Math.trunc((Math.random() * 9000) + 1000) // 0+1000 to 8999`
// console.log(otp)

//Q. Aria of triangle (Heron's formula)
// roof of s * (s-a) * (s-b) * (s-c)

// Q.3 Circumference of Circle 


// function swapNumber(a, b) {
//     a = a + b
//     b = a - b
//     a = a - b

//     return [a, b]
// }

// console.log(swapNumber(10, 20))


//Q. 
// let a = P * Math.pow(1 + r / n, n * t)
// function calculateCompoundInterest(P, r, t, n) {
//     let ci = (a - P).toFixed(2)
//     return ci
// }
// 1500     // 1000
// 0.04     // 0.5
// 6        // 10
// 2(       // 4

// console.log(calculateCompoundInterest(1000, 0.5, 10, 4))

// function areaOfTriangle(a, b, c) {
//     let s = (a + b + c) / 2
//     let area = (Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2)
//     return area
// }
// console.log(areaOfTriangle(3,4,5))



function calculateCircleProperties(r) {
    let area = (Math.PI * (r ** 2)).toFixed(2)
    let circumference = (2 * Math.PI * r).toFixed(2)
}
console.log(calculateCircleProperties(5.2))