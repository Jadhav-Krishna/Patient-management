const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.get("/",function(req,res){
    res.render("login")
})

app.get("/",function(req,res){
    
})
app.listen("3000",function(){
    console.log("hello")
})


 