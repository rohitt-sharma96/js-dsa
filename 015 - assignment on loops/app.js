/**
 * Write a program to check whether a given number is a Harshad Number or not.
 * A Harshad Number (or Niven Number) is a number that is divisible by the sum of its digits.
 * For example, 18 is a Harshad number because 1 + 8 = 9, and 18 % 9 == 0. 
 */

function checkHarshad(n) {
    let copy = n
    let store = 0
    while (n > 0) {
        let rem = n % 10
        store = store + rem
        n = Math.floor(n / 10)
    }

    if (copy % store == 0) console.log("Harshad");
    else console.log("not Harshad");
}

//Q. Abundant number checker
function checkAbundant(n) {
    let copy = Math.floor(n / 2);
    let store = 0;
    let i = 1;

    while (copy > 0) {
        if (n % i == 0) {
            store = store + i
        }
        i++;
        copy--;
    }
    if (store > n) console.log('Abundant', store);
    else console.log('not abundant', store)
}

function primeFactors(n) {
    let digit = 2
    for(let i = 1; i <= 20; i++){
        if(digit%i==0 ){
            count++
        }

        
    }
        if(count==2){
            console.log("prime")
        }

}
primeFactors()

