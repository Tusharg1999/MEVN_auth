const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
    {
        name:{
            required:true,
            type:String, 
        },
        password:{
            required:true,
            type:String, 
        },
        username:{
            required:true,
            type:String, 
        },
        email:{
            required:true,
            type:String, 
        },
        date:{
            type:Date,
            default:Date.now 
        }
    }
)
const user=mongoose.model('users',userSchema)
module.exports=user