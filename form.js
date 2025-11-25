import express from 'express'
import login from './pages/login.js';
const app=express();

app.get('/',(req,res)=>{
    res.send(login())            // this is login.js file
})
app.post('/submit',(req,res)=>{
    res.send(`<h1>submitted</h1>`)
})
app.listen(4200,()=>{
    console.log('server is running')
})