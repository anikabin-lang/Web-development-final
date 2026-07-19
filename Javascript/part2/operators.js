let a=10;
let b=5;

//Arithmetic Operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Unary operators
console.log(a++);
console.log(++a);

//Assignment operators
b+=2;
console.log(b);
b*=10;
console.log(b);

//Comparison Operators
let age=18;
console.log(age>18);
console.log(age>=18);
console.log(age==18);
console.log(age!=18);
console.log(5<6);
console.log(5<=6);

    //It does not check type
    console.log(5=='5');
    let n=5;
    let str='5';
    console.log(n==str);
    console.log(0==' ');
    console.log(0==false); //true
    console.log(null==undefined); //true

    ///It also compares type
    console.log(n===str);
    console.log(0==='');

    //Non-numbers comparison using unicode
    console.log('A'>'a'); //false
    console.log('a'>'A') //true
    console.log('a'<'b') //true

//Logical opertors
//Logical AND
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
//Logical OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
//Logical NOT
console.log(!true);  //false
console.log(!false); //true

console.log((2<3) && (3<5));
console.log(!1);
console.log(!(5<3))

let marks=85;
if((marks>=33) && (marks>=80)){
    console.log("A+");
}
if(!(marks<33)){
    console.log("Pass");
}

//Practice Question 
let s="anika";
if(((s.length)>3) && (s[0]==='a')){
    console.log(`${s} is a good string.`);
}else{
    console.log(`${s} is a bad string.`);
}

let st="";
if(st){
    console.log("String is not empty");
}else{
    console.log("String is empty");
}