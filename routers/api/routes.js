const express=require('express')
const router=express.Router()
const validation=require('../../verification')
const user=require('../../model/user')
const keys=require('../../config/keys')
const passport=require('passport')
const passport_jwt=require('passport-jwt')
const jsonwebtoken=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
var token

/**
 * @route post api/user/register
 * @desc Register the user
 * @access public
 */
router.post('/register',async(req,res)=>{
    //validating user credentials
    const {error}=validation(req.body)
    if(error)
   {    return res.status(400).send(error.details[0].message)
    }
    //checking for duplication of username and email
   const usernameexist=await user.findOne({username:req.body.username})
   if(usernameexist)
   {  return res.status(400).send("username already taken")}
   
   const emailexist=await user.findOne({email:req.body.email})
   if(emailexist)
   {return res.status(400).send("email already exist. Have you forget your password")}
    //checking for password and confirm password 
   if(req.body.password!=req.body.confirmpassword)
   {return res.status(400).send("password isn't confirming")}

   const salt=await bcrypt.genSalt(10)
   const hashpassword=await bcrypt.hash(req.body.password,salt)
   //submitting user info to database
   const newUser=new user({
       name:req.body.name,
       email:req.body.email,
       username:req.body.username,
       password:hashpassword
   })
   newUser.save().then(user=>{
       return res.status(201).send(user)
   })

})

/**
 * @route post api/user/login
 * @desc login the user
 * @access public
 */

 router.post('/login',async(req,res)=>{
    const currentuser= await user.findOne({username:req.body.username})
    if(!currentuser){
     return res.status(401).send("invalid username")
    }
   const passwordmatch=bcrypt.compare(currentuser.password,req.body.password)
   if(!passwordmatch)
   {
       res.status(401).send("Wrong password enter again")
   }
   var payload={
       name:currentuser.name,
       email:currentuser.email,
       username:currentuser.username,
       date:currentuser.date
   }
       token=jsonwebtoken.sign(payload,keys.secret,{expiresIn:168})
       res.status(200).json({
           sucess:true,
           token:`Bearer ${token}`,
           msg:"hurray we logged in..."
       })
 })

 /**
 * @route post api/user/
 * @desc login the user
 * @access private
 */
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res)=>{
})

module.exports=router
