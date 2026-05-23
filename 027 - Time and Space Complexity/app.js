function isPrime(n) {
    // let n = 11;

    if (n <= 1) {
        console.log("Not Prime")

    }
    else if (n == 2) {
        console.log("prime")
    }
    else {
        let count = 0;
        for (let i = 2; i <=Math.floor(Math.sqrt(n)) ; i++) {
            if (n % i == 0) {
                count++
            }
        }
        console.log(count == 0 ? "Prime" : "Not Prime")
    }
}
//print prime number from 1 - 20
for(let i =1; i<=20; i++){
    
}