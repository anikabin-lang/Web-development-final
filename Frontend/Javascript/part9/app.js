////selecting elements by id //returns null if not found
// let imgObj=document.getElementById("mainImg");
// console.dir(imgObj);
// console.log(imgObj.id);

// //class name //returns a collection //returns empty collection if not found
// let smallImages=document.getElementsByClassName("oldImg");
// for (let i=0;i<smallImages.length;i++){
//     console.dir(smallImages[i]);
//     console.dir(smallImages[i].src);
//     smallImages[i].src="assets/spiderman_img.png";
//     console.dir(`value of image no ${i} is changed`);
// }

////selecting elements by tag name
// let tagObj=document.getElementsByTagName("p");
// console.dir(tagObj);
// for(let i=0;i<tagObj.length;i++){
//     console.dir(tagObj[i]);
// }
// tagObj[1].innerText="abc";

// console.dir(document.getElementsByTagName("span")); //empty collection

////query selectors //very easy to use
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#mainImg"));
// console.dir(document.querySelector(".oldImg")); //does not return collection it returns the first object
// console.dir(document.querySelector("p")); //does not return collection it returns the first object paragraph
// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a")); //returns the NodeList
// console.dir(document.querySelectorAll("p"));

////Setting Content in objects
// let para=document.querySelector("p");
// console.dir(para);
// console.dir(para.innerText); //text visible on screen
// console.dir(para.innerHTML); //html markup
// console.dir(para.textContent); //shows html textual content like hidden display also
// para.innerText="abcd";
// // para.innerText="Hi, I am Peter Parker";
// para.innerHTML="Hi, I am <b>Peter Parker</b>";
// let heading=document.querySelector("h1");
// // heading.innerHTML="<u>Spider Man</u>";
// heading.innerHTML=`<u>${heading.innerText}</u>`;

////Manipulating Attributes
////getters and setters
// let img=document.querySelector("img");
// console.dir(img.getAttribute("id"));
// img.setAttribute("id","spiderManImg");
// console.dir(img.getAttribute("src"));
// img.setAttribute("src","assets/creation_1.png");
// console.dir(img.getAttribute("class")); //returns null
// img.setAttribute("class","spiderManClass");
// console.dir(img.getAttribute("class")); 

////Manipulating style using style tag //it is less used as it checks inline styling not css styling
// let img=document.querySelector("img");
// console.dir(img);
// console.dir(img.style);
// let heading=document.querySelector("h1");
// console.dir(heading.style);
// heading.style.color='red';
// heading.style.backgroundColor='purple';

// let boxLinks=document.querySelectorAll(".box a");
// console.dir(boxLinks);
// for(link of boxLinks){
//     console.dir(link.style)
//     link.style.color='hotpink';

// }

////classList
// let img=document.querySelector("img");
// console.dir(img.classList);
// img.classList.add('abc');
// console.dir(img.classList);

// let heading =document.querySelector("h1");
// console.dir(heading.classList);
// heading.classList.add('headingMain','abc');
// console.dir(heading.classList);
// heading.classList.add('green','underline');
// console.dir(heading.classList);
// heading.classList.remove('green');
// console.dir(heading.classList);
// // heading.setAttribute('class','green'); it allows only 1 class // hence it is not used for styling
// console.dir(heading.classList.contains('green'));
// heading.classList.toggle('green');//toggle adss class if it is not present, or removes a class if it is present
// console.dir(heading.classList);

////Navigation
// let h4=document.querySelector("h4");
// console.dir(h4.parentElement);
// console.dir(h4.nextElementSibling);

// let box=document.querySelector(".box");
// console.log(box.childElementCount);
// console.dir(box.children);

// let ul=document.querySelector("ul");
// console.dir(ul.parentElement);
// console.log(ul.childElementCount);
// console.log(ul.children);
// console.dir(ul.children[1].previousElementSibling);
// console.dir(ul.children[1].nextElementSibling);
// console.dir(ul.previousElementSibling);

// ul.children[1].previousElementSibling.style.color="pink";

// let img=document.querySelector("img");
// console.dir(img.previousElementSibling);
// img.previousElementSibling.style.color="pink";

////Add elements on document
// let newPara=document.createElement("p");
// newPara.innerText="Hi,I am a new p"
// let body=document.querySelector("body");
// body.appendChild(newPara);
// newPara.append(" This is some new text"); //adds at last
// newPara.prepend("This is prepend text ");

// let box=document.querySelector(".box");
// box.appendChild(newPara); //Now it is removed from end of body

// // let btn= document.createElement("button");
// // let body=document.querySelector("body");
// // btn.innerText="Click me!";
// // box.appendChild(btn);

// // newPara.append(btn); //adds at last
// // newPara.append("Do not click this button");

// let btn=document.createElement("button");
// btn.innerText='click me!';
// let p=document.querySelector("p");
// p.insertAdjacentElement('beforebegin',btn);
// p.insertAdjacentElement('afterbegin',btn);
// p.insertAdjacentElement('beforeend',btn);
// p.insertAdjacentElement('afterend',btn);

////Remove elements from document
// body.removeChild(btn);
// btn.remove;
// newPara.remove;
