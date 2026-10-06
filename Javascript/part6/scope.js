let sum=54 //global scope //can be used anywhere
function calSum(a,b){
    let sum=a+b; //function scope
    console.log(sum)
}
calSum(1,2);
// console.log(sum); //error sum is declared inside func, function scope;
console.log(sum);


//******** Block scope *******
{
    let a=25;
    const b=25;
    var c=25;
}
// console.log(a); //error as let a is defined inside block ie curly braces
// console.log(b); //error as const b is defined inside block ie curly braces
console.log(c); //no error, var does not has block scope hence no error


for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(i); //error

let age=25;
if(age>=18){
    let str="adult";
    console.log(str);
}
// console.log(str); //error

//************* Lexical scope ******************/

function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x); //it is possible
        let z=10;
        console.log(a); //possible due to hoisting
    }
    let a=7;
    innerFunc();
    // console.log(z); //error, this is not possible
}
outerFunc();
// innerFunc(); //error, This is not possible, as scope of innerFunc is function scope