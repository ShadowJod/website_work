const person= {name:"nikhil",age : 99};

console.log(Object.entries(person));
// const kl  = Object.fromEntries(person)
// console.log(kl);

let str = "nikhil";
console.log(str.padStart(29));
console.log(str.padEnd(73));


let neWarray = [9,29,1349,345];
let naem = neWarray.filter((val)=>{
return val<10
})
console.log(naem);

let number = [1,2,3,4,5,6,7,8,9];

let reduce = number.reduce((acc,cur)=>{
return acc + cur;
},0)
console.log(reduce);

let may = "nancy pagall hai "
console.log(may.length);


const symbol = Symbol("my nam is nikhikl")
console.log(typeof symbol);
console.log(symbol.description);

    try {
        82+6
    } catch {
        console.log("error");
    }


let bigNum = BigInt(39724237489234790543653497564)
console.log(typeof bigNum);

let maxnumv  = Number.MAX_SAFE_INTEGER;
console.log(maxnumv);
console.log(maxnumv + 10);

let char = null;
let user = char ?? 10
console.log(user);


const porson ={
    name : "nikhil",
    age:19,
    address: {
        city: "new delhi",
        zip : 111005,
    }
}

let sad = porson.address?.city ||  "not founnd";
console.log(sad);