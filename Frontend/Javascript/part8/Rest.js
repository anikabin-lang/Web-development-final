// function sum(...args){
//     for(i=0;i<args.length;i++){
//         console.log("You gave us :",args[i])
//     }
// }
// sum(1,2,5,7);

function min(){
    console.log(arguments); //Inbuilt
    console.log(arguments[0]);
    // arguments.push(1) //error, arguments is not actually array but a collection
}
min(1,2,3,4);

function addition(...args){
    return args.reduce((res,n)=>(res+n));
}
console.log(addition(1,2,3,4,5,6));

function min(msg,...args){
    console.log(msg);
    return args.reduce((min,n)=>{
        if(min<n){
            return min;
        }else{
            return n;
        }
    })
}
console.log(min("HI",76,34,12,98,999,56)); //1st element is considered msg
