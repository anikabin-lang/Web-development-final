const mongoose=require("mongoose");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User = mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);

// const user1=new User({
//     name:"Adam",
//     email:"adam@yahoo.in",
//     age:48
// });
// const user2=new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48
// });

// user1.save();
// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com",age:50},
//     {name:"Peter", email:"peter@gmail.com",age:30},
//     {name:"Bruce", email:"bruce@gmail.com",age:47}
// ]).then((res)=>{
//     console.log(res);
// });

// User.find({})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.find({age:{$gt:47}})
// .then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOne({age:{$gt:47}})
// .then((res)=>{
//     console.log(res.name);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOne({_id:'6a7b48b73a0a4b721885e3ac'})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findById('6a7b48b73a0a4b721885e3ac')
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateOne({name:"Bruce"},{age:48})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// User.find({}).then((res)=>{console.log(res)});

// User.updateMany({age:{$gte:48}},{age:55})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// User.findOneAndUpdate({name:"Bruce"},{age:44},{new:true})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// User.deleteOne({name:"Bruce"})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// User.deleteMany({age:55})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});

// User.findByIdAndDelete("6a7c18822782ad07485af19f")
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});