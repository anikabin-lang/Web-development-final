////*** JSON DATA *****/
// let jsonRes='{"fact":"Female felines are superfecund","length":31}';
// console.log(jsonRes);
// let validRes= JSON.parse(jsonRes);
// console.log(validRes);

// let jsonFromJs=JSON.stringify(validRes)
// console.log(jsonFromJs);


////Sending api requests

let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 1=",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data 2=",data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// });
// console.log("hey");

async function getFacts(){
    try{
        let res=await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2=await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(err){
        console.log(err);
    }
    console.log(1);
}
getFacts();