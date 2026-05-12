const prompt = require('prompt-sync')()

//Q.1 Accept two numbers and print the greatest between them.
// let num1 = +prompt("Enter first digit :")
// let num2 = +prompt("Enter second digit :")

// if(num1 > num2) console.log('First digit is greater than second');
// else console.log('Second digit is greater than first')

//Q.2 Accept an integer and check it is even or odd
// let num = +prompt("Enter an digit :")

// if(num % 2 == 0) console.log("even");
// else console.log("odd");

//Q.3 Accept 3 numbers and print greatest among them.
//  let num1 = +prompt("Enter first digit :")
//  let num2 = +prompt("Enter second digit :")
//  let num3 = +prompt("Enter third digit :")

// if(num1 > num2 && num1 > num3) console.log('greater 1');
// else if(num2 > num3 && num2 > num1) console.log('greater 2');
// else console.log('greater 3')

//Q.4 Accept a year and check if it a leap year or not. (year divisible by 100 and not divisible by 400 {e.g. 2000, not 1900})
// let year = +prompt("Enter the Year :")
// if (year % 4 == 0 && year % 100 != 0  || year % 400 == 0) {
//     console.log('leap year')
// } else {
//     console.log('not leap year')
// }


/**
 * Amount                   Discount
 * 0-5000                       0%
 * 5001 - 7000                  5%
 * 7001- 9000                   10%
 * more than 9000               20%
 */

// let amount = prompt("Enter the amount :")

// let payableAmount = 0
// let disc = 0
// if (amount > 0 && amount <= 5000) disc = 0 ;
// else if (amount > 5000 && amount <= 7000) disc = 5;
// else if (amount > 7000 && amount <= 9000) disc = 10 ;
// else if (amount > 9000) disc = 20;

// console.log("payableAmount",(amount - (disc * amount)/100))


/**
 *      Unit                    Price
 *      upto 100                Rs. 4.2/Unit
 *      101-200                 Rs. 6/Unit
 *      201-400                 Rs. 8/Unit
 *      more than 400           Rs. 13/Unit
 */


// let unit = +prompt("Enter unit :")
let amount = 0;
//Bottom-Up Approach [Mentos Life]
// if(unit > 400){
//     //750
//     amount = (unit -400)*13
//     unit = 400
// }
// if(unit > 200 && unit <=400){
//     amount = amount + (unit-200)*8
//     unit = 200
// }
// if(unit > 100 && unit <=200){
//     amount = amount + (unit-100)*6
//     unit=100
// }
// amount = amount + (unit * 4.2)
// console.log(amount)

//Top-Down Approach (Aam zindagi)

// if(unit >0 && unit <=100) console.log(unit * 4.2);
// else if(unit > 100 && unit <= 200){ //150
//     console.log((100*4.2)  + (unit-100) * 6);
// }
// else if(unit > 200 && unit <= 400){
//     //350
//     console.log((100*4.2) + (100*6) + (unit-200 * 8))
// }
// else {
//     //660
//     console.log((100*4.2) + (100*6) + (200 * 8) + (unit-400)*13 )
// }


//Q. Counting number of days in a given month of a year.
let year = +prompt("Enter Year :")
let month = +prompt("Enter month :")

let days = 0

if(month ==2){
    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        days = 29
    }else days = 28
}
else if(month == 1 || month == 2 || month ==3 || month==5|| month==7 || month==8|| month==10|| month ==12) days = 31;
else days=30;

console.log(days)