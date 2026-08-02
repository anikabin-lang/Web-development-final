const express=require("express");
const app=express();

// console.dir(app);

let port= 3000; //8080

app.listen(port,()=>{
    console.log("app is listening on port",port);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("Request received")
//     let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li></ul>";
//     res.send(code);
// });

app.get("/",(req,res)=>{
    res.send("hello, i am root");
});

// app.get("apple",(req,res)=>{
//     res.send("you contacted apple path");
// });
// app.get("orange",(req,res)=>{
//     res.send("you contacted orange path");
// });
// app.get("/*splat",(req,res)=>{
//     res.send("this path does not exist");
// });
// app.post("/",(req,res)=>{
//     res.send("You sent a post request to root");
// });

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    console.log(username,id)
    let code=`<h1>Welcome to the page of @${username}</h1>`
    res.send(code);
});

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("<h1>Nothing searched</h1>")
    }
    // console.log(req.query);
    res.send(`<h1>search results for query: ${q}</h1>`);
});