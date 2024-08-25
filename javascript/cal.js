let mainebody = document.querySelector(".calelements");
console.log("my name is nikhil");
let input = document.querySelector("#inpuut")

let mainfunction = (e)=>{
    console.log(e.target.innerText);
    let val1 = input.value  = e.target.innerText;
    let val2 = input.value  = e.target.innerText;
    

    
    
    

    
}

mainebody.addEventListener("click",mainfunction);

