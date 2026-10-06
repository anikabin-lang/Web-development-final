// let btn=document.querySelector("button");
// console.dir(btn);

////********** onclick and onmouseenter *******
// btn.onclick=function(){
    //     alert("button was clicked");
    // } 
    
// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Anika Jain");
// }
        
// btn.onclick=sayHello;
        
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=function(){ //only one value can be executed
//          alert("Photo was liked");   
//     }
//      btn.onmouseenter=function(){
//         console.log("You entered a like button");
//     }
// }

////********** event listeners ******* //allows more values, more activities

// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",
//         function(){
//             console.log("You double licked me");
//         }
//     );
// }
// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("You have clicked on para")
// })
// let box=document.querySelector('.box');
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse inside box");
// });

////this in event listener

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log(this); //returns btn object
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor="pink";
// });

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="pink";
// }
// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

////Keyboard events

////event argument
// btn.addEventListener("click",function(event){
//     console.log("button clicked")
//     console.log(event);
// })
// btn.addEventListener("dblclick",function(event){
//     console.log("button clicked")
//     console.log(event);
// })
// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log("Key was pressed"); //works for every key backspace etc every
//     console.log(event); //key property tells what is visible on input, code tells the code of particular ch eg 'space'
//     console.log("key=",event.key);
//     console.log("Code=",event.code)
// });
// input.addEventListener("keyup",function(){
//     console.log("Key was released"); 
// });
////*****arrow game********
// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log("code=",event.code) //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
//     if(event.code=="ArrowUp" || event.code=="KeyU"){
//         console.log("Character moves forward")
//     }else if(event.code=="ArrowDown" || event.code=="KeyD"){
//         console.log("Character moves backward")
//     }
//     else if(event.code=="ArrowLeft" || event.code=="KeyL"){
//         console.log("Character moves left")
//     }
//     else if(event.code=="ArrowRight" || event.code=="KeyR"){
//         console.log("Character moves right")
//     }
// })

////******Form Events******

// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault(); //prevents redirection to action or any other page
//     // alert("Form submitted")
//     // console.log("Form submitted");

//     // let user=document.querySelector("#user");
//     // let pass=document.querySelector("#pass");

//     // console.dir(user);
//     // console.log(user.placeholder);
//     // console.log(user.value);
//     // console.dir(pass);
//     // console.log(pass.placeholder);
//     // console.log(pass.value);
    
    
//     // console.dir(this);
//     // console.dir(this.elements);
//     // let user =this.elements[0];
//     // let pass =this.elements[1];
//     // console.log(user.value);
//     // console.log(pass.value);
//     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// }); 
// ////Change event
// let user=document.querySelector("#user")
// user.addEventListener("change",function(){
//     console.log("input changed")
//     console.log("final value=", this.value);
// });

// ////Input event

// user.addEventListener("input",function(){
//     console.log("input event")
//     console.log("input value=", this.value);
// });

////Text editor
let input=document.querySelector("input");
input.addEventListener("input",function(){
    console.log(input.value);
    let p=document.querySelector("p");
    p.innerText=input.value;
})