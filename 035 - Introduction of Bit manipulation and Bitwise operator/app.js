function decimalToBinary(n) {

    let ans = "" //Bina string ke use krke number reverse karo (one multiply by tens etc.)
    while (n > 0) {
        let bit = n % 2

        ans = bit + ans;

        n = Math.floor(n / 2)

    }
    console.log(ans)

}

// decimalToBinary(17)

function binaryToDecimal(binary) {

    let ans = 0
    count = 0
    while (binary > 0) {
        let rem = binary % 10;
        ans = ans + (rem * Math.pow(2, count))
        count++;

        binary = Math.floor(binary / 10);
    }
    console.log(ans)
}
// binaryToDecimal(11100)

//  1, 111, 1001, 1011, 1101, 1111, 10001 => Odd no.
//  10, 100, 110, 1000, 1010,  => Even no.

let a = 2 ^ 15
console.log(a)