
//Q. Check if a number is automorphic or not
function isAutomorphic(n) {
    let copy = n, count = 0;
    let sqr = n*n;

    while (n > 0) {
        count++
        n = Math.floor(n / 10)
    }

    if (sqr % Math.pow(10, count) === copy) console.log("automorphic");
    else console.log("non automorphic")
}

//Q. Check if a number is ISBN or not.

// (digit × position) ka total → 11 se divide hona chahiye
function isISBN(n) {
    let temp = n
    let count = 0;
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10)
    }
    console.log(count)

    let store = 0;
    while (n > 0) {

        let rem = n % 10;
        store = store + (rem * count)
        n = Math.floor(n / 10)
        count--;
    }
    if (store % 11 == 0) console.log("ISBN");
    else console.log("NOT ISBN")
}
