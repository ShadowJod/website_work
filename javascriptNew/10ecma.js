let myName = "nikhil";
let MyLastname = "mishra";

console.log(`${myName}${MyLastname}`);


if(true){
    let meName = "nikhil";
    console.log(meName);
    console.log(myName);
}
// console.log(meName);


let aGe = 30;
console.log(`m+y age  is ${aGe}`);


const nuM = a => `the square of ${a} is ${a*a}`
console.log(nuM(5));

const sqUare = (a,b = 90) => {
    console.log(`My name is ${a} and my friend name is ${b}`);
}
sqUare("nikhil");

const calculator = (num1,num2,operator) => {
    let result;
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
        
        case "*":
            if (num2 === 0 ) {
                return `0 is not allowed`
            } else {
                return num1 * num2;
            }
            
        
        case "/":
            return num1/num2;
    
        default:
            return `error`
    }
    
}

console.log(calculator(10,0,"/"));



const isReverse = (str) => {

    let reverse= "";
    for(let char= str.length-1 ; char>= 0; char--){
     reverse = reverse +str[char]
    }
    return str === reverse? true : false
};

 console.log(isReverse("level"));



function shado(a,b) {
    let result = 3;
    switch (b) {
        case "++":
            result = result + a++;
            return result
            
    
        default:
            break;
    }
    
}
 console.log (shado(3,"++"));