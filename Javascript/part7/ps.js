//pq1
const square=n=>(n*n);
console.log(square(6));

//pq2
let id=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Clear interval ran")
},10000);

//qs1
let arrayAverage=(arr)=>{
    let total=0;
    for(num of arr){
        total+=num;
    }
    let avg=total/arr.length;
    return avg;
};
console.log(arrayAverage([2,3,4]))

//qs2
const isEven=n=>n%2==0;
console.log(isEven(18));

//qs3

//qs4

