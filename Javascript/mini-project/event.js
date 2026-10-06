////*** Event bubbling ******/
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("Div was clicked");
// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for(li of lis){
//     li.addEventListener("click",function(event){
//         console.log("li was clicked")
//         event.stopPropagation();
//     })
// }

////****** To-do list *****/
let btn=document.querySelector("button")
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
});

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par =this.parentElement;
//         par.remove();
//     });
// }
////Event deligation: listener properties are not applied to newly made tags so event deligation is used

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
})


