function diagonalSum() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == j || i + j == arr.length - 1) {
                sum = sum + arr[i][j]
            }
        }
    }
    console.log(sum)
}


function transposeMatrix() {
    let arr = [
        [2, 4, 6],
        [8, 3, 5]
    ]
    let row = arr.length;//2
    let col = arr[0].length;//3

    let temp = new Array(col)//3  

    for (let i = 0; i < temp.length; i++) {
        temp[i] = new Array(row).fill(0)
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            temp[j][i] = arr[i][j]
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            process.stdout.write(arr[i][j] + " ");
        }
        console.log()
    }

    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            process.stdout.write(temp[i][j] + " ");
        }
        console.log()
    }
}

function flippingImage() {
    //My Logic

    let arr = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0]
    ]
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {

        let j = 0
        let k = arr[i].length - 1;

        while (j < k) {

            if (j < k) {
                let temp = arr[i][j]
                arr[i][j] = arr[i][k]
                arr[i][k] = temp
            }
            j++;
            k--;
        }



    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] == 0) {
                arr[i][j] = 1
            } else {
                arr[i][j] = 0
            }
        }
    }
    console.log(arr)
}

function flippingImage2() {
    // sir Logic
    let image = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0]
    ]
    console.log(image)

    for (let i = 0; i < image.length; i++) {
        let arr = image[i]

        let j = 0
        let k = arr.length - 1
        while (j < k) {
            let temp = arr[j]
            arr[j] = arr[k]
            arr[k] = temp;


            j++;
            k--
        }
    }

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] == 0 ? image[i][j] = 1 : image[i][j] = 0
        }
    }
    console.log(image)
}

function rotateImage() {
    let image = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    /**
     *  NOTE :- Poore Matrix pe traverse nhi krna only half (upper/lower triangle) only 
     *  Why :- Poore pe traverse krne pe phir se original form mein aa ja raha hai.
     */
    for (let i = 0; i < image.length; i++) {// transpose kr diya
        for (let j = 0 + i; j < image[i].length; j++) {

            //swap
            let temp = image[i][j]
            image[i][j] = image[j][i]
            image[j][i] = temp
        }
    }

    for (let i = 0; i < image.length; i++) { // reverse kr diya 
        let arr = image[i]

        let j = 0;
        let k = arr.length - 1;
        while (j < k) {

            let temp = arr[j]
            arr[j] = arr[k]
            arr[k] = temp

            j++;
            k--;
        }
    }

    for (let i = 0; i < image.length; i++) {//For print
        for (let j = 0; j < image[i].length; j++) {
            process.stdout.write(image[i][j] + " ");
        }
        console.log()
    }
}

function spiralMatrix() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    let result = []
    let top = 0;
    let left = 0;
    let right = arr[0].length - 1;//2
    let bottom = arr.length - 1;//2

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(arr[top][i])
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(arr[i][right])
        }
        right--;

        for (let i = right; i >= left; i--) {
            result.push(arr[bottom][i])
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            result.push(arr[i][left])
        }
        left++;
    }

    console.log(result)
}

function setMatrixZeroes() {
    let arr = [
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
    ]

    let rows = new Set();
    let cols = new Set();


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 0) {
               rows.add(i) 
               cols.add(j)
            }
        }
    }


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
                if(rows.has(i) || cols.has(j)){

                    arr[i][j] = 0
                }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(arr[i][j]+" ");
        }
        console.log()
    }
    
}

setMatrixZeroes()