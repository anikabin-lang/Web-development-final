const express=require("express")
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError");

app.use(methodOverride("_method"));

const Chat=require("./models/chat.js");

main()
.then((res)=>{
    console.log("Connection successful")
})
.catch((err)=>{
    console.log(err)
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
// async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("root is working");
});

////Index Route
app.get("/chats",async (req,res,next)=>{
    try{
        let chats=await Chat.find()
        res.render("index.ejs",{chats})
    }catch(err){
        next(err);
    }
});

//New Route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"Page not found")
    res.render("new.ejs");
});

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{next(err)});
    }
}

//NEW - Show route for practicing error handling middlewares
app.get("/chats/:id",asyncWrap(async (req,res,next)=>{
        let{id}=req.params;
        let chat=await Chat.findById(id);
        if(!chat){
            next(new ExpressError(404,"Chat Not Found"));
        }
        res.render("edit.ejs",{chat}); 
}));


//create route
app.post("/chats",asyncWrap(async (req,res,next)=>{
        let {from,msg,to}=req.body;
        let newChat=new Chat({
            from:from,
            to:to,
            msg:msg,
            created_at:new Date()
        });
        await newChat.save()
        console.log(newChat);
        res.redirect("/chats");
}));

//edit route
app.get("/chats/:id/edit",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
        let chat=await Chat.findById(id);
        res.render("edit.ejs",{chat})
}));

//update route
app.patch("/chats/:id",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
        let {msg:newMsg}=req.body;
        await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true})
        res.redirect("/chats");
}));

app.delete("/chats/:id",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
        await Chat.findByIdAndDelete(id)
        res.redirect("/chats")
}));

const handleValidationError=(err)=>{
    console.log("This was a validation error");
    console.dir(err.message);
    return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError"){
        err= handleValidationError(err);
    }
    next(err);
});


//Error Handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Some Error Occured"}=err;
    res.status(status).send(message);
});

app.listen(port,()=>{
    console.log("app is listening on port",port);
});