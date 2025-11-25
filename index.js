// const express= require('express')           // common JS
import express from 'express'                  //ES6 module
import home from './pages/home.js'             //export the path of pages 
import about from './pages/about.js'
const app= express()

app.get("/",(req,res)=>{
    res.send(home())
})
app.get("/about",(req,res)=>{
    res.send(about())
})
app.listen(4000)