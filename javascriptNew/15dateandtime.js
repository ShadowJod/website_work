// const nEwDate = new Date();
// console.log(nEwDate);

// const datee = new Date (2024)
// console.log(datee);

// const date = new Date (2025,1);
// console.log(date);

// const data = new Date (2024,0,20,2,3,4,222);
// console.log(data);


// const curMil = new Date().getTime();
// console.log(curMil);

// const  year = nEwDate.getFullYear();
// const month = nEwDate.getMonth();
// const dattaaa = nEwDate.getDate();
// const day = nEwDate.getDay();
// const time = nEwDate.getTime();

// console.log(year);
// console.log(month);
// console.log(dattaaa);
// console.log(day);
// console.log(time);

// console.log(Date.now());


// const delayTIme = () =>{
//     console.log("This is mssg is delayedddd");
// }

// setTimeout (delayTIme,2000)


// const intervalDelay = () =>{
//     console.log("This is magic in one minute");
// }
// setInterval(intervalDelay,1000)



const repatFuction = ()=>{
    console.log("enter you data");
}
repatFuction();
const You = setInterval(repatFuction,1000);

const time = ( )=>{
    clearInterval(You)    
}

setTimeout(time,5000)