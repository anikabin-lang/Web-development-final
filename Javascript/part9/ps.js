// //i
// p1=document.createElement("p")
// p1.innerText="Hey I'm red!"
// p1.style.color="red";
// let body=document.querySelector("body");
// body.append(p1);

// //ii
// h3=document.createElement("h3");
// h3.style.color="blue";
// h3.innerText="I'm a blue h3!";
// document.querySelector("body").append(h3)

// //iii
// div=document.createElement("div");
// div.classList.add("pinkBg","border")
// body.prepend(div);
// h1=document.createElement("h1");
// h1.innerText="I'm in a div"
// div.append(h1);
// p2=document.createElement("p");
// p2.innerText="ME TOO!";
// div.append(p2);

//qs1
let input=document.createElement("input");
let btn=document.createElement("button");
btn.innerText="Click me";
document.querySelector("body").append(btn);
document.querySelector("body").append(input);

//qs2
input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
console.dir(btn.getAttribute("id"));

//qs3
console.dir(document.querySelector("#btn"));
document.querySelector("#btn").classList.add("btn");

//qs4
h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>"
h1.classList.add("h1style");
document.querySelector("body").append(h1);

//qs5
let p=document.createElement("p");

p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);

