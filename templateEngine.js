import { name } from "ejs";
import express from "express";
const app=express()

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    // res.send('home page')
    res.render('home.ejs',{name:"Satya" ,email:"ss@gmail.com"})
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})