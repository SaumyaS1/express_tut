//external middleware --> morgan
import express from 'express'
import morgan from 'morgan'
const app=express()

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.get('/login',(req,res)=>{
    res.send1("login page")
})
app.post('/submit',(req,res)=>{
    res.send("page submitted")
})
app.get('/wait',(req,res)=>{
    setTimeout(()=>{
        res.send('this willrun after 1 s')
    },1000)
})

//error handling
app.use((err,req,res,next)=>{
    res.status(err.status || 500).send('try after some time')
})

app.listen(3200,()=>{
    console.log('server is running at port 3200');
})







// import morgan from 'morgan'
// app.use(morgan('dev'))