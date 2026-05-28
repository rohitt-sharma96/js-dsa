function frequencyCount() {

    let arr = [1, 2, 3, 4, 5, 2, 1, 3, 4, 1, 4, 5]

    let map = new Map() // key vs value
    //element vs frequency

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {

            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1)
        }
    }
    console.log(map)
}

function twoSum() {

    let arr = [3, 2, 4]
    let target = 6

    let result = []

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == target) {

                result.push(i)
                result.push(j)
                break;
            }
        }
    }
    console.log(result)
}

function twoSumm() {
    //optimized approach

    let arr = [5, 11, 7, 2]

    let map = new Map();

    let ans = []
    let target = 9;


    for (let i = 0; i < arr.length; i++) {
        if (map.has(target - arr[i])) {
            ans.push(i)
            ans.push(map.get(target - arr[i]))
        } else {
            map.set(arr[i], i)
        }
    }
}

function sumOfUnique() {

    let arr = [1, 3, 4, 5, 2, 3, 5, 2]

    let map = new Map()
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (map.has(arr[i])) {

            map.set(arr[i], (map.get(arr[i]) + 1))
        }
        else {
            map.set(arr[i], 1)
        }
    }

    map.keys().forEach((key) => {
        if (map.get(key) == 1) {
            sum = sum + key
        }

    })

    console.log(sum)
}