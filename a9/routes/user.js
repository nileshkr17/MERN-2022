//user.js api
const express = require('express');
const bcrypt = require('bcryptjs');

const { User } = require('../models/User');

const jwt = require('jsonwebtoken')
const router = express.Router()


router.post('/add',async(req,res)=>{
    try {
        let {fullName,email,password} = req.body
        /*generate password hash*/
        const salt = await bcrypt.genSalt(10);//length of the password
        password = await bcrypt.hash(password,salt)
        let user = new User({fullName,email,password})
        let data= await user.save()
        return res.status(200).json({
            message:`User Saved successfully`,
            data
        })
        
    } catch (err) {
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
        
    }

})


router.post ('/login',async(req,res)=>{
    try {
        const {email,password}= req.body
        console.log(email,password)
        let user = await User.findOne({email:email})
        if(user){
            let verifyUser = await bcrypt.compare(password,user.password)
            if(verifyUser){
                let payload={
                    user:{
                        id:user._id,
                        name:user.fullName
                    }
                }
                let token= jwt.sign(payload,'siliconMERNCourse',{expiresIn:3600})//secret key,after one hour new authorization/token is needed to be generated, for security purpose like net banking
                res.status(200).json({
                    message:`Logged In`,
                    user:{user_id:user._id,email:user.email},
                    token
                })
            }
            else{
                res.status(401).json({
                    message:"Wrong Username/Password"
                })
            }
        }else{
            res.status(401).json({
                message:"Wrong Username/Password"
            })
        }

    } catch (err) {
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

module.exports=router