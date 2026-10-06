// const calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     prod: function(a,b){
//         return a*b;
//     }
// };
// console.log(calculator.add(2,3));

//shorthand
const calculator={
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b;
    }
};
console.log(calculator.sub(10,5));
