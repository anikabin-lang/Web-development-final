let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let div=document.querySelector("div");
    h3.innerText=getRandomColor();
    div.style.backgroundColor=getRandomColor();
})
function getRandomColor(){
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
}