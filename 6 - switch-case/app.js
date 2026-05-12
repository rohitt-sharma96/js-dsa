const prompt = require('prompt-sync')()

// let day = +prompt("Enter a Day :")

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;

//     default:
//         console.log("Enter a valid Number"); 
// }


// let vowel = prompt("Enter a letter :")
// switch(vowel){
//     case ('a'):{
//         console.log("vowel")
//         break;
//     }
//     case ('e'):{
//         console.log("vowel")
//         break;
//     }
//     case ('i'):{
//         console.log("vowel")
//         break;
//     }
//     case ('o'):{
//         console.log("vowel")
//         break;
//     }
//     case ('u'):{
//         console.log("vowel")
//         break;
//     }
//     default: console.log("consonant")
// }

// let s = prompt("Enter a string :")
// let vowel = 0, consonant = 0;

// for(let i=0; i < s.length; i++){
//     let ch = s.charAt(i)
//     switch(ch){
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':{
//             vowel++
//             break;
//         }
//         default : consonant++
//     }
// }

// console.log("vowel",vowel)
// console.log("consonant",consonant)


//WAP to calculate area of circle,rectangle, and triangle using a switch statement

console.log("Enter 1 for area of circle")
console.log("Enter 2 for area of rectangle")
console.log("Enter 3 for area of triangle")

let n = +prompt("Enter a digit :")
switch (n) {
    case 1: {
        let r = +prompt("Enter radius of circle :")
        console.log(Math.trunc(Math.PI * r ** 2))
        break;
    }
    case 2: {
        let height = +prompt("Enter height of rectangle :")
        let width = +prompt("Enter width of rectangle :")
        console.log("Area of rectangle :", height * width)
        break;
    }
    case 3: {
        let sideA = +prompt("Enter sideA of triangle :")
        let sideB = +prompt("Enter sideB of triangle :")
        let sideC = +prompt("Enter sideC of triangle :")
        console.log("Area of triangle", sideA * sideB * sideC)
        break;
    }
    default:
        console.log("default case")
}