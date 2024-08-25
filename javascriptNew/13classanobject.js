// const sTudent = {
//     name:"NIkhil",
//     age :19,
//     ispass : true,
//     prIntFuc : function(){
//         console.log("age = ",this.age);
//     },}
// const science = {
//      minimarks(){
//         console.log("you need 70 marks for passing");
//     }
// }

// science.__proto__ = sTudent;


class toYotaCar {
    constructor (brand,meleage){
    console.log("constructor is running");
    this.brand = brand;
    this.meleage = meleage;
    }

    start (){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
let fortuner = new toYotaCar("fortuner",20);
console.log(fortuner);
let lexus = new toYotaCar("lexus",10);
console.log(lexus);

