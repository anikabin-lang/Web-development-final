const express =require("express");
const app=express();
const ExpressError=require("./ExpressError")
//midlleware -> response send

// app.use((req,res,next)=>{
//     console.log("Hi, i am 1st middleware");
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("Hi, i am 2nd middleware");
//     next();
// });

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

app.use("/random",(req,res,next)=>{
    console.log("I am only for random");
    next();
});

const checkToken=((req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }else{
        throw new ExpressError(401,"ACCESS DENIED!") 
    }
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});


app.get("/api",checkToken,(req,res)=>{
    res.send("data"); 
}); 

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access is forbidden");
});

app.use((err,req,res,next)=>{
    let {status=500,message="Some error"}=err;
    res.status(status).send(message);
});

// app.use((err,req,res,next)=>{
//     console.log("--------ERROR1-----------");
//     res.send(err);
// });
// app.use((err,req,res,next)=>{
//     console.log("--------ERROR2-----------");
//     next(err);
// });

app.get("/",(req,res)=>{
    res.send("Hi i am root");
});
app.get("/random",(req,res)=>{
    res.send("This is a random page");
});

//404
app.use((req,res)=>{
    res.status(404).send("Page not found"); 
});

app.listen(8080,()=>{
    console.log("listening on port 8080");
});