// let n = 485;

// while(n > 0){
//     let rem = n % 10;
//     // process.stdout.write(rem+"");
//     console.log(rem)
//     n = Math.trunc(n/10);
// }

//Q. WAP to reverse a number
let n = 432

let revers = 0
while(n > 0){

    let rem = n % 10;
    revers = (revers * 10) + rem

    n = Math.trunc(n / 10)
}
console.log(revers)