const prompt = require('prompt-sync')()

// [[10,12,14],[15,16,18],[20,22,24]]
function firstArray() {


    const arr = new Array(3) //[0, 0, 0]

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(3) //[[0, 0, 0],[0, 0, 0],[0, 0, 0]]
        /**
         * [
         *   [0, 0, 0],
         *   [0, 0, 0],
         *   [0, 0, 0]
         * ]
         */
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = +prompt("Enter a value :")
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            process.stdout.write(arr[i][j] + " ");
        }
        console.log()
    }
}

function secondArray() {
    //Second way of creating an Array

    let arr2 = Array.from({ length: 3 }, () => new Array(3).fill(0))
    console.log(arr2)
}


function jaggedArray(){
    let arr = new Array(3)

    for(let i=0; i<arr.length; i++){
        let n = +prompt("Enter length of nested :")
        arr[i] = new Array(n)
        for(let j=0; j<arr[i].length; j++){
            arr[i][j] = +prompt("Enter value:")
        }
    }

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            process.stdout.write(arr[i][j]+" ");
        }
        console.log()
    }
}
