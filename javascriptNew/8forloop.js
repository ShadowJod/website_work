for ( var nuM =0; nuM<20; nuM++ ){
console.log(nuM);
}

for(var i = 0; i<11; i++){
    console.log(`5 * ${i} = ${5*i}`);
}

var nuM = 11;
var isPrime = true;
for(var i = 2; i <nuM; i++){

    if(nuM % 2 == 0){
        isPrime = false;
    }
}
if(isPrime){
    console.log("it is a prime number");
}
else{
    console.log("not a prime number");
}


for(var i = 1; i<6; i++){
    var result = "";
    for(var j = 1; j<=i; j++){
        result = result + " *";
    }
    console.log(result);
}