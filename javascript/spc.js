let u_score = 0;
let comp = 0;

let computer_choice = ()=>{
    let moves = ["stone","paper","scissors"]
    let i = Math.floor(Math.random()*3)
    let move_val = moves[i];
    console.log(`computer choice is ${moves[i]}`);   
}
computer_choice();

document.querySelector("#mssg").addEventListener("click",()=>{
    if(your_Choice|| computer_choice){
        console.log("you win");
        let u_score = 0;
        u_score++
        console.log(new_score);
        
        
    }
})

let your_Choice = (e)=>{
        console.log(`your choice is ${e.target.innerText}`);
}


document.querySelector("#spc").addEventListener("click",(e)=>{
    your_Choice(e);
    
})


