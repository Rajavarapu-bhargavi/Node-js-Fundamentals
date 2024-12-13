const express=require("express");
const app=express();
app.get('/',function(req,res){
    res.send("Hello guys");
})
app.get('/bhargavi',function(req,res){
    res.send("Welcome Bhargavi");
})
app.get('/bhargavi/:id',function(req,res){
    const id=req.params.id;
    res.send("Hello bhargavi"+id);
})
app.listen(8080,function(req,res){
    console.log("Running");
})