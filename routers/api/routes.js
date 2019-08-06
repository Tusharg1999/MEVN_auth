const express=require('express')
const router=express.Router()
const {registervalidation}=require('../../verification')
const user=require('../../model/user')
const passport=require('passport')
const passport_jwt=require('passport-jwt')
const jsonwebtoken=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


/**
 * @route post api/user/post
 * @desc Register the user
 * @access public
 */
router.get('/register',(req,res)=>{
    res.send('hi')
})

module.exports=router
