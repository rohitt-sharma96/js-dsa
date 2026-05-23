function isStrong(n) {
    let ans = 0;
    let copy = n;
    while(n > 0){

    let digit = n % 10;

    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact = fact * i
    }
    ans = ans + fact
    n = Math.floor(n / 10)
     

  }
    return copy == ans
}

console.log(isStrong(1))