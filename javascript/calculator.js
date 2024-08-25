// let random = Math.random()
// let a = prompt("Enter your first number")
// let c = prompt("Enter your operation you want to performed")
// let b = prompt("Enter your second number")

// if (c=1){
//     alert(console.log("your answer is", a+b))
// }
// else {
//     alert("your anwer  is ", a-b)
// }


// let arr = [1,2,3,4,5,9,6,7]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[4])
// arr[4]=899
// console.log(arr[4])

// let a = "nikhil"
// a[2]= "g"
// console.log(a)




// let marks = [99,88,77,66,55,44];
// let sum = 0;



// for( let val of marks) {
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log("avg marks of class is" , avg);


// let oldprice = [250,645,300,900,50]

// for (let i = 0; i<oldprice.length; i++){
//     let offer = oldprice[i]/10;
//     oldprice[i] -= offer;
//     console.log('The New values is = ',oldprice[i]);
//     console.log(i)
// }


// function Printing(params) {
//     for(let i =0; i<10; i++){
//         console.log("my name is nikhil");
//     }
   
// }
// Printing();


// function addition (a,b){
    
//     let c;
//     c= a+b;
    
//     console.log(c)

// }

// addition(10,20);
 
// const arrowmult = (a,b)=> {
//     return a*b;
// }
// let n = arrowmult(100,100);
// console.log(arrowmult);
// console.log(n);


// function countvowel(nikhil) {
//     count  = 0;
    
//     for(const char of nikhil){
//         if(char === "i"|| char == "l"){
//             count++;
//         }
//     }
//     return count
// }
// let b= countvowel("Nikhil");
// console.log(b);


// let arr = [2,3,4,5,6,7];

// arr.forEach((val) => {
//     console.log(val);
// })

// let arr = ["nikhil", "mishra", "can", "be"];

// arr.forEach((val, idx, arr)=> {
//     console.log(val.toUpperCase , idx , arr);
// })


// let arr =  [1,2,3,4];

// function square(number) {
//     console.log(number*number);
// }
// arr.forEach(square);


// let arr = [1,2,3,5,6];

// let n = arr.map((val)=>{
//     return val*val;
// })

// console.log(n);


// let arr = [1,2,3,4,5,6,,7,8,9,10];

// let z = arr.filter((val)=>{
//     return val%2 ==0;
// })

// console.log(z);

// let arr = [1,2,3,4,5,6,7,8,9,10];


// let x = arr.reduce((pre,cur)=>{
//     return pre + cur;
// })
// console.log(x)


// let arr = [88,99,92,83,97,22];

// let b = arr.filter((val)=>{
//     return val >90;
// })
// console.log(b);

// let n = prompt("enter your number: ");

// let arr = [];

// for(let i = 0;  i <=n; i++){
//     arr[i - 1 ] = i;
// }
// console.log(arr);



// console.dir(window);
// console.dir(window.document);
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.body.childNodes[1].innerText = "abcd");
// console.dir(document.body.childNodes[2]);
// console.dir(document.body.childNodes[3]);
// console.dir(document.body.childNodes[4]);
// console.dir(document.body.style.background = "green");
// let heading = document.getElementById("bigheading");
// console.log(heading);
// console.dir(heading);

// let sh = document.getElementsByClassName("sh");
// console.log(sh);

// let p = document.getElementsByTagName("p");
// console.log(p);

// let h = document.getElementsByTagName("h1");

// console.log(h);

// let all = document.querySelector("p");
// console.log(all);

// let non = document.querySelectorAll("p");
// console.log(non);

// console.log(document.querySelectorAll("div").childNodes)



// let div  = document.querySelector("div");
// console.dir(div);

// let dis = document.querySelector("h1");
// console.dir(dis);

// console.log(div.innerHTML);

// dis.innerText = dis.innerText + " from apna cllg student";







// let first = document.querySelector("div");
// console.log(first);
// console.dir(first);

// idx = 1;
// for ( box of first){
//    box.innerText = 'this is box', idx+1;
//     idx++;
// }

// first[0].innerText = "first";
// first[1].innerText = "second";
// first[2].innerText = "third";
// console.dir(first.style);
// first.style.backgroundColor = "blue";
// first.style.fontSize = "20px";


// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!"
// newbtn.style.backgroundColor = "red";

// let div = document.querySelector("div");
// div.after(newbtn);

// let newheading = document.createElement("h1")
// newheading.innerHTML = "<i> HOLLA AMIGO KAISE HO THEEK HO </i>"

// document.querySelector("body").prepend(newheading);

// newbtn.remove();


// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = " white";

// document.querySelector("body").prepend(newbtn);

// let div = document.querySelector("p");

// // div.setAttribute("class", "content");
// div.classList.add("content");
// console.log(div.getAttribute("class"));
// div.classList.remove("content");
// console.log(div.getAttribute("class"));

// let bt1 = document.querySelector("#b1");
// bt1.onclick = (e)=> {
//     alert("you doing it right baby")
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// }
// bt1.addEventListener("click",(evt)=>{
//     alert("you are doing great");
//     console.log(evt.type);
//     console.log(evt.target);
// })

// let box = document.querySelector("div");
// box.onmouseover = () =>{
//     console.log("Nikhil is doing great");
//     box.style.backgroundColor = "white";
//     box.innerText = "this isbox"
// }

let but = document.querySelector("button");
let curbut = "light";
let body = document.querySelector("body");
but.addEventListener("click", (evt)=> {
    if(curbut === "light"){
        curbut = "dark";
        but.style.backgroundColor = "black";
        but.style.color = "white";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curbut = "light";
        but.style.backgroundColor = "wheat"
        but.style.color = "black"
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curbut);
})

but.addEventListener("mouseover", (evt)=> {
    if (curbut === "light"){
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        body.classList.add("light");
        body.classList.remove("dark");
    }
})