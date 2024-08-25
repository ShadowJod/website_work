// let myid = "studentid";
// let sTudent = {
//     [myid]: 10622397,
//     myname : "nikhil",
//     myage: 20,
//     ispass :true,
//     greet : ()=>{
//         console.log(
//             `my ${myid} is ${sTudent[myid]} this`
//         );
//     }
// }
// sTudent.greet();



// function callme(){
//     console.log(this);

// }
// callme()


// let nak = {
//     name: "nikhil",
//     rollno : 27,
//     greet: function(){
//         console.log(this);
//     }
// }
// nak.greet();


//     let product  = {
//         id : 1,
//         name: "infinix",
//         model: "laptop",
//         price: 70000,
//         discription : "World best fastest laptop"
//     }

//    let key  = Object.keys(product);
//    console.log(key);

//    let value = Object.values(product);
//    console.log(value);

//    let entries = Object.entries(product);
//    console.log(product);

// console.log(product.hasOwnProperty("name"));


// let obj = {name:"kodifyer",age:18};
// let obj1 = obj;
// console.log(obj1);

// let newobj = Object.assign({},obj);
// newobj.name = "nikhik";
// console.log(newobj);
// console.log("orginal",obj);


// let target = {a :2, b:4};
// let source = {b:3,c:4};

// let newobj = Object.assign({},target,source)
// console.log(newobj);




// let obj1 = {name:"nikhil",age:20,place:"delhi"};
// let obj2 = {name:"nikhil",age:20,place:"delhi"};


// let newFunction = (obj1,obj2)=>{
//     let o1 =  Object.keys(obj1);
//     let o2 = Object.keys(obj2);

//     if(o1.length != o2.length){
//         console.log("they are not same");
//         return false
//     }

//     for(let i in obj1){
//         obj1[i] !== obj2[i]
//         return false
//     }

//     return true
// }

// console.log(newFunction(obj1,obj2));



const fun2 = ()=>{
    setTimeout(() => {
        console.log("my name is nikhil");
        
    }, 2000);
}

const fun = ()=>{
    console.log("this is fun one");
    fun2();
    console.log("this is fun two");
}

fun();