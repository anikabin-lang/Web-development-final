// function greetings(){
//     console.log("Hello")
// }
// greetings();
// greetings();


// function printName(){
//     console.log("Anika Jain")
// }
// printName();
// printName();
// printName();


// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// print1to5();


// function isAdult(){
//     let age=10;
//     if(age>=18){
//         console.log("adult");
//     }else{
//         console.log("not adult")
//     }
// }
// isAdult();

// //pq1
// function printPoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("How I wonder what you are");
// }
// printPoem();

// //pq2
// function rollDice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// rollDice();
// rollDice();


// //functions with arguments

// function printInfoArg(name,age){
//     console.log(`Name: ${name}, Age: ${age}`);
// }
// printInfoArg("Anika",19);
// printInfoArg("Krish",19);
// printInfoArg("Avika");

// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,10);

// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }
// avg(1,2,3);
// avg(5,6,7);

// function printTable(num){
//     for(i=1;i<=10;i++){
//         console.log(`${num} X ${i} = ${num*i}`);
//     }
// }
// printTable(79);

//return keyword

// function add(a,b){
//     console.log("Hello1");
//     return a+b;
//     console.log("Hello2");
// }
// let sum2=add(2,3);
// console.log(sum2);

// console.log(add(1,add(2,3))); //add 3 numbers using func of 2 numbers

// //pq5
// function sum1toN(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum1toN(200));

// //pq6
// function stringConcat(arr){
//     let str="";
//     for(string of arr){
//         str=str+string;
//     }
//     return str;
// }
// console.log(stringConcat(["hello","I","am","Anika"]));

//Function Expressions

// let sum=function(a,b){
//     return a+b;
// }
// console.log(sum(2,3));


// let hello=function(){
//     console.log("Hello");
// }
// hello();
// hello=2;
// console.log(hello);

//*******Higher order Functions********

//takes function as arguments
let greet=function(){
    console.log("hello");
}
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
multipleGreet(greet,3);
multipleGreet(function(){console.log("Namaste")},3)

//returns functions

function oddOrEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
        
    }else{
        console.log("Wrong request");
    }
}
let request="odd"; //even
let func=oddOrEvenFactory(request)
func(5);
console.log(func);