//q1
let arr=[7,9,0,2];
let no=3
console.log(arr.slice(0,no));

//q2
let n=3
console.log(arr.slice(arr.length-n));

//q3
let str="ABcd"
if(str.length==0){
    console.log("String is blank");
}else{
    console.log("string is not blank")
}

//q4
let index=1;
if(str[index]===str[index].toLowerCase()){
    console.log("It is lower case");
}else{
    console.log("It is not lower case.")
}

//q5
let s="   hi "
console.log(s.trim());

//q6
console.log(arr.includes(2));