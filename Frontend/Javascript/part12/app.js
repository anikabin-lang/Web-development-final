////async functions
// async function greet(){
//     throw "some random error"
//     return "hello";
// }
// greet()
// .then((result)=>{
//     console.log("Promise was resolved with result:",result);
// })
// .catch((error)=>{
//     console.log("Promise rejected with error:", error);
// });

// let demo= async ()=>{
//     return 5;
// }

////await keyword
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//         },1000);
//     });
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }


////Color change refactoring using async and await
let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Number is greater than 3, promis rejected");
            }
            h1.style.color=color;
            console.log("Color changed to:",color)
            resolve("Color changed");
        },delay);
    })
}

async function colors(){
    try{
        await changeColor("red",1000);
        await changeColor("pink",1000);
        await changeColor("yellow",1000);
        await changeColor("hotpink",1000);
        await changeColor("lavender",1000);
        await changeColor("lightblue",1000);
    } catch(error){
        console.log("Error caught");
        console.log(error);
    }
    let a=5;
    console.log(a);
    console.log("new number=",a+3);
}
