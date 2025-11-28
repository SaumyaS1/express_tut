import express from "express";
import { people } from "./data.js";
const app=express()

app.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
app.listen(5000,()=>{
    console.log("server is running at 5000")
})