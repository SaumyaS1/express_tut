import express from 'express'
import userData from "./users.json" with {type:'json'}
const app=express()
app.get('/',(req,res)=>{
    console.log(userData)
    res.json(userData)
})
app.get('/user/:id',(req,res)=>{
    const id=Number(req.params.id)
    const filterData = userData.find(u => u.id === id)
    res.json(filterData)
    console.log(filterData)
})
app.listen(3200,()=>{
    console.log("server is running at port 3200")
})
