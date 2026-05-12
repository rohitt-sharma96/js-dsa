const prompt = require('prompt-sync')();

let even = 0, odd = 0;
for(let i = 2; i <= 10; i++){
    if(i % 2 == 0 ){
        even += i
    }else{
        odd += i
    }
}
console.log(even)
console.log(odd)
