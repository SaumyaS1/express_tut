import express from 'express'
const app=express()


app.get('/',(req,res)=>{
    res.send("Home page")
})

app.get('/about',(req,res)=>{
    res.send1("about page")       //send1
})
app.get('/users',(req,res)=>{
    res.send("users page")
})

//error handling
app.use((err,req,res,next)=>{
    res.status(err.status || 500).send('try after some time')
})

app.listen(4000,()=>{
    console.log('server is running at port 4000');
})





