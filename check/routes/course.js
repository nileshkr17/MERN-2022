const express = require('express');
const fs = require('fs');
const { v4: uuid_v4 } = require('uuid');
uuid_v4();
const {Cart} = require('../Cart')
const router = express.Router();


router.get('/',(req,res)=>{
    try{
        console.log(__dirname);
        const filearray = fs.readdirSync(__dirname);
        console.log(filearray);
        let prodcutItem = [];
        let message = '';
        if(filearray.includes('cart.json'))
          prodcutItems = JSON.parse(fs.readFileSync('cart.json'));
        if(prodcutItems.length > 0) 
              message = 'prodcutItem fetched successfully';
        else
              message = 'No prodcutItem found';      
        return res.status(200).json({
          message:message,
          prodcutItem
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

router.post("/addItem",(req,res)=>{
    try{
        const filearray = fs.readdirSync(__dirname);
        let prodcutItem = [];
        let error = '';
        if(filearray.includes('cart.json'))
            prodcutItem = JSON.parse(fs.readFileSync('cart.json'));
        const { prodcutName, productPrice, productDesc, productDateOfPurchase } = req.body;
        if(prodcutName=='' && error == ''){
            error="Missing Course Name";
            res.status(400).json({
                message:error
            })
        }
        if(productPrice=='' && error == ''){
            error="Missing Course Price"
            res.status(400).json({
                message:error
            })
        }
        const course = new Course(uuid_v4(),prodcutName,productPrice,productDesc,productDateOfPurchase);
        prodcutItem = [...prodcutItem,course];

        fs.writeFile('cart.json',JSON.stringify(prodcutItem),(err)=>{
            if(err)
                 res.status(500).json({
                    message:'Something wrong while writing',
                    error:err 
                })
            res.status(200).json({
                message:"Course saved successfully",
                course
            })
        })
    
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})
 module.exports = router