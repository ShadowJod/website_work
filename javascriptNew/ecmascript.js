// const person  = {name,age};
// console.log(person);

// deconstructing array


const array = [1,2,3,];
const [first,second,third] = array;

console.log(first);


// deconstructing object

const person = {
    name: "nikhil",
    age:20
}

const {name,age} = person;

console.log(age,name );

// spread operator

let fruits = ["apple","orange","mango","grapes"]
let newFruits = [... fruits]
console.log(newFruits);

const n1 = [1,2,3];
const n2 = [4,5,6];

const newN = [...n1,...n2]
console.log(newN);


let newF = ["apple", "mango","grapes"];
newF.push(...["orange","banana"])
console.log(newF);

const country = "india";
console.log(...country);

// rest paramenter

const sum = (...numbers)=>{
    return numbers.reduce((acc, curr)=>
        (acc = acc + curr),0)

}
console.log(sum(1,4,33));


const student = {
    id : 2,
    name:"nikhil",
    age : 30
}

const {id,...others} = student;
console.log(student);