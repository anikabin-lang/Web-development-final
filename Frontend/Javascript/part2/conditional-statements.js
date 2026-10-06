//If statements
let age=14;
console.log("Before my if statement");
if(age>=18){
    console.log("You are eligible to vote.");
    console.log("You can drive");
    let a=10;
    console.log(a*2);
}
if(age>20){
    console.log("You are in your 20s");
}
console.log("After my if statement");

let firstName="Anika"
if(firstName=="Anika"){
    console.log(`Welcome ${firstName}!`)
}

//Practice Question
let color= "red";
if(color==="red"){
    console.log("Stop!");
}
if(color==="yellow"){
    console.log("Go slow!");
}
if(color==="green"){
    console.log("Go!");
}


//Else-if statements 

if(age>=18){
    console.log("You can vote");
}
else if(age<=18){
    console.log("You cannot vote");
} else if(age<18){
    console.log("Not eligible to vote");
}

let marks=30;
if(marks>=80){
    console.log("A+");
}else if(marks>=60){
    console.log("A");
}else if(marks>=33){
    console.log("B");
}else if(marks<33){
    console.log("Fail");
}

if(color==="red"){
    console.log("Stop!");
}
else if(color==="yellow"){
    console.log("Go slow!");
}
else if(color==="green"){
    console.log("Go!");
}

//Else Statements
if(marks>=80){
    console.log("A+");
}else if(marks>=60){
    console.log("A");
}else if(marks>=33){
    console.log("B");
}else{
    console.log("Fail");
}

if(age>=18){
    console.log("You can vote");
}else{
    console.log("You cannot vote")
}

//Practice Qs
let size='L';
if(size==='XL'){
    console.log("Price is Rs.250");
}else if(size==='L'){
    console.log("Price is Rs.200");
}else if(size==='M'){
    console.log("Price is Rs.100");
}else{
    console.log("Price is Rs.50")
}

//Nested if-else
    if(marks>33){
        if(marks>=80){
            console.log("Outstanding");
        }else{
            console.log("A");
        }
    }else{
        console.log("Fail")
    }