import express from "express";
import { products } from "./data.js";
const app=express()
app.get('/',(req,res)=>{
    res.json(products)
})
app.get('/prod/:id',(req,res)=>{
    const id=Number(req.params.id)
    const productData=products.find(u=>u.id===id)
    console.log(productData)
    // res.json(productData)

    if(!productData){
        return res.status(404).send("product doesn't exist")
    }

    return res.json(productData)
})
// app.get('/prod/:id/reviews/:reviewID',(reqq,res)=>{
//     console.log(reqq.params);
//     res.send("hello world")
// })

// app.get('/api/v1/query',(req,res)=>{
//     console.log(req.query);
//     res.send('help')
// })

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})