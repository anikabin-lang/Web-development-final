function sum(a,b=5){
    console.log(a+b);
}
sum(1);
sum(3,4);

function add(a=2,b){
    console.log(a+b);
}
add(2);//returns NaN bacause 2 is assigned to a
