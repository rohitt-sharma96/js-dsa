let prompt = require('prompt-sync')();

function userInput() {
    let n = +prompt("Enter size of array :")

    let arr = new Array(n);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = +prompt("Enter element of array :")
    }

    console.log(arr)
}

function sumArray() {
    let arr = [2, 4, 5, 6]
    let sum = 0;

    for (i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
    }
    console.log(sum)
}

function maxElement() {
    let arr = [20, 45, 62, 95, 33]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}

function secondMaxElement() {
    let arr = [8, 12, 5, 16, 45, 95, 63, 100]
    let max = Math.max(arr[0], arr[1]);
    let secondMax = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    console.log("Max : " + max)
    console.log("SecondMax : " + secondMax)

}

function reverseArray() {
    //With Extra space
    // let arr = [10, 20, 30, 40, 50]
    // let temp = new Array(arr.length)

    // i = arr.length - 1

    // for (let j = 0; j < temp.length; j++) {
    //     temp[j] = arr[i];
    //     i--
    // }

    //Without Extra Space (Two-Pointer Algorithm)

    let arr = [50, 20, 30, 40, 10]
    console.log(arr)
    let i = 0;
    let j = arr.length - 1
    while (i < j) {
        //swap
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        i++;
        j--;
    }

    console.log(arr)
}

function moveZerosLeft() {
    let arr = [1, 1, 0, 1, 0, 1, 1, 0]
    console.log(arr)

    let j = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            let a = arr[j];//1
            let b = arr[i];//0

            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            j++;
        }
        i++;
    }
    console.log(arr)
}


function findGreatestElementAndIndex(arr) {
    // Write your logic here
    let great = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > great) {
            great = arr[i]
            count = i
        }
        
    }
    console.log(`Max Element = ${great} at index ${count} `)
}

findGreatestElementAndIndex([1, 2, 4, 5, 6])