const express=require("express");
const app=express();

const port=8080;

const path=require("path");

const {v4:uuidv4}=require("uuid");

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const methodOverride=require("method-override");
app.use(methodOverride("_method"));

let tweets=[
    {
        id:uuidv4(),
        username:"anikajain",
        content:"my favourite singer is sabrina"
    },
    {
        id:uuidv4(),
        username:"avikajain",
        content:"today was a fun day!!"
    },
    {
        id:uuidv4(),
        username:"krishjagya",
        content:"today's latent episode was so dayum good"
    },
];

app.get("/tweets",(req,res)=>{
    res.render("index.ejs",{tweets});
});

app.get("/tweets/new",(req,res)=>{
    res.render("new.ejs")
});

app.post("/tweets/new",(req,res)=>{
    let id=uuidv4();
    let {username,content}=req.body;
    tweets.push({username,content,id});
    res.redirect("/tweets")
});


app.get("/tweets/:id",(req,res)=>{
    let {id}=req.params;
    let tweet=tweets.find((t)=>t.id===id);
    res.render("show.ejs",{tweet});
});


app.patch("/tweets/:id/edit",(req,res)=>{
    let {id}=req.params;
    let tweet=tweets.find((t)=>t.id===id);
    tweet.content=req.body.content;
    console.log(tweet);
    res.redirect("/tweets");
});

app.get("/tweets/:id/edit",(req,res)=>{
    let {id}=req.params;
    let tweet=tweets.find((t)=>t.id===id);
    res.render("edit.ejs",{tweet});
});

app.delete("/tweets/:id",(req,res)=>{
    let {id}=req.params;
    tweets=tweets.filter((t)=>t.id!==id);
    res.redirect("/tweets")
});


app.listen(port,()=>{
    console.log("listning on port",port)
});

