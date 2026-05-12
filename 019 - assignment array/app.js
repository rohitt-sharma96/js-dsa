function multiplyPrevNext(arr) {
    const n = arr.length;

    if (n === 1) return [arr[0]];

    const res = new Array(n);

    res[0] = arr[0] * arr[1];

    for (let i = 1; i < n - 1; i++) {
        res[i] = arr[i - 1] * arr[i + 1];
    }

    res[n - 1] = arr[n - 1] * arr[n - 2];

    return res;





    //My Logic is Below Sir Logic is Above

    // let store = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (i == 0) {
    //         let r = arr[i] * arr[i + 1]
    //         store.push(r)
    //     }
    //     if (i == arr.length - 2) {
    //         let r = arr[i] * arr[i + 1]
    //         store.push(r)
    //         break;
    //     }
    //     else {
    //         let r = arr[i] * arr[i + 2]
    //         store.push(r)
    //     }
    // }
    // console.log(store)
}

function midAddForBalance() {


    let arr = [1, 2, 1, 2, 1, 3]
    let half = Math.floor(arr.length / 2)
    let n = arr.length;

    let rightSum = 0;
    let leftSum = 0;

    for (let i = 0; i < half; i++) {
        rightSum = rightSum + arr[i]
    }
    for (let i = half; i < n; i++) {
        leftSum = leftSum + arr[i]
    }
    if (leftSum == rightSum) {
        console.log("0")
    }
    else {
        let result = leftSum > rightSum ? leftSum - rightSum : rightSum - leftSum
        console.log(result)
    }
}

function sortHalves() {

    let arr = [-1, -4, 3, 2, 0, 10]

    let n = arr.length;
    let half = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < half - 1; j++) {
            if (arr[j] > arr[j + 1]) {//first half
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }

        for (let j = half; j < n - 1; j++) {//second half
            if (arr[j] < arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr)

}
