import express from 'express'
import  path  from 'path'            //import path module
const app=express();
// commom!
const absPath=path.resolve('html')   //folder name

const publicPath=path.resolve('public')    // public/css/style.css 
app.use(express.static(publicPath))   // for css


app.get('/',(req,res)=>{
    // const absPath=path.resolve('html/login.html')       //path for html file
    // res.sendFile(absPath)
    res.sendFile(absPath+'/home.html')
})
app.get('/login',(req,res)=>{

    res.sendFile(absPath+'/login.html')
})
app.post('/submit',(req,res)=>{
    // const absPath=path.resolve('html/submit.html')
    res.sendFile(absPath+'/submit.html')
})
app.use((req,res)=>{
    // const absPath=path.resolve('html/404.html')       //404 page app.use
    res.status(404).sendFile(absPath+'/404.html')
})
app.listen(4800,()=>{
    console.log('server is running at port 4800')
})