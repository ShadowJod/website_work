var temp = 40;

if(temp > 30){
    console.log("to hot go to the beach");
}

else {
    console.log("watch tv at home");
}


var age = 18 ;
var Citezemship = false;
var voterId = false;

if(age >= 18){
    if (Citezemship) {
        if (voterId) {
            console.log("you are eligible");
        }
        else {
            console.log("You Dont have Voter Id card");
        }
        
    }
    else {
        console.log("you dont have citizenship");
    }

}
else {
    console.log("you are not eligible due to lower age");
}

var nuMber = 0;

if(nuMber % 2 ==0 ){
    console.log("This is even number");
}
else{
    console.log("this is odd number");
}

if(nuMber==0){
    console.log("it is zero");
}
else if(nuMber >0) {
    console.log("it is positive");
}
else {
    console.log("it is negative");
}



var year = 2003;

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("it is a leap year");
}
else{

    console.log("it not a leap year");
}

let result = year % 4==0? "yes": "no";
console.log(result);