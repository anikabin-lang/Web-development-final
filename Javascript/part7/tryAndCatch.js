// console.log("Hello1");
// console.log("Hello1");
// console.log(a); //error
// console.log("Hello2");
// console.log("Hello2"); //these 2 are not executed


console.log("Hello1");
console.log("Hello1");
//let a=1;
try{
    console.log(a); 
} catch(err){
    console.log("caught an error... a is not defined");
    console.log(err);
}

console.log("Hello2");
console.log("Hello2");