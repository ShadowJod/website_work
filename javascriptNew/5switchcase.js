 var day = "sunday";

 switch (day) {
    case "monday":
        console.log("today is fun day");

        
        break;
 
    default:
        console.log("today is not monday");
        break;
 }

 var areaofshape = "rectangle"
 a=5;
 b=2;
 var result;

 switch (areaofshape) {
    case "circle":
        let r =2;
        result = 3.14*(r*r);
        console.log(result);
        break;
    case "square":
         result = a*a;
         console.log(result);

    default:
        console.log("shape not matched");
        break;
 }