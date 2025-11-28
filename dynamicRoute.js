import express from 'express'
const app=express()

app.get('/',(req,res)=>{
    const users=['saumya','anil','anu','anya']
    let data=`<ul>`         // bullet list
    for (let i=0;i<users.length;i++){
        data+=`<li><a href="user/${users[i]}">${users[i]}</a></li>`          //link create
        console.log(users[i])
    }
    data+=`</ul>`   
    res.send(data)
})
app.get('/user/:name',(req,res)=>{          // /user/:id                 //dynamic route

    console.log(req.params.name)
    const userName=req.params.name         //req.params.id

    res.send(`this is profile ${userName} page`)
})
app.listen(4800,()=>{
    console.log('server is running at port 4800');
})



// import express from 'express'
// const app= express()
// app.get('/',(req,res)=>{

//     const users=['Aa','Bb','Cc','Dd']  //array

//     let data=`<ul>`     

//     for(let i=0;i<users.length;i++){
//         data+=`<li><a href="user/${users[i]}">${users[i]}</a></li>`
//         console.log(users[i])
//     }
//     data+=`</ul>`
//     res.send(data)
// })
// app.get('/user/:name',(req,res)=>{
//     const userName=req.params.name
//     res.send(`${userName}`)
// })
// app.listen(3200)
