function uniqueItem() {


    let arr = [1, 2, 3, 1, 5, 2, 3, 2, 2, 8, 8]

    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i])
        }
        else {
            set.delete(arr[i])
        }
    }

    console.log(set)
}
function jewelsStones() {

    let jewels = "aA"
    let stones = "abAAAAbb"
    let set = new Set(jewels)

    let count = 0
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            count++
        }
    }
    console.log(count)
}
function isPangram() {
    //My Logic

    let str = "the quick brown fox jumps over the lazy dog"
    let set = new Set(str)
    let alpha = "abcdefghijklmnopqrstuvwxyz"

    let isPangram = true

    for (let i = 0; i < alpha.length; i++) {

        if (!set.has(alpha[i])) {
            isPangram = false;
        }
    }
    console.log(isPangram)
    // Sir Logic
    {



        let str = "thequickbrownfoxjumpsoverthelazydog"

        let set = new Set()

        for (let i = 0; i < str.length; i++) {
            let ch = str.charAt(i)
            set.add(ch)
        }
        console.log(set)
        if (set.size == 26) {
            console.log("Pangram")
        }
        else {
            console.log("not Pangram")
        }
    }
}

function firstCharTwice() {


    let s = "abccbaacz"
    let set = new Set();

    for (let i = 0; i < s.length; i++) {

        if (!set.has(s.charAt(i))) {

            let ch = s.charAt(i)
            set.add(ch)
        } else {
            console.log(s.charAt(i))
            break;
        }
    }

}

function isHappy() {
    let n = 19;
    let set = new Set()

    while (true) {
        let sum = 0;
        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10)
        }
        if (sum == 1) return true;
        if (set.has(sum)) return false;
        else set.add(sum)
        n = sum
    }
}
console.log(isHappy())
