//storing values of array into multiple variables

let names=["tony","bruce","peter","steve","ab","xy","cd"];
// let winner=names[0];
// let runnerup=names[1];
// let secondRunnerup=names[2];

////Easier way
let [winner,runnerup,...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others);

//Destructuring with objects
const student={
    name:"Mahi",
    age:19,
    class:12,
    subjects:["hindi","English","maths"],
    username:"mahi@123",
    password:"abcd",
    city:"Gwl"
};

// let username=student.username;
// let password=student.password
let {username:user,password,city:place="Mumbai"}=student; //store username in user variable
console.log(user);

