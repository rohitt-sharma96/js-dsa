const prompt = require('prompt-sync')();

function isPallindrome() {
    /** My Approach
     * 
     *   for (let i = 0; i <= Math.floor(n/2); i++) {
     *    for (let j = n - 1; j >= Math.floor(n / 2); j--) {
     *        if (str[i] !== str[j]) {
     *            isPalindrome = false
     *            break;
     *       }
     *       i++
     *  }
     *  }
     */

    // Sir Approach (Ali Ansari)
    let str = "system"
    let isPalindrome = true

    let i = 0
    let j = str.length - 1;

    while (i < j) {
        if (str.charAt(i) !== str.charAt(j)) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    console.log(isPalindrome)
}