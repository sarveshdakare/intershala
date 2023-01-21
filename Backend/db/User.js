const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    companyname:String,
    position:String,
    DateOfJoining:String,
    DateOfResign:String,
    skill:String,
    Experience:String
   
});

module.exports=mongoose.model('Information',userSchema);