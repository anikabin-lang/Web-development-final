const mongoose=require("mongoose");

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

let allChats=[
    {
        from:"neha",
        to:"preeti",
        msg:"send me notes for the exam",
        created_at:new Date()
    },
    {
        from:"rohit",
        to:"mohit",
        msg:"teach me JS callbacks",
        created_at:new Date()
    },
    {
        from:"anitas",
        to:"ramesh",
        msg:"bring me fruits",
        created_at:new Date()
    },
    {
        from:"tony",
        to:"peter",
        msg:"i love you 3000",
        created_at:new Date()
    },
    {
        from:"mahi",
        to:"sonali",
        msg:"good morning",
        created_at:new Date()
    },
    {
        from:"sonu",
        to:"monu",
        msg:"see you tonight!",
        created_at:new Date()
    },
];

Chat.insertMany(allChats)
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)});