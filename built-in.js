//built-in middleware
import express from 'express'
const app=express()

//built-in middleware
app.use(express.urlencoded({ extended:false }))  //parsing the body

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.get('/login',(req,res)=>{
    res.send(`
        <form action="/submit" method="post">
        <input type="text" name="email" id="">
        <br><br>
        <input type="text" name="password" id="">
        <br><br>
        <button>submit</button>
    </form>
        `)
})
app.post('/submit',(req,res)=>{
    console.log(req.body)  // <-- Now this will work!
    res.send("page submitted")
})

app.listen(3200,()=>{
    console.log('server is running at port 3200');
})