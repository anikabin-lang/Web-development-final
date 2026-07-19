//// ****forEach method*****
// let arr=[1,2,3,4,5];

// let print=function(el){
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach((el)=>{
//     console.log(el)
// })

// arr.forEach(function(el){
//     console.log(el);
// })

// let students=[{
//     name:"Anika",
//     city:"Noida",
//     marks:92.8
// },
// {
//     name:"Krish",
//     city:"Sonepat",
//     marks:90.9
// },
// {
//     name:"Soumya",
//     city:"Gwalior",
//     marks:87.5
// }];
// students.forEach(function(student){
//     console.log(student.city);
// });

////*********** Map function*********

// let num=[1,2,3,4];

// let double=num.map(function(el){
//     return el*2;
// });
// console.log(double);

// let sq=num.map(function(el){
//     return el**2;
// });
// console.log(sq);

// let gpa=students.map(function(student){
//     return student.marks/10;
// })
// console.log(gpa);

////*********Filter function*******
// let nums=[1,2,4,3,7,12,19,25,20];
// let even=nums.filter((n)=>(n%2==0));
// console.log(even);
// let odd=nums.filter((n)=>{
//     return n%2!=0;
// });
// console.log(odd);
// let less5=nums.filter((n)=>(n<5));
// console.log(less5);

////********** every method **********
// nums=[2,3,4,6,8,10];
// let even=nums.every((n)=>(n%2==0));
// console.log(even); //returns true if all element is even else false

////****Some method */
// let nums=[1,2,3,9];
// let even=nums.some((n)=>(n%2==0));
// console.log(even); //returns true even if one n is even

////*******Reduce method */ reduces array to single value
// let nums=[1,2,3,4];
// let reduced=nums.reduce((res,n)=>{ //res=accumulator
//     console.log(res);
//     return res+n;
// });
// console.log(reduced);

////finding max in array using reduced function
// let nums=[2,3,4,5,24,3,4,7,8,1,2];
// let max=nums.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

////Practice Questions
// let nums=[10,20,3,40,45];
// let multiplesOf10=nums.every((el)=>(el%10==0));
// console.log(multiplesOf10);

// function getMin(nums){
//     let min=nums.reduce((min,el)=>{
//         if(min<el){
//             return min;
//         }else{
//             return el;
//         }
//     });
//     return min;
// }
// console.log(getMin([2,1,3]));

////******Spread  */
// let arr=[1,2,3,1,2,3,0,1,2,6,2,0];
// arr.push(-1);
// console.log(Math.min(arr[0],arr[1])); ////takes a lot of time

// console.log(Math.min(...arr));

// console.log(...arr);
// console.log(..."Anika Jain")

////with array literals
// let arr=[1,2,3,4];
// let newArr=[...arr,5,6,7,8];
// console.log(newArr);

// let chars=[..."Anika Jain"];
// console.log(chars);

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];
// let nums=[...odd,...even];
// console.log(nums);

////with object literals
// let data={
//     name:"Anika",
//     age:19
// };

// let info={
//     ...data,
//     city:"Noida"
// };
// console.log(info);

let arr=[1,2,3,4,5];
let obj1={
    ...arr
};
console.log(obj1); //{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

let obj2={
    ..."Hello Anika"
};
console.log(obj2);
