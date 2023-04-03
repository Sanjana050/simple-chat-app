const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

app.use('/login',(req,res,next)=>{
    
    res.send('<form action="/" method="POST"><input type="text" name="user" id="user"><button type="submit">LOGIN</button></form>')
})



app.post("/",(req,res,next)=>{
    
    console.log(req.body);
    res.redirect('/message');

})

app.use('/message',(req,res,next)=>{
    if(req.body.message!="")
    console.log(req.body);
    res.send('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
})

app.listen(80);