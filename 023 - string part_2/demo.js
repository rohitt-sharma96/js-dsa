
function togglecase() {
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

function fun() {

    let sentence = "hello bhai kaise ho";
    let arr = sentence.split(" ")
    let ans = ""

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]

        let first = word[0].toUpperCase()
        let mid = word.substring(1, word.length - 1)
        let last = word[word.length - 1].toUpperCase()

        ans = ans + first + mid + last + " "
    }
}

function frequencyCount() {
    //
    /**
     * Q. Character Frequency Count in a String.
     */
    let str = "Hello bhai kaise ho"

    let st = str.split(" ").join("")

    let n = str.length;

    let arr = new Array(128).fill(0);

    for (let i = 0; i < n; i++) {
        let ascii = st.charCodeAt(i)
        arr[ascii] = arr[ascii] + 1
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(String.fromCharCode(i) + " -> " + arr[i])
        }
    }

}

function isAnagram() {

    //Check two Strings is Anagram or Not.
    let str1 = "chai"
    let str2 = "shai`"
    let n = str1.length;

    let arr = new Array(26).fill(0)
    let isAnagram = true;

    if (str1.length == str2.length) {
        for (let i = 0; i < n; i++) {
            let ascii = str1.charCodeAt(i)

            arr[ascii - 97] = arr[ascii - 97] + 1
        }
        for (let i = 0; i < n; i++) {
            let ascii = str2.charCodeAt(i)

            arr[ascii - 97] = arr[ascii - 97] - 1
        }


        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                isAnagram = false;
                break;
            }
            else {
                isAnagram = true
            }
        }
    } else {
        isAnagram = false
    }

    console.log(isAnagram)
}

function maxWords() {

    //Maximum number of words found in sentences
    // let arr = ["hii hello", "hello hii hii", "you will win"]
    let arr = ["hi", "ok", "yes", "no"]
    // let arr = ["coding is fun", "practice makes perfect", "consistency is the key to success"]
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split(" ")
        if (newArr.length > max) {
            max = newArr.length
        }
    }
    console.log(max)
}