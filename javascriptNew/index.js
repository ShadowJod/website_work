// let newButton = document.querySelector("#mode");

// newButton.addEventListener("click",(e)=>{
//     console.log(e);
//    console.log("handler1");
// })

// newButton.addEventListener("click",(e)=>{
//     console.log(e);
//    console.log("handler2");
// })

// const handler3 = ()=>{
//     console.log("handler 3");
// }
// newButton.addEventListener("click", handler3);
// newButton.addEventListener("click",(e)=>{
//     console.log(e);
//    console.log("handler4");
// })

// newButton.removeEventListener("click", handler3);


let mode = document.querySelector("#mode");
let a = 1
mode.addEventListener("click",(e)=>{
    if(a % 2!==0){
        console.log("you are in light mode");
        a++;
        document.querySelector("body").style.backgroundColor = "orange";
       
        mode.style.backgroundColor = "red";
        
        console.log(a);
    }
    else{
        console.log("You are in dark mode");
        a++;
        document.querySelector("body").style.backgroundColor = "black";
        
        mode.style.backgroundColor = "green";
        console.log(a);
        
    }
})
