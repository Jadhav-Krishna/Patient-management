// const express = require('express');
// const path = require('path');
// const data = require("./data");
// const patientdetails = require("./patientdetail")
// const fs = require('fs');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');


// app.get("/",function(req,res){
//     res.render("index")
// })
  

 
// app.get("/login",function(req,res){
//     res.render( "login" )
// })
// app.post("/logindetails", (req, res) => {
//     if(req.body.username === "krishna" && req.body.password === "Radha123"){
//         let golu = patientdetails.find((pval) => pval.id === Number(req.body.patientid));
//         if (golu) res.render("logedin", {golu});
//         else res.render("error");
//     }else{
//         console.error("error")
//     }
//   });

// app.get("/doctor",function(req,res){
//     res.render( "doctor" )
// })

// app.get("/doctorprofile", (req, res) => {
//     res.render("doctorprofile", { data });
//   });

// app.get("/doctorprofile/:userid", (req, res) => {
//     var user = data.find((val) => val.id === Number(req.params.userid));
//     if (user) res.render("user", { user });
//     else res.render("error");
//   });

// app.listen("3000",() => {
//     console.log("Server is now live....")
// })


 
 

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

 app.get("/",function(req,res){
    res.render("index")
 })

 app.listen("3000")