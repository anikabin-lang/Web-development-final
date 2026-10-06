const mongoose=require("mongoose");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:25
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:[1,"Price is too low for amazon selling"]
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:{
        type:[String]
    }
});

const Book = mongoose.model("Book",bookSchema);

// let book1=new Book({
//     title:"Mathematics XII",
//     author:"RD Sharma",
//     price:1200
// });

// book1
// .save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });

// let book2=new Book({
//     title:"How to kill a Mockingbird",
//     author:"Harper Lee",
//     price:"299"
// });

// book2
// .save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });

// let book3=new Book({
//     title:"Gone Girl",
//     price:"399"
// });

// book3
// .save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });

// let book4=new Book({
//     title:"Marvel Comics v2",
//     price:600,
//     genre:["comics","superheroes","fiction"]
// });

// book4
// .save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });

Book.findByIdAndUpdate('6a7ca4f81ba11fbb1871da9d',{price:-500},{runValidators:true})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.errors.price.properties.message)
});
 