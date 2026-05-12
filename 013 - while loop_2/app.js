let n = 50
let sqr = n * n; //2500 || 625
let num = n     // 50 || 25

let count = 0

while (num > 0) {
    count++
    num = Math.floor(num / 10)
}

let lastDigits = sqr % Math.pow(10, count)
console.log(lastDigits)
console.log(n)

console.log(n === lastDigits ? "Yes" : "No")