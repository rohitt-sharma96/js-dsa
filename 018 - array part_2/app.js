const prompt = require('prompt-sync')();
function primeNumber() {

    for (let i = 2; i <= 20; i++) {

        let count = 0
        for (let j = 1; j <= i; j++) {

            if (i % j == 0) {
                count++
            }
        }
        if (count == 2) {
            console.log("prime", i)
        }
    }
}
function rotationByOne() {
    //Q. Array left rotation by 1

    let arr = [1, 2, 3, 4, 5]

    console.log(arr)
    let temp = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = temp

}
function rotationByK() {
    //Q. Array left rotation by K elements
    // Edge Case - agar k ki value 5 hai to rotation krke same position pe aayega, Agar 7 hai to 2 bar rotation

    let arr = [1, 2, 3, 4, 5]
    let k = 2

    //check point
    if (k >= arr.length) {
        k = k % arr.length//13 % 5 = 3
        //iska mtlb 3 baar hi rotate krega
    }

    for (let i = 1; i <= k; i++) {


        let temp = arr[0]
        for (let i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i]
        }

        arr[arr.length - 1] = temp
    }
    console.log(arr)
}



// Practice Question 
function copyReverse() {


    //Q. Copy Array and reverse 

    let n = +prompt("Enter size of array :")

    let arr = new Array(n)

    let temp = new Array(n)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = + prompt("Enter array of Element :")


        for (let j = 0; j < arr.length; j++) {
            temp[j] = arr[arr.length - (1 + j)]
        }
    }
}
function rotationBy1() {

    let arr = [1, 2, 3, 4, 5]
    console.log(arr)

    let temp = arr[0]

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = temp
}
//MOVE ZERO TO END
// MEANS 1 ko left me lao
let arr = [ 0, 1, 0, 1, 1] // -> output expected [1,1,1,0,0]

let j = 0;
for (let i = 0; i < arr.length; i++) {// i -> current element 0 hai ya nhi
    if(arr[i] == 1){
        // swap
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        
        j++
    }

}
console.log(arr)