const prompt = require("prompt-sync")();
// Strong Number
// 145 - 1! + 4! + 5! = 145
// Need:-  two loops 
// ek number ko separate krne ke liye
// dusra factorial nikalne ke liye

function isStrongNumber() {

    let n = +prompt("Enter a number :")
    let copy = n;
    let ans = 0;

    while (n > 0) {
        let rem = n % 10
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact = fact * i;
        }
        n = Math.floor(n / 10);
        ans = ans + fact;
    }
    console.log(ans)
    if (copy == ans) console.log("strong");
    else console.log("Not Strong");

}

function pattern() {

    let n = +prompt("Enter a number :")
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            process.stdout.write("* ")
        }
        console.log(" ")
    }
}
function rightAngleTriangle() {

    let n = +prompt("Enter a number :")

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j + " ")
        }
        console.log(" ")
    }

}
function invertedAngleTriangle() {
    let n = 5

    for (let i = 1; i <= n; i++) {//- My Logic
        for (let j = n; j >= i; j--) {
            process.stdout.write("* ")
        }
        console.log(" ")
    }
    // let n = 7

    // for(let i =1; i <= n; i++){ //- Ali Ansari Sir Logic
    //     for(let j= 1; j <= n-i+1; j++){
    //         process.stdout.write("* ");   
    //     }
    //     console.log(" ")
    // }
}
function mirrorRightAngleTriangle() {
    //Mirror Right Angle Triangle
    let n = 5
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");//give one space || give two space{difference output}
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log(" ")
    }
}
function patternX() {

    let n = 3
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == j || i + j == n + 1) {
                process.stdout.write("*");
            }
            else {
                process.stdout.write(" ");
            }
        }
        console.log(" ")
    }
}

function patternV() {
    
    let n = 5;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n * 2; j++) {
            if (i == j || i + j == n * 2) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log(" ")
    }
}
