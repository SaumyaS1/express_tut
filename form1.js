import express from "express";
const app=express()

app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('home1')           // from views folder
})
app.get('/add-User',(req,res)=>{
    res.render('addUser')           // from views folder
})
app.post('/submit-user',(req,res)=>{
    console.log(req.body);
    res.render('submitUser',req.body)   
})
app.listen(3200,()=>{
    console.log("server is running on port 3200");
})