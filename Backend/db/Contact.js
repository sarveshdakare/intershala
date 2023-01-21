const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
   email:String,
   PhoneNo:Number
   
});

module.exports=mongoose.model('contact',userSchema);