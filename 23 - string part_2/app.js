
function toggleAlphabet() {

    let str = "AcgDfD";

    let str2 = ""

    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i)

        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            str2 = str2 + String.fromCharCode(ascii + 32)
        }
        else {
            str2 = str2 + String.fromCharCode(ascii - 32)
        }
    }
    console.log(str2)
}
/**
 *  Takes an array of strings words and string prefix. Print the number of strings in words that contain pref as prefix.
 * 
 * Example : Input: words = ["pay", "attention", "practice", "attend"], pref = "at"
 * kitne aise words hai jinke starting mein "at" hai ya aa rha hai.
 */

function checkStr() {
    let words = ["pay", "attention", "practice", "attend", "attraction", "atlantic"]
    let pref = "at"

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(pref)) count++;
    }
    console.log(count)

}

/**
 * Capitalize first and last character of each word in the sentence and print the new sentence
 * Ex - hello bhai kaise ho a
 * Output - HellO BhaI KaisE HO A
 */
function casingAlphabet() {


    let str = "hello bhai kya haal chaal";

    let arr = str.split(" ")
    let ans = ""

    for (let i = 0; i < arr.length; i++) {

        let word = arr[i]

        let first = word.charAt(0).toUpperCase()

        let mid = word.substring(1, word.length - 1)

        let last = word.charAt(word.length - 1).toUpperCase()

        ans = ans + first + mid + last + " "
    }
    console.log(ans)
}

function frequencyCount() {
    /**
     * Accept a string and print the frequency of each character
     * 
     * ek character puri string mein kitni baar appear hua
     */

    let str = "rohit"
    let arr = new Array(128).fill(0)

    for (let i = 0; i < str.length; i++) {

        let ascii = str.charCodeAt(i)

        arr[ascii] = arr[ascii] + 1

    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(`${String.fromCharCode(i)} -> ${arr[i]}`)
        }
    }
}

function frequencyCount2() {
    // ye wala sirf small letter ya sirf capital letter ke liye hai. jo jagah bahut km leta hai

    let str = "naman"
    let arr = new Array(26).fill(0)

    for (let i = 0; i < str.length; i++) {

        let ascii = str.charCodeAt(i)

        arr[ascii - 97] = arr[ascii - 97] + 1
    }


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            let index = i + 97
            let char = String.fromCharCode(index)
            console.log(`${char} --> ${arr[i]}`)
        }
    }
}


/**
 * Check Two Strings Are Anagram or Not .
 *   Anagram - Words have same length & same character count
 *   example - arc - car
 *             taste - state
 *             night - thing
 */


/**
 * Maximum Number of Words Found in Sentence [leetcode - easy]
 */


function sortWords(){

/**
 * Sorts the words of sentence
 */
let str = "tajmahal is situated at agra"

let arr = str.split(" ")

let n = arr.length

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}

console.log(arr.join(" "))
}