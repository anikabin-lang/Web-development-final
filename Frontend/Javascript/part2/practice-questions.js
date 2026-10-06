//q1
let num=20;
if(num%10==0){
    console.log("good");
}else{
    console.log("bad");
}

//q2
let name=prompt("Enter your name");
let age=prompt("Enter your age");
let msg =`${name} is ${age} years old.`
alert(msg);

//q3
let q=2;
switch(q){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Inavlid");
}

//q4
let str="Anika"
if((str[0]=='a' || str[0]=='A') && (str.length>5)){
    console.log("Golden string");
}else{
    console.log("Not a golden string");
}

//q5
let a=2;
let b=3;
let c=4;
if(a>b && a>c){
    console.log(a);
}else if(b>c && b>a){
    console.log(b);
}else{
    console.log(c);
}

//q6
let x=12;
let y=23;
if(x%10==y%10){
    console.log("Same last digit");
}else{
    console.log("Different last digit.")
}