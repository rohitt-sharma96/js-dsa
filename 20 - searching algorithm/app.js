const prompt = require('prompt-sync')()
function linearSearch() {

    let arr = [24, 34, 86, 98, 12, 45, 56]

    let target = 45;

    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            index = i
            break;
        }
    }
    console.log(index == -1 ? "not found" : "found")
}

function binarySearch() {
    let arr = [2, 4, 8, 19, 45, 67, 78, 88, 94]

    let target = 94;

    let start = 0;
    let end = arr.length - 1;
    let index = -1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2)

        if (arr[mid] == target) {
            index = mid
            break;
        }
        else if (arr[mid] < target) start = mid + 1;

        else end = mid - 1;

    }

    console.log(index == -1 ? "not found" : "Found at " + index + " index")

}

function bubbleSort() {

    let arr = [9, 8, 1, 45, 67, 88, 42, 12, 32]

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    console.log(arr)
}

function selectionSort() {

    let arr = [5, 1, 8, 10, 7, 12]

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {//8
                min = j
            }
        }
        //swap
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }

    console.log(arr)

}

function insertionSort(){

let arr = [5, 8, 1, 10, 15, 7]
let n = arr.length;

for (let i = 1; i < n; i++) {

    let key = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key
}

}

