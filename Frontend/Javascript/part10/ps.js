let btn=document.querySelector("button");
let input=document.querySelector("input");

//keypress
input.addEventListener("keypress",function(){
    console.log("Key pressed");
})

//mouseout
btn.addEventListener("mouseout",function(){
    console.log("Mouse is out of the button")
})

//scroll
document.addEventListener("scroll",function(){
    console.log("Document has been scrolled")
})
btn.addEventListener("scroll",function(){
    console.log("button has been scrolled")
})

//load
window.addEventListener("load",function(){
    console.log("Window has been loaded")
})

//qs2
let btn2=document.querySelector("#button2");
btn2.addEventListener("click",function(){
    this.style.color="green";
})

//qs3
let name=document.querySelector("#name");
name.addEventListener("input",function(){
    let filtered=this.value.replace(/[^a-zA-Z ]/g,"")
    let h2=document.querySelector("h2");
    h2.innerText=filtered;
})
