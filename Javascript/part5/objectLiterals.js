const student={
    name:"Anika",
    age:19,
    city:"Noida"
}; //order is not followed

let stu2=["Anika",19,"Noida"]; //order is followed

const item={
    price:100.99,
    discount:50,
    color:["red","pink"]
};

const post={
    username:"@anikajain",
    content:"#firstpost",
    likes:150,
    repost:5,
    tags:["@krishjagya","@apnacollege"]
};

//Get values
console.log(student["name"]);
console.log(post["likes"]);
console.log(student.name);
console.log(post.tags[0]);

let prop="repost"; //benefit of square brackets
console.log(post[prop]);

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
} 
console.log(obj[true]); //converted to string 

//Add or Update values
console.log(student.city);
student.city="Mumbai"; //Update
console.log(student.city);

console.log(student.gender);
student.gender="female"; //Add
console.log(student.gender);
console.log(student);

//Delete
delete student.gender;
console.log(student);

//Nested objects
const classInfo={
    krish:{
        cgpa:9.09,
        city:"sonepat"
    },
    soumya:{
        cgpa:8.7,
        city:"gwalior"
    },
    janis:{
        cgpa:9.5,
        city:"panipat"
    }
};
console.log(classInfo);
console.log(classInfo.krish);
console.log(classInfo.krish.city);
classInfo.krish.age=19
console.log(classInfo.krish.age);

//Array of objects
const classInfoArr=[{
        name:"krish",
        cgpa:9.09,
        city:"sonepat"
    },
    {
        name:"soumya",
        cgpa:8.7,
        city:"gwalior"
    },
    {
        name:"janis",
        cgpa:9.5,
        city:"panipat"
    }];

console.log(classInfoArr);
console.log(classInfoArr[0].name);
classInfoArr[0].gender="male";
console.log(classInfoArr[0]);