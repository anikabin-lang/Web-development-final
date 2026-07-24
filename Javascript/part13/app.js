////**** Axios *****
// let url="https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);

//         let res2=await fetch(url);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }catch(err){
//         console.log(err);
//     }
// }
// getFacts();

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res2)=>{
//     console.log(res2);
//     return res2.json();
// }).then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log(1);

/////Using axios

// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//    }catch(err){
//     console.log(err);
//         return "No fact found";
//    }   
// }

// let p=document.querySelector("p");
// let btn=document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     let fact= await getFacts();
//     p.innerText=fact;
// })

// let url2="https://dog.ceo/api/breeds/image/random";
// async function getImg(){
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//     }catch(err){
//         console.log(err);
//         return "/";
//     }
// };
// let btnDog=document.querySelector("#btnDog")
// btnDog.addEventListener("click",async()=>{
//     let img=document.querySelector("img");
//     img.src=await getImg();
// })


////***** sending headers ****
// const url= "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config={headers:{Accept:"application/json"}};
//         let joke=await axios.get(url,config);
//         console.log(joke.data.joke);
//     }catch(err){
//         console.log(err);
//     }
// }

////**** updating query strings */
// let country="Nepal";


// async function getUni(){
//     try{
//         let res=await axios.get(url+country);
//         console.log(res.data[0].name);
//     }catch(err){
//         console.log(err);
//     }
// }

// let url="http://universities.hipolabs.com/search?name=";

// let list=document.querySelector("#list");
// let btnUni=document.querySelector("#btnUni");
// let inp=document.querySelector("input");

// btnUni.addEventListener("click",async ()=>{
//     let country=inp.value;
//     let res=await getUnis(country);
//     show(res);
// })

// function show(res){
//     for(col of res){
//         let li=document.createElement("li");
//         li.innerText=col.name;
//         list.appendChild(li);
//     }
// }

// async function getUnis(country){
//     try{
//         let uni=await axios.get(url+country);
//         return uni.data;
//     }catch(err){
//         console.log(err);
//         return "No university found"
//     }
// }
////also adding state

// let url="http://universities.hipolabs.com/search?name=";

// let list=document.querySelector("#list");
// let btnUni=document.querySelector("#btnUni");
// let inp=document.querySelector("input");
// let stateInp=document.querySelector("#state")

// btnUni.addEventListener("click",async ()=>{
//     let country=inp.value;
//     let state=stateInp.value
//     let res=await getUnis(country,state);
//     console.log(res);
//     show(res);
// })

// function show(res){
//     for(col of res){
//         let li=document.createElement("li");
//         li.innerText=col.name;
//         list.appendChild(li);
//     }
// }

// async function getUnis(country,state){
//     try{
//         let uni=await axios.get(url+country+"state-province"+state);
//         return uni.data;
//     }catch(err){
//         console.log(err);
//         return "No university found"
//     }
// }

let url="https://v2.jokeapi.dev/joke/Any?safe-mode";

let btn=document.querySelector("#btnJ");
let resJoke=document.querySelector("#resJoke");

btn.addEventListener("click",async ()=>{
    let joke=await getJokes();
    resJoke.innerText=joke;
})


async function getJokes(){
    try{
        let res=await axios.get(url);
        return "Setup: "+res.data.setup+"\nDelivery: "+res.data.delivery
    }catch(err){
        console.log(err);
    }
}