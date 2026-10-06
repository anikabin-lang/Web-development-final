const sum=(a,b)=>{
    console.log(a+b);
};
sum(9,4);

const findCube=a=>{ //when 1 argument parenthesis not important
    console.log(a**3);
};
findCube(5);

const pow=(a,b)=>{
    return a**b;
};
let power=pow(2,3);
console.log(power);

const hello=()=>{
    console.log("hello");
};
hello();

//implicit return
const mul=(a,b)=>(a*b) //implicit return when only 1 return in func and nothing else inside function
console.log(mul(2,3));

const cube=a=>(a**3);
console.log(cube(3))
