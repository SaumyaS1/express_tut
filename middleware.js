import express from 'express'
const app=express()

//middleware
// app.use((req,res,next)=>{
//     console.log(req.url);
//     next()
    
// })

function ageCheck(req,res,next){
    if(!req.query.age || req.query.age<18){
        res.send("Access denied")
}else {
    next()
}
}
app.use(ageCheck)

app.get('/',(req,res)=>{
    res.send('home page');
})
app.get('/users',(req,res)=>{
    res.send('user page');
})
app.get('/about',(req,res)=>{
    res.send('about page');
})




app.listen(4200,()=>{
   console.log('server is running at port 4200');
})