var nuM = 1;

do {
    nuM++;
    console.log(nuM);
}while (nuM<10);


var i = 0;
do {
    i++;
    console.log("5*",i,i*5);

}while(i<10);


var userInput;
var checkNum;


do {
    userInput = prompt("Enter Any Number Must Be Positive");

}while(isNaN(userInput) || userInput>0);