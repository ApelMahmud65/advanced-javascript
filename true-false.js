//"" = false
//null = false
//NaN = false
// undefined = false
// false = false
// 0 = false

//truthy
//'0', " ", [];


let name = 12;

if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}