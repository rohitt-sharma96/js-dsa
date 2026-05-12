
function toggleCase() {
    // Toggle Alphabet Case
    let str = 'dEmO123'
    let ans = ""

    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i)
        if (ascii >= 97 && ascii <= 122) {
            let upper = ascii - 32
            ans = ans + String.fromCharCode(upper)
        }
        else if (ascii >= 48 && ascii <= 57) {
            ans = ans + String.fromCharCode(ascii)
        }
        else {
            let lower = ascii + 32
            ans = ans + String.fromCharCode(lower)
        }
    }
    console.log(ans)
}


function countString() {

    let str = ["java", "javascript", "python", "javadoc", "c"]
    let pref = "ja"

    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str.at(i).includes(pref)) {
            count++;
        }
    }
    console.log(count)
}

// input:- hello bhai kaise ho
// output:- HellO BhaI KaisE HO

let sentence = "hello bhai kaise ho";
let arr = sentence.split(" ")
let ans = ""

for (let i = 0; i < arr.length; i++) {
    let word = arr[i]

    let first = word[0].toUpperCase()
    let mid = word.substring(1, word.length - 1)
    let last = word[word.length - 1].toUpperCase()

    ans = ans + first+mid+last+" "
}


