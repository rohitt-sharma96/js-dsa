const prompt = require('prompt-sync')()
//Q. Repeat Hello world using (do - while loop)

function repeatHello() {
    
    let i;
    do {
        i = +prompt("Enter a digit :")
        console.log("Hello World!")
    } while (i === 1)
}

function guessGame(){
    let computer = Math.floor((Math.random()*100)+1)
    console.log(computer)

    let n;
    do{
        n = +prompt("Enter a digit :")
        if(n>computer) console.log("too large");
        else if(n<computer) console.log("too small");
        else if(n == computer) console.log("you guessed it right, wohoo!");
        else console.log("invalid number")
    }while(n != computer)
}

function sastaCalculator(){
   let n;
   
   do{
    console.log("Enter 1 for Addition ")
    console.log("Enter 2 for Subtraction ")
    n = +prompt("Enter a digit :")

    switch(n){
        case 1:{
           let a = +prompt("Enter  first number :");
           let b = +prompt("Enter  second number :");
            console.log("Addition : "+(a+b));
            break;
        }
        case 2:{
            let a = +prompt("Enter  first number :");
            let b = +prompt("Enter  second number :");
            console.log("Subtraction : "+(a-b));
            break;
        }
        default: console.log("Invalid number")
    }
   }while(n != 0)
}

sastaCalculator()