// const a = "Nikhi Mishra";
// console.log(a.length);
// console.log(a[9]);
// console.log(a.indexOf("a"));


// // for (var i = 0; i<10; i++){
// //     console.log(i);
// // }


// // var i = 0;
// // do {
// //     i++;
// //     console.log(i);
// // }while(i<10);

// // var i = 0;
// // while(i<10){
// //     i++;
// //     console.log(i);
// // }

// function sum_of100 (a) {
//     var sum = 0;
//     for(a=0; a<101; a++){
//         sum = sum + a;
//     }
//     console.log(sum);
// }

// sum_of100()


// jame  = [1,2,3,4,5,6,7,8,9];
// console.log(jame);
// for(i in jame){
//     console.log(i);
// }

// for(i of jame){
//     console.log(jame);

// }

// var areaOfshape = "rectangle"
// h = 10;
// b = 20;

// var total = 0;

// switch (areaOfshape) {
//     case "square":
//         total = h*h;
//         console.log(total);
//         break;

//     case "rectangle":
//         total = h*b;
//         console.log(total);
//         break;
        
//     default:
//         console.log("this is not a valid shape");
//         break;
// }


// let sum = 0;

// for(let i = 0; i <= 5; i++){
//     sum = sum +i;
//     console.log(sum);
// }
// console.log(sum);


// let i= 0;
// while(i<=5){
//     console.log("i =",i);
//     i++
// }

// let size = 0;
// let fullName = "Nikhil Mishra"
// for(let i of fullName){
//     console.log(i);
//     size++

// }
// console.log("string size = ",size);

// for(let i = 0; i>= fullName.length; i--){
//     console.log(i);
// }




// let student = {
//     name : "nikhil",
//     age : 19,
//     adult : true,
    
// }

// for( let i in student){
//     console.log(i, student[i]);
// }


// console.log( student["name"]);


// for(let j =0; j<101; j++){
//     // console.log(j);
//     if(j %2 ===0){
//         console.log(j);
//     }
// }

// let gameNum = 29;
// let userNum = prompt("Guess a Number: ");

// while (userNum != gameNum) {
//     userNum = prompt("Guess the Number Again: ")
    
// }

// console.log("You Guessed it right");



// let obj = {
//     name:"pen",
//     price:10,
// };

// console.log(obj.name);
// console.log(obj["name"]);
// console.log("apna \n college");


// let str = prompt("Enter Your Name , To Get The UserName: ");
// let st2 = "@";
// let str3 = 19;


// let str4 = st2.concat(str);
// let str5 = str4.concat(str3);
// alert(`Your Username is = ${str5}`);
// console.log(`Your Username is = ${str5}`);

// let suM = 0;
// let marKs = [67,87,98,39,82];
// for(i=0; i<marKs.length; i++){
//     suM = suM + marKs[i];
//     // console.log(suM);
// }
// console.log(suM/marKs.length);


// let j = 0;
// let Array = [250,645,300,900,50];
// for (let i of Array) {
//     var newVal = i/10;
//     console.log(newVal);
//     Array[j] = i-newVal;
//     j++;
// }

// console.log(Array);


// let hereos = ["spiderman ", "ironman","antman","captainamerica"];
// let villian = ["goblin", "hulk","wasp","ultron"];

// let newData = hereos.concat(villian);
// console.log(typeof newData);

// console.log( hereos.slice(0,2));
// console.log(hereos.splice(0,2,"Nikhil"));

// let nuMber = [1,2,3,4,5,6,7,8,9];
// console.log( nuMber.splice(2,4,101));
// console.log(nuMber);

// let count = 0;
// let couNtvoWel = (str)=>{
//     for(i of str){
//         if(i === "a" || i === "i" || i === "e" || i === "o" || i === "u"){
//             count ++;
//         }
//     }
//     console.log(count);
//     console.log(str);
// }

// couNtvoWel("nikhil")



// let array = [1,2,3,4,5,6];

// array.forEach((current,index,arr)=>{
//     console.log(current);
//     console.log(index);
//     // console.log(arr);
// })

//  const neWarr =   array.reduce((res,val)=>{
//     return res > val ?  res : val;
// })
// console.log(neWarr);


// array.forEach((val,idx)=>{
    
//     array[idx] = (val*val);
//     console.log(array);
// })
// console.log(array);



// let marks  = [22,44,92,78,94,88,90];

// let nEwmarks = marks.filter((val)=>{
//     let sum = 0;
//     sum = val >= 90;
//     return sum;
// })
// console.log(nEwmarks);


// let data = prompt("Enter the value")

// let arrayy = [];
// let idx = 0;
// for(i = 1; i <= data; i++){
   
//     arrayy[idx] = i;
//     idx++;
// }
// console.log(arrayy);


// const suMofall = arrayy.reduce((res,vaal)=>{
//     return res+ vaal;
// })

// console.log(suMofall);

// const productOfall = arrayy.reduce((res,val)=>{
//     return res * val ;
// })
// console.log(productOfall);




// let heading = document.querySelector("#name");
// console.log(heading);
// console.dir(heading)

// let inFO = document.querySelectorAll("body")
// console.log(inFO);
// console.dir(inFO);

// let h1 = document.querySelector("h1");

// console.log(h1.innerText);

// h1.innerText = h1.innerText + "from NIkhil mIshra".toUpperCase();
// console.log(h1.innerHTML);


// idx = 1;
// let divs = document.querySelectorAll("div");
// for (const i of divs) {
//     i.innerText = `this is the new value ${idx}`;
//     idx++;
// };

// let div = document.querySelector("div")
// console.log(div);
// console.log(div.getAttribute("id"));
// console.log(div.setAttribute("id", "nikhil"));
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","new"));

// let newButoon = document.createElement("button");
// newButoon.innerText = "click Me!";
// newButoon.style.backgroundColor = "red";
// newButoon.style.color = "white";

// let bd = document.querySelector("body");
// bd.append(newButoon);

// let p = document.querySelector("p");
// p.classList.add("newclass")



