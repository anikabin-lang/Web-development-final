//qs1

let func1=(arr)=>{
    let square=arr.map((n)=>(n**2));
    console.log(square);
    let sum=square.reduce((sum,n)=>(sum+n));
    console.log("Sum:",sum);
    console.log("Average",sum/arr.length);
}
func1([1,2,3,4]);

//qs2
let arr=[1,2,3,4,5];
let newArr=arr.map((n)=>n+5);
console.log(newArr);

//qs3
let elements=["hello","hi","hey"];
let newElements=elements.map((el)=> {
    return el.toUpperCase();
});
console.log(newElements);

//qs4
function doubleAndReturnArgs(arr,...args){
    return [...arr,...args.map((n)=>n*2)];
}
console.log(doubleAndReturnArgs([1,2,3],4,5,1));

//qs5
function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}
console.log(mergeObjects({name:"Anika",age:19},{city:"Noida"}));