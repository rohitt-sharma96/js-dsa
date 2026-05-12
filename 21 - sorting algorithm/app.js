function bubbleSort() {

    let arr = [3, 2, 9, 10, 5, 6, 7, 3, 4]
    let n = arr.length;

    for (let i = 0; i < n - i; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}

function selectionSort() {

    let arr = [3, 2, 9, 10, 5, 6, 1, 3, 4]
    // let arr = [3, 2, 7, 4]

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i

        for (let j = 1 + i; j < n; j++) {
            if (arr[j] < arr[min]) {
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


let arr = [5, 8, 1, 10, 15, 7]

for (let i = 1; i < arr.length; i++) {

    let key = arr[i];

    let j = i - 1;

    while (arr[j] > key && j >= 0) {

        arr[j + 1] = arr[j]
        j--;
    }

    arr[j+1] = key
}
console.log(arr)