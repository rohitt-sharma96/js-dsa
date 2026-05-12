//Q. Calculating ISBN number for 10 numbers

/** RIGHT
 *0306406152
 *0131103628
 *0201633612
 *8175257660 
 */

 /** WRONG
  *1234567890 
  *0306406153 
  */


function checkISBN(n) {
    
    let count = 0;
    let sum = 0
    while (n > 0) {
        count++
        let rem = n % 10

        sum += rem * count
        n = Math.floor(n / 10)
    }
    if(sum % 11 == 0) console.log("ISBN");
    else console.log("Not ISBN")
}

checkISBN(0306406152) 