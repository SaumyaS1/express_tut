const express= require('express')
const app= express()

app.get("/",(req,res)=>{
    res.send(`<h1>express</h1>`)
})
app.get("/about",(req,res)=>{
    res.send(`<h1>about</h1>`)
})
app.listen(4000)