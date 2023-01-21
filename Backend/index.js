const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require("mongoose");
const User=require("./db/User");
const Contact=require("./db/Contact");


app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/Info",(err)=>{
if(!err){
    console.log("connect")
}else{
    console.log(err)
}
})

app.post("/info",async(req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    resp.send(result);
})
app.post("/contact",async(req,resp)=>{
    let cont=new Contact(req.body);
    let result=await cont.save();
    resp.send(result);
})


app.listen(8080,()=>{
    console.log("on port 8080")
})