const {faker} = require('@faker-js/faker');
const mysql= require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");

const {v4:uuidv4}=require("uuid");

app.use(methodOverride("_method"))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port=8080;

const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'delta_app',
    password:'Anika12112006'
});

let getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ]
}

// let q= "SHOW TABLES";

// try{
//     connection.query(q,(err,result)=>{
//     if (err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
//     })
// }catch(err){
//     console.log(err);
// }

////Inserting new data

// let q2= "INSERT INTO user (id,username,email,password) VALUES ?";

// let users=[["123","123_newuser","abc@gmail.com","abc"],
// ["123b","123_newuserb","abc@gmail.comb","abcb"]
// ,["123c","123_newuserc","abc@gmail.comc","abcc"],
// ["123d","123_newuserd","abc@gmail.comd","abcd"]];

// try{
//     connection.query(q2,[users],(err,result)=>{
//     if (err) throw err;
//     console.log(result);
//     })
// }catch(err){
//     console.log(err);
// }

////Inserting data in bulk

// let data=[];
// for(let i=0;i<100;i++){
//   data.push(getRandomUser()); //100 fake users
// }

// try{
//   connection.query(q2,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   })
// }catch(err){
//   console.log(err);
// }

//Home route
app.get("/",(req,res)=>{
  let q = `SELECT count(*) FROM user`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    })
  }catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
});

//show route
app.get("/user",(req,res)=>{
  let q = 'SELECT * FROM user';
    try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
      res.render("showusers.ejs",{users})
    })
  }catch(err){
    console.log(err);
    res.send("Some error in DB");
  }

});

//edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params
  let q= `SELECT * FROM user WHERE id='${id}'`
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user})
    });
  }catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
});

//UPDATE (DB)
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params
  let {password:formPass, username : newUsername}= req.body;
  let q= `SELECT * FROM user WHERE id='${id}'`
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      if(formPass!=user.password){
        res.send("Wrong password");
      }else{
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`
        connection.query(q2,(err,result)=>{
          try{
            if (err) throw err;
            console.log(res);
            res.redirect("/user"); 
          }catch(err){
            res.send("Some error in DB"); 
            console.log(err)
          }
        });
      }
      
    });
  }catch(err){
    console.log(err);
    res.send("Some error in DB");
  }
});

app.get("/user/new",(req,res)=>{
  res.render("new.ejs");
});

app.post("/user/new",(req,res)=>{
  let {username,email,password} = req.body;
  let id=uuidv4();
  let q = `INSERT INTO user (id,username,email,password) VALUES ('${id}','${username}','${email}','${password}')`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  }catch(err){
    res.send("some error in DB");
    console.log(err); 
  }
});

app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
          if(err) throw err;
          let user=result[0];
          console.log(user);
          res.render("delete.ejs",{user});
        });
    }catch(err){
      res.render("some error in DB");
      console.log(err);
    }
});

app.delete("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  let {email:userEmail,password:userPass}=req.body;
      try{
        connection.query(q,(err,result)=>{
          if(err) throw err;
          let user=result[0];
          if(user.email==userEmail){
            if(userPass==user.password){
              let q=`DELETE FROM user WHERE id='${id}'`;
              try{
                connection.query(q,(err,result)=>{
                  if(err) throw err;
                  res.redirect("/user");
                })
              }catch(err){
                console.log(err);
                res.render("some error in db")
              }
            }else{
              res.render("Incorrect password")
            }
          }else{
            res.render("Incorrect email id")
          }
        });
    }catch(err){
      res.render("some error in DB");
      console.log(err);
    }
})

app.listen(port,()=>{
  console.log("listening on",port);
});
