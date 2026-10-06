////*** Call stack ****

// function hello(){
//     console.log("Inside hello func")
//     console.log("Hello");
// }

// function demo(){
//     console.log("Calling hello func");
//     hello();
//     console.log("After hello func")
// }

// console.log("Calling demo func");
// demo();
// console.log("Done, bye!")

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }
// three(); 

////**** Breakpoints *****/. // using source add breakpoint
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans= two() + one();
//     console.log(ans);
// }
// three(); 

////*** JS is single threaded ****/ //at a time only one thing of a code is executed
//synchronous nature
// let a=25;
// console.log(a);
// let b=20;
// console.log(b);
// console.log(a+b);

//asynchronous nature 
// setTimeout(()=>{
//     console.log("Anika")
// },2000);
// setTimeout(()=>{
//     console.log("Jain") //both timeouts appear to be executed at same time
// },2000); //this is done by browser as they are capable of multithreading
// console.log("Hello");

//// **** Callback Hell *****
let h1=document.querySelector("h1");


// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color="green";
// },3000);




// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }
// changeColor("red",1000,); //all color will change at same time due to asynchrronous
// changeColor("orange",1000);
// changeColor("green",1000);

////another way

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("pink",1000)
//         });
//     });
// }); 
//callbacks nesting -> callback hell

////**** Promises ******/

// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb("hello",()=>{
//     console.log("success: Your data was saved");
//     savetoDb("hello world",()=>{
//         console.log("success: Your data 2 was saved");
//         savetoDb("Anika",()=>{
//             console.log("Success 3")
//         },
//         ()=>{
//             console.log("Failure 3")
//         });
//     },
//     ()=>{
//     console.log("failure: Weak connection, your data 2 was not saved.")
//     })
// },
// ()=>{
//     console.log("failure: Weak connection, your data was not saved.")
// });

//It becomes very confusing this is callback hell

/////Promises is a object represents the eventual completion or failure of an asynchronous operation and its resulting value

////using Promises

// function savetoDb(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("success: data was saved");
//         }else{
//             reject("failure: weak connection");
//         }
//     })
// }

// savetoDb("hello",()=>{
//     console.log("success: Your data was saved");
//     savetoDb("hello world",()=>{
//         console.log("success: Your data 2 was saved");
//         savetoDb("Anika",()=>{
//             console.log("Success 3")
//         },
//         ()=>{
//             console.log("Failure 3")
//         });
//     },
//     ()=>{
//     console.log("failure: Weak connection, your data 2 was not saved.")
//     })
// },
// ()=>{
//     console.log("failure: Weak connection, your data was not saved.")
// });

// let request=savetoDb("Apna college"); //request=promise object

// request.then(()=>{
//     console.log("Promise was resolved")
// })
// .catch(()=>{
//     console.log("Promise was rejected")
// })

//easier way to write upper thing

// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("success: data was saved");
//         }else{
//             reject("failure: weak connection");
//         }
//     })
// }

// savetoDb("Apna college")
// .then((result)=>{
//     console.log(result)
//     console.log("data 1 saved, Promise resolved");
//     return savetoDb("Hello world");
// })
// .then((result)=>{
//     console.log(result);
//     console.log("Data 2 saved")
//     return savetoDb("Anika");
// })
// .then((result)=>{
//     console.log(result);
//     console.log("Data 3 saved")
//     return savetoDb("Hey");
// })
// .then((result)=>{
//     console.log(result);
//     console.log("Data 4 saved.")
// })
// .catch((error)=>{
//     console.log(error);
//     console.log("Promise rejected");
// }) //only single catch is needed

////*** Refactoring old code */
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },1000);
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("pink",1000)
//         });
//     });
// }); 

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed")
        },delay)
    })
}
changeColor("red",1000)
.then(()=>{
    console.log("Red color changed")
    return changeColor("orange",1000)
})
.then(()=>{
    console.log("Orange color completed");
    return changeColor("yellow",1000)
})
.then(()=>{
    console.log("Yellow color changed");
});
