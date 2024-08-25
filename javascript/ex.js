let newEl;
let newBut;
let a;
let b;
let c;
let d;

let startfunction = () => {
     newEl = document.createElement("div")
    newEl.classList.add("newel")
    document.querySelector("body").append(newEl);
    newBut = document.createElement("button");
    newBut.classList.add("newbut")
    newBut.innerText = "Add"
    

    document.querySelector(".newel").prepend(newBut);



    document.querySelector(".newbut").addEventListener("click",()=>{
        let newFunction = () =>{
            let d = Number(a)+ Number( b) + Number(c);
            
           let second =  document.createElement("p")
           second.innerText = `Your Total Expenses was ${d}`
           document.querySelector(".newel").append(second)

        }

        newFunction();
    })

    }
    

let add1function = () =>{
    
     a = document.querySelector("#travel").value
    let newP = document.createElement("p")
    newP.classList.add("newP")
    newP.innerText = a
    newEl.append(newP)
    
    
    
    
}


let add2function = () =>{
     b = document.querySelector("#food").value
    let newP = document.createElement("p")
    newP.classList.add("newP")
    newP.innerText = b
    newEl.append(newP)
    

    
    
}


let add3function = () =>{
     c = document.querySelector("#other").value
    let newP = document.createElement("p")
    newP.classList.add("newP")
    newP.innerText = c
    newEl.append(newP)
    
    
    
}




document.querySelector("#add1").addEventListener("click",()=>{
    add1function();
})

document.querySelector("#add2").addEventListener("click",()=>{
    add2function();
})

document.querySelector("#add3").addEventListener("click",()=>{
    add3function();
})


startfunction();