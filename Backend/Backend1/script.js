// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello",i);
// }
// console.log("bye");


////process object 
// provides info about current node.js process

// console.log(process.argv)

// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("Hello",args[i]);
// }

////***Ex port and require */

// const math = require("./math");
// console.log(math.PI);
// console.log(math.sum(2,7));

//require from directory
// const info=require("./Fruits");
// console.log(info);
// console.log(info[0].name);

// const figlet= require("figlet");


////using import
import{sum,PI} from "./math.js";
import { generate} from "random-words";
console.log(PI);
console.log(generate());