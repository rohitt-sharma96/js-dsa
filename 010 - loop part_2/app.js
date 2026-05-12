const prompt = require('prompt-sync')()

function isStrongNumber(n) {

    let arr = n.toString().split('')

    let result = 0
    arr.forEach(element => {
        let fact = 1
        let sum = 0
        for (let i = 1; i <= element; i++) {
            fact *= i
        }
        sum += fact
        result += sum
    });
    console.log(result)
    if(n === result){
        console.log("Strong")
    }
    else{
        console.log("Weak")
    }


}
// isStrongNumber(123)
console.log(Math.abs(-5))
